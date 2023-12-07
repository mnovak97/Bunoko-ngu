import React from 'react';
import { useTranslation } from "react-i18next";
import "./Career.css";

const Careers = () => {
    const { t } = useTranslation();
  return (
    <div className="mainDiv">
      <div className="card_image card">
        <div className="card_content">
          <h2>{t('careerTitle')}</h2>
          <p>
            {t('careerParagraph')}
          </p>
        </div>
        <img src="https://picsum.photos/700/450" alt='' />
      </div>
    </div>
  )
}

export default Careers;