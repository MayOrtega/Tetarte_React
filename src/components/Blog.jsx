import React from 'react'
import amamantar from '../img/amamantando.jpg'
import crianza from '../img/crianza.jpg'
import mujeres from '../img/Mujeres.jpg'
import mama from '../img/mama-hija.jpg'
import mujer from '../img/Mujer.jpg'
import blogger from '../img/blogger.png'
import flecha from '../img/flecha-correcta.png'

const Blog = () => {
  return (
    <div className='div-blog'>
        <h1 className='title-blog'>Blog Tetarte</h1>
        <h3 classname='texto-blog'>Si te interesa leer sobre temas contingentes de lactancia, mujer, maternidad, crianza y mucho más,
        <br/>
        </h3>
        <h3 className='texto-blog2'>entra a nuestro blog aquí <img src={flecha} className='flecha'></img> <span><a href='http://expotetarte.blogspot.com'><img src={blogger} className='blogger'></img></a></span></h3>
        <img src={amamantar} alt='amamantando' className='amamantando'></img>
        <img src={mama} alt='mama' className='mama'></img>
        <img src={mujer} alt='mujer' className='mujer'></img>
        <img src={mujeres} alt='mujeres' className='mujeres'></img>
        <img src={crianza} alt='crianza' className='crianza'></img>
        
        

    </div>
  )
}

export default Blog