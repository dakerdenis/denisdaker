import React from "react";
import "../styles/portfolio.css";
import dot from "../assets/dot.svg";
import arrow_portfolio from "../assets/arow_portfolio.svg";
import PortfolioContainer from "./portfolio/PortfolioContainer";
import portfolioData from "./portfolio/portfolioData";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Portfolio = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // Declare navigate to use later

  return (
    <section id="portfolio">
      <div className="section__portfolio__container">
        <div className="porfolio__name">
          <div className="porfolio__name-name">
            <p>{t('portfolio.name')}</p>
            <img src={dot} alt="Dot" />
          </div>
          <div className="porfolio__name-link porfolio__name-link-pc">
            <button type="button" onClick={() => navigate('/portfolio')}>
              <p>{t('portfolio.all_projects')}</p>
              <img src={arrow_portfolio} alt="View all projects" />
            </button>
          </div>
        </div>

        <div className="porfolio__container__swiper">
          <div className="porfolio__wrapper__swiper">
            <PortfolioContainer portfolios={portfolioData} />
          </div>
        </div>

        <div className="porfolio__name-link porfolio__name-link-mobile">
          <button type="button" onClick={() => navigate('/portfolio')}>
            <p>{t('portfolio.all_projects')}</p>
            <img src={arrow_portfolio} alt="View all projects" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
