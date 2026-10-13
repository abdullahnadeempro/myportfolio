import React from "react";

const items = [
  { org: "National University", yr: "2019 - 2020", t: "Diploma in Computer" },
  { org: "Wealcoder", yr: "2016 - 2020", t: "Wordpress Development" },
  { org: "Bluebush Designs", yr: "2017 - 2018", t: "Web Design Course" },
  { org: "Larsen & Toubro", yr: "2010 - 2012", t: "University of California" },
];

const Skills = () => {
  return (
    <div className="skill-two pt-160 scale-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header text-center mb-60 fade-up">
              <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">Visit my skills & RESUME</span>
              <h2 className="title-animation fw-6 mt-16">Professional Timeline and Milestones</h2>
              <p className="primary-text mt-16">
                A detailed journey of my experience, skills, education, and career achievements to date.
              </p>
              <div className="skill__tab-btns mt-40">
                <button data-target="#skillTwo" className="skill-tab-btn active">Skills</button>
                <span></span>
                <button data-target="#educationTwo" className="skill-tab-btn">Education</button>
                <button data-target="#experienceTwo" className="skill-tab-btn">Experience</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="skill-two__inner">
              {["skillTwo", "educationTwo", "experienceTwo"].map((id) => (
                <div key={id} className="skill-two__item" id={id}>
                  <div className="row gutter-24">
                    {items.map((s, i) => (
                      <div key={i} className="col-12 col-lg-6">
                        <div className="skill-two__single scale-up">
                          <div className="skill-two__intro">
                            <p>{s.org}</p>
                            <p>{s.yr}</p>
                          </div>
                          <div className="skill-two__content">
                            <h5 className="fw-6">{s.t}</h5>
                            <p className="primary-text mt-16">
                              Owing to advancements in product designer technologies, into greater popularity in the past few years.
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;