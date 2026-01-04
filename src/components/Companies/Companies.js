import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';
import { FaBriefcase } from 'react-icons/fa';
import TeletalkLogo from '../../assets/TeleTalk-Logo.png';
import './Companies.css';

const Companies = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const companies = [
    {
      id: 1,
      name: 'Teletalk Bangladesh Limited',
      logo: TeletalkLogo,
      description: 'Developed Inventory & Asset Management Software',
      period: 'October 2024 - December 2025',
      role: 'Software Business Intelligence Developer',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className={`companies ${isDark ? 'dark' : 'light'}`} id="companies">
      <div className="companies-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <FaBriefcase className="section-icon" />
          <h2>Companies I've Worked With</h2>
          <div className="section-divider"></div>
        </motion.div>

        <motion.div
          ref={ref}
          className="companies-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {companies.map((company) => (
            <motion.div
              key={company.id}
              className="company-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="company-logo-wrapper">
                <img src={company.logo} alt={company.name} className="company-logo" />
                <div className="company-overlay">
                  <div className="company-details">
                    <h3>{company.name}</h3>
                    <p className="company-role">{company.role}</p>
                    <p className="company-period">{company.period}</p>
                    <p className="company-description">{company.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Companies;
