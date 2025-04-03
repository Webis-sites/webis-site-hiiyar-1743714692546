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
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${rubik.variable} ${assistant.variable} w-full`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="min-h-screen w-full overflow-x-hidden">
        <div className="w-full">
          {children}
        </div>
      </body>
    </html>
  );
}