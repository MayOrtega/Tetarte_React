import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'
import Swal from "sweetalert2";

const Create = () => {
  const [ comment, setComment ] = useState('');
  const [ name, setName ] = useState('');
  const [mail, setMail] = useState ('');


  const postCollection = collection(db, "posts")

  const store = async (e) => {
    e.preventDefault()
    if(name !== '' && comment !== '' && mail !== ''){
    await addDoc( postCollection, { comment: comment, name: name, mail: mail })
    window.location.href = '../views/BlogTetarte.jsx';
    
    Swal.fire('Comentario Grabado')
    }else{
      Swal.fire('Debes completar todos los campos')
    }
    
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col' id='create-comment'>
                <h1 className='title-comment'>Déjanos un comentario</h1>
                 <form onSubmit={store}>
                    <div className='mb-3'>
                       <textarea
                            value={comment}
                            onChange={ (e) => setComment(e.target.value)} 
                            type="text"
                            className='form-control'
                            cols="40"
                            rows="5"
                        />
                    </div>  
                    <div className='mb-3'>
                        <label className='form-label'>Nombre</label>
                        <input
                            value={name}
                            onChange={ (e)=> setName(e.target.value)} 
                            type="text"
                            className='form-control'
                        />                 
                    </div> 
                    <div className='mb-3'>
                        <label className='form-label'>E-mail</label>
                        <input
                            value={mail}
                            onChange={ (e)=> setMail(e.target.value)} 
                            type="mail"
                            className='form-control'
                        />                 
                    </div>  
                    <button type='submit' className='btn btn-success' id='btn-submit-create'>Enviar</button>
                 </form>   
            </div>
        </div>
    </div> 
  )
}

export default Create