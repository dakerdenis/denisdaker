import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"; // This is your global default CSS

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
import { useTranslation } from "react-i18next"; // i18n for language detection

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { i18n } = useTranslation(); // Detect the current language

  useEffect(() => {
    const minimumDuration = 1000;
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

  useEffect(() => {
    // Function to dynamically apply a new stylesheet and remove old ones
    const applyStylesheet = (stylesheetPath) => {
      // Remove any previously added language-specific styles
      const existingStylesheet = document.getElementById("language-style");
      if (existingStylesheet) {
        existingStylesheet.remove();
      }

      // Create a new link element for the new stylesheet
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = stylesheetPath;
      link.id = "language-style"; // Add an ID to easily identify and remove it later
      document.head.appendChild(link);
    };

    // Apply the correct CSS based on the current language
    if (i18n.language === "ru") {
      applyStylesheet(`${process.env.PUBLIC_URL}/styles/style_ru.css`);
    } else if (i18n.language === "en") {
      applyStylesheet(`${process.env.PUBLIC_URL}/styles/style_en.css`);
    } else {
      // You can add more languages here if needed
      applyStylesheet(`${process.env.PUBLIC_URL}/styles/style_en.css`); // Default to English
    }
  }, [i18n.language]); // This runs whenever the language changes

  return (
    <Router>
      <div className="App">
        {!isLoaded && <Preloader />}
        {isLoaded && (
          <Routes>
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
            <Route path="/terms" element={<Terms />} /> {/* Route for terms page */}
          </Routes>
        )}
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
