import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// gambar product kitchenset
import list1 from "./Kitchen set/001/kitchenset1.jpg";
import list2 from "./Kitchen set/003/kabinet-kitchenset.jpg";
import list3 from "./Kitchen set/005/model-lemari-dapur-minimalis.jpg";


//gambar product pagar
import list4 from "./pagar/001/pagar1.jpg";
import list5 from "./pagar/002/pagar2.jpg";
import list6 from "./pagar/003/pagar3.jpg";


//gambar product meja
import list7 from "./meja _ kursi minimalis/008/meja1.jpg";
import list8 from "./meja _ kursi minimalis/010/meja2.jpg";
import list9 from "./meja _ kursi minimalis/002/meja4.jpg";



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./product.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
         <div className='container-fluid' id="listproduct1">
        <div className='row' id='product1'>
          <div className='col-md-6 m-auto text-center' >
            <h1>Our Product</h1>
          </div>
        </div>
        </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}

        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>
        <div className="container">
            <div className="box">
                <p className="listproduct"></p>
                <img src= { list1 }></img>

            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="container">
            <div className="box">
                <p className="listproduct"></p>
                <img src= { list2 }></img>
                
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="container">
            <div className="box">
                <p className="listproduct"></p>
                <img src= { list3 }></img>
                
            </div>
        </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className="container">
            <div className="box">
                <p className="listproduct"></p>
                <img src= { list4 }></img>
                

            </div>
        </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className="container">
            <div className="box">
                <p className="listproduct"></p>
                <img src= { list5 }></img>
                

            </div>
        </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className="container">
            <div className="box">
                <p className="listproduct"></p>
                <img src= { list6 }></img>
                

            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="container">
            <div className="box">
                <p className="listproduct"></p>
                <img src= { list7 }></img>
                

            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="container">
            <div className="box">
                <p className="listproduct"></p>
                <img src= { list8 }></img>
                

            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="container">
            <div className="box">
                <p className="listproduct"></p>
                <img src= { list9 }></img>
                

            </div>
        </div>
        </SwiperSlide>
      </Swiper>


      <div className='row' id='product2'>
          <div className='col-md-6 m-auto text-center' >
          </div>
        </div>

        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}

        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>
        <div className="container">
            <div className="box" id="listproduk2">
                <p className="listproduct"></p>
                <img src= { list1 }></img>


            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="container">
            <div className="box">
                <p className="listproduct"></p>
                <img src= { list2 }></img>
                

            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="container">
            <div className="box">
                <p className="listproduct"></p>
                <img src= { list3 }></img>
                

            </div>
        </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className="container">
            <div className="box">
                <p className="listproduct"></p>
                <img src= { list4 }></img>
                

            </div>
        </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className="container">
            <div className="box">
                <p className="listproduct"></p>
                <img src= { list5 }></img>
                

            </div>
        </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className="container">
            <div className="box">
                <p className="listproduct"></p>
                <img src= { list6 }></img>
                

            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="container">
            <div className="box">
                <p className="listproduct"></p>
                <img src= { list7 }></img>
                

            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="container">
            <div className="box">
                <p className="listproduct"></p>
                <img src= { list8 }></img>
                

            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="container">
            <div className="box">
                <p className="listproduct"></p>
                <img src= { list9 }></img>
                

            </div>
        </div>
        </SwiperSlide>
      </Swiper>

        

    </>
  );
}
