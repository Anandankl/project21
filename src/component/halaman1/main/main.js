/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-extra-semi */
import React from 'react';
import '../main/main.css';
import { Link } from "react-router-dom";


function Main() {
    return (
        <>  
        <div id="parallax-world-of-ugg">
        <div className="parallax-two">
            <div className='w-100'>
              <div className='row'>
               <div className="col-lg-5">
                   <div className="mb-5" id='main-panel'>
                 <h1 className="display-4 mb-3 text-light "><strong>
                  METAL INOVASI MANDIRI</strong>
                </h1>
                    
                    

                    <p className=' text-light'> Bengkel Las Minimalis dan Profesional
                    </p>    
                </div>

                  <div className="d-grid d-sm-flex gap-3" id='btn-mainpanel'>
                    
                    <Link to="/Contactus">
                    <a className="btn btn-primary btn-transition px-6" id="btn1">Contact Us</a></Link>

                    
                  </div>
                </div>
              </div>


              <div className="col-lg-7 col-xl-6 d-none d-lg-block position-absolute top-0 end-0 pe-0">
                
 
        </div>
        </div>
        </div>
        </div>
        </>
    )
};

export default Main;