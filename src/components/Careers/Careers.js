import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Career.scss";

const Careers = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <div className="careers">
      <div className="careers__container">
        <div className="careers__content">
          <h1>{t("careerTitle")}</h1>
          <p>{t("careerParagraph")}</p>
          <button className="careers__btn" onClick={handleContact}>
            {t("apply")}
          </button>
        </div>
        <div className="careers__image">
          <img src="img/student-mechanic.jpg" alt="Students" />
        </div>
      </div>
    </div>
  );
};

export default Careers;
