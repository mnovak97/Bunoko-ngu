import "./Header.css";
import { useTranslation } from "react-i18next";



function Header() {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
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
        <div className="dropdown">
          <select onChange={changeLanguage}>
            <option value="cro">Hrvatski</option>
            <option value="en">English</option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Header;

