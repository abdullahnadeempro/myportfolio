import React from "react";

const MobileMenu = () => {
  return (
    <>
      <div className="mobile-menu d-block d-xxl-none">
        <nav className="mobile-menu__wrapper">
          <div className="mobile-menu__header nav-fade">
            <div className="logo">
              <a href="index.html" aria-label="home page" title="logo">
                <img src="/assets/images/logo.png" alt="Image" className="logo-ch" />
              </a>
            </div>
            <button aria-label="close mobile menu" className="close-mobile-menu">
              <i className="ph ph-x"></i>
            </button>
          </div>
          <div className="mobile-menu__list"></div>
          <div className="mobile-menu__cta d-block d-md-none nav-fade">
            <a href="#contactSec" className="btn-primary">
              <span className="btn-animated-text" data-text="contact us">Contact Us</span>
              <span className="btn-icon">
                <i className="ph ph-arrow-up-right"></i>
                <i className="ph ph-arrow-up-right"></i>
              </span>
            </a>
          </div>
          <div className="mobile-menu__social social nav-fade">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="share us on linkedin" title="linkedin">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://dribbble.com/" target="_blank" rel="noreferrer" aria-label="share us on dribble" title="dribble">
              <i className="fa-solid fa-basketball"></i>
            </a>
            <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="share us on twitter" title="twitter">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.behance.net/" target="_blank" rel="noreferrer" aria-label="share us on vimeo" title="vimeo">
              <i className="fa-brands fa-behance"></i>
            </a>
          </div>
        </nav>
      </div>
      <div className="mobile-menu__backdrop"></div>
    </>
  );
};

export default MobileMenu;