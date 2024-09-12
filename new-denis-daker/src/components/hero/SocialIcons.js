// SocialIcons.js
import React from "react";
import linkedin from "../assets/social/ri_linkedin-fill.svg";
import telegram from "../assets/social/mingcute_telegram-fill.svg";
import instagram from "../assets/social/mdi_instagram.svg";
import facebook from "../assets/social/ic_baseline-facebook.svg";
import whatsapp from "../assets/social/ic_baseline-whatsapp.svg";
import phone from "../assets/social/ph_phone-fill.svg";
import email from "../assets/social/fluent_mail-32-filled.svg";

const SocialIcons = () => {
  return (
    <div className="hero__social hero_z">
      <div className="hero__social__container">
        <ul>
          <li>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
              <img src={telegram} alt="Telegram" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} alt="WhatsApp" />
            </a>
          </li>
          <li>
            <a href="tel:+123456789" target="_blank" rel="noopener noreferrer">
              <img src={phone} alt="Phone" />
            </a>
          </li>
          <li>
            <a href="mailto:someone@example.com">
              <img src={email} alt="Email" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialIcons;
