import {Link} from "react-router-dom"
import Logo from '../img/logotetarte negro.png'

const Navbar = () => {
return (
    <>
    <div className="line"></div>
    <nav className="navbar navbar-dark bg-dark">
         <Link to="/" className="links-nav">
           
        </Link>
        <Link to="/" className="links-nav">
            Inicio
        </Link>
        <Link to="/blog" className="links-nav">
            Blog
        </Link>
        <Link to="/somos" className="links-nav">
            Quiénes Somos
        </Link>
        <Link to="/paises" className="links-nav">
            Países
        </Link>
        <Link to="/media" className="links-nav">
            Media
        </Link>
        <Link to="/Contacto" className="links-nav">
            Contacto
        </Link>
        <div></div>
    </nav>
    <img src={Logo} className="logo" alt="logo"></img>
    </>
)

};

export default Navbar