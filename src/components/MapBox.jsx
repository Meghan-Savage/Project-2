import React from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapBox = () => {
  return (
    <div>
      <Map
        initialViewState={{
          longitude: -114.070847,
          latitude: 51.082973,
          zoom: 15,
        }}
        style={{ width: 500, height: 500 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1Ijoic2FiZXJpdGgiLCJhIjoiY2xndmx4Z3E3MDR1YjN1cHM5cnd5dWprNiJ9.5ba9RLr5-gkxRt72FAvGLQ"
      >
        <Marker longitude="-114.070847" latitude="51.082973"></Marker>
      </Map>
    </div>
  );
};

export default MapBox;
