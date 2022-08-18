import React from "react";
import MapView from "../components/MapView.jsx";
import Navbar from "../components/Navbar.jsx";
import Title from "../components/Title.jsx";
import Footer from "../components/Footer.jsx";

const Paises = () => {
  return (
    <div className="content-paises">
      <Navbar />
      <div className="title-paises">
        <Title title="Red TetArte 2022" />
      </div>
      <div className="div-mapView">
        <MapView />
      </div>
      <Footer />
    </div>
  );
};

export default Paises;
