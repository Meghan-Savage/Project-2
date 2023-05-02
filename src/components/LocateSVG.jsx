import React, { useState } from "react";
import { useNavigate } from "react-router";

function LocateSVG(props) {
  const updateLocation = props.updateLocation; //get callback funciton to update location
  console.log("updateLocation", updateLocation);
  const apiURL = "https://ipgeolocation.abstractapi.com/v1/";
  const apiKey = "df635717a4374cf28b49705a8fc81e86";
  // const [location, setLocation] = useState([]);
  const navigator = useNavigate();

  // const [postalCode, setPostalCode] = useState("");

  const getUserLocationFromIP = async () => {
    const fullURL = apiURL + "?api_key=" + apiKey;
    try {
      console.log("getting location from IP " + fullURL);
      const response = await (await fetch(fullURL)).json(); //get data and convert JSON to an Object
      const NewLatLong = {
        Latitude: response.latitude,
        Longitude: response.longitude,
      };
      console.log("LatLongFromIP", NewLatLong);
      updateLocation(NewLatLong);
      // setPostalCode(response.postal_code);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex h-12 items-center  justify-between">
        <br />
        <button
          type="button"
          viewBox="0 0 48 48"
          onClick={() => {
            getUserLocationFromIP();
          }}
        >
          {"IP"}
        </button>
        <div> </div>
        <button
          onClick={() => {
            navigator.geolocation.getCurrentPosition(function (position) {
              const NewLatLong = {
                Latitude: position.coords.latitude,
                Longitude: position.coords.longitude,
              };
              console.log("LatLongFromNav", NewLatLong);
              updateLocation(NewLatLong);
            });
          }}
          color="rebeccapurple"
        >
          {"Nav"}
          <svg viewBox="0 0 48 48" className="css-v6j1qa eu14tha6">
            <path d="M46 22h-4.12A18 18 0 0 0 26 6.12V2a2 2 0 0 0-4 0v4.12A18 18 0 0 0 6.12 22H2a2 2 0 0 0 0 4h4.12A18 18 0 0 0 22 41.88V46a2 2 0 0 0 4 0v-4.12A18 18 0 0 0 41.88 26H46a2 2 0 0 0 0-4zM24 38a14 14 0 1 1 14-14 14 14 0 0 1-14 14z"></path>
            <circle cx="24" cy="24" r="4"></circle>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default LocateSVG;
