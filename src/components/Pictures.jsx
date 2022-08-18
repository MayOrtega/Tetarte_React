import album1 from "../img/santiago/grupo1/preview-lista1.jpg";
import album2 from "../img/castro/preview-castro.jpg";
import album3 from "../img/Temuco/previewTemuco.jpg";
import album4 from "../img/San-Antonio/preview-sanAntonio.jpg"
import album5 from "../img/Curico/preview-curico.jpg"
import album6 from "../img/Pichilemu/preview-pichilemu.jpg";
import album7 from "../img/Rancagua/preview-rancagua.jpg";
import album8 from '../img/Valparaiso/preview-valparaiso.jpg';
import album9 from "../img/Bucaramanga/preview-bucaramanga.jpg"
import { Link } from "react-router-dom";
import Title from "./Title";

const Pictures = () => {
  return (
    <>
    <div className="title-sesiones-principal">
          <Title title="Sesiones Individuales Tetarte 2022" />
        </div>
      <div className="content-pictures">
        
        <section className="section-pic">
          <h3 className="title-pic">Santiago</h3>
          <Link to="../views/Santiago.jsx" className="links-nav">
            <img src={album1} className="pictures" alt=""></img>
          </Link>
        </section>
        <section className="section-pic">
          <h3 className="title-pic">Castro</h3>
          <Link to="../views/Castro.jsx" className="links-nav">
            <img src={album2} className="pictures" alt=""></img>
          </Link>
        </section>
        <section className="section-pic">
          <h3 className="title-pic">Temuco</h3>
          <Link to="../views/Temuco.jsx" className="links-nav">
            <img src={album3} className="pictures" alt=""></img>
          </Link>
        </section>
        <section className="section-pic">
          <h3 className="title-pic">San Antonio</h3>
          <Link to="../views/SanAntonio.jsx" className="links-nav">
            <img src={album4} className="pictures" alt=""></img>
          </Link>
        </section>
         <section className="section-pic">
          <h3 className="title-pic">Curicó</h3>
          <Link to="../views/Curico.jsx" className="links-nav">
            <img src={album5} className="pictures" alt=""></img>
          </Link>
          </section>
          <section className="section-pic">
          <h3 className="title-pic">Pichilemu</h3>
          <Link to="../views/Pichilemu.jsx" className="links-nav">
            <img src={album6} className="pictures" alt=""></img>
          </Link>
        </section>
        <section className="section-pic">
          <h3 className="title-pic">Rancagua</h3>
          <Link to="../views/Rancagua.jsx" className="links-nav">
            <img src={album7} className="pictures" alt=""></img>
          </Link>
        </section>
        <section className="section-pic">
          <h3 className="title-pic">Valparaíso</h3>
          <Link to="../views/Valparaiso.jsx" className="links-nav">
            <img src={album8} className="pictures" alt=""></img>
          </Link>
        </section>
        <section className="section-pic">
          <h3 className="title-pic" id="pics-bucaramanga">Bucaramanga - Colombia</h3>
          <Link to="../views/Bucaramanga.jsx" className="links-nav">
            <img src={album9} className="pictures" alt=""></img>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Pictures;
