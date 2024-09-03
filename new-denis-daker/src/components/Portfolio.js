import React, { useState, useEffect } from "react";
import "../styles/portfolio.css";
import dot from "../assets/dot.svg";
import arrow_portfolio from "../assets/arow_portfolio.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";




/***PORTFOLIO IMAGES****/
import portfolio1 from "../assets/portfolio/1.png"; 

import quotes from '../assets/portfolio/quotes.svg';

import link from "../assets/swiper/link.svg";
const Portfolio = () => {
    const [spaceBetween, setSpaceBetween] = useState(43); // Fixed space between slides

    useEffect(() => {
        const handleResize = () => {
            // You can adjust this if you want to change behavior based on screen size,
            // but if you want a fixed space of 43px, we can leave this out
            setSpaceBetween(90);
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
                            spaceBetween={spaceBetween} // Use the fixed spaceBetween value
                            slidesPerView="auto" // We don't need to set a specific slidesPerView
                            freeMode={true}
                            modules={[FreeMode]} // Only FreeMode module
                        >
                            <SwiperSlide style={{ width: "767px", height: "598px" }}>
                                <div className="swiper__block_porfolio">
                                    {/* Slide content goes here */}
                                    <div className="swiper__image__container swiper__image__container1">
                                        <img src={portfolio1} alt="" />
                                    </div>


                                    
                                    
                                    <div className="swiper__portfolio__quotes">
                                        <img src={quotes} alt="" />
                                    </div>

                                    
                                    <div className="swiper__portfolio__desc">
                                        <p>
                                        The site was developed for an Architectural advertising agency with more than 20 years of experience in the Azerbaijani market and abroad. 
                                        The company didn't have a website, and our team was tasked with incorporating the company's years of experience and history into a simple, easy-to-use portfolio
                                        </p>
                                        
                                        <p>
                                        The design and concept were developed on a turnkey basis in accordance with all the wishes and requirements of the client. 
                                        The site is designed in two color modes - day and night and in two languages, and an admin panel was developed for complete content management from the client.
                                        </p>
                                    </div>
                                    <div className="swiper__border__left"></div>
                                    <div className="swiper__border__right swiper__border__right1"></div>
                                    


                                    <div className="swiper__button">
                                        <a target="_blank" href="https://altaysel.az/">
                                            <div className="swiper__button_image swiper__button_image1">
                                                <img src={link} alt="" />
                                            </div>
                                            <p>altaysel.az</p>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: "767px", height: "598px" }}>
                                <div className="swiper__block_porfolio">
                                    {/* Slide content goes here */}
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: "767px", height: "598px" }}>
                                <div className="swiper__block_porfolio">
                                    {/* Slide content goes here */}
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: "767px", height: "598px" }}>
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
