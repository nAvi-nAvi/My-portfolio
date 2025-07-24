import { useState, useEffect } from 'react';
import { ANIMATION_CONFIG } from '@/constants';
import type { MatrixCode } from '@/types';

export const useMatrixAnimation = () => {
  const [matrixCode, setMatrixCode] = useState<MatrixCode[]>([]);

  const generateMatrixCode = (): MatrixCode[] => {
    const chars = '11110101 100101 101001 01010 0101 01010 1001 0110101 0101010';
    const newCode: MatrixCode[] = [];
    
    for (let i = 0; i < 50; i++) {
      const randomChars = Array.from(
        { length: Math.floor(Math.random() * 20) + 1 },
        () => chars[Math.floor(Math.random() * chars.length)]
      ).join('');
      
      newCode.push({
        id: `matrix-${i}`,
        content: randomChars,
        position: {
          x: (i * 2) % 100,
          y: Math.random() * 100
        },
        animationDelay: Math.random() * 5
      });
    }
    
    return newCode;
  };

  useEffect(() => {
    setMatrixCode(generateMatrixCode());
    
    const interval = setInterval(() => {
      setMatrixCode(generateMatrixCode());
    }, ANIMATION_CONFIG.MATRIX_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return { matrixCode };
}; 