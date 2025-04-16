import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <div>
          <h1 className="txt-xl fw-semibold txt-primary">Custom Docs</h1>
          <p className="txt-sm txt-muted">
            Demo styled web page using our custom UI library
          </p>
        </div>
      </div>
      <div className="navbar-links">
        <ul className="navbar-menu">
          <li>
            <a href="#home" className="navbar-link">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="navbar-link">
              Features
            </a>
          </li>
          <li>
            <a href="#about" className="navbar-link">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
