
import React from 'react';

interface WavyBackgroundProps {
  children: React.ReactNode;
}

const WavyBackground: React.FC<WavyBackgroundProps> = ({ children }) => {
  return (
    <div className="relative">
      {children}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="relative h-32 overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 1440 320" 
              className="w-full"
              preserveAspectRatio="none"
            >
              <path 
                fill="#1A3140" 
                fillOpacity="1" 
                d="M0,128L80,144C160,160,320,192,480,197.3C640,203,800,181,960,165.3C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WavyBackground;
