
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import useScripts from "./hooks/useScripts";

import Preloader from "./components/Preloader";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";
import TemplateOptions from "./components/TemplateOptions";
import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopOnRoute from "./components/ScrollToTopOnRoute";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import NotFoundPage from "./pages/NotFoundPage";

const AppLayout = () => {
  const location = useLocation();
  const is404 = !["/", "/about", "/work"].includes(location.pathname);

  return (
    <>
      <ScrollToTopOnRoute />

      <div className="page-wrapper">
        {!is404 && <Preloader />}
        {!is404 && <Header />}
        {!is404 && <MobileMenu />}

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>

            {!is404 && <Footer />}
          </div>
        </div>

        {!is404 && <TemplateOptions />}
        {!is404 && <CustomCursor />}
        {!is404 && <ScrollToTop />}
      </div>
    </>
  );
};

const App = () => {
  useScripts();

  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
