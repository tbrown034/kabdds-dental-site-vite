import { loadGoogleMaps } from "../../../src/loadGoogleMaps";
import React, { useEffect } from "react";

function Map() {
  const markerPosition = {
    lat: 41.74823550483188,
    lng: -88.16676062975371,
  };

  const center = {
    lat: 41.74823550483188,
    lng: -88.16676062975371,
  };

  useEffect(() => {
    loadGoogleMaps().then(() => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 10,
      });

      const marker = new window.google.maps.Marker({
        position: markerPosition,
        map: map,
        title: "Your Business Name",
      });
    });
  }, []);

  return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
}

export default Map;
