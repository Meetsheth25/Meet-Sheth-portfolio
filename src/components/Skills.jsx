import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { 
  FaCode, FaJava, FaJs, FaDatabase, FaPython, FaReact, 
  FaNodeJs, FaGitAlt, FaGithub, FaTerminal, FaFigma, 
  FaGoogle, FaCloud, FaCreditCard, FaServer, FaShareAlt
} from 'react-icons/fa';
import { 
  SiCplusplus, SiTailwindcss, SiPostgresql, SiMysql, 
  SiMongodb, SiSqlite, SiSocketdotio, SiPostman, SiVite
} from 'react-icons/si';
import '../styles/skills.css';

const iconMap = {
  "C++": <SiCplusplus style={{ color: '#00599C' }} />,
  "Java": <FaJava style={{ color: '#007396' }} />,
  "JavaScript": <FaJs style={{ color: '#F7DF1E' }} />,
  "SQL": <FaDatabase style={{ color: '#336791' }} />,
  "Python": <FaPython style={{ color: '#3776AB' }} />,
  "React.js": <FaReact style={{ color: '#61DAFB' }} />,
  "Vite": <SiVite style={{ color: '#646CFF' }} />,
  "Tailwind CSS": <SiTailwindcss style={{ color: '#06B6D4' }} />,
  "Node.js": <FaNodeJs style={{ color: '#339933' }} />,
  "Express.js": <FaServer style={{ color: '#000000' }} />,
  "React Router": <FaShareAlt style={{ color: '#CA4245' }} />,
  "Context API": <FaShareAlt style={{ color: '#61DAFB' }} />,
  "Socket.IO": <SiSocketdotio style={{ color: '#010101' }} />,
  "MongoDB": <SiMongodb style={{ color: '#47A248' }} />,
  "Mongoose": <FaDatabase style={{ color: '#880000' }} />,
  "MySQL": <SiMysql style={{ color: '#4479A1' }} />,
  "PostgreSQL": <SiPostgresql style={{ color: '#4169E1' }} />,
  "SQLite": <SiSqlite style={{ color: '#003B57' }} />,
  "Cloudinary": <FaCloud style={{ color: '#3448C5' }} />,
  "Razorpay API": <FaCreditCard style={{ color: '#0B409C' }} />,
  "Google OAuth 2.0": <FaGoogle style={{ color: '#4285F4' }} />,
  "Git": <FaGitAlt style={{ color: '#F05032' }} />,
  "GitHub": <FaGithub style={{ color: '#181717' }} />,
  "VS Code": <FaCode style={{ color: '#007ACC' }} />,
  "Postman": <SiPostman style={{ color: '#FF6C37' }} />,
  "Linux Shell": <FaTerminal style={{ color: '#4EAA25' }} />,
  "Figma": <FaFigma style={{ color: '#F24E1E' }} />
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref}>
      <div className="section-header">
        <span className="section-tag">Expertise</span>
        <h2 className="section-title">Technical <span>Skills</span></h2>
        <p className="section-subtitle">
          My developer stack and tools classified by core competency.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((cat, idx) => (
          <motion.div 
            key={idx} 
            className="skills-category-card"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 className="skills-category-title">
              {cat.category}
            </h3>
            <div className="skills-list">
              {cat.items.map((skill, sIdx) => (
                <span key={sIdx} className="skill-badge">
                  {iconMap[skill.name] || <FaCode />}
                  {skill.name}
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
