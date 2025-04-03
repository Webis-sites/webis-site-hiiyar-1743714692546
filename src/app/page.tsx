'use client';

import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioGallery from '../components/PortfolioGallery';
import BookingSystem from '../components/BookingSystem';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      {/* Hero section בגובה מלא ורוחב מלא */}
      <HeroSection />
      
      {/* שאר החלקים של האתר */}
      <AboutSection />
      <ServicesSection />
      <PortfolioGallery />
      <BookingSystem />
      <TestimonialsCarousel />
      <ContactSection />
      
      {/* פוטר */}
      <FooterSection />
    </div>
  );
}