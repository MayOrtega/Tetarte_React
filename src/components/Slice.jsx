import Carousel from 'react-bootstrap/Carousel';
import imagen1 from '../img/slide1.png'
import imagen2 from '../img/slide2.png'
import imagen3 from '../img/slide3.png'

function Slice() {
  return (
    <>
    <h1 className='title-slice'>Galería</h1>
   
    <div className='div-slice'>
       <Carousel>
      <Carousel.Item interval={1000}>
      <img
          className="d-block w-100"
          src={imagen2}
          alt="First slide"
        />
        <Carousel.Caption>
         </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={imagen1}
          alt="Second slide"
        />
        <Carousel.Caption>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={imagen3}
          alt="Third slide"
        />
        <Carousel.Caption>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}

export default Slice;