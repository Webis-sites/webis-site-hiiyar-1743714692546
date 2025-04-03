import React from 'react';
import { FaCoffee, FaLeaf, FaHeart } from 'react-icons/fa';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 rtl-direction">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="relative">
              <div className="absolute -top-5 -right-5 w-40 h-40 bg-primary opacity-20 rounded-full"></div>
              <div className="relative z-10 bg-white p-6 border-2 border-secondary shadow-custom">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 font-display">
                  אודות היאר
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg font-body">
                  אנחנו בית קפה מוביל בתחום הבריאות עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="bg-primary/10 p-3 rounded-full inline-flex items-center justify-center mb-2">
                      <FaCoffee className="text-primary text-xl" />
                    </div>
                    <p className="text-sm font-medium">קפה איכותי</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 p-3 rounded-full inline-flex items-center justify-center mb-2">
                      <FaLeaf className="text-primary text-xl" />
                    </div>
                    <p className="text-sm font-medium">מרכיבים טבעיים</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 p-3 rounded-full inline-flex items-center justify-center mb-2">
                      <FaHeart className="text-primary text-xl" />
                    </div>
                    <p className="text-sm font-medium">אהבה בכל כוס</p>
                  </div>
                </div>
                <div className="inline-block relative">
                  <button className="bg-secondary text-white px-6 py-3 rounded-md font-medium hover:bg-secondary/90 transition-all duration-300 shadow-md">
                    קרא עוד
                  </button>
                  <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-primary rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative">
              <div className="w-full h-80 md:h-96 relative">
                <Image
                  src="/images/cafe-interior.jpg"
                  alt="היאר בית קפה"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-md"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary/20 rounded-full"></div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-md shadow-lg border border-primary/20 w-3/4 text-center">
                <p className="text-secondary font-display text-lg md:text-xl italic">
                  "שילוב מושלם של אופנה וקפה איכותי"
                </p>
                <div className="w-12 h-1 bg-primary mx-auto my-2"></div>
                <p className="text-sm text-gray-600">היאר בית קפה - מאז 2010</p>
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-primary rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="fashion-element">
            <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-center text-gray-500 uppercase tracking-widest text-xs">סגנון</p>
          </div>
          <div className="fashion-element">
            <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-center text-gray-500 uppercase tracking-widest text-xs">איכות</p>
          </div>
          <div className="fashion-element">
            <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-center text-gray-500 uppercase tracking-widest text-xs">חדשנות</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;