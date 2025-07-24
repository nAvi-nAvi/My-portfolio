import { useState, useEffect, useRef } from 'react';
import { ANIMATION_CONFIG } from '@/constants';
import type { MatrixCode } from '@/types';

export const useMatrixAnimation = () => {
  const [matrixCode, setMatrixCode] = useState<MatrixCode[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const elementIdCounter = useRef(0);

  const generateSingleMatrixElement = (): MatrixCode => {
    const chars = '11110101 100101 101001 01010 0101 01010 1001 0110101 0101010';
    const randomChars = Array.from(
      { length: Math.floor(Math.random() * 20) + 1 },
      () => chars[Math.floor(Math.random() * chars.length)]
    ).join('');
    
    return {
      id: `matrix-${elementIdCounter.current++}`,
      content: randomChars,
      position: {
        x: Math.random() * 100,
        y: 0 // Start at top, let CSS animation handle the movement
      },
      animationDelay: Math.random() * 2
    };
  };

  const generateInitialMatrixCode = (): MatrixCode[] => {
    const newCode: MatrixCode[] = [];
    
    for (let i = 0; i < 20; i++) {
      const chars = '11110101 100101 101001 01010 0101 01010 1001 0110101 0101010';
      const randomChars = Array.from(
        { length: Math.floor(Math.random() * 20) + 1 },
        () => chars[Math.floor(Math.random() * chars.length)]
      ).join('');
      
      newCode.push({
        id: `matrix-${elementIdCounter.current++}`,
        content: randomChars,
        position: {
          x: Math.random() * 100,
          y: 0
        },
        animationDelay: Math.random() * 4
      });
    }
    
    return newCode;
  };

  useEffect(() => {
    // Delay the matrix animation by 1 second
    const delayTimer = setTimeout(() => {
      setIsVisible(true);
      setMatrixCode(generateInitialMatrixCode());
    }, 1000);

    // Add new elements continuously
    const addElementInterval = setInterval(() => {
      if (isVisible) {
        setMatrixCode(prev => {
          // Remove elements that have been on screen for too long
          const filtered = prev.filter((_, index) => index < 30);
          // Add new element
          return [...filtered, generateSingleMatrixElement()];
        });
      }
    }, 300); // Add new element every 300ms

    // Clean up old elements periodically
    const cleanupInterval = setInterval(() => {
      if (isVisible) {
        setMatrixCode(prev => prev.filter((_, index) => index < 25));
      }
    }, 4000);

    return () => {
      clearTimeout(delayTimer);
      clearInterval(addElementInterval);
      clearInterval(cleanupInterval);
    };
  }, [isVisible]);

  return { matrixCode, isVisible };
}; 