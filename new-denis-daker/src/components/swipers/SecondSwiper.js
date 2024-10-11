import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import service1 from "../../assets/services/1.svg";
import service2 from "../../assets/services/2.svg";
import service3 from "../../assets/services/3.svg";
import service4 from "../../assets/services/4.svg";


import arrow_left from "../../assets/swiper/arrow-left.svg";
import arrow_right from "../../assets/swiper/arrow-right.svg";
const SecondSwiper = () => {
  const { t } = useTranslation();
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
                  <p>{t('services2.web_dev.name')}</p>
                  <div></div>
                </div>
              </div>

              <div className="second-swiper-desc">
                <p>{t('services2.web_dev.desc')}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="second-swiper-slide">
            <div className="second-swiper-block-container">
              <div className="second-swiper-nameandlogo">
                <div className="second-swiper-Logo">
                  <img src={service2} alt="" />
                </div>

                <div className="second-swiper-name">
                  <p>{t('services2.design.name')}</p>
                  <div></div>
                </div>
              </div>

              <div className="second-swiper-desc">
                <p>    
                {t('services2.design.desc.design_desc1')}         
                </p>
                <p>
                {t('services2.design.desc.design_desc2')}  
                </p>
                <p>
                {t('services2.design.desc.design_desc3')}  
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="second-swiper-slide">
            <div className="second-swiper-block-container">
              <div className="second-swiper-nameandlogo">
                <div className="second-swiper-Logo">
                  <img src={service3} alt="" />
                </div>

                <div className="second-swiper-name">
                  <p>{t('services2.b2c.name')} </p>
                  <div></div>
                </div>
              </div>

              <div className="second-swiper-desc">
                <p>
                {t('services2.b2c.desc.b2c_desc')} 
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="second-swiper-slide">
            <div className="second-swiper-block-container">
              <div className="second-swiper-nameandlogo">
                <div className="second-swiper-Logo">
                  <img src={service4} alt="" />
                </div>

                <div className="second-swiper-name">
                  <p>{t('services2.server.name')}</p>
                  <div></div>
                </div>
              </div>

              <div className="second-swiper-desc">
                <p>{t('services2.server.desc')}</p>
              </div>
            </div>
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
