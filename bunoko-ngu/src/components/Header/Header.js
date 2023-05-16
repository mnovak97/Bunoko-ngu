import "./Header.scss";
import { useTranslation } from "react-i18next";
import React, { useState } from 'react';
import { Link } from 'react-router-dom'  


function Header() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const availableLanguages = [
    { code: 'cro', label: 'HR' },
    { code: 'en-US', label: 'ENG' },
  ];

  const currentLanguage = availableLanguages.find(
    (language) => language.code === i18n.language
  );

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setIsDropdownOpen(false);
  };
  

  return (
    <header>
      <nav>
        <h1>bunoko n.g.u.</h1>
        <ul>
          <li>
            <Link to="/about" >{t('home')}</Link>  
          </li>
          <li>
            <Link to="/about">{t('about')}</Link>  
          </li>
          <li>
            <Link to="/services">{t('services')}</Link>  
          </li>
          <li>
            <Link to="/contact">{t('contact')}</Link>  
          </li>
        </ul>
        <div className="dropdown" onClick={toggleDropdown}>
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
        </div>
      </nav>
    </header>
  );
};

export default Header;

