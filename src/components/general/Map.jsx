import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const markerPosition = {
  lat: 41.74823550483188,
  lng: -88.1667606297537141,
};

const center = {
  lat: 41.74823550483188,
  lng: -88.1667606297537141,
};

const apiMap = process.env.REACT_APP_MAP_API_KEY;

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiMap,
  });

  return isLoaded ? (
    <GoogleMap center={center} zoom={13} mapContainerStyle={containerStyle}>
      <Marker position={markerPosition} defaultClickable />
    </GoogleMap>
  ) : (
    <React.Fragment />
  );
}

export default Map;
