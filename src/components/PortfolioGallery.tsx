'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "קפה לאטה אומנותי",
    category: "קפה"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "עוגת שוקולד עשירה",
    category: "קינוחים"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "קפוצ'ינו עם לב בקצף",
    category: "קפה"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "מאפינס פירות יער",
    category: "קינוחים"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "טירמיסו אישי",
    category: "קינוחים"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    alt: "אספרסו כפול",
    category: "קפה"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1587314168485-3236d6710029?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "קרואסון חמאה",
    category: "מאפים"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1515215316771-2742baa337f4?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    alt: "עוגיות מקרון צבעוניות",
    category: "קינוחים"
  }
];

const categories = ["הכל", "קפה", "קינוחים", "מאפים"];

const PortfolioGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("הכל");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === "הכל"
    ? galleryImages
    : galleryImages.filter(image => image.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-secondary mb-4"
          >
            הגלריה שלנו
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            צפו ביצירות הקולינריות המיוחדות שלנו, מקפה אומנותי ועד קינוחים מפנקים
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layoutId={`image-${image.id}`}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer"
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              onClick={() => setSelectedImage(image.id)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="p-3 bg-white">
                <h3 className="text-lg font-medium text-secondary text-right">{image.alt}</h3>
                <p className="text-sm text-gray-500 text-right">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              layoutId={`image-${selectedImage}`}
              className="max-w-4xl max-h-[90vh] relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center text-2xl z-10"
              >
                &times;
              </button>
              <img
                src={galleryImages.find(img => img.id === selectedImage)?.src}
                alt={galleryImages.find(img => img.id === selectedImage)?.alt}
                className="max-w-full max-h-[90vh] object-contain"
              />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGallery;