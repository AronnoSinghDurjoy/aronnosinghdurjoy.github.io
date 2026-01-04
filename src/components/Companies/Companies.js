import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import TeletalkLogo from '../../assets/TeleTalk-Logo.png';
import './Companies.css';

const Companies = () => {
  const { isDark } = useTheme();

  const companies = [
    {
      id: 1,
      name: 'Teletalk Bangladesh Limited',
      logo: TeletalkLogo,
    },
  ];

  // Duplicate logos for seamless infinite scroll effect
  const duplicatedCompanies = [...companies, ...companies, ...companies];

  return (
    <section className={`companies-carousel ${isDark ? 'dark' : 'light'}`}>
      <div className="companies-carousel-container">
        <motion.div
          className="carousel-track"
          animate={{
            x: [0, -33.33 + '%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 15,
              ease: 'linear',
            },
          }}
        >
          {duplicatedCompanies.map((company, index) => (
            <div key={index} className="company-logo-item">
              <img src={company.logo} alt={company.name} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Companies;
