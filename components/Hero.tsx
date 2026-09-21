'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Tape from './Tape';

const miniPortraits = [
  '/images/portraits/hero-black-white.jpg',
  '/images/portraits/portrait-02.jpg',
  '/images/portraits/portrait-03.jpg',
  '/images/portraits/portrait-04.jpg',
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-between items-center pt-16 pb-16 px-4 z-10">
      
      {/* Overhead Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-20 mt-4"
      >
        <h1 className="font-handwriting text-6xl md:text-8xl lg:text-9xl font-bold text-[#8E0E13] md:text-white tracking-wide drop-shadow-md select-none">
          creative portfolio
        </h1>

      </motion.div>

      {/* Hero Central Cream Paper Card Overlay (Matches exact Reference Screenshot) */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative mx-auto w-[92vw] max-w-[800px] bg-[#F3EEE7] p-6 md:p-10 rounded-xs border border-[#D8D8D6] shadow-2xl z-20 mt-8 rotate-[-0.2deg]"
        style={{
          boxShadow: '0 25px 60px -15px rgba(20, 16, 15, 0.35), 0 8px 20px rgba(0, 0, 0, 0.15)',
        }}
      >
        <Tape className="-top-3 left-8" variant="red" rotate="rotate-[-4deg]" />
        <Tape className="-top-3 right-8" variant="cream" rotate="rotate-[3deg]" />

        {/* Small Horizontal Mini Film Strip (4 B&W portraits in red frame) */}
        <div className="bg-[#8E0E13] p-2.5 md:p-3.5 rounded-xs shadow-md border border-[#6F090D] mb-6">
          
          {/* Perforations top/bottom */}
          <div className="flex justify-between items-center mb-1.5 px-1">
            <div className="flex gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="w-2.5 h-1.5 bg-[#F3EEE7] rounded-[1px]" />
              ))}
            </div>
            <span className="text-[8px] font-mono text-white/90 font-bold uppercase tracking-widest">
              35MM REEL
            </span>
            <div className="flex gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="w-2.5 h-1.5 bg-[#F3EEE7] rounded-[1px]" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-3">
            {miniPortraits.map((src, i) => (
              <div key={i} className="relative aspect-[3/4] overflow-hidden bg-black border border-white/20 shadow-inner">
                <Image
                  src={src}
                  alt={`Portrait ${i + 1}`}
                  fill
                  sizes="200px"
                  className="object-cover grayscale contrast-150 brightness-95 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Perforations bottom */}
          <div className="flex justify-between items-center mt-1.5 px-1">
            <div className="flex gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="w-2.5 h-1.5 bg-[#F3EEE7] rounded-[1px]" />
              ))}
            </div>
            <span className="text-[7px] font-mono text-white/70">
              35MM FILM REEL
            </span>
            <div className="flex gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="w-2.5 h-1.5 bg-[#F3EEE7] rounded-[1px]" />
              ))}
            </div>
          </div>
        </div>

        {/* Taped Red Label */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative bg-[#8E0E13] text-[#F3EEE7] px-8 py-2 rounded-xs shadow-md rotate-[-1deg] border border-[#6F090D] mb-4">
            <h2 className="font-handwriting text-3xl md:text-5xl font-bold tracking-wide">
              art & design journal
            </h2>
          </div>

          {/* Hand-drawn scribble arrow pointing down */}
          <div className="flex flex-col items-center text-[#8E0E13]">
            <span className="font-handwriting text-lg font-bold">
              click here to scroll down ↓
            </span>
            <svg viewBox="0 0 100 40" className="w-24 h-8 fill-none stroke-current stroke-[2]">
              <path d="M 10 10 Q 50 35, 90 10 M 80 20 L 90 10 L 85 2" />
            </svg>
          </div>
        </div>

      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="z-20 mt-8 text-center text-[#8E0E13] font-handwriting text-2xl font-bold"
      >
        scroll to explore ↓
      </motion.div>
    </section>
  );
}
