import React from 'react'
import Modal from './Modal'
import foto from '../img/Santiago grupo 1.jpg'
import useModal from './useModal'


const Modals = () => {
  const [isOpenModalPic1, openModalPic1, closeModalPic1] = useModal(false)
  const [isOpenModalPic2, openModalPic2, closeModalPic2] = useModal(false)
  return (
    <div>
        <button onClick={openModal1}>Modal 1</button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
          <h3>Modal 1</h3>
          <p>Contenido del modal 1</p>
          <img src={foto} className='img-modal'></img>
        </Modal>
        <button onClick={openModal2}>Modal 2</button>
        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
          <p>Contenido del modal 2</p>  
          <img src={foto} className='img-modal'></img>
        </Modal>

    </div>
  )
}

export default Modals