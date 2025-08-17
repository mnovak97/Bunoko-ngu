import "./Header.scss";
import { useTranslation } from "react-i18next";
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef();
  const location = useLocation();

  const availableLanguages = [
    { code: "cro", label: "HR" },
    { code: "en", label: "ENG" },
  ];

  const currentLanguage =
    availableLanguages.find((lang) => lang.code === i18n.language) ||
    availableLanguages[0];

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleMenu = () => {
    navRef.current.classList.toggle("open");
    setIsMenuOpen((prev) => !prev);
  };

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsDropdownOpen(false);
  };

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Page-based header background classes
  const getHeaderClass = () => {
    if (isScrolled) return "header scrolled"; // navy when scrolled

    if (location.pathname === "/" || location.pathname === "/about") {
      return "header transparent"; // homepage + about → transparent
    }

    return "header navy"; // all other pages → navy
  };

  return (
    <header className={getHeaderClass()}>
      <div className="header__container">
        <h1 className="header__logo">
          <Link to="/">bunoko n.g.u.</Link>
        </h1>

        <nav className="header__nav">
          <ul
            ref={navRef}
            className={`header__links ${isMenuOpen ? "open" : ""}`}
          >
            <li>
              <Link to="/about" onClick={toggleMenu}>
                {t("about")}
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={toggleMenu}>
                {t("services")}
              </Link>
            </li>
            <li>
              <Link to="/careers" onClick={toggleMenu}>
                {t("careers")}
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                {t("contact")}
              </Link>
            </li>
            <li className="header__lang">
              <button onClick={toggleDropdown}>
                {currentLanguage.label}
              </button>
              {isDropdownOpen && (
                <ul className="header__dropdown">
                  {availableLanguages.map((lang) => (
                    <li key={lang.code} onClick={() => changeLanguage(lang.code)}>
                      {lang.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          <button className="header__menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
