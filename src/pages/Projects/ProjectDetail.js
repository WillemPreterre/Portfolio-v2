import { useNavigate, useParams } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { PROJECTS } from "../../data/projects.data";
import "./ProjectDetail.scss";

const STATUS_LABEL = {
  "livré":    { label: "Livré",    cls: "status-done"    },
  "en cours": { label: "En cours", cls: "status-wip"     },
  "concept":  { label: "Concept",  cls: "status-concept" },
};

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project  = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="detail-notfound">
        <p>Projet introuvable.</p>
        <button onClick={() => navigate("/")}>← Retour aux projets</button>
      </div>
    );
  }

  const {
    title, tagline, year, status, accent,
    image, fullDescription, highlights, stack,
    links, context, screenshots,
  } = project;

  const statusMeta = STATUS_LABEL[status] ?? STATUS_LABEL["livré"];

  const currentIdx = PROJECTS.findIndex((p) => p.slug === slug);
  const prev = PROJECTS[currentIdx - 1] ?? null;
  const next = PROJECTS[currentIdx + 1] ?? null;

  return (
    <div className="detail-page">

      {/* ── Nav ── */}
      <div className="detail-nav">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Tous les projets
        </button>
        <div className="detail-breadcrumb">
          <span>Projets</span>
          <span className="bc-sep">/</span>
          <span className="bc-current">{title}</span>
        </div>
      </div>

      <div className="detail-layout">

        {/* ════ CONTENU PRINCIPAL ════ */}
        <div className="detail-main">

          {/* Header */}
          <div className="detail-header">
            <div className="detail-header-meta">
              <span className={`card-status ${statusMeta.cls}`}>
                {statusMeta.label}
              </span>
              <span className="detail-year">{year}</span>
            </div>
            <h1 className="detail-title">{title}</h1>
            <p className="detail-tagline">{tagline}</p>
          </div>

          {/* Barre accent */}
          <div className="detail-bar" style={{ background: accent }} />

          {/* Image principale */}
          {image ? (
            <div className="detail-image">
              <img src={image} alt={title} />
            </div>
          ) : (
            <div
              className="detail-image-placeholder"
              style={{ background: `${accent}10`, borderColor: `${accent}22` }}
            >
              <span style={{ color: accent }}>Mockup à venir</span>
            </div>
          )}

          {/* Description */}
          <div className="detail-section">
            <h2 className="detail-section-title">À propos du projet</h2>
            <p className="detail-description">{fullDescription?.trim()}</p>
          </div>

          {/* Points clés */}
          {highlights?.length > 0 && (
            <div className="detail-section">
              <h2 className="detail-section-title">Points clés</h2>
              <ul className="detail-highlights">
                {highlights.map((h, i) => (
                  <li key={i} className="highlight-item">
                    <span className="highlight-dot" style={{ background: accent }} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Screenshots */}
          {screenshots?.filter(Boolean).length > 0 && (
            <div className="detail-section">
              <h2 className="detail-section-title">Captures d'écran</h2>
              <div className="detail-screenshots">
                {screenshots.filter(Boolean).map((src, i) => (
                  <img key={i} src={src} alt={`Screenshot ${i + 1}`} />
                ))}
              </div>
            </div>
          )}

          {/* Navigation projets précédent / suivant */}
          {(prev || next) && (
            <div className="detail-project-nav">
              {prev ? (
                <button
                  className="project-nav-btn"
                  onClick={() => navigate(`/projects/${prev.slug}`)}
                >
                  <span className="nav-dir">← Précédent</span>
                  <span className="nav-name">{prev.title}</span>
                </button>
              ) : <div />}
              {next && (
                <button
                  className="project-nav-btn project-nav-btn--right"
                  onClick={() => navigate(`/projects/${next.slug}`)}
                >
                  <span className="nav-dir">Suivant →</span>
                  <span className="nav-name">{next.title}</span>
                </button>
              )}
            </div>
          )}

        </div>

        {/* ════ SIDEBAR ════ */}
        <aside className="detail-sidebar">

          {/* Contexte */}
          {context && (
            <div className="sidebar-card">
              <h3 className="sidebar-title">Contexte</h3>
              <div className="sidebar-rows">
                {[
                  ["Type",       context.type    ],
                  ["Entreprise", context.company ],
                  ["Lieu",       context.location],
                  ["Durée",      context.duration],
                  ["Année",      year            ],
                ].filter(([, v]) => v).map(([label, value]) => (
                  <div key={label} className="sidebar-row">
                    <span className="sidebar-row-label">{label}</span>
                    <span className="sidebar-row-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stack */}
          {stack?.length > 0 && (
            <div className="sidebar-card">
              <h3 className="sidebar-title">Stack technique</h3>
              <div className="sidebar-stack">
                {stack.map((t) => (
                  <span key={t} className="stack-tag">{t}</span>
                ))}
              </div>
            </div>
          )}

          {/* Liens */}
          <div className="sidebar-card">
            <h3 className="sidebar-title">Liens</h3>
            <div className="sidebar-links">
              {links?.live ? (
                <a
                  href={links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-link-btn"
                  style={{ borderColor: `${accent}55`, color: accent }}
                >
                  <FaExternalLinkAlt size={11} />
                  Voir le site
                </a>
              ) : (
                <span className="sidebar-link-none">Pas de lien public</span>
              )}
              {links?.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-link-btn sidebar-link-ghost"
                >
                  <FaGithub size={11} />
                  GitHub
                </a>
              )}
            </div>
          </div>

        </aside>

      </div>
    </div>
  );
}

export default ProjectDetail;
