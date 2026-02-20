import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img 
            src="/images/code-background.jpeg" 
            alt="Mariana Leite" 
            className="about-photo"
            onLoad={() => {
              setImageLoaded(true);
              setImageError(false);
            }}
            onError={() => {
              setImageError(true);
              setImageLoaded(false);
            }}
            style={{ display: imageError ? 'none' : 'block' }}
          />
          {imageError && !imageLoaded && (
            <div className="image-placeholder">
              <span>ML</span>
            </div>
          )}
        </div>
        <div className="about-content">
          <h2 className="section-title">Sobre Mim</h2>
          <p className="about-text">
            Sou Desenvolvedora de Sistemas em transição para o modelo Full Stack, com foco em criar soluções fluidas e integradas. Atualmente, atuo na Rekomendo, onde sou responsável pelo desenvolvimento e manutenção do ecossistema mobile e web.
          </p>
          <p className="about-text">
            Minha rotina envolve o domínio de Flutter para aplicações nativas, aliado ao Angular e JavaScript no frontend, utilizando Firebase para estruturação de dados e backend. Além do desenvolvimento core, sou entusiasta de automação e agentes, buscando sempre otimizar processos e elevar a inteligência dos sistemas que construo.
          </p>
          <p className="about-text">
            Meu objetivo é consolidar minha carreira como Full Stack, unindo técnica, inovação e uma visão completa do ciclo de vida de um software.
          </p>
          <div className="about-info">
            <div className="info-item">
              <strong>Nome:</strong> Mariana Leite
            </div>
            <div className="info-item">
              <strong>Perfil:</strong> Desenvolvedora Backend / Aspirante Full Stack
            </div>
            <div className="info-item">
              <strong>Email:</strong> marianacoleite@gmail.com
            </div>
            <div className="info-item">
              <strong>GitHub:</strong> 
              <a href="https://github.com/marianacoleite" target="_blank" rel="noopener noreferrer">
                github.com/marianacoleite
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

