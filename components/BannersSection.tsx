'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrapbookCard from './ScrapbookCard';
import Tape from './Tape';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const banners = [
  { id: 'ganesh', src: '/images/banners/ganesh.jpg', alt: 'Ganesh Festival Banner' },
  { id: 'navaratri', src: '/images/banners/navaratri.jpg', alt: 'Navaratri Festival Banner' },
  { id: 'diwali', src: '/images/banners/diwali.jpg', alt: 'Diwali Festival Banner' },
];

export default function BannersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="banners" className="relative w-full max-w-6xl mx-auto flex flex-col gap-12 lg:gap-16 items-center justify-center py-12 px-4 z-20">
      
      {/* Title */}
      <div className="relative text-center mx-auto bg-[#F3EEE7] p-6 md:p-8 shadow-xl border border-[#D8D8D6] rotate-[1deg]">
        <Tape className="-top-3 right-8" variant="red" rotate="rotate-[-2deg]" />
        <Tape className="-bottom-3 left-8" variant="dark" rotate="rotate-[3deg]" />
        <h2 className="font-handwriting text-5xl md:text-7xl font-bold text-[#8E0E13]">
          Designed banners
        </h2>
        <p className="font-sans text-sm text-[#6F6862] mt-2">
          Celebrating culture through vibrant designs
        </p>
      </div>

      <div className="w-full flex justify-center mt-8">
        <ScrapbookCard 
          variant="cream" 
          rotate="rotate-[0.5deg]"
          className="w-full max-w-5xl p-3 md:p-6 border border-[#D8D8D6] shadow-2xl relative"
        >
          <Tape className="-top-4 left-1/2 transform -translate-x-1/2" variant="red" rotate="rotate-[1deg]" />
          
          <div className="relative w-full bg-neutral-900 overflow-hidden border border-black/80 group">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full"
              >
                <Image 
                  src={banners[currentIndex].src}
                  alt={banners[currentIndex].alt}
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 1024px) 90vw, 1000px"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="absolute inset-0 flex items-center justify-between p-2 md:p-4 pointer-events-none">
              <button 
                onClick={handlePrev}
                className="pointer-events-auto bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>
              
              <button 
                onClick={handleNext}
                className="pointer-events-auto bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>
            
            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {banners.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'}`}
                />
              ))}
            </div>

          </div>
          
        </ScrapbookCard>
      </div>
    </section>
  );
}
