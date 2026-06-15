export const SERVICES = [
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
    desc: "Interfaces modernes et réactives avec React et Next.js. Attention portée à l'UX, l'accessibilité et la performance.",
    tags: ["React", "Next.js", "Angular", "Sass"],
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
    desc: "APIs REST robustes avec Node.js, NestJS et Laravel. Conception de la base de données à l'endpoint, en passant par la logique métier.",
    tags: ["Node.js", "NestJS", "Laravel", "PHP"],
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
    desc: "Modélisation et requêtage en SQL (PostgreSQL) et NoSQL (MongoDB). Conception adaptée aux contraintes métier et à la scalabilité.",
    tags: ["PostgreSQL", "MongoDB", "SQL"],
  },
  {
    accent: "#D85A30",
    iconBg: "#FAECE7",
    iconStroke: "#993C1D",
    iconPath: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    title: "Cybersécurité applicative",
    desc: "Sensibilité aux bonnes pratiques de sécurité acquise en alternance sur une solution cybersécurité. Authentification, gestion des accès, sécurisation des APIs.",
    tags: ["Auth", "OWASP", "NestJS Guards"],
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
    desc: "Mise en conteneur avec Docker, versioning Git/GitLab et pipelines CI/CD. Du développement local au serveur de production.",
    tags: ["Docker", "GitLab CI", "Git"],
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
    desc: "Capacité à aller au contact des métiers pour comprendre les besoins, rédiger des specs et piloter le développement de A à Z.",
    tags: ["Recueil besoins", "Specs", "Agile"],
  },
];

export const SOFT_SKILLS = [
  {
    accent: "#1D9E75",
    iconBg: "#E1F5EE",
    iconStroke: "#0F6E56",
    iconPath: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    title: "Collaboration",
    desc: "J'apprécie le travail en équipe dans le cadre de projets collaboratifs. j'aime le partage d'expérience et apprendre avec les autres.",
    tags: ["Esprit d'équipe", "Entraide"],
  },
  {
    accent: "#7F77DD",
    iconBg: "#EEEDFE",
    iconStroke: "#534AB7",
    iconPath: (
      <>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </>
    ),
    title: "Communication",
    desc: "J'aime comprendre le besoin derrière le code — échanger avec les métiers pour construire quelque chose qui a vraiment du sens.",
    tags: ["Vulgarisation", "Écoute", "Recueil besoins"],
  },
  {
    accent: "#BA7517",
    iconBg: "#FAEEDA",
    iconStroke: "#854F0B",
    iconPath: (
      <>
        <polyline points="23 4 23 1 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </>
    ),
    title: "Adaptabilité",
    desc: "Passé de Laravel à NestJS selon les contextes, une nouvelle techno ne m'a jamais bloqué.",
    tags: ["Polyvalence", "Curiosité", "Apprentissage"],
  },
];
