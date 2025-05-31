import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-text">
        © {currentYear} Laukik.
      </div>
    </footer>
  );
};

export default Footer;
