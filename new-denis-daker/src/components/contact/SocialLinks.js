import React from 'react';
import linkdin from "../../assets/social/ri_linkedin-fill.svg";
import telegram from "../../assets/social/mingcute_telegram-fill.svg";
import instagram from "../../assets/social/mdi_instagram.svg";
import facebook from "../../assets/social/ic_baseline-facebook.svg";
import whatsapp from "../../assets/social/ic_baseline-whatsapp.svg";
import phone from "../../assets/social/ph_phone-fill.svg";
import email from "../../assets/social/fluent_mail-32-filled.svg";


const SocialLinks = () => {
  return (
    <div className="contact__social__social">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/denis-akershteyn/" aria-label="LinkedIn">
            <img src={linkdin} alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://t.me/dakerweb" aria-label="Telegram">
            <img src={telegram} alt="Telegram" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/denis_daker/" aria-label="Instagram">
            <img src={instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/denisdaker" aria-label="Facebook">
            <img src={facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="https://wa.me/994507506901" aria-label="WhatsApp">
            <img src={whatsapp} alt="WhatsApp" />
          </a>
        </li>
        <li>
          <a href="tel:+994507506901" aria-label="Phone">
            <img src={phone} alt="Phone" />
          </a>
        </li>
        <li>
          <a href="mailto:contact@denisdaker.com" aria-label="Email">
            <img src={email} alt="Email" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
