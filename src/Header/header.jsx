import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isNavActive, setNavActive] = useState(false);

  const handleToggleClick = () => {
    setNavActive(!isNavActive);
  };

  const handleOverlayClick = () => {
    setNavActive(false);
  };

  return (
    <>
      <nav className={`navbar ${isNavActive ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="logo">BECC88</div>
          <button
            className={`mobile-nav-toggle ${isNavActive ? "active" : ""}`}
            aria-label="Toggle navigation"
            onClick={handleToggleClick}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <ul className={`nav-links ${isNavActive ? "active" : ""}`}>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/login">Logout</a>
            </li>
            {/* <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li> */}
          </ul>
        </div>
      </nav>
      <div
        className={`overlay ${isNavActive ? "active" : ""}`}
        onClick={handleOverlayClick}
      ></div>
      <section id="home">
        <div className="bg-effect bg-effect-1"></div>
        <div className="section-content">
          <h1 className="section-title">Welcome BECC88</h1>
        </div>
      </section>
      {/* <section id="contact">
        <div className="bg-effect bg-effect-1"></div>
        <div className="section-content">
          <h1 className="section-title">Contact</h1>
          <p className="section-description">
            Let's create something amazing together
          </p>
        </div>
      </section> */}
      {/*
        <section id="services">
          <div className="bg-effect bg-effect-1"></div>
          <div className="section-content">
            <h1 className="section-title">Services</h1>
            <p className="section-description">
              Innovative solutions tailored to your unique needs
            </p>
          </div>
        </section>

        <section id="portfolio">
          <div className="bg-effect bg-effect-2"></div>
          <div className="section-content">
            <h1 className="section-title">Portfolio</h1>
            <p className="section-description">
              Discover our groundbreaking projects and success stories
            </p>
          </div>
        </section>
       */}
    </>
  );
};

export default Header;
