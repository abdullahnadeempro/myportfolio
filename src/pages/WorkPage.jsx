import React, { useState } from "react";
import { categories, projects } from "../data/portfolioData";

const WorkPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="portfolio-two pt-160 pb-160 scale-wrapper" id="portfolioSec">
      <div className="container">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="row">
          <div className="col-12">
            <div className="section__header-wrapper mb-60 fade-up">
              <div className="row gutter-20 align-items-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-8">
                  <div className="section__header">
                    <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">
                      MY WORK
                    </span>
                    <h2 className="title-animation fw-6 mt-16">
                      Innovative Projects & Tech Solutions
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-sm-10 col-md-8 col-lg-4">
                  <div>
                    <p className="primary-text">
                      Explore creative creative coding solutions crafted to solve problems efficiently.
                    </p>
                    <div className="mt-30">
                      <a href="#contactSec" className="btn-primary">
                        <span className="btn-animated-text" data-text="Hire Me">
                          Hire Me
                        </span>
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

        {/* ==================== FILTER BUTTONS (Scrollable) ==================== */}
        <div className="row">
          <div className="col-12">
            <div className="work-filter-wrapper fade-up">
              <div className="work-filter">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    className={`work-filter__btn ${
                      activeFilter === cat.key ? "active" : ""
                    }`}
                    onClick={() => setActiveFilter(cat.key)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ==================== PROJECTS GRID (3 per row) ==================== */}
        <div className="row gutter-30 mt-60">
          {filteredProjects.map((p) => (
            <div key={p.id} className="col-12 col-md-6 col-lg-4">
              <div className="work-card">
                {/* ---------- Thumbnail ---------- */}
                <div className="work-card__thumb">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${p.title}`}
                  >
                    <img src={p.img} alt={p.title} />
                  </a>

                  {/* Hover overlay */}
                  <div className="work-card__overlay">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="work-card__view-btn"
                    >
                      <i className="ph ph-arrow-up-right"></i>
                      <span>View Live</span>
                    </a>
                  </div>

                  {/* Category badge */}
                  <span className="work-card__tag">{p.tag}</span>
                </div>

                {/* ---------- Content ---------- */}
                <div className="work-card__body">
                  <h4 className="work-card__title">
                    <a href={p.live} target="_blank" rel="noreferrer">
                      {p.title}
                    </a>
                  </h4>

                  <p className="work-card__desc">{p.description}</p>

                  <div className="work-card__tech">
                    {p.tech.slice(0, 3).map((t, k) => (
                      <span key={k} className="work-card__tech-item">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="work-card__divider"></div>

                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="work-card__live"
                  >
                    <span>
                      <i className="ph ph-globe"></i>
                      View Live Project
                    </span>
                    <i className="ph ph-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== CTA ==================== */}
        <div className="row mt-100" id="contactSec">
          <div className="col-12 text-center fade-up">
            <h3 className="title-animation fw-6">
              Have a project in mind?{" "}
              <span className="secondary-text">Let's talk.</span>
            </h3>
            <div className="mt-30">
              <a href="mailto:abdullah@example.com" className="btn-primary">
                <span className="btn-animated-text" data-text="Contact Me">
                  Contact Me
                </span>
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
  );
};

export default WorkPage;