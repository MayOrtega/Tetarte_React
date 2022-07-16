import React from 'react'
import amamantar from '../img/amamantando.jpg'

const Blog = () => {
  return (
    <div className='div-blog'>
        <h1 className='title-blog'>Blog Tetarte</h1>
        <p classname='texto-blog'>Si te interesa leer nuestro blog, ingresa acá</p>
        <img src={amamantar} alt='amamantando' className='amamantando'></img>

    </div>
  )
}

export default Blog