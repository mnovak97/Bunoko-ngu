import styles from './AboutUs.module.css';
import { useTranslation } from "react-i18next";
import React, { useState } from "react";

function AboutUs() {
  return (
    <div className="mainDiv">
      <div className={`${styles.card_image} ${styles.card}`}>
        <div className={styles.card_content}>
          <h2>O nama</h2>
          <p>
            Tvrtka ‘BUNOKO N.G.U.’ nasljednik je obrta osnovanog 1995. godine
            koji je 2007. registriran kao d.o.o. za poslovanje nekretninama,
            graditeljstvo i usluge.
            <br />
            <br />
            Nastavljajući obrtničku tradiciju tvrtka se nastavila razvijati kao
            specijalist za popravak i servisiranje električnih alata i strojeva,
            rashladne tehnike i elektroinstalacija, a o čemu brine naša ekipa
            vrsnih majstora elektromehaničara.
          </p>
          <button>Pridruži se</button>
        </div>
        <img src="https://picsum.photos/700/450" />
      </div>
    </div>
  );
}

export default AboutUs;
