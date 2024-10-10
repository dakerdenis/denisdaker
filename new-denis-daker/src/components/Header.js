import React, { useState, useEffect } from "react";
import "../styles/header.css";
import logo from "../assets/Logo.svg";
import lang from "../assets/lang.svg";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false); // State for language dropdown visibility

  useEffect(() => {
    const handleScroll = () => {
      const stickyThreshold = 40; // The point at which the header is fully sticky
      const earlyThreshold = stickyThreshold + 150; // 80px before the sticky point

      // Add background when scrolling down
      if (window.scrollY > stickyThreshold) {
        setIsSticky(true);
        setHasBackground(true);
      }

      // Remove background when scrolling back up before sticky point
      if (window.scrollY < earlyThreshold) {
        setIsSticky(false);
        setHasBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? "sticky" : ""} ${hasBackground ? "with-background" : ""}`}>
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="header__navigation__lang">
          <div className="header__navigation">
            <ul>
              <li>
                <a href="#about">
                  <span className="blue-symbol">&lt;</span>
                  About
                  <span className="blue-symbol">&gt;</span>
                </a>
              </li>
              <li>
                <a href="#services">
                  <span className="blue-symbol">&lt;</span>
                  Services
                  <span className="blue-symbol">&gt;</span>
                </a>
              </li>
              <li>
                <a href="#portfolio">
                  <span className="blue-symbol">&lt;</span>
                  Portfolio
                  <span className="blue-symbol">&gt;</span>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <span className="blue-symbol">&lt;</span>
                  Contacts
                  <span className="blue-symbol">&gt;</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Language Selector */}
          <div
            className="header__lang"
            onMouseEnter={() => setShowLangDropdown(true)}
            onMouseLeave={() => setShowLangDropdown(false)}
          >
            <img src={lang} alt="Language" />

            {showLangDropdown && (
              <div className="header__lang-dropdown">
                <ul>
                  <li>AZ</li>
                  <li>RU</li>
                  <li>EN</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
