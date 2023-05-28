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
                <h3>Prematanje elektromotora i rotora</h3> 
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
           <div className='card card-grid'>
              <div className='card-services'>
                <img class="scale-with-grid" src="http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_3.png" alt="home_factory_icon_2" width="116" height="112" />
                <h3>Popravak svih vrsta električnog ručnog alata</h3>
              </div>
              <div className='card-services'>
                <img class="scale-with-grid" src="http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_1.png" alt="home_factory_icon_2" width="116" height="112" />
                <h3>Popravak građevinskih dizalica</h3> 
              </div>
              <div className='card-services'>
                <img class="scale-with-grid" src="http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_6.png" alt="home_factory_icon_2" width="116" height="112" />
                <h3>Popravak vibratora betonatora betona</h3> 
              </div>
             
              
           </div>
              <h2>Tražiš karijeru ili te zanima praksa</h2>
           <div className='container_middle'>
              <p>
                Zanima te karijera u ovom području ili pak trebaš odraditi praksu? 
                Motiviran si i spreman učiti?
                U bunoko-ngu imaš priliku raditi uz mentora sa preko 20 godina iskustva!
                <br/>
                 Javi nam se!
              </p>
              <button>Prijavi se!</button>
           </div>
           <h2>Kontaktiraj nas!</h2>
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
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          <div>
            <h4>BUNOKO N.G.U. d.o.o.</h4>
            <p>

            Gornji Bukovac 96, 10000,Zagreb
            <br />
            Telefon: 01 2340 884
            <br />
            Mobitel: 091 2005 862
            <br />
            Fax: 01 2340 884
            <br />
            RADNO VRIJEME:
            <br />
            pon-pet: 9-17
            <br />
            sub: 9-13
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