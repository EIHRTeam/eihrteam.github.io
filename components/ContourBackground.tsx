import React from 'react';

const ContourBackground: React.FC = React.memo(() => {
  return (
    <div className="fixed inset-0 z-0 opacity-10 pointer-events-none overflow-hidden mix-blend-multiply">
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="none"
      >
        <path
          d="M0 300C200 250 400 350 600 300C800 250 1000 150 1440 200V900H0V300Z"
          stroke="#000"
          strokeWidth="1.5"
        />
        <path
          d="M0 450C150 400 350 480 650 420C950 360 1150 300 1440 400V900H0V450Z"
          stroke="#000"
          strokeWidth="1.5"
        />
        <path
          d="M0 600C250 580 450 650 750 600C1050 550 1250 500 1440 600V900H0V600Z"
          stroke="#000"
          strokeWidth="1.5"
        />
         <path
          d="M0 750C300 700 500 800 850 750C1200 700 1350 650 1440 700V900H0V750Z"
          stroke="#000"
          strokeWidth="1.5"
        />
        {/* Abstract Loop */}
        <circle cx="1200" cy="200" r="100" stroke="#000" strokeWidth="1" strokeDasharray="10 10" />
        <circle cx="1200" cy="200" r="140" stroke="#000" strokeWidth="1" opacity="0.5" />
      </svg>
    </div>
  );
});

ContourBackground.displayName = 'ContourBackground';

export default ContourBackground;