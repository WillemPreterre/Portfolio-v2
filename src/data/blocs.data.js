import { FaGit, FaJs, FaNode, FaPhp, FaReact, FaSass } from "react-icons/fa";
import {
  SiAngular,
  SiDocker,
  SiFigma,
  SiGitlab,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiSpringboot,
} from "react-icons/si";

export const CATEGORIES = [
  { key: "all", label: "Tout voir", cls: "pill-all" },
  { key: "fw", label: "Frameworks", cls: "pill-fw" },
  { key: "db", label: "Bases de données", cls: "pill-db" },
  { key: "ops", label: "DevOps", cls: "pill-ops" },
  { key: "lang", label: "Langages", cls: "pill-lang" },
];

export const SKILLS = [
  { cat: "fw", Icon: FaReact, cls: "react", name: "React", sub: "UI library" },
  {
    cat: "fw",
    Icon: SiNextdotjs,
    cls: "next",
    name: "Next.js",
    sub: "SSR React",
  },
  {
    cat: "fw",
    Icon: SiAngular,
    cls: "angular",
    name: "Angular",
    sub: "Frontend fw",
  },
  {
    cat: "fw",
    Icon: SiSpringboot,
    cls: "spring",
    name: "Spring Boot",
    sub: "API Java",
  },

  {
    cat: "fw",
    Icon: FaNode,
    cls: "node",
    name: "Node.js",
    sub: "Runtime backend",
  },
  {
    cat: "fw",
    Icon: SiNestjs,
    cls: "nest",
    name: "NestJS",
    sub: "API framework",
  },
  { cat: "fw", Icon: FaSass, cls: "sass", name: "Sass", sub: "CSS avancé" },
  {
    cat: "db",
    Icon: SiPostgresql,
    cls: "postgres",
    name: "PostgreSQL",
    sub: "SQL relationnel",
  },
  { cat: "db", Icon: SiMongodb, cls: "mongo", name: "MongoDB", sub: "NoSQL" },
  {
    cat: "ops",
    Icon: SiDocker,
    cls: "docker",
    name: "Docker",
    sub: "Containerisation",
  },
  { cat: "ops", Icon: FaGit, cls: "git", name: "Git", sub: "Versioning" },
  { cat: "ops", Icon: SiGitlab, cls: "gitlab", name: "GitLab", sub: "CI/CD" },
  {
    cat: "ops",
    Icon: SiFigma,
    cls: "figma",
    name: "Figma",
    sub: "Design UI/UX",
  },

  {
    cat: "lang",
    Icon: FaPhp,
    cls: "php",
    name: "PHP",
    sub: "Backend",
  },
  {
    cat: "lang",
    Icon: FaJs,
    cls: "js",
    name: "JavaScript",
    sub: "Frontend / backend",
  },
];

export const CARDS = [
  {
    key: "apport",
    color: "#378ADD",
    iconStroke: "#378ADD",
    iconBg: "rgba(55,138,221,0.12)",
    iconPath: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    title: "Mon apport",
    desc: "Ce que j'apporte concrètement — frontend, backend, DevOps, conduite de projet.",
    tags: ["React", "NestJS", "Docker"],
  },
  {
    key: "skills",
    color: "#7F77DD",
    iconStroke: "#7F77DD",
    iconBg: "rgba(127,119,221,0.12)",
    iconPath: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
    title: "Skills",
    desc: "Stack technique complète — frameworks, bases de données, DevOps et langages.",
    tags: ["16 technos", "4 catégories"],
  },
  {
    key: "parcours",
    color: "#1D9E75",
    iconStroke: "#1D9E75",
    iconBg: "rgba(29,158,117,0.12)",
    iconPath: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    title: "Parcours",
    desc: "Formation, stages et alternances — de Yvetot à Paris, en passant par Le Havre.",
    tags: ["2017 – 2025", "9 étapes"],
  },
];

export const MODAL_TITLES = {
  apport: "Mon apport",
  skills: "Stack technique",
  parcours: "Parcours",
};
