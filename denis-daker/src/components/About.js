import React from "react";
import "../styles/about.css";
import about from "../assets/about.png";
import about_poligon1 from "../assets/poligon_about/poligon_about1.svg";
import about_poligon2 from "../assets/poligon_about/poligon_about2.svg";
const About = () => {
  return (
    <section id="about">
      <div className="section__about__container">
        <div className="abput__image__name">
          s{/*about IMAGE main*/}
          <div className="about__iamge__block">
            <img src={about} alt="" />
          </div>
          {/*about name*/}
          <div className="about__name">About me</div>
          {/*about poligons*/}
          <div className="about__poligon1">
            <img src={about_poligon1} alt="" />
          </div>
          <div className="about__poligon2">
            <img src={about_poligon2} alt="" />
          </div>
        </div>

        <div className="about__desc__text">
          <div className="about__desc__exp">
            {/**********/}
            <div className="about__desc__element">
              <div></div>
            </div>
                        {/**********/}
            <div className="about__desc__element">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
