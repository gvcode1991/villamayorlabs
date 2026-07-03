import React from "react";
import heroLogo from "../assets/logos/logoSF.png";

export default function Hero({ contactLinks }) {
  return (
    <section className="hero section-shell" id="inicio">
      <div className="hero-content reveal">
        <p className="eyebrow">Software, AI & Cloud</p>
        <h1>Software moderno para negocios que quieren crecer</h1>
        <p className="hero-copy">
          En Villamayor Labs desarrollamos aplicaciones web, e-commerce,
          sistemas de gestion y soluciones digitales escalables, seguras y
          orientadas a resultados.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#proyectos">
            Ver proyectos
          </a>
          <a className="button button-secondary" href={contactLinks.email}>
            Contactar
          </a>
        </div>
      </div>
      <div className="hero-visual reveal" aria-label="Identidad visual de Villamayor Labs">
        <img src={heroLogo} alt="" />
        <div className="signal-card signal-card-top">
          <span>Cloud ready</span>
          <strong>Escalable</strong>
        </div>
        <div className="signal-card signal-card-bottom">
          <span>Build focus</span>
          <strong>Web + IA</strong>
        </div>
      </div>
    </section>
  );
}
