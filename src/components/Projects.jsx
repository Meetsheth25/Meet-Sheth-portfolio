import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaUsers } from 'react-icons/fa';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import '../styles/projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const openDetails = (project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeDetails = () => {
    setActiveProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" ref={ref}>
      <div className="section-header">
        <span className="section-tag">Portfolio</span>
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <p className="section-subtitle">
          A showcase of full-stack systems and application deployments.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const githubConfigured = project.github && project.github.trim() !== '';
          const demoConfigured = project.demo && project.demo.trim() !== '';
          
          return (
            <motion.div 
              key={project.id} 
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-card-header">
                <span className="project-tag-type">{project.type}</span>
                <h3 className="project-title">
                  {project.name}
                  {project.isGroupProject && (
                    <span className="group-project-badge">
                      <FaUsers size={10} style={{ marginRight: '4px' }} /> Group
                    </span>
                  )}
                </h3>
              </div>

              <div className="project-body">
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.slice(0, 5).map((tech, tIdx) => (
                    <span key={tIdx} className="project-tech-badge">{tech}</span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="project-tech-badge">+{project.tech.length - 5} more</span>
                  )}
                </div>

                <div className="project-features-preview">
                  <h4 className="project-features-title">Highlights</h4>
                  <ul className="project-features-list">
                    {project.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="project-footer">
                <button 
                  onClick={() => openDetails(project)} 
                  className="view-details-btn"
                >
                  View Details <FiPlus />
                </button>

                <div className="project-links">
                  {/* GitHub Link Handler */}
                  <div className="tooltip-container">
                    <a 
                      href={githubConfigured ? project.github : '#'} 
                      onClick={(e) => !githubConfigured && e.preventDefault()}
                      className={`project-link-btn ${!githubConfigured ? 'disabled' : ''}`}
                      target={githubConfigured ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub /> GitHub
                    </a>
                    {!githubConfigured && (
                      <span className="tooltip-text">
                        <strong>Configurable Link</strong><br />
                        Set repository URL inside src/data/portfolioData.js
                      </span>
                    )}
                  </div>

                  {/* Demo Link Handler - Rendered only if configured */}
                  {demoConfigured && (
                    <a 
                      href={project.demo} 
                      className="project-link-btn"
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt size={12} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDetails}
          >
            <motion.div 
              className="modal-card"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div className="modal-title-wrapper">
                  <span className="project-tag-type">{activeProject.type}</span>
                  <h3 className="project-title" style={{ marginBottom: 0 }}>
                    {activeProject.name}
                    {activeProject.isGroupProject && (
                      <span className="group-project-badge">
                        <FaUsers size={10} style={{ marginRight: '4px' }} /> College Group Project
                      </span>
                    )}
                  </h3>
                </div>
                <button className="modal-close-btn" onClick={closeDetails} aria-label="Close details">
                  <FaTimes />
                </button>
              </div>

              <div className="modal-body">
                <div className="modal-section">
                  <p className="project-desc" style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                    {activeProject.description}
                  </p>
                  {activeProject.isGroupProject && (
                    <p className="project-desc" style={{ fontStyle: 'italic', fontSize: '0.9rem', marginTop: '-8px' }}>
                      *This was a collaborative academic group effort. My role was co-developing the platform, integrating components, and assisting in general workflows.
                    </p>
                  )}
                </div>

                <div className="modal-section">
                  <h4 className="modal-section-title">Key Features</h4>
                  <ul className="modal-features-list">
                    {activeProject.features.map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h4 className="modal-section-title">Technology Stack</h4>
                  <div className="project-tech" style={{ marginBottom: 0 }}>
                    {activeProject.tech.map((tech, tIdx) => (
                      <span key={tIdx} className="project-tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                {activeProject.github && (
                  <a 
                    href={activeProject.github} 
                    className="project-link-btn"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> GitHub Repo
                  </a>
                )}
                {activeProject.demo && (
                  <a 
                    href={activeProject.demo} 
                    className="project-link-btn"
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ backgroundColor: 'var(--brand-blue)', color: 'white', borderColor: 'var(--brand-blue)' }}
                  >
                    <FaExternalLinkAlt size={12} /> View Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
