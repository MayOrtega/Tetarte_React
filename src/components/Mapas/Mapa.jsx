import React from 'react'
import GoogleMaps from "simple-react-google-maps"

const Mapa = () => {
  return (
    <div>
        <div className='div-mapa'>
        <GoogleMaps
  apiKey={"AIzaSyANIGMyhrjaPFZNMjrKTcyhLTIuPEVLzcw"}
  style={{height: "800px", width: "100%"}}
  zoom={1.7}
  center={{lat: -33.49996108528072, lng: -70.65184185992584}}
  markers={[
    {lat: -33.49996108528072, lng: -70.65184185992584},
    {lat: 11.009585880273407, lgn:-74.81802052108321},
    {lat: 7.113924179074958, lgn: -73.1328070837104},
    {lat: -42.481710343539, lgn:-73.76168145253823},
    {lat: 38.698370327582275, lgn: -0.47515308659382105}
]}
  
  
/>
</div>
      
    </div>
  )
}

export default Mapa