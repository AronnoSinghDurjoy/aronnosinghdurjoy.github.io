import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaDownload, FaArrowRight } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from '../../context/ThemeContext';
import { getProtectedEmail } from '../../config/email.config';
import profileImage from '../../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
  const { isDark } = useTheme();

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="home" className={`hero ${isDark ? 'dark' : 'light'}`}>
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.h2 className="hero-greeting" variants={itemVariants}>
            Hello, I'm
          </motion.h2>
          
          <motion.h1 className="hero-name" variants={itemVariants}>
            Arnop Singh Durjoy (Aronno)
          </motion.h1>

          <motion.div className="hero-typing" variants={itemVariants}>
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2000,
                'Full Stack Developer',
                2000,
                'Problem Solver',
                2000,
                'Code Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>
            Software Engineer & Developer with 1 year of experience building modern web applications.
            Passionate about clean code, innovative solutions, and continuous learning.
          </motion.p>

          <motion.div className="hero-stats-inline" variants={itemVariants}>
            <div className="stat-inline">
              <span className="stat-number">1+</span>
              <span className="stat-label">Year Experience</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-inline">
              <span className="stat-number">20+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-inline">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </motion.div>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me <FaArrowRight />
            </motion.a>
            <motion.a
              href="#projects"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.a>
            <motion.a
              href="/Arnop-Singh-Durjoy-2025.pdf"
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              download
            >
              <FaDownload /> Download CV
            </motion.a>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            {[
              { icon: FaGithub, link: 'https://github.com/AronnoSinghDurjoy' },
              { icon: FaLinkedin, link: 'https://www.linkedin.com/in/arnopsingharonno-464194213/' },
              { icon: FaFacebook, link: 'https://www.facebook.com/ArnopSinghAronno' },
              { icon: FaEnvelope, link: `mailto:${getProtectedEmail()}` },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          variants={itemVariants}
        >
          <div className="image-wrapper">
            <motion.div 
              className="image-container"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="image-border-animation"></div>
              <img src={profileImage} alt="Arnop Singh Durjoy" className="profile-image" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
