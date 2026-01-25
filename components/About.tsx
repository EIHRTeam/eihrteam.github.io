import React from 'react';
import GlitchElement from './GlitchElement';
import Section from './Section';
import { ContentData } from '../types';
import colorBar from '../assets/color-bar.1f0aa038.png';

interface AboutProps {
  content: ContentData['about'];
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <Section id="about" className="pt-20">
      <GlitchElement>
        <div className="flex gap-16">
           {/* Vertical Color Bar */}
           <div className="hidden md:block w-8 flex-shrink-0 relative">
             <img 
               src={colorBar} 
               alt="" 
               className="absolute top-0 left-1/2 -translate-x-1/2 h-full min-w-[16px] w-auto max-w-none object-cover"
             />
           </div>
           
           <div className="grid md:grid-cols-2 gap-8 pl-4 md:pl-0 border-l-4 border-black md:border-none">
            {/* Mobile shows border-l, Desktop shows image bar */}
             <div>
              <h2 className="text-3xl font-bold flex items-center gap-4">
                <span className="w-4 h-4 bg-brand rounded-none rotate-45"></span>
                {content.title}
              </h2>
             </div>
             <div>
              <p className="text-lg text-gray-800 leading-relaxed font-medium">
                {content.description}
              </p>
             </div>
           </div>
        </div>
      </GlitchElement>
    </Section>
  );
};

export default About;