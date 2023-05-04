import React, { useState, useEffect, input, cloneElement } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { data } from "autoprefixer";
import haversine from "haversine";

const closestStores = (props) => {
  const userLocation = props.userLocation;
  console.log("userLocation", userLocation);

  const [closestStores, setClosestStores] = useState([]);
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
            (uniqueItem) => uniqueItem.storeKey == item.storeKey
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
          element.storeKey = getStoreKey(element);
          if (element.isFavourite == undefined) {
            element.favourite = false;
          }
        });
        return results.data;
      }
    }

    async function fetchData() {
      try {
        //get stores for each retailer
        const nofrills = await getStoresForRetailer("nofrills");
        console.log("nofrills", nofrills);
        const saveon = await getStoresForRetailer("saveon");
        const loblaw = await getStoresForRetailer("loblaw");
        const wholesaleclub = await getStoresForRetailer("wholesaleclub");
        const coop = await getStoresForRetailer("coop");
        const walmart = await getStoresForRetailer("walmart");
        const superstore = await getStoresForRetailer("superstore");
        let stores = [];
        stores = stores.concat(
          nofrills,
          saveon,
          loblaw,
          wholesaleclub,
          coop,
          walmart,
          superstore
        );

        stores = await ensureStoresAreUnique(stores);
        stores.sort(function (a, b) {
          return a.distanceFromUser - b.distanceFromUser;
        });
        console.log("stores sorted by distance", stores);

        //return 5 closest stores
        setClosestStores(stores.slice(0, 5));
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  function getStoreKey(aStore) {
    // "nofrills",  //has name, geopoint.latitude/longitude, address.formattedAddress
    // "saveon",  //has siteId (GUID)
    // "loblaw",  //same as nofrills
    // "wholesaleclub", //same as nofrills
    // "voila", //address.geoPoint is only option
    // "coop",  //has id (GUID)
    // "walmart", //id, geoPoint, address.address1
    // "superstore", //id, geoPoint, address.line1

    switch (aStore.retailer) {
      case "nofrills":
      case "loblaw":
      case "saveon":
      case "wholesaleclub": //dupes - 3947Craig's NOFRILLS Leduc, 3995Jeb's NOFRILLS Beaumont, 3945Chris' NOFRILLS Fort Saskatchewan
        aStore.distanceFromUser = haversine(userLocation, aStore.geoPoint, {
          unit: "meter",
        });
        console.log(aStore.distanceFromUser);

        //has storeBannerId, name, address.formattedAddress   -- storeId is not unique if owned by same person
        return aStore.retailer + aStore.storeId + aStore.name;

      // case "saveon":
      //   return aStore.retailer + aStore.siteId + aStore.addressLine1;

      // case "loblaw":
      //   return aStore.retailer + aStore.storeId + aStore.name;

      // case "wholesaleclub":
      //   return aStore.retailer + aStore.storeId + aStore.name;

      case "voila": //only 2 records in the database!
        aStore.distanceFromUser = console.log(
          haversine(userLocation, aStore.geoPoint, { unit: "meter" })
        );
        return (
          aStore.retailer +
          String(aStore.geoPoint.Latitude) +
          " " +
          String(aStore.geoPoint.Latitude)
        );

      case "coop":
        aStore.distanceFromUser = console.log(
          haversine(userLocation, aStore.geoPoint, { unit: "meter" })
        );
        return aStore.retailer + aStore.id;

      case "walmart":
        aStore.distanceFromUser = console.log(
          haversine(userLocation, aStore.geoPoint, { unit: "meter" })
        );
        return aStore.retailer + aStore.id;

      case "superstore": //dupes ec1b18a0-1634-4368-82ce-22f1e891f3cb with store.id
        aStore.distanceFromUser = console.log(
          haversine(userLocation, aStore.geoPoint, { unit: "meter" })
        );
        return (
          aStore.retailer +
          String(aStore.geoPoint.Latitude) +
          " " +
          String(aStore.geoPoint.Latitude)
        );

      default:
        throw new Error("unknown retailer of " + aStore.retailer);
    }
  }

  async function saveStoreToFaves(aStore) {
    //create a post to our endpoint to save the store as a favourite

    // "nofrills",  //has name, geopoint.latitude/longitude, address.formattedAddress
    // "saveon",  //has siteId (GUID)
    // "loblaw",  //same as nofrills
    // "wholesaleclub", //same as nofrills
    // "voila", //address.geoPoint is only option
    // "coop",  //has id (GUID)
    // "walmart", //id, geoPoint, address.address1
    // "superstore", //id, geoPoint, address.line1

    console.log("aStore", aStore);
    let newStore = {};
    switch (aStore.retailer) {
      case "nofrills":
      case "loblaw":
      case "saveon":
      case "wholesaleclub": //dupes - 3947Craig's NOFRILLS Leduc, 3995Jeb's NOFRILLS Beaumont, 3945Chris' NOFRILLS Fort Saskatchewan
        newStore.name = aStore.name;
        newStore.retailer = aStore.retailer;
        newStore.storeKey = aStore.storeKey;
        newStore.address = aStore.address.formattedAddress;
        newStore.latitude = aStore.geoPoint.latitude;
        newStore.longitude = aStore.geoPoint.longitude;

        console.log("newStore", newStore);
        const response = await axios.post(
          "http://localhost:3000/store",
          newStore
        );

        break;

      case "voila": //only 2 records in the database!
        break;

      case "coop":
        newStore.name = aStore.name;
        newStore.retailer = aStore.retailer;
        newStore.storeKey = aStore.storeKey;
        newStore.address = aStore.address.formattedAddress;
        newStore.latitude = aStore.geoPoint.latitude;
        newStore.longitude = aStore.geoPoint.longitude;
        console.log("newStore", newStore);
        const response1 = await axios.post(
          "http://localhost:3000/store",
          newStore
        );
        break;

      case "walmart":
        newStore.name = aStore.name;
        newStore.retailer = aStore.retailer;
        newStore.storeKey = aStore.storeKey;
        newStore.address = aStore.address.formattedAddress;
        newStore.latitude = aStore.geoPoint.latitude;
        newStore.longitude = aStore.geoPoint.longitude;
        console.log("newStore", newStore);
        const response2 = await axios.post(
          "http://localhost:3000/store",
          newStore
        );
        break;

      case "superstore": //dupes ec1b18a0-1634-4368-82ce-22f1e891f3cb with store.id
        newStore.name = aStore.name;
        newStore.retailer = aStore.retailer;
        newStore.storeKey = aStore.storeKey;
        newStore.address = aStore.address.formattedAddress;
        newStore.latitude = aStore.geoPoint.latitude;
        newStore.longitude = aStore.geoPoint.longitude;
        console.log("newStore", newStore);
        const response3 = await axios.post(
          "http://localhost:3000/store",
          newStore
        );
        break;

      default:
        throw new Error("unknown retailer of " + aStore.retailer);
    }
  }

  function Store({ store }) {
    return (
      <>
        <h1> {store.name} </h1>
        <p>{store.storeBannerName}</p>
        <p>{store.address.formattedAddress}</p>
        <p>{store.geoPoint.latitude}</p>
        <p>{store.geoPoint.longitude}</p>
        <button
          className="w-full m-2 text-white bg-green-900 hover:bg-lime-600 block"
          type="submit"
          onClick={() => {
            saveStoreToFaves(store);
          }}
        >
          Add To Favorites
        </button>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-row flex-wrap justify-left">
        <h1>
          <b>Closest Stores</b>{" "}
        </h1>
      </div>
      <div className="flex flex-row flex-wrap justify-left">
        {console.log("ClosestStores", closestStores)}
        {closestStores.map((store) => {
          return (
            <div key={store.storeKey} className="m-4 w-60">
              <Store store={store} />
              <div></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default closestStores;
