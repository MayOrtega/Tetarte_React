import React from "react";
import amamantar from "../img/amamantando.jpg";
import crianza from "../img/crianza.jpg";
import mujeres from "../img/Mujeres.jpg";
import mama from "../img/mama-hija.jpg";
import mujer from "../img/Mujer.jpg";
import blogger from "../img/blogger.png";
import flecha from "../img/flecha-correcta.png";

const Blog = () => {
  return (
    <div className="div-blog">
      <h1 className="title-blog">Blog TetArte</h1>
      <div className="content-text">
        <img src={amamantar} alt="" className="amamantar"></img>
        <h3 className="texto-blog">
          Si te interesa leer sobre temas contingentes de lactancia, mujer,
          maternidad, crianza y mucho más... entra a nuestro blog aquí
          <img src={flecha} className="flecha" alt=""></img>{" "}
          <span>
            <a href="http://expotetarte.blogspot.com" target="_blank" rel="noreferrer">
              <img src={blogger} className="blogger" alt=""></img>
            </a>
          </span>
        </h3>
      </div>
      <div className="div-fotos">
        <img src={mama} alt="" className="mama"></img>
        <img src={mujer} alt="" className="mujer"></img>
        <img src={mujeres} alt="" className="mujeres"></img>
        <img src={crianza} alt="" className="crianza"></img>
      </div>
    </div>
  );
};

export default Blog;
