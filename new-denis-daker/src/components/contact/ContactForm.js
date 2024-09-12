import React from 'react';
import arrow from "../assets/contact/Vector.svg";

const ContactForm = () => {
  return (
    <div className="contact__form">
      <form className="contact__form-form" noValidate>
        {/**contact form - inputs***/}
        <div className="contact__form-input_container">
          <div className="contact__form-input__data">
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <div className="input-group-input">
                <input type="text" id="name" placeholder="Your name" required />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="number">Number</label>
              <div className="input-group-input">
                <input type="text" id="number" placeholder="Your mobile number" required />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <div className="input-group-input">
                <input type="email" id="email" placeholder="Your e-mail address" required />
              </div>
            </div>
          </div>

          <div className="contact__form-input__data contact__form-input__data2">
            <div className="input-group">
              <label htmlFor="message">How can I help you?</label>
              <div className="contact-textarea">
                <textarea id="message" placeholder="Leave the message" required></textarea>
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

        {/**contact form - check button***/}
        <div className="contact__form-terms">
          <div className="input-group">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I give my consent to the processing of personal data in accordance with the Terms*
            </label>
          </div>
        </div>

        {/**submit button***/}
        <div className="contact__form-button">
          <button type="submit">
            <p>Send request</p>
            <img src={arrow} alt="Submit Icon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
