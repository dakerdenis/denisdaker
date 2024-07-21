import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const SecondSwiper = () => {
  return (
    <div className="section__second__services">
      <Swiper
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div className="second-swiper-slide">
            1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="second-swiper-slide">
            2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="second-swiper-slide">
            3
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="second-swiper-slide">
            4
          </div>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
      <div className="swiper-button-prev custom-arrow">⬅️</div>
      <div className="swiper-button-next custom-arrow">➡️</div>
    </div>
  );
};

export default SecondSwiper;
