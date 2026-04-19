import React from "react";
import "./Service.scss";

const STATS = [
  { num: "3", label: "ans d'expérience" },
  { num: "4",  label: "projets réalisés"   },
  { num: "1",  label: "mastère obtenu" },
];

const SERVICES = [
  {
    accent: "#378ADD",
    iconBg: "#E6F1FB",
    iconStroke: "#185FA5",
    iconPath: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
    title: "Développement frontend",
    desc:  "Interfaces modernes et réactives avec React et Next.js. Attention portée à l'UX, l'accessibilité et la performance.",
    tags:  ["React", "Next.js", "Angular", "Sass"],
  },
  {
    accent: "#1D9E75",
    iconBg: "#E1F5EE",
    iconStroke: "#0F6E56",
    iconPath: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
    title: "Architecture backend",
    desc:  "APIs REST robustes avec Node.js, NestJS et Laravel. Conception de la base de données à l'endpoint, en passant par la logique métier.",
    tags:  ["Node.js", "NestJS", "Laravel", "PHP"],
  },
  {
    accent: "#7F77DD",
    iconBg: "#EEEDFE",
    iconStroke: "#534AB7",
    iconPath: (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </>
    ),
    title: "Bases de données",
    desc:  "Modélisation et requêtage en SQL (PostgreSQL) et NoSQL (MongoDB). Conception adaptée aux contraintes métier et à la scalabilité.",
    tags:  ["PostgreSQL", "MongoDB", "SQL"],
  },
  {
    accent: "#D85A30",
    iconBg: "#FAECE7",
    iconStroke: "#993C1D",
    iconPath: (
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    ),
    title: "Cybersécurité applicative",
    desc:  "Sensibilité aux bonnes pratiques de sécurité acquise en alternance sur une solution cybersécurité. Authentification, gestion des accès, sécurisation des APIs.",
    tags:  ["Auth", "OWASP", "NestJS Guards"],
  },
  {
    accent: "#BA7517",
    iconBg: "#FAEEDA",
    iconStroke: "#854F0B",
    iconPath: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
      </>
    ),
    title: "DevOps & déploiement",
    desc:  "Mise en conteneur avec Docker, versioning Git/GitLab et pipelines CI/CD. Du développement local au serveur de production.",
    tags:  ["Docker", "GitLab CI", "Git"],
  },
  {
    accent: "#D4537E",
    iconBg: "#FBEAF0",
    iconStroke: "#993556",
    iconPath: (
      <>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </>
    ),
    title: "Analyse & conduite de projet",
    desc:  "Capacité à aller au contact des métiers pour comprendre les besoins, rédiger des specs et piloter le développement de A à Z.",
    tags:  ["Recueil besoins", "Specs", "Agile"],
  },
];

function Service() {
  return (
    <div className="service">

      {/* Intro */}
      <div className="service-intro">
        <p className="service-title">
          Développeur full stack
        </p>
        <p className="service-sub">
          3 ans d'expérience dans le développement web dans des
          contextes variés : industrie, cybersécurité, agro-alimentaire, Data &
          IA. Je prends en charge un projet de bout en bout, de la conception à
          la mise en production.
        </p>
      </div>

      {/* Chiffres clés */}
      <div className="service-stats">
        {STATS.map(({ num, label }) => (
          <div key={label} className="stat">
            <span className="stat-num">{num}</span>
            <span className="stat-lbl">{label}</span>
          </div>
        ))}
      </div>

      {/* Cartes de compétences */}
      <div className="service-grid">
        {SERVICES.map(({ accent, iconBg, iconStroke, iconPath, title, desc, tags }) => (
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
                <span key={t} className="stag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
