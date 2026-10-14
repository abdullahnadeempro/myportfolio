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
import ScrollToTopOnRoute from "./components/ScrollToTopOnRoute";  // ← naya import

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";

const App = () => {
  useScripts();

  return (
    <Router>
      <ScrollToTopOnRoute />   {/* ← Ye line add karo — Router ke andar, page-wrapper ke bahar */}
      
      <div className="page-wrapper">
        <Preloader />
        <Header />
        <MobileMenu />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/work" element={<WorkPage />} />
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