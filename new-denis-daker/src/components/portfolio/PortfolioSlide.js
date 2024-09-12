import React from "react";
import PortfolioSlideContent from "./PortfolioSlideContent";

const PortfolioSlide = ({ portfolio }) => {
  return (
    <div className="swiper__block_porfolio">
      {/* Portfolio image */}
      <div className="swiper__image__container">
        <img src={portfolio.image} alt={portfolio.title} />
      </div>

      {/* Portfolio quotes */}
      <div className="swiper__portfolio__quotes">
        <img src={portfolio.quotes} alt="quotes" />
      </div>

      {/* Portfolio description */}
      <PortfolioSlideContent description={portfolio.description} />

      {/* Additional photos */}
      <div className="swiper__portfolio__additional-photo">
        {portfolio.additionalImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Additional ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="swiper__border__left"></div>
      <div className={`swiper__border__right ${portfolio.borderClass}`}></div>

      <div className="swiper__button">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={portfolio.link}
        >
          <div className={`swiper__button_image ${portfolio.buttonClass}`}>
            <img src={portfolio.buttonImage} alt="link" />
          </div>
          <p>{portfolio.linkText}</p>
        </a>
      </div>
    </div>
  );
};

export default PortfolioSlide;
