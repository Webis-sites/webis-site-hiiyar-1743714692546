'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: "קפה איכותי",
    description: "פולי קפה מהמשובחים בעולם שנקלים בעבודת יד בכל יום",
    image: "https://images.unsplash.com/photo-1501747315-124a0eaca060?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
  },
  {
    id: 2,
    title: "מאפים טריים",
    description: "מאפים ועוגות שנאפים במקום מחומרי גלם איכותיים ללא חומרים משמרים",
    image: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    title: "ארוחות בוקר",
    description: "ארוחות בוקר מפנקות עם מגוון מנות טריות, ביצים, גבינות ולחמים",
    image: "https://images.unsplash.com/photo-1620921586333-b7564662489a?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 4,
    title: "אירועים פרטיים",
    description: "אירוח אירועים פרטיים עד 50 איש בסביבה קסומה ואווירה מיוחדת",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-light-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-secondary mb-4"
          >
            השירותים שלנו
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            מגוון רחב של חוויות קולינריות איכותיות בסביבה מעוצבת ונעימה
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                <h3 className="absolute bottom-4 right-4 text-white text-2xl font-bold">{service.title}</h3>
              </div>
              <div className="p-6 text-right">
                <p className="text-gray-700">{service.description}</p>
                <div className="mt-4">
                  <a 
                    href="#booking" 
                    className="inline-block text-primary font-medium hover:text-primary-dark transition-colors"
                  >
                    הזמן עכשיו &larr;
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;