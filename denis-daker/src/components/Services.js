import React from "react";
import "../styles/hero.css";
import "../styles/services.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Navigation, Pagination, FreeMode } from 'swiper';

// No need to call SwiperCore.use([])

const Services = () => {
  return (
    <section id="services">
      <div className="section__services__container">
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
            modules={[FreeMode, Navigation, Pagination]} // Registering modules here
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
