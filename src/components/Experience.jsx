import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../data/portfolioData';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import '../styles/experience.css';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref}>
      <div className="section-header">
        <span className="section-tag">Career</span>
        <h2 className="section-title">Work <span>Experience</span></h2>
        <p className="section-subtitle">
          My professional roles, internship timeline, and core responsibilities.
        </p>
      </div>

      <div className="timeline">
        {experience.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-marker"></div>
            <motion.div 
              className="timeline-content"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <span className="timeline-company">{exp.company}</span>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-date">
                    <FiCalendar /> {exp.duration}
                  </span>
                  <span className="timeline-location">
                    <FiMapPin /> {exp.location}
                  </span>
                </div>
              </div>
              <ul className="timeline-list">
                {exp.responsibilities.map((resp, rIndex) => (
                  <li key={rIndex}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
