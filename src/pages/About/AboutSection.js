import React from "react";
import "./AboutSection.scss";
import { technologies } from "../../data/about.data";
import Blocs from "../Blocs/Blocs";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-text-container">
        <h2 className="about-label">À propos</h2>

        <div className="about-text">
          <p>
            <strong>Développeur full-stack</strong>{" "} basé à Bordeaux, spécialisé
            en <strong>React</strong>, <strong>NestJS</strong>{" "}
            et <strong>Node.js</strong>, avec <strong>3 ans</strong>{" "}
            d'expérience sur des applications orientées cybersécurité, data
            et IA.
          </p>
          <p>
            <strong>Polyvalent et curieux</strong>, j'aime apprendre en continu
            et m'investir dans <strong>des projets multicouches</strong>{" "} — de{" "}
            <strong>l'architecture backend</strong>{" "} à{" "}
            <strong>l'interface utilisateur</strong>. J'attache autant
            d'importance à la qualité du code qu'à l'expérience produit finale.
          </p>
          <p>
            Tourné vers les autres,{" "}
            <strong>j'aime échanger, collaborer et construire au sein de l'équipe de développement et avec les utilisateurs</strong>
          </p>
          <p>
            J'apprécie les <strong>missions</strong> sur lesquelles je peux contribuer à des projets qui ont du sens et à des solutions technologiques innovantes.
          </p>
        </div>
        <hr className="about-divider" />

        <h2 className="techno-label">Technologies</h2>

        <div className="techno-grid">
          {technologies.map((tech) => (
            <div className="tech-item" key={tech.name}>
              <img src={tech.icon} alt={tech.name} className="tech-icon" />
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <Blocs></Blocs>
    </section>
  );
}
