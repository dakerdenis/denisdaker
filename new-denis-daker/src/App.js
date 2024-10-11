import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Stack from "./components/Stack";
import Soft from "./components/Soft";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton"; // Import ScrollToTopButton component
import './i18n';

function App() {
  return (
    <div className="App">
      <div className="main__wrapper">
        <div className="main__container">
          {/**header***/}
          <Header />

          {/**SCREEN WITH SOCIALS NAME and DESCRIPTION***/}
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
              {/**SOFT**/}
              <Soft />

              {/*********REST CONTENT******* */}
              {/**PORTFOLIO**/}
              <Portfolio />

              {/***CONTACT***/}
              <Contact />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTopButton /> {/* Add the scroll-to-top button */}
    </div>
  );
}

export default App;
