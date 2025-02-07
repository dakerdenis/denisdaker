import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // Import Link from react-router
import arrow from "../../assets/contact/Vector.svg";

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <div className="contact__form">
      <form className="contact__form-form" noValidate>
        {/**contact form - inputs***/}
        <div className="contact__form-input_container">
          <div className="contact__form-input__data">
            <div className="input-group">
              <label htmlFor="name">{t("contact.form.name")}</label>
              <div className="input-group-input">
                <input type="text" id="name" placeholder={t("contact.form.name_desc")} required />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="number">{t("contact.form.number")} </label>
              <div className="input-group-input">
                <input type="text" id="number" placeholder={t("contact.form.number_desc")} required />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="email">{t("contact.form.email")}</label>
              <div className="input-group-input">
                <input type="email" id="email" placeholder={t("contact.form.email_desc")} required />
              </div>
            </div>
          </div>

          <div className="contact__form-input__data contact__form-input__data2">
            <div className="input-group">
              <label htmlFor="message">{t("contact.form.help")}</label>
              <div className="contact-textarea">
                <textarea id="message" placeholder={t("contact.form.help_desc")} required></textarea>
              </div>
            </div>

            <div className="input-group">
              <label>{t("contact.form.help2")}</label>
              <div className="radio-group">
                <div className="radio-block-group">
                  <input
                    type="radio"
                    id="email-contact"
                    name="contact-method"
                    value="email"
                    className="custom-radio"
                  />
                  <label htmlFor="email-contact">E-Mail</label>
                </div>

                <div className="radio-block-group">
                  <input
                    type="radio"
                    id="phone-contact"
                    name="contact-method"
                    value="phone"
                    className="custom-radio"
                  />
                  <label htmlFor="phone-contact">Phone</label>
                </div>

                <div className="radio-block-group">
                  <input
                    type="radio"
                    id="both-contact"
                    name="contact-method"
                    value="both"
                    className="custom-radio"
                  />
                  <label htmlFor="both-contact">Both</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/**contact form - check button***/}
        <div className="contact__form-terms">
          <div className="input-group">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              {t("contact.form.terms_desc")}
            </label>

            <Link to="/terms" target="_blank" rel="noopener noreferrer">
              {t("contact.form.terms_link")}
            </Link>

          </div>
        </div>


        {/**submit button***/}
        <div className="contact__form-button">
          <button type="submit">
            <p>{t("contact.form.button")}</p>
            <img src={arrow} alt="Submit Icon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
