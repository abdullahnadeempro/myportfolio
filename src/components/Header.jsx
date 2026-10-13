import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="main-header__menu-box">
              <nav className="navbar p-0">
                <div className="navbar-logo">
                  <Link to="/">
                    <img src="/assets/images/logo.png" alt="Image" className="logo-ch" />
                  </Link>
                </div>

                <div className="navbar__menu-wrapper">
                  <div className="navbar__menu d-none d-xl-block">
                    <ul className="navbar__list">
                      <li className="navbar__item nav-fade">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link to="/about">About</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link to="/work">Work</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <a href="#serviceSec">Services</a>
                      </li>
                      <li className="navbar__item nav-fade">
                        <a href="#newsSec">News</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="navbar__options">
                  <div className="navbar__mobile-options d-none d-sm-block">
                    <a href="#contactSec" className="btn-primary">
                      <span className="btn-animated-text" data-text="contact us">
                        Contact Us
                      </span>
                      <span className="btn-icon">
                        <i className="ph ph-arrow-up-right"></i>
                        <i className="ph ph-arrow-up-right"></i>
                      </span>
                    </a>
                  </div>
                  <button
                    className="open-offcanvas-nav d-flex d-xl-none"
                    aria-label="toggle mobile menu"
                    title="open offcanvas menu"
                  >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;