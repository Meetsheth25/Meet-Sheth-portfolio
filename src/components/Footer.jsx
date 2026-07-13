import React from 'react';
import { socialLinks } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const githubConfigured = socialLinks.github && socialLinks.github.trim() !== '';
  const linkedinConfigured = socialLinks.linkedin && socialLinks.linkedin.trim() !== '';

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          Meet Sheth
        </div>

        <div className="footer-credit">
          Designed & Developed by Meet Sheth
        </div>

        <div className="footer-socials">
          {/* GitHub */}
          <div className="tooltip-container">
            <a
              href={githubConfigured ? socialLinks.github : '#'}
              onClick={(e) => !githubConfigured && e.preventDefault()}
              className={`footer-social-link ${!githubConfigured ? 'disabled' : ''}`}
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            {!githubConfigured && (
              <span className="tooltip-text">
                GitHub URL Configurable
              </span>
            )}
          </div>

          {/* LinkedIn */}
          <div className="tooltip-container">
            <a
              href={linkedinConfigured ? socialLinks.linkedin : '#'}
              onClick={(e) => !linkedinConfigured && e.preventDefault()}
              className={`footer-social-link ${!linkedinConfigured ? 'disabled' : ''}`}
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            {!linkedinConfigured && (
              <span className="tooltip-text">
                LinkedIn URL Configurable
              </span>
            )}
          </div>

          {/* Email */}
          <a
            href={socialLinks.email}
            className="footer-social-link"
            aria-label="Email Address"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="footer-copyright">
          &copy; {currentYear} Meet Sheth. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
