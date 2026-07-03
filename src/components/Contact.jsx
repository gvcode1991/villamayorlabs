import React from "react";

export default function Contact({ contactLinks }) {
  return (
    <section className="contact-section" id="contacto">
      <div className="section-shell contact-layout">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>¿Tenes una idea o necesitas una solucion digital?</h2>
        </div>
        <div className="contact-actions">
          <a className="button button-primary" href={contactLinks.whatsapp}>
            WhatsApp
          </a>
          <a className="button button-secondary" href={contactLinks.email}>
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
