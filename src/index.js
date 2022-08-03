import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Somos from './views/Somos';
import Paises from './views/Paises';
import Contacto from './views/Contacto'
import Temuco from './views/Temuco';
import SanAntonio from './views/SanAntonio';
import Santiago from './views/Santiago';
import Castro from './views/Castro';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/views/Somos.jsx" element={<Somos />} />
    <Route path="/views/Paises.jsx" element={<Paises />} />
    <Route path="/views/Contacto.jsx" element={<Contacto />}/>
     <Route path="/views/Temuco.jsx" element={<Temuco />} />
     <Route path="/views/SanAntonio.jsx" element={<SanAntonio />} />
     <Route path="/views/Santiago.jsx" element={<Santiago />} />
     <Route path="/views/Castro.jsx" element={<Castro />} />
     </Routes>
  </BrowserRouter>
  
);

