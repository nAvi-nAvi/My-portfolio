import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 relative z-20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 animate-fade-in">
          About Me
        </h2>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-scale-in hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 transform-3d hover:rotate-x-12">
          <p className="text-lg text-white/90 leading-relaxed mb-6">
            I'm Navaneedha Krishnan, a passionate Full Stack Web Developer with extensive expertise in 
            modern web technologies including React.js, Next.js, Node.js, Angular, and Java Spring Boot. 
            I specialize in both rational and irrational databases, Python development, and comprehensive testing strategies.
          </p>
          <p className="text-lg text-white/90 leading-relaxed mb-6">
            As a technical leader, I've successfully mentored interns and guided them through live projects, 
            ensuring they become productive team members. My experience spans across diverse industries and 
            complex applications, from legacy system migrations to cutting-edge workflow engines.
          </p>
          <p className="text-lg text-white/90 leading-relaxed">
            I excel at writing unit tests, assertion test cases, and delivering bug-free applications. 
            My approach combines technical excellence with effective team leadership to deliver scalable, 
            maintainable solutions that meet business objectives.
          </p>
        </div>
      </div>
    </section>
  );
}; 