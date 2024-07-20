import React from "react";
import "../styles/hero.css";
import linkdin from "../assets/social/ri_linkedin-fill.svg";
import telegram from "../assets/social/mingcute_telegram-fill.svg";
import instagram from "../assets/social/mdi_instagram.svg";
import facebook from "../assets/social/ic_baseline-facebook.svg";
import whatsapp from "../assets/social/ic_baseline-whatsapp.svg";
import phone from "../assets/social/ph_phone-fill.svg";
import email from "../assets/social/fluent_mail-32-filled.svg";
import skill1 from "../assets/skills/1.svg";
import skill2 from "../assets/skills/2.svg";
import skill3 from "../assets/skills/3.svg";
import skill4 from "../assets/skills/4.svg";

import poligon1 from "../assets/poligon_hero/poligon1.svg";
import poligon2 from "../assets/poligon_hero/poligon2.svg";
import poligon3 from "../assets/poligon_hero/poligon3.svg";
import poligon4 from "../assets/poligon_hero/poligon4.svg";
const Hero = () => {
  return (
    <section id="hero">
      <div className="section__hero__container">
        {/*---LEFT SECTION SOCIAL----*/}
        <div className="hero__social hero_z">
          <div className="hero__social__container">
            <ul>
              <li>
                <a href="#">
                  <img src={linkdin} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={telegram} />
                </a>
              </li>

              <li>
                <a href="#">
                  <img src={instagram} />
                </a>
              </li>

              <li>
                <a href="#">
                  <img src={facebook} />
                </a>
              </li>

              <li>
                <a href="#">
                  <img src={whatsapp} />
                </a>
              </li>

              <li>
                <a href="#">
                  <img src={phone} />
                </a>
              </li>

              <li>
                <a href="#">
                  <img src={email} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/*--HERO ABOUT---*/}
        <div className="hero__general hero_z">
          <div className="hero__genaral__about">
            <div className="hero__general___name">
              <p>FULL-STACK WEB DEVELOPER</p>
              <p>Denis Akershteyn</p>
            </div>

            <div className="hero__general__desc">
              <p>Welcome!</p>

              <p>I'm Denis Akershteyn— glad to welcome you to my website.</p>

              <p>
                For more than 3 years, I have been constantly improving my
                skills in this area.
              </p>

              <p>
                Having extensive experience in developing websites,
                participating in large projects, now I provide both my services
                and services represented by the studio to private clients.
              </p>
            </div>
          </div>
        </div>
        {/*-HERO ADDITIONAL---*/}
        <div className="hero__additional hero_z">
          <div className="hero__skills">
            <div className="hero__skills__wrapper">
              {/*------------------*/}
              <div className="hero__skills__element">
                <div className="skills__element__circle">
                  <img src={skill1} alt="" />
                </div>
                <div className="skills__element__desc">
                  Development & processing of sites
                </div>
              </div>
              {/*------------------*/}
              <div className="hero__skills__element">
                <div className="skills__element__circle">
                  <img src={skill2} alt="" />
                </div>
                <div className="skills__element__desc">B2С Architecture</div>
              </div>
              {/*------------------*/}
              <div className="hero__skills__element">
                <div className="skills__element__circle">
                  <img src={skill3} alt="" />
                </div>
                <div className="skills__element__desc">Website development</div>
              </div>
              {/*------------------*/}
              <div className="hero__skills__element">
                <div className="skills__element__circle">
                  <img src={skill4} alt="" />
                </div>
                <div className="skills__element__desc">Design</div>
              </div>
              {/*------------------*/}
            </div>
          </div>

          <div className="hero__image__daker">

          </div>
          <div className="hero__image__main"></div>
        </div>
        {/*----BACGROUND RECTANGLES---*/}
        <div className="hero_rectangle hero_rectangle1">
            <img src={poligon1} alt="" />
        </div>
        <div className="hero_rectangle hero_rectangle2">
            <img src={poligon2} alt="" />
        </div>
        <div className="hero_rectangle hero_rectangle3">
            <img src={poligon3} alt="" />
        </div>
        <div className="hero_rectangle hero_rectangle4">
            <img src={poligon4} alt="" />
        </div>

      </div>

      <h1>Hero Section</h1>
      <p>This is the hero section.</p>
      <p
        style={{
          height: "1000px",
          backgroundColor: "rgba(137, 43, 226, 0.13)",
        }}
      >
        Scroll down to see the sticky header in action.
      </p>
    </section>
  );
};

export default Hero;
