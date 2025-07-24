import { useState, useEffect } from 'react';
import { TECHNOLOGIES, ANIMATION_CONFIG } from '@/constants';
import type { FloatingElement } from '@/types';

export const useRainingElements = () => {
  const [rainingElements, setRainingElements] = useState<FloatingElement[]>([]);

  const generateRainingElements = (): FloatingElement[] => {
    return TECHNOLOGIES.map((tech, i) => ({
      id: `rain-${i}`,
      content: tech.name,
      position: {
        x: Math.random() * 100, // Full width
        y: -10 - Math.random() * 20 // Start above viewport
      },
      rotation: (Math.random() - 0.5) * 60, // Random rotation between -30 and +30 degrees
      animationConfig: {
        delay: i * 0.1, // Much faster staggered start
        duration: 3 + Math.random() * 2, // Much faster falling animation
        easing: 'linear'
      }
    }));
  };

  useEffect(() => {
    setRainingElements(generateRainingElements());
    
    // Regenerate elements periodically for continuous rain effect
    const interval = setInterval(() => {
      setRainingElements(generateRainingElements());
    }, 5000); // Every 5 seconds for faster regeneration

    return () => clearInterval(interval);
  }, []);

  return { rainingElements };
}; 