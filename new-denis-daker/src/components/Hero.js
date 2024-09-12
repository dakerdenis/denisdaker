// Hero.js
import React from "react";
import "../styles/hero.css";
import SocialIcons from "./hero/SocialIcons";
import HeroSkills from "./hero/HeroSkills";
import HeroGeneral from "./hero/HeroGeneral";

import poligon1 from "../assets/poligon_hero/poligon1.svg";
import poligon2 from "../assets/poligon_hero/poligon2.svg";
import poligon3 from "../assets/poligon_hero/poligon3.svg";
import poligon4 from "../assets/poligon_hero/poligon4.svg";
import poligon5 from "../assets/poligon_hero/poligon5.svg";
import poligon6 from "../assets/poligon_hero/poligon6.svg";
import stalker from "../assets/stalker.png";

const Hero = () => {
  return (
    <section id="hero">
      <div className="section__hero__container">
        {/* Social Icons */}
        <SocialIcons />

        {/* Hero General Info */}
        <HeroGeneral />

        {/* Hero Skills */}
        <HeroSkills />

        {/* Main Image */}
        <div className="hero__image__main">
          <img src={stalker} alt="Stalker character" />
        </div>

        {/* Background Rectangles */}
        <div className="hero_rectangle hero_rectangle1">
          <img src={poligon1} alt="Polygon design" />
        </div>
        <div className="hero_rectangle hero_rectangle2">
          <img src={poligon2} alt="Polygon design" />
        </div>
        <div className="hero_rectangle hero_rectangle3">
          <img src={poligon3} alt="Polygon design" />
        </div>
        <div className="hero_rectangle hero_rectangle4">
          <img src={poligon4} alt="Polygon design" />
        </div>
        <div className="hero_rectangle hero_rectangle5">
          <img src={poligon5} alt="Polygon design" />
        </div>
        <div className="hero_rectangle hero_rectangle6">
          <img src={poligon6} alt="Polygon design" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
