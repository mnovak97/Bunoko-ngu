import "./Contact.css";
import { useTranslation } from "react-i18next";
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const { t } = useTranslation();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f7v7nzb', 'template_xltu7fi', form.current, 'u7Co64vtw9bfNKe8r')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className="container">
      <form ref={form} onSubmit={sendEmail}>
        <h2>{t("write")}</h2>
        <input
          className="formInput"
          placeholder={t("name")}
          type="text"
          name="name"
          required
        />
        <input
          className="formInput"
          placeholder={t("email")}
          type="email"
          name="email"
          required
        />
        <input
          className="formInput"
          placeholder={t("subject")}
          type="text"
          name="subject"
          required
        />
        <textarea
          className="formInput"
          placeholder={t("message")}
          name="message"
          required
        />
        <button className="buttonSubmit" type="submit">
          {t("send")}
        </button>
      </form>
      <div>
        <h2>{t("contact")}</h2>
        <div className="info">
          <div>
            <h4>BUNOKO N.G.U. d.o.o.</h4>
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
          </div>
          <iframe
            className="map-container"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11117.373663981441!2d16.0091739!3d45.8444259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc472b04d300cd798!2sBUNOKO%20N.G.U%20D.O.O.!5e0!3m2!1shr!2shr!4v1654090549910!5m2!1shr!2shr"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            title="map"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
