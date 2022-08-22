import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import img1 from "../img/castro/01CastroDanielaQuililongo copia.jpg";
import img2 from "../img/castro/02CastroDanielaQuililongo copia.jpg";
import img3 from "../img/castro/03CastroDanielaQuililongo copia.jpg";
import img4 from "../img/castro/04CastroDanielaQuililongo copia.jpg";
import img5 from "../img/castro/05CastroDanielaQuililongo copia.jpg";
import img6 from "../img/castro/06CastroDanielaQuililongo copia.jpg";
import img7 from "../img/castro/07CastroDanielaQuililongo copia.jpg";
import img8 from "../img/castro/08CastroDanielaQuililongo copia.jpg";
import img10 from "../img/castro/10CastroDanielaQuililongo copia.jpg";
import img11 from "../img/castro/11CastroDanielaQuililongo copia.jpg";
import img12 from "../img/castro/12CastroDanielaQuililongo copia.jpg";

const Castro = () => {
  return (
    <>
      <Navbar />
      <div className="content-gallery">
        <div className="title-sesiones">
          <Title title="TetArte Castro" />
        </div>
        <img src={img1} className="picturesHorizontal" alt=""></img>
        <img src={img2} className="picturesHorizontal" alt=""></img>
        <img src={img3} className="picturesHorizontal" alt=""></img>
        <img src={img4} className="picturesHorizontal" alt=""></img>
        <img src={img5} className="picturesHorizontal" alt=""></img>
        <img src={img6} className="picturesHorizontal" alt=""></img>
        <img src={img7} className="picturesHorizontal" alt=""></img>
        <img src={img8} className="picturesHorizontal" alt=""></img>
        <img src={img10} className="picturesHorizontal" alt=""></img>
        <img src={img11} className="picturesHorizontal" alt=""></img>
        <img src={img12} className="picturesHorizontal" alt=""></img>
      </div>
    </>
  );
};

export default Castro;
