import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";

const Layout = ({ children }) => {
  return (
    <>
      <Hero />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
