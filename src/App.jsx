import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useScripts from "./hooks/useScripts";

// Layout Components
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";
import TemplateOptions from "./components/TemplateOptions";
import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";     // ← naya import

const App = () => {
  useScripts();

  return (
    <Router>
      <div className="page-wrapper">
        <Preloader />
        <Header />
        <MobileMenu />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/work" element={<WorkPage />} />       {/* ← naya route */}
            </Routes>
            <Footer />
          </div>
        </div>

        <TemplateOptions />
        <CustomCursor />
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;