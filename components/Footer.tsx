import React from 'react';
import { Rocket, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-white/10 bg-slate-900/80 backdrop-blur-md pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div 
            className="flex items-center gap-2 mb-4 md:mb-0 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <Rocket className="h-6 w-6 text-purple-500" />
            <span className="font-bold text-xl tracking-tight text-white">
              Mrigank Dhanuka
            </span>
          </div>
          
          <div className="flex gap-6 text-gray-400 text-sm">
            <button 
              onClick={() => scrollToSection('home')} 
              className="hover:text-white transition-colors focus:outline-none"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="hover:text-white transition-colors focus:outline-none"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="hover:text-white transition-colors focus:outline-none"
            >
              Portfolio
            </button>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-sm border-t border-white/5 pt-8">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React, Three.js & Tailwind
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Mrigank Dhanuka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;