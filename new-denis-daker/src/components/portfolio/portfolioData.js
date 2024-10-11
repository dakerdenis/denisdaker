import portfolio1 from "../../assets/portfolio/1.png";
import subportfolio1 from "../../assets/portfolio/1/1.png";
import subportfolio2 from "../../assets/portfolio/1/2.png";
import subportfolio3 from "../../assets/portfolio/1/3.png";


import portfolio2 from "../../assets/portfolio/2.png";
import subportfolio2_1 from "../../assets/portfolio/2/1.png";
import subportfolio2_2 from "../../assets/portfolio/2/2.png";
import subportfolio2_3 from "../../assets/portfolio/2/3.png";

import portfolio3 from "../../assets/portfolio/3.png";
import subportfolio3_1 from "../../assets/portfolio/3/1.png";
import subportfolio3_2 from "../../assets/portfolio/3/2.png";
import subportfolio3_3 from "../../assets/portfolio/3/3.png";

import portfolio4 from "../../assets/portfolio/4.png";
import subportfolio4_1 from "../../assets/portfolio/4/1.png";
import subportfolio4_2 from "../../assets/portfolio/4/2.png";
import subportfolio4_3 from "../../assets/portfolio/4/3.png";

import portfolio5 from "../../assets/portfolio/5.png";
import subportfolio5_1 from "../../assets/portfolio/5/1.png";
import subportfolio5_2 from "../../assets/portfolio/5/2.png";
import subportfolio5_3 from "../../assets/portfolio/5/3.png";

import portfolio6 from "../../assets/portfolio/6.png";
import subportfolio6_1 from "../../assets/portfolio/6/1.png";
import subportfolio6_2 from "../../assets/portfolio/6/2.png";
import subportfolio6_3 from "../../assets/portfolio/6/3.png";

import portfolio7 from "../../assets/portfolio/7.png";
import subportfolio7_1 from "../../assets/portfolio/7/1.png";
import subportfolio7_2 from "../../assets/portfolio/7/2.png";
import subportfolio7_3 from "../../assets/portfolio/7/3.png";

import quotes from "../../assets/portfolio/quotes.svg";
import link from "../../assets/swiper/link.svg";

const portfolioData = [
  {
    image: portfolio1,
    title: "Architectural Advertising Agency", // You can translate this too, if needed
    descriptionKey: "portfolio.architectural_agency",
    quotes: quotes,
    additionalImages: [subportfolio1, subportfolio2, subportfolio3],
    link: "https://altaysel.az/",
    linkText: "altaysel.az",
    buttonImage: link,
    borderClass: "swiper__border__right1",
    buttonClass: "swiper__button_image1"
  },
  {
    image: portfolio2,
    title: "Psychologist Nigar Gadashova",
    descriptionKey: "portfolio.psychologist_nigar",
    quotes: quotes,
    additionalImages: [subportfolio2_1, subportfolio2_2, subportfolio2_3],
    link: "https://gadashova.com/",
    linkText: "gadashova.com",
    buttonImage: link,
    borderClass: "swiper__border__right2",
    buttonClass: "swiper__button_image2"
  },
  {
    image: portfolio3,
    title: "Photographer Fakhri Bagirov",
    quotes: quotes,
    descriptionKey: "portfolio.photography",
    additionalImages: [subportfolio3_1, subportfolio3_2, subportfolio3_3],
    link: "https://fahribagirov.daker.site/",
    linkText: "fahribagirov.daker.site",
    buttonImage: link,
    borderClass: "swiper__border__right3",
    buttonClass: "swiper__button_image3"
  },
  {
    image: portfolio4,
    title: "UTC Parus LLC",
    quotes: quotes,
    descriptionKey: "portfolio.psychologist_nigar",
    additionalImages: [subportfolio4_1, subportfolio4_2, subportfolio4_3],
    link: "https://parus86.ru/",
    linkText: "parus86.ru",
    buttonImage: link,
    borderClass: "swiper__border__right4",
    buttonClass: "swiper__button_image4"
  },
  {
    image: portfolio5,
    title: "A-GROUP Insurance",
    quotes: quotes,
    descriptionKey: "portfolio.psychologist_nigar",
    additionalImages: [subportfolio5_1, subportfolio5_2, subportfolio5_3],
    link: "https://aile.a-group.az/",
    linkText: "aile.a-group.az",
    buttonImage: link,
    borderClass: "swiper__border__right5",
    buttonClass: "swiper__button_image5"
  },
  {
    image: portfolio6,
    title: "FinTrend Non-bank Credit Organization",
    quotes: quotes,
    descriptionKey: "portfolio.psychologist_nigar",
    additionalImages: [subportfolio6_1, subportfolio6_2, subportfolio6_3],
    link: "https://fintrend.az/",
    linkText: "fintrend.az",
    buttonImage: link,
    borderClass: "swiper__border__right6",
    buttonClass: "swiper__button_image6"
  },
  {
    image: portfolio7,
    title: "Azerbaijan Travel International",
    quotes: quotes,
    descriptionKey: "portfolio.psychologist_nigar",
    additionalImages: [subportfolio7_1, subportfolio7_2, subportfolio7_3],
    link: "https://ati.az/",
    linkText: "ati.az",
    buttonImage: link,
    borderClass: "swiper__border__right7",
    buttonClass: "swiper__button_image7"
  }
];

export default portfolioData;
