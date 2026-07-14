import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education, coursework, interests } from '../data/portfolioData';
import { FiMapPin, FiAward } from 'react-icons/fi';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { TbBulb } from 'react-icons/tb';
import '../styles/education.css';

const ease = [0.16, 1, 0.3, 1];

const Education = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" ref={ref}>
      <span className="sec-overline">Academic</span>
      <h2 className="sec-heading">
        Education & <span className="hl">Interests</span>
      </h2>

      <div className="edu-layout">

        {/* ── Left: Academic timeline ─────────────── */}
        <div className="edu-timeline" role="list" aria-label="Education history">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="edu-entry"
              role="listitem"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.09, ease }}
            >
              <div className="edu-timeline-track" aria-hidden="true">
                <span className="edu-dot" />
                {index < education.length - 1 && <span className="edu-line" />}
              </div>

              <div className="edu-card">
                <div className="edu-card-top">
                  <div className="edu-card-head">
                    <span className="edu-duration">{edu.duration}</span>
                    <span className="edu-score">
                      <FiAward size={12} aria-hidden="true" />
                      {edu.score}
                    </span>
                  </div>
                  <h3 className="edu-institution">{edu.institution}</h3>
                  <p className="edu-program">{edu.program}</p>
                </div>
                <div className="edu-card-foot">
                  <span className="edu-location">
                    <FiMapPin size={12} aria-hidden="true" />
                    {edu.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Right: Coursework + Interests ──────── */}
        <div className="edu-sidebar">

          {/* Relevant Coursework */}
          <motion.div
            className="edu-sidebar-block"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease }}
          >
            <div className="edu-sidebar-header">
              <HiOutlineBookOpen size={16} aria-hidden="true" />
              <h3 className="edu-sidebar-title">Relevant Coursework</h3>
            </div>
            <ul className="edu-course-list" aria-label="Relevant coursework">
              {coursework.map((course, i) => (
                <li key={i} className="edu-course-item">
                  <span className="edu-course-bullet" aria-hidden="true" />
                  {course}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Areas of Interest */}
          <motion.div
            className="edu-sidebar-block"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease }}
          >
            <div className="edu-sidebar-header">
              <TbBulb size={16} aria-hidden="true" />
              <h3 className="edu-sidebar-title">Areas of Interest</h3>
            </div>
            <div className="edu-interests-grid" aria-label="Areas of interest">
              {interests.map((interest, i) => (
                <span key={i} className="edu-interest-tag">
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;
