import React from "react";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import img1 from "../img/Pichilemu/1-Pichilemu,chile - fotografa Rossana Podestá copia.jpg";
import img2 from "../img/Pichilemu/10-Pichilemu,chile - fotografa Rossana Podestá copia.jpg";
import img3 from "../img/Pichilemu/11-Pichilemu,chile - fotografa Rossana Podestá copia.jpg";
import img4 from "../img/Pichilemu/12-Pichilemu,chile - fotografa Rossana Podestá copia.jpg";
import img5 from "../img/Pichilemu/13-Pichilemu,chile - fotografa Rossana Podestá.jpg";
import img6 from "../img/Pichilemu/14-Pichilemu,chile - fotografa Rossana Podestá copia.jpg";
import img7 from "../img/Pichilemu/15-Pichilemu,chile - fotografa Rossana Podestá copia.jpg";
import img8 from "../img/Pichilemu/16-Pichilemu,chile - fotografa Rossana Podestá copia.jpg";
import img9 from "../img/Pichilemu/17-Pichilemu,chile - fotografa Rossana Podestá copia.jpg";
import img10 from "../img/Pichilemu/18-Pichilemu,chile - fotografa Rossana Podestá copia.jpg";
import img11 from "../img/Pichilemu/19-Pichilemu,chile - fotografa Rossana Podestá copia.jpg";
import img12 from "../img/Pichilemu/2-Pichilemu,chile - fotografa Rossana Podestá copia.jpg";

const Pichilemu = () => {
  return (
    <>
      <Navbar />
      <div className="content-gallery">
        <div className="title-sesiones">
          <Title title="TetArte Pichilemu" />
        </div>
        <img src={img1} className="picturesHorizontal" alt=""></img>
        <img src={img2} className="picturesHorizontal" alt=""></img>
        <img src={img3} className="picturesVertical" alt=""></img>
        <img src={img5} className="picturesVertical" alt=""></img>
        <img src={img4} className="picturesHorizontal" alt=""></img>
        <img src={img7} className="picturesHorizontal" alt=""></img>
        <img src={img8} className="picturesHorizontal" alt=""></img>
        <img src={img9} className="picturesHorizontal" alt=""></img>
        <img src={img10} className="picturesVertical" alt=""></img>
        <img src={img11} className="picturesVertical" alt=""></img>
        <img src={img12} className="picturesHorizontal" alt=""></img>
        <img src={img7} className="picturesHorizontal" alt=""></img>
        <img src={img6} className="picturesVertical" alt=""></img>
      </div>
    </>
  );
};

export default Pichilemu;
