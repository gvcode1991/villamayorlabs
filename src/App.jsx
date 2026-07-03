import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import TechStack from "./components/TechStack.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export const CONTACT_LINKS = {
  whatsapp: "https://wa.me/5490000000000",
  email: "mailto:hola@villamayorlabs.com",
};

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero contactLinks={CONTACT_LINKS} />
        <Services />
        <Projects />
        <About />
        <TechStack />
        <Contact contactLinks={CONTACT_LINKS} />
      </main>
      <Footer />
    </>
  );
}
