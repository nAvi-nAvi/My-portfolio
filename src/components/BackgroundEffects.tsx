import React from 'react';
import { useMatrixAnimation } from '@/hooks/useMatrixAnimation';
import { useFloatingElements } from '@/hooks/useFloatingElements';
import type { MatrixCode, FloatingElement } from '@/types';

interface BackgroundEffectsProps {
  section?: 'home' | 'other';
}

export const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ section = 'home' }) => {
  const { matrixCode } = useMatrixAnimation();
  const { floatingElements } = useFloatingElements();

  if (section === 'home') {
    return (
      <>
        {/* Matrix animation only for home section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {matrixCode.map((code: MatrixCode) => (
            <div
              key={code.id}
              className="matrix-rain animate-matrix absolute text-green-400/20"
              style={{
                left: `${code.position.x}%`,
                top: `${code.position.y}%`,
                animationDelay: `${code.animationDelay}s`,
                fontSize: `${Math.random() * 8 + 10}px`
              }}
            >
              {code.content}
            </div>
          ))}
        </div>

        {/* Floating sparkles for home section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              <div className={`w-3 h-3 rounded-full ${
                i % 4 === 0 ? 'bg-blue-400/40' : 
                i % 4 === 1 ? 'bg-green-400/40' : 
                i % 4 === 2 ? 'bg-purple-400/40' : 'bg-yellow-400/40'
              } animate-sparkle`} />
            </div>
          ))}
        </div>
      </>
    );
  }

  return null; // No effects for other sections
}; 