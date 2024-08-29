import React from "react";
import "../styles/contact.css";
import dot from "../assets/dot.svg";
import arrow from "../assets/contact/Vector.svg";
import logo from "../assets/contact/Logo.svg";


import linkdin from "../assets/social/ri_linkedin-fill.svg";
import telegram from "../assets/social/mingcute_telegram-fill.svg";
import instagram from "../assets/social/mdi_instagram.svg";
import facebook from "../assets/social/ic_baseline-facebook.svg";
import whatsapp from "../assets/social/ic_baseline-whatsapp.svg";
import phone from "../assets/social/ph_phone-fill.svg";
import email from "../assets/social/fluent_mail-32-filled.svg";
const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__wrapper">
        <div className="contact__desc">
          <p>
            Leave your details for feedback or contact me in a way convenient
            for you.
          </p>
        </div>

        <div className="contact__container">
          {/**contact image***/}
          <div className="contact__image">
            <div className="contact__image-name">
              <p>Contact</p>
              <img src={dot} alt="" />
            </div>
          </div>
          {/**contact form***/}
          <div className="contact__form">
            <form className="contact__form-form">
              {/**contact form - inputs***/}
              <div className="contact__form-input_container">
                <div className="contact__form-input__data">
                  <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <div className="input-group-input">
                      <input type="text" id="name" placeholder="Your name" />
                    </div>
                  </div>

                  <div className="input-group">
                    <label htmlFor="number">Number</label>
                    <div className="input-group-input">
                      <input
                        type="text"
                        id="number"
                        placeholder="Your mobile number"
                      />
                    </div>
                  </div>

                  <div className="input-group">
                    <label htmlFor="email">E-mail</label>
                    <div className="input-group-input">
                      <input
                        type="email"
                        id="email"
                        placeholder="Your e-mail address"
                      />
                    </div>
                  </div>
                </div>

                <div className="contact__form-input__data contact__form-input__data2">
                  <div className="input-group">
                    <label htmlFor="message">How can I help you?</label>
                    <div className="contact-textarea">
                      <textarea
                        id="message"
                        placeholder="Leave the message"
                      ></textarea>
                    </div>
                  </div>

                  <div className="input-group">
                    <label>How can I contact you?</label>
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

              {/**contact form - check btton***/}
              <div className="contact__form-terms">
                <div className="input-group">
                  <input type="checkbox" id="terms" />
                  <label htmlFor="terms">
                    I give my consent to the processing of personal data in
                    accordance with the Terms*
                  </label>

                </div>
              </div>

              {/**submit button***/}
              <div className="contact__form-button">
                <button type="submit">
                  <p>Send request</p>
                  <img src={arrow} alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>



        <div className="contact__social__">

          {/**Footer Logo***/}
          <div className="contact__social__daker">
            <img src={logo} alt="" />
          </div>

          {/**contact social social***/}
          <div className="contact__social__social">
            <ul>
              <li>
                <a href="#">
                  <img src={linkdin} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={telegram} />
                </a>
              </li>

              <li>
                <a href="#">
                  <img src={instagram} />
                </a>
              </li>

              <li>
                <a href="#">
                  <img src={facebook} />
                </a>
              </li>

              <li>
                <a href="#">
                  <img src={whatsapp} />
                </a>
              </li>

              <li>
                <a href="#">
                  <img src={phone} />
                </a>
              </li>

              <li>
                <a href="#">
                  <img src={email} />
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
