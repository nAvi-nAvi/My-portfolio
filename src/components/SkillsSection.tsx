import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SKILLS } from '@/constants';
import type { Skill } from '@/types';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 relative z-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 animate-fade-in">
          Technical Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill: Skill, index: number) => (
            <Card 
              key={skill.name} 
              className={`bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-110 animate-fade-in group hover:shadow-2xl hover:shadow-blue-500/20`} 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="text-center">
                <skill.icon className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">
                  {skill.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70 text-center group-hover:text-white/90 transition-colors duration-300">
                  {skill.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 animate-fade-in hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10" style={{animationDelay: '0.5s'}}>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Additional Technologies</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="group">
              <h4 className="text-lg font-semibold text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                Databases
              </h4>
              <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                All Rational & Irrational Databases, Redis
              </p>
            </div>
            <div className="group">
              <h4 className="text-lg font-semibold text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                Backend
              </h4>
              <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                Java Spring Boot, Hibernate, Python, RabbitMQ
              </p>
            </div>
            <div className="group">
              <h4 className="text-lg font-semibold text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                Testing & Tools
              </h4>
              <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                Unit Testing, Assertion Testing, Error Handling
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 