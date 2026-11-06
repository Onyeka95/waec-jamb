import type { Metadata } from 'next';
import { GoogleTagManager } from "@next/third-parties/google";
import './globals.css';

export const metadata: Metadata = {
  title: 'WAEC/JAMB Practice Coach - Pass in One Sitting on WhatsApp',
  description: 'Daily gamified WAEC & JAMB practice on WhatsApp. No app download needed.',
  icons: {
    icon: '/Pepzora_favicon2.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}