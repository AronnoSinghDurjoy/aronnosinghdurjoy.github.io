import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import ImageUpload from './components/ImageUpload/ImageUpload';
import { ThemeProvider } from './context/ThemeContext';
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  const MainPortfolio = () => (
    <div className="App">
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
  );

  return (
    <ThemeProvider>
      <Router>
        <AnimatePresence mode="wait">
          {loading ? (
            <Loader key="loader" onLoadingComplete={handleLoadingComplete} />
          ) : (
            <Routes>
              <Route path="/" element={<MainPortfolio />} />
              <Route path="/admin/upload" element={<ImageUpload />} />
            </Routes>
          )}
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  );
}

export default App;
