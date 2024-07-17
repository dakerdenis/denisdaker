import React from "react";
import "../styles/header.css";
import logo from "../assets/Logo.svg";
import lang from "../assets/lang.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="Logo" /> {/* Add the image here */}
        </div>
        <div className="header__navigation__lang">
          <div className="header__navigation">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="">Portfolio</a>
              </li>
              <li>
                <a href="">Contacts</a>
              </li>
            </ul>
          </div>

          <div className="header__lang">
            <img src={lang} alt="Language" /> {/* Add the image here */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
