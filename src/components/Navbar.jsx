import { Link } from "react-router-dom";
import Logo from "../img/logotetarte-negro.png";

const Navbar = () => {
  return (
    <>
      <div className="line"></div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="hr"></div>
        <Link to="/" className="links-nav"></Link>
        <Link to="/" className="links-nav" id="inicio-link">
          Inicio
        </Link>
        <Link
          to="../views/Proyecto.jsx"
          className="links-nav"
          id="proyecto-link"
        >
          Proyecto
        </Link>
        <Link to="../views/Paises.jsx" className="links-nav">
          Países
        </Link>
        <Link to="../views/BlogTetarte.jsx" className="links-nav">
          Blog
        </Link>
        <Link
          to="../views/Contacto.jsx"
          className="links-nav"
          id="contacto-link"
        >
          Contacto
        </Link>
        <div className="hr"></div>
        <div></div>
      </nav>
      <img src={Logo} className="logo" alt="logo"></img>
    </>
  );
};

export default Navbar;
