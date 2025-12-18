import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Digital Empire</h2>
          <p className="text-gray-400 text-sm md:text-base">My ecosystem of content across platforms.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {SOCIAL_LINKS.map((category, catIdx) => (
          <div key={catIdx} className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-3">
              {category.platform === 'Instagram' ? (
                <Instagram className="text-pink-500 w-6 h-6" />
              ) : (
                <Youtube className="text-red-500 w-6 h-6" />
              )}
              {category.platform} Channels
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {category.items.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel p-5 md:p-6 rounded-xl group relative overflow-hidden block"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 transition-opacity group-hover:opacity-20 ${category.platform === 'Instagram' ? 'bg-gradient-to-bl from-purple-600 to-orange-500' : 'bg-red-600'}`} />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-full ${category.platform === 'Instagram' ? 'bg-gradient-to-br from-purple-600 to-pink-500' : 'bg-red-600'}`}>
                        {category.platform === 'Instagram' ? <Instagram className="w-5 h-5 text-white" /> : <Youtube className="w-5 h-5 text-white" />}
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                    
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">{item.name}</h4>
                    <p className="text-sm text-gray-400">{item.handle}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;