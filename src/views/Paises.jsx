import React from "react";
import MapView from "../components/MapView.jsx";
import MapViewMini from "../components/MapViewMini.jsx";
import Navbar from "../components/Navbar.jsx";
import Title from "../components/Title.jsx";
import Footer from "../components/Footer.jsx";

const Paises = () => {
  return (
    <div className="banner-paises">
    <div className="content-paises">
      <Navbar />
      <div className="title-quienes-somos">
        <Title title="Red TetArte 2022" />
      </div>
      <div className="div-mapView">
      <a href="#table-paises">
      <h1 className="title-table-paises">Ver Países y Ciudades Red Tetarte</h1>
      </a>
        <MapView />
      </div>
      <div className="div-mapViewMini">
      <a href="#table-paises">
      <h1 className="title-table-paises">Ver Países y Ciudades Red Tetarte</h1>
      </a>
        <MapViewMini />
      </div>
      
      <div className="table-paises" id="table-paises">
          <section className="section-paises">
          <h1 className="h1-paises">Colombia</h1>
          <h2 className="h2-paises">Armenia</h2>
          <h2 className="h2-paises">Barranquilla</h2>
          <h2 className="h2-paises">Bucaramanga</h2>
          <h2 className="h2-paises">Cali</h2>
          <h2 className="h2-paises">Popayan</h2>
        </section>
        <section className="section-paises">
        <h1 className="h1-paises">Chile</h1>
        <h2 className="h2-paises">Alto Hospicio</h2>
        <h2 className="h2-paises">Castro</h2>
        <h2 className="h2-paises">Curicó</h2>
        <h2 className="h2-paises">Chillán</h2>
        <h2 className="h2-paises">Iquique</h2>
        <h2 className="h2-paises">La Ligua</h2>
        <h2 className="h2-paises">Pichilemu</h2>
        <h2 className="h2-paises">Quintero</h2>
        <h2 className="h2-paises">Rancagua</h2>
        <h2 className="h2-paises">San Antonio</h2>
        <h2 className="h2-paises">Santiago</h2>
        <h2 className="h2-paises">Temuco</h2>
        <h2 className="h2-paises">Valparaíso</h2>
        </section>
        <section className="section-paises">
          <h1 className="h1-paises">España</h1>
          <h2 className="h2-paises">Alcoy</h2>
        </section>
        <section className="section-paises">
          <h1 className="h1-paises">Italia</h1>
          <h2 className="h2-paises">Génova, Liguria</h2>
        </section>
        <section className="section-paises">
          <h1 className="h1-paises">México</h1>
          <h2 className="h2-paises">Zacatecas</h2>
        </section>



</div>
      <Footer />
    </div>
    </div>
  );
};

export default Paises;
