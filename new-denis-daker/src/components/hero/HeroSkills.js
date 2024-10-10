// HeroSkills.js
import React from "react";
import { useTranslation } from "react-i18next";
import skill1 from "../../assets/skills/1.svg";
import skill2 from "../../assets/skills/2.svg";
import skill3 from "../../assets/skills/3.svg";
import skill4 from "../../assets/skills/4.svg";
import stalker from "../../assets/stalker.png";


const HeroSkills = () => {
  const { t } = useTranslation(); // Access translation functions
  return (
    <div className="hero__skills">
      <div className="hero__skills__wrapper">
        {/* Skill Elements */}
        <div className="hero__skills__element">
          <div className="skills__element__circle">
            <img src={skill1} alt="Development & processing of sites" />
          </div>
          <div className="skills__element__desc">{t('hero.skills1')}</div>
        </div>

        <div className="hero__skills__element">
          <div className="skills__element__circle">
            <img src={skill2} alt="B2C Architecture" />
          </div>
          <div className="skills__element__desc">{t('hero.skills2')}</div>
        </div>

        <div className="hero__skills__element">
          <div className="skills__element__circle">
            <img src={skill3} alt="Website development" />
          </div>
          <div className="skills__element__desc">{t('hero.skills3')}</div>
        </div>

        <div className="hero__skills__element">
          <div className="skills__element__circle">
            <img src={skill4} alt="Design" />
          </div>
          <div className="skills__element__desc">{t('hero.skills4')}</div>
        </div>
      </div>
      <div className="hero__image__daker">
        {/* Main Image */}
        <div className="hero__image__main">
          <img src={stalker} alt="Stalker character" />
        </div>
      </div>
    </div>
  );
};

export default HeroSkills;
