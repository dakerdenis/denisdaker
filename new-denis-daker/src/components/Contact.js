import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../styles/hero.css"; // Always load this (shared styles)

import kvadrat from "../assets/symbols/kvadrat.svg";
import FirstSwiper from "./swipers/FirstSwiper";
import SecondSwiper from "./swipers/SecondSwiper";

const Services = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Function to dynamically apply a new stylesheet and remove old ones
    const applyStylesheet = (stylesheetPath) => {
      // Remove any previously added language-specific styles
      const existingStylesheet = document.getElementById("language-style");
      if (existingStylesheet) {
        existingStylesheet.remove();
      }

      // Create a new link element for the new stylesheet
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = stylesheetPath;
      link.id = "language-style"; // Add an ID to easily identify and remove it later
      document.head.appendChild(link);
    };

    // Determine which CSS file to load based on the current language
    if (i18n.language === "ru") {
      applyStylesheet("/styles/services_ru.css"); // Adjust this path if needed
    } else if (i18n.language === "az") {
      applyStylesheet("/styles/services_az.css"); // Adjust this path if needed
    } else {
      applyStylesheet("/styles/services.css"); // Default to English
    }
  }, [i18n.language]); // Run this effect whenever the language changes

  return (
    <section id="services">
      <div className="section__services__container">
        <div className="section__services__background">
          <div className="services__name">
            <div className="services__name__block">
              <p>{t("services.name")}</p>
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
