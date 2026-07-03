import React from "react";
import logoDark from "../assets/logos/logoblack.png";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Sobre mi", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand-link" href="#inicio" aria-label="Villamayor Labs inicio">
        <img src={logoDark} alt="Villamayor Labs" />
      </a>
      <nav className="main-nav" aria-label="Navegacion principal">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="button button-primary header-action" href="#contacto">
        Solicitar proyecto
      </a>
    </header>
  );
}
