import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './ParticlesBackground.css';

const ParticlesBackground = () => {
  const { isDark } = useTheme();
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleCount = 50;
    const newParticles = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * 4 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div className={`particles-background ${isDark ? 'dark' : 'light'}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
