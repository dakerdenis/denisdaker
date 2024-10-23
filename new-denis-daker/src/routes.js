import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Stack from "./components/Stack";
import Soft from "./components/Soft";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Terms from "./components/Terms";
import PortfolioPage from "./components/PortfolioPage"; // Regular import

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <div className="main__wrapper">
          <Header />
          <div className="main__container">
            <Hero id="hero" />
            <About />
            <Services />
            <Stack />
            <div className="main__background__placeholder">
              <div className="main__placeholder__background"></div>
              <div className="main__placeholder__blur"></div>
              <div className="main__placeholder__content">
                <Soft />
                <Portfolio />
                <Contact />
              </div>
            </div>
          </div>
        </div>
      }
    />
    <Route path="/portfolio" element={<PortfolioPage />} />
    <Route path="/terms" element={<Terms />} />
  </Routes>
);

export default AppRoutes;
