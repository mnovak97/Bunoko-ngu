import { useTranslation } from 'react-i18next';
import './AboutUs.scss';
import { useNavigate } from 'react-router-dom';

function AboutUs() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navigateContact = () => {
    navigate('/contact');
  };

  return (
    <div className="about">
      <section className="about__hero">
        <div className="about__overlay">
          <h1>{t('about')}</h1>
        </div>
        <img
          className="about__hero-img"
          src="img/bukovac.png"
          alt="About Us"
        />
      </section>

      <section className="about__content">
        <div className="about__text">
          <h2>{t('about')}</h2>
          <p>
            {t('aboutUsParagraphOne')}
            <br />
            <br />
            {t('aboutUsParagraphTwo')}
          </p>
          <button className="btn-primary" onClick={navigateContact}>
            {t('join')}
          </button>
        </div>
        <div className="about__image">
          <img src="img/vladek.png" alt="Team" />
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
