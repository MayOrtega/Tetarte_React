import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const MySwal = withReactContent(Swal);

const Show = () => {
  //1 - configuramos los hooks
  const [post, setPost] = useState([]);

  //2 - referenciamos a la DB firestore
  const postCollection = collection(db, "posts");

  //3 - Funcion para mostrar TODOS los docs
  const getPost = async () => {
    const data = await getDocs(postCollection);
    //console.log(data.docs)
    setPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //console.log(products)
  };
  //4 - Funcion para eliminar un doc
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    getPost();
  };
  //5 - Funcion de confirmacion para Sweet Alert 2
  const confirmDelete = (id) => {
    MySwal.fire({
      title: "¿Deseas eliminar el post?",
      text: "Esta acción irreversible!",
      showCancelButton: true,
      confirmButtonColor: "#c3bf4e",
      cancelButtonColor: "#000002",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        //llamamos a la fcion para eliminar
        deletePost(id);
        Swal.fire("Eliminado!", "Tu post ha sido borrado, Ok");
      }
    });
  };
  //6 - usamos useEffect
  useEffect(() => {
    getPost();
    // eslint-disable-next-line
  }, []);
  //7 - devolvemos vista de nuestro componente
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
             <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th>Comentario</th>
                  <th>Nombre</th>
                  <th>E-mail</th>
                  <th>Eliminar</th>
                  
                </tr>
              </thead>
              <tbody>
                {post.map((post) => (
                  <tr key={post.id}>
                    <th>{post.comment}</th>
                    <td>{post.name}</td>
                    <td>{post.mail}</td>
                    <td>
                      <button
                        onClick={() => {
                          confirmDelete(post.id);
                        }}
                        className="btn btn-close-white"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Show;
