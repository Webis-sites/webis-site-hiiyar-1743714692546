'use client';

import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import { TimePicker } from 'react-time-picker';
import { motion } from 'framer-motion';
import './custom-calendar.css';

type BookingFormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
  date: Date | null;
  time: string | null;
};

const BookingSystem: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    date: new Date(),
    time: '12:00',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Booking submitted:', formData);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
          date: new Date(),
          time: '12:00',
        });
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting booking:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="booking-system-container rtl bg-white rounded-lg shadow-xl p-6 max-w-2xl mx-auto my-8 border-t-4 border-primary">
      <h2 className="text-3xl font-bold text-center mb-6 text-secondary">הזמנת שולחן</h2>
      
      {submitSuccess ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="success-message bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 text-center"
        >
          <p className="text-lg">ההזמנה התקבלה בהצלחה! ניצור איתך קשר בהקדם.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-group">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">שם</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="השם המלא שלך"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">טלפון</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="מספר הטלפון שלך"
                dir="ltr"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">אימייל</label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="כתובת האימייל שלך"
              dir="ltr"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">הודעה</label>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="הערות מיוחדות, בקשות או שאלות"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-2">תאריך</label>
              <div className="calendar-wrapper border border-gray-300 rounded-md overflow-hidden">
                <Calendar
                  onChange={(value) => {
                    if (value instanceof Date) {
                      setFormData((prev) => ({
                        ...prev,
                        date: value,
                      }));
                    }
                  }}
                  value={formData.date}
                  minDate={new Date()}
                  className="booking-calendar"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-2">שעה</label>
              <div className="time-picker-wrapper border border-gray-300 rounded-md p-4">
                <TimePicker
                  onChange={(value) => {
                    setFormData((prev) => ({
                      ...prev,
                      time: value || '12:00',
                    }));
                  }}
                  value={formData.time}
                  clearIcon={null}
                  clockIcon={null}
                  disableClock={true}
                  format="HH:mm"
                  className="booking-time-picker"
                />
                <p className="text-sm text-gray-500 mt-2">שעות פעילות: 08:00 - 23:00</p>
              </div>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 text-white font-bold rounded-md shadow-md transition-all duration-300 ${
              isSubmitting ? 'bg-gray-400' : 'bg-secondary hover:bg-secondary/90'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                מעבד...
              </span>
            ) : (
              'קבע תור עכשיו'
            )}
          </motion.button>
        </form>
      )}
    </div>
  );
};

export default BookingSystem;