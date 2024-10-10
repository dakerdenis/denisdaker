import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import the translation hook
import "../styles/header.css";
import logo from "../assets/Logo.svg";
import lang from "../assets/lang.svg";

const Header = () => {
  const { t, i18n } = useTranslation(); // Access translation functions
  const [isSticky, setIsSticky] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false); // State for language dropdown visibility

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Switch the language
  };

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
                  {t('header.about')}
                  <span className="blue-symbol">&gt;</span>
                </a>
              </li>
              <li>
                <a href="#services">
                  <span className="blue-symbol">&lt;</span>
                  {t('header.services')}
                  <span className="blue-symbol">&gt;</span>
                </a>
              </li>
              <li>
                <a href="#portfolio">
                  <span className="blue-symbol">&lt;</span>
                  {t('header.portfolio')}
                  <span className="blue-symbol">&gt;</span>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <span className="blue-symbol">&lt;</span>
                  {t('header.contact')}
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
              <button onClick={() => changeLanguage('az')}>AZ</button>
              <button onClick={() => changeLanguage('ru')}>RU</button>
              <button onClick={() => changeLanguage('en')}>EN</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
