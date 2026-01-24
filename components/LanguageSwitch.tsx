import React, { useState, useRef, useEffect } from 'react';
import { Languages } from 'lucide-react';
import { Language } from '../types';

interface Props {
  current: Language;
  onSelect: (lang: Language) => void;
  className?: string;
}

const LanguageSwitch: React.FC<Props> = ({ current, onSelect, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpwards, setIsUpwards] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => {
    if (!isOpen && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const minSpaceRequired = 150;
      setIsUpwards(spaceBelow < minSpaceRequired);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <button
        onClick={handleToggle}
        className={`flex items-center justify-center p-2 rounded-sm transition-all border border-transparent ${isOpen ? 'bg-black text-white border-black' : 'hover:bg-gray-100 hover:border-gray-200'}`}
        aria-label="Switch Language"
        aria-haspopup="true"
        aria-expanded={isOpen}
        title="Switch Language"
      >
        <Languages size={20} />
      </button>

      {isOpen && (
        <div 
          className={`absolute right-0 w-32 bg-white border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-50 flex flex-col py-1 animate-in fade-in zoom-in-95 duration-100 ${
            isUpwards ? 'bottom-full mb-2' : 'top-full mt-2'
          }`}
          role="menu"
        >
          <button
            onClick={() => { onSelect('zh'); setIsOpen(false); }}
            className={`px-4 py-2 text-left font-mono text-sm hover:bg-gray-100 transition-colors flex items-center justify-between ${current === 'zh' ? 'font-bold bg-subtle' : ''}`}
            role="menuitem"
          >
            <span>中文</span>
            {current === 'zh' && <span className="w-1.5 h-1.5 bg-brand rounded-full"></span>}
          </button>
          <button
            onClick={() => { onSelect('en'); setIsOpen(false); }}
            className={`px-4 py-2 text-left font-mono text-sm hover:bg-gray-100 transition-colors flex items-center justify-between ${current === 'en' ? 'font-bold bg-subtle' : ''}`}
            role="menuitem"
          >
            <span>English</span>
            {current === 'en' && <span className="w-1.5 h-1.5 bg-brand rounded-full"></span>}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitch;