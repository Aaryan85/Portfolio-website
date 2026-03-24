import React from "react";

const Glow = ({ position, size , gradient, opacity, delay }) => {
  return (
    <div
      className={`
        absolute ${position}
        ${size}
      
       max-w-125 max-h-150 
        rounded-full
        bg-linear-to-r ${gradient}
         sm:opacity-20 md: ${opacity}
        blur-[120px]
        animate-[pulse_6s_ease-in-out_infinite]
        ${delay}
        will-change-transform
        
        animate-[pulse_6s_ease-in-out_infinite]
      `}
    />
  );
};

const GlowBackground = ({ glows = [] }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {glows.map((glow, i) => (
        <Glow key={i} {...glow} />
      ))}
    </div>
  );
};

export default GlowBackground;