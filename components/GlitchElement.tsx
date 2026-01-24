import React from 'react';
import { m } from 'framer-motion';

interface GlitchElementProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const GlitchElement: React.FC<GlitchElementProps> = ({ children, delay = 0, className = '' }) => {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: [0, 1, 0, 1],
        y: 0
      }}
      transition={{
        duration: 0.4,
        delay: delay,
        times: [0, 0.1, 0.2, 1],
        ease: "linear"
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </m.div>
  );
};

export default GlitchElement;