import Carousel from "react-bootstrap/Carousel";
import Santiago1 from "../img/Masivas/SantiagoB.jpg";
import Valparaiso from "../img/Masivas/ValparaisoB.jpg";
import SanAntonio from "../img/Masivas/SanAntonioB.jpg";
import Rancagua from "../img/Masivas/RancaguaB.jpg";
import Castro from "../img/Masivas/CastroB.jpg";
import Chillan from "../img/Masivas/ChillanB.jpg";
import Pichilemu from "../img/Masivas/PichilemuB.jpg";
import Bucaramanga from "../img/Masivas/BucaramangaB.jpg";
import Barranquilla from "../img/Masivas/BarranquillaB.jpg";
import Popayan from "../img/Masivas/PopayanB.jpg";
import Cali from "../img/Masivas/CaliB.jpg";
import Alcoy from "../img/Masivas/AlcoyB.jpg";
import LaLigua from "../img/Masivas/La-LiguaB.jpg";
import Temuco from "../img/Masivas/TemucoB.jpg";
import Armenia from "../img/Masivas/ArmeniaB.jpg";
import Modal from "./Modal";
import useModal from "./useModal";
import Zacatecas from "../img/Masivas/ZacatecasB.jpg";
import Title from "./Title";

function Slice() {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);
  const [isOpenModal4, openModal4, closeModal4] = useModal(false);
  const [isOpenModal5, openModal5, closeModal5] = useModal(false);
  const [isOpenModal6, openModal6, closeModal6] = useModal(false);
  const [isOpenModal8, openModal8, closeModal8] = useModal(false);
  const [isOpenModal9, openModal9, closeModal9] = useModal(false);
  const [isOpenModal10, openModal10, closeModal10] = useModal(false);
  const [isOpenModal11, openModal11, closeModal11] = useModal(false);
  const [isOpenModal12, openModal12, closeModal12] = useModal(false);
  const [isOpenModal13, openModal13, closeModal13] = useModal(false);
  const [isOpenModal14, openModal14, closeModal14] = useModal(false);
  const [isOpenModal15, openModal15, closeModal15] = useModal(false);
  const [isOpenModal16, openModal16, closeModal16] = useModal(false);
  const [isOpenModal17, openModal17, closeModal17] = useModal(false);

  return (
    <>
      <div className="content-slide">
        <div className="title-slice">
          <Title title="Sesiones Masivas TetArte 2022" />
        </div>
        <section className="div-slice">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Castro}
                alt="Third slide"
                onClick={openModal1}
              />
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
              <img
                className="d-block w-100"
                src={LaLigua}
                alt="Third slide"
                onClick={openModal4}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Temuco}
                alt="Third slide"
                onClick={openModal5}
              />
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
              <img
                className="d-block w-100"
                src={Rancagua}
                alt="Third slide"
                onClick={openModal8}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Chillan}
                alt="Third slide"
                onClick={openModal9}
              />
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
              <img
                className="d-block w-100"
                src={Armenia}
                alt="Third slide"
                onClick={openModal13}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Popayan}
                alt="Third slide"
                onClick={openModal14}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Cali}
                alt="Third slide"
                onClick={openModal15}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Alcoy}
                alt="Third slide"
                onClick={openModal16}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Zacatecas}
                alt="Third slide"
                onClick={openModal17}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>

        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
          <h1 className="title-modal"> Castro - Chile</h1>
          <img src={Castro} className="img-modal" alt="castro"></img>
        </Modal>
        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
          <h1 className="title-modal"> Santiago - Chile</h1>
          <img src={Santiago1} className="img-modal" alt="santiago"></img>
        </Modal>
        <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
          <h1 className="title-modal"> Valparaíso - Chile</h1>
          <img src={Valparaiso} className="img-modal" alt="valparaiso"></img>
        </Modal>
        <Modal isOpen={isOpenModal4} closeModal={closeModal4}>
          <h1 className="title-modal"> La Ligua - Chile</h1>
          <img src={LaLigua} className="img-modal" alt="la-ligua"></img>
        </Modal>
        <Modal isOpen={isOpenModal5} closeModal={closeModal5}>
          <h1 className="title-modal"> Temuco - Chile</h1>
          <img src={Temuco} className="img-modal" alt="temuco"></img>
        </Modal>
        <Modal isOpen={isOpenModal6} closeModal={closeModal6}>
          <h1 className="title-modal"> San Antonio - Chile</h1>
          <img src={SanAntonio} className="img-modal" alt="san-Antonio"></img>
        </Modal>
        <Modal isOpen={isOpenModal8} closeModal={closeModal8}>
          <h1 className="title-modal"> Rancagua - Chile</h1>
          <img src={Rancagua} className="img-modal" alt="rancagua"></img>
        </Modal>
        <Modal isOpen={isOpenModal9} closeModal={closeModal9}>
          <h1 className="title-modal"> Chillán - Chile</h1>
          <img src={Chillan} className="img-modal" alt="chillan"></img>
        </Modal>
        <Modal isOpen={isOpenModal10} closeModal={closeModal10}>
          <h1 className="title-modal"> Pichilemu - Chile</h1>
          <img src={Pichilemu} className="img-modal" alt="pichilemu"></img>
        </Modal>
        <Modal isOpen={isOpenModal11} closeModal={closeModal11}>
          <h1 className="title-modal"> Barranquilla - Colombia</h1>
          <img
            src={Barranquilla}
            className="img-modal"
            alt="barranquilla"
          ></img>
        </Modal>
        <Modal isOpen={isOpenModal12} closeModal={closeModal12}>
          <h1 className="title-modal"> Bucaramanga - Colombia</h1>
          <img src={Bucaramanga} className="img-modal" alt="bucaramanga"></img>
        </Modal>
        <Modal isOpen={isOpenModal13} closeModal={closeModal13}>
          <h1 className="title-modal"> Armenia - Colombia</h1>
          <img src={Armenia} className="img-modal" alt="armenia"></img>
        </Modal>
        <Modal isOpen={isOpenModal14} closeModal={closeModal14}>
          <h1 className="title-modal"> Popayán - Colombia</h1>
          <img src={Popayan} className="img-modal" alt="popayan"></img>
        </Modal>
        <Modal isOpen={isOpenModal15} closeModal={closeModal15}>
          <h1 className="title-modal"> Cali - Colombia</h1>
          <img src={Cali} className="img-modal" alt="cali"></img>
        </Modal>
        <Modal isOpen={isOpenModal16} closeModal={closeModal16}>
          <h1 className="title-modal"> Alcoy - España</h1>
          <img src={Alcoy} className="img-modal" alt="alcoy"></img>
        </Modal>
        <Modal isOpen={isOpenModal17} closeModal={closeModal17}>
          <h1 className="title-modal"> Zacatecas - México</h1>
          <img src={Zacatecas} className="img-modal" alt="zacatecas"></img>
        </Modal>
      </div>
    </>
  );
}

export default Slice;
