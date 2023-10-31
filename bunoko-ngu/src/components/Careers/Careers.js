import React from 'react';
import { useTranslation } from "react-i18next";
import "./Career.scss";

const Careers = () => {
    const { t } = useTranslation();
  return (
    <div className="mainDiv">
      <div className="card_image card">
        <div className="card_content">
          <h2>{t('careers')}</h2>
          <p>
            {t('careerTitle')}
            <br />
            <br />
            {t('careerParagraph')}
          </p>
        </div>
        <img src="https://picsum.photos/700/450" alt='' />
      </div>
    </div>
  )
}

export default Careers;