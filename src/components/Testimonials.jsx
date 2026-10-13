import React from "react";

const testimonials = [
  { q: "Professional, responsive, and technically skilled. Our project was delivered ahead of schedule and functions flawlessly.", name: "Ronald Richards", role: "Medical Assistant", img: "one" },
  { q: "Current enables our entire team to align, share every momentum happening and enables our entire team to align, share every day.", name: "Darrell Steward", role: "Web Developer", img: "two" },
  { q: "Exceptional developer with a strong eye for detail. The final product exceeded our expectations.", name: "Brooklyn Simmons", role: "Nursing Assistant", img: "three" },
  { q: "From the very beginning, he impressed us with his ability to understand our business needs.", name: "Bessie Cooper", role: "President of Sales", img: "four" },
];

const Testimonials = () => {
  return (
    <section className="testimonial-two pt-160">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header mb-60 text-center fade-up">
              <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">Testimonials</span>
              <h2 className="title-animation fw-6 mt-16">Real Stories, Real Success</h2>
              <p className="primary-text mt-16">For those who know what they're looking for..</p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-two__wrapper fade-up">
        <div className="testimonial-two-slider swiper">
          <div className="swiper-wrapper">
            {testimonials.map((t, i) => (
              <div key={i} className="swiper-slide">
                <div className="testimonial__single-wrapper">
                  <div className="testimonial__single">
                    <div className="testimonial__intro">
                      <div className="ratings">
                        {[...Array(5)].map((_, k) => (
                          <i key={k} className="ph-fill ph-star"></i>
                        ))}
                      </div>
                      <div className="quote">
                        <img src="/assets/images/quote.png" alt="Image" />
                      </div>
                    </div>
                    <div className="testimonial__content mt-40">
                      <p className="text-xl primary-text"><q>{t.q}</q></p>
                    </div>
                  </div>
                  <div className="testimonial__author mt-30">
                    <div className="thumb">
                      <img src={`/assets/images/avatar/${t.img}.png`} alt="Image" />
                    </div>
                    <div className="content">
                      <h6 className="fw-3">{t.name}</h6>
                      <p className="text-md primary-text">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;