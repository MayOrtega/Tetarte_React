import album1 from '../img/santiago/grupo1/preview-lista1.jpg'
import album2 from '../img/santiago/grupo2/preview-lista2.jpg'
import album3 from '../img/santiago/grupo3/preview-lista3.jpg'
import album4 from '../img/castro/preview-castro.jpg'

const Pictures = () => {
  return (
    <>
    <div className='content-pictures'>
        <section><img src={album1} className='pictures'></img></section>
        <section><img src={album2} className='pictures'></img></section>
        <section><img src={album3} className='pictures'></img></section>
        <section><img src={album4} className='pictures'></img></section>
       </div>
    </>
  )
}

export default Pictures
