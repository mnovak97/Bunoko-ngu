import "./Header.css";
import { useTranslation } from "react-i18next";
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";


function Header() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isListOpen, setIsListOpen]=useState(false);
  const navRef=useRef();

  const availableLanguages = [
    { code: 'cro', label: 'HR' },
    { code: 'en', label: 'ENG' },
  ];

  const currentLanguage = availableLanguages.find(
    (language) => language.code === i18n.language
  ) || availableLanguages[0];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const showList=()=>{
    navRef.current.classList.toggle("open")
    setIsListOpen(!isListOpen)
  }

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setIsDropdownOpen(false);
  };
  
  const handleNavigation = () => {
    navRef.current.classList.toggle("open")
    setIsListOpen(!isListOpen)
  };

  return (
    <header>
        <h1><Link to="/" >bunoko n.g.u.</Link></h1>
      <nav >
        <ul ref={navRef}>
          <li>
            <Link to="/about" onClick={handleNavigation}>{t('about')}</Link>  
          </li>
          <li>
            <Link to="/services" onClick={handleNavigation}>{t('services')}</Link>  
          </li>
          <li>
            <Link to="/careers" onClick={handleNavigation}>{t('careers')}</Link>  
          </li>
          <li>
            <Link to="/contact" onClick={handleNavigation}>{t('contact')}</Link>  
          </li>
          <li className="dropdown" onClick={toggleDropdown}>
          {currentLanguage.label}
          {isDropdownOpen && (
        <ul className="dropdownList">
          {availableLanguages.map((language) => (
            <li key={language.code}
              onClick={() => changeLanguage(language.code)}>
              {language.label}
            </li>
          ))}
        </ul>
      )}
          </li>
        </ul>
      <button className="menu-btn" onClick={showList}>
        {isListOpen?<FaTimes/>:<FaBars/>}
      </button>
      </nav>
    </header>
  );
};

export default Header;

