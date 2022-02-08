import React from "react";
import Hero from "../Components/Hero";
import Layout from "../Components/Layout";
import bathroom1 from '../img/bathroom/bathroom1.jpeg';
import bathroom2 from '../img/bathroom/bathroom2.jpeg';
import bathroom3 from '../img/bathroom/bathroom3.jpeg';
import bathroom4 from '../img/bathroom/bathroom4.jpeg';
import bathroom5 from '../img/bathroom/bathroom5.jpeg';
import bathroom6 from '../img/bathroom/bathroom6.jpeg';
import bathroom7 from '../img/bathroom/bathroom7.jpeg';


import { useState } from "react";

const Bathroom = () => {

  const [srcImg, setSrc] = useState(bathroom1.src)

  return (
    <Layout>
      <Hero />
      <section>
        <div className="section-title" id="section">
          <h2>Gallery</h2>
        </div>
        <div className="container gallery">
          <h3>Bathroom Remodeling</h3>
          <img id="galeria" src={srcImg} alt="" />
          <nav>
            <ul>
              <li><a onClick={()=>setSrc(bathroom2.src)}><img src={bathroom2.src} alt="" /></a></li>
              <li><a onClick={()=>setSrc(bathroom3.src)}><img src={bathroom3.src} alt="" /></a></li>
              <li><a onClick={()=>setSrc(bathroom4.src)}><img src={bathroom4.src} alt="" /></a></li>
              <li><a onClick={()=>setSrc(bathroom5.src)}><img src={bathroom5.src} alt="" /></a></li>
              <li><a onClick={()=>setSrc(bathroom6.src)}><img src={bathroom6.src} alt="" /></a></li>
              <li><a onClick={()=>setSrc(bathroom7.src)}><img src={bathroom7.src} alt="" /></a></li>
              <li><a onClick={()=>setSrc(bathroom1.src)}><img src={bathroom1.src} alt="" /></a></li>
            </ul>
          </nav>
        </div>
      </section>
    </Layout>
  );
};

export default Bathroom;
