import React from "react";
import "./Presentation.scss";

function Presentation({ onOpenParcours }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="hero-dot" />
          <span className="hero-status">
            Disponible — Développeur full stack
          </span>
        </div>

        <h1 className="hero-name">Willem Préterre.</h1>
        <h1 className="hero-role">
          Développeur <span className="hero-accent">full stack</span>.
        </h1>

        <p className="hero-desc">
          3 ans d'expérience dans des contextes variés —{" "}
          <strong>industrie, cybersécurité, Data &amp; IA</strong>. Je conçois
          des applications web robustes, de l'architecture backend à l'interface
          utilisateur, avec une attention particulière à la qualité du code et à
          l'expérience produit.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-link">
            <button className="btn-primary" onClick={onOpenParcours}>
              Voir mon parcours →
            </button>
          </a>
        </div>

        <div className="hero-meta">
          <div className="meta-item">
            <span className="meta-num">3+</span>
            <span className="meta-lbl">ans d'expérience</span>
          </div>
          <div className="meta-item">
            <span className="meta-num">4</span>
            <span className="meta-lbl">projets livrés</span>
          </div>
          <div className="meta-item">
            <span className="meta-num">1</span>
            <span className="meta-lbl">mastère obtenu</span>
          </div>
          <div className="meta-item">
            <span className="meta-num">React · Node · NestJS</span>
            <span className="meta-lbl">stack principale</span>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/profile.png" alt="Illustration de présentation" />
      </div>
    </section>
  );
}

export default Presentation;
