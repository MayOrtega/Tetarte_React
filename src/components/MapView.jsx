import React from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import'leaflet/dist/leaflet.css'
import L from 'leaflet';

const markerIcon = new L.Icon({

  iconUrl: require('../img/icono-mapa.png'),
  iconSize:     [30, 30], 
});




const MapView = () => {

    const position = [0, 0]
    const santiago = [-33.37791478785865, -70.728746157947735]
    const valparaiso = [-33.045375264417544, -71.61104914367112]
    const sanAntonio = [-33.5916449111982, -71.60307076789296]
    const quintero = [-32.77269007619829, -71.53202820428933]
    const chillan = [-36.61207135309832, -72.10165237768632]
    const castro = [-42.479811328909015, -73.76365555840262]
    const rancagua = [-34.179275620542136, -70.7318332795691]
    const temuco = [-38.73678398783994, -72.59173526741617]
    const laLigua = [-32.449751913614676, -71.23277287667146]
    const pichilemu = [-34.38657210093261, -72.0059313397694]
    const barranquilla = [10.97099640110064, -74.80531757912219]
    const bucaramanga = [7.2773360035452805, -72.91325217931306]
    const alcoy = [38.69900669559145, -0.4646817424435198]
    const armenia = [40.29604189376292, 44.77646926861983]
    const cali = [3.4528084928951115, -76.52566694458419]
    const popayan = [2.478050506154297, -76.6109210742583]
    const mexico = [24.218561903350828, -101.76393423144421]


  return (
    <MapContainer center={position} zoom={2} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={santiago} icon={markerIcon} >
    <Marker position={valparaiso} icon={markerIcon}>
    <Marker position={sanAntonio} icon={markerIcon}>
    <Marker position={quintero} icon={markerIcon}>
    <Marker position={chillan} icon={markerIcon}>
    <Marker position={castro} icon={markerIcon}>
    <Marker position={rancagua} icon={markerIcon}>
    <Marker position={temuco} icon={markerIcon}>
    <Marker position={laLigua} icon={markerIcon}>
    <Marker position={pichilemu} icon={markerIcon}>
    <Marker position={barranquilla} icon={markerIcon}>
    <Marker position={bucaramanga} icon={markerIcon}>
    <Marker position={alcoy} icon={markerIcon}>
    <Marker position={armenia} icon={markerIcon}>
    <Marker position={cali} icon={markerIcon}>
    <Marker position={popayan} icon={markerIcon}>
    <Marker position={mexico} icon={markerIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    </Marker>
    </Marker>
    </Marker>
    </Marker>
    </Marker>
    </Marker>
    </Marker>
    </Marker>
    </Marker>
    </Marker>
    </Marker>
    </Marker>
    </Marker>
    </Marker>
    </Marker>
    </Marker>
  </MapContainer>
    )
}

export default MapView