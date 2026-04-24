import React, { useEffect, useMemo, useState } from "react";
import "./Blocs.scss";
import Parcours from "./Parcours/Parcours";
import Service from "./Service/Service";
import { CARDS, CATEGORIES, MODAL_TITLES, SKILLS } from "../../data/blocs.data";
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

  const activeCard = useMemo(
    () => CARDS.find((c) => c.key === activeModal),
    [activeModal],
  );

  return (
    <>
      {/* ── Cartes navigation ── */}
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
