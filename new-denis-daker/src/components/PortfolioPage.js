import React from "react";
import Header from "./Header"; // Reuse the same header
import Contact from "./Contact"; // Reuse the contact block
import PortfolioSlide from "./portfolio/PortfolioSlide"; // Import PortfolioSlide for displaying each portfolio
import portfolioData from "./portfolio/portfolioData"; // Import data for all portfolio projects
import "../styles/portfolio_page.css"; 
import "../styles/portfolio.css"; // New CSS specific to the portfolio page
import SocialIcons from "./hero/SocialIcons"; // Social icons for the hero section



import poligon1 from "../assets/poligon_hero/poligon1.svg";
import poligon2 from "../assets/poligon_hero/poligon2.svg";
import poligon3 from "../assets/poligon_hero/poligon3.svg";
import poligon4 from "../assets/poligon_hero/poligon4.svg";
import poligon5 from "../assets/poligon_hero/poligon5.svg";
import poligon6 from "../assets/poligon_hero/poligon6.svg";
const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <Header /> {/* Reuse header */}
      <SocialIcons />
      

      <div className="hero_rectangle hero_rectangle1">
          <img src={poligon1} alt="Polygon design" />
        </div>
        <div className="hero_rectangle hero_rectangle2">
          <img src={poligon2} alt="Polygon design" />
        </div>
        <div className="hero_rectangle hero_rectangle3">
          <img src={poligon3} alt="Polygon design" />
        </div>
        <div className="hero_rectangle hero_rectangle4">
          <img src={poligon4} alt="Polygon design" />
        </div>
        <div className="hero_rectangle hero_rectangle5">
          <img src={poligon5} alt="Polygon design" />
        </div>
        <div className="hero_rectangle hero_rectangle6">
          <img src={poligon6} alt="Polygon design" />
        </div>



      <section className="portfolio-page__content">
        <div className="portfolio_custom_wrapper">
          {/* Loop through portfolioData and add each slide to portfolio_custom_slide */}
          {portfolioData.map((portfolio, index) => (
            <div key={index} className="portfolio_custom_slide">
              <PortfolioSlide portfolio={portfolio} />
            </div>
          ))}
        </div>
      </section>
      
      <Contact /> {/* Reuse contact section */}
    </div>
  );
};

export default PortfolioPage;
