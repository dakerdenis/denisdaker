import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
            <div className="second-swiper-block-container">
              <div className="second-swiper-nameandlogo">
                <div className="second-swiper-Logo">
                  <img src={service2} alt="" />
                </div>

                <div className="second-swiper-name">
                  <p>Design</p>
                  <div></div>
                </div>
              </div>

              <div className="second-swiper-desc">
                <p>              With experience in design tools like Canva, Photoshop, and Figma, I have worked on various projects, including larger ones that required detailed design work. While design may not be my primary focus, I have successfully delivered visually appealing and user-friendly designs that complement the functionality of the websites I develop. My design approach emphasizes simplicity and clarity, ensuring that the visual elements support the overall user experience.
                </p>
                <p>Leveraging my understanding of web design principles, I ensure that layouts are responsive, clean, and aligned with brand identity. I can create everything from logos and banners to entire web layouts, making sure the design enhances the user journey and strengthens engagement.
                </p>
                <p>
                  Each design project is approached with practicality, ensuring it's easy to implement and maintain across different devices and platforms. Whether collaborating with other designers or working independently, my goal is to deliver designs that not only look good but also improve the usability and effectiveness of the final product.
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
                  <p>B2C Architecture</p>
                  <div></div>
                </div>
              </div>

              <div className="second-swiper-desc">
                <p> Crafting seamless experiences for users and businesses alike is at the heart of my approach to B2C architecture. Over the years, I’ve worked on diverse projects, from small startups to larger enterprises, focusing on building systems that streamline customer interactions and business processes. My aim is always to ensure that the architecture not only meets the business goals but also provides an intuitive, user-friendly experience. </p> <p> By leveraging backend expertise, I design solutions that are scalable and capable of managing high traffic and complex workflows. Whether it's managing customer data or optimizing transactions, my architecture solutions are built to enhance performance and provide a smooth experience for both the business and the end user. </p> <p> Every project is approached with a practical mindset, ensuring adaptability and ease of implementation. From integrating third-party services to creating custom solutions, my goal is to build a solid infrastructure that grows with your business while delivering consistent value to your customers. </p>
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
                  <p>Server Maintenance</p>
                  <div></div>
                </div>
              </div>

              <div className="second-swiper-desc">
                <p> Handling server maintenance is a critical aspect of ensuring smooth and reliable website performance. I have experience working with server configurations, particularly with Nginx, ensuring that servers are optimized for speed and security. While it's often behind the scenes, maintaining servers is essential for keeping websites running efficiently and minimizing downtime. </p> <p> Leveraging my knowledge of server management, I set up, monitor, and maintain servers to handle high traffic volumes while ensuring secure data flow. From optimizing server performance to managing backups and updates, I make sure that everything runs smoothly and without interruption, providing a solid foundation for web applications. </p> <p> Every server project is approached with a focus on reliability and scalability, ensuring that your infrastructure can grow with your business. Whether configuring a new server or troubleshooting issues with an existing one, my goal is to provide maintenance that ensures maximum uptime and optimal performance. </p>
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
