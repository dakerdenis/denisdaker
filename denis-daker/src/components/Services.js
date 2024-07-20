import React from "react";
import "../styles/hero.css";
import "../styles/services.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, { FreeMode, Navigation, Pagination } from 'swiper';


// Install Swiper modules
SwiperCore.use([FreeMode, Navigation, Pagination]);

const Services = () => {
  return (
    <section id="about">
      <div className="section__services__container" >
            <div className="services__name">
            Services <span>.</span>
            </div>

            <div className="services__wrapper__swiper">
            <Swiper
            spaceBetween={50}
            slidesPerView={3}
            freeMode={true}
            navigation={true}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            {/* Add more slides as needed */}
          </Swiper>
            </div>
      </div>
    </section>
  );
};

export default Services;
