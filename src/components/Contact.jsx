import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo, socialLinks } from '../data/portfolioData';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiArrowRight } from 'react-icons/fi';
import '../styles/contact.css';

const ease = [0.16, 1, 0.3, 1];

const CONTACT_CARDS = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: personalInfo.email,
    href: socialLinks.email,
    external: true,
    accent: 'var(--accent)',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'Meetsheth25',
    href: socialLinks.github,
    external: true,
    accent: 'var(--text-secondary)',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'meet-sheth25',
    href: socialLinks.linkedin,
    external: true,
    accent: '#0A66C2',
  },
];

const Contact = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" ref={ref} className="contact-section">
      {/* Ambient glow behind heading */}
      <div className="contact-glow" aria-hidden="true" />

      <motion.div
        className="contact-inner"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease }}
      >
        <span className="sec-overline">Reach Out</span>

        <h2 className="contact-heading">
          Let's <span className="hl">Connect</span>
        </h2>
        <p className="contact-subtext">
          Open to full-stack and backend engineering opportunities, internships, and collaboration.
          Feel free to reach out.
        </p>

        {/* Contact method cards */}
        <div className="contact-cards" role="list" aria-label="Contact methods">
          {CONTACT_CARDS.map((card, i) => (
            <motion.a
              key={i}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              style={{ '--card-accent': card.accent }}
              role="listitem"
              aria-label={`Contact via ${card.label}`}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.12 + i * 0.08, ease }}
            >
              <span className="contact-card-icon" aria-hidden="true">
                <card.icon />
              </span>
              <span className="contact-card-label">{card.label}</span>
              <span className="contact-card-value">{card.value}</span>
            </motion.a>
          ))}
        </div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.4, ease }}
        >
          <a
            href={socialLinks.email}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-cta"
            aria-label="Send an email"
          >
            <FiMail aria-hidden="true" />
            Send Me an Email
            <FiArrowRight aria-hidden="true" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
