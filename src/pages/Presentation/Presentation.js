import React from "react";
import "./Presentation.scss";

function Presentation({ onOpenParcours }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-name">
          Willem Préterre.
          <div className="hero-role">
            Développeur <span className="hero-accent">full-stack</span>.
          </div>
        </h1>
        <p className="hero-desc">
          3 ans d'expérience dans des contextes variés —{" "}
          <strong>industrie, cybersécurité, data &amp; IA</strong>. Je conçois
          des <strong>applications</strong>, de{" "}
          <strong>l'architecture backend</strong> à{" "}
          <strong>l'interface utilisateur</strong>, avec une attention à la
          qualité du code et à l'expérience produit.
        </p>

        <div className="hero-actions">
          <a href="/Willem_Preterre_CV.pdf" className="btn-link" download>
            <button className="btn-primary" onClick={onOpenParcours}>
              Télécharger mon CV →
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
            <span className="meta-lbl">projets contribués</span>
          </div>
          <div className="meta-item">
            <span className="meta-num">1</span>
            <span className="meta-lbl">mastère informatique</span>
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
