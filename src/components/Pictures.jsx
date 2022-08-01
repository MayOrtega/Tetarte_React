import album1 from '../img/santiago/grupo1/preview-lista1.jpg';
import album4 from '../img/castro/preview-castro.jpg';
import useModalPic from './useModalPic';
import Modal from './Modal';
import stgo1 from '../img/santiago/grupo1/DSC_8693 copia.jpg';
import stgo2 from '../img/santiago/grupo1/DSC_8695 copia.jpg';
import stgo3 from '../img/santiago/grupo1/DSC_8704 copia.jpg';



const Pictures = () => {
  const [isOpenModalPic1, openModalPic1, closeModalPic1] = useModalPic(false)
  const [isOpenModalPic2, openModalPic2, closeModalPic2] = useModalPic(false)
  return (
    <>
    <div className='content-pictures'>
        <section className='section-pic'>
            <h3 className='title-pic'>TetArte Santiago 2022</h3>
            <img src={album1}
             className='pictures'
             onClick={openModalPic1}></img></section>
        <section className='section-pic'>
            <h3 className='title-pic'>TetArte Castro 2022</h3>
            <img src={album4}
             className='pictures'
             onClick={openModalPic2}></img></section>
    </div>
       <Modal isOpen={isOpenModalPic1} closeModal={closeModalPic1}>
        <div className='content-modal'>
        <img src={stgo1}></img>
        <img src={stgo2}></img>
        <img src={stgo3}></img>
         </div>
        </Modal>
        <Modal isOpen={isOpenModalPic2} closeModal={closeModalPic2}>
        
        </Modal>
    </>
  )
}

export default Pictures
