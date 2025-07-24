import React, { useState, useEffect } from 'react';
import { useRainingElements } from '@/hooks/useRainingElements';
import type { FloatingElement } from '@/types';

export const RainingTechnologies: React.FC = () => {
  const { rainingElements } = useRainingElements();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        // Show raining technologies only when we're past the home section
        setIsVisible(scrollPosition > homeBottom);
      }
    };

    // Check initial position
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {rainingElements.map((element: FloatingElement) => (
        <div
          key={element.id}
          className="absolute text-xs bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-2 py-1 text-white/30 animate-rain"
          style={{
            left: `${element.position.x}%`,
            top: `${element.position.y}%`,
            transform: `rotate(${element.rotation || 0}deg)`,
            animationDelay: `${element.animationConfig.delay}s`,
            animationDuration: `${element.animationConfig.duration}s`
          }}
        >
          {element.content}
        </div>
      ))}
    </div>
  );
}; 