import React from 'react'
import { useTranslation } from "react-i18next";

const Services = () => {
    const { t }=useTranslation();
  return (
    <div className="mainDiv">
      <div className="card_image card">
        <div className="card_content">
          <h2>{t('ourServices')}</h2>
          <p>
            {t('service')}
            <br/>
            <br/>
            {t('concreteMixer')}
            <br />
            {t('concreteCranes')}
            <br />
            {t('electricTools')}
            <br />
            {t('tools')}
            <br />
            {t('toolsSale')}
            <br />
            {t('winding')}
            <br />
            {t('airCondition')}
          </p>
          <button>{t('more')}</button>
        </div>
        <img src="https://picsum.photos/700/450" alt='' />
      </div>
    </div>
  )
}

export default Services