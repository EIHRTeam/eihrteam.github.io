import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`relative z-10 w-full px-6 py-20 md:px-12 md:py-32 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default Section;