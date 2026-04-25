import React from 'react';
import './AboutSection.scss';
import { technologies } from '../../data/about.data';
import Blocs from '../Blocs/Blocs';

export default function AboutSection() {
    return (
        <section className="about-section">
            <div className="about-text-container">
                <h2 className="about-label">À propos</h2>

                <div className="about-text">
                    <p>
                        Développeur full-stack basé à Bordeaux, spécialisé en React, NestJS
                        et Node.js, avec 3 ans d'expérience sur des applications web orientées
                        cybersécurité, data et IA.
                    </p>
                    <p>
                        Polyvalent et curieux, j'aime apprendre en continu et m'investir dans
                        des projets multicouches — de l'architecture backend à l'interface
                        utilisateur. J'attache autant d'importance à la qualité du code qu'à
                        l'expérience produit finale.
                    </p>
                    <p>
                        Naturellement tourné vers les autres, j'aime échanger, collaborer et
                        construire avec les gens autour de moi — que ce soit en équipe ou
                        directement avec les utilisateurs. Travailler dans un environnement où
                        les idées circulent librement est ce qui me donne le plus d'énergie.
                    </p>
                    <p>
                        Je recherche un CDI où je peux m'impliquer sur le long terme,
                        contribuer à des produits qui ont du sens, et continuer à progresser
                        techniquement.
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
