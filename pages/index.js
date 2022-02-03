import React from "react";
import Head from "next/head";
import Layout from "../Components/Layout";
import Junk from "../img/junk2.webp";
import interior1 from "../img/interior1.webp";
import tree from "../img/tree.webp";
import Contact from "../Components/Contact";

const Index = () => {
  return (
    <>
      <Head>
        <title>Indy Junk Busters</title>
      </Head>

      <Layout>
        <section className="contenedor categorias">
          <div className="section-title">
            <h2>Our Main Services</h2>
          </div>

          <div className="listado-categorias">
            <div className="categoria">
              <img src={Junk.src} alt="Imagen Categoría" />
              <a href="#">Junk Remove</a>
            </div>

            <div className="categoria">
              <img src={interior1.src} alt="Imagen Categoría" />
              <a href="#">Interior Design</a>
            </div>

            <div className="categoria">
              <img src={tree.src} alt="Imagen Categoría" />
              <a href="#">Tree Services</a>
            </div>
          </div>
        </section>

        <section className="sobre-nosotros">
          <div className="contenedor sobre-nosotros-grid">
            <div className="texto-nosotros">
              <h2>About Us</h2>
              <p>
                We are a small business who is skilled in many areas. We do junk
                removal and hauling, residential and commercial cleaning,
                flooring installation, general remodeling, and tree services. We
                do more than the services listed. If you have an inquiry about
                other services feel free to call or email us.
              </p>
            </div>
          </div>
        </section>

        <main className="contenido-principal contenedor">
        <div className="section-title">
            <h2>Our Services</h2>
          </div>
          <p className="text-center">
            We provide professional services to remove unwanted items from your
            property, this will save you a lot of time, since we will take care
            of everything from removing all the garbage to disposing of it in
            the right place.
          </p>
          <div className="services">
            <ul>
              <li>Junk Removal</li>
              <li>Hauling Floor Instalation</li>
              <li>Vinyk</li>
              <li>Laminate</li>
            </ul>
            <ul>
              <li>Tile</li>
              <li>Demolition</li>
              <li>Remodeling</li>
              <li>Cleaning</li>
            </ul>
            <ul>
              <li>Residential</li>
              <li>Commercial</li>
              <li>Tree Services</li>
            </ul>
          </div>
        </main>

        <Contact />
      </Layout>
    </>
  );
};

export default Index;
