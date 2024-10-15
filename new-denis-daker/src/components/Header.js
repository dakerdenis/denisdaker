import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation
import "../styles/header.css";
import logo from "../assets/Logo.svg";
import lang from "../assets/lang.svg";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
  };

  const handleNavigation = (path, sectionId) => {
    navigate(path); 
    setTimeout(() => {
      const element = document.getElementById(sectionId); 
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); 
  };

  useEffect(() => {
    const handleScroll = () => {
      const stickyThreshold = 40;
      const earlyThreshold = stickyThreshold + 150;

      if (window.scrollY > stickyThreshold) {
        setIsSticky(true);
        setHasBackground(true);
      }

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
          <Link to="/denis-daker">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="header__navigation__lang">
          <div className="header__navigation">
            <ul>
              <li>
                <button onClick={() => handleNavigation("/denis-daker", "about")} className="nav-link-button">
                  <span className="blue-symbol">&lt;</span>
                  {t('header.about')}
                  <span className="blue-symbol">&gt;</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation("/denis-daker", "services")} className="nav-link-button">
                  <span className="blue-symbol">&lt;</span>
                  {t('header.services')}
                  <span className="blue-symbol">&gt;</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation("/denis-daker", "portfolio")} className="nav-link-button">
                  <span className="blue-symbol">&lt;</span>
                  {t('header.portfolio')}
                  <span className="blue-symbol">&gt;</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation("/denis-daker", "contact")} className="nav-link-button">
                  <span className="blue-symbol">&lt;</span>
                  {t('header.contact')}
                  <span className="blue-symbol">&gt;</span>
                </button>
              </li>
            </ul>
          </div>

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
