import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import foto1 from "../img/paloma.jpg";
import { Link } from "react-router-dom";
import DossierPDF from "../documents/Dosier.pdf";

const Proyecto = () => {
  return (
    <>
      <div className="banner-proyecto">
        <div className="quienes-somos">
          <Navbar />

          <div className="title-quienes-somos">
            <Title title="¿Quiénes somos?" />
          </div>
          <div className="content-quienes-somos">
            <section className="section1-quienes-somos">
              <p>
                Tetarte es un proyecto fotográfico{" "}
                <strong>
                  <em>pro lactancia</em>
                </strong>{" "}
                cuyos objetivos son promover la lactancia materna,
                desmitificarla y visualizarla como acto humano y natural.
              </p>
              <p>
                Proyecto de ONG Grial, marca registrada y protegido por ley de
                derechos de autor.
              </p>
              <Link to="../views/Dossier.jsx" target="_blank" rel="noreferrer">
                <h3 className="title-dossier-1">Ver nuestro Dossier</h3>
              </Link>
              <a href={DossierPDF} download="Dossier-TetArte.pdf">
                {" "}
                <h3 className="title-dossier-2">Descargar nuestro Dossier</h3>
              </a>
            </section>
            <section className="section2-quienes-somos">
              <img src={foto1} className="foto1-somos" alt="fundadora"></img>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Proyecto;
