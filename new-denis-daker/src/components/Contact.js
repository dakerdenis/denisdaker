import React from "react";
import "../styles/contact.css";
import dot from "../assets/dot.svg";
import ContactForm from "./contact/ContactForm";
import ContactFooter from "./contact/ContactFooter";
import ContactPolygons from "./contact/ContactPolygons";

import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact">
      <div className="contact__wrapper">
        <div className="contact__desc">
          <p>
          {t('contact.name')}
          </p>
        </div>

        <div className="contact__container">
          {/**contact image***/}
          <div className="contact__image card">
            <div className="contact__image-name">
              <p>Contact</p>
              <img src={dot} alt="Dot Decoration" />
            </div>
          </div>

          {/**contact form***/}
          <ContactForm />
        </div>

        <ContactFooter />

        <ContactPolygons />
      </div>
    </section>
  );
};

export default Contact;
