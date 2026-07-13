import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education, coursework, interests } from '../data/portfolioData';
import { FiBookOpen, FiStar, FiMapPin } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';
import '../styles/education.css';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref}>
      <div className="section-header">
        <span className="section-tag">Learning</span>
        <h2 className="section-title">Education & <span>Interests</span></h2>
        <p className="section-subtitle">
          My academic timelines, relevant coursework, and professional focus areas.
        </p>
      </div>

      <div className="education-wrapper">
        {/* Education Timeline */}
        <div className="edu-timeline-container">
          <div className="edu-timeline">
            {education.map((edu, index) => (
              <div className="edu-item" key={index}>
                <div className="edu-marker"></div>
                <motion.div 
                  className="edu-card"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="edu-header">
                    <h3 className="edu-institution">{edu.institution}</h3>
                    <span className="edu-duration">{edu.duration}</span>
                  </div>
                  <div className="edu-program">{edu.program}</div>
                  <div className="edu-meta">
                    <span className="edu-score">{edu.score}</span>
                    <span className="edu-location"><FiMapPin /> {edu.location}</span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar: Coursework & Areas of Interest */}
        <div className="edu-sidebar">
          {/* Relevant Coursework */}
          <motion.div 
            className="sidebar-section"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="sidebar-title">
              <FiBookOpen /> Relevant Coursework
            </h3>
            <div className="coursework-list">
              {coursework.map((course, idx) => (
                <div className="coursework-item" key={idx}>
                  <span className="coursework-bullet"></span>
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Areas of Interest */}
          <motion.div 
            className="sidebar-section"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="sidebar-title">
              <FiStar /> Areas of Interest
            </h3>
            <div className="interests-grid">
              {interests.map((interest, idx) => (
                <div className="interest-badge" key={idx}>
                  <FaGraduationCap className="interest-icon" />
                  <span>{interest}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
