import React from "react";
import logoDark from "../assets/logos/logoblack.png";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src={logoDark} alt="Villamayor Labs" />
        <p>Villamayor Labs - Software, AI & Cloud</p>
      </div>
      <nav aria-label="Links rapidos">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <p className="copyright">© {year} Villamayor Labs. Todos los derechos reservados.</p>
    </footer>
  );
}
