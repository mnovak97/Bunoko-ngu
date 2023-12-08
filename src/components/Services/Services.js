import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [activeService, setActiveService] = useState("");

  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const { wantedService } = location.state || {};
    setDisplayedText(wantedService);
    setActiveService(wantedService);
  }, [location.state]);

  const handleServiceClick = (serviceType) => {
    setDisplayedText(serviceType);
    setActiveService(serviceType);
  };

  return (
    <>
      <div className='display-card'>
        <div className='service-lineup'>
          <button
            className={`service-card ${activeService === 'AC' ? 'active' : ''}`}
            onClick={() => handleServiceClick('AC')}
          >
            <img className="scale-with-grid" src="http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_1.png" alt="home_factory_icon_2" />
            <h3>{t('airCondition')}</h3>
          </button>
          <button
            className={`service-card ${activeService === 'WINDING' ? 'active' : ''}`}
            onClick={() => handleServiceClick('WINDING')}
          >
            <img className="scale-with-grid" src="http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_2.png" alt="home_factory_icon_2" />
            <h3>{t('winding')}</h3>
          </button>
          <button
            className={`service-card ${activeService === 'TOOLS' ? 'active' : ''}`}
            onClick={() => handleServiceClick('TOOLS')}
          >
            <img className="scale-with-grid" src="http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_5.png" alt="home_factory_icon_2" />
            <h3>{t('tools')}</h3>
          </button>
          <button
            className={`service-card ${activeService === 'TOOLSALE' ? 'active' : ''}`}
            onClick={() => handleServiceClick('TOOLSALE')}
          >
            <img className="scale-with-grid" src="http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_3.png" alt="home_factory_icon_2" />
            <h3>{t('toolsSale')}</h3>
          </button>
        </div>
        <article className="displayed-description">
          {displayedText === "AC" ? (
            <div>
              <p>{t('acImportance')}</p>
              <br/>
              <p>{t('acService')}</p>
              <br/>
              <p>{t('acServiceDetail')}</p>
            </div>
          ) : displayedText === "WINDING" ? (
            <div>
              <p>{t('windingDetail')}</p>
              <br/>
              <p>{t('windingDetail2')}</p>
              <br/>
              <p>{t('windingDetail3')}</p>
            </div>
          ) : displayedText === "TOOLSALE" ? (
            <div>
              <p>{t('toolSaleDetail')}</p>
            </div>
          ) : displayedText === "TOOLS" ? (
            <div>
              <p>{t('toolRepairDetail')}</p>
              <br/>
              <p>{t('toolRepairDetail2')}</p>
            </div>
          ) : null}
        </article>
      </div>
    </>
  );
};

export default Services;
