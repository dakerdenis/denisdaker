import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, Link } from "react-router-dom"; // Import Link for navigation
import "../styles/header.css";
import "../styles/burger.css";
import logo from "../assets/Logo.svg"; // Preserved your logo import
import lang from "../assets/lang.svg";


const Header = () => {
  const { t, i18n } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For burger menu
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleNavigation = (path, sectionId) => {
    setIsMobileMenuOpen(false); // Close the mobile menu on navigation
    navigate(path);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle burger menu
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
    <header
      className={`header ${isSticky ? "sticky" : ""} ${hasBackground ? "with-background" : ""
        }`}
    >
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">
          <Link to="/denis-daker">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="header__navigation__lang">
          <div className="header__navigation">
            <ul>
              <li>
                <button
                  onClick={() => handleNavigation("/denis-daker", "about")}
                  className="nav-link-button"
                >
                  <span className="blue-symbol">&lt;</span>
                  {t("header.about")}
                  <span className="blue-symbol">&gt;</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/denis-daker", "services")}
                  className="nav-link-button"
                >
                  <span className="blue-symbol">&lt;</span>
                  {t("header.services")}
                  <span className="blue-symbol">&gt;</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/denis-daker", "portfolio")}
                  className="nav-link-button"
                >
                  <span className="blue-symbol">&lt;</span>
                  {t("header.portfolio")}
                  <span className="blue-symbol">&gt;</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/denis-daker", "contact")}
                  className="nav-link-button"
                >
                  <span className="blue-symbol">&lt;</span>
                  {t("header.contact")}
                  <span className="blue-symbol">&gt;</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Language Selection */}
          <div
            className="header__lang"
            onMouseEnter={() => setShowLangDropdown(true)}
            onMouseLeave={() => setShowLangDropdown(false)}
          >
            <img src={lang} alt="Language" />
            {showLangDropdown && (
              <div className="header__lang-dropdown">
                <button onClick={() => changeLanguage("az")}>AZ</button>
                <button onClick={() => changeLanguage("ru")}>RU</button>
                <button onClick={() => changeLanguage("en")}>EN</button>
              </div>
            )}
          </div>
        </div>

        {/* Burger Menu for Mobile */}
        <div className="header__navigation__lang-mobile">
          <button
            className={`burger-menu-button ${isMobileMenuOpen ? "open" : ""}`}
            onClick={toggleMobileMenu}
          >
            {/* Button content handled in CSS */}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>

          <div className="mobile-menu-wrapper">

            <div className="mobile-menu-logo">
              <Link to="/denis-daker">
                <img src={logo} alt="Logo" />
              </Link>
            </div>


            <button className="close-button" onClick={toggleMobileMenu}>
              X {/* Close Button */}
            </button>
            <div className="mobile-menu-navigation">
              <button onClick={() => handleNavigation("/denis-daker", "about")}>
                {t("header.about")}
              </button>
              <button onClick={() => handleNavigation("/denis-daker", "services")}>
                {t("header.services")}
              </button>
              <button onClick={() => handleNavigation("/denis-daker", "portfolio")}>
                {t("header.portfolio")}
              </button>
              <button onClick={() => handleNavigation("/denis-daker", "contact")}>
                {t("header.contact")}
              </button>
            </div>







            <div className="mobile-menu-created">
              <p>© 2024 daker.website - All rights reserved</p>
            </div>
          </div>




        </div>
      </div>
    </header>
  );
};

export default Header;
