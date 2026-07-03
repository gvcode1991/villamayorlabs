import React from "react";

const services = [
  {
    icon: "W",
    title: "Desarrollo Web",
    description: "Sitios y aplicaciones rapidas, accesibles y preparadas para crecer.",
  },
  {
    icon: "E",
    title: "E-commerce",
    description: "Tiendas online con catalogo, checkout y flujos pensados para vender.",
  },
  {
    icon: "G",
    title: "Sistemas de Gestion",
    description: "Paneles, inventarios, reportes y herramientas para ordenar operaciones.",
  },
  {
    icon: "A",
    title: "Automatizaciones",
    description: "Procesos conectados que reducen tareas repetitivas y tiempos muertos.",
  },
  {
    icon: "API",
    title: "Integraciones API",
    description: "Conexion entre plataformas, servicios externos y sistemas internos.",
  },
  {
    icon: "C",
    title: "Soluciones Cloud",
    description: "Despliegues modernos, seguros y faciles de mantener en la nube.",
  },
];

export default function Services() {
  return (
    <section className="section-shell content-section" id="servicios">
      <div className="section-heading">
        <p className="eyebrow">Servicios</p>
        <h2>Soluciones digitales para operar mejor y vender mas</h2>
      </div>
      <div className="card-grid service-grid">
        {services.map((service) => (
          <article className="glass-card service-card" key={service.title}>
            <div className="service-icon" aria-hidden="true">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
