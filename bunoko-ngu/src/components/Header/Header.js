import "./Header.css";
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";



function Header() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header>
      <nav>
        <h1>bunoko n.g.u.</h1>
        <ul>
          <li>{t('home')}</li>
          <li>{t('services')}</li>
          <li>{t('contacts')}</li>
        </ul>
        <div  onClick={handleOpen} className="dropdown">
        {open ? <div>HR</div> : <div className="dropdownContainer">HR<div className="dropdownContent"><p>HR</p><p>ENG</p></div></div>}
        </div>
      </nav>
    </header>
  );
};

export default Header;

