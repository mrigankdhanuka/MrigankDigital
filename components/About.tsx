import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, Code2, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  const cards = [
    {
      title: "Education",
      icon: BookOpen,
      content: PERSONAL_INFO.education.degree,
      sub: PERSONAL_INFO.education.school,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Finance Expertise",
      icon: TrendingUp,
      content: "4+ Years Experience",
      sub: PERSONAL_INFO.finance,
      color: "from-emerald-500 to-green-500"
    },
    {
      title: "Tech Stack",
      icon: Code2,
      content: "MERN Stack Developer",
      sub: "Specialized in React, Node.js & AI Integration",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <div className="py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            A passionate engineer bridging the gap between cutting-edge AI technology and real-world financial applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:bg-white/10 transition-colors"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <card.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-white font-medium mb-2 text-sm md:text-base">{card.content}</p>
                <p className="text-gray-400 text-xs md:text-sm">{card.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-12 glass-panel p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500 shadow-lg shadow-purple-500/20">
              <img 
                src="https://picsum.photos/200/200?grayscale" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-lg font-bold">Ready to collaborate?</h4>
              <p className="text-gray-400 text-sm">Let's create something extraordinary.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-purple-400 bg-purple-900/20 px-4 py-2 rounded-lg border border-purple-500/20 text-sm md:text-base">
            <Mail className="w-4 h-4" />
            <span className="break-all">{PERSONAL_INFO.email}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;