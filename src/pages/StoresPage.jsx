import React, { useState } from "react";
import LocateSVG from "../components/LocateSVG";
import FavStores from "../components/FavStores";
import ClosestStores from "../components/ClosestStores";

const StoresPage = () => {
  const CalgaryLatLong = { latitude: 51.0501, longitude: -114.0853 }; //Calgary's General Lat/Long

  const [showFaves, setShowFaves] = useState(true);
  const [showClosest, setShowClosest] = useState(false);
  const [userLocation, setUserLocation] = useState(CalgaryLatLong);

  function updateLocation(latLong) {
    console.log("lat/long", latLong);
    setUserLocation(latLong);
    setShowFaves(false);
    setShowClosest(true);
  }

  function updateFaves() {
    //shoe surrent favourites (may have been updated)
    setShowFaves(true);
    setShowClosest(false);
  }

  console.log("location", showClosest);
  return (
    <div>
      <LocateSVG updateFaves={updateFaves} updateLocation={updateLocation} />

      {showFaves && <FavStores />}
      {showClosest && <ClosestStores userLocation={userLocation} />}
    </div>
  );
};

export default StoresPage;
