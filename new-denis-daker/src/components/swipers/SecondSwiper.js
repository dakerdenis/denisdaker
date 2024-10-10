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
              <p>With extensive experience in PHP, Laravel, HTML & CSS, and JavaScript, I specialize in creating robust and scalable websites tailored to client needs. From simple business card sites to complex web applications, I deliver solutions that are both aesthetically pleasing and highly functional. My deep understanding of modern web development allows me to craft seamless user experiences that drive engagement and deliver results.</p> <p>Leveraging MySQL and advanced database management skills, I ensure your website performs efficiently, regardless of the volume of traffic or data. My expertise in backend development guarantees fast, secure, and scalable solutions, while my frontend skills ensure your website is not only functional but visually compelling.</p> <p>Every project is approached with precision and attention to detail, resulting in websites that are reliable and easy to manage. Whether it's custom coding or integrating third-party tools, my goal is to create a digital presence that truly represents your brand and supports your business objectives.</p>
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
