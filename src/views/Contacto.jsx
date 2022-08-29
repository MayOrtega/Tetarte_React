import React from "react";
import ig from "../img/instagram.png";
import gmail from "../img/gmail.png";
import facebook from "../img/facebook.png";
import Navbar from "../components/Navbar";
import click from "../img/click.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Footer from "../components/Footer";

const Contacto = () => {
  return (
    <div className="banner-contacto">
      <div className="content-contacto">
        <Navbar />
        <div className="title-contacto">Contacto</div>
        <div className="card-deck">
          <div className="card">
            <a
              href="https://www.instagram.com/tetarte_el_arte_de_amamantar"
              target="_blank"
              rel="noreferrer"
            >
              <img className="card-img-top" src={ig} alt="Card-image2"></img>
            </a>
            <div className="card-body">
              <a
                href="https://www.instagram.com/tetarte_el_arte_de_amamantar"
                target="_blank"
                rel="noreferrer"
              >
                <img src={click} className="click" alt="click"></img>
              </a>
              <h5 className="card-title">Instagram TetArte</h5>
            </div>
          </div>
          <div className="card">
            <CopyToClipboard text="onggrial@gmail.com">
              <img
                src={gmail}
                className="card-img-top"
                onClick={() => alert("Dirección de correo copiada!")}
                style={{ width: "14%" }}
                alt=""
              ></img>
            </CopyToClipboard>
            <div className="card-body">
              <CopyToClipboard text="onggrial@gmail.com">
                <img
                  src={click}
                  className="click"
                  onClick={() => alert("Dirección de correo copiada!")}
                  style={{ width: "14%" }}
                  alt=""
                ></img>
              </CopyToClipboard>
              <h5 className="card-title-mail">Correo Electrónico</h5>
            </div>
          </div>
          <div className="card">
            <a
              href="https://www.facebook.com/proyectotetarte"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="card-img-top"
                src={facebook}
                alt="CardImage"
              ></img>
            </a>
            <div className="card-body">
              <a
                href="https://www.facebook.com/proyectotetarte"
                target="_blank"
                rel="noreferrer"
              >
                <img src={click} className="click" alt="click"></img>
              </a>
              <h5 className="card-title">Facebook Tetarte</h5>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contacto;
