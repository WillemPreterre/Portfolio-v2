import React from "react";
import { useNavigate } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.scss";
import { PROJECTS } from "../../data/projects.data";

const STATUS_LABEL = {
  livré: { label: "Livré", cls: "status-done" },
  "en cours": { label: "En cours", cls: "status-wip" },
  concept: { label: "Concept", cls: "status-concept" },
};

function Projects() {
  const navigate = useNavigate();

  return (
    <section className="projects" id="projects">
      {/* Grille */}
      <div className="projects-grid">
        {PROJECTS.map((p) => {
          const statusMeta = STATUS_LABEL[p.status] ?? STATUS_LABEL["livré"];
          return (
            <div
              key={p.slug}
              className="card"
              onClick={() => navigate(`/projects/${p.slug}`)}
              role="button"
              tabIndex={0}
              aria-label={`Voir le projet ${p.title}`}
              onKeyDown={(e) =>
                e.key === "Enter" && navigate(`/projects/${p.slug}`)
              }
            >
              {/* Barre accent */}
              <div
                className="card-accent-bar"
                style={{ background: p.accent }}
              />

              {/* Image */}
              <div className="card-image">
                {p.logo ? (
                  <img className="card-logo" src={p.logo} alt={p.title} />
                ) : (
                  <div
                    className="card-placeholder"
                    style={{ background: `${p.accent}18` }}
                  >
                    <span style={{ color: p.accent }}>{p.title.charAt(0)}</span>
                  </div>
                )}
              </div>

              {/* Contenu */}
              <div className="card-content">
                <div className="card-top">
                  <span className={`card-status ${statusMeta.cls}`}>
                    {statusMeta.label}
                  </span>
                  <span className="card-year">{p.year}</span>
                </div>

                <p className="card-title">{p.title}</p>
                <span className="card-desc">{p.description}</span>
              </div>

              <div className="card-footer">
                <span className="card-cta">Voir le projet →</span>
                {p.links?.live && (
                  <a
                    href={p.links.live}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="card-ext-link"
                    aria-label="Lien externe"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
