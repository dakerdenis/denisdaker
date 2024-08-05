import React, { useState, useEffect } from "react";
import "../styles/portfolio.css";
import dot from "../assets/dot.svg";
import arrow_portfolio from "../assets/arow_portfolio.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

const Portfolio = () => {
    const [spaceBetween, setSpaceBetween] = useState(25); // Adjusted spaceBetween for your scenario

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1600) {
                setSpaceBetween(25);
            } else {
                setSpaceBetween(50); // Adjusted to keep space consistent with the slide width
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
        <section id="portfolio">
            <div className="section__portfolio__container">
                <div className="porfolio__name">
                    <div className="porfolio__name-name">
                        <p>Portfolio</p>
                        <img src={dot} alt="" />
                    </div>

                    <div className="porfolio__name-link">
                        <a href="#">
                            <p>View all projects</p>
                            <img src={arrow_portfolio} alt="" />
                        </a>
                    </div>
                </div>

                <div className="porfolio__container__swiper">
                    <div className="porfolio__wrapper__swiper">
                        <Swiper
                            spaceBetween={spaceBetween} // Use the state value
                            slidesPerView={1.4} // Show 1.4 slides at a time
                            freeMode={true}
                            modules={[FreeMode]} // Only FreeMode module
                        >
                            <SwiperSlide style={{ width: "760px", height: "598px", marginLeft: "100px" }}>
                                <div className="swiper__block_porfolio">
                                    {/* Slide content goes here */}
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: "760px", height: "598px" }}>
                                <div className="swiper__block_porfolio">
                                    {/* Slide content goes here */}
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: "760px", height: "598px" }}>
                                <div className="swiper__block_porfolio">
                                    {/* Slide content goes here */}
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: "760px", height: "598px" }}>
                                <div className="swiper__block_porfolio">
                                    {/* Slide content goes here */}
                                </div>
                            </SwiperSlide>
                            {/* Add more slides as needed */}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
