import React, { useState, useEffect } from "react";
import "../styles/portfolio.css";
import dot from "../assets/dot.svg";
import arrow_portfolio from "../assets/arow_portfolio.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

/***PORTFOLIO IMAGES 1****/
import portfolio1 from "../assets/portfolio/1.png";
import subportfolio1 from "../assets/portfolio/1/1.png";
import subportfolio2 from "../assets/portfolio/1/2.png";
import subportfolio3 from "../assets/portfolio/1/3.png";

/***PORTFOLIO IMAGES 2****/
import portfolio2 from "../assets/portfolio/2.png";
import subportfolio2_1 from "../assets/portfolio/2/1.png";
import subportfolio2_2 from "../assets/portfolio/2/2.png";
import subportfolio2_3 from "../assets/portfolio/2/3.png";

/***PORTFOLIO IMAGES 3****/
import portfolio3 from "../assets/portfolio/3.png";
import subportfolio3_1 from "../assets/portfolio/3/1.png";
import subportfolio3_2 from "../assets/portfolio/3/2.png";
import subportfolio3_3 from "../assets/portfolio/3/3.png";

/***PORTFOLIO IMAGES 4****/
import portfolio4 from "../assets/portfolio/4.png";
import subportfolio4_1 from "../assets/portfolio/4/1.png";
import subportfolio4_2 from "../assets/portfolio/4/2.png";
import subportfolio4_3 from "../assets/portfolio/4/3.png";

/***PORTFOLIO IMAGES 5****/
import portfolio5 from "../assets/portfolio/5.png";
import subportfolio5_1 from "../assets/portfolio/5/1.png";
import subportfolio5_2 from "../assets/portfolio/5/2.png";
import subportfolio5_3 from "../assets/portfolio/5/3.png";

/***PORTFOLIO IMAGES 6****/
import portfolio6 from "../assets/portfolio/6.png";
import subportfolio6_1 from "../assets/portfolio/6/1.png";
import subportfolio6_2 from "../assets/portfolio/6/2.png";
import subportfolio6_3 from "../assets/portfolio/6/3.png";

/***PORTFOLIO IMAGES 7****/
import portfolio7 from "../assets/portfolio/7.png";
import subportfolio7_1 from "../assets/portfolio/7/1.png";
import subportfolio7_2 from "../assets/portfolio/7/2.png";
import subportfolio7_3 from "../assets/portfolio/7/3.png";

import quotes from "../assets/portfolio/quotes.svg";
import link from "../assets/swiper/link.svg";

const Portfolio = () => {
  const [spaceBetween, setSpaceBetween] = useState(43);
  const [slideStyle, setSlideStyle] = useState({
    width: "767px",
    height: "598px",
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSpaceBetween(25);
        setSlideStyle({
          width: "330px",
          height: "500px",
        });
      } else {
        setSpaceBetween(43);
        setSlideStyle({
          width: "767px",
          height: "598px",
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
        <section id="portfolio">
            <div className="section__portfolio__container">
                <div className="porfolio__name">
                    <div className="porfolio__name-name">
                        <p>Portfolio</p>
                        <img src={dot} alt="" />
                    </div>

                    <div className="porfolio__name-link porfolio__name-link-pc">
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
                            <SwiperSlide style={{ ...slideStyle  }}>
                                <div className="swiper__block_porfolio">
                                    {/* Slide content goes here */}
                                    <div className="swiper__image__container swiper__image__container1">
                                        <img src={portfolio1} alt="" />
                                    </div>



                                    {/* Slide quotes */}
                                    <div className="swiper__portfolio__quotes">
                                        <img src={quotes} alt="" />
                                    </div>

                                    {/* Slide Desc */}
                                    <div className="swiper__portfolio__desc">
                                        <p>
                                            The site was developed for an <span>Architectural advertising agency</span> with more than <span>20 years of experience</span> in the Azerbaijani market and abroad.
                                            The company didn't have a website, and our team was tasked with incorporating the company's <span>years of experience</span> and history into a simple, easy-to-use portfolio
                                        </p>

                                        <p>
                                            The design and concept were <span>developed on a turnkey basis</span> in accordance with all the <span>wishes and requirements</span> of the client.
                                            The site is <span>designed in two color modes</span> - day and night and in <span>two languages</span>, and an admin panel was developed for <span>complete content management</span> from the client.
                                        </p>
                                    </div>
                                    {/* Slide additional */}
                                    <div className="swiper__portfolio__additional-photo">
                                        <div>
                                            <img src={subportfolio3} alt="" />
                                        </div>
                                        <div>
                                            <img src={subportfolio2} alt="" />
                                        </div>
                                        <div>
                                            <img src={subportfolio1} alt="" />
                                        </div>
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

                            <SwiperSlide style={{ ...slideStyle }}>
                                <div className="swiper__block_porfolio">
                                    {/* Slide content goes here */}
                                    <div className="swiper__image__container swiper__image__container1">
                                        <img src={portfolio2} alt="" />
                                    </div>



                                    {/* Slide quotes */}
                                    <div className="swiper__portfolio__quotes">
                                        <img src={quotes} alt="" />
                                    </div>

                                    {/* Slide Desc */}
                                    <div className="swiper__portfolio__desc">
                                        <p>
                                            Creation from scratch of a <span>multi-page business</span> card site for psychologist Nigar Gadashova.
                                        </p>
                                        <p>
                                            Work was done on <span>design and layout.</span> A simple and <span>convenient</span> site where you can easily get acquainted with the <span>services and information</span> about the experience and education of a specialist, as well as easily contact Nigar through contact information or social networks.
                                        </p>
                                    </div>
                                    {/* Slide additional */}
                                    <div className="swiper__portfolio__additional-photo">
                                        <div>
                                            <img src={subportfolio2_3} alt="" />
                                        </div>
                                        <div>
                                            <img src={subportfolio2_2} alt="" />
                                        </div>
                                        <div>
                                            <img src={subportfolio2_1} alt="" />
                                        </div>
                                    </div>

                                    <div className="swiper__border__left"></div>
                                    <div className="swiper__border__right swiper__border__right2"></div>



                                    <div className="swiper__button">
                                        <a target="_blank" href="https://gadashova.com/">
                                            <div className="swiper__button_image swiper__button_image2">
                                                <img src={link} alt="" />
                                            </div>
                                            <p>gadashova.com</p>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide style={{ ...slideStyle }}>
                                <div className="swiper__block_porfolio">
                                    {/* Slide content goes here */}
                                    <div className="swiper__image__container swiper__image__container1">
                                        <img src={portfolio3} alt="" />
                                    </div>



                                    {/* Slide quotes */}
                                    <div className="swiper__portfolio__quotes">
                                        <img src={quotes} alt="" />
                                    </div>

                                    {/* Slide Desc */}
                                    <div className="swiper__portfolio__desc">
                                        <p>
                                            The site is a <span>business card</span> for a young talented <span>photographer Fakhri Bagirov.</span> He started his career as a photographer while studying at a <span>university in Poland</span> and devoted most of his <span>time and life</span> to photography.
                                        </p>

                                        <p>
                                            The task was to build a <span>simple site from scratch</span> with a light and clear design, for a brief <span>description</span> of the services provided and data for communication, along with a <span>detailed gallery</span> written in jQuery.
                                        </p>
                                    </div>
                                    {/* Slide additional */}
                                    <div className="swiper__portfolio__additional-photo">
                                        <div>
                                            <img src={subportfolio3_3} alt="" />
                                        </div>
                                        <div>
                                            <img src={subportfolio3_2} alt="" />
                                        </div>
                                        <div>
                                            <img src={subportfolio3_1} alt="" />
                                        </div>
                                    </div>

                                    <div className="swiper__border__left swiper__border__left3"></div>
                                    <div className="swiper__border__right swiper__border__right3"></div>



                                    <div className="swiper__button swiper__button3">
                                        <a target="_blank" href="https://fahribagirov.daker.site/">
                                            <div className="swiper__button_image swiper__button_image3">
                                                <img src={link} alt="" />
                                            </div>
                                            <p>fahribagirov.daker.site</p>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide style={{ ...slideStyle  }}>
                                <div className="swiper__block_porfolio">
                                    {/* Slide content goes here */}
                                    <div className="swiper__image__container swiper__image__container1">
                                        <img src={portfolio4} alt="" />
                                    </div>



                                    {/* Slide quotes */}
                                    <div className="swiper__portfolio__quotes">
                                        <img src={quotes} alt="" />
                                    </div>

                                    {/* Slide Desc */}
                                    <div className="swiper__portfolio__desc">
                                        <p>
                                            <span>LLC "UTC Parus"</span> - They collect the best educational programs from the most visited <span>educational centers</span> in Russia. They create new training courses and translate them into a distance learning format in order to make them even <span>more accessible</span>. The training center also creates individual educational programs for the needs of corporate customers.

                                        </p>

                                        <p>
                                            For this site, I was <span>engaged</span> in assembling the <span>Front part</span> according to the finished technical task and design.
                                        </p>
                                    </div>
                                    {/* Slide additional */}
                                    <div className="swiper__portfolio__additional-photo">
                                        <div>
                                            <img src={subportfolio4_3} alt="" />
                                        </div>
                                        <div>
                                            <img src={subportfolio4_2} alt="" />
                                        </div>
                                        <div>
                                            <img src={subportfolio4_1} alt="" />
                                        </div>
                                    </div>

                                    <div className="swiper__border__left"></div>
                                    <div className="swiper__border__right swiper__border__right4"></div>



                                    <div className="swiper__button">
                                        <a target="_blank" href="https://parus86.ru/">
                                            <div className="swiper__button_image swiper__button_image4">
                                                <img src={link} alt="" />
                                            </div>
                                            <p>parus86.ru</p>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide style={{...slideStyle }}>
                                <div className="swiper__block_porfolio">
                                    {/* Slide content goes here */}
                                    <div className="swiper__image__container swiper__image__container1">
                                        <img src={portfolio5} alt="" />
                                    </div>



                                    {/* Slide quotes */}
                                    <div className="swiper__portfolio__quotes">
                                        <img src={quotes} alt="" />
                                    </div>

                                    {/* Slide Desc */}
                                    <div className="swiper__portfolio__desc">
                                        <p>
                                            <span>A-GROUP</span> was founded in 1995. It is a private and 100% <span>national company.</span> A-Group <span>Insurance Company</span> deals with various types of insurance, including <span>Medical, Accident Insurance, Property Insurance, Vehicle Insurance,</span> etc.
                                        </p>

                                        <p>
                                            The <span>task was</span> to create a <span>promo page</span> for a <span>marketing project</span> for the sale of family insurance policies,<span> more than 2,000 applications</span> passed through this page.
                                        </p>

                                        <p>
                                            Data validation and validation for <span>JS, API</span> requests, PHP form submission, <span>MySQL database</span> raised on <span>Nginx</span>.
                                        </p>
                                    </div>
                                    {/* Slide additional */}
                                    <div className="swiper__portfolio__additional-photo">
                                        <div>
                                            <img src={subportfolio5_3} alt="" />
                                        </div>
                                        <div>
                                            <img src={subportfolio5_2} alt="" />
                                        </div>
                                        <div>
                                            <img src={subportfolio5_1} alt="" />
                                        </div>
                                    </div>

                                    <div className="swiper__border__left"></div>
                                    <div className="swiper__border__right swiper__border__right5"></div>



                                    <div className="swiper__button">
                                        <a target="_blank" href="https://aile.a-group.az/">
                                            <div className="swiper__button_image swiper__button_image5">
                                                <img src={link} alt="" />
                                            </div>
                                            <p>aile.a-group.az</p>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide style={{ ...slideStyle  }}>
                                <div className="swiper__block_porfolio">
                                    {/* Slide content goes here */}
                                    <div className="swiper__image__container swiper__image__container1">
                                        <img src={portfolio6} alt="" />
                                    </div>



                                    {/* Slide quotes */}
                                    <div className="swiper__portfolio__quotes">
                                        <img src={quotes} alt="" />
                                    </div>

                                    {/* Slide Desc */}
                                    <div className="swiper__portfolio__desc">
                                        <p>
                                            <span>Non-bank</span> credit organization <span>"FinTrend"</span> operates on the basis of license BKT-24 of the Central Bank of the Republic of Azerbaijan dated June 5, 2014. The mission of "FinTrend" is to promote the diversification of the non-primary sector of the economy of the republic, support the provision of financial resources to <span>small and medium-sized enterprises.</span>
                                        </p>
                                        <p>
                                            The site - <span> the business card</span> of the organization is built from <span>scratch.</span> The main task was a <span>minimalistic</span> and strict <span>design</span> and the transfer of all necessary information and communication.
                                        </p>
                                    </div>
                                    {/* Slide additional */}
                                    <div className="swiper__portfolio__additional-photo">
                                        <div>
                                            <img src={subportfolio6_3} alt="" />
                                        </div>
                                        <div>
                                            <img src={subportfolio6_2} alt="" />
                                        </div>
                                        <div>
                                            <img src={subportfolio6_1} alt="" />
                                        </div>
                                    </div>

                                    <div className="swiper__border__left"></div>
                                    <div className="swiper__border__right swiper__border__right6"></div>



                                    <div className="swiper__button">
                                        <a target="_blank" href="https://aile.a-group.az/">
                                            <div className="swiper__button_image swiper__button_image6">
                                                <img src={link} alt="" />
                                            </div>
                                            <p>fintrend.az</p>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide style={{ ...slideStyle }}>
                                <div className="swiper__block_porfolio">
                                    {/* Slide content goes here */}
                                    <div className="swiper__image__container swiper__image__container1">
                                        <img src={portfolio7} alt="" />
                                    </div>



                                    {/* Slide quotes */}
                                    <div className="swiper__portfolio__quotes">
                                        <img src={quotes} alt="" />
                                    </div>

                                    {/* Slide Desc */}
                                    <div className="swiper__portfolio__desc">
                                        <p>
                                            <span>Azerbaijan Travel International</span> is a travel company that specializes in organizing events and conferences, leisure and business trips for corporate clients and individuals. A complex project to update the site, the old site was implemented on WordPress.
                                        </p>

                                        <p>
                                            On the part of the client, the task was to significantly <span> speed up</span> page loading and lighten the code. Some pages of the original version of the site were also <span>changed</span>, booking and contact <span>forms were updated.</span>
                                        </p>
                                    </div>
                                    {/* Slide additional */}
                                    <div className="swiper__portfolio__additional-photo">
                                        <div>
                                            <img src={subportfolio7_3} alt="" />
                                        </div>
                                        <div>
                                            <img src={subportfolio7_2} alt="" />
                                        </div>
                                        <div>
                                            <img src={subportfolio7_1} alt="" />
                                        </div>
                                    </div>

                                    <div className="swiper__border__left"></div>
                                    <div className="swiper__border__right swiper__border__right7"></div>



                                    <div className="swiper__button">
                                        <a target="_blank" href="https://aile.a-group.az/">
                                            <div className="swiper__button_image swiper__button_image7">
                                                <img src={link} alt="" />
                                            </div>
                                            <p>ati.az</p>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>


                </div>
                <div className="porfolio__name-link porfolio__name-link-mobile">
                        <a href="#">
                            <p>View all projects</p>
                            <img src={arrow_portfolio} alt="" />
                        </a>
                    </div>
            </div>
        </section>
    );
};

export default Portfolio;
