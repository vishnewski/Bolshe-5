import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 py-10 text-center flex flex-col items-center gap-4">
      <p className="text-gray-500 font-mono text-sm">
        © 2024 Сообщество БОЛЬШЕ. All rights reserved.
      </p>
      <p className="text-white/40 font-mono text-xs uppercase tracking-widest hover:text-white transition-colors duration-300">
        Это все
      </p>
    </footer>
  );
};