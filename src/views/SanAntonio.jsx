import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import img1 from "../img/San-Antonio/photo_5134214707937389234_y.jpg";
import img2 from "../img/San-Antonio/photo_5134214707937389235_y.jpg";
import img3 from "../img/San-Antonio/photo_5134214707937389236_y.jpg";
import img4 from "../img/San-Antonio/photo_5134214707937389237_y.jpg";
import img5 from "../img/San-Antonio/photo_5134214707937389238_y.jpg";
import img6 from "../img/San-Antonio/photo_5134214707937389239_y.jpg";
import img7 from "../img/San-Antonio/photo_5134214707937389240_y.jpg";
import img8 from "../img/San-Antonio/photo_5134214707937389241_y.jpg";
import img9 from "../img/San-Antonio/photo_5134214707937389242_y.jpg";
import img10 from "../img/San-Antonio/photo_5134214707937389243_y.jpg";
import img11 from "../img/San-Antonio/photo_5134214707937389244_y.jpg";

const SanAntonio = () => {
  return (
    <>
      <Navbar />
      <div className="content-gallery">
        <div className="title-sesiones">
          <Title title="TetArte San Antonio" />
        </div>
        <img src={img1} className="picture" alt=""></img>
        <img src={img2} className="picture" alt=""></img>
        <img src={img3} className="picture" alt=""></img>
        <img src={img4} className="picture" alt=""></img>
        <img src={img5} className="picture" alt=""></img>
        <img src={img6} className="picture" alt=""></img>
        <img src={img7} className="picture" alt=""></img>
        <img src={img8} className="picture" alt=""></img>
        <img src={img9} className="picture" alt=""></img>
        <img src={img10} className="picture" alt=""></img>
        <img src={img11} className="picture" alt=""></img>
      </div>
    </>
  );
};

export default SanAntonio;
