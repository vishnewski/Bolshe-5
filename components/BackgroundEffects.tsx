import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      {/* Top Left Blob */}
      <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-brand-neon/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
      
      {/* Bottom Right Blob */}
      <div className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow delay-1000" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
    </div>
  );
};