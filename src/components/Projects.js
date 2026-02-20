import React, { useState, useEffect } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setLoading(true);
        
        // Configurar headers com token se disponível (opcional)
        const headers = {};
        if (process.env.REACT_APP_GITHUB_TOKEN) {
          headers['Authorization'] = `token ${process.env.REACT_APP_GITHUB_TOKEN}`;
        }
        
        const response = await fetch('https://api.github.com/users/marianacoleite/repos?sort=updated&per_page=8', {
          headers: headers
        });
        
        if (!response.ok) {
          throw new Error('Erro ao buscar repositórios');
        }
        
        const data = await response.json();
        
        // Mapeamento de linguagens para tecnologias mais conhecidas
        const languageMap = {
          'JavaScript': 'JavaScript',
          'TypeScript': 'TypeScript',
          'Python': 'Python',
          'Java': 'Java',
          'C++': 'C++',
          'C#': 'C#',
          'Dart': 'Flutter',
          'HTML': 'HTML',
          'CSS': 'CSS',
          'Shell': 'Shell',
          'Dockerfile': 'Docker'
        };
        
        // Filtrar apenas repositórios que não são forks e formatar os dados
        const formattedProjects = data
          .filter(repo => !repo.fork && !repo.archived) // Remove forks e arquivados
          .map(repo => {
            const tech = repo.language ? [languageMap[repo.language] || repo.language] : [];
            return {
              title: repo.name.replace(/-/g, ' ').replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
              description: repo.description || 'Repositório sem descrição.',
              tech: tech,
              github: repo.html_url,
              demo: repo.homepage || '#',
              stars: repo.stargazers_count,
              language: repo.language
            };
          });
        
        setProjects(formattedProjects);
        setError(null);
      } catch (err) {
        console.error('Erro ao buscar repositórios:', err);
        setError('Não foi possível carregar os repositórios. Tente novamente mais tarde.');
        // Fallback para projetos estáticos em caso de erro
        setProjects([
          {
            title: 'API RESTful - Sistema de Gestão',
            description: 'API completa desenvolvida em Node.js com autenticação JWT, validação de dados e integração com banco de dados.',
            tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
            github: 'https://github.com/marianacoleite',
            demo: '#'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projetos</h2>
        <p className="section-subtitle">
          Alguns dos meus projetos de desenvolvimento
        </p>
        
        {loading && (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p>Carregando repositórios...</p>
          </div>
        )}
        
        {error && (
          <div style={{ textAlign: 'center', padding: '20px', color: '#d32f2f' }}>
            <p>{error}</p>
          </div>
        )}
        
        {!loading && projects.length === 0 && !error && (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p>Nenhum repositório encontrado.</p>
          </div>
        )}
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> Código
                </a>
                {project.demo !== '#' && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt /> Demonstração
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="projects-footer">
          <a 
            href="https://github.com/marianacoleite" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Ver Mais no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

