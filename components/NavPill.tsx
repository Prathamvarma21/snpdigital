'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';

const navItems = [
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'art', label: 'ART' },
  { id: 'design', label: 'DESIGN' },
  { id: 'reels', label: 'REELS' },
  { id: 'influencers', label: 'COLLABS' },
  { id: 'website', label: 'WEBSITE' },
];

export default function NavPill() {
  const [activeSection, setActiveSection] = useState('hero');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
      
      if (pathname === '/website') {
        setActiveSection('website');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    if (id === 'website') {
      router.push('/website');
    } else {
      if (pathname !== '/') {
        router.push('/');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed top-6 right-6 z-40 hidden md:flex items-center gap-1.5 bg-[#F3EEE7]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#8E0E13]/20 shadow-md">
      <span className="font-handwriting text-sm font-bold text-[#8E0E13] mr-2 tracking-widest uppercase">
        Portfolio
      </span>
      <div className="h-3 w-[1px] bg-[#8E0E13]/30 mr-1" />
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            data-cursor="GO"
            className={`px-2.5 py-1 text-xs tracking-wider transition-all duration-300 font-sans relative ${
              isActive ? 'text-[#8E0E13] font-bold' : 'text-[#6F6862] hover:text-[#201C1B]'
            }`}
          >
            {item.label}
            {isActive && (
              <motion.div
                layoutId="activeNavTab"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-[2px] bg-[#8E0E13] rounded-full"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
