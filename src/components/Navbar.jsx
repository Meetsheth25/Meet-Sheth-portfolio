import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { socialLinks, personalInfo } from '../data/portfolioData';
import { FiExternalLink, FiX, FiMenu } from 'react-icons/fi';
import '../styles/navbar.css';

const NAV_ITEMS = [
  { label: 'About',      id: 'about' },
  { label: 'Skills',     id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Education',  id: 'education' },
  { label: 'Contact',    id: 'contact' },
];

const ALL_SECTIONS = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];

const Navbar = () => {
  const [scrolled, setScrolled]           = useState(false);
  const [menuOpen, setMenuOpen]           = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  /* Scroll tracking */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const pos = window.scrollY + var_navHeight() + 32;
      for (const id of ALL_SECTIONS) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close menu on resize */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* Body scroll lock while menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const var_navHeight = () => 68;

  const scrollTo = useCallback((e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - var_navHeight(), behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          {/* Brand */}
          <a
            href="#home"
            className="nav-brand"
            onClick={(e) => scrollTo(e, 'home')}
            aria-label="Go to top"
          >
            <span className="nav-monogram" aria-hidden="true">MS</span>
            <span className="nav-name">{personalInfo.name}</span>
          </a>

          {/* Desktop links */}
          <ul className="nav-links" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link${activeSection === item.id ? ' nav-link--active' : ''}`}
                  onClick={(e) => scrollTo(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: Resume + Hamburger */}
          <div className="nav-right">
            <a
              href={socialLinks.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume"
              aria-label="View Resume (opens in new tab)"
            >
              Resume <FiExternalLink size={13} aria-hidden="true" />
            </a>

            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen
                ? <FiX size={20} aria-hidden="true" />
                : <FiMenu size={20} aria-hidden="true" />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <nav className="mobile-nav">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`mobile-link${activeSection === item.id ? ' mobile-link--active' : ''}`}
                  onClick={(e) => scrollTo(e, item.id)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 + 0.08, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="mobile-link-num" aria-hidden="true">0{i + 1}</span>
                  {item.label}
                </motion.a>
              ))}

              <motion.div
                className="mobile-resume-wrap"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.04 + 0.1, duration: 0.3 }}
              >
                <a
                  href={socialLinks.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-resume-btn"
                  onClick={() => setMenuOpen(false)}
                >
                  View Resume <FiExternalLink size={14} aria-hidden="true" />
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
