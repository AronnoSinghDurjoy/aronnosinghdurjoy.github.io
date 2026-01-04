import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';
import { FaAward } from 'react-icons/fa';
import Certificate1 from '../../assets/Certificate1.jpg';
import Certificate2 from '../../assets/Certificate2.jpg';
import './Certificates.css';

const Certificates = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const certificates = [
    {
      id: 1,
      title: 'Professional Experience Certificate',
      image: Certificate1,
      description: 'Teletalk Bangladesh Limited - Inventory Assessment Software',
    },
    {
      id: 2,
      title: 'Work Reference Certificate',
      image: Certificate2,
      description: 'Teletalk Bangladesh Limited - BI Operations',
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
    <section className={`certificates ${isDark ? 'dark' : 'light'}`} id="certificates">
      <div className="certificates-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <FaAward className="section-icon" />
          <h2>Certificates</h2>
          <div className="section-divider"></div>
        </motion.div>

        <motion.div
          ref={ref}
          className="certificates-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              className="certificate-card"
              variants={itemVariants}
              whileHover={{ scale: 1.03, translateY: -10, rotateY: 5 }}
              transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
            >
              <div className="certificate-image-wrapper">
                <img src={cert.image} alt={cert.title} className="certificate-image" />
                <div className="certificate-shine"></div>
              </div>
              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
