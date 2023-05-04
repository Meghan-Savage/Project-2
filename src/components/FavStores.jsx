import React, { useState, useEffect, input, cloneElement } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { data } from "autoprefixer";

const FavStores = () => {
  const [favouriteStores, setFavouriteStores] = useState([]);

  useEffect(() => {
    async function getFavouriteStores() {
      const results = await axios.get(`http://localhost:3000/store`);

      if (results != undefined) {
        // console.log("results.data", results.data);
        //add retailer to each store list so we can reference it later

        // todo - map these elements to a standard store schema object??
        //for now I have decided to access live store data from grocerytracker the same as we do for Products
        return results.data;
      }
    }

    async function fetchData() {
      try {
        //todo - get favourite stores from our MongoDB
        const faves = await getFavouriteStores();
        console.log("FavouriteStores", faves);
        setFavouriteStores(faves);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  async function removeFromFavourites(aStore) {
    console.log("Store To Delete from Favourites", aStore);
    //remove from database
    const response = await axios.delete(
      `http://localhost:3000/store/${aStore._id}`
    );
    //remove the store from the list amdf trigger a refresh
    setFavouriteStores(favouriteStores.filter((item) => item !== aStore));
  }

  function Store({ store }) {
    return (
      <div className="h-60">
        <h1> {store.name} </h1>
        {/* <p>{store.retailer}</p> */}
        <p>{store.address}</p>
        <p>{store.latitude}</p>
        <p>{store.longitude}</p>
        <button
          className="w-full m-2 text-white bg-green-900 hover:bg-lime-600 block"
          type="submit"
          onClick={() => {
            removeFromFavourites(store);
          }}
        >
          Remove From Favorites
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-row flex-wrap justify-left">
        <h1>
          <b>Favourite Stores</b>{" "}
        </h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {console.log("faveStoreListData", favouriteStores)}

        <br />
        {favouriteStores.map((store) => {
          return (
            <div key={store.storeKey} className="m-4 w-60">
              <Store store={store} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FavStores;
