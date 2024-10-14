import React, { useEffect, useState } from "react";
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
  // eslint-disable-next-line no-unused-vars
  const { i18n } = useTranslation();

  const [isLoaded, setIsLoaded] = useState(false); // Tracks when page has fully loaded

  useEffect(() => {
    // Minimum time for preloader (1.5 seconds)
    const minimumDuration = 1500;

    // Function to hide preloader after everything has loaded and minimum duration has passed
    const handleLoad = () => {
      const loadTime = Date.now() - startTime;
      const remainingTime = minimumDuration - loadTime;

      setTimeout(() => {
        setIsLoaded(true);
      }, remainingTime > 0 ? remainingTime : 0); // Ensure minimum duration is met
    };

    const startTime = Date.now(); // Record the start time

    // Wait for all assets (images, fonts, etc.) to load
    window.addEventListener("load", handleLoad);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="App">
      {!isLoaded && <Preloader />} {/* Show Preloader until page is loaded */}

      {isLoaded && (
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
      )}

      {/* Scroll-to-Top Button */}
      <ScrollToTopButton isLoaded={isLoaded} />

    </div>
  );
}

export default App;
