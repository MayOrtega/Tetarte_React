import React from "react";
import MapView from "../components/MapView.jsx";
import Navbar from "../components/Navbar.jsx";
import Title from "../components/Title.jsx";

const Paises = () => {
  return (
    <div className="content-paises">
      <Navbar />
      <div className="title-paises">
        <Title title="Países ExpoTetArte 2020" />
      </div>
      <div className="div-mapView">
        <MapView />
      </div>
    </div>
  );
};

export default Paises;
