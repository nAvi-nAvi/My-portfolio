import { Monitor, Code, Smartphone, Users } from 'lucide-react';
import type { Project, Skill, Technology, CodeSnippet, NavigationItem } from '@/types';

// Navigation Items
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' }
];

// Code Snippets for Animation
export const CODE_SNIPPETS: CodeSnippet[] = [
  { id: '1', content: 'const developer = "Navaneedha Krishnan";', type: 'variable' },
  { id: '2', content: 'function buildAmazingApps() {', type: 'function' },
  { id: '3', content: 'return "React + Node.js + Spring Boot";', type: 'function' },
  { id: '4', content: 'while(coding) { createMagic(); }', type: 'loop' },
  { id: '5', content: 'class FullStackDev extends Engineer {', type: 'class' },
  { id: '6', content: 'constructor() { super("3+ years"); }', type: 'class' },
  { id: '7', content: '// Building the future, one line at a time ✨', type: 'comment' },
  { id: '8', content: 'const skills = ["React", "Node.js", "Spring Boot"];', type: 'variable' },
  { id: '9', content: 'skills.forEach(skill => master(skill));', type: 'function' },
  { id: '10', content: 'async function solveProblems() {', type: 'function' },
  { id: '11', content: 'return await innovativeSolutions();', type: 'function' },
  { id: '12', content: 'const passion = "Coding + Innovation";', type: 'variable' },
  { id: '13', content: 'if (problem.isComplex()) {', type: 'condition' },
  { id: '14', content: 'return elegantSolution();', type: 'function' },
  { id: '15', content: 'class CodeCanvas {', type: 'class' },
  { id: '16', content: 'paintWithLogic() {', type: 'function' },
  { id: '17', content: 'return beautifulApplications();', type: 'function' },
  { id: '18', content: 'const creativity = Infinity;', type: 'variable' },
  { id: '19', content: 'function transformIdeas() {', type: 'function' },
  { id: '20', content: 'return workingSoftware();', type: 'function' },
  { id: '21', content: '// Debugging: The art of being a detective 🕵️', type: 'comment' },
  { id: '22', content: 'const stack = ["Frontend", "Backend", "DevOps"];', type: 'variable' },
  { id: '23', content: 'stack.map(tech => becomeExpert(tech));', type: 'function' },
  { id: '24', content: 'function shipCode() {', type: 'function' },
  { id: '25', content: 'return productionReady();', type: 'function' },
  { id: '26', content: 'const mindset = "Problem Solver";', type: 'variable' },
  { id: '27', content: 'while (learning) {', type: 'loop' },
  { id: '28', content: 'grow(); innovate();', type: 'function' },
  { id: '29', content: 'class TeamPlayer {', type: 'class' },
  { id: '30', content: 'mentor() { return knowledgeSharing(); }', type: 'function' },
  { id: '31', content: '// Code is poetry in motion 📝', type: 'comment' },
  { id: '32', content: 'const architecture = "Scalable & Clean";', type: 'variable' },
  { id: '33', content: 'function optimize() {', type: 'function' },
  { id: '34', content: 'return performanceBoost();', type: 'function' },
  { id: '35', content: '// Turning coffee into code ☕', type: 'comment' },
  { id: '36', content: 'const experience = "3+ Years of Excellence";', type: 'variable' },
  { id: '37', content: 'if (deadline.approaching()) {', type: 'condition' },
  { id: '38', content: 'return deliverOnTime();', type: 'function' },
  { id: '39', content: '// Full Stack = Full Power 💪', type: 'comment' },
  { id: '40', content: 'const languages = ["JS", "TS", "Java", "Python"];', type: 'variable' },
  { id: '41', content: 'languages.forEach(lang => master(lang));', type: 'function' },
  { id: '42', content: 'function createMagic() {', type: 'function' },
  { id: '43', content: 'return userExperience();', type: 'function' },
  { id: '44', content: '// Building tomorrow\'s solutions today 🚀', type: 'comment' }
];

// Technologies for Floating Animation
export const TECHNOLOGIES: Technology[] = [
  { name: 'React.js', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Angular', category: 'frontend' },
  { name: 'Spring Boot', category: 'backend' },
  { name: 'Python', category: 'language' },
  { name: 'Java', category: 'language' },
  { name: 'MongoDB', category: 'database' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'Redis', category: 'database' },
  { name: 'RabbitMQ', category: 'tool' }
];

// Skills Data
export const SKILLS: Skill[] = [
  {
    name: 'Frontend Development',
    icon: Monitor,
    description: 'React.js, Next.js, Angular, TypeScript'
  },
  {
    name: 'Backend Development',
    icon: Code,
    description: 'Node.js, Java Spring Boot, Hibernate'
  },
  {
    name: 'Mobile Development',
    icon: Smartphone,
    description: 'React Native, Cross-platform apps'
  },
  {
    name: 'Team Leadership',
    icon: Users,
    description: 'Lead Developer, Mentor, Project Management'
  }
];

// Projects Data
export const PROJECTS: Project[] = [
  {
    title: 'Searchqore',
    description: 'Advanced bookkeeping software with React.js, Node.js, and Spring Boot. Features automated transaction categorization, financial reporting, and RabbitMQ for task assignment.',
    tech: 'React.js, Node.js, Spring Boot, RabbitMQ',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Pampered Chef Migration',
    description: 'Migrated 20-year-old Java Hibernate JSP application to React and Node.js that handles consultant and customer data.',
    tech: 'React.js, Node.js, Java, Hibernate, CMS',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Mouser Pricing and Ordering Application',
    description: 'Product quotation and orders application with automated best pricing. Handled large data processing with Redis cache.',
    tech: 'React.js, Node.js, Redis, Pricing Engine',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    title: 'Pampered Chef - CMS',
    description: 'Using Content stack - CMS for Pampered Chef, a leading direct sales company. Implemented Noibu error handling and CMS content management.',
    tech: 'React.js, Node.js, Java, Hibernate, CMS',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Pie-Factory Carbon Tracker',
    description: 'Complete carbon tracking application with dynamic reporting, multi-tenant architecture, role-based permissions, and payment integration.',
    tech: 'React.js, Node.js, Multi-tenant, Payment Gateway',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Dynamic Workflow and Forms Engine',
    description: 'Configurable workflow application with auto/manual approvals, node-edge construction, dynamic forms, and multi-tenant support.',
    tech: 'React.js, Node.js, Workflow Engine, Dynamic Forms',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Trainline Services',
    description: 'Train ticket booking application development and Google Ad Manager module integration.',
    tech: 'React.js, Node.js, Payment Integration, Ad Manager',
    gradient: 'from-yellow-500 to-orange-500'
  }
];

// Animation Configuration
export const ANIMATION_CONFIG = {
  CODING_INTERVAL: 80,
  MATRIX_INTERVAL: 3000,
  FLOATING_DELAY: 15,
  FLOATING_DURATION: 12,
  FLOATING_RANDOM_DURATION: 8
} as const;

// CV Template Configuration
export const CV_CONFIG = {
  FILENAME: 'Navaneedha-Krishnan-CV.pdf',
  WIDTH: 800,
  SCALE: 2,
  A4_WIDTH: 210,
  A4_HEIGHT: 295
} as const; 