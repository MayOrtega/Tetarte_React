import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
// import Somos from './views/Somos';
// import Paises from './views/Paises';
import Contacto from './views/Contacto'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    {/* <Route path="/views/Somos.jsx" element={<Somos />} />
    <Route path="/views/Paises.jsx" element={<Paises />} /> */}
    <Route path="/views/Contacto.jsx" element={<Contacto />} />
     </Routes>
  </BrowserRouter>
  
);

