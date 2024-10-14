import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Correct import
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Stack from "./components/Stack";
import Soft from "./components/Soft";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Preloader from './components/Preloader';
import Terms from "./components/Terms"; // Import the Terms component
import PortfolioPage from "./components/PortfolioPage"; // Import the PortfolioPage component

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const minimumDuration = 1000; // 1 second
    const startTime = Date.now();

    const handleLoad = () => {
      const loadTime = Date.now() - startTime;
      const remainingTime = minimumDuration - loadTime;

      setTimeout(() => {
        setIsLoaded(true);
      }, remainingTime > 0 ? remainingTime : 0);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        {!isLoaded && <Preloader />} {/* Show preloader until content is fully loaded */}
        
        {isLoaded && (
          <Routes>
            {/* Main site route */}
            <Route path="/denis-daker" element={
              <div className="main__wrapper">
                <div className="main__container">
                  <Header />
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
            } />

            {/* Portfolio page route */}
            <Route path="/portfolio" element={<PortfolioPage />} /> 

            {/* Terms and conditions route */}
            <Route path="/terms" element={<Terms />} /> 
          </Routes>
        )}
        
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
