import { useTranslation } from 'react-i18next';
import styles from './AboutUs.module.css';
import {useNavigate} from 'react-router-dom';

function AboutUs() {
const { t } = useTranslation();
const navigate = useNavigate();

const navigateContact = () => {
  navigate('/contact');
};

  return (
    <div className="mainDiv">
      <div className={`${styles.card_image} ${styles.card}`}>
        <div className={styles.card_content}>
          <h2>{t('about')}</h2>
          <p>
            {t('aboutUsParagraphOne')}
            <br />
            <br />
            {t('aboutUsParagraphTwo')}
          </p>
          <button onClick={navigateContact}>{t('join')}</button>
        </div>
        <img src="https://picsum.photos/700/450" alt='' />
      </div>
    </div>
  );
}

export default AboutUs;
