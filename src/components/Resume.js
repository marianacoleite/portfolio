import React from 'react';
import './Resume.css';

const Resume = () => {
  const skills = [
    { category: 'Backend', items: ['Node.js', 'Python', 'REST APIs', 'Swagger', 'C++', 'C#', 'Flutter'] },
    { category: 'Banco de Dados', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase'] },
    { category: 'Ferramentas e Outros', items: ['Git', 'AWS', 'Linux', 'CI/CD'] },
    { category: 'Frontend', items: ['JavaScript', 'HTML', 'CSS', 'Angular'] },
    { category: 'Aprendendo', items: ['React', 'TypeScript'] }
  ];

  const experiences = [
    {
      period: '2026 - Atual',
      title: 'Desenvolvedora ',
      company: 'Rekomendo',
      description: 'Atualmente focado no desenvolvimento e manutenção do aplicativo e site da plataforma. Atuo intensamente com Flutter para mobile, Angular e JavaScript no web, além de utilizar Firebase para infraestrutura e banco de dados.'
    },
    {
      period: '2025 ',
      title: 'Estágio em TI',
      company: 'SENAI',
      description: 'Atuação em suporte técnico de TI, com foco em manutenção de hardware e software, instalação e configuração de sistemas, além de suporte em redes e CFTV. Acompanhamento de bancos de dados e participação em projetos (acadêmicos e internos) de desenvolvimento web e mobile aplicando lógica de programação e boas práticas de software'
    }
  ];

  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        <p className="section-subtitle">
        
        </p>
        
        <div className="resume-content">
          <div className="resume-section">
            <h3 className="resume-section-title">Experiência</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-period">{exp.period}</div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{exp.title}</h4>
                    <div className="timeline-company">{exp.company}</div>
                    <p className="timeline-description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">Habilidades</h3>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-category">
                  <h4 className="skill-category-title">{skillGroup.category}</h4>
                  <div className="skill-items">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

