import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import service1 from "../../assets/services/1.svg";

import arrow_left from "../../assets/swiper/arrow-left.svg";
import arrow_right from "../../assets/swiper/arrow-right.svg";
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
            <div className="second-swiper-block-container">
              <div className="second-swiper-nameandlogo">
                <div className="second-swiper-Logo">
                  <img src={service1} alt="" />
                </div>

                <div className="second-swiper-name">
                  <p>Website Development</p>
                  <div></div>
                </div>
              </div>

              <div className="second-swiper-desc">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>
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
      <div className="swiper-button-prev custom-arrow"> 
          <img src={arrow_left} alt="" />
         </div>
      <div className="swiper-button-next custom-arrow">
          <img src={arrow_right} alt="" />
      </div>
    </div>
  );
};

export default SecondSwiper;
