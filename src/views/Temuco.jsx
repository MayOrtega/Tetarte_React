import React from 'react'
import Navbar from '../components/Navbar';
import img1 from '../img/Temuco/photo_5134214707937389229_y.jpg'
import img2 from '../img/Temuco/photo_5134214707937389230_y.jpg'
import img3 from '../img/Temuco/photo_5134214707937389231_y.jpg'
import img4 from '../img/Temuco/photo_5134214707937389232_y.jpg'
import Title from'../components/Title'

const Temuco = () => {
  return (
    <>
    <Navbar />
    <div className='content-gallery'>
        <div className='title-sesiones'>
        <Title title='TetArte Temuco' />
        </div>
       <img src={img1} className='picture' alt=''></img>
       <img src={img2} className='picture' alt=''></img>
       <img src={img3} className='picture' alt=''></img>
       <img src={img4} className='picture' alt=''></img>
          
        
  
    </div>
    </>
  )
}

export default Temuco
