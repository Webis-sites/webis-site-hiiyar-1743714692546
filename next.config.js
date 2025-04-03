/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'cloudinary.com'],
  },
  
  // התעלם מקבצי CSS חיצוניים בעייתיים
  webpack: (config) => {
    // התעלם מקבצי CSS של ספריות חיצוניות שיוצרים בעיות
    config.module.rules.push({
      test: /node_modules[\\/](react-calendar|react-clock|react-time-picker)[\\/].+\.css$/,
      use: 'null-loader',
    });
    
    return config;
  },
};

module.exports = nextConfig;