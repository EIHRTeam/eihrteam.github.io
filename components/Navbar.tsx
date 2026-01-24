import React from 'react';
import { Zap } from 'lucide-react';
import LanguageSwitch from './LanguageSwitch';
import { Language, ContentData } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: ContentData['nav'];
  scrollToSection: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, content, scrollToSection }) => {
  const navItems = [
    { id: 'home', label: content.home },
    { id: 'projects', label: content.projects },
    { id: 'blog', label: content.blog },
    { id: 'contact', label: content.contact }
  ];

  return (
    <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-y border-black w-full transition-all">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex justify-between items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group flex-shrink-0" onClick={() => scrollToSection('home')}>
          <div className="w-8 h-8 bg-brand flex items-center justify-center border border-black rounded-sm group-hover:rotate-12 transition-transform">
            <Zap size={16} fill="black" />
          </div>
          <span className="font-bold tracking-tighter text-lg hidden sm:block">{content.logo_full}</span>
          <span className="font-bold tracking-tighter text-lg sm:hidden">{content.logo_short}</span>
        </div>

        {/* Right Side: Nav + Language */}
        <div className="flex items-center gap-4 md:gap-6 flex-grow justify-end">
          {/* Desktop Links */}
          <nav className="hidden md:flex gap-1 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 hover:bg-black hover:text-brand transition-colors font-sans uppercase text-sm font-bold whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu - Horizontal Scroll for safety */}
          <nav className="flex md:hidden gap-3 overflow-x-auto scrollbar-hide items-center">
            {[
              { id: 'projects', label: content.projects_short },
              { id: 'blog', label: content.blog_short },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-sans text-xs font-bold hover:text-brand bg-black text-white px-3 py-1.5 whitespace-nowrap flex-shrink-0"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language Switch */}
          <div className="pl-4 border-l border-gray-300 flex-shrink-0">
            <LanguageSwitch
              current={lang}
              onSelect={setLang}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;