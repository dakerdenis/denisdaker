import React from "react";
import { useTranslation } from 'react-i18next';

const PortfolioSlideContent = ({ descriptionKey }) => {
  const { t } = useTranslation();

  // Fetch the description from the translation file using the key
  const description = t(descriptionKey, { returnObjects: true });

  return (
    <div className="swiper__portfolio__desc">
      {description.map((paragraph, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
      ))}
    </div>
  );
};

export default PortfolioSlideContent;
