import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../data/portfolioData';
import '../styles/hero.css';

const Hero = () => {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      const offsetTop = el.offsetTop - 75;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Safe checks for social profile configurations
  const githubConfigured = socialLinks.github && socialLinks.github.trim() !== '';
  const linkedinConfigured = socialLinks.linkedin && socialLinks.linkedin.trim() !== '';

  return (
    <section id="home" className="hero-container">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="hero-subtitle">Hello, I'm</span>
        <h1 className="hero-title">{personalInfo.name}</h1>
        <h2 className="hero-role">{personalInfo.title}</h2>
        <p className="hero-description">{personalInfo.description}</p>
        
        <div className="hero-ctas">
          <a href="#projects" onClick={handleScrollToProjects} className="btn btn-primary">
            View My Projects <FiArrowRight />
          </a>
          <a 
            href={socialLinks.resume} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary"
          >
            View Resume <FiExternalLink />
          </a>
        </div>

        <div className="hero-socials">
          {/* GitHub Icon with Configurable Validation */}
          <div className="tooltip-container">
            <a 
              href={githubConfigured ? socialLinks.github : '#'} 
              onClick={(e) => !githubConfigured && e.preventDefault()}
              className="hero-social-icon" 
              aria-label="GitHub Profile"
              style={{ cursor: githubConfigured ? 'pointer' : 'not-allowed' }}
            >
              <FaGithub />
            </a>
            {!githubConfigured && (
              <span className="tooltip-text">
                <strong>Configurable Placeholder</strong><br />
                Set actual GitHub URL inside src/data/portfolioData.js
              </span>
            )}
          </div>

          {/* LinkedIn Icon with Configurable Validation */}
          <div className="tooltip-container">
            <a 
              href={linkedinConfigured ? socialLinks.linkedin : '#'} 
              onClick={(e) => !linkedinConfigured && e.preventDefault()}
              className="hero-social-icon" 
              aria-label="LinkedIn Profile"
              style={{ cursor: linkedinConfigured ? 'pointer' : 'not-allowed' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            {!linkedinConfigured && (
              <span className="tooltip-text">
                <strong>Configurable Placeholder</strong><br />
                Set actual LinkedIn URL inside src/data/portfolioData.js
              </span>
            )}
          </div>

          {/* Email Icon */}
          <a 
            href={socialLinks.email} 
            className="hero-social-icon" 
            aria-label="Send Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>

      <motion.div 
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="code-card">
          <div className="code-header">
            <div className="code-dots">
              <span className="dot-red"></span>
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
            </div>
            <span className="code-tab">developer.js</span>
          </div>
          <div className="code-body">
            <p><span className="code-keyword">const</span> <span className="code-variable">developer</span> = &#123;</p>
            <p style={{ paddingLeft: '20px' }}><span className="code-property">name</span>: <span className="code-string">"Meet Sheth"</span>,</p>
            <p style={{ paddingLeft: '20px' }}><span className="code-property">role</span>: <span className="code-string">"Full Stack Developer"</span>,</p>
            <p style={{ paddingLeft: '20px' }}><span className="code-property">education</span>: <span className="code-string">"M.Sc.(IT)"</span>,</p>
            <p style={{ paddingLeft: '20px' }}><span className="code-property">focus</span>: [</p>
            <p style={{ paddingLeft: '40px' }}><span className="code-string">"Full Stack Development"</span>,</p>
            <p style={{ paddingLeft: '40px' }}><span className="code-string">"Backend Development"</span>,</p>
            <p style={{ paddingLeft: '40px' }}><span className="code-string">"System Design"</span></p>
            <p style={{ paddingLeft: '20px' }}>]</p>
            <p>&#125;;</p>
            <br />
            <p className="code-comment">// Ready for internship & Placements</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
