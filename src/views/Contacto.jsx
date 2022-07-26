import React from "react";
import ig from "../img/instagram.png";
import gmail from "../img/gmail.png";
import facebook from "../img/facebook.png";
import Navbar from "../components/Navbar";
import click from "../img/click.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import copy from "../img/copy.png";
import Title from "../components/Title";
const Contacto = () => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="content-contacto">
      <Navbar />
      <div className="title-contacto">
        Contáctanos
      </div>
      <div className="card-deck">
        <div className="card">
          <a href="https://www.instagram.com/tetarte_el_arte_de_amamantar" target="_blank">
            <img className="card-img-top" src={ig} alt="Card-image2"></img>
          </a>
          <div className="card-body">
            <a href="https://www.instagram.com/tetarte_el_arte_de_amamantar" target="_blank">
              <img src={click} className="click" alt="click"></img>
            </a>
            <h5 className="card-title">Instagram TetArte</h5>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={gmail} alt="Card"></img>
          <div className="card-body">
            <h5 className="card-title">Correo Electrónico</h5>
            <CopyToClipboard text="onggrial@gmail.com">
              <>
                <img
                  src={copy}
                  onClick={() => setCopied(true)}
                  style={{ width: "14%" }}
                ></img>
                <h6 className="text-mail">onggrial@gmail.com</h6>
                <p style={{ fontSize: "1%" }}>
                  {copied && <span>Texto copiado!</span>}
                </p>
              </>
            </CopyToClipboard>
          </div>
        </div>
        <div className="card">
          <a href="https://www.facebook.com/proyectotetarte" target="_blank">
            <img className="card-img-top" src={facebook} alt="CardImage"></img>
          </a>
          <div className="card-body">
            <a href="https://www.facebook.com/proyectotetarte" target="_blank">
              <img src={click} className="click" alt="click"></img>
            </a>
            <h5 className="card-title">Facebook Tetarte</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
