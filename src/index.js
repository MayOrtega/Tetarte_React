import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Proyecto from "./views/Proyecto";
import Paises from "./views/Paises";
import Contacto from "./views/Contacto";
import Temuco from "./views/Temuco";
import SanAntonio from "./views/SanAntonio";
import Santiago from "./views/Santiago";
import Castro from "./views/Castro";
import Curico from "./views/Curico";
import Rancagua from "./views/Rancagua";
import Pichilemu from "./views/Pichilemu";
import Valparaiso from "./views/Valparaiso";
import Bucaramanga from "./views/Bucaramanga";
import Dossier from "./views/Dossier"
import BlogTetarte from "./views/BlogTetarte";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Show from "./components/Show";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/views/Proyecto.jsx" element={<Proyecto />} />
      <Route path="/views/Paises.jsx" element={<Paises />} />
      <Route path="/views/Contacto.jsx" element={<Contacto />} />
      <Route path="/views/Temuco.jsx" element={<Temuco />} />
      <Route path="/views/SanAntonio.jsx" element={<SanAntonio />} />
      <Route path="/views/Santiago.jsx" element={<Santiago />} />
      <Route path="/views/Castro.jsx" element={<Castro />} />
      <Route path="/views/Curico.jsx" element={<Curico />} />
      <Route path="/views/Rancagua.jsx" element={<Rancagua />} />
      <Route path="/views/Pichilemu.jsx" element={<Pichilemu />} />
      <Route path="/views/Valparaiso.jsx" element={<Valparaiso />} />
      <Route path="/views/Bucaramanga.jsx" element={<Bucaramanga />} />
      <Route path="/views/Dossier.jsx" element={<Dossier />} />
      <Route path="/views/BlogTetarte.jsx" element={<BlogTetarte />} />
      <Route path="/components/Create.jsx" element={<Create />} />
      <Route path="/components/Edit.jsx" element={<Edit />} />
        <Route path="/components/Show.jsx" element={<Show />} />
    </Routes>
  </BrowserRouter>
);
