import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Blog from './views/Blog';
import Somos from './views/Somos';
import Media from './views/Media';
import Paises from './views/Paises';
import Contacto from './views/Contacto'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/views/Blog" element={<Blog />} />
    <Route path="/views/Somos" element={<Somos />} />
    <Route path="/Paises" element={<Paises />} />
    <Route path="/views/Media" element={<Media />} />
    <Route path="/views/Constacto" element={<Contacto />} />
     </Routes>
  </BrowserRouter>
);

