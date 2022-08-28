import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase"

const Edit = () => {
    const [ comment, setComment ] = useState('')
    const [ name, setName ] = useState('')

    const navigate = useNavigate()    
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        const post = doc(db, "post", id)
        const data = {comment: comment, name: name}
        await updateDoc(post, data)
        navigate('/')
    }

    const getPostById = async (id) => {
        const post = await getDoc( doc(db, "post", id) )
        if(post.exists()) {
            //console.log(product.data())
            setComment(post.data().comment)    
            setName(post.data().name)
        }else{
            console.log('El post no existe')
        }
    }

    useEffect( () => {
        getPostById(id)
        // eslint-disable-next-line
    }, [])

    return (
        <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1>Edit </h1>
                 <form onSubmit={update}>
                    <div className='mb-3'>
                        <label className='form-label'>Description</label>
                        <input
                            value={comment}
                            onChange={ (e) => setComment(e.target.value)} 
                            type="text"
                            className='form-control'
                        />
                    </div>  

                    <div className='mb-3'>
                        <label className='form-label'>Name</label>
                        <input
                            value={name}
                            onChange={ (e)=> setName(e.target.value)} 
                            type="number"
                            className='form-control'
                        />                 
                    </div>  
                    <button type='submit' className='btn btn-primary'>Update</button>
                 </form>   
            </div>
        </div>
    </div> 
    )
}

export default Edit