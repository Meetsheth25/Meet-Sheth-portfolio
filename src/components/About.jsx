import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import '../styles/about.css';

const ease = [0.16, 1, 0.3, 1];

/* Accent colors per tile — indexes match highlights array */
const TILE_ACCENTS = ['var(--accent)', 'var(--gold)', 'var(--indigo)', 'var(--green)'];

const About = () => {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="about-section">
      <div className="about-grid">

        {/* ── Left column: heading + description ───────────── */}
        <div className="about-left">
          <motion.span
            className="sec-overline"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease }}
          >
            Profile
          </motion.span>

          <motion.h2
            className="about-heading"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.06, ease }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="about-body"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12, ease }}
          >
            {personalInfo.aboutDescription}
          </motion.p>
        </div>

        {/* ── Right column: capability tiles ───────────────── */}
        <div className="about-tiles" aria-label="Development capabilities">
          {personalInfo.highlights.map((h, i) => (
            <motion.div
              key={i}
              className="about-tile"
              style={{ '--tile-accent': TILE_ACCENTS[i] }}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.14 + i * 0.08, ease }}
            >
              <span className="about-tile-num" aria-hidden="true">0{i + 1}</span>
              <h3 className="about-tile-title">{h.title}</h3>
              <p className="about-tile-desc">{h.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
