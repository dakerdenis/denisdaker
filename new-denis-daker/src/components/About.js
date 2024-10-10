import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/about.css";
import about from "../assets/about.png";
import about_poligon1 from "../assets/poligon_about/poligon_about1.svg";
import about_poligon2 from "../assets/poligon_about/poligon_about2.svg";
import about_poligon3 from "../assets/poligon_about/poligon_about3.svg";

import arrow_contact from "../assets/symbols/arrow_contact.svg";

const About = () => {
  const { t,i18n } = useTranslation(); // Access translation functions

  return (
    <section id="about">
      <div className="section__about__container">
        {/*****NAME AND IMAGE******/}
        <div className="abput__image__name">
          {/*about IMAGE main*/} 
          <div className="about__image__block about-z">
            <img src={about} alt="Denis Akershteyn" />
          </div>
          {/*about name*/}
          <div className="about__name about-z">{t('about.name')}</div>
          {/*about poligons*/}
          <div className="about__poligon1 about__poligon">
            <img src={about_poligon1} alt="Polygon decoration 1" />
          </div>
          <div className="about__poligon2 about__poligon">
            <img src={about_poligon2} alt="Polygon decoration 2" />
          </div>

          <div className="about__poligon3 about__poligon">
            <img src={about_poligon3} alt="Polygon decoration 3" />
          </div>
        </div>
        {/*****EXP AND TEXT******/}
        <div className="about__desc__text">
          <div className="about__desc__text_wrapper">
            {/*****EXPERIENCE*****/}
            <div className="about__desc__exp">
              <div className="about__desc__element">
                <div>3+</div>
                <p>{t('about.experience')}</p>
              </div>
              {/**********/}
              <div className="about__desc__element">
                <div>20+ </div>
                <p>{t('about.projects')}</p>
              </div>
            </div>

            {/****ABOUT ME TEXT******/}
            <div className="about__me__text">
              <div className="about__me__text-block">
                <p>{t('about.hi')}</p>
                <p>{t('about.about1')} </p> 
                <p>{t('about.about2')} </p>
                <p>{t('about.about3')}</p>
                <p>{t('about.about4')} </p>
                
              </div>

              <div className="about__button__contact">
                <button>
                  <p style={i18n.language === 'az' ? { fontSize: '18px' } : {}}>{t('about.contactme')}</p>
                  <img src={arrow_contact} alt="Arrow pointing to contact" />
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
