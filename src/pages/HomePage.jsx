import React from "react";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Pricing />
      <Contact />
      <Testimonials />
      <Blog />
    </>
  );
};

export default HomePage;