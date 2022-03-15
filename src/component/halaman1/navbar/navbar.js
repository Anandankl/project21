import React from 'react';
import '../navbar/navbar.css';
import logo from '../navbar/logo1.png';
import { Link } from "react-router-dom";



function Navbar() {
    return (
      <>
        <div className="container">
          <header className="container-fluid d-flex flex-wrap justify-content-center py-3 mb-4 fixed-top">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
              
              <span className="fs-4">
                <img className="img1" src= {logo} alt="#"></img>
              </span>
            </a>

            <div className="topLeftBorders">
            <Link to="/">HOME</Link>
            <Link to="/Profil">PROFIL</Link>
            <Link to="/Daftarharga">DAFTAR HARGA</Link>
            <Link to="/Contactus">CONTACT US</Link>
            </div>

          </header>

        </div>
      </>
   );
  }

  export default Navbar;