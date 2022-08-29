import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Mexico from "../img/México.jpg";
import Popayan from "../img/Popayán copia.jpg";
import Cali from "../img/Cali Colombia Marcela Cadavid copia.jpg";
import Armenia from "../img/Armenia.jpg";
import Alcoy from "../img/Alcoy-España.jpg";
import Bucaramanga from "../img/Bucaramanga.jpg";
import Barranquilla from "../img/Barranquilla.jpg";
import Pichilemu from "../img/Pichilemu.jpg";
import LaLigua from "../img/La-Ligua.jpg";
import Temuco from "../img/Temuco.jpg";
import Rancagua from "../img/Rancagua.jpg";
import Castro from "../img/Castro.jpg";
import Chillan from "../img/Chillan.jpg";
import Quintero from "../img/Quintero.jpg";
import SanAntonio from "../img/San-Antonio.jpg";
import Valparaiso from "../img/Valparaiso.jpg";
import Santiago from "../img/Santiago grupo 1.jpg";

const markerIcon = new L.Icon({
  iconUrl: require("../img/icono-mapa.png"),
  iconSize: [30, 30],
});

const MapViewMini = () => {
  const position = [10, -50];
  const santiago = [-33.37791478785865, -70.728746157947735];
  const valparaiso = [-33.045375264417544, -71.61104914367112];
  const sanAntonio = [-33.5916449111982, -71.60307076789296];
  const quintero = [-32.77269007619829, -71.53202820428933];
  const chillan = [-36.61207135309832, -72.10165237768632];
  const castro = [-42.48044434018967, -73.76957787599582];
  const rancagua = [-34.179275620542136, -70.7318332795691];
  const temuco = [-38.73678398783994, -72.59173526741617];
  const laLigua = [-32.449751913614676, -71.23277287667146];
  const pichilemu = [-34.38657210093261, -72.0059313397694];
  const barranquilla = [10.97099640110064, -74.80531757912219];
  const bucaramanga = [7.2773360035452805, -72.91325217931306];
  const alcoy = [38.69900669559145, -0.4646817424435198];
  const armenia = [4.48845071119329, -75.59300305226971];
  const cali = [3.4528084928951115, -76.52566694458419];
  const popayan = [2.478050506154297, -76.6109210742583];
  const mexico = [24.218561903350828, -101.76393423144421];
  const genova = [44.422132, 8.875031]

  return (
    <MapContainer center={position} zoom={1} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={santiago} icon={markerIcon}>
        <Popup>
          <p>Santiago de Chile</p>
          <img src={Santiago} className="img-popup" alt=""></img>
        </Popup>
      </Marker>
      <Marker position={valparaiso} icon={markerIcon}>
        <Popup>
          <p>Valparaíso - Chile</p>
          <img src={Valparaiso} className="img-popup" alt=""></img>
        </Popup>
      </Marker>
      <Marker position={sanAntonio} icon={markerIcon}>
        <Popup>
          <p>San Antonio - Chile</p>
          <img src={SanAntonio} className="img-popup" alt=""></img>
        </Popup>
      </Marker>
      <Marker position={quintero} icon={markerIcon}>
        <Popup>
          <p>Quintero - Chile</p>
          <img src={Quintero} className="img-popup" alt=""></img>
        </Popup>
      </Marker>
      <Marker position={chillan} icon={markerIcon}>
        <Popup>
          <p>Chillán - Chile</p>
          <img src={Chillan} className="img-popup" alt=""></img>
        </Popup>
      </Marker>
      <Marker position={castro} icon={markerIcon}>
        <Popup>
          <p>Castro - Chile</p>
          <img src={Castro} className="img-popup" alt=""></img>
        </Popup>
      </Marker>
      <Marker position={rancagua} icon={markerIcon}>
        <Popup>
          <p>Rancagua - Chile</p>
          <img src={Rancagua} className="img-popup" alt=""></img>
        </Popup>
      </Marker>
      <Marker position={temuco} icon={markerIcon}>
        <Popup>
          <p>Temuco - Chile</p>
          <img src={Temuco} className="img-popup" alt=""></img>
        </Popup>
      </Marker>
      <Marker position={laLigua} icon={markerIcon}>
        <Popup>
          <p>La Ligua - Chile</p>
          <img src={LaLigua} className="img-popup" alt=""></img>
        </Popup>
      </Marker>
      <Marker position={pichilemu} icon={markerIcon}>
        <Popup>
          <p>Pichilemu - Chile</p>
          <img src={Pichilemu} className="img-popup" alt=""></img>
        </Popup>
      </Marker>
      <Marker position={barranquilla} icon={markerIcon}>
        <Popup>
          <p>Barranquilla - Colombia</p>
          <img src={Barranquilla} className="img-popup" alt=""></img>
        </Popup>
      </Marker>
      <Marker position={bucaramanga} icon={markerIcon}>
        <Popup>
          <p>Bucaramanga - Colombia</p>
          <img src={Bucaramanga} className="img-popup" alt=""></img>
        </Popup>
      </Marker>
      <Marker position={alcoy} icon={markerIcon}>
        <Popup>
          <p>Alcoy-España</p>
          <img src={Alcoy} className="img-popup" alt=""></img>
        </Popup>
      </Marker>
      <Marker position={armenia} icon={markerIcon}>
        <Popup>
          <p>Armenia - Colombia</p>
          <img src={Armenia} className="img-popup" alt=""></img>
        </Popup>
      </Marker>
      <Marker position={cali} icon={markerIcon}>
        <Popup>
          <p>Cali - Colombia</p>
          <img src={Cali} className="img-popup" alt=""></img>
        </Popup>
      </Marker>
      <Marker position={popayan} icon={markerIcon}>
        <Popup>
          <p>Popayan - Colombia</p>
          <img src={Popayan} className="img-popup" alt=""></img>
        </Popup>
      </Marker>
      <Marker position={mexico} icon={markerIcon}>
        <Popup>
          <p>Zacatecas - México</p>
          <img src={Mexico} className="img-popup" alt=""></img>
        </Popup>
      </Marker>
      <Marker position={genova} icon={markerIcon}>
        <Popup>
          <p>Genova - Italia</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapViewMini;
