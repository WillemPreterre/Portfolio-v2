/**
 * projects.data.js
 * Pour ajouter un projet : copie un objet, remplis les champs.
 * Projects.jsx et ProjectDetail.jsx se mettent à jour automatiquement.
 */

export const PROJECTS = [
  {
    slug: "metarom",
    title: "Métarom — Plateforme de formation vidéo interne",
    description: "React · Laravel · SQL Server · Vidéo",
    tagline: "Plateforme e-learning sur-mesure pour l'industrie des arômes",
    image: "/logo-metarom.png",
    imageDesc:
      "Plateforme de formation Métarom - Projet développé en alternance",
    year: "2022–2023",
    status: "livré",
    logo: "/logo-metarom.png",
    accent: "#378ADD",
    links: { live: null, github: null },
    context: {
      type: "Alternance",
      company: "Métarom",
      location: "Amiens",
      duration: "1 an",
    },
    fullDescription: `Conception et développement en autonomie complète d'une plateforme e-learning 
interne pour Métarom (industrie des arômes) lors d'une alternance d'un an. 
Responsable de l'ensemble du cycle projet : conception de l'architecture technique, développement full-stack 
React/Laravel, intégration de contenus vidéo pédagogiques tournés et montés sur-mesure,
 et formation des utilisateurs. Plateforme permettant aux employés 
de suivre des parcours de formation personnalisés avec système de gestion des droits 
et suivi de progression.`,
    highlights: [
      "Gestion du projet en autonomie",
      "Conduite d'interviews métier transverses",
      "Architecture et développement full-stack solo : frontend React + API Laravel + SQL Server",
      "Intégration de contenus vidéo pédagogiques (tournage, montage, hébergement)",
      "Système de gestion des rôles et permissions (admin, formateur, employé)",
      "Suivi de progression des parcours de formation et reporting",
    ],
    stack: ["React", "Laravel", "PHP", "SQL Server"],
    screenshots: [],
  },
  {
    slug: "v6protect",
    title: "v6Protect — Plateforme SaaS de cybersécurité",
    description: "React · NestJS · PostgreSQL · Docker",
    tagline:
      "Contribution au développement d'une plateforme de sécurisation web et applications",
    image: "/dashboard-v6.png",
    imageDesc: "Dashboard de la plateforme V6Protect - Crédits: v6protect.fr",
    year: "2023–2025",
    status: "livré",
    logo: "/logo-v6protect.png",
    accent: "#7F77DD",
    links: {
      live: null,
      github: null,
    },
    context: {
      type: "Alternance",
      company: "V6Protect",
      location: "Bordeaux",
      duration: "2 ans",
    },
    fullDescription: `Contribution au développement et à la maintenance d'une plateforme SaaS de cybersécurité 
existante pendant 2 ans en alternance. Travail sur des fonctionnalités critiques : 
gestion des accès, monitoring temps réel, tableaux de bord et modules de sécurité.
Architecture multicouches avec API REST NestJS, frontend React, base PostgreSQL, 
orchestrée via Docker et automatisée avec GitLab CI/CD.`,
    highlights: [
      "Développement de fonctionnalités sur une architecture REST multicouches (NestJS)",
      "Implémentation et maintenance de l'authentification JWT avec gestion granulaire des rôles",
      "Contribution aux dashboards temps réel et modules de monitoring",
      "Participation à l'amélioration de la pipeline CI/CD GitLab et déploiements Docker",
    ],
    stack: [
      "React",
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "GitLab CI/CD",
    ],
    screenshots: ["/dashboard-v6.png"],
  },
  {
    slug: "matariki",
    title: "MATARIKI — Plateforme Data & IA",
    description: "React · Python · FastAPI",
    tagline:
      "Contribution au développement d'une plateforme digitale Data & IA",
    image: "/logo-matariki.png",
    imageDesc: "Plateforme MATARIKI - Crédits: matariki.fr",
    year: "2025",
    status: "livré",
    logo: "/logo-matariki.png",
    accent: "#D85A30",
    links: {
      live: null,
      github: null,
    },
    context: {
      type: "CDD",
      company: "MATARIKI",
      location: "Paris",
      duration: "3 mois",
    },
    fullDescription: `Contribution au développement d'une plateforme digitale axée Data & Intelligence 
Artificielle lors d'un CDD de 3 mois à Paris. Travail en équipe sur des projets internes 
combinant frontend React moderne et pipelines de données Python. Participation au 
développement de fonctionnalités à la création de la documentation et à l'intégration de services de traitement de données.`,
    highlights: [
      "Développement de composants React pour l'interface de la plateforme Data/IA",
      "Intégration et maintenance de pipelines de données Python",
      "Collaboration sur des projets d'Intelligence Artificielle en équipe",
      "Participation à l'architecture frontend/backend des modules IA",
      "Création de la documentation technique pour la globalité de la plateforme ainsi que des fonctionnalités développées",
    ],
    stack: ["React", "Python", "FastAPI"],
    screenshots: [],
  },
];
