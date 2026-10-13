import React from "react";

const Contact = () => {
  return (
    <section className="contact-two pt-160" id="contactSec">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-two__inner">
              <div className="row gutter-40">
                <div className="col-12 col-lg-6 col-xl-5">
                  <div className="contact-two__content">
                    <div className="section__header fade-up">
                      <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">CONTACT US</span>
                      <h2 className="title-animation fw-6 mt-12">Together We Achieve Greater Success</h2>
                    </div>
                    <div className="contact-content-inner mt-60 fade-up" data-delay="300">
                      <p className="text-xl"><a href="tel:239-555-0108-0977">(239) 555-0108-0977</a></p>
                      <p className="text-sm primary-text mt-8">Call us for urgent</p>
                      <div className="mt-30">
                        <a href="our-projects.html" className="btn-primary">
                          <span className="btn-animated-text" data-text="Get Direction">Get Direction</span>
                          <span className="btn-icon">
                            <i className="ph ph-arrow-up-right"></i>
                            <i className="ph ph-arrow-up-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-7">
                  <div className="contact__form fade-up">
                    <form action="#" method="post">
                      <div className="input-group">
                        <div className="input-single">
                          <label htmlFor="contactFirstName">Your Name <sup>*</sup></label>
                          <input type="text" name="contact-firstname" id="contactFirstName" placeholder="First Name" required />
                        </div>
                        <div className="input-single">
                          <label htmlFor="contactEmail">Your Email <sup>*</sup></label>
                          <input type="email" name="contact-email" id="contactEmail" placeholder="Email Address" required />
                        </div>
                      </div>
                      <div className="input-group">
                        <div className="input-single">
                          <label htmlFor="contactNumber">Phone Number <sup>*</sup></label>
                          <input type="number" name="contact-number" id="contactNumber" placeholder="Phone Number" required />
                        </div>
                        <div className="input-single">
                          <label htmlFor="chooseService">Choose Service <sup>*</sup></label>
                          <select name="service" id="chooseService" className="service-select select">
                            <option data-display="Choose Service">Choose Service</option>
                            <option value="design">Design</option>
                            <option value="develop">Development</option>
                            <option value="marketing">Marketing</option>
                            <option value="security">Security</option>
                          </select>
                        </div>
                      </div>
                      <div className="input-single">
                        <label htmlFor="contactMessage">Your Message <sup>*</sup></label>
                        <textarea name="contact-message" id="contactMessage" placeholder="Message" required></textarea>
                      </div>
                      <div className="mt-40">
                        <button type="submit" className="btn-primary" title="submit message" aria-label="submit message">
                          <span className="btn-animated-text" data-text="Send Message">Send Message</span>
                          <span className="btn-icon">
                            <i className="ph ph-arrow-up-right"></i>
                            <i className="ph ph-arrow-up-right"></i>
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;