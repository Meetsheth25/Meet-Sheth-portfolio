import React from 'react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Brand */}
        <div className="footer-brand">
          <span className="footer-monogram" aria-hidden="true">MS</span>
          <span className="footer-name">{personalInfo.name}</span>
        </div>

        {/* Credit + copyright */}
        <p className="footer-copy">
          Designed &amp; built by {personalInfo.name} &mdash; &copy; {year}
        </p>

        {/* Social links */}
        <nav className="footer-socials" aria-label="Social links">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="GitHub Profile"
          >
            <FaGithub aria-hidden="true" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
          <a
            href={socialLinks.email}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="Send Email"
          >
            <FaEnvelope aria-hidden="true" />
          </a>
        </nav>

      </div>
    </footer>
  );
};

export default Footer;
