import React from 'react'
import Mapa from '../components/Mapas/Mapa.jsx'
import Navbar from '../components/Navbar.jsx'

const Paises = () => {
  return (
    <div className='content-paises'>
         <div className='div-nav'>
          <Navbar />
          </div>
          <div className='title-paises'>
          
        </div>
   <div className='div-paises'>
   <h1>Participantes Expo Tetarte 2020</h1>
   <Mapa />
   </div>
  
    </div>
  )
}

export default Paises