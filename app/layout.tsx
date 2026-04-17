import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WAEC/JAMB Practice Coach - Pass in One Sitting on WhatsApp',
  description: 'Daily gamified WAEC & JAMB practice on WhatsApp. No app download needed.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}