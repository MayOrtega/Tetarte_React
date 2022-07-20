import React from 'react'
import MapView from '../components/MapView.jsx'
import Navbar from '../components/Navbar.jsx'
import Title from '../components/Title.jsx'


const Paises = () => {
  return (
    <div className='content-paises'>
         <div className='div-nav'>
          <Navbar />
          </div>
          <div className='title-paises'>
          
        </div>
   <div className='div-paises'>
   <Title title='Participantes ExpoTetarte 2020' />
   <div className='div-mapView'>
   <MapView />
   </div>
   </div>
  
    </div>
  )
}

export default Paises