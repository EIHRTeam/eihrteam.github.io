import React, { useState } from 'react';
import { LazyMotion, domAnimation, m, useScroll, useSpring } from 'framer-motion';
import ContourBackground from './components/ContourBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { TRANSLATIONS } from './i18n';
import { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>('zh');
  const t = TRANSLATIONS[lang];
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white text-black font-sans selection:bg-brand">
        {/* Scroll Progress Bar - using 'm' component for optimization */}
        <m.div
          className="fixed top-0 left-0 right-0 h-1 bg-brand z-50 origin-left"
          style={{ scaleX }}
        />

        <ContourBackground />
        
        <Hero 
          content={t.hero} 
          scrollToSection={scrollToSection} 
        />

        <Navbar 
          lang={lang} 
          setLang={setLang} 
          content={t.nav} 
          scrollToSection={scrollToSection} 
        />

        <About content={t.about} />
        
        <Projects content={t.projects} />
        
        <Blog content={t.blog} />
        
        <Contact content={t.contact} />

        <Footer 
          content={t.footer} 
          navLabels={t.nav}
          scrollToSection={scrollToSection}
        />
      </div>
    </LazyMotion>
  );
}

export default App;