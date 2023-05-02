import React, { useState } from "react";
import LocateSVG from "../components/LocateSVG";
import FavStores from "../components/FavStores";
import ClosestStores from "../components/ClosestStores";

const StoresPage = () => {
  const CalgaryLatLong = { Latitude: 51.0501, Longitude: -114.0853 }; //Calgary's General Lat/Long

  const [showFaves, setShowFaves] = useState(true);
  const [showClosest, setShowClosest] = useState(false);
  const [LatLong, setLatLong] = useState(CalgaryLatLong);

  function updateLocation(latLong) {
    console.log("lat/long", latLong);
    setLatLong(latLong);
    setShowFaves(false);  
    setShowClosest(true);
  }

  console.log("location", showClosest);
  return (
    <div>
      <LocateSVG showFaves={showFaves} updateLocation={updateLocation} />
      {showFaves && <FavStores />}
      {showClosest && <ClosestStores LatLong={LatLong} />}
    </div>
  );
};

export default StoresPage;
