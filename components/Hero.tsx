import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-[50vh] flex flex-col justify-center items-center text-center pt-20 pb-10 overflow-hidden">
      <div className="relative mb-6 w-full max-w-4xl px-4">
        <span className="absolute -top-8 right-0 sm:-right-2 md:-top-6 md:-right-10 rotate-12 bg-brand-neon text-brand-dark px-3 py-1 md:px-4 md:py-1 font-display font-bold text-xs md:text-lg rounded-sm shadow-[0_0_20px_rgba(204,255,0,0.5)] transform hover:scale-110 transition-transform duration-300 z-20">
          SEASON 2
        </span>
        <h2 className="text-xs md:text-2xl font-sans tracking-[0.2em] text-gray-400 uppercase mb-2">
          Сообщество
        </h2>
        <h1 className="text-4xl sm:text-7xl md:text-9xl font-display font-black text-white relative z-10">
          БОЛЬШЕ
        </h1>
        {/* Text Stroke Effect for depth */}
        <h1 className="text-4xl sm:text-7xl md:text-9xl font-display font-black text-transparent stroke-white stroke-2 absolute top-1 left-1 right-1 opacity-20 -z-10 pointer-events-none select-none mx-auto" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>
          БОЛЬШЕ
        </h1>
      </div>
    </section>
  );
};