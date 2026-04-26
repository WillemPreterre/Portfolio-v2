import React from "react";
import "./Service.scss";
import { SERVICES, SOFT_SKILLS } from "../../../data/service.data";

function Service() {
  return (
    <div className="service">
      {/* Intro */}
      <div className="service-intro">
        <p className="service-title">Développeur full-stack</p>
        <p className="service-sub">
          Voici un aperçu de ce que je peux apporter à votre projet, côté
          technique comme côté humain.
        </p>
      </div>
      {/* Cartes de compétences */}
      <div className="service-grid">
        {SERVICES.map(
          ({ accent, iconBg, iconStroke, iconPath, title, desc, tags }) => (
            <div key={title} className="scard">
              <div className="scard-accent" style={{ background: accent }} />
              <div className="scard-icon" style={{ background: iconBg }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={iconStroke}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="18"
                  height="18"
                >
                  {iconPath}
                </svg>
              </div>
              <p className="scard-title">{title}</p>
              <p className="scard-desc">{desc}</p>
              <div className="scard-tags">
                {tags.map((t) => (
                  <span key={t} className="stag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ),
        )}
      </div>
      <p
        className="service-label"
        style={{ marginTop: "28px", marginBottom: "12px" }}
      >
        Comment je travaille
      </p>
      <div className="service-grid">
        {SOFT_SKILLS.map(
          ({ accent, iconBg, iconStroke, iconPath, title, desc, tags }) => (
            <div key={title} className="scard">
              <div className="scard-accent" style={{ background: accent }} />
              <div className="scard-icon" style={{ background: iconBg }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={iconStroke}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="18"
                  height="18"
                >
                  {iconPath}
                </svg>
              </div>
              <p className="scard-title">{title}</p>
              <p className="scard-desc">{desc}</p>
              <div className="scard-tags">
                {tags.map((t) => (
                  <span key={t} className="stag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default Service;
