/* eslint-disable no-unused-vars */
import React from 'react';
//import { BrowserRouter } from 'react-router-dom';
import '../halaman1/halaman1.css';
import Navbar from './navbar/navbar';
import Main from './main/main';
import Content from './content/content';
import Main2 from './kelebihan-perusahaan/kelebihan-perusahaan';
import Product from './product/product';
import Hubungikami from './hubungi_kami/hubungikami';
import Footer from './footer/footer';


function halaman1() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Content />
      <Main2 />
      <Product />
      <Hubungikami />
      <Footer />

    </div>
  );
}

export default halaman1;
