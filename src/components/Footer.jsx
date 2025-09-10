import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div>
          <span className="footer-logo">eStore</span>
        </div>
        <div>
          <a href="#" className="footer-link">
            About
          </a>
          <a href="#" className="footer-link">
            Privacy Policy
          </a>
          <a href="#" className="footer-link">
            Licensing
          </a>
          <a href="#" className="footer-link">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
