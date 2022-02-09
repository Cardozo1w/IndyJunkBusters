import React from "react";
import Hero from "../Components/Hero";
import Layout from "../Components/Layout";
import kitchen1 from '../img/kitchen/kitchen1.jpeg';
import kitchen2 from '../img/kitchen/kitchen2.jpeg';
import kitchen3 from '../img/kitchen/kitchen3.jpeg';
import kitchen4 from '../img/kitchen/kitchen4.jpeg';
import kitchen5 from '../img/kitchen/kitchen5.jpeg';
import { useState } from "react";

const Kitchen = () => {

  const [srcImg, setSrc] = useState(kitchen1.src)

  var textos=[
    "Mis gafas en el escritorio",
    "Camino a la perdición",
    "Paseando en bicicleta",
    "Vias de el tren"
   ]
   
   

   


  return (
    <Layout>
      <Hero />
      <section>
        <div className="section-title" id="section">
          <h2>Gallery</h2>
        </div>
        <div className="container gallery">
          <h1>Kitchen Remodeling</h1>
          <img id="galeria" src={srcImg} alt="Imagen Galeria" />
          <nav>
            <ul>
            <li><a onClick={()=>setSrc(kitchen2.src)}><img src={kitchen2.src} alt="Imagen Galeria" /></a></li>
              <li><a onClick={()=>setSrc(kitchen3.src)}><img src={kitchen3.src} alt="Imagen Galeria" /></a></li>
              <li><a onClick={()=>setSrc(kitchen4.src)}><img src={kitchen4.src} alt="Imagen Galeria" /></a></li>
              <li><a onClick={()=>setSrc(kitchen5.src)}><img src={kitchen5.src} alt="Imagen Galeria" /></a></li>
              <li><a onClick={()=>setSrc(kitchen1.src)}><img src={kitchen1.src} alt="Imagen Galeria" /></a></li>
            </ul>
          </nav>
        </div>
      </section>
    </Layout>
  );
};

export default Kitchen;
