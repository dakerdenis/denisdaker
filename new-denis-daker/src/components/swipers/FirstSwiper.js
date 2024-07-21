import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

import service1 from "../../assets/services/1.svg";
import service2 from "../../assets/services/2.svg";
import service3 from "../../assets/services/3.svg";
import service4 from "../../assets/services/4.svg";

const FirstSwiper = () => {
  const [spaceBetween, setSpaceBetween] = useState(100);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1600) {
        setSpaceBetween(25);
      } else {
        setSpaceBetween(100);
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
        <SwiperSlide style={{ width: "466px", height: "510px", marginLeft: "100px" }}>
          <div className="swiper__block">
            <div className="swiper__content__container">
              <div className="swiper__number">.01</div>
              <div className="swiper__image">
                <img src={service1} alt="" />
              </div>
              <div className="swiper_name">Website development</div>
              <div className="swiper__desc">
                Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen
                book.
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "466px", height: "510px" }}>
          <div className="swiper__block">
            <div className="swiper__content__container">
              <div className="swiper__number">.02</div>
              <div className="swiper__image">
                <img src={service2} alt="" />
              </div>
              <div className="swiper_name">Design</div>
              <div className="swiper__desc">
                Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen
                book.
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "466px", height: "510px" }}>
          <div className="swiper__block">
            <div className="swiper__content__container">
              <div className="swiper__number">.03</div>
              <div className="swiper__image">
                <img src={service3} alt="" />
              </div>
              <div className="swiper_name">B2C Architecture</div>
              <div className="swiper__desc">
                Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen
                book.
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "466px", height: "510px" }}>
          <div className="swiper__block">
            <div className="swiper__content__container">
              <div className="swiper__number">.04</div>
              <div className="swiper__image">
                <img src={service4} alt="" />
              </div>
              <div className="swiper_name">Server Maintenance</div>
              <div className="swiper__desc">
                Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen
                book.
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
