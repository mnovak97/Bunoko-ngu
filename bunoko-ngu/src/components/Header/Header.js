import "./Header.scss";
import { useTranslation } from "react-i18next";
import React, { useState } from 'react';
import { Link } from 'react-router-dom'  


function Header() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setIsDropdownOpen(false);
  };
  

  return (
    <header>
      <nav>
        <h1><Link to="/" >bunoko n.g.u.</Link></h1>
        <ul>
          <li>
            <Link to="/about">{t('about')}</Link>  
          </li>
          <li>
            <Link to="/services">{t('services')}</Link>  
          </li>
          <li>
            <Link to="/careers" >{t('careers')}</Link>  
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

