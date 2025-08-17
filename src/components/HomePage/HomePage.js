import { useTranslation } from 'react-i18next';
import './HomePage.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function HomePage() {
  const [wantedService, setWantedService] = useState("");
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navigateServices = (service) => {
    setWantedService(service);
    navigate('/services', { state: { wantedService: service } });
  };

  return (
    <div className="home">
      {/* Banner */}
      <div className="home__banner">
        <img src="img/car-repair-shop.jpg" alt="Car Repair Shop" />
        <div className="home__overlay">
          <h1>{t('ourServices')}</h1>
          <div className="home__banner-buttons">
            <button onClick={() => navigateServices('AC')}>{t('airCondition')}</button>
            <button onClick={() => navigateServices('WINDING')}>{t('winding')}</button>
            <button onClick={() => navigateServices('TOOLS')}>{t('tools')}</button>
            <button onClick={() => navigateServices('TOOLSALE')}>{t('toolsSale')}</button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="home__services">
        <div className="card-grid">
          <button className="card" onClick={() => navigateServices('AC')}>
            <img src="http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_1.png" alt="AC" />
            <h3>{t('airCondition')}</h3>
          </button>
          <button className="card" onClick={() => navigateServices('WINDING')}>
            <img src="http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_2.png" alt="Winding" />
            <h3>{t('winding')}</h3>
          </button>
          <button className="card" onClick={() => navigateServices('TOOLS')}>
            <img src="http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_5.png" alt="Tools" />
            <h3>{t('tools')}</h3>
          </button>
          <button className="card" onClick={() => navigateServices('TOOLSALE')}>
            <img src="http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_3.png" alt="Tool Sale" />
            <h3>{t('toolsSale')}</h3>
          </button>
        </div>
      </section>

      {/* Careers Section */}
      <section className="home__careers">
        <h2>{t('careerTitle')}</h2>
        <p>
          {t('careerParagraph')} <br />
          {t('contactUs')}!
        </p>
        <button onClick={() => navigate('/careers')} className="btn-primary">
          {t('apply')}!
        </button>
      </section>

      {/* Contact Section */}
      <section className="home__contact">
        <h2>{t('contactUs')}!</h2>
        <div className="contact-grid">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11117.373663981441!2d16.0091739!3d45.8444259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc472b04d300cd798!2sBUNOKO%20N.G.U%20D.O.O.!5e0!3m2!1shr!2shr!4v1654090549910!5m2!1shr!2shr"
            allowFullScreen=""
            loading="lazy"
            title="map"
          ></iframe>

          <div className="contact-info">
            <h3>BUNOKO N.G.U. d.o.o.</h3>
            <p>
              Gornji Bukovac 96, 10000, Zagreb <br />
              {t('phone')}: 01 2340 884 <br />
              {t('mobile')}: 091 2005 862 <br />
              Fax: 01 2340 884 <br />
              {t('workHours')}: <br />
              {t('week')}: 9-17 <br />
              {t('saturday')}: 9-13 <br />
              <a href="mailto:bunokongu@gmail.com">bunokongu@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
