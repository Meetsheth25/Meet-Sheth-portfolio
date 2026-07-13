import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
import '../styles/about.css';

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={containerRef}>
      <div className="section-header">
        <span className="section-tag">Profile</span>
        <h2 className="section-title">About <span>Me</span></h2>
        <p className="section-subtitle">
          A brief introduction to my professional background and development focus.
        </p>
      </div>

      <motion.div 
        className="about-content-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="about-text">
          <p>{personalInfo.aboutDescription}</p>
        </div>

        <div className="about-highlights">
          {personalInfo.highlights.map((highlight, index) => (
            <motion.div 
              key={index} 
              className="highlight-card"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="highlight-title">{highlight.title}</h3>
              <p className="highlight-desc">{highlight.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
