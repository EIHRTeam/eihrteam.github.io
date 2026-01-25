import React from 'react';
import { Mail, Tv, BookHeart, Github } from 'lucide-react';
import GlitchElement from './GlitchElement';
import Section from './Section';
import SklandIcon from './SklandIcon';
import { ContentData } from '../types';

interface ContactProps {
  content: ContentData['contact'];
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  return (
    <Section id="contact" className="mb-0 pb-20">
      <div className="bg-black text-white rounded-t-3xl rounded-b-none p-12 md:p-24 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand opacity-10 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-16">
          <GlitchElement>
            <h2 className="text-5xl font-bold mb-8">{content.title}</h2>
            <p className="text-gray-400 max-w-sm mb-8">
              {content.description}
            </p>
            <a href={`mailto:${content.email}`} className="inline-flex items-center gap-2 text-brand font-mono hover:underline text-lg">
              <Mail size={20} /> {content.email}
            </a>
          </GlitchElement>

          <GlitchElement delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Tv, label: "BILIBILI", color: "hover:bg-pink-400", href: content.socialLinks.bilibili },
                { icon: BookHeart, label: "小红书", color: "hover:bg-red-500", href: content.socialLinks.xiaohongshu },
                { icon: SklandIcon, label: "森空岛", color: "hover:bg-cyan-500", href: content.socialLinks.skland },
                { icon: Github, label: "GITHUB", color: "hover:bg-gray-800", href: content.socialLinks.github },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href || "#"} 
                  target={social.href ? "_blank" : undefined}
                  rel={social.href ? "noopener noreferrer" : undefined}
                  className={`flex flex-col items-center justify-center p-6 bg-white/10 hover:bg-white hover:text-black border border-white/20 transition-all duration-300 rounded-xl group`}
                >
                  <div className="mb-2 group-hover:scale-110 transition-transform">
                    {/* Render icon component dynamically */}
                    <social.icon size={24} className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono uppercase">{social.label}</span>
                </a>
              ))}
            </div>
          </GlitchElement>
        </div>
      </div>
    </Section>
  );
};

export default Contact;