import React from "react";

const Blog = () => {
  return (
    <section className="blog-two pt-160 pb-160" id="newsSec">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header-wrapper mb-60 fade-up">
              <div className="row gutter-20 align-items-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-8">
                  <div className="section__header">
                    <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">Latest News</span>
                    <h2 className="title-animation fw-6 mt-16">Take a look at our latest blog & articles.</h2>
                  </div>
                </div>
                <div className="col-12 col-sm-10 col-md-8 col-lg-4">
                  <div>
                    <p className="primary-text">We put your ideas and thus your wishes in the form of a unique</p>
                    <div className="mt-30">
                      <a href="news.html" className="btn-primary">
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
          <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
            <div className="blog-two__single fade-up">
              <div className="thumb">
                <a href="news-details.html">
                  <img src="/assets/images/blog/three.png" alt="Image" className="parallax-image" />
                </a>
                <span className="tag">Inspiring</span>
              </div>
              <div className="content-wrapper">
                <div className="content mt-80">
                  <h5 className="neutral-top">
                    <a href="news-details.html" className="title-animation fw-4">The Power of Minimal Design in 2025</a>
                  </h5>
                </div>
                <hr className="divider mt-30 mb-30" />
                <div className="blog-two__cta">
                  <p className="text-sm"><i className="ph ph-calendar-plus"></i> July 12, 2025</p>
                  <p className="text-sm"><i className="ph ph-user"></i> Subrata Sen</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
            <div className="blog-two__single fade-up" data-delay="300">
              <div className="content-wrapper">
                <div className="content">
                  <h5 className="neutral-top">
                    <a href="news-details.html" className="title-animation fw-4">Behind the Scenes of My Favourite Work</a>
                  </h5>
                </div>
                <hr className="divider mt-30 mb-30" />
                <div className="blog-two__cta">
                  <p className="text-sm"><i className="ph ph-calendar-plus"></i> July 12, 2025</p>
                  <p className="text-sm"><i className="ph ph-user"></i> Subrata Sen</p>
                </div>
              </div>
              <div className="thumb mt-80">
                <a href="news-details.html">
                  <img src="/assets/images/blog/four.png" alt="Image" className="parallax-image" />
                </a>
                <span className="tag">Design</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xxl-6">
            <div className="blog-two__single fade-up" data-delay="600">
              <div className="thumb">
                <a href="news-details.html">
                  <img src="/assets/images/blog/five.png" alt="Image" className="parallax-image" />
                </a>
                <span className="tag">Development</span>
              </div>
              <div className="content-wrapper">
                <div className="content mt-30">
                  <h4 className="neutral-top">
                    <a href="news-details.html" className="title-animation fw-4">Designing My Path: A Journey Through Creativity</a>
                  </h4>
                </div>
                <hr className="divider mt-30 mb-30" />
                <div className="blog-two__cta">
                  <p className="text-sm"><i className="ph ph-calendar-plus"></i> July 12, 2025</p>
                  <p className="text-sm"><i className="ph ph-user"></i> Subrata Sen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;