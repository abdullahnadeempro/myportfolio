import React from "react";

const plans = [
  { name: "Basic Plan", price: "$15", margin: "" },
  { name: "Standard Plan", price: "$45", margin: "mt-25" },
  { name: "Premium Plan", price: "$75", margin: "mt-25" },
];

const Pricing = () => {
  return (
    <section className="pricing-two pt-160 scale-wrapper">
      <div className="container">
        <div className="row gutter-60">
          <div className="col-12 col-lg-5 col-xxl-6">
            <div className="section__header neutral-top fade-up">
              <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">Pricing Plan</span>
              <h2 className="title-animation fw-6 mt-16">Flexible Pricing for Every Project</h2>
              <p className="primary-text mt-16">
                Turning fleeting moments into timeless masterpieces every flash captures emotion, and perfection.
              </p>
              <div className="mt-40">
                <div className="btn-wrapper">
                  <a href="our-projects.html" className="btn-anim">
                    <i className="ph ph-arrow-up-right"></i>
                    Contact Us
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-6">
            <div className="pricing-two__wrapper">
              {plans.map((plan, i) => (
                <div key={i} className={`pricing-two__single scale-up ${plan.margin}`}>
                  <div className="pricing__content-left">
                    <span className="text-xxl fw-5">{plan.name}</span>
                    <h2 className="fw-6 mt-12">
                      <span className="title-lg">{plan.price}</span>{" "}
                      <span className="text-md primary-text fw-4">/ Per Month</span>
                    </h2>
                    <div className="mt-40">
                      <a href="contact-us.html" className="btn--secondary" title="hire me" aria-label="hire me">
                        <span className="btn-animated-text" data-text="Get Started">Get Started</span>
                      </a>
                    </div>
                  </div>
                  <div className="pricing__content-right">
                    <h6 className="fw-5">What's Include:</h6>
                    <ul className="mt-25">
                      <li className="primary-text"><i className="ph ph-caret-double-right"></i>Need your wireframe</li>
                      <li className="primary-text"><i className="ph ph-caret-double-right"></i>Your project alway be priority</li>
                      <li className="primary-text"><i className="ph ph-caret-double-right"></i>Design with Figma, Framer</li>
                      <li className="primary-text"><i className="ph ph-caret-double-right"></i>24 / 7 support</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;