// HeroSkills.js
import React from "react";
import skill1 from "../../assets/skills/1.svg";
import skill2 from "../../assets/skills/2.svg";
import skill3 from "../../assets/skills/3.svg";
import skill4 from "../../assets/skills/4.svg";

const HeroSkills = () => {
  return (
    <div className="hero__skills">
      <div className="hero__skills__wrapper">
        {/* Skill Elements */}
        <div className="hero__skills__element">
          <div className="skills__element__circle">
            <img src={skill1} alt="Development & processing of sites" />
          </div>
          <div className="skills__element__desc">Development & processing of sites</div>
        </div>

        <div className="hero__skills__element">
          <div className="skills__element__circle">
            <img src={skill2} alt="B2C Architecture" />
          </div>
          <div className="skills__element__desc">B2C Architecture</div>
        </div>

        <div className="hero__skills__element">
          <div className="skills__element__circle">
            <img src={skill3} alt="Website development" />
          </div>
          <div className="skills__element__desc">Website development</div>
        </div>

        <div className="hero__skills__element">
          <div className="skills__element__circle">
            <img src={skill4} alt="Design" />
          </div>
          <div className="skills__element__desc">Design</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSkills;
