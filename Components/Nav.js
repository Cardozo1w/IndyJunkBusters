import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../img/logo.png";
import recurso1 from "../img/Recurso1.png";
import camioneta from "../img/Camioneta.png";

const Navigation = () => {

  return (
    <>
    <a href="tel:+13176570549">
      <div className="label">
        Call Us Now!! <i className="fas fa-phone-alt"></i>+1 (317) 657-0549
      </div>
      </a>
      <header>
        <div className="titulo-principal">
          <img src={camioneta.src} className="truck" alt="Camnioneta Logo" />
            <a href="/">
            <img
              src={recurso1.src}
              style={{ width: "60%", margin: "0 auto" }}
              alt="Letras Logo"
            />
            </a>
        </div>
      </header>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <a className="nav-link scrollto" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="/#about">
              About
            </a>
          </li>
          <li className="dropdown">
            <a
              href="#"
              onClick={(e) => {
                if (
                  document
                    .querySelector("#navbar")
                    .classList.contains("navbar-mobile")
                ) {
                  e.preventDefault();
                  e.target.nextElementSibling.classList.toggle(
                    "dropdown-active"
                  );
                }
              }}
            >
              <span>Gallery</span> <i className="bi bi-chevron-right"></i>
            </a>
            <ul>
              <li>
                <a href="/kitchen#section">Kitchen Remodeling</a>
              </li>
              <li>
                <a href="/bathroom#section">Bathroom remodeling</a>
              </li>
              <li>
                <a href="/flooring#section">Flooring</a>
              </li>
            </ul>
          </li>
          {/* <li>
            <a className="nav-link scrollto" href="/gallery">
              Gallery
            </a>
          </li> */}
          <li>
            <a className="nav-link scrollto" href="/#contact">
              Contact
            </a>
          </li>
        </ul>
        <i
          className="bi bi-list mobile-nav-toggle"
          onClick={(e) => {
            document.querySelector("#navbar").classList.toggle("navbar-mobile");
            e.target.classList.toggle("bi-list");
            e.target.classList.toggle("bi-x");
          }}
        ></i>
      </nav>
    </>
  );
};

export default Navigation;
