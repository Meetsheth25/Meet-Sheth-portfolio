import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { FaGithub, FaExternalLinkAlt, FaUsers } from 'react-icons/fa';
import { FiX, FiArrowRight, FiChevronRight } from 'react-icons/fi';
import '../styles/projects.css';

/* ─────────────────────────────────────────────────
   Project Details Modal — rendered via createPortal
   ───────────────────────────────────────────────── */
const ProjectModal = ({ project, onClose }) => {
  /* Escape key handler */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    /* Lock body scroll */
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const githubOk = project.github && project.github.trim() !== '';
  const demoOk   = project.demo   && project.demo.trim()   !== '';

  return createPortal(
    <motion.div
      className="pm-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} project details`}
    >
      <motion.div
        className="pm-box"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1,    y: 0  }}
        exit={{    opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="pm-header">
          <div className="pm-header-meta">
            <span className="pm-type">{project.type}</span>
            {project.isGroupProject && (
              <span className="pm-group-badge">
                <FaUsers size={11} aria-hidden="true" /> College Group Project
              </span>
            )}
          </div>
          <button
            className="pm-close"
            onClick={onClose}
            aria-label="Close project details"
          >
            <FiX size={18} aria-hidden="true" />
          </button>
        </div>

        <h2 className="pm-name">{project.name}</h2>

        {/* Scrollable body */}
        <div className="pm-body">

          {/* Description */}
          <section className="pm-section" aria-labelledby="pm-desc-label">
            <h3 className="pm-section-title" id="pm-desc-label">Overview</h3>
            <p className="pm-desc">{project.description}</p>
            {project.isGroupProject && (
              <p className="pm-group-note">
                * Collaborative academic group effort — contributed to platform co-development, component integration, and general workflows.
              </p>
            )}
          </section>

          {/* Key features */}
          <section className="pm-section" aria-labelledby="pm-feat-label">
            <h3 className="pm-section-title" id="pm-feat-label">Key Features</h3>
            <ul className="pm-features" aria-label="Project features">
              {project.features.map((feat, i) => (
                <li key={i} className="pm-feature-item">
                  <FiChevronRight className="pm-feat-icon" aria-hidden="true" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Tech stack */}
          <section className="pm-section" aria-labelledby="pm-tech-label">
            <h3 className="pm-section-title" id="pm-tech-label">Technology Stack</h3>
            <div className="pm-tech-chips" aria-label="Technologies used">
              {project.tech.map((t, i) => (
                <span key={i} className="pm-tech-chip">{t}</span>
              ))}
            </div>
          </section>
        </div>

        {/* Footer actions */}
        <div className="pm-footer">
          {githubOk && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pm-action pm-action--outline"
              aria-label="View GitHub repository"
            >
              <FaGithub aria-hidden="true" /> GitHub Repo
            </a>
          )}
          {demoOk && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="pm-action pm-action--filled"
              aria-label="View live demo"
            >
              <FaExternalLinkAlt size={13} aria-hidden="true" /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

/* ─────────────────────────────────────────────────
   Projects Section
   ───────────────────────────────────────────────── */
const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const openModal  = useCallback((proj) => setActiveProject(proj), []);
  const closeModal = useCallback(() => setActiveProject(null), []);

  const ease = [0.16, 1, 0.3, 1];

  return (
    <section id="projects" ref={ref}>
      <span className="sec-overline">Portfolio</span>
      <h2 className="sec-heading">
        Featured <span className="hl">Projects</span>
      </h2>

      <div className="projects-list">
        {projects.map((project, index) => {
          const githubOk = project.github && project.github.trim() !== '';
          const demoOk   = project.demo   && project.demo.trim()   !== '';

          return (
            <motion.article
              key={project.id}
              className="proj-card"
              aria-label={project.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.52, delay: index * 0.1, ease }}
            >
              {/* Card top bar */}
              <div className="proj-topbar">
                <div className="proj-index-wrap">
                  <span className="proj-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="proj-badges">
                  <span className="proj-type">{project.type}</span>
                  {project.isGroupProject && (
                    <span className="proj-group-badge">
                      <FaUsers size={10} aria-hidden="true" /> Group
                    </span>
                  )}
                </div>
              </div>

              {/* Name */}
              <h3 className="proj-name">{project.name.trim()}</h3>

              {/* Description */}
              <p className="proj-desc">{project.description}</p>

              {/* Feature preview (first 3) */}
              <div className="proj-features">
                {project.features.slice(0, 3).map((f, fi) => (
                  <div key={fi} className="proj-feature-row">
                    <span className="proj-feature-dot" aria-hidden="true" />
                    <span className="proj-feature-text">{f}</span>
                  </div>
                ))}
                {project.features.length > 3 && (
                  <span className="proj-feature-more">
                    +{project.features.length - 3} more features
                  </span>
                )}
              </div>

              {/* Tech chips (up to 6, then count) */}
              <div className="proj-tech" aria-label="Technologies">
                {project.tech.slice(0, 6).map((t, ti) => (
                  <span key={ti} className="proj-tech-chip">{t}</span>
                ))}
                {project.tech.length > 6 && (
                  <span className="proj-tech-chip proj-tech-more">
                    +{project.tech.length - 6}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="proj-actions">
                <button
                  className="proj-btn-details"
                  onClick={() => openModal(project)}
                  aria-label={`View ${project.name.trim()} details`}
                >
                  View Details <FiArrowRight aria-hidden="true" />
                </button>

                <div className="proj-links">
                  {githubOk && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-link"
                      aria-label={`${project.name.trim()} GitHub repository`}
                    >
                      <FaGithub aria-hidden="true" /> GitHub
                    </a>
                  )}
                  {demoOk && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-link proj-link--accent"
                      aria-label={`${project.name.trim()} live demo`}
                    >
                      <FaExternalLinkAlt size={12} aria-hidden="true" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Modal via createPortal */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
