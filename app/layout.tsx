import type { Metadata } from 'next';
import { Caveat, DM_Sans } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import NavPill from '@/components/NavPill';

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-handwritten',
  weight: ['400', '600', '700'],
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VALENTINA ROSSI — Personal Art Portfolio & Journal',
  description: 'A visual designer and artist personal scrapbook portfolio presented inside a vintage film reel.',
  keywords: ['female designer', 'visual artist', 'art direction', 'graphic design', 'film reel portfolio'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${caveat.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="bg-[#D9D9D7] text-[#201C1B] font-sans antialiased selection:bg-[#8E0E13] selection:text-white overflow-x-hidden relative min-h-screen">
        {/* Custom cursor for desktop */}
        <CustomCursor />
        {/* Floating Minimal Section Navigator */}
        <NavPill />
        {children}
      </body>
    </html>
  );
}
