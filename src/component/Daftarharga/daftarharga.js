import React from "react";
import Navbar from "../halaman1/navbar/navbar";
import Footer from "../halaman1/footer/footer";

import "../Daftarharga/daftarharga.css";





function Daftarharga() {
    return (
      <>
        <Navbar />

        <div className="container" id="daftarharga">
            <div className="row" id="daftarharga1">
                <div className="col-md-6 m-auto  mt-2 text-center">
                <h1 className="display-4">DAFTAR HARGA</h1>
                </div>
            </div>
        </div>







        <div className="container" id="tabelharga">
         <div className="row">
            <div className="col" id="tabel1">
               <table className="table table-bordered table-striped table-active table-hover">
                  <thead>
                     <tr>
                     <td colSpan="4" className="table-active text-center text-uppercase">Daftar Harga Metal Inovasi Mandiri 2022</td>
                     </tr>
                  </thead>
                  <tbody>
                     <tr className="text-center">
                        <td>NO</td>
                        <td>PRODUCT</td>
                        <td>DIMENSI</td>
                        <td>HARGA/UNIT</td>
                     </tr>
                     <tr>
                        <td rowSpan="4" className=" kotak1">1</td>
                        <td rowSpan="4" className=" kotak1">Ranjang Minimalis</td>
                        <td className="text-center">90 x 200</td>
                        <td className=" text-end">IDR  1.000.000,00</td>
                     </tr>
                     <tr>
                        <td className="text-center">120 x 200</td>
                        <td className=" text-end">IDR  1.400.000,00</td>
                     </tr>
                     <tr>
                        <td className="text-center">160 x 200</td>
                        <td className=" text-end">IDR  1.600.000,00</td>

                     </tr>
                     <tr>
                        <td className="text-center">180 x 200</td>
                        <td className=" text-end">IDR  1.800.000,00</td>
                     </tr>


                  </tbody>
                  </table>

                  <table className="table table-bordered table-striped table-active table-hover">

                  <tbody>
                     <tr className="text-center">
                        <td>NO</td>
                        <td>CANOPY</td>
                        <td>ATAP</td>
                        <td>HARGA/M2</td>
                     </tr>
                     <tr>
                        <td rowSpan="10" className=" kotak1">2</td>
                        <td rowSpan="5" className=" kotak1">BAJA RINGAN</td>
                        <td className="text-center">ONDULINE</td>
                        <td className=" text-end">IDR  370.000,00</td>
                     </tr>
                     <tr>
                        <td className="text-center">SPANDEK</td>
                        <td className=" text-end">IDR  330.000,00</td>
                     </tr>
                     <tr>
                        <td className="text-center">ALDERON</td>
                        <td className=" text-end">IDR  550.000,00</td>

                     </tr>
                     <tr>
                        <td className="text-center">GOGREEN</td>
                        <td className=" text-end">IDR  330.000,00</td>
                     </tr>
                     <tr>
                        <td className="text-center">POLYCARBONATE</td>
                        <td className=" text-end">IDR  360.000,00</td>
                     </tr>

                           <tr>
                              <td rowSpan="5" className=" kotak1">HOLLOW</td>
                              <td className="text-center">ONDULINE</td>
                              <td className=" text-end">IDR  385.000,00</td>
                           </tr>
                           <tr>
                              <td className="text-center">SPANDEK</td>
                              <td className=" text-end">IDR  375.000,00</td>
                           </tr>
                           <tr>
                              <td className="text-center">ALDERON</td>
                              <td className=" text-end">IDR  585.000,00</td>

                           </tr>
                           <tr>
                              <td className="text-center">GOGREEN</td>
                              <td className=" text-end">IDR  330.000,00</td>
                           </tr>
                           <tr>
                              <td className="text-center">POLYCARBONATE</td>
                              <td className=" text-end">IDR  360.000,00</td>
                           </tr>

                  </tbody>
                  </table>




                  <table className="table table-bordered table-striped table-active table-hover">
                  <tbody>
                     <tr className="text-center">
                        <td>NO</td>
                        <td>PAGAR</td>
                        <td>TYPE</td>
                        <td>HARGA/M2</td>
                     </tr>
                     <tr>
                        <td rowSpan="4" className=" kotak1">3</td>
                        <td rowSpan="4" className=" kotak1">HOLLOW</td>
                        <td className="text-center">MINIMALIS</td>
                        <td className=" text-end">IDR  595.000,00</td>
                     </tr>
                     <tr>
                        <td className="text-center">CUTTING LASER</td>
                        <td className=" text-end">IDR  1.500.000,00</td>
                     </tr>

                  </tbody>
                  </table>



                  <table className="table table-bordered table-striped table-active table-hover">
                  <tbody>
                     <tr className="text-center">
                        <td>NO</td>
                        <td>PRODUK</td>
                        <td>TYPE</td>
                        <td>HARGA/UNIT</td>
                     </tr>
                     <tr>
                        <td rowSpan="6" className=" kotak1">3</td>
                        <td className="text-center">PINTU TRALIS</td>
                        <td className="text-center">MINIMALIS</td>
                        <td className=" text-end">IDR  1.895.000,00</td>
                     </tr>
                     <tr>
                        <td rowSpan="2" className=" kotak1">KURSI BAR</td>
                        <td className="text-center">BULAT</td>
                        <td className=" text-end">IDR  825.000,00</td>
                     </tr>
                     <tr>
                        <td className="text-center">KOTAK</td>
                        <td className=" text-end">IDR  725.000,00</td>
                     </tr>

                     <tr>
                        <td className="text-center">MEJA MAKAN SET</td>
                        <td className="text-center">MINIMALIS</td>
                        <td className=" text-end">IDR  1.999.000,00</td>
                     </tr>
                     <tr>
                        <td className="text-center">JENDELA TRALIS</td>
                        <td className="text-center">MINIMALIS</td>
                        <td className=" text-end">IDR  350.000,00</td>
                     </tr>
                     <tr>
                        <td className="text-center">RAK BESI</td>
                        <td className="text-center">5 TINGKAT</td>
                        <td className=" text-end">IDR  -</td>
                     </tr>





                  </tbody>
                  </table>




                           
       </div>


        <div className="col-lg-4 text-center">
        <div className="box1 text-white">
                    <h2 id="text1">Contact Us</h2>
                    <p className=" m-lg-4 text-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg> WhatsApp</p>



                    <p className=" m-lg-4 text-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg> Instagram</p>
                    
                    <p className=" m-lg-4 text-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                    </svg> Email</p>
                </div>


        </div>

        </div>
        </div>


        <Footer />

      </>

);
}

export default Daftarharga;