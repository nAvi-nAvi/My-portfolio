import { useState, useEffect } from 'react';
import { CODE_SNIPPETS, ANIMATION_CONFIG } from '@/constants';

export const useCodingAnimation = () => {
  const [codingText, setCodingText] = useState<string>('');
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState<number>(0);
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const animateCoding = () => {
      const currentSnippet = CODE_SNIPPETS[currentSnippetIndex];
      
      if (currentCharIndex < currentSnippet.content.length) {
        setCodingText(currentSnippet.content.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(prev => prev + 1);
      } else {
        // Wait before moving to next snippet
        setTimeout(() => {
          setCurrentSnippetIndex(prev => (prev + 1) % CODE_SNIPPETS.length);
          setCurrentCharIndex(0);
          setCodingText('');
        }, 2000);
      }
    };

    interval = setInterval(animateCoding, ANIMATION_CONFIG.CODING_INTERVAL);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [currentSnippetIndex, currentCharIndex]);

  return { codingText };
}; 