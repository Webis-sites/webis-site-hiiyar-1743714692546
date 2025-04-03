'use client';

import React from 'react';
import { FaCoffee, FaLeaf, FaUtensils, FaGlassCheers } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center rtl"
      whileHover={{ 
        y: -10,
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        transition: { duration: 0.3 }
      }}
    >
      <div className="text-primary text-4xl mb-4">
        {icon}
      </div>
      <h3 className="font-heebo text-xl font-bold mb-3 text-secondary">{title}</h3>
      <p className="text-gray-600 font-rubik">{description}</p>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaCoffee />,
      title: "משקאות מיוחדים",
      description: "מבחר משקאות אורגניים ומיוחדים המיוצרים מחומרי גלם טריים ואיכותיים, מותאמים לסגנון חיים בריא ומודרני."
    },
    {
      icon: <FaLeaf />,
      title: "אוכל בריא",
      description: "תפריט עשיר במנות בריאות טריות, סלטים מרעננים ומאכלים דלי קלוריות המתאימים לאורח חיים בריא ואקטיבי."
    },
    {
      icon: <FaUtensils />,
      title: "מאפים טריים",
      description: "מאפים ביתיים טריים מדי יום, מקמח מלא ורכיבים אורגניים, מושלמים לארוחת בוקר או הפסקת קפה מפנקת."
    },
    {
      icon: <FaGlassCheers />,
      title: "חוויית קפה ייחודית",
      description: "אווירה מעוצבת ונעימה המשלבת אסתטיקה מודרנית עם שירות אישי, המושלמת למפגשים חברתיים או עבודה בנחת."
    }
  ];

  return (
    <section className="py-16 bg-light-beige" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heebo text-secondary mb-4">השירותים שלנו</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-rubik">
            בהייאר בית קפה מציע לכם חוויה קולינרית בריאה ומפנקת, עם דגש על איכות, טריות וסגנון
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;