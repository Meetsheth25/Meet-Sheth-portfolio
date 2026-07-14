import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../data/portfolioData';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { MdWorkOutline } from 'react-icons/md';
import '../styles/experience.css';

const ease = [0.16, 1, 0.3, 1];

const Experience = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={ref}>
      <span className="sec-overline">Career</span>
      <h2 className="sec-heading">
        Work <span className="hl">Experience</span>
      </h2>

      <div className="exp-list">
        {experience.map((exp, index) => (
          <motion.article
            key={index}
            className="exp-record"
            aria-label={`${exp.role} at ${exp.company}`}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.1, ease }}
          >
            {/* Decorative index number */}
            <span className="exp-bg-num" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* Top: role + company */}
            <div className="exp-top">
              <div className="exp-company-row">
                <span className="exp-company-icon" aria-hidden="true">
                  <MdWorkOutline />
                </span>
                <span className="exp-company">{exp.company}</span>
              </div>
              <h3 className="exp-role">{exp.role}</h3>
            </div>

            {/* Meta: duration + location */}
            <div className="exp-meta">
              <span className="exp-meta-item">
                <FiCalendar size={13} aria-hidden="true" />
                {exp.duration}
              </span>
              <span className="exp-meta-sep" aria-hidden="true" />
              <span className="exp-meta-item">
                <FiMapPin size={13} aria-hidden="true" />
                {exp.location}
              </span>
            </div>

            {/* Divider */}
            <div className="exp-divider" aria-hidden="true" />

            {/* Responsibilities */}
            <ul className="exp-responsibilities" aria-label="Responsibilities">
              {exp.responsibilities.map((item, ri) => (
                <li key={ri} className="exp-responsibility-item">
                  <span className="exp-bullet" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
