import React from "react";
import Hero from "../Components/Hero";
import Layout from "../Components/Layout";
import flooring1 from '../img/flooring/flooring1.jpeg';
import flooring2 from '../img/flooring/flooring2.jpeg';
import flooring3 from '../img/flooring/flooring3.jpeg';
import flooring4 from '../img/flooring/flooring4.jpeg';
import flooring5 from '../img/flooring/flooring5.jpeg';
import flooring6 from '../img/flooring/flooring6.jpeg';
import flooring7 from '../img/flooring/flooring7.jpeg';


import { useState } from "react";

const Flooring = () => {

  const [srcImg, setSrc] = useState(flooring1.src)

  return (
    <Layout>
      <Hero />
      <section>
        <div className="section-title" id="section">
          <h2>Gallery</h2>
        </div>
        <div className="container gallery">
          <h1>Flooring</h1>
          <img id="galeria" src={srcImg} alt="Imagen Galeria" />
          <nav>
            <ul>
              <li><a onClick={()=>setSrc(flooring2.src)}><img src={flooring2.src} alt="Imagen Galeria" /></a></li>
              <li><a onClick={()=>setSrc(flooring3.src)}><img src={flooring3.src} alt="Imagen Galeria" /></a></li>
              <li><a onClick={()=>setSrc(flooring4.src)}><img src={flooring4.src} alt="Imagen Galeria" /></a></li>
              <li><a onClick={()=>setSrc(flooring5.src)}><img src={flooring5.src} alt="Imagen Galeria" /></a></li>
              <li><a onClick={()=>setSrc(flooring6.src)}><img src={flooring6.src} alt="Imagen Galeria" /></a></li>
              <li><a onClick={()=>setSrc(flooring7.src)}><img src={flooring7.src} alt="Imagen Galeria" /></a></li>
              <li><a onClick={()=>setSrc(flooring1.src)}><img src={flooring1.src} alt="Imagen Galeria" /></a></li>
            </ul>
          </nav>
        </div>
      </section>
    </Layout>
  );
};

export default Flooring;
