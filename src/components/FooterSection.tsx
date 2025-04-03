'use client';

import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

interface FooterSectionProps {
  companyName?: string;
  companyDescription?: string;
  year?: number;
}

const FooterSection: React.FC<FooterSectionProps> = ({
  companyName = 'היאר',
  companyDescription = 'בית קפה היאר - חוויה קולינרית ייחודית המשלבת איכות, מקצועיות ושירות מעולה. אנו מחויבים לספק את החוויה הטובה ביותר ללקוחותינו בישראל.',
  year = new Date().getFullYear(),
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically handle the newsletter subscription
      // For now, we'll just show a success message
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-primary-light text-secondary-dark rtl" dir="rtl">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{companyName}</h3>
            <p className="mb-4 text-secondary-dark/80">{companyDescription}</p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-secondary-dark hover:text-secondary transition-colors">
                <FaFacebook size={24} />
                <span className="sr-only">פייסבוק</span>
              </a>
              <a href="#" className="text-secondary-dark hover:text-secondary transition-colors">
                <FaInstagram size={24} />
                <span className="sr-only">אינסטגרם</span>
              </a>
              <a href="#" className="text-secondary-dark hover:text-secondary transition-colors">
                <FaTwitter size={24} />
                <span className="sr-only">טוויטר</span>
              </a>
              <a href="#" className="text-secondary-dark hover:text-secondary transition-colors">
                <FaWhatsapp size={24} />
                <span className="sr-only">וואטסאפ</span>
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ניווט מהיר</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-secondary-dark/80 hover:text-secondary transition-colors">דף הבית</a>
              </li>
              <li>
                <a href="#" className="text-secondary-dark/80 hover:text-secondary transition-colors">אודות</a>
              </li>
              <li>
                <a href="#" className="text-secondary-dark/80 hover:text-secondary transition-colors">שירותים</a>
              </li>
              <li>
                <a href="#" className="text-secondary-dark/80 hover:text-secondary transition-colors">תפריט</a>
              </li>
              <li>
                <a href="#" className="text-secondary-dark/80 hover:text-secondary transition-colors">צור קשר</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h3 className="text-2xl font-bold mb-4">הצטרפו לניוזלטר</h3>
            {!subscribed ? (
              <form onSubmit={handleSubmit} className="mb-4">
                <div className="flex flex-col space-y-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="הזינו את כתובת האימייל שלכם"
                    className="px-4 py-2 rounded-md border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-dark transition-colors"
                  >
                    הרשמה
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-green-100 text-green-800 p-3 rounded-md mb-4">
                תודה שנרשמת! בקרוב תקבל/י עדכונים ומבצעים.
              </div>
            )}
            <div className="flex items-center space-x-2 space-x-reverse">
              <FaEnvelope className="text-secondary-dark" />
              <a href="mailto:info@hiiyar.co.il" className="text-secondary-dark/80 hover:text-secondary transition-colors">
                info@hiiyar.co.il
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary/20 mt-8 pt-6 text-center text-secondary-dark/70">
          <p>© {year} {companyName}. כל הזכויות שמורות.</p>
          <p className="text-xs mt-2">
            <span className="mx-1">בית קפה</span>•
            <span className="mx-1">שירות</span>•
            <span className="mx-1">איכות</span>•
            <span className="mx-1">מקצועיות</span>•
            <span className="mx-1">ישראל</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;