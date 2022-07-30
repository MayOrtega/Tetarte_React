import React from 'react'
import anuncio from '../img/anuncio.png'

const Advertising = () => {
  return (
    <div className='div-anuncio'>
      <h1 className='title-anuncio'>Espacio Disponible para anuncios</h1>
      <img src={anuncio} className='img-anuncio' alt=''/>
    </div>
  )
}

export default Advertising 

