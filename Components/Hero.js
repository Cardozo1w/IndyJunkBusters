import React from "react";
import { Container, Nav, Navbar,NavDropdown } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <div className="label">
        Call Us Now!! <i className="fas fa-phone-alt"></i> (317) 657-0549
      </div>
      <header>
        <h1 className="nombre-sitio">
          Indy<span> Junk Busters</span>
        </h1>
      </header>

      {/* <div className="contenedor-navegacion">
        <nav className="nav-principal contenedor">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Gallery</a>
          <a href="#">Contact Us</a>
        </nav>
      </div> */}

<Navbar bg="" expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="nav-principal">
        <Nav.Link href="#home" style={{color: '#000'}}>Home</Nav.Link>
        <Nav.Link href="#link" style={{color: '#000'}}>About Us</Nav.Link>
        <Nav.Link href="#link" style={{color: '#000'}}>Services</Nav.Link>
        <Nav.Link href="#link" style={{color: '#000'}}>Contac Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


      <div className="hero">
        <h2 className="animate__animated animate__bounceInLeft">
          Junk Removal At The Best Cost
        </h2>
        <p className="animate__animated animate__bounceInLeft">
          We Are The Best In Junk Removal Service
        </p>
      </div>
    </>
  );
};

export default Hero;
