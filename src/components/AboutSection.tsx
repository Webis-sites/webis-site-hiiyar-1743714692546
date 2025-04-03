'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCoffee, FaLeaf, FaHeart } from 'react-icons/fa';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-light-beige">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* תמונה */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="בית הקפה שלנו" 
                className="w-full h-[500px] object-cover object-center"
              />
            </div>
          </motion.div>
          
          {/* תוכן */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary text-right">הסיפור שלנו</h2>
            <div className="space-y-4 text-right">
              <p className="text-lg text-gray-700">
                בית הקפה hiiyar נולד מתוך אהבה עמוקה לקפה איכותי ולאווירה חמה ומזמינה. השם שלנו, hiiyar, הוא שילוב של המילים "היי" ו"יער", המשקף את החזון שלנו: ליצור מקום בו אנשים יכולים לומר "היי" זה לזה בסביבה טבעית ומרגיעה כמו יער.
              </p>
              <p className="text-lg text-gray-700">
                אנו מקפידים על שימוש בפולי קפה אורגניים מהמשובחים בעולם, הנקלים בעבודת יד אצלנו בבית הקפה. התפריט שלנו משלב מתכונים מסורתיים עם חדשנות קולינרית, ונותן דגש על מוצרים טריים ומקומיים.
              </p>
              <p className="text-lg text-gray-700">
                בין אם אתם מחפשים מקום שקט לעבוד, פינה אינטימית לפגישה, או פשוט ליהנות מכוס קפה מושלמת - hiiyar הוא המקום שלכם.
              </p>
            </div>
            <div className="mt-8 text-right">
              <a href="#services" className="inline-block px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary-dark transition-colors duration-300">גלה את התפריט שלנו</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;