// HeroGeneral.js
import React from "react";
import { useTranslation } from "react-i18next";
const HeroGeneral = () => {
  const { t } = useTranslation(); // Access translation functions
  return (
    <div className="hero__general hero_z">
      <div className="hero__general__about">
        <div className="hero__general__name">
          <p>{t('hero.title')}</p>
          <p>{t('hero.name')}</p>
        </div>

        <div className="hero__general__desc">
          <p>{t('hero.welcome')}</p>
          <p>{t('hero.hero1')}</p>
          <p>{t('hero.hero2')}</p>
          <p>
          {t('hero.hero3')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroGeneral;
