import React from 'react'
import img1 from '../img/Bucaramanga/10_Bucaramanga_Andrés Colmenares copia.jpg'
import img2 from '../img/Bucaramanga/12_Bucaramanga_Andrés Colmenares copia.jpg'
import img3 from '../img/Bucaramanga/13_Bucaramanga_Andrés Colmenares copia.jpg'
import img4 from '../img/Bucaramanga/18_Bucaramanga_Andrés Colmenares copia.jpg'
import img5 from '../img/Bucaramanga/19_Bucaramanga_Andrés Colmenares copia.jpg'
import img6 from '../img/Bucaramanga/1_Bucaramanga_Andrés Colmenares copia.jpg'
import img7 from '../img/Bucaramanga/22_Bucaramanga_Andrés Colmenares copia.jpg'
import img8 from '../img/Bucaramanga/24_Bucaramanga_Andrés Colmenares copia.jpg'
import img9 from '../img/Bucaramanga/4_Bucaramanga_Andrés Colmenares copia.jpg'
import img10 from '../img/Bucaramanga/5_Bucaramanga_Andrés Colmenares copia.jpg'
import img11 from '../img/Bucaramanga/6_Bucaramanga_Andrés Colmenares copia.jpg'
import img12 from '../img/Bucaramanga/8_Bucaramanga_Andrés Colmenares copia.jpg'
import Title from '../components/Title'
import Navbar from '../components/Navbar'


const Bucaramanga = () => {
  return (
    <>
    <Navbar />
    <div className="content-gallery">
      <div className="title-sesiones">
        <Title title="TetArte Bucaramanga, Colombia" />
      </div>
      <img src={img1} className="picturesHoriz" alt=""></img>
      <img src={img2} className="picturesHoriz" alt=""></img>
      <img src={img3} className="picture" alt=""></img>
      <img src={img4} className="picture" alt=""></img>
      <img src={img6} className="picturesHoriz" alt=""></img>
      <img src={img7} className="picturesHoriz" alt=""></img>
      <img src={img8} className="picture" alt=""></img>
      <img src={img10} className="picture" alt=""></img>
      <img src={img9} className="picturesHoriz" alt=""></img>
      <img src={img11} className="picturesHoriz" alt=""></img>
      <img src={img12} className="picture" alt=""></img>
      <img src={img5} className="picture" alt=""></img>
    </div>
  </>
  )
}

export default Bucaramanga
