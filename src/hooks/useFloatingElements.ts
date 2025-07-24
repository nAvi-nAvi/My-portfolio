import { useState, useEffect } from 'react';
import { TECHNOLOGIES, ANIMATION_CONFIG } from '@/constants';
import type { FloatingElement } from '@/types';

export const useFloatingElements = () => {
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);

  const generateFloatingElements = (): FloatingElement[] => {
    return TECHNOLOGIES.map((tech, i) => ({
      id: `tech-${i}`,
      content: tech.name,
      position: {
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10
      },
      animationConfig: {
        delay: i * ANIMATION_CONFIG.FLOATING_DELAY,
        duration: ANIMATION_CONFIG.FLOATING_DURATION + Math.random() * ANIMATION_CONFIG.FLOATING_RANDOM_DURATION,
        easing: 'ease-in-out'
      }
    }));
  };

  useEffect(() => {
    setFloatingElements(generateFloatingElements());
  }, []);

  return { floatingElements };
}; 