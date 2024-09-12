import React from "react";
import "../styles/portfolio.css";
import dot from "../assets/dot.svg";
import arrow_portfolio from "../assets/arow_portfolio.svg";
import PortfolioContainer from "./hero/PortfolioContainer";
import portfolioData from "../data/portfolioData"; // You'll create a file for this.

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="section__portfolio__container">
        <div className="porfolio__name">
          <div className="porfolio__name-name">
            <p>Portfolio</p>
            <img src={dot} alt="Dot" />
          </div>
          <div className="porfolio__name-link porfolio__name-link-pc">
            <a href="#">
              <p>View all projects</p>
              <img src={arrow_portfolio} alt="View all projects" />
            </a>
          </div>
        </div>

        <div className="porfolio__container__swiper">
          <div className="porfolio__wrapper__swiper">
            <PortfolioContainer portfolios={portfolioData} />
          </div>
        </div>

        <div className="porfolio__name-link porfolio__name-link-mobile">
          <a href="#">
            <p>View all projects</p>
            <img src={arrow_portfolio} alt="View all projects" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
