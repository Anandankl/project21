import React from 'react';
import '../content/content.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function content() {
    return (
      <>
      <div className='container'>
        <div className='row' id='perusahaan1'>
          <div className='col-md-6 m-auto text-center' data-aos="fade-right">
            <h1>METAL INOVASI MANDIRI</h1>
            <p className="lead mt-2"><strong>Mengapa Harus Harus Memilih Kami.</strong></p>
            <p className='lead text-justify'>Disini kami Metal Inovasi Mandiri memberikan beberapa keuntungan untuk anda yang ingin menggunakan jasa kami</p>
          </div>
        </div>
        </div>

      </>
   
    )
}

export default content;