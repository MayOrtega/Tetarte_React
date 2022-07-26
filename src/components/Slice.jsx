import Carousel from "react-bootstrap/Carousel";
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
import Modal from './Modal'
import useModal from './useModal'

function Slice() {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false)
  const [isOpenModal2, openModal2, closeModal2] = useModal(false)
  const [isOpenModal3, openModal3, closeModal3] = useModal(false)
  const [isOpenModal4, openModal4, closeModal4] = useModal(false)
  const [isOpenModal5, openModal5, closeModal5] = useModal(false)
  const [isOpenModal6, openModal6, closeModal6] = useModal(false)
  const [isOpenModal7, openModal7, closeModal7] = useModal(false)
  const [isOpenModal8, openModal8, closeModal8] = useModal(false)
  const [isOpenModal9, openModal9, closeModal9] = useModal(false)
  const [isOpenModal10, openModal10, closeModal10] = useModal(false)
  const [isOpenModal11, openModal11, closeModal11] = useModal(false)
  const [isOpenModal12, openModal12, closeModal12] = useModal(false)
  const [isOpenModal13, openModal13, closeModal13] = useModal(false)
  const [isOpenModal14, openModal14, closeModal14] = useModal(false)
  const [isOpenModal15, openModal15, closeModal15] = useModal(false)
  const [isOpenModal16, openModal16, closeModal16] = useModal(false)

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
           <Carousel>
            <Carousel.Item>
              <img className="d-block w-100"
               src={Castro} alt="Third slide"
                onClick={openModal1} />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={Santiago1}
                alt="First slide"
                onClick={openModal2}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={Valparaiso}
                alt="Second slide"
                onClick={openModal3}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100"
               src={LaLigua}
               alt="Third slide"
               onClick={openModal4} />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" 
              src={Temuco} 
              alt="Third slide"
              onClick={openModal5} />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={SanAntonio}
                alt="Third slide"
                onClick={openModal6}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" 
              src={Quintero} 
              alt="Third slide"
              onClick={openModal7} />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" 
              src={Rancagua} 
              alt="Third slide"
              onClick={openModal8} />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" 
              src={Chillan} 
              alt="Third slide"
              onClick={openModal9} />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Pichilemu}
                alt="Third slide"
                onClick={openModal10}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Barranquilla}
                alt="Third slide"
                onClick={openModal11}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Bucaramanga}
                alt="Third slide"
                onClick={openModal12}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" 
              src={Armenia} 
              alt="Third slide"
              onClick={openModal13} />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" 
              src={Popayan} 
              alt="Third slide" 
              onClick={openModal14}/>
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" 
              src={Cali} 
              alt="Third slide"
              onClick={openModal15} />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" 
              src={Alcoy} 
              alt="Third slide"
              onClick={openModal16} />
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
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            <img src={Castro} className='img-modal' alt="castro"></img>
        </Modal>
        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
            <img src={Santiago1} className='img-modal' alt="santiago"></img>
        </Modal>
        <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
            <img src={Valparaiso} className='img-modal' alt="valparaiso"></img>
        </Modal>
        <Modal isOpen={isOpenModal4} closeModal={closeModal4}>
            <img src={LaLigua} className='img-modal' alt="la-ligua"></img>
        </Modal>
        <Modal isOpen={isOpenModal5} closeModal={closeModal5}>
            <img src={Temuco} className='img-modal' alt="temuco"></img>
        </Modal>
        <Modal isOpen={isOpenModal6} closeModal={closeModal6}>
            <img src={SanAntonio} className='img-modal' alt="san-Antonio"></img>
        </Modal>
        <Modal isOpen={isOpenModal7} closeModal={closeModal7}>
            <img src={Quintero} className='img-modal' alt="quintero"></img>
        </Modal>
        <Modal isOpen={isOpenModal8} closeModal={closeModal8}>
            <img src={Rancagua} className='img-modal' alt="rancagua"></img>
        </Modal>
        <Modal isOpen={isOpenModal9} closeModal={closeModal9}>
            <img src={Chillan} className='img-modal' alt="chillan"></img>
        </Modal>
        <Modal isOpen={isOpenModal10} closeModal={closeModal10}>
            <img src={Pichilemu} className='img-modal' alt="pichilemu"></img>
        </Modal>
        <Modal isOpen={isOpenModal11} closeModal={closeModal11}>
            <img src={Barranquilla} className='img-modal' alt="barranquilla"></img>
        </Modal>
        <Modal isOpen={isOpenModal12} closeModal={closeModal12}>
            <img src={Bucaramanga} className='img-modal' alt="bucaramanga"></img>
        </Modal>
        <Modal isOpen={isOpenModal13} closeModal={closeModal13}>
            <img src={Armenia} className='img-modal' alt="armenia"></img>
        </Modal>
        <Modal isOpen={isOpenModal14} closeModal={closeModal14}>
            <img src={Popayan} className='img-modal' alt="popayan"></img>
        </Modal>
        <Modal isOpen={isOpenModal15} closeModal={closeModal15}>
            <img src={Cali} className='img-modal' alt="cali"></img>
        </Modal>
        <Modal isOpen={isOpenModal16} closeModal={closeModal16}>
            <img src={Alcoy} className='img-modal' alt="alcoy"></img>
        </Modal>
      </div>
    </>
  );
}

export default Slice;
