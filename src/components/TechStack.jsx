import React from "react";

const technologies = [
  "React",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB Atlas",
  "Git",
  "GitHub",
  "Render",
  "Cloudinary",
  "Resend",
  "REST API",
  "HTML",
  "CSS",
];

export default function TechStack() {
  return (
    <section className="section-shell content-section" aria-labelledby="stack-title">
      <div className="section-heading compact-heading">
        <p className="eyebrow">Stack tecnologico</p>
        <h2 id="stack-title">Herramientas modernas para productos mantenibles</h2>
      </div>
      <div className="tech-cloud">
        {technologies.map((tech) => (
          <span className="tech-chip" key={tech}>
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
