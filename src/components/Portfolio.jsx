import React from "react";

const projects = [
  { img: "two", title: "Redefining UX" },
  { img: "three", title: "Products Expertise" },
  { img: "four", title: "Brand Identities" },
  { img: "five", title: "Design Development" },
];

const Portfolio = () => {
  return (
    <div className="portfolio-two pt-160 scale-wrapper" id="portfolioSec">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header-wrapper mb-60 fade-up">
              <div className="row gutter-20 align-items-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-8">
                  <div className="section__header">
                    <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">Latest Portfolio</span>
                    <h2 className="title-animation fw-6 mt-16">Innovative Projects & Tech Solutions</h2>
                  </div>
                </div>
                <div className="col-12 col-sm-10 col-md-8 col-lg-4">
                  <div>
                    <p className="primary-text">Explore creative coding solutions crafted to solve problems efficiently.</p>
                    <div className="mt-30">
                      <a href="our-projects.html" className="btn-primary">
                        <span className="btn-animated-text" data-text="View More">View More</span>
                        <span className="btn-icon">
                          <i className="ph ph-arrow-up-right"></i>
                          <i className="ph ph-arrow-up-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gutter-60">
          {projects.map((p, i) => (
            <div key={i} className="col-12 col-md-6">
              <div className="portfolio-two__single scale-up">
                <div className="thumb">
                  <a href="project-details.html" className="img-wrap">
                    <img src={`/assets/images/portfolio/${p.img}.png`} alt="Image" className="parallax-image" />
                  </a>
                  <div className="btn-wrap">
                    <a href="project-details.html">
                      <i className="ph ph-arrow-up-right"></i>
                      View Details
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="content mt-30">
                  <h4>
                    <a href="project-details.html" className="title-animation fw-6">{p.title}</a>
                  </h4>
                  <div className="tags">
                    <a href="our-projects.html">UX/UX Design</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;