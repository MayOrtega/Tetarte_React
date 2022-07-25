import Carousel from "react-bootstrap/Carousel";
import imagen2 from "../img/slide2.png";
import Santiago1 from "../img/Santiago grupo 1.jpg";
import Valparaiso from "../img/Valparaiso.jpg";
import SanAntonio from "../img/San-Antonio.jpg";
import Quintero from "../img/Quintero.jpg";
import Rancagua from "../img/Rancagua.jpg";
import Castro from "../img/Castro.jpg";
import Chillan from "../img/Chillan.jpg";
import Pichilemu from "../img/Pichilemu.jpg";
import Bucaramanga from "../img/Bucaramanga.jpg";
import Barranquilla from "../img/Barranquilla.jpg";
import Popayan from "../img/Popayán copia.jpg";
import Cali from "../img/Cali Colombia Marcela Cadavid copia.jpg";
import Alcoy from "../img/Alcoy-España.jpg";
import LaLigua from "../img/La-Ligua.jpg";
import Temuco from "../img/Temuco.jpg";
import Armenia from "../img/Armenia.jpg";

function Slice() {
  return (
    <>
      <div className="content-slide">
        <section className="left-slide">
          <img
            src={Bucaramanga}
            className="img-left-slide"
            alt="img-left"
          ></img>
          <img src={Alcoy} className="img-left-slide" alt="img-left2"></img>
        </section>
        <section className="div-slice">
          <h1 className="title-slice">Galería TetArte</h1>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={Castro} alt="Third slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={Santiago1}
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={Valparaiso}
                alt="Second slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={LaLigua} alt="Third slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Temuco} alt="Third slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={SanAntonio}
                alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Quintero} alt="Third slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Rancagua} alt="Third slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Chillan} alt="Third slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Pichilemu}
                alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Barranquilla}
                alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Bucaramanga}
                alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Armenia} alt="Third slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Popayan} alt="Third slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Cali} alt="Third slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Alcoy} alt="Third slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
        <section className="rigth-slide">
          <img src={Cali} className="img-rigth-slide" alt="img-rigth"></img>
          <img
            src={SanAntonio}
            className="img-rigth-slide"
            alt="img-rigth"
          ></img>
        </section>
      </div>
    </>
  );
}

export default Slice;
