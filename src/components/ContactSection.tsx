'use client';

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitMessage('תודה על פנייתך! נחזור אליך בהקדם.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setSubmitMessage('אירעה שגיאה בשליחת הטופס. אנא נסה שוב.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-16 px-4 font-heebo" dir="rtl">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-secondary">צור קשר</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-primary">שלח לנו הודעה</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">שם מלא</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="הכנס את שמך המלא"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">טלפון</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="הכנס את מספר הטלפון שלך"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">אימייל</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="הכנס את כתובת האימייל שלך"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">הודעה</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="כתוב את הודעתך כאן"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 disabled:opacity-70"
              >
                {isSubmitting ? 'שולח...' : 'שלח הודעה'}
              </button>
              
              {submitMessage && (
                <div className={`mt-4 p-3 rounded-md ${submitMessage.includes('תודה') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">פרטי התקשרות</h3>
              
              <ul className="space-y-6">
                <li className="flex items-center">
                  <div className="bg-primary text-white p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-secondary">כתובת</h4>
                    <p className="text-gray-600">רחוב הזית 42, תל אביב</p>
                  </div>
                </li>
                
                <li className="flex items-center">
                  <div className="bg-primary text-white p-3 rounded-full mr-4">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-secondary">טלפון</h4>
                    <p className="text-gray-600">03-1234567</p>
                  </div>
                </li>
                
                <li className="flex items-center">
                  <div className="bg-primary text-white p-3 rounded-full mr-4">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-secondary">אימייל</h4>
                    <p className="text-gray-600">info@hiiyar.co.il</p>
                  </div>
                </li>
                
                <li className="flex items-center">
                  <div className="bg-primary text-white p-3 rounded-full mr-4">
                    <FaClock className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-secondary">שעות פעילות</h4>
                    <p className="text-gray-600">ראשון-חמישי: 08:00-22:00</p>
                    <p className="text-gray-600">שישי: 08:00-16:00</p>
                    <p className="text-gray-600">שבת: 10:00-22:00</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-8">
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">מפה תוטמע כאן</p>
              </div>
              
              {/* Social Media Icons */}
              <div className="mt-6 flex justify-center space-x-6">
                <a href="#" className="text-primary hover:text-secondary transition-colors duration-300">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#" className="text-primary hover:text-secondary transition-colors duration-300">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" className="text-primary hover:text-secondary transition-colors duration-300">
                  <FaTwitter className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;