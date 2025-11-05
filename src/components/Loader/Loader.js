import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  
  const kafkaQuotes = [
    "The meaning of life is that it stops.",
    "A book must be the axe for the frozen sea within us.",
    "Start with what is right rather than what is acceptable.",
    "Paths are made by walking.",
    "I am free and that is why I am lost."
  ];
  
  const [currentQuote] = useState(kafkaQuotes[Math.floor(Math.random() * kafkaQuotes.length)]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => {
      clearInterval(interval);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="futuristic-loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Grid Background */}
      <div className="grid-background">
        <div className="grid-lines horizontal"></div>
        <div className="grid-lines vertical"></div>
        <div className="grid-glow"></div>
      </div>

      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="loader-content">
        {/* Holographic Logo */}
        <motion.div
          className="holographic-logo"
          initial={{ scale: 0, rotateY: 180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <motion.div
            className="logo-text"
            animate={{
              textShadow: [
                "0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(16, 185, 129, 0.6)",
                "0 0 40px rgba(16, 185, 129, 0.8), 0 0 60px rgba(6, 182, 212, 0.6)",
                "0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(16, 185, 129, 0.6)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Aro
          </motion.div>
          <div className="logo-underline"></div>
        </motion.div>

        {/* 3D Rotating Cube */}
        <div className="cube-container">
          <motion.div
            className="cube"
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face right"></div>
            <div className="cube-face left"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </motion.div>
        </div>

        {/* Loading Status */}
        <motion.div
          className="loading-status"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="status-text">Initializing System</h2>
          <div className="status-dots">
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
            >.</motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            >.</motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
            >.</motion.span>
          </div>
        </motion.div>

        {/* Progress Section */}
        <div className="progress-section">
          <div className="progress-bar-container">
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              >
                <div className="progress-glow"></div>
                <div className="progress-particle"></div>
              </motion.div>
            </div>
            <div className="progress-markers">
              {[0, 25, 50, 75, 100].map((mark) => (
                <div
                  key={mark}
                  className={`marker ${progress >= mark ? 'active' : ''}`}
                  style={{ left: `${mark}%` }}
                >
                  <div className="marker-line"></div>
                  <span className="marker-label">{mark}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Large Percentage Display */}
          <motion.div
            className="percentage-display"
            key={progress}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <span className="percentage-number">{progress}</span>
            <span className="percentage-symbol">%</span>
          </motion.div>
        </div>

        {/* Loading Messages */}
        <motion.div
          className="loading-messages"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.p
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 4,
            }}
          >
            {progress < 30 && "Loading assets..."}
            {progress >= 30 && progress < 60 && "Compiling components..."}
            {progress >= 60 && progress < 90 && "Rendering interface..."}
            {progress >= 90 && "Almost ready..."}
          </motion.p>
        </motion.div>

        {/* Kafka Quote */}
        <motion.div
          className="kafka-quote"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="quote-text">"{currentQuote}"</p>
          <p className="quote-author">— Franz Kafka</p>
        </motion.div>
      </div>

      {/* Code Rain Effect */}
      <div className="code-rain">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="code-column"
            style={{ left: `${(i * 100) / 15}%` }}
            animate={{
              y: [-100, window.innerHeight + 100],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          >
            {['{', '}', '(', ')', '[', ']', '<', '>', '/', '\\'][Math.floor(Math.random() * 10)]}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Loader;