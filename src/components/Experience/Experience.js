import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';
import './Experience.css';

const Experience = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const experiences = [
    {
      title: 'Jr. Software Engineer',
      company: 'Teletalk BI',
      period: 'Nov 2024 - Present',
      description: [
        'Working with Tableau for BI maintenance and reporting',
        'Processing and managing data pipelines',
        'Portal development and deployment',
        'Automation of business processes and workflows',
        'Database management and optimization',
      ],
      technologies: ['Tableau', 'Python', 'SQL', 'Oracle', 'Automation', 'Web Development'],
    },
    {
      title: 'ICT Teacher',
      company: 'Oracle Coaching Center - HSC (Higher Secondary School Certificate)',
      period: 'Mar 2024 - Oct 2024',
      description: [
        'Taught HSC level ICT curriculum to college students at Oracle Coaching Center',
        'Prepared students for board exams with comprehensive ICT training',
        'Covered all syllabus topics including programming, database, and networking',
        'Designed comprehensive lesson plans aligned with HSC ICT syllabus',
        'Conducted practical lab sessions and hands-on computer training',
        'Mentored students in exam preparation and problem-solving techniques',
      ],
      technologies: ['ICT Syllabus', 'Programming', 'Database Basics', 'Networking', 'Teaching', 'HSC Board Exam'],
    },
  ];

  return (
    <section id="experience" className={`experience ${isDark ? 'dark' : 'light'}`} ref={ref}>
      <div className="experience-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Work Experience</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            My professional journey and career milestones
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-content">
                <motion.div
                  className="experience-card"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">{exp.title}</h3>
                      <h4 className="experience-company">{exp.company}</h4>
                    </div>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                  
                  <ul className="experience-description">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  <div className="experience-tech">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
              <div className="timeline-marker">
                <div className="marker-circle"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
