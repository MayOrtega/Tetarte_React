import { Link } from "react-router-dom";
import Logo from "../img/logotetarte-negro.png";

const Navbar = () => {
  return (
    <>
      <div className="line"></div>
      <nav className="navbar navbar-dark bg-dark">
        <hr />
        <Link to="/" className="links-nav"></Link>
        <Link to="/" className="links-nav">
          Inicio
        </Link>
        <Link to="../views/Somos.jsx" className="links-nav">
          Quiénes Somos
        </Link>
        <Link to="../views/Paises.jsx" className="links-nav">
          Países
        </Link>
        <Link to="../views/Contacto.jsx" className="links-nav">
          Contacto
        </Link>
        <hr />
        <div></div>
      </nav>
      <img src={Logo} className="logo" alt="logo"></img>
    </>
  );
};

export default Navbar;
