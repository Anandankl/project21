/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Halaman1 from './component/halaman1/halaman1';
import Contactus from './component/contact-us/contact-us';
import Profil from './component/profil/profil';
import Daftarharga from './component/Daftarharga/daftarharga';


function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Halaman1 />} />
        <Route path="Contactus" element={<Contactus />} />
        <Route path="Profil" element={<Profil />} />
        <Route path="Daftarharga" element={<Daftarharga />} />
      </Routes>
    </div>
  );
}

export default App;
