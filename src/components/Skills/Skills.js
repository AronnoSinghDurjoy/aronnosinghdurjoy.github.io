import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaPython, FaHtml5, FaCss3Alt, 
  FaJs, FaGitAlt, FaAws, FaJava 
} from 'react-icons/fa';
import { 
  SiMysql, SiOracle, SiTableau, SiCplusplus, SiC,
  SiApache, SiMicrosoftsqlserver, SiCanva, SiFigma,
  SiAdobeillustrator, SiAdobexd, SiNetlify, SiGnubash
} from 'react-icons/si';
import { useTheme } from '../../context/ThemeContext';
import './Skills.css';

const Skills = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const skillCategories = [
    {
      category: 'Frontend & Web',
      skills: [
        { name: 'HTML5', icon: FaHtml5, level: 90, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, level: 88, color: '#1572B6' },
        { name: 'JavaScript', icon: FaJs, level: 85, color: '#F7DF1E' },
        { name: 'React', icon: FaReact, level: 85, color: '#61DAFB' },
      ],
    },
    {
      category: 'Backend & Programming',
      skills: [
        { name: 'C', icon: SiC, level: 80, color: '#A8B9CC' },
        { name: 'C++', icon: SiCplusplus, level: 78, color: '#00599C' },
        { name: 'Java', icon: FaJava, level: 78, color: '#007396' },
        { name: 'Python', icon: FaPython, level: 82, color: '#3776AB' },
        { name: 'Bash Script', icon: SiGnubash, level: 75, color: '#4EAA25' },
        { name: 'Apache Maven', icon: SiApache, level: 70, color: '#C71A36' },
      ],
    },
    {
      category: 'Database & Cloud',
      skills: [
        { name: 'MySQL', icon: SiMysql, level: 85, color: '#4479A1' },
        { name: 'Oracle', icon: SiOracle, level: 80, color: '#F80000' },
        { name: 'Oracle Developer', icon: SiOracle, level: 78, color: '#C74634' },
        { name: 'MS SQL Server', icon: SiMicrosoftsqlserver, level: 75, color: '#CC2927' },
        { name: 'AWS', icon: FaAws, level: 70, color: '#FF9900' },
      ],
    },
    {
      category: 'Tools & Design',
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 88, color: '#F05032' },
        { name: 'Tableau', icon: SiTableau, level: 75, color: '#E97627' },
        { name: 'Netlify', icon: SiNetlify, level: 85, color: '#00C7B7' },
        { name: 'Figma', icon: SiFigma, level: 70, color: '#F24E1E' },
        { name: 'Canva', icon: SiCanva, level: 80, color: '#00C4CC' },
        { name: 'Illustrator', icon: SiAdobeillustrator, level: 65, color: '#FF9A00' },
        { name: 'Adobe XD', icon: SiAdobexd, level: 70, color: '#FF61F6' },
      ],
    },
  ];

  return (
    <section id="skills" className={`skills ${isDark ? 'dark' : 'light'}`} ref={ref}>
      <div className="skills-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Tools and technologies I work with as a Software Engineer & Developer
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="skill-header">
                      <div className="skill-info">
                        <skill.icon 
                          className="skill-icon" 
                          style={{ color: isDark ? skill.color : skill.color }} 
                        />
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        style={{ 
                          background: `linear-gradient(135deg, ${skill.color} 0%, ${skill.color}dd 100%)` 
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
