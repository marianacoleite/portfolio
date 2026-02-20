import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          I'M <span className="highlight">MARIANA LEITE</span>
        </h1>
        <p className="hero-subtitle">
          Desenvolvedora Backend • Aspirante Full Stack • Resolvedora de Problemas
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">Ver Meus Projetos</a>
          <a href="#contact" className="btn btn-secondary">Entre em Contato</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

