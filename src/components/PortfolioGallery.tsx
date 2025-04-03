'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const PortfolioGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: '/images/cafe-interior.jpg',
      alt: 'היאייר בית קפה - חלל פנימי מעוצב'
    },
    {
      id: 2,
      src: '/images/coffee-presentation.jpg',
      alt: 'קפה מעוצב בהגשה אומנותית'
    },
    {
      id: 3,
      src: '/images/pastry-selection.jpg',
      alt: 'מבחר מאפים טריים'
    },
    {
      id: 4,
      src: '/images/customers-enjoying.jpg',
      alt: 'לקוחות נהנים באווירה מיוחדת'
    },
    {
      id: 5,
      src: '/images/barista-art.jpg',
      alt: 'אומנות בריסטה מרהיבה'
    },
    {
      id: 6,
      src: '/images/outdoor-seating.jpg',
      alt: 'פינת ישיבה חיצונית מעוצבת'
    },
    {
      id: 7,
      src: '/images/signature-dish.jpg',
      alt: 'מנת הדגל של בית הקפה'
    },
    {
      id: 8,
      src: '/images/cafe-ambiance.jpg',
      alt: 'אווירה ייחודית בבית הקפה'
    }
  ];

  // Close modal when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="py-12 px-4 md:px-8 bg-neutral-50 dir-rtl" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary-dark mb-3">החוויה החזותית של היאייר</h2>
          <p className="text-lg text-secondary-dark max-w-2xl mx-auto">
            טעימה ויזואלית מהאווירה הייחודית והעיצוב המוקפד של בית הקפה שלנו
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-md aspect-square cursor-pointer bg-primary-light/10"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(image.id)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: image.id * 0.1 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image view */}
      {selectedImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-auto aspect-[4/3] bg-white/5 rounded-lg overflow-hidden">
              <Image
                src={galleryImages.find(img => img.id === selectedImage)?.src || ''}
                alt={galleryImages.find(img => img.id === selectedImage)?.alt || ''}
                fill
                sizes="(max-width: 1536px) 100vw, 1536px"
                className="object-contain"
              />
            </div>
            <button 
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white bg-black/50 inline-block px-4 py-2 rounded-full text-sm">
                {galleryImages.find(img => img.id === selectedImage)?.alt}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default PortfolioGallery;