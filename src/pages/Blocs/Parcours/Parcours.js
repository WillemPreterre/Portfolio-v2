import React, { useState } from "react";
import "./Parcours.scss";
import { DOT_COLORS, ENTRIES, FILTERS } from "../../../data/parcours.data";

function Parcours() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visible =
    activeFilter === "all"
      ? ENTRIES
      : ENTRIES.filter((e) => e.cat === activeFilter);

  return (
    <div className="parcours">
      <div className="filter-row">
        {FILTERS.map(({ key, label, cls }) => (
          <button
            key={key}
            className={`ftag ${cls} ${activeFilter === key ? "on" : ""}`}
            onClick={() => setActiveFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="timeline">
        {visible.map((entry) => (
          <div
            key={entry.title + entry.org}
            className={`entry ${entry.current ? "entry--current" : ""}`}
          >
            <div
              className="dot"
              style={{ background: DOT_COLORS[entry.cat] }}
            />
            <div className="parcours-card">
              <div className="card-top">
                <div className="card-left">
                  <span className={`type-badge badge-${entry.cat}`}>
                    {entry.type}
                  </span>
                  <span className="card-title">{entry.title}</span>
                  <span className="card-org">{entry.org}</span>
                </div>
                <span className="card-date">{entry.date}</span>
              </div>
              <p className="card-desc">{entry.desc}</p>
              <div className="parcours-tags">
                {entry.tags.map((tag) => (
                  <span key={tag} className="parcours-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Parcours;
