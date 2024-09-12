import portfolio1 from "../assets/portfolio/1.png";
import subportfolio1 from "../assets/portfolio/1/1.png";
import subportfolio2 from "../assets/portfolio/1/2.png";
import subportfolio3 from "../assets/portfolio/1/3.png";
import quotes from "../assets/portfolio/quotes.svg";
import link from "../assets/swiper/link.svg";

const portfolioData = [
  {
    image: portfolio1,
    title: "Portfolio 1",
    quotes: quotes,
    description: [
      "The site was developed for an Architectural advertising agency...",
      "The design and concept were developed on a turnkey basis..."
    ],
    additionalImages: [subportfolio1, subportfolio2, subportfolio3],
    link: "https://altaysel.az/",
    linkText: "altaysel.az",
    buttonImage: link,
    borderClass: "swiper__border__right1",
    buttonClass: "swiper__button_image1"
  },
  // Add more portfolio objects...
];

export default portfolioData;
