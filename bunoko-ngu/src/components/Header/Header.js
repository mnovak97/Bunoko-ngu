import "./Header.css";
import React, { useState } from 'react';
import {localization} from "../../localization/localization"; 
function Header() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header>
      <nav>
        <h1>bunoko n.g.u.</h1>
        <ul>
          <li>{open ? <p>{localization.croatian.header.home}</p> : <p>{localization.english.header.home}</p>}</li>
          {/* <li>{open ? {localization.croatian.header.about} : {localization.english.header.about}}</li> */}
          <li>open ? {localization.croatian.header.services} : {localization.english.header.services}</li>
          <li>open ? {localization.croatian.header.contact} : {localization.english.header.contact}</li>
        </ul>
        <div  onClick={handleOpen} className="dropdown">
        {open ? <div>HR</div> : <div className="dropdownContainer">HR<div className="dropdownContent"><p>HR</p><p>ENG</p></div></div>}
        </div>
      </nav>
    </header>
  );
};

export default Header;

