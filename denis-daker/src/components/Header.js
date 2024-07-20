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
          {/**NAvigation***/}
          <div className="header__navigation">
            <ul>
              <li>
                <a href="#">
                  <span className="blue-symbol">&lt;</span>
                  About
                  <span className="blue-symbol">&gt;</span>
                </a>
              </li>
              <li>
                <a href="#">
                <span className="blue-symbol">&lt;</span>
                  Services
                  <span className="blue-symbol">&gt;</span>
                </a>
              </li>
              <li>
                <a href="#">
                <span className="blue-symbol">&lt;</span>
                  Portfolio
                  <span className="blue-symbol">&gt;</span>
                </a>
              </li>
              <li>
                <a href="#">
                <span className="blue-symbol">&lt;</span>
                  Contacts
                  <span className="blue-symbol">&gt;</span>
                </a>
              </li>
            </ul>
          </div>
          {/**Switch Language***/}
          <div className="header__lang">
            <img src={lang} alt="Language" /> {/* Add the image here */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
