import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo, socialLinks } from '../data/portfolioData';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import '../styles/contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const githubConfigured = socialLinks.github && socialLinks.github.trim() !== '';
  const linkedinConfigured = socialLinks.linkedin && socialLinks.linkedin.trim() !== '';

  return (
    <section id="contact" ref={ref}>
      <div className="section-header">
        <span className="section-tag">Reach Out</span>
        <h2 className="section-title">Let's <span>Connect</span></h2>
        <p className="section-subtitle">
          Opportunities for collaboration, placements, internships, or development queries.
        </p>
      </div>

      <motion.div 
        className="contact-card"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="contact-desc">
          I'm interested in full-stack development, backend engineering, and software development opportunities. Feel free to reach out to discuss projects, internships, or collaboration opportunities.
        </p>

        <div className="contact-info-grid">
          {/* Email Info */}
          <a 
            href={socialLinks.email} 
            className="contact-info-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="contact-info-icon" />
            <span className="contact-info-label">Email</span>
            <span className="contact-info-value">{personalInfo.email}</span>
          </a>

          {/* GitHub Info */}
          <div className="tooltip-container">
            <a 
              href={githubConfigured ? socialLinks.github : '#'} 
              onClick={(e) => !githubConfigured && e.preventDefault()}
              className={`contact-info-item ${!githubConfigured ? 'disabled' : ''}`}
              style={{ width: '100%' }}
            >
              <FaGithub className="contact-info-icon" />
              <span className="contact-info-label">GitHub</span>
              <span className="contact-info-value">
                {githubConfigured ? 'Meetsheth25' : 'Configure URL'}
              </span>
            </a>
            {!githubConfigured && (
              <span className="tooltip-text">
                <strong>Configurable Placeholder</strong><br />
                Set actual GitHub URL inside src/data/portfolioData.js
              </span>
            )}
          </div>

          {/* LinkedIn Info */}
          <div className="tooltip-container">
            <a 
              href={linkedinConfigured ? socialLinks.linkedin : '#'} 
              onClick={(e) => !linkedinConfigured && e.preventDefault()}
              className={`contact-info-item ${!linkedinConfigured ? 'disabled' : ''}`}
              style={{ width: '100%' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="contact-info-icon" />
              <span className="contact-info-label">LinkedIn</span>
              <span className="contact-info-value">
                {linkedinConfigured ? 'Meet Sheth' : 'Configure URL'}
              </span>
            </a>
            {!linkedinConfigured && (
              <span className="tooltip-text">
                <strong>Configurable Placeholder</strong><br />
                Set actual LinkedIn URL inside src/data/portfolioData.js
              </span>
            )}
          </div>
        </div>

        <div className="contact-action">
          <a 
            href={socialLinks.email} 
            className="btn btn-primary contact-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMail /> Send Me an Email
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
