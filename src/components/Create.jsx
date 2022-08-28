import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'

const Create = () => {
  const [ comment, setComment ] = useState('')
  const [ name, setName ] = useState('')
//   const navigate = useNavigate()

  const postCollection = collection(db, "posts")

  const store = async (e) => {
    e.preventDefault()
    await addDoc( postCollection, { comment: comment, name: name } )
    window.location.href = '../views/BlogTetarte.jsx';
    //console.log(e.target[0].value)
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
                    <button type='submit' className='btn btn-success' id='btn-submit-create'>Enviar</button>
                 </form>   
            </div>
        </div>
    </div> 
  )
}

export default Create