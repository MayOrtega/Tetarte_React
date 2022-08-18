import React from "react";
import img1 from "../img/Rancagua/Rancagua1.jpg";
import img2 from "../img/Rancagua/Rancagua2.jpg";
import img3 from "../img/Rancagua/Rancagua3.jpg";
import img4 from "../img/Rancagua/Rancagua4.jpg";
import img5 from "../img/Rancagua/Rancagua5.jpg";
import img6 from "../img/Rancagua/Rancagua6.jpg";
import img7 from "../img/Rancagua/Rancagua7.jpg";
import img8 from "../img/Rancagua/Rancagua8.jpg";
import img9 from "../img/Rancagua/Rancagua9.jpg";
import img10 from "../img/Rancagua/Rancagua10.jpg";
import img11 from "../img/Rancagua/Rancagua11.jpg";
import img12 from "../img/Rancagua/Rancagua12.jpg";
import img13 from "../img/Rancagua/Rancagua13.jpg";
import img14 from "../img/Rancagua/Rancagua14.jpg";
import img15 from "../img/Rancagua/Rancagua15.jpg";
import img16 from "../img/Rancagua/Rancagua16.jpg";
import img17 from "../img/Rancagua/Rancagua17.jpg";
import Title from "../components/Title";
import Navbar from "../components/Navbar";

const Rancagua = () => {
  return (
    <>
      <Navbar />
      <div className="content-gallery">
        <div className="title-sesiones">
          <Title title="TetArte Rancagua" />
        </div>
        <img src={img1} className="picturesVertical" alt=""></img>
        <img src={img2} className="picturesVertical" alt=""></img>
        <img src={img3} className="picturesVertical" alt=""></img>
        <img src={img4} className="picturesVertical" alt=""></img>
        <img src={img5} className="picturesVertical" alt=""></img>
        <img src={img6} className="picturesVertical" alt=""></img>
        <img src={img7} className="picturesVertical" alt=""></img>
        <img src={img8} className="picturesVertical" alt=""></img>
        <img src={img9} className="picturesVertical" alt=""></img>
        <img src={img10} className="picturesVertical" alt=""></img>
        <img src={img11} className="picturesVertical" alt=""></img>
        <img src={img12} className="picturesVertical" alt=""></img>
        <img src={img13} className="picturesVertical" alt=""></img>
        <img src={img14} className="picturesVertical" alt=""></img>
        <img src={img15} className="picturesVertical" alt=""></img>
        <img src={img16} className="picturesVertical" alt=""></img>
        <img src={img17} className="picturesVertical" alt=""></img>
      </div>
    </>
  );
};

export default Rancagua;
