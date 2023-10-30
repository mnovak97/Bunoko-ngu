import { useTranslation } from 'react-i18next';
import './HomePage.scss'
import {useNavigate} from 'react-router-dom';


function HomePage() {

  const { t } = useTranslation();
  const navigate = useNavigate();

  const navigateAboutUs = () => {
    navigate('/about');
  };

  const navigateCareers = () => {
    navigate('/careers')
  }

    return (
        <div className='mainDiv'>
           <div className='card card-image'> 
              <div className='card-content'>
                <h2>{t('service')}</h2>
                <p>{t('tradition')}</p>
                <button onClick={navigateAboutUs}>{t('more')}</button>
              </div>
              <img src="https://picsum.photos/700/450" alt='' />
           </div>
           <h2>{t('ourServices')}</h2>
           <div className='card card-grid'>
              <div className='card-services'>
                <img className="scale-with-grid" src="http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_1.png" alt="home_factory_icon_2" width="116" height="112" />
                <h3>{t('airCondition')}</h3>
              </div>
              <div className='card-services'>
                <img className="scale-with-grid" src="http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_2.png" alt="home_factory_icon_2" width="116" height="112" />
                <h3>{t('winding')}</h3> 
              </div>
              <div className='card-services'>
                <img className="scale-with-grid" src="http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_3.png" alt="home_factory_icon_2" width="116" height="112" />
                <h3>{t('toolsSale')}</h3> 
              </div>
              <div className='card-services'>
                <img className="scale-with-grid" src="http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_5.png" alt="home_factory_icon_2" width="116" height="112" />
                <h3>{t('tools')}</h3> 
              </div>
           </div>
           <div className='card card-grid'>
              <div className='card-services'>
                <img className="scale-with-grid" src="http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_3.png" alt="home_factory_icon_2" width="116" height="112" />
                <h3>{t('electricTools')}</h3>
              </div>
              <div className='card-services'>
                <img className="scale-with-grid" src="http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_1.png" alt="home_factory_icon_2" width="116" height="112" />
                <h3>{t('concreteCranes')}</h3> 
              </div>
              <div className='card-services'>
                <img className="scale-with-grid" src="http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_6.png" alt="home_factory_icon_2" width="116" height="112" />
                <h3>{t('concreteMixer')}</h3> 
              </div>
             
              
           </div>
              <h2>{t('careerTitle')}</h2>
           <div className='container_middle'>
              <p>
               {t('careerParagraph')}
                <br/>
                 {t('contactUs')}!
              </p>
              <button onClick={navigateCareers}>{t('apply')}!</button>
           </div>
           <h2>{t('contactUs')}!</h2>
           <div>
           <div className='container-contact'>
            <h1>Bukovac gornji 96, <br/> 10000, Zagreb</h1>
            <iframe
              className="map-container"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11117.373663981441!2d16.0091739!3d45.8444259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc472b04d300cd798!2sBUNOKO%20N.G.U%20D.O.O.!5e0!3m2!1shr!2shr!4v1654090549910!5m2!1shr!2shr"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              title='map'
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          <div>
            <h4>BUNOKO N.G.U. d.o.o.</h4>
            <p>

            Gornji Bukovac 96, 10000,Zagreb
            <br />
            {t('phone')}: 01 2340 884
            <br />
            {t('mobile')}: 091 2005 862
            <br />
            Fax: 01 2340 884
            <br />
            {t('workHours')}:
            <br />
            {t('week')}: 9-17
            <br />
            {t('saturday')}: 9-13
            <br />
            <a href="mailto:bunokongu@gmail.com">bunokongu@gmail.com</a>
            </p>
          </div>
          
        </div>
           </div>
        </div>
    );
};

export default HomePage;