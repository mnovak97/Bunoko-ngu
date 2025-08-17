import "./Header.scss";
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const availableLanguages = [
    { code: "cro", label: "HR" },
    { code: "en", label: "ENG" },
  ];

  const currentLanguage =
    availableLanguages.find((lang) => lang.code === i18n.language) ||
    availableLanguages[0];

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { to: "/about", label: t("about") },
    { to: "/services", label: t("services") },
    { to: "/careers", label: t("careers") },
    { to: "/contact", label: t("contact") },
  ];

  // Determine desktop header class
  const isTransparent =
    (location.pathname === "/" || location.pathname === "/about") && !isScrolled;

  return (
    <header className={`header ${isTransparent ? "transparent" : "scrolled"}`}>
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">bunoko n.g.u.</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="header__nav desktop">
          <ul className="header__links">
            {menuItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}

            <li className={`header__lang ${isDropdownOpen ? "open" : ""}`}>
              <button onClick={toggleDropdown}>{currentLanguage.label}</button>
              <ul className="header__dropdown">
                {availableLanguages.map((lang) => (
                  <li key={lang.code} onClick={() => changeLanguage(lang.code)}>
                    {lang.label}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <div className="header__mobile">
          <button className="header__menu-btn" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className={`header__mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
            {menuItems.map((item) => (
              <li key={item.to} onClick={() => setIsMobileMenuOpen(false)}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}

            <li className={`header__lang ${isDropdownOpen ? "open" : ""}`}>
              <button onClick={toggleDropdown}>{currentLanguage.label}</button>
              <ul className="header__dropdown">
                {availableLanguages.map((lang) => (
                  <li key={lang.code} onClick={() => changeLanguage(lang.code)}>
                    {lang.label}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
