import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiArrowRight, FiExternalLink, FiMapPin } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../data/portfolioData';
import '../styles/hero.css';

const ease = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 22 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease },
});

const Hero = () => {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Background — subtle grid mesh + ambient glow */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-grid" />
        <div className="hero-bg-glow" />
      </div>

      <div className="hero-layout">
        {/* ── LEFT: Identity block ──────────────────── */}
        <div className="hero-identity">

          <motion.span className="hero-overline" {...fadeUp(0.1)}>
            <span className="hero-overline-dot" aria-hidden="true" />
            {personalInfo.education}
          </motion.span>

          <motion.h1 className="hero-name" {...fadeUp(0.18)}>
            {personalInfo.name}
          </motion.h1>

          <motion.div className="hero-role-row" {...fadeUp(0.26)}>
            <span className="hero-role-mark" aria-hidden="true" />
            <span className="hero-role-text">{personalInfo.title}</span>
          </motion.div>

          <motion.p className="hero-desc" {...fadeUp(0.34)}>
            {personalInfo.description}
          </motion.p>

          <motion.div className="hero-actions" {...fadeUp(0.42)}>
            <a
              href="#projects"
              onClick={(e) => scrollTo(e, 'projects')}
              className="hero-btn-primary"
            >
              View Projects
              <FiArrowRight aria-hidden="true" />
            </a>
            <a
              href={socialLinks.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-outline"
            >
              Resume
              <FiExternalLink aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div className="hero-socials" {...fadeUp(0.50)}>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social"
              aria-label="GitHub Profile"
            >
              <FaGithub aria-hidden="true" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
            <a
              href={socialLinks.email}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social"
              aria-label="Send Email"
            >
              <FaEnvelope aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT: Development focus panel ───────── */}
        <motion.aside
          className="hero-panel"
          aria-label="Development focus areas"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32, ease }}
        >
          <div className="hero-panel-header">
            <span className="hero-panel-label">Development Focus</span>
            <span className="hero-panel-count">{personalInfo.highlights.length} areas</span>
          </div>

          <ul className="hero-panel-list" role="list">
            {personalInfo.highlights.map((h, i) => (
              <li key={i} className="hero-panel-item">
                <span className="hero-panel-idx" aria-hidden="true">0{i + 1}</span>
                <div className="hero-panel-text">
                  <span className="hero-panel-title">{h.title}</span>
                  <span className="hero-panel-desc">{h.desc}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="hero-panel-footer">
            <FiMapPin size={12} aria-hidden="true" />
            <span>{personalInfo.location}</span>
          </div>
        </motion.aside>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="hero-scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="hero-scroll-line" />
        <span className="hero-scroll-label">scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
