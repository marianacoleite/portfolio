import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contato</h2>
        <p className="section-subtitle">
          Entre em contato comigo para projetos ou oportunidades
        </p>
        
        <div className="contact-social">
          <a 
            href="https://github.com/marianacoleite" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/marianacotiasleite?utm_source=share_via&utm_content=profile&utm_medium=member_ios" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

