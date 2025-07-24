// Form Data Types
export interface ContactFormData {
  email: string;
  name: string;
  reason: string;
  message: string;
}

// Project Types
export interface Project {
  title: string;
  description: string;
  tech: string;
  gradient: string;
}

// Skill Types
export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

// Technology Types
export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tool' | 'language';
}

// Code Snippet Types
export interface CodeSnippet {
  id: string;
  content: string;
  type: 'variable' | 'function' | 'class' | 'comment' | 'loop' | 'condition';
}

// Animation Types
export interface AnimationConfig {
  delay: number;
  duration: number;
  easing: string;
}

// EmailJS Response Types
export interface EmailJSResponse {
  status: number;
  text: string;
}

// Toast Types
export interface ToastConfig {
  title: string;
  description: string;
  variant?: 'default' | 'destructive';
}

// CV Section Types
export interface CVSection {
  title: string;
  content: string | string[];
  type: 'text' | 'list' | 'grid';
}

// Navigation Types
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

// Matrix Code Types
export interface MatrixCode {
  id: string;
  content: string;
  position: { x: number; y: number };
  animationDelay: number;
}

// Floating Element Types
export interface FloatingElement {
  id: string;
  content: string;
  position: { x: number; y: number };
  rotation?: number; // Add rotation property
  animationConfig: AnimationConfig;
} 