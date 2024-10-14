import React, { useEffect } from "react";
import "./App.css"; // Global App styles
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Stack from "./components/Stack";
import Soft from "./components/Soft";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton"; // Scroll-to-Top button
import { useTranslation } from "react-i18next"; // Use i18n to track language
import './i18n'; // Import i18n configuration
import Preloader from './components/Preloader'; // Import the Preloader component

function App() {
  const { i18n } = useTranslation(); // Access the i18n object for language detection

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

    // Determine which CSS file to load based on the current language
    if (i18n.language === "ru") {
      applyStylesheet(`${process.env.PUBLIC_URL}/styles/services_ru.css`); // Russian stylesheet
    } else if (i18n.language === "az") {
      applyStylesheet(`${process.env.PUBLIC_URL}/styles/services_az.css`); // Azerbaijani stylesheet
    } else {
      applyStylesheet(`${process.env.PUBLIC_URL}/styles/services.css`); // Default English stylesheet
    }
  }, [i18n.language]); // Re-run the effect whenever the language changes

  return (
    <div className="App">
      <div className="main__wrapper">
        <div className="main__container">
          {/**HEADER***/}
          <Header />

          {/**HERO***/}
          <Hero id="hero" />

          {/**ABOUT ME***/}
          <About />

          {/**SERVICES**/}
          <Services />

          {/**STACK**/}
          <Stack />

          <div className="main__background__placeholder">
            <div className="main__placeholder__background"></div>
            <div className="main__placeholder__blur"></div>
            <div className="main__placeholder__content">
              {/**SOFT***/}
              <Soft />

              {/********* REST OF THE CONTENT ********/}
              {/**PORTFOLIO***/}
              <Portfolio />

              {/***CONTACT***/}
              <Contact />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-to-Top Button */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;
