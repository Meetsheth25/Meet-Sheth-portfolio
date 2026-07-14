import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolioData';
import {
  FaJava, FaJs, FaDatabase, FaPython, FaReact,
  FaNodeJs, FaGitAlt, FaGithub, FaTerminal, FaFigma,
  FaGoogle, FaCloud, FaCreditCard, FaServer,
} from 'react-icons/fa';
import {
  SiCplusplus, SiTailwindcss, SiPostgresql, SiMysql,
  SiMongodb, SiSqlite, SiSocketdotio, SiPostman, SiVite,
} from 'react-icons/si';
import { TbRouter } from 'react-icons/tb';
import { MdOutlineHub } from 'react-icons/md';
import { FiCode } from 'react-icons/fi';
import '../styles/skills.css';

/* Map skill name → icon element */
const ICON_MAP = {
  'C++':              <SiCplusplus />,
  'Java':             <FaJava />,
  'JavaScript':       <FaJs />,
  'SQL':              <FaDatabase />,
  'Python':           <FaPython />,
  'React.js':         <FaReact />,
  'Vite':             <SiVite />,
  'Tailwind CSS':     <SiTailwindcss />,
  'Node.js':          <FaNodeJs />,
  'Express.js':       <FaServer />,
  'React Router':     <TbRouter />,
  'Context API':      <MdOutlineHub />,
  'Socket.IO':        <SiSocketdotio />,
  'MongoDB':          <SiMongodb />,
  'Mongoose':         <FaDatabase />,
  'MySQL':            <SiMysql />,
  'PostgreSQL':       <SiPostgresql />,
  'SQLite':           <SiSqlite />,
  'Cloudinary':       <FaCloud />,
  'Razorpay API':     <FaCreditCard />,
  'Google OAuth 2.0': <FaGoogle />,
  'Git':              <FaGitAlt />,
  'GitHub':           <FaGithub />,
  'VS Code':          <FiCode />,
  'Postman':          <SiPostman />,
  'Linux Shell':      <FaTerminal />,
  'Figma':            <FaFigma />,
};

/* Left-border accent per category row */
const ROW_ACCENTS = [
  'var(--accent)',   /* Languages  */
  'var(--green)',   /* Frameworks */
  'var(--indigo)',  /* Cloud/DB   */
  'var(--gold)',    /* Dev Tools  */
];

const ease = [0.16, 1, 0.3, 1];

const Skills = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref}>
      <span className="sec-overline">Expertise</span>
      <h2 className="sec-heading">
        Technical <span className="hl">Stack</span>
      </h2>

      <div className="skills-matrix" role="list">
        {skills.map((cat, idx) => (
          <motion.div
            key={idx}
            className="skill-row"
            style={{ '--row-accent': ROW_ACCENTS[idx] }}
            role="listitem"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.48, delay: idx * 0.1, ease }}
          >
            {/* Category label */}
            <div className="skill-row-head">
              <span className="skill-row-accent-bar" aria-hidden="true" />
              <h3 className="skill-row-label">{cat.category}</h3>
              <span className="skill-row-badge">{cat.items.length}</span>
            </div>

            {/* Chip grid */}
            <div className="skill-chips" role="list" aria-label={`${cat.category} skills`}>
              {cat.items.map((skill, si) => (
                <span key={si} className="skill-chip" role="listitem">
                  <span className="skill-chip-icon" aria-hidden="true">
                    {ICON_MAP[skill.name] ?? <FiCode />}
                  </span>
                  <span className="skill-chip-name">{skill.name}</span>
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
