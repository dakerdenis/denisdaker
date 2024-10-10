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
              <div className="swiper_name">Website development</div>
              <div className="swiper__desc">
              I create modern, scalable websites using PHP, Laravel, HTML, CSS, and JavaScript. My focus is on building sites that are efficient, secure, and tailored to meet your business needs. With expertise in both frontend and backend, I ensure seamless user experiences and optimized performance.


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
              <div className="swiper_name">Design</div>
              <div className="swiper__desc">
              Creating clean, modern web designs that enhance user experience and highlight brand identity. Design isn’t just about aesthetics, but also about functionality, ensuring every element is both useful and visually appealing. 
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
              <div className="swiper_name">B2C Architecture</div>
              <div className="swiper__desc">
              Experienced in designing business logic for B2C projects, ensuring smooth interactions between customers and businesses. Focused on creating user-friendly, scalable systems that support seamless transactions and customer engagement, while meeting business objectives efficiently.
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
              <div className="swiper_name">Server Maintenance</div>
              <div className="swiper__desc">
              Experienced in server setup and maintenance, including working with Nginx for efficient and reliable performance.
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
