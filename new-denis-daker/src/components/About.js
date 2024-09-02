import React from "react";
import "../styles/about.css";
import about from "../assets/about.png";
import about_poligon1 from "../assets/poligon_about/poligon_about1.svg";
import about_poligon2 from "../assets/poligon_about/poligon_about2.svg";
import about_poligon3 from "../assets/poligon_about/poligon_about3.svg";

import arrow_contact from "../assets/symbols/arrow_contact.svg";

const About = () => {
  return (
    <section id="about">
      <div className="section__about__container">
        {/*****NAME AND IMAGE******/}
        <div className="abput__image__name">
          {/*about IMAGE main*/}
          <div className="about__image__block about-z">
            <img src={about} alt="" />
          </div>
          {/*about name*/}
          <div className="about__name about-z">About me</div>
          {/*about poligons*/}
          <div className="about__poligon1 about__poligon">
            <img src={about_poligon1} alt="" />
          </div>
          <div className="about__poligon2 about__poligon">
            <img src={about_poligon2} alt="" />
          </div>

          <div className="about__poligon3 about__poligon">
            <img src={about_poligon3} alt="" />
          </div>
        </div>
        {/*****EXP AND TEXT******/}
        <div className="about__desc__text">
          <div className="about__desc__text_wrapper">
            {/*****EXPERIENCE*****/}
            <div className="about__desc__exp">
              <div className="about__desc__element">
                <div>3+</div>
                <p>YEARS OF EXPERINCE</p>
              </div>
              {/**********/}
              <div className="about__desc__element">
                <div>20+ </div>
                <p>PROJECTS COMPLETED</p>
              </div>
            </div>

            {/****ABOUT ME TEXT******/}
            <div className="about__me__text">
              <div className="about__me__text-block">
                Hi! <br /> My name is Denis Akershteyn, and I develop websites
                and landing pages on a turnkey basis. <br /> <br />
                For more than 4 years I have been constantly improving my skills
                in this area. <br />
                <br /> Having extensive experience in developing websites,
                participating in large projects, now I provide both my services
                and services represented by the studio to private clients.
                <br />
                <br />I can and am always sincerely happy to help any business
                in its development and undertakings, based on modern realities.
                To bring to life your ideas about how your customers should see
                your business is the main goal of my work.
              </div>

              <div className="about__button__contact">
                <button>
                  <p> Contact me</p>
                  <img src={arrow_contact} alt="" />
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
