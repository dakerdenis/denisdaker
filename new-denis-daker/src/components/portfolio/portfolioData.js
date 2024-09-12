import portfolio1 from "../assets/portfolio/1.png";
import subportfolio1 from "../assets/portfolio/1/1.png";
import subportfolio2 from "../assets/portfolio/1/2.png";
import subportfolio3 from "../assets/portfolio/1/3.png";

import portfolio2 from "../assets/portfolio/2.png";
import subportfolio2_1 from "../assets/portfolio/2/1.png";
import subportfolio2_2 from "../assets/portfolio/2/2.png";
import subportfolio2_3 from "../assets/portfolio/2/3.png";

import portfolio3 from "../assets/portfolio/3.png";
import subportfolio3_1 from "../assets/portfolio/3/1.png";
import subportfolio3_2 from "../assets/portfolio/3/2.png";
import subportfolio3_3 from "../assets/portfolio/3/3.png";

import portfolio4 from "../assets/portfolio/4.png";
import subportfolio4_1 from "../assets/portfolio/4/1.png";
import subportfolio4_2 from "../assets/portfolio/4/2.png";
import subportfolio4_3 from "../assets/portfolio/4/3.png";

import portfolio5 from "../assets/portfolio/5.png";
import subportfolio5_1 from "../assets/portfolio/5/1.png";
import subportfolio5_2 from "../assets/portfolio/5/2.png";
import subportfolio5_3 from "../assets/portfolio/5/3.png";

import portfolio6 from "../assets/portfolio/6.png";
import subportfolio6_1 from "../assets/portfolio/6/1.png";
import subportfolio6_2 from "../assets/portfolio/6/2.png";
import subportfolio6_3 from "../assets/portfolio/6/3.png";

import portfolio7 from "../assets/portfolio/7.png";
import subportfolio7_1 from "../assets/portfolio/7/1.png";
import subportfolio7_2 from "../assets/portfolio/7/2.png";
import subportfolio7_3 from "../assets/portfolio/7/3.png";

import quotes from "../assets/portfolio/quotes.svg";
import link from "../assets/swiper/link.svg";

const portfolioData = [
  {
    image: portfolio1,
    title: "Architectural Advertising Agency",
    quotes: quotes,
    description: [
      <p>
        The site was developed for an <span>Architectural advertising agency</span> with more than <span>20 years of experience</span> in the Azerbaijani market and abroad.
        The company didn't have a website, and our team was tasked with incorporating the company's <span>years of experience</span> and history into a simple, easy-to-use portfolio.
      </p>,
      <p>
        The design and concept were <span>developed on a turnkey basis</span> in accordance with all the <span>wishes and requirements</span> of the client.
        The site is <span>designed in two color modes</span> - day and night and in <span>two languages</span>, and an admin panel was developed for <span>complete content management</span> from the client.
      </p>
    ],
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
    quotes: quotes,
    description: [
      <p>
        Creation from scratch of a <span>multi-page business card site</span> for psychologist Nigar Gadashova.
      </p>,
      <p>
        Work was done on <span>design and layout.</span> A simple and <span>convenient</span> site where you can easily get acquainted with the <span>services and information</span> about the experience and education of a specialist, as well as easily contact Nigar through contact information or social networks.
      </p>
    ],
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
    description: [
      <p>
        The site is a <span>business card</span> for a young talented <span>photographer Fakhri Bagirov.</span> He started his career as a photographer while studying at a <span>university in Poland</span> and devoted most of his <span>time and life</span> to photography.
      </p>,
      <p>
        The task was to build a <span>simple site from scratch</span> with a light and clear design, for a brief <span>description</span> of the services provided and data for communication, along with a <span>detailed gallery</span> written in jQuery.
      </p>
    ],
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
    description: [
      <p>
        <span>LLC "UTC Parus"</span> collects the best educational programs from the most visited <span>educational centers</span> in Russia. They create new training courses and translate them into a distance learning format to make them even <span>more accessible</span>.
      </p>,
      <p>
        For this site, I was <span>engaged</span> in assembling the <span>Front part</span> according to the finished technical task and design.
      </p>
    ],
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
    description: [
      <p>
        <span>A-GROUP</span> was founded in 1995. It is a private and 100% <span>national company</span> dealing with various types of insurance, including <span>Medical, Accident, Property, and Vehicle Insurance</span>.
      </p>,
      <p>
        The <span>task was</span> to create a <span>promo page</span> for a <span>marketing project</span> for the sale of family insurance policies. More than <span>2,000 applications</span> passed through this page.
      </p>
    ],
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
    description: [
      <p>
        <span>"FinTrend"</span> operates on the basis of a license from the Central Bank of the Republic of Azerbaijan. Their mission is to support <span>small and medium-sized enterprises</span> by providing financial resources.
      </p>,
      <p>
        The site is a <span>business card</span> built from scratch with a <span>minimalistic and strict design</span> to convey necessary information and communication.
      </p>
    ],
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
    description: [
      <p>
        <span>Azerbaijan Travel International</span> specializes in organizing events and conferences, leisure and business trips for corporate clients and individuals.
      </p>,
      <p>
        The task was to significantly <span>speed up page loading</span> and lighten the code. Several pages and <span>contact forms were updated</span>.
      </p>
    ],
    additionalImages: [subportfolio7_1, subportfolio7_2, subportfolio7_3],
    link: "https://ati.az/",
    linkText: "ati.az",
    buttonImage: link,
    borderClass: "swiper__border__right7",
    buttonClass: "swiper__button_image7"
  }
];

export default portfolioData;
