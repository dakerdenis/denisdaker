import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Preloader from "./components/Preloader"; // Preloader for lazy loading

// Lazy loading components
const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Stack = lazy(() => import("./components/Stack"));
const Soft = lazy(() => import("./components/Soft"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));
const Terms = lazy(() => import("./components/Terms"));
const PortfolioPage = lazy(() => import("./components/PortfolioPage")); // Lazy-load new PortfolioPage

const AppRoutes = () => (
  <Suspense fallback={<Preloader />}>
    <Routes>
      <Route
        path="/denis-daker"
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
      <Route path="/portfolio" element={<PortfolioPage />} />{" "}
      {/* New PortfolioPage route */}
      <Route path="/terms" element={<Terms />} /> {/* Route for terms page */}
    </Routes>
  </Suspense>
);

export default AppRoutes;
