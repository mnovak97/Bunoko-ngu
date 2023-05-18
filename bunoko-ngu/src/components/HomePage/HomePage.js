import './HomePage.scss'
import { useTranslation } from "react-i18next";
import React, { useState } from 'react';

function HomePage() {
    return (
        <div className='mainDiv'>
           <div className='card card-image'> 
              <div className='card-content'>
                <h2>Servis auto klime, svih vrsta električnog alata i strojeva, rashladne tehnike i elektroinstalacija</h2>
                <p>Tradicija duža od dva desetljeća uspješnog rada jamstvo su naše kvalitete u što su se već uvjerili naši brojni klijenti. Nazovite 091/ 20 05 862</p>
                <button>Saznaj više</button>
              </div>
              <img src="https://picsum.photos/700/450" />
           </div>
           <h2>Naše usluge</h2>
           <div className='card card-grid'>
              <div className='card-services'>
                <img class="scale-with-grid" src="http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_1.png" alt="home_factory_icon_2" width="116" height="112" />
                <h3>Popravak i punjenje auto-klima</h3>
              </div>
              <div className='card-services'>
                <img class="scale-with-grid" src="http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_2.png" alt="home_factory_icon_2" width="116" height="112" />
                <h3>Prematanje elektromotora</h3> 
              </div>
              <div className='card-services'>
                <img class="scale-with-grid" src="http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_3.png" alt="home_factory_icon_2" width="116" height="112" />
                <h3>Prodaja alata i pribora</h3> 
              </div>
              <div className='card-services'>
                <img class="scale-with-grid" src="http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_5.png" alt="home_factory_icon_2" width="116" height="112" />
                <h3>Servis alata</h3> 
              </div>
           </div>
        </div>
    );
};

export default HomePage;