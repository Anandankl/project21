import React from 'react';
import '../footer/footer.css'; 
import logo from '../navbar/logo1.png';
import { Link } from "react-router-dom";

function Footer() {
    return (
      <>
        <div className="container-fluid pt-lg-4 bg-dark">
        <div className="row pb-5">
          <div className="col-lg-4 col-md-6">
            <div className="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4">
              <img src= {logo} id="footerlogo"></img>
            </div>
            
          </div>
          <div className="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
            <div id="footer-links" className="row">
                <div className="col-lg-2" >
                    <div id="useful-links" className="collapse d-lg-block" data-bs-parent="#footer-links">
                        <ul className="nav flex-column pb-lg-1 mb-lg-3" id='listfooter'>

                            <Link to="/"><li className="nav-item"><a className="nav-link d-inline-block px-0 pt-1 pb-2">Home</a></li></Link>

                            <Link to="/Profil"><li className="nav-item"><a className="nav-link d-inline-block px-0 pt-1 pb-2">Profil</a></li></Link>

                            <Link to="/Daftarharga"><li className="nav-item"><a className="nav-link d-inline-block px-0 pt-1 pb-2">Daftar Harga</a></li></Link>

                            <Link to="/Contactus"><li className="nav-item"><a className="nav-link d-inline-block px-0 pt-1 pb-2">Contact US</a></li></Link>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-2 col-lg-3">
                    <h5 id="notdisplay"className="mb-2 bold ">Contact Us</h5>
                        <div id="social-links" className="collapse d-lg-block" data-bs-parent="#footer-links">
                            <ul className="nav flex-column mb-2 mb-lg-0">
                                <li className="nav-item"><a href="https://api.whatsapp.com/send/?phone=6285780059970&text&app_absent=0" className="nav-link d-inline-block px-0 pt-1 pb-2">WhatsApp</a></li>
                                <li className="nav-item"><a href="https://www.instagram.com/metalinovasimandiri9/?utm_medium=copy_link" className="nav-link d-inline-block px-0 pt-1 pb-2">Instagram</a></li>
                                <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Gmail</a></li>
                            </ul>     
                        </div>
                </div>

                <div className="col-xl-3 col-lg-5 pt-2 pt-lg-0">
                    <h6 className="mb-2">Our Location</h6>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7529841431056!2d106.59259621430967!3d-6.16382656212372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ffa2a79722a7%3A0x99a105c3282e2bb6!2sBengkel%20las%20METAL%20INOVASI%20MANDIRI!5e0!3m2!1sid!2sid!4v1645454830873!5m2!1sid!2sid"></iframe>
                </div>
                


            </div>
        </div>
          </div>
        <p className="fs-xs text-center text-md-start pb-2 pb-lg-0 mb-0">
          <span className="text-light opacity-50">© Made by Ananda Nikola </span>
        </p>
        </div>
      </>
   
    )
}

export default Footer;