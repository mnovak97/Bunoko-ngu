import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import "./Services.scss";

const Services = () => {
  const [activeService, setActiveService] = useState("");
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const { wantedService } = location.state || {};
    if (wantedService) setActiveService(wantedService);
  }, [location.state]);

  const handleServiceClick = (serviceType) => {
    setActiveService((prev) => (prev === serviceType ? "" : serviceType));
  };

  const services = [
    {
      code: "AC",
      title: t("airCondition"),
      icon: "http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_1.png",
      img: "img/ac-not-working.jpg",
      shortDesc: "Brza i pouzdana usluga klimatizacije.",
      content: [t("acImportance"), t("acService"), t("acServiceDetail")],
    },
    {
      code: "WINDING",
      title: t("winding"),
      icon: "http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_2.png",
      img: "img/rewinding-electromotor.jpg",
      shortDesc: "Profesionalno navijanje elektromotora.",
      content: [t("windingDetail"), t("windingDetail2"), t("windingDetail3")],
    },
    {
      code: "TOOLS",
      title: t("tools"),
      icon: "http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_5.png",
      img: "img/servicing-tools.jpg",
      shortDesc: "Popravak i održavanje alata.",
      content: [t("toolRepairDetail"), t("toolRepairDetail2")],
    },
    {
      code: "TOOLSALE",
      title: t("toolsSale"),
      icon: "http://bunoko-ngu.hr/wp-content/uploads/2015/04/home_factory_icon_3.png",
      img: "img/selling-auto-parts.jpg",
      shortDesc: "Prodaja kvalitetnih alata i rezervnih dijelova.",
      content: [t("toolSaleDetail")],
    },
  ];

  return (
    <div className="services-container">
      {services.map((service) => {
        const isActive = activeService === service.code;
        return (
          <div
            key={service.code}
            className={`service-card ${isActive ? "active" : ""}`}
            onClick={() => handleServiceClick(service.code)}
          >
            <div className="service-image">
              <img src={service.img} alt={service.title} />
              {!isActive && (
                <div className="overlay">
                  <img className="icon" src={service.icon} alt="icon" />
                  <h3>{service.title}</h3>
                  <p>{service.shortDesc}</p>
                </div>
              )}
            </div>
            {isActive && (
              <div className="service-content">
                <h3>{service.title}</h3>
                <div className="content-text">
                  {service.content.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Services;
