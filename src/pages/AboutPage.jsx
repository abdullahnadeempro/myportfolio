import React from "react";
import useOdometer from "../hooks/useOdometer";
import useTimelineAnimation from "../hooks/useTimelineAnimation";

const AboutPage = () => {
  useOdometer();
  useTimelineAnimation();

  // ✅ SAHI PATH — public folder se root se accessible
  const myPhoto = "/assets/images/myimg/myimg.png";
  const myPhoto2 = "/assets/images/myimg/amyimg.png";

  // Timeline data
  const timeline = [
    {
      year: "Matric",
      title: "Matriculation",
      org: "Government School, Local",
      text: "Completed my matriculation from a local government school. Here I first discovered my interest in computers and technology.",
      side: "left",
    },
    {
      year: "Intermediate",
      title: "Intermediate",
      org: "Punjab College",
      text: "Studied at Punjab College where I developed strong analytical and problem-solving skills that became the base of my programming career.",
      side: "right",
    },
    {
      year: "Software Engineering",
      title: "Software Engineering",
      org: "Salim Habib University",
      text: "Learned software engineering fundamentals — programming, web development, databases, and modern development practices.",
      side: "left",
    },
    {
      year: "7 Years",
      title: "7 Years Experience",
      org: "Software Crest, Toba Tek Singh",
      text: "Gained 7 years of real-world experience working on live projects — building websites, fixing bugs, and delivering solutions to clients.",
      side: "right",
    },
    {
      year: "Present",
      title: "Full Stack Developer & Marketer",
      org: "Freelance / Professional",
      text: "Now working as a full stack developer and digital marketer — helping clients build modern web apps and grow their brands online.",
      side: "left",
    },
  ];

  return (
    <>
      {/* ==================== HERO / ABOUT INTRO ==================== */}
      <section className="hero-two pt-160">
        <div className="container">
          <div className="row gutter-40 align-items-center">
            <div className="col-12 col-lg-5">
              <div className="about__thumb fade-up">
                <div className="slice-image">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <div
                      key={n}
                      className={`slice-image__piece slice-image__piece--${n}`}
                    >
                      <img src={myPhoto} alt="Abdullah Nadeem" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="hero-two__content fade-up">
                <span className="tertiary-text text-uppercase sub-title fw-3 neutral-top">
                  ABOUT ME <img src="/assets/images/hand.png" alt="Image" />
                </span>
                <h1 className="title-xl fw-7 text-uppercase mt-20">
                  Hi, I'm <span className="secondary-text">Abdullah Nadeem</span>
                </h1>
                <p className="text-xl primary-text mt-20">
                  A passionate <strong>Software Developer & Marketing Specialist</strong> from
                  Toba Tek Singh, Pakistan. I build clean, scalable, and modern web applications
                  that help businesses grow. I combine <strong>code</strong> with{" "}
                  <strong>strategy</strong> — because great software needs great marketing to succeed.
                </p>

                <div className="about__counter neutral-top mt-40">
                  <h2 className="title-xxl fw-8 secondary-text">
                    <span className="odometer" data-odometer-final="7">0</span>
                    <span className="prefix">+</span>
                  </h2>
                  <span className="text-xl text-uppercase fw-4 primary-text">
                    Years of Professional Experience
                  </span>
                </div>

                <div className="hero__two-cta mt-40">
                  <a href="#contactSec" className="btn--secondary" title="hire me">
                    <span className="btn-animated-text" data-text="Hire Me!">Hire Me!</span>
                  </a>
                  <a href="#resumeSec" className="btn--tertiary" title="view resume">
                    <span className="btn-animated-text" data-text="View Resume">View Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MARQUEE ==================== */}
      <section className="marquee marquee-tertiary-bg">
        <div className="marquee__inner">
          {[0, 1, 2].map((k) => (
            <div key={k} className="marquee__slider">
              <div className="marquee__single stroke-text">
                <h4 className="title-lg">
                  <a href="#">PROGRAMMER <span>-</span></a>
                </h4>
              </div>
              <div className="marquee__single">
                <h4 className="title-lg">
                  <a href="#">MARKETER <span>-</span></a>
                </h4>
              </div>
              <div className="marquee__single stroke-text">
                <h4 className="title-lg">
                  <a href="#">DEVELOPER <span>-</span></a>
                </h4>
              </div>
              <div className="marquee__single">
                <h4 className="title-lg">
                  <a href="#">STRATEGIST <span>-</span></a>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== BIOGRAPHY ==================== */}
      <section className="about pt-160" id="aboutSec">
        <div className="container">
          <div className="row gutter-40">
            <div className="col-12 col-lg-6">
              <div className="about__intro fade-up">
                <span className="tertiary-text text-uppercase sub-title fw-6 neutral-top">
                  BIOGRAPHY
                </span>
                <h3 className="title-animation mt-16">
                  A dedicated software developer with a passion for building digital
                  products that <span className="secondary-text">make a difference.</span>
                </h3>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="about__content fade-up" data-delay="300">
                <p className="primary-text neutral-top text-xl">
                  My journey started with a strong academic foundation at{" "}
                  <strong>Salim Habib University</strong>, where I developed a deep
                  understanding of software engineering principles. To gain real-world
                  exposure, I completed a <strong>1-year internship at Software Crest,
                  Toba Tek Singh</strong> — where I worked on live projects and sharpened
                  my programming skills.
                </p>
                <p className="primary-text text-xl mt-25">
                  Today, I work as a <strong>Software Developer & Marketing Specialist</strong> —
                  helping clients build powerful web applications, grow their brands,
                  and reach the right audience with data-driven marketing strategies.
                </p>
                <div className="about__content-cta mt-40">
                  <a href="#contactSec" className="btn-primary">
                    <span className="btn-animated-text" data-text="Let's Talk">Let's Talk</span>
                    <span className="btn-icon">
                      <i className="ph ph-arrow-up-right"></i>
                      <i className="ph ph-arrow-up-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Info Cards */}
          <div className="row gutter-24 mt-100">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="service__single fade-up">
                <div className="content">
                  <h6 className="fw-5 tertiary-text text-uppercase">Full Name</h6>
                  <h5 className="fw-5 mt-12">Abdullah Nadeem</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="service__single fade-up" data-delay="200">
                <div className="content">
                  <h6 className="fw-5 tertiary-text text-uppercase">Father's Name</h6>
                  <h5 className="fw-5 mt-12">Mohammad Nadeem</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="service__single fade-up" data-delay="400">
                <div className="content">
                  <h6 className="fw-5 tertiary-text text-uppercase">Location</h6>
                  <h5 className="fw-5 mt-12">Toba Tek Singh, Pakistan</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="service__single fade-up" data-delay="600">
                <div className="content">
                  <h6 className="fw-5 tertiary-text text-uppercase">Experience</h6>
                  <h5 className="fw-5 mt-12">7 Years Professional</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MY JOURNEY / TIMELINE ==================== */}
      <section className="skill-two pt-160 pb-160" id="resumeSec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section__header text-center mb-60 fade-up">
                <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">
                  MY JOURNEY
                </span>
                <h2 className="title-animation fw-6 mt-16">
                  Education & Professional Timeline
                </h2>
                <p className="primary-text mt-16">
                  My journey from classroom to real-world projects.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="timeline">
                <div className="timeline__line"></div>

                {timeline.map((item, i) => (
                  <div
                    key={i}
                    className={`timeline__item timeline__item--${
                      item.side === "right" ? "right" : "left"
                    }`}
                  >
                    <div className="timeline__dot"></div>
                    <div className="timeline__card">
                      <span className="timeline__year">{item.year}</span>
                      <h4 className="fw-6 mt-12">{item.title}</h4>
                      <p className="tertiary-text text-md mt-8">{item.org}</p>
                      <p className="primary-text mt-16 timeline__text">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES / WHAT I DO ==================== */}
      <section className="service-two pt-160" id="serviceSec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section__header-wrapper mb-60 fade-up">
                <div className="row gutter-20 align-items-center">
                  <div className="col-12 col-sm-10 col-md-8 col-lg-8">
                    <div className="section__header">
                      <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">
                        WHAT I DO
                      </span>
                      <h2 className="title-animation fw-6 mt-16">
                        Services I Offer as a Developer & Marketer
                      </h2>
                    </div>
                  </div>
                  <div className="col-12 col-sm-10 col-md-8 col-lg-4">
                    <div>
                      <p className="primary-text">
                        Combining technical skills with marketing strategy to help
                        brands grow digitally.
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

          <div className="row gutter-24">
            {[
              {
                num: "01.",
                title: "Web Development",
                desc: "Modern, fast, and responsive websites using React, Next.js, and modern JavaScript.",
                img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=80",
              },
              {
                num: "02.",
                title: "Full Stack Apps",
                desc: "Complete web applications with frontend, backend, database, and APIs.",
                img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80",
              },
              {
                num: "03.",
                title: "Digital Marketing",
                desc: "SEO, social media marketing, and paid ads to grow your brand online.",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
              },
              {
                num: "04.",
                title: "Brand Strategy",
                desc: "Content strategy, analytics, and conversion optimization for real results.",
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
              },
            ].map((s, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4 col-xl-3">
                <div
                  className={`service__single fade-up ${i === 0 ? "active" : ""}`}
                  data-delay={i * 200}
                >
                  <span className="text-xl fw-5">{s.num}</span>
                  <div className="thumb mt-60">
                    <a href="#contactSec">
                      <img src={s.img} alt={s.title} />
                    </a>
                  </div>
                  <div className="content mt-60">
                    <h5>
                      <a href="#contactSec" className="title-animation fw-5">
                        {s.title}
                      </a>
                    </h5>
                    <p className="primary-text mt-16">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE ME ==================== */}
      <section className="about pt-160 pb-160">
        <div className="container">
          <div className="row gutter-40 align-items-center">
            <div className="col-12 col-lg-6">
              <div className="about__thumb fade-up">
                <div className="two-images">
                  <div className="two-images__item two-images__item--1">
                    <img src={myPhoto} alt="Abdullah Nadeem" />
                  </div>
                  <div className="two-images__item two-images__item--2">
                    <img src={myPhoto2} alt="Abdullah Nadeem" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="about__content fade-up" data-delay="300">
                <span className="tertiary-text text-uppercase sub-title fw-6 neutral-top">
                  WHY CHOOSE ME
                </span>
                <h2 className="title-animation fw-6 mt-16">
                  Code + Marketing = <span className="secondary-text">Real Growth</span>
                </h2>
                <p className="primary-text mt-25 text-xl">
                  Most developers stop at code. I go one step further — I help you
                  actually <strong>get customers</strong>. My unique blend of
                  programming skills and marketing expertise means your product
                  won't just work, it will sell.
                </p>
                <ul className="mt-40">
                  {[
                    "Clean, modern, and scalable code",
                    "SEO-friendly and fast-loading websites",
                    "Data-driven marketing strategies",
                    "Clear communication & on-time delivery",
                    "Long-term support & maintenance",
                  ].map((point, i) => (
                    <li key={i} className="primary-text mb-16">
                      <i className="ph ph-check-circle tertiary-text"></i>{" "}
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-40">
                  <a href="#contactSec" className="btn-primary">
                    <span className="btn-animated-text" data-text="Work With Me">
                      Work With Me
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
      </section>

      {/* ==================== CONTACT ==================== */}
      <section className="contact-two pt-160 pb-160" id="contactSec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-two__inner">
                <div className="row gutter-40">
                  <div className="col-12 col-lg-6 col-xl-5">
                    <div className="contact-two__content">
                      <div className="section__header fade-up">
                        <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">
                          GET IN TOUCH
                        </span>
                        <h2 className="title-animation fw-6 mt-12">
                          Have a project in mind? Let's build something great together.
                        </h2>
                      </div>
                      <div className="contact-content-inner mt-60 fade-up" data-delay="300">
                        <p className="text-xl">
                          <a href="tel:+923000000000">+92 300 000 0000</a>
                        </p>
                        <p className="text-sm primary-text mt-8">
                          Available for freelance & full-time
                        </p>
                        <div className="mt-30">
                          <a href="mailto:abdullah@example.com" className="btn-primary">
                            <span className="btn-animated-text" data-text="Email Me">
                              Email Me
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
                  <div className="col-12 col-lg-6 col-xl-7">
                    <div className="contact__form fade-up">
                      <form action="#" method="post">
                        <div className="input-group">
                          <div className="input-single">
                            <label htmlFor="contactFirstName">
                              Your Name <sup>*</sup>
                            </label>
                            <input
                              type="text"
                              name="contact-firstname"
                              id="contactFirstName"
                              placeholder="First Name"
                              required
                            />
                          </div>
                          <div className="input-single">
                            <label htmlFor="contactEmail">
                              Your Email <sup>*</sup>
                            </label>
                            <input
                              type="email"
                              name="contact-email"
                              id="contactEmail"
                              placeholder="Email Address"
                              required
                            />
                          </div>
                        </div>
                        <div className="input-group">
                          <div className="input-single">
                            <label htmlFor="contactNumber">
                              Phone Number <sup>*</sup>
                            </label>
                            <input
                              type="number"
                              name="contact-number"
                              id="contactNumber"
                              placeholder="Phone Number"
                              required
                            />
                          </div>
                          <div className="input-single">
                            <label htmlFor="chooseService">
                              Choose Service <sup>*</sup>
                            </label>
                            <select
                              name="service"
                              id="chooseService"
                              className="service-select select"
                            >
                              <option data-display="Choose Service">
                                Choose Service
                              </option>
                              <option value="web">Web Development</option>
                              <option value="fullstack">Full Stack Apps</option>
                              <option value="marketing">Digital Marketing</option>
                              <option value="brand">Brand Strategy</option>
                            </select>
                          </div>
                        </div>
                        <div className="input-single">
                          <label htmlFor="contactMessage">
                            Your Message <sup>*</sup>
                          </label>
                          <textarea
                            name="contact-message"
                            id="contactMessage"
                            placeholder="Tell me about your project..."
                            required
                          ></textarea>
                        </div>
                        <div className="mt-40">
                          <button
                            type="submit"
                            className="btn-primary"
                            title="submit message"
                          >
                            <span className="btn-animated-text" data-text="Send Message">
                              Send Message
                            </span>
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
    </>
  );
};

export default AboutPage;