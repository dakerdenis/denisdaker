import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <div className="section__hero__container">
        {/*---LEFT SECTION SOCIAL----*/}
        <div className="hero__social"></div>
        {/*--HERO ABOUT---*/}
        <div className="hero__general"></div>
        {/*-HERO ADDITIONAL---*/}
        <div className="hero__additional"></div>
      </div>
    </section>
  );
};

export default Hero;
