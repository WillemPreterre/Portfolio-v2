/**
 * projects.data.js
 * Pour ajouter un projet : copie un objet, remplis les champs.
 * Projects.jsx et ProjectDetail.jsx se mettent à jour automatiquement.
 */

export const PROJECTS = [
  {
    slug:        "metarom",
    title:       "Application de formation — Métarom",
    description: "React · Laravel · Vidéo",
    tagline:     "Plateforme interne de formation avec vidéo pour une entreprise d'arômes",
    image:       "/images/metarom.jpg",
    year:        "2022",
    status:      "livré",   // "livré" | "en cours" | "concept"
    accent:      "#378ADD",
    links: { live: null, github: null },
    context: {
      type:     "Alternance",
      company:  "Métarom",
      location: "Normandie",
      duration: "1 an",
    },
    fullDescription: `Développée en alternance chez Métarom, cette application permet aux employés
de suivre des parcours de formation internes, enrichis de vidéos tournées et montées
spécifiquement pour l'outil. J'ai conduit les interviews métier auprès de chaque
service pour définir les besoins, conçu l'architecture et développé l'intégralité
de l'application en solo.`,
    highlights: [
      "Recueil des besoins auprès de 5 services différents",
      "Développement full stack solo sur 1 an",
      "Intégration vidéo avec player custom",
      "Gestion des droits par rôle (admin / employé)",
    ],
    stack:       ["React", "Laravel", "MySQL", "Docker"],
    screenshots: [],
  },

  {
    slug:        "v6protect",
    title:       "Application cybersécurité — V6Protect",
    description: "React · NestJS · Node.js",
    tagline:     "Application multicouches sur le thème de la cybersécurité",
    image:       "/images/v6protect.jpg",
    year:        "2023–2025",
    status:      "livré",
    accent:      "#7F77DD",
    links: { live: "https://v6protect.com", github: null },
    context: {
      type:     "Alternance",
      company:  "V6Protect",
      location: "France",
      duration: "2 ans",
    },
    fullDescription: `Application développée sur 2 ans en alternance, couvrant des fonctionnalités
liées à la cybersécurité : gestion des accès, monitoring, tableaux de bord.
Architecture multicouches avec une API NestJS et un frontend React, déployée
avec Docker et une pipeline GitLab CI/CD.`,
    highlights: [
      "Architecture REST multicouches avec NestJS",
      "Authentification JWT + gestion des rôles",
      "Dashboard temps réel",
      "CI/CD GitLab + déploiement Docker",
    ],
    stack:       ["React", "NestJS", "Node.js", "PostgreSQL", "Docker", "GitLab CI"],
    screenshots: [],
  },

  {
    slug:        "fabrique-biscuits",
    title:       "Gestion interne — La Fabrique à Biscuits",
    description: "Symfony · PHP · MySQL",
    tagline:     "Application de gestion des ressources pour une PME agro-alimentaire",
    image:       "/images/fabrique.jpg",
    year:        "2021",
    status:      "livré",
    accent:      "#1D9E75",
    links: { live: null, github: null },
    context: {
      type:     "Stage",
      company:  "La Fabrique à Biscuits",
      location: "Le Havre",
      duration: "2 mois",
    },
    fullDescription: `Stage de 2 mois durant lequel j'ai conçu et développé une application
de gestion des ressources humaines internes avec Symfony. Première expérience
de livraison d'un produit complet pour un client réel.`,
    highlights: [
      "Conception UML et modélisation BDD",
      "Développement MVC avec Symfony",
      "Interface d'administration complète",
    ],
    stack:       ["Symfony", "PHP", "MySQL", "Twig", "Bootstrap"],
    screenshots: [],
  },

  {
    slug:        "matariki",
    title:       "Plateforme digitale — MATARIKI",
    description: "React · Python · Data & IA",
    tagline:     "Plateforme digitale orientée Data & IA",
    image:       "/images/matariki.jpg",
    year:        "2025",
    status:      "en cours",
    logo:        "/images/matariki-logo.png",
    accent:      "#D85A30",
    links: { live: "https://matariki.fr", github: null },
    context: {
      type:     "CDD",
      company:  "MATARIKI",
      location: "Paris",
      duration: "3 mois",
    },
    fullDescription: `CDD de 3 mois à Paris sur une plateforme digitale mêlant React côté frontend
et Python côté data/IA. Contribution aux projets internes et au développement
des activités dans les domaines de la Data et de l'Intelligence Artificielle.`,
    highlights: [
      "Développement de composants React pour la plateforme",
      "Intégration de services Python / data pipelines",
      "Travail en équipe sur des projets IA",
    ],
    stack:       ["React", "Python"],
    screenshots: [],
  },
];
