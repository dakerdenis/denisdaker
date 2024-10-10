import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

import service1 from "../../assets/services/1.svg";
import service2 from "../../assets/services/2.svg";
import service3 from "../../assets/services/3.svg";
import service4 from "../../assets/services/4.svg";

const FirstSwiper = () => {
  const { t } = useTranslation(); // Access translation functions
  const [spaceBetween, setSpaceBetween] = useState(100);
  const [slideStyle, setSlideStyle] = useState({
    width: "466px",
    height: "510px",
    marginLeft: "100px",
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Set the style for smaller devices
        setSpaceBetween(25);
        setSlideStyle({
          width: "302px",
          height: "393px",
          marginLeft: "25px", // For the first slide, this will be overridden
        });
      } else if (window.innerWidth < 1600) {
        // Set the style for mid-sized devices
        setSpaceBetween(25);
        setSlideStyle({
          width: "466px",
          height: "510px",
          marginLeft: "100px",
        });
      } else {
        // Default style for larger screens
        setSpaceBetween(100);
        setSlideStyle({
          width: "466px",
          height: "510px",
          marginLeft: "100px",
        });
      }
    };

    // Set the initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="services__wrapper__swiper">
      <Swiper
        spaceBetween={spaceBetween} // Use the state value
        slidesPerView="auto" // Set slidesPerView to auto
        freeMode={true}      
        modules={[FreeMode]} // Only FreeMode module
      >
        <SwiperSlide style={{ ...slideStyle }}>
          <div className="swiper__block">
            <div className="swiper__content__container">
              <div className="swiper__number">.01</div>
              <div className="swiper__image">
                <img src={service1} alt="" />
              </div>
              <div className="swiper_name">{t('services.web.web_dev')}</div>
              <div className="swiper__desc">
                  {t('services.web.web_dev_desc')}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ ...slideStyle, marginLeft: "0px" }}>
          <div className="swiper__block">
            <div className="swiper__content__container">
              <div className="swiper__number">.02</div>
              <div className="swiper__image">
                <img src={service2} alt="" />
              </div>
              <div className="swiper_name">{t('services.design.des_dev')}</div>
              <div className="swiper__desc">
              {t('services.design.des_dev_desc')}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ ...slideStyle, marginLeft: "0px" }}>
          <div className="swiper__block">
            <div className="swiper__content__container">
              <div className="swiper__number">.03</div>
              <div className="swiper__image">
                <img src={service3} alt="" />
              </div>
              <div className="swiper_name">{t('services.b2C.b2c_dev')}</div>
              <div className="swiper__desc">
              {t('services.b2C.b2c_dev_desc')}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ ...slideStyle, marginLeft: "0px" }}>
          <div className="swiper__block">
            <div className="swiper__content__container">
              <div className="swiper__number">.04</div>
              <div className="swiper__image">
                <img src={service4} alt="" />
              </div>
              <div className="swiper_name">{t('services.server.serveR_dev')}</div>
              <div className="swiper__desc">
              {t('services.server.serveR_dev_desc')}
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default FirstSwiper;
