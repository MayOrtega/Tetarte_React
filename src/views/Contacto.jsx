import React from 'react'
import ig from '../img/instagram.png'
import gmail from '../img/gmail.png'
import facebook from '../img/facebook.png'
import Navbar from '../components/Navbar'
import click from '../img/click.png'




const Contacto = () => {
  return (
    <div> 
 <Navbar />
        <div className="card-deck">
  <div className="card">
    <a href='https://www.instagram.com/tetarte_el_arte_de_amamantar'>
    <img className="card-img-top" src={ig} alt="Card image cap"></img>
    </a>
    <div className="card-body">
    <a href='https://www.instagram.com/tetarte_el_arte_de_amamantar'>
     <img src={click} className="click" alt="click"></img>
     </a>
      <h5 className="card-title">Instagram TetArte</h5>
     </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={gmail} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Correo Electrónico</h5>
      <h6>onggrial@gmail.com</h6>
      
      
    </div>
  </div>
  <div className="card">
  <a href='https://www.facebook.com/proyectotetarte'>
    <img className="card-img-top" src={facebook} alt="Card image cap"></img>
    </a>
    <div className="card-body">
    <a href='https://www.instagram.com/tetarte_el_arte_de_amamantar'>
    <img src={click} className="click" alt="click"></img>
    </a>
      <h5 className="card-title">Facebook Tetarte</h5>
      
      
    </div>
  </div>
</div>

</div>

    
  )
}

export default Contacto