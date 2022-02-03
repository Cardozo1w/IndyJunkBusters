import React from "react";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="site-footer">
      <p className="copyright">
        All rights reserved , Indy Junk Busters {date.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
