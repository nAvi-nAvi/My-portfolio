import React from 'react';
import { Monitor, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCodingAnimation } from '@/hooks/useCodingAnimation';

interface HeroSectionProps {
  isVisible: boolean;
  onViewWork: () => void;
  onGetInTouch: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  isVisible, 
  onViewWork, 
  onGetInTouch 
}) => {
  const { codingText } = useCodingAnimation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative z-20">
      <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="inline-block hover:scale-110 transition-transform duration-300 animate-slide-in-left animate-glitch animate-shake-hover md:text-6xl">
              Navaneedha Krishnan
            </span>
            <span className="block bg-gradient-to-r inline-block from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent transition-transform duration-300 delay-400 animate-slide-in-right text-3xl md:text-5xl">
              Software Engineer
            </span>
          </h1>
          
          {/* Enhanced coding animation */}
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 mb-6 border border-green-500/30 font-mono text-green-400 text-left max-w-2xl mx-auto transform-3d hover:rotate-y-12 transition-transform duration-500">
            <div className="flex items-center mb-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <div className="text-xs text-green-300 ml-4">terminal.js - nAvi's Code</div>
            </div>
            <div className="text-xs text-green-300 mb-2">$ npm run build-amazing-apps</div>
            <div className="h-8 flex items-center border-r-2 border-green-400 animate-typing overflow-hidden whitespace-nowrap">
              {codingText}
              <span className="animate-pulse text-green-400 ml-1">█</span>
            </div>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
          Expert in React.js, Next.js, Node.js, Angular, Java Spring Boot & more.
          Leading teams and building scalable applications across diverse industries.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in" style={{animationDelay: '0.4s'}}>
          <Button 
            size="lg" 
            onClick={onViewWork}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 group"
          >
            <Monitor className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            View My Work
          </Button>
          <Button 
            size="lg" 
            onClick={onGetInTouch}
            className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 group"
          >
            <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}; 