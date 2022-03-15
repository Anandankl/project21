import React from 'react';
import '../hubungi_kami/hubungikami.css'; 
import { Link } from "react-router-dom";

function hubungikami() {
    return (
      <>
        <section className="bg-light pattern-overlay-1-dark">
		<div className="container">
			<div className="col-md-12 col-lg-9 mx-auto p-4 p-sm-5 position-relative">
				<div className="text-center px-0 px-sm-5">
					<h2>HUBUNGI KAMI</h2>
					<p className="mb-3 ">Untuk Melakukan Pemesanan, Konsultasi & Mendapatkan Informasi Lainnya</p>


        
			<Link to="/Contactus">
				<button type="button" className="btn btn-primary">Hubungi Kami</button>
			</Link>


				</div>
			</div>
		</div>
	</section>

      </>
   
    )
}

export default hubungikami;