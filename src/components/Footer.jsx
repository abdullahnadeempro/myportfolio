
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-two">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="footer-two__intro fade-right">
              <div className="logo">
                <Link to="/">
                  <img
                    src="/assets/images/logo.png"
                    alt="Abdullah Nadeem"
                    className="logo-ch"
                  />
                </Link>
              </div>

              <div className="mt-20">
                <p className="neutral-text text-md">
                  Abdullah Nadeem — Full Stack Web Developer in
                  Toba Tek Singh, Pakistan. Building modern websites
                  and web applications with React and Node.js.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-2 col-xl-3">
            <div className="footer-two__nav fade-right">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/work">Projects</Link></li>
                <li><a href="/#contactSec">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-lg-5 col-xl-5">
            <div className="footer-two__text fade-right">
              <h3 className="pulse-text title-xxl">LET'S TALK</h3>
              <h3 className="pulse-text-light title-xxl">LET'S TALK</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        <div className="container">
          <div className="row align-items-center gutter-24">
            <div className="col-12 col-lg-4">
              <div className="footer__copyright-left">
                <p>
                  <i className="ph ph-copyright"></i>{" "}
                  {new Date().getFullYear()}{" "}
                  <Link to="/">Abdullah Nadeem</Link>.
                  All rights reserved.
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="social justify-content-center">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="footer__copyright-right">
                <p>Full Stack Web Developer · Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
