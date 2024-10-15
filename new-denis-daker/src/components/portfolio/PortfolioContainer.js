import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import PortfolioSlide from "./PortfolioSlide";
import "../../styles/portfolio.css";



const PortfolioContainer = ({ portfolios }) => {
  const [spaceBetween, setSpaceBetween] = useState(43);
  const [slideStyle, setSlideStyle] = useState({
    width: "767px",
    height: "598px",
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSpaceBetween(25);
        setSlideStyle({
          width: "330px",
          height: "500px",
        });
      } else {
        setSpaceBetween(43);
        setSlideStyle({
          width: "767px",
          height: "598px",
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView="auto"
      freeMode={true}
      modules={[FreeMode]}
    >
      {portfolios.map((portfolio, index) => (
        <SwiperSlide key={index} style={{ ...slideStyle }}>
          <PortfolioSlide portfolio={portfolio} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PortfolioContainer;
