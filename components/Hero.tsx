import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import RotatingCube from './3D/RotatingCube';
import { PERSONAL_INFO, TYPED_STRINGS } from '../constants';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % TYPED_STRINGS.length;
      const fullText = TYPED_STRINGS[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const scrollToPortfolio = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/30 rounded-full border border-purple-700/50"
          >
            Welcome to my universe
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Hi, I'm <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          <div className="h-8 md:h-10 mb-6 md:mb-8">
            <span className="text-xl sm:text-2xl md:text-3xl font-mono text-gray-300">
              I am a <span className="text-purple-400 font-bold">{text}</span>
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed">
            Merging Artificial Intelligence with creative content and financial strategy to build the future.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToPortfolio}
              className="px-6 py-3 md:px-8 md:py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all flex items-center gap-2 text-sm md:text-base"
            >
              View Work <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 md:px-8 md:py-3.5 rounded-full border border-gray-600 bg-white/5 backdrop-blur-sm text-white font-semibold hover:bg-white/10 transition-all text-sm md:text-base"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        {/* Right 3D Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="h-[300px] sm:h-[400px] md:h-[500px] w-full flex items-center justify-center relative order-1 lg:order-2"
        >
          {/* Glow effect behind cube */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-purple-600/20 rounded-full blur-[80px] sm:blur-[100px]" />
          <RotatingCube />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;