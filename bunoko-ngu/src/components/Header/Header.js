import "./Header.css";
import { useTranslation } from "react-i18next";
import React, { useState } from 'react';


function Header() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const availableLanguages = [
    { code: 'cro', label: 'HR' },
    { code: 'en', label: 'ENG' },
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
          <li>{t('home')}</li>
          <li>{t('about')}</li>
          <li>{t('services')}</li>
          <li>{t('contacts')}</li>
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

