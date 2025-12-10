import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaLaptopCode, FaRocket, FaHeart } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import './About.css';

const About = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const stats = [
    { icon: FaCode, number: '20+', label: 'Projects Completed' },
    { icon: FaLaptopCode, number: '1+', label: 'Year Experience' },
    { icon: FaRocket, number: '10+', label: 'Happy Clients' },
    { icon: FaHeart, number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className={`about ${isDark ? 'dark' : 'light'}`} ref={ref}>
      <div className="about-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Hello! I'm Arnop Singh Durjoy (Aronno)</h3>
            <p>
              I'm a passionate <span className="highlight">Software Engineer & Developer</span> with 1 year of 
              professional experience building modern web applications and BI solutions. My journey began with 
              teaching and evolved into full-stack development and business intelligence.
            </p>
            <p>
              I specialize in building exceptional digital experiences, creating data-driven solutions, and 
              automating business processes. From Tableau dashboards to web portals, I bring technical 
              expertise and creative problem-solving to every project.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, and sharing knowledge with the developer community.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <span>Problem Solver</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💡</span>
                <span>Creative Thinker</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <span>Quick Learner</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">👥</span>
                <span>Team Player</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="stat-icon" />
                <h4>{stat.number}</h4>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
