import React from "react";
import MapBox from "../components/MapBox";
import LocationForm from "../components/LocationForm";

const LocationsPage = () => {
  return (
    <div className="flex flex-row justify-between">
      <div flex flex-column>
        <LocationForm />
        <div className="border-2 border-black mt-16 ml-50 h-64 w-64">
          <h1>Store Name:</h1>
          <h2>Address:</h2>
          <p>
            Store description: Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Necessitatibus veritatis nam maiores ut vero
            assumenda rerum placeat sit repellendus rem natus deserunt enim
            dolorem et libero alias, accusamus officiis voluptatum!
          </p>
        </div>
      </div>
      <MapBox />
    </div>
  );
};

export default LocationsPage;
