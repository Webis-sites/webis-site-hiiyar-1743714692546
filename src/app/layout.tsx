import './globals.css';
import { Heebo, Rubik, Assistant } from 'next/font/google';

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-heebo',
});

const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-rubik',
});

const assistant = Assistant({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-assistant',
});

export const metadata = {
  title: 'hiiyar | בית קפה',
  description: 'בית קפה איכותי עם מגוון מאכלים ומשקאות מעולים',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${rubik.variable} ${assistant.variable}`}>
      <body className="min-h-screen w-full">
        {children}
      </body>
    </html>
  );
}