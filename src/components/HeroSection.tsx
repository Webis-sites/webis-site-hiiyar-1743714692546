'use client';

import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-white" dir="rtl">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
          alt="בית קפה hiiyar"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-secondary/70 to-primary/50"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 mx-auto max-w-7xl sm:px-10 lg:px-16">
        <div className="w-full max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl font-heebo">
            בית קפה מוביל בישראל
          </h1>
          <h2 className="mb-8 text-xl font-medium text-white md:text-2xl font-heebo">
            חווית לקוח מושלמת בכל ביקור
          </h2>
          <button
            onClick={onCtaClick}
            className="px-8 py-4 text-lg font-medium text-white transition-all duration-300 rounded-lg shadow-lg bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            קבע תור עכשיו
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center p-6">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </section>
  );
}