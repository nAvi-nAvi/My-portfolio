import React from 'react';
import { Code, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAVIGATION_ITEMS } from '@/constants';
import type { NavigationItem } from '@/types';

interface NavigationProps {
  onDownloadCV: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onDownloadCV }) => {
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-40 border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white flex items-center group">
            <Code className="w-8 h-8 mr-2 text-blue-400 group-hover:rotate-180 transition-transform duration-500 animate-pulse" />
            <span className="hover:text-blue-400 transition-colors duration-300 animate-slide-in-left">
              Navaneedha Krishnan
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            {NAVIGATION_ITEMS.map((item: NavigationItem, index: number) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 hover:text-white transition-all duration-300 capitalize hover:scale-110 transform relative group animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button
              onClick={onDownloadCV}
              size="sm"
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 animate-bounce-in"
              style={{ animationDelay: '0.6s' }}
            >
              <Download className="w-4 h-4 mr-2 animate-bounce" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}; 