import React from "react";

const projects = [
  {
    name: "Ayre E-Shop",
    technologies: "React, Express, MongoDB Atlas, Render, Cloudinary, Resend",
    description:
      "E-commerce de ropa y accesorios desarrollado con React, Express, MongoDB Atlas, Render, Cloudinary y Resend.",
  },
  {
    name: "Pulso",
    technologies: "React, Node.js, REST API, reportes operativos",
    description:
      "Sistema de control de inventario, balances y reportes para optimizar procesos operativos.",
  },
];

export default function Projects() {
  return (
    <section className="section-shell content-section" id="proyectos">
      <div className="section-heading">
        <p className="eyebrow">Proyectos</p>
        <h2>Productos en desarrollo con foco real de negocio</h2>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className="glass-card project-card" key={project.name}>
            <div>
              <div className="project-meta">
                <h3>{project.name}</h3>
                <span>En desarrollo</span>
              </div>
              <p>{project.description}</p>
            </div>
            <div className="project-footer">
              <p>{project.technologies}</p>
              <button className="button button-secondary" type="button" disabled>
                Proximamente
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
