import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Quotes from './components/Quotes/Quotes';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Loader from './components/Loader/Loader';
import { ThemeProvider } from './context/ThemeContext';
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onLoadingComplete={handleLoadingComplete} />
        ) : (
          <div className="App" key="app">
            <AnimatedBackground />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Quotes />
            <Contact />
            <Footer />
            <ScrollToTop />
          </div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
