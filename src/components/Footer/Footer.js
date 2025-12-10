import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaHeart } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { getProtectedEmail } from '../../config/email.config';
import './Footer.css';

const Footer = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, link: 'https://github.com/AronnoSinghDurjoy', label: 'GitHub' },
    { icon: FaLinkedin, link: 'https://www.linkedin.com/in/arnopsingharonno-464194213/', label: 'LinkedIn' },
    { icon: FaFacebook, link: 'https://www.facebook.com/ArnopSinghAronno', label: 'Facebook' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className={`footer ${isDark ? 'dark' : 'light'}`}>
      <div className="footer-container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-logo">Aro</h3>
            <p className="footer-description">
              Building digital experiences that make a difference. 
              Let's create something amazing together!
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-title">Get In Touch</h4>
            <div className="footer-contact">
              <p>
                <strong>Email:</strong><br />
                {getProtectedEmail()}
              </p>
              <p>
                <strong>Location:</strong><br />
                Dhaka, Bangladesh
              </p>
            </div>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Arnop Singh Durjoy (Aronno). All rights reserved.
          </p>
          <p className="footer-made">
            Made with <FaHeart className="heart-icon" /> and lots of coffee
          </p>
        </div>
      </div>

      <div className="footer-bg-animation">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </footer>
  );
};

export default Footer;
