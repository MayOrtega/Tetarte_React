import React, { useState, useEffect } from 'react'
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const Show = () => {
  //1 - configuramos los hooks
  const [post, setPost] = useState( [] )

  //2 - referenciamos a la DB firestore
  const postCollection = collection(db, "posts")

  //3 - Funcion para mostrar TODOS los docs
  const getPost = async ()   => {
   const data = await getDocs(postCollection)
   //console.log(data.docs)
   setPost(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
   //console.log(products)
  }
  //4 - Funcion para eliminar un doc
  const deletePost = async (id) => {
   const postDoc = doc(db, "posts", id)
   await deleteDoc(postDoc)
   getPost()
  }
  //5 - Funcion de confirmacion para Sweet Alert 2
  const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Elimina el post?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) { 
        //llamamos a la fcion para eliminar   
        deletePost(id)               
        Swal.fire(
          'Deleted!',
          'Your post has been deleted.',
          'success'
        )
      }
    })    
  }
  //6 - usamos useEffect
  useEffect( () => {
    getPost()
    // eslint-disable-next-line
  }, [] )
  //7 - devolvemos vista de nuestro componente
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          {/* <div className="d-grid gap-2">
            <Link to="/create" className='btn btn-secondary mt-2 mb-2'>Create</Link>    
          </div> */}
          <table className='table table-dark table-hover'>
            <thead>
              <tr>
                <th>Comentario</th>
                <th>Nombre</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              { post.map( (post) => (
                <tr key={post.id}>
                  <td>{post.comment}</td>
                  <td>{post.name}</td>
                  <td>
                    
                    <button onClick={ () => { confirmDelete(post.id) } } className="btn btn-close-white"><i className="fa-solid fa-trash"></i></button>
                  </td>
                </tr>                
              )) }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default Show