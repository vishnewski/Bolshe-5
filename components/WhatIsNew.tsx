import React from 'react';
import { ArrowDown } from 'lucide-react';

export const WhatIsNew: React.FC = () => {
  return (
    <section className="py-20 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-6 text-center px-4">
        <div className="h-20 w-[1px] bg-gradient-to-b from-transparent via-brand-neon to-transparent"></div>
        <h2 className="text-3xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
          Что нового?
        </h2>
        <ArrowDown className="w-10 h-10 text-brand-neon animate-bounce mt-4" />
      </div>
    </section>
  );
};