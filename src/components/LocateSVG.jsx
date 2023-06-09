import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

function LocateSVG(props) {
  const updateLocation = props.updateLocation; //get callback funciton to update location
  const updateFaves = props.updateFaves;

  console.log("updateLocation", updateLocation);
  const apiURL = "https://ipgeolocation.abstractapi.com/v1/";
  const apiKey = "df635717a4374cf28b49705a8fc81e86";
  // const navigator = useNavigate();

  const getUserLocationFromIP = async () => {
    const fullURL = apiURL + "?api_key=" + apiKey;
    try {
      console.log("getting location from IP " + fullURL);
      const response = await (await fetch(fullURL)).json(); //get data and convert JSON to an Object
      const newLatLong = {
        latitude: response.latitude,
        longitude: response.longitude,
      };
      // console.log("LatLongFromIP", newLatLong);
      updateLocation(newLatLong);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex h-12 items-center  justify-between">
        <br />
        <input
          type="image"
          title="Show Favourite Stores"
          src="https:/realtor.ca/images/common/icons/svg/heart.svg"
          style={{ height: 30, width: 30 }}
          onClick={() => {
            console.log("calling updateFaves");
            updateFaves();
          }}
        />

        <button
          type="button"
          title="Use IP to Show Closest Stores"
          className="btn btn-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            width="30"
            height="30"
            fill="currentColor"
            className="iconButton"
            onClick={() => {
              getUserLocationFromIP();
            }}
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
          </svg>
        </button>

        <button
          type="button"
          title="Use Nav to Show Closest Stores"
          className="btn btn-secondary"
          onClick={() => {
            navigator.geolocation.getCurrentPosition(function (position) {
              const newLatLong = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              };
              // console.log("LatLongFromNav", newLatLong);
              updateLocation(newLatLong);
            });
          }}
          color="rebeccapurple"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            width="30"
            height="30"
            fill="currentColor"
            className="iconButton"
            // onClick={() => {
            //   getUserLocationFromIP();
            // }}
          >
            <path d="M46 22h-4.12A18 18 0 0 0 26 6.12V2a2 2 0 0 0-4 0v4.12A18 18 0 0 0 6.12 22H2a2 2 0 0 0 0 4h4.12A18 18 0 0 0 22 41.88V46a2 2 0 0 0 4 0v-4.12A18 18 0 0 0 41.88 26H46a2 2 0 0 0 0-4zM24 38a14 14 0 1 1 14-14 14 14 0 0 1-14 14z"></path>
            <circle cx="15" cy="15" r="1"></circle>
          </svg>
        </button>
        <div> </div>
      </div>
    </div>
  );
}

export default LocateSVG;
