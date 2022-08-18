import React from 'react'
import loguito from '../img/loguitoAnimado.gif';
import 'animate.css';


const Footer = () => {
  return (
    <div className='footer'>
      <a href="http://linkedin.com/in/mayorlen" target="_blank" rel="noreferrer">
      <h1 className='title-footer'>Developed by May Ortega - © 2022</h1>
      </a>
      <img src={loguito} alt='' className='loguito animate__rollOut'></img>
      
    </div>
  )
}

export default Footer
