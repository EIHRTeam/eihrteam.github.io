import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import { ContentData, Language } from '../types';

interface HomeProps {
  content: ContentData;
  scrollToSection: (id: string) => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

const Home: React.FC<HomeProps> = ({ content, scrollToSection, lang, setLang }) => {
  return (
    <main>
        <Hero 
          content={content.hero} 
          scrollToSection={scrollToSection} 
        />
        <Navbar 
          lang={lang} 
          setLang={setLang} 
          content={content.nav} 
          scrollToSection={scrollToSection} 
        />
        <About content={content.about} />
        <Projects content={content.projects} />
        <Blog content={content.blog} />
        <Contact content={content.contact} />
    </main>
  );
};

export default Home;