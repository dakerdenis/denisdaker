import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/hero.css";
import "../styles/services.css";

import kvadrat from "../assets/symbols/kvadrat.svg";

import FirstSwiper from "./swipers/FirstSwiper";
import SecondSwiper from "./swipers/SecondSwiper";

const Services = () => {
  const { t } = useTranslation();
  return (
    <section id="services">
      <div className="section__services__container">
        <div className="section__services__background">
          <div className="services__name">
            <div className="services__name__block">
              <p>{t('services.name')}</p>
              <img src={kvadrat} alt="" />
            </div>
          </div>
          <FirstSwiper />
          <div className="section__second__services">
            <SecondSwiper />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
