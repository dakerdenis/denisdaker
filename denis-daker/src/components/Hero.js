import React from "react";
import "../styles/hero.css";
import linkdin from "../assets/social/ri_linkedin-fill.svg";
const Hero = () => {
  return (
    <section id="hero">
      
      <div className="section__hero__container">
        {/*---LEFT SECTION SOCIAL----*/}
        <div className="hero__social">
          <div className="hero__social__container"> 
              <ul>
                <li>
                  <a href="#">
                    <img src={linkdin}  />
                  </a>
                </li>
              </ul>
          </div>
        </div>
        {/*--HERO ABOUT---*/}
        <div className="hero__general"></div>
        {/*-HERO ADDITIONAL---*/}
        <div className="hero__additional"></div>
      </div>

      <h1>Hero Section</h1>
      <p>This is the hero section.</p>
      <p style={{ height: "1000px", backgroundColor: "rgba(137, 43, 226, 0.13)" }}>Scroll down to see the sticky header in action.</p>
      
    </section>
  );
};

export default Hero;
