import Carousel from 'react-bootstrap/Carousel';
import imagen2 from '../img/slide2.png'


function Slice() {
  return (
    <>
    
   <div className='content-slide'>
   <section className='left-slide'>
    <img src={imagen2} className='img-left-slide'></img>
    <img src={imagen2} className='img-left-slide'></img>
   </section>
    <section className='div-slice'>
    <h1 className='title-slice'>Galería</h1>
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
          src={imagen2}
          alt="Second slide"
        />
        <Carousel.Caption>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={imagen2}
          alt="Third slide"
        />
        <Carousel.Caption>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
    <section className='rigth-slide'>
    <img src={imagen2} className='img-rigth-slide'></img>
    <img src={imagen2} className='img-rigth-slide'></img>
   </section>
   </div>
    </>
  );
}

export default Slice;