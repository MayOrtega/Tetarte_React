import React from 'react'
import img1 from '../img/Valparaiso/DSF36819_50cm_300dpi copia.jpg';
import img2 from '../img/Valparaiso/DSF36820_50cm_300dpi copia.jpg';
import img3 from'../img/Valparaiso/DSF36823_50cm_300dpi copia.jpg';
import img4 from '../img/Valparaiso/DSF36828_50cm_300dpi copia.jpg';
import img5 from '../img/Valparaiso/DSF36835_47cm_300dpi copia.jpg';
import img6 from '../img/Valparaiso/DSF36853_48cm_300pdi copia.jpg';
import img7 from '../img/Valparaiso/DSF36863_48cm_300dpi copia.jpg';
import img8 from '../img/Valparaiso/DSF36873_48cm_300dpi copia.jpg';
import img9 from '../img/Valparaiso/DSF36885_48cm_300dpi copia.jpg';
import img10 from '../img/Valparaiso/DSF36897_web copia.jpg';
import img11 from '../img/Valparaiso/DSF36905_web copia.jpg';
import img12 from '../img/Valparaiso/DSF36916_48cm_300dpi copia.jpg';
import img13 from '../img/Valparaiso/DSF36928_48cm_300dpi copia.jpg';
import Title from '../components/Title';
import Navbar from '../components/Navbar';

const Valparaiso = () => {
  return (
    <>
      <Navbar />
      <div className="content-gallery">
        <div className="title-sesiones">
          <Title title="TetArte Valparaíso" />
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
    </div>
    </>
  )
}

export default Valparaiso
