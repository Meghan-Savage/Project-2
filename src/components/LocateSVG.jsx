import React, { useState } from "react";

function LocateSVG() {
  const CalgaryLatLong = { Latitude: 51.0501, Longitude: -114.0853 }; //Calgary's General Lat/Long
  const apiURL = "https://ipgeolocation.abstractapi.com/v1/";
  const apiKey = "df635717a4374cf28b49705a8fc81e86";

  const [zipCode, setZipCode] = useState("");
  const [LatLong, SetLatLong] = useState(CalgaryLatLong);

  const getUserLocationFromIP = async () => {
    const fullURL = apiURL + "?api_key=" + apiKey;
    try {
      console.log("getting location from IP " + fullURL);
      const response = await (await fetch(fullURL)).json(); //get data and convert JSON to an Object

      console.log("response", response);
      console.log("response.latitude", response.latitude);
      console.log("response.longitude", response.longitude);
      const NewLatLong = {
        Latitude: response.latitude,
        Longitude: response.longitude,
      };
      console.log("NewLatLong", NewLatLong);
      SetLatLong(NewLatLong);
      console.log("PostalCode", response.postal_code);
      setZipCode(response.postal_code);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <p>{zipCode}</p>
        <br />
        <label>Postal Code</label>

        <input
          name="PostalCode"
          type="text"
          color="rebeccapurple"
          size="10"
        ></input>
        <button
          type="button"
          onClick={() => {
            getUserLocationFromIP();
          }}
        >
          Press Me
        </button>

        <br />
        <label>
          Lat: {LatLong.Latitude} Long: {LatLong.Longitude}
        </label>
        <br />
        <button
          onClick={() => {
            navigator.geolocation.getCurrentPosition(function (position) {
              const NewLatLong = {
                Latitude: position.coords.latitude,
                Longitude: position.coords.longitude,
              };
              console.log("LatLong", NewLatLong);
              SetLatLong(NewLatLong);
            });
          }}
          color="rebeccapurple"
        >
          Use Current Location
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

// const apiURL = 'https://ipgeolocation.abstractapi.com/v1/'
// const apiKey = 'df635717a4374cf28b49705a8fc81e86';

// function App() {
//  const [zipCode, setZipCode] = useState("");
//  const apiURL = 'https://ipgeolocation.abstractapi.com/v1/'
//  const apiKey = 'df635717a4374cf28b49705a8fc81e86';

//  const getUserLocation = async () => {
// 	const fullURL = apiURL + "?api_key=" + apiKey;
// 		try {
// 			const response = await fetch(fullURL);
// 			const zip = response.postal_code;
// 			setZipCode(zip);
// 		} catch (error) {
// 			console.error(error)
// 		}
//  }

//  function componentDidMount() {
// 	getUserLocation()
//  }

//  return (
//   <div className="App">
//  <p>{zipCode}</p>
//   </div>
