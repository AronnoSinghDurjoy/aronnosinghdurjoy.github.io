import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Quotes.css';

const Quotes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const quotes = [
    {
      text: "The wound is the place where the Light enters you.",
      author: "Rumi"
    },
    {
      text: "Do not grieve. Anything you lose comes round in another form.",
      author: "Rumi"
    },
    {
      text: "محبت اپنا قصور تھا، تمہارا کوئی قصور نہ تھا (Love was my fault, you were not at fault)",
      author: "Jaun Elia"
    },
    {
      text: "خوشی اتنی بھی نہ ہو، کہ غم کو بھول جاؤ (Don't be so happy that you forget the sorrow)",
      author: "Jaun Elia"
    },
    {
      text: "The meaning of life is that it stops.",
      author: "Franz Kafka"
    },
    {
      text: "A man is a success if he gets up in the morning and gets to bed at night, and in between he does what he wants to do.",
      author: "Franz Kafka"
    },
    {
      text: "To live without Hope is to Cease to live.",
      author: "Fyodor Dostoevsky"
    },
    {
      text: "Pain and suffering are always inevitable for a large intelligence and a deep heart.",
      author: "Fyodor Dostoevsky"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 6000); // Change quote every 6 seconds

    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <section className="quotes-section">
      <div className="quotes-container">
        <motion.div
          className="quotes-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Words of Wisdom</h2>
          <p className="section-subtitle">Philosophical reflections from great minds</p>
        </motion.div>

        <div className="quotes-display">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="quote-card"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.6 }}
            >
              <div className="quote-icon">"</div>
              <p className="quote-text">{quotes[currentIndex].text}</p>
              <div className="quote-author">— {quotes[currentIndex].author}</div>
              
              <div className="quote-decoration">
                <div className="deco-line"></div>
                <div className="deco-dot"></div>
                <div className="deco-line"></div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="quote-dots">
            {quotes.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="quotes-bg">
          <div className="bg-orb orb-1"></div>
          <div className="bg-orb orb-2"></div>
          <div className="bg-orb orb-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
