import album1 from "../img/santiago/grupo1/preview-lista1.jpg";
import album2 from "../img/Temuco/preview-temuco.jpg";
import album3 from "../img/San-Antonio/preview-sanAntonio.jpg";
import album4 from "../img/castro/preview-castro.jpg";
import album5 from "../img/Curico/preview-curico.jpg"
import album6 from "../img/Pichilemu/preview-pichilemu.jpg";
import { Link } from "react-router-dom";

const Pictures = () => {
  return (
    <>
      <div className="content-pictures">
        <section className="section-pic">
          <h3 className="title-pic">TetArte Santiago 2022</h3>
          <Link to="../views/Santiago.jsx" className="links-nav">
            <img src={album1} className="pictures" alt=""></img>
          </Link>
        </section>
        <section className="section-pic">
          <h3 className="title-pic">TetArte Castro 2022</h3>
          <Link to="../views/Castro.jsx" className="links-nav">
            <img src={album2} className="pictures" alt=""></img>
          </Link>
        </section>
        <section className="section-pic">
          <h3 className="title-pic">TetArte Temuco 2022</h3>
          <Link to="../views/Temuco.jsx" className="links-nav">
            <img src={album3} className="pictures" alt=""></img>
          </Link>
        </section>
        <section className="section-pic">
          <h3 className="title-pic">TetArte San Antonio 2022</h3>
          <Link to="../views/SanAntonio.jsx" className="links-nav">
            <img src={album4} className="pictures" alt=""></img>
          </Link>
        </section>
         <section className="section-pic">
          <h3 className="title-pic">TetArte Curicó 2022</h3>
          <Link to="../views/Curico.jsx" className="links-nav">
            <img src={album5} className="pictures" alt=""></img>
          </Link>
          </section>
          <section className="section-pic">
          <h3 className="title-pic">TetArte Pichilemu 2022</h3>
          <Link to="../views/Pichilemu.jsx" className="links-nav">
            <img src={album6} className="pictures" alt=""></img>
          </Link>
        
        </section>
      </div>
    </>
  );
};

export default Pictures;
