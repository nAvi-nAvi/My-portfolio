import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 border-t border-white/10 relative z-20">
      <div className="container mx-auto text-center text-white/60">
        <p className="hover:text-white/80 transition-colors duration-300">
          &copy; 2024 Navaneedha Krishnan - Full Stack Developer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}; 