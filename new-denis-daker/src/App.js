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
function App() {
  return (
    <div className="App">
      <div className="main__wrapper">
        <div className="main__container">
          {/**header***/}
          <Header />

          {/**SCREEN WITH SOCIALS NAME and DESCription***/}
          <Hero />

          {/**ABOUT ME***/}
          <About />

          {/**SERVICES**/}
          <Services />

          {/**STACK**/}
          <Stack />




          

        </div>
      </div>
    </div>
  );
}

export default App;
