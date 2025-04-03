'use client';

import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const FooterSection: React.FC = () => {
  return (
    <footer className="w-full bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* לוגו ומידע */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-4">hiiyar</h3>
            <p className="mb-4">
              בית הקפה המעוצב והאיכותי ביותר בעיר. האווירה הנעימה והקפה המשובח שלנו יהפכו את הביקור לחוויה בלתי נשכחת.
            </p>
            <div className="flex justify-center md:justify-end space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-white hover:text-primary-light transition-colors duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-light transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-light transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-light transition-colors duration-300">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
          
          {/* שעות פעילות */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">שעות פעילות</h3>
            <ul className="space-y-2">
              <li>ראשון - חמישי: 08:00 - 22:00</li>
              <li>שישי: 08:00 - 15:00</li>
              <li>שבת: 10:00 - 22:00</li>
            </ul>
          </div>
          
          {/* פרטי קשר */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">צור קשר</h3>
            <ul className="space-y-2">
              <li>רחוב הכרמל 15, תל אביב</li>
              <li>טלפון: 03-1234567</li>
              <li>דוא"ל: info@hiiyar.co.il</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} hiiyar. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;