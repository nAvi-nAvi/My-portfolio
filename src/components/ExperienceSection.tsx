import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 relative z-20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 animate-fade-in">
          Professional Experience
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          <div className="relative">
            <div className="flex items-start mb-8 group">
              <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
              <div className="ml-16 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 w-full">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Software Engineer</h3>
                </div>
                <div className="flex items-center text-blue-400 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>3+ Years Experience</span>
                </div>
                <div className="flex items-center text-white/80 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>KaayLabs Pvt Ltd, Chennai</span>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Led multiple full-stack development projects, mentored junior developers, and delivered 
                  scalable solutions across various industries. Specialized in React.js, Node.js, and 
                  Java Spring Boot applications with focus on performance optimization and code quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 