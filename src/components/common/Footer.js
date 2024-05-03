import React from "react";
import "./Footer.scss";

const Footer = () => {
  var year = new Date().getFullYear();

  return (
    <footer className="container text-center">
      <p style={{ fontSize: "13px" }}>
        <span style={{ color: "#989898" }}>© {year} </span>Darian Sampare
      </p>
      <div id="social">
        <a
          href="https://github.com/justDare"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.instagram.com/dariansampare/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon-eye fab fa-instagram"></i>
        </a>
        <a
          href="https://ca.linkedin.com/in/dariansampare"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://dariansampare.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-passport"></i>
        </a>
      </div>
      <p className="love">
        Made with <i className="fas fa-heart"></i> in Victoria, BC
      </p>
    </footer>
  );
};

export default Footer;
