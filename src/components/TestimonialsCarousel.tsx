'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronLeft, FaStar, FaStarHalfAlt, FaQuoteRight } from 'react-icons/fa';

interface TestimonialProps {
  id: number;
  name: string;
  quote: string;
  rating: number;
  image?: string;
}

const testimonials: TestimonialProps[] = [
  {
    id: 1,
    name: 'רונית לוי',
    quote: 'הקפה הטוב ביותר בעיר! האווירה חמימה ומזמינה, והצוות תמיד מסביר פנים. מקום מושלם לפגישות או לעבודה עם לפטופ.',
    rating: 5,
    image: '/testimonials/person1.jpg',
  },
  {
    id: 2,
    name: 'אבי כהן',
    quote: 'העוגות והמאפים טריים ומדהימים. אני מגיע כל בוקר לקפה ומאפה, והשירות תמיד מהיר ואדיב. ממליץ בחום!',
    rating: 4.5,
    image: '/testimonials/person2.jpg',
  },
  {
    id: 3,
    name: 'מיכל ברקוביץ',
    quote: 'המקום מעוצב בטוב טעם, והמוזיקה ברקע מושלמת. אני אוהבת במיוחד את הקפה הקר שלהם בימי הקיץ החמים.',
    rating: 5,
    image: '/testimonials/person3.jpg',
  },
  {
    id: 4,
    name: 'יוסי גולדברג',
    quote: 'בית הקפה האהוב עליי בשכונה. האוכל טעים, המחירים הוגנים והאווירה נעימה. מקום מצוין לבלות בו עם חברים.',
    rating: 4,
    image: '/testimonials/person4.jpg',
  },
  {
    id: 5,
    name: 'דנה שרון',
    quote: 'התפריט מגוון ויש אפשרויות לטבעונים וצמחונים. הקפה מעולה והעיצוב של המקום מקסים. אחד המקומות האהובים עליי.',
    rating: 4.5,
    image: '/testimonials/person5.jpg',
  },
];

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`star-${i}`} className="text-amber-500" />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half-star" className="text-amber-500" />);
  }

  const remainingStars = 5 - Math.ceil(rating);
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<FaStar key={`empty-star-${i}`} className="text-gray-300" />);
  }

  return <div className="flex gap-1">{stars}</div>;
};

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  // Reset autoplay on user interaction
  const handleInteraction = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    setIsAutoPlaying(false);
    
    // Resume autoplay after 5 seconds of inactivity
    const timeout = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
    
    return () => clearTimeout(timeout);
  }, []);

  // Set up autoplay
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(goToNext, 5000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, goToNext]);

  // Variants for framer-motion animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <div 
      className="w-full bg-gray-50 py-16 px-4 md:px-8 lg:px-16 font-heebo direction-rtl"
      onClick={handleInteraction}
      onMouseEnter={handleInteraction}
      onTouchStart={handleInteraction}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          מה הלקוחות שלנו אומרים
        </h2>
        
        <div className="relative overflow-hidden">
          {/* Main carousel */}
          <div className="relative h-[400px] md:h-[350px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                }}
                className="absolute w-full h-full"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 h-full flex flex-col items-center justify-between text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-secondary mb-4">
                    {testimonials[currentIndex].image ? (
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary">
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                    )}
                  </div>
                  
                  <div className="relative mb-4">
                    <FaQuoteRight className="absolute -top-6 -right-4 text-4xl text-primary/10" />
                    <p className="text-lg md:text-xl leading-relaxed mb-4">
                      {testimonials[currentIndex].quote}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="text-xl font-bold text-primary mb-1">
                      {testimonials[currentIndex].name}
                    </h3>
                    <div className="flex justify-center mb-2">
                      <RatingStars rating={testimonials[currentIndex].rating} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }} 
            className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-primary hover:text-secondary rounded-full p-3 shadow-md transition-all duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <FaChevronRight className="text-xl" />
          </button>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }} 
            className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-primary hover:text-secondary rounded-full p-3 shadow-md transition-all duration-300 z-10"
            aria-label="Next testimonial"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          
          {/* Dots navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-gray-300 hover:bg-secondary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;