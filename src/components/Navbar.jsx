import React, { useState, useEffect } from 'react';
import { socialLinks } from '../data/portfolioData';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiExternalLink } from 'react-icons/fi';
import '../styles/navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Dynamic Section Highlighting based on scroll
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPos = window.scrollY + 120; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      const offsetTop = el.offsetTop - 75; // navbar offset
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand" onClick={(e) => handleLinkClick(e, 'home')} style={{ cursor: 'pointer' }}>
        Meet Sheth
      </div>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
          >
            <a
              href={`#${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li className="nav-item">
          <a
            href={socialLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume-btn"
          >
            View Resume <FiExternalLink size={14} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
