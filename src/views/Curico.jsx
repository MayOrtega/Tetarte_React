import React from 'react'
import Title from '../components/Title';
import Navbar from '../components/Navbar';
import img1 from '../img/Curico/IMG_0046.jpg';
import img2 from '../img/Curico/IMG_0079 copia.jpg';
import img3 from '../img/Curico/IMG_0102.jpg';
import img4 from '../img/Curico/IMG_0109.jpg';
import img5 from '../img/Curico/IMG_0132.jpg';
import img6 from '../img/Curico/IMG_0135 copia.jpg';
import img7 from '../img/Curico/IMG_0136.jpg';
import img8 from '../img/Curico/IMG_0170.jpg';
import img9 from '../img/Curico/IMG_0181.jpg';
import img10 from '../img/Curico/IMG_0247.jpg';
import img11 from '../img/Curico/IMG_0253 copia.jpg'
import img12 from '../img/Curico/IMG_0257.jpg'

const Curico = () => {
  return (
    <>
      <Navbar />
      <div className="content-gallery">
        <div className="title-sesiones">
          <Title title="TetArte Curicó" />
        </div>
        <img src={img2} className="picture" alt=""></img>
        <img src={img3} className="picture" alt=""></img>
        <img src={img4} className="picturesVertical" alt=""></img>
        <img src={img5} className="picturesVertical" alt=""></img>
        <img src={img6} className="picturesVertical" alt=""></img>
        <img src={img7} className="picturesVertical" alt=""></img>
        <img src={img8} className="picturesVertical" alt=""></img>
        <img src={img9} className="picturesVertical" alt=""></img>
        <img src={img10} className="picture" alt=""></img>
        <img src={img3} className="picture" alt=""></img>
        <img src={img11} className="picturesVertical" alt=""></img>
        <img src={img12} className="picturesVertical" alt=""></img>
        <img src={img1} className="picturesVertical" alt=""></img>
      </div>
    </>
  )
}

export default Curico
