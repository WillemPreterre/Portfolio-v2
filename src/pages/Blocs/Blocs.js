import React, { useEffect, useState } from "react";
import "./Blocs.scss";
import {
  FaCss3Alt,
  FaGit,
  FaHtml5,
  FaJs,
  FaNode,
  FaPhp,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiAngular,
  SiDocker,
  SiFigma,
  SiGitlab,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import Parcours from "./Parcours/Parcours";
import Service from "./Service/Service";

/* ── Données ── */

const CATEGORIES = [
  { key: "all", label: "Tout voir", cls: "pill-all" },
  { key: "fw", label: "Frameworks", cls: "pill-fw" },
  { key: "db", label: "Bases de données", cls: "pill-db" },
  { key: "ops", label: "DevOps", cls: "pill-ops" },
  { key: "lang", label: "Langages", cls: "pill-lang" },
];

const SKILLS = [
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
    Icon: FaJs,
    cls: "js",
    name: "JavaScript",
    sub: "Langage web",
  },
  {
    cat: "lang",
    Icon: FaPhp,
    cls: "php",
    name: "PHP",
    sub: "Backend scripting",
  },
];

const CARDS = [
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

const MODAL_TITLES = {
  apport: "Mon apport",
  skills: "Stack technique",
  parcours: "Parcours",
};

/* ── Composant ── */

function Blocs() {
  const [activeModal, setActiveModal] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const openModal = (key) => {
    setActiveModal(key);
    setActiveFilter("all");
  };

  const closeModal = () => setActiveModal(null);

  useEffect(() => {
    document.body.style.overflow = activeModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeModal]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const visibleSkills =
    activeFilter === "all"
      ? SKILLS
      : SKILLS.filter((s) => s.cat === activeFilter);

  const activeCard = CARDS.find((c) => c.key === activeModal);

  return (
    <>
      {/* ── Cartes navigation ── */}
      <section className="cards-section">
        <div className="cards-grid">
          {CARDS.map(
            ({
              key,
              color,
              iconStroke,
              iconBg,
              iconPath,
              title,
              desc,
              tags,
            }) => (
              <div
                key={key}
                className="card"
                onClick={() => openModal(key)}
                role="button"
                tabIndex={0}
                aria-label={`Ouvrir ${title}`}
                onKeyDown={(e) => e.key === "Enter" && openModal(key)}
              >
                <div className="card-top-bar" style={{ background: color }} />
                <div className="card-icon-wrap" style={{ background: iconBg }}>
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
                <p className="card-title">{title}</p>
                <p className="card-desc">{desc}</p>
                <div className="card-footer">
                  <div className="card-tags">
                    {tags.map((t) => (
                      <span key={t} className="ctag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      {/* ════ MODALES ════ */}
      {activeModal && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`Modale ${activeModal}`}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-group">
                <span
                  className="modal-dot"
                  style={{ background: activeCard?.color }}
                />
                <h2>{MODAL_TITLES[activeModal]}</h2>
              </div>
              <button
                className="close-btn"
                onClick={closeModal}
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>

            {activeModal === "apport" && <Service />}
            {activeModal === "parcours" && <Parcours />}

            {activeModal === "skills" && (
              <>
                <div className="cat-pills">
                  {CATEGORIES.map(({ key, label, cls }) => (
                    <button
                      key={key}
                      className={`pill ${cls} ${activeFilter === key ? "active" : ""}`}
                      onClick={() => setActiveFilter(key)}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <div className="skills-grid">
                  {visibleSkills.map(({ name, sub, Icon, cls }) => (
                    <div key={name} className="skill-card">
                      <Icon className={`icon ${cls}`} />
                      <div>
                        <p>{name}</p>
                        <span>{sub}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="modal-hint">
                  Filtre par catégorie · Échap ou ✕ pour fermer
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Blocs;
