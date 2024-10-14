// src/components/PortfolioPage.js

import React from 'react';
import portfolioData from './portfolio/portfolioData'; // Assuming you have portfolio data in a file

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <h1>All Projects</h1>
      <div className="portfolio-items">
        {portfolioData.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
