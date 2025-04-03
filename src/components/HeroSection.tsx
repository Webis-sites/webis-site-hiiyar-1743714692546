'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <div className="w-full relative h-screen flex items-center justify-center overflow-hidden">
      {/* תמונת רקע */}
      <div className="absolute inset-0 z-0 w-full">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="בית קפה" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* תוכן */}
      <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4"
        >
          hiiyar
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white mb-8"
        >
          בית הקפה היוקרתי ביותר בעיר
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#about" className="bg-primary text-white px-8 py-3 rounded-full font-medium text-lg inline-block hover:bg-primary-dark transition-colors duration-300">גלה עוד</a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;