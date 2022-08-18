import React from 'react'
import loguito from '../img/loguito-footer.png'

const Footer = () => {
  return (
    <div className='footer'>
      <h1 className='title-footer'>© 2022 Sitio Web desarrollado por May Ortega</h1>
      <img src={loguito} alt='' className='loguito'></img>
    </div>
  )
}

export default Footer
