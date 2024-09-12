import React from "react";

const PortfolioSlideContent = ({ description }) => {
  return (
    <div className="swiper__portfolio__desc">
      {description.map((desc, index) => (
        <p key={index}>
          {desc}
        </p>
      ))}
    </div>
  );
};

export default PortfolioSlideContent;
