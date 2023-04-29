import React, { useState, useEffect, input, cloneElement } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { data } from "autoprefixer";

const FavStores = () => {
  const [faveStoreListData, setFaveStoreListData] = useState([]);
  const navigate = useNavigate();
  const retailers = [
    "nofrills", //has name, geopoint.latitude/longitude, address.formattedAddress
    "saveon", //has siteId (GUID)
    "loblaw", //same as nofrills
    "wholesaleclub", //same as nofrills
    // "voila", //address.geoPoint is only option - but only 2 stores
    "coop", //has id (GUID)
    "walmart", //id, geoPoint, address.address1
    "superstore", //id, geoPoint, address.line1
    //we will not include these for now as they are not local to Alberta
    // "provigo",
    // "maxi",
    // "valumart",
    // "zehrs",
    // "rass",
    // "fortinos",
  ];

  useEffect(() => {
    async function ensureStoresAreUnique(stores) {
      const uniqueItems = [];
      stores.forEach((item) => {
        if (
          !uniqueItems.some(
            (uniqueItem) => uniqueItem.storekey == item.storekey
          )
        ) {
          uniqueItems.push(item);
        }
      });
      // console.log("uniqueItems", uniqueItems);
      return uniqueItems;
    }

    //not sure which one of these methods is best
    // async function ensureStoresAreUnique(stores) {
    //   var resArr = [];
    //   stores.filter(function (item) {
    //     var i = resArr.findIndex((x) => x.storekey == item.storekey);
    //     if (i <= -1) {
    //       resArr.push(item);
    //     }
    //     return null;
    //   });
    //   return resArr;
    // }

    async function getStoresForRetailer(retailer) {
      const results = await axios.get(
        `https://grocerytracker.ca/api/stores/${retailer}`
      );

      if (results != undefined) {
        // console.log("results.data", results.data);
        //add retailer to each store list so we can reference it later

        // todo - map these elements to a standard store schema object
        results.data.forEach((element) => {
          element.retailer = retailer;
          element.storekey = getStoreKey(element);
        });
        return results.data;
      }
    }

    async function fetchData() {
      try {
        let stores = [];
        //todo - get favourite stores from our MongoDB

        //get stores for each retailer
        const nofrills = await getStoresForRetailer("nofrills");
        console.log("nofrills", nofrills);
        const saveon = await getStoresForRetailer("saveon");
        const loblaw = await getStoresForRetailer("loblaw");
        const wholesaleclub = await getStoresForRetailer("wholesaleclub");
        const coop = await getStoresForRetailer("coop");
        const walmart = await getStoresForRetailer("walmart");
        const superstore = await getStoresForRetailer("superstore");
        stores = await ensureStoresAreUnique(
          stores.concat(
            nofrills,
            saveon,
            loblaw,
            wholesaleclub,
            coop,
            walmart,
            superstore
          )
        );

        console.log("stores", stores);
        //todo - only want top 4 or 5 closest stores listed with favorites first

        setFaveStoreListData(stores);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  function getStoreKey(store) {
    // "nofrills",  //has name, geopoint.latitude/longitude, address.formattedAddress
    // "saveon",  //has siteId (GUID)
    // "loblaw",  //same as nofrills
    // "wholesaleclub", //same as nofrills
    // "voila", //address.geoPoint is only option
    // "coop",  //has id (GUID)
    // "walmart", //id, geoPoint, address.address1
    // "superstore", //id, geoPoint, address.line1

    switch (store.retailer) {
      case "nofrills": //dupes - 3947Craig's NOFRILLS Leduc, 3995Jeb's NOFRILLS Beaumont, 3945Chris' NOFRILLS Fort Saskatchewan
        //as storeBannerId, name, address.formattedAddress   -- storeId is not unique if owned by same person
        return store.retailer + store.storeId + store.name;

      case "saveon":
        return store.retailer + store.siteId + store.addressLine1;

      case "loblaw":
        return store.retailer + store.storeId + store.name;

      case "wholesaleclub":
        return store.retailer + store.storeId + store.name;

      case "voila": //only 2 records in the database!
        return (
          store.retailer +
          String(store.geoPoint.Latitude) +
          " " +
          String(store.geoPoint.Latitude)
        );

      case "coop":
        return store.retailer + store.id;

      case "walmart":
        return store.retailer + store.id;

      case "superstore": //dupes ec1b18a0-1634-4368-82ce-22f1e891f3cb with store.id
        return (
          store.retailer +
          String(store.geoPoint.Latitude) +
          " " +
          String(store.geoPoint.Latitude)
        );

      default:
        throw new Error("unknown retailer of " + store.retailer);
    }
  }

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {console.log("faveStoreListData", faveStoreListData)}
      {faveStoreListData.map((store) => {
        return (
          <div key={getStoreKey(store)} className="m-4 w-60">
            <div>
              <h1> {store.name} </h1>
              <p>{store.storeBannerName}</p>
              <p>{store.address.formattedAddress}</p>
              <p>{store.geoPoint.latitude}</p>
              <p>{store.geoPoint.longitude}</p>
            </div>
            <div>
              <button
                className="w-full m-2 text-white bg-green-900 hover:bg-lime-600 block"
                type="submit"
              >
                Add To Favorites
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FavStores;
