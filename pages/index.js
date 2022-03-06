import React from "react";
import Head from "next/head";
import Layout from "../Components/Layout";
import Junk from "../img/junk2.webp";
import interior1 from "../img/interior1.webp";
import tree from "../img/tree.webp";
import Contact from "../Components/Contact";
import Hero from "../Components/Hero";

const Index = () => {
  return (
    <>
      <Head>
        <title>Indy Junk Busters</title>
        <link
          href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
          rel="stylesheet"
        />
        <meta name="descripción" content="Best Junk Removers"/>
      </Head>

      <Layout>
        <Hero />
        <section className="contenedor categorias">
          <div className="section-title">
            <h2>Our Main Services</h2>
          </div>

          <div className="listado-categorias">
            <div className="categoria">
              <img src={Junk.src} alt="Junk Removal" />
              <a href="#">Junk Removal</a>
            </div>

            <div className="categoria">
              <img src={interior1.src} alt="General Remodeling" />
              <a href="#">General Remodeling</a>
            </div>

            <div className="categoria">
              <img src={tree.src} alt="Tree Services" />
              <a href="#">Tree Services</a>
            </div>
          </div>
        </section>

        <section className="sobre-nosotros" id="about">
          <div className="contenedor sobre-nosotros-grid">
            <div className="texto-nosotros">
              <h2>About Us</h2>
              <p>
                We are a small business who is skilled in many areas. We do junk
                removal and hauling, residential and commercial cleaning,
                flooring installation, general remodeling, and tree services. We
                do more than the services listed. If you have an inquiry about
                other services feel free to call or email us
              </p>
            </div>
          </div>
        </section>

        <main className="contenido-principal contenedor">
          <div className="section-title">
            <h2>Our Services</h2>
          </div>
          <p className="text-center mb-5">
            We provide professional services to remove unwanted items from your
            property, this will save you a lot of time, since we will take care
            of everything from removing all the garbage to disposing of it in
            the right place.
          </p>
          <div className="services">
            <div>
              <h3>Junk</h3>
              <p>Junk Removal/ Hauling</p>
              <p>Appliance Removal/Hauling</p>
              <p>Carpet Removal</p>
              <p>Refrigerator Removal</p>
              <p>Furniture Removal</p>
              <p>Hot Tub Removal</p>
              <p>Mattress Removal</p>
              <p>Construction Debris Removal</p>
            </div>
            <div>
              <h3>Cleanout</h3>
              <p>Garage Cleanout Service</p>
              <p>Basement Cleanout Service</p>
              <p>Attic Cleanout Service</p>
              <p>Office Cleanout Service</p>
              <p>Storage Unit Cleanout Service</p>
            </div>
            <div>
              <h3>Demolition</h3>
              <p>Fence & Deck Removal Services</p>
              <p>Storage Shed & Barn Demolition</p>
              <p>Bathroom Demolition</p>
               <p>Kitchen Demolition</p>
              </div>
            {/* <ul>
              <p>
                <i className="bx bx-chevron-right"></i>Junk Removal
              </p>
              <p>
                <i className="bx bx-chevron-right"></i>Hauling Floor Instalation
              </p>
              <p>
                <i className="bx bx-chevron-right"></i>Vinyl
              </p>
              <p>
                <i className="bx bx-chevron-right"></i>Laminate
              </p>
            </ul>
            <ul>
              <p>
                <i className="bx bx-chevron-right"></i>Tile
              </p>
              <p>
                <i className="bx bx-chevron-right"></i>Demolition
              </p>
              <p>
                <i className="bx bx-chevron-right"></i>Remodeling
              </p>
              <p>
                <i className="bx bx-chevron-right"></i>Cleaning
              </p>
            </ul>
            <ul>
              <p>
                <i className="bx bx-chevron-right"></i>Residential
              </p>
              <p>
                <i className="bx bx-chevron-right"></i>Commercial
              </p>
              <p>
                <i className="bx bx-chevron-right"></i>Tree Services
              </p>
            </ul> */}
          </div>
        </main>

        <Contact />
      </Layout>
    </>
  );
};

export default Index;
