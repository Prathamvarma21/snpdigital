'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ScrapbookCard from './ScrapbookCard';
import Tape from './Tape';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const hardSkills = [
  { name: 'Photoshop', icon: 'Ps' },
  { name: 'Illustrator', icon: 'Ai' },
  { name: 'After Effects', icon: 'Ae' },
  { name: 'Premiere Pro', icon: 'Pr' },
  { name: 'Figma', icon: 'Fg' },
  { name: 'Canva', icon: 'Cn' },
  { name: 'Blender', icon: '3D' },
];

const softSkills = [
  'Contribute creative ideas and perspectives',
  'Active team discussion & collaboration',
  'Developing innovative solutions to problem solving',
  'Effective communicator demonstrated through experience',
  'Artistic and design intuition honed through visual practice',
];

const experiences = [
  { role: 'Subject Ambassador', studio: 'University of Visual Arts', period: 'Sept 2025 — Present' },
  { role: 'Senior Visual Designer', studio: 'Studio Lumina, Milan', period: 'Feb 2025 — Current' },
  { role: 'Brand Graphic Designer', studio: 'Maison Noir Fashion', period: 'July 2024 — Feb 2025' },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    // ScrollTrigger to automatically expand surrounding cards as user scrolls into section
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 65%',
      onEnter: () => setIsOpen(true),
      onLeaveBack: () => setIsOpen(false),
    });

    return () => st.kill();
  }, []);

  return (
    <ScrapbookCard id="skills" variant="red" rotate="rotate-0" className="overflow-visible min-h-[780px]">
      <div ref={sectionRef} className="relative w-full min-h-[720px] flex items-center justify-center py-6">
        
        {/* TOP SECTION HEADER */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center z-20">
          <h2 className="font-handwriting text-5xl md:text-7xl font-bold text-white tracking-wide">
            skills & experience
          </h2>
        </div>


        {/* CONNECTING HAND-DRAWN WHITE LINES (Revealed when Open) */}
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden md:block"
          viewBox="0 0 1000 700"
          preserveAspectRatio="none"
        >
          {/* Line to Left Soft Skills */}
          <path d="M 500 350 Q 300 360, 260 380" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeDasharray="6 4" />
          {/* Line to Top Hard Skills */}
          <path d="M 500 350 Q 520 220, 530 140" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeDasharray="6 4" />
          {/* Line to Right Experience */}
          <path d="M 500 350 Q 700 340, 760 360" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeDasharray="6 4" />
          {/* Line to Top-Left Photo Scrap */}
          <path d="M 500 350 Q 320 220, 220 160" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeDasharray="6 4" />
        </motion.svg>

        {/* 1. CENTER MAIN TAPED SQUARE CARD (Always Clickable & Triggers Open/Close) */}
        <motion.div
          onClick={() => setIsOpen(!isOpen)}
          data-cursor="GO"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="relative z-30 cursor-pointer bg-[#F3EEE7] text-[#201C1B] p-8 md:p-10 rounded-xs shadow-2xl border border-[#D8D8D6] text-center w-[280px] md:w-[320px] min-h-[260px] flex flex-col items-center justify-center transition-shadow duration-300"
        >
          {/* Top Masking Tape */}
          <Tape className="-top-4 left-1/2 transform -translate-x-1/2 w-28" variant="dark" rotate="rotate-[0deg]" />

          <h3 className="font-handwriting text-6xl md:text-7xl font-bold text-[#8E0E13] mb-1 select-none">
            Skills
          </h3>
          <p className="font-handwriting text-2xl text-[#6F6862] select-none">
            my abilities
          </p>

          <div className="mt-6 pt-3 border-t border-[#8E0E13]/20 text-[9px] font-mono text-[#8E0E13] font-bold tracking-widest uppercase animate-pulse select-none">
            {isOpen ? '↓ SCROLL OR CLICK TO COLLAPSE' : '↑ CLICK OR SCROLL TO OPEN MOODBOARD'}
          </div>
        </motion.div>

        {/* SURROUNDING EXPANDING MOODBOARD CARDS (Revealing on Scroll / Open) */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* 2. TOP CARD: Hard Skills & App Icons */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.7 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.7 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="absolute top-16 md:top-8 left-1/2 transform -translate-x-1/2 z-20 bg-[#F3EEE7] text-[#201C1B] px-6 py-4 rounded-xs shadow-2xl rotate-[1deg] border border-[#D8D8D6] max-w-md w-[90%] md:w-auto"
              >
                <Tape className="-top-3 left-6" variant="cream" rotate="rotate-[-2deg]" />
                <h4 className="font-handwriting text-2xl font-bold text-[#8E0E13] mb-2 text-center">
                  hard skills
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {hardSkills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="bg-[#8E0E13] text-white px-2.5 py-1 rounded-xs flex items-center gap-1 shadow-sm text-[11px] font-mono font-bold tracking-wider"
                    >
                      <span className="text-[9px] text-[#F3EEE7]/80">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 3. LEFT CARD: Spiral Notebook Sheet - Soft Skills */}
              <motion.div
                initial={{ opacity: 0, x: -60, scale: 0.7 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -60, scale: 0.7 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute bottom-6 md:bottom-auto md:left-4 lg:left-8 z-20 bg-[#F3EEE7] text-[#201C1B] p-6 rounded-xs shadow-2xl rotate-[-2deg] border border-[#D8D8D6] w-[90%] md:w-[320px]"
              >
                {/* Spiral Notebook Hole Punch Top Edge */}
                <div className="flex justify-between items-center border-b-2 border-dashed border-[#8E0E13]/30 pb-3 mb-3">
                  <div className="flex gap-2">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="w-3 h-3 rounded-full bg-[#1A1616]" />
                    ))}
                  </div>
                </div>
                <Tape className="-top-3 left-4" variant="red" rotate="rotate-[-4deg]" />
                <h3 className="font-handwriting text-4xl font-bold text-[#8E0E13] mb-3">
                  soft skills
                </h3>
                <ul className="space-y-2 text-xs font-mono text-[#201C1B]/90 leading-snug">
                  {softSkills.map((skill, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#8E0E13] font-bold mt-0.5">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* 4. RIGHT CARD: Spiral Notebook Sheet - My Experience */}
              <motion.div
                initial={{ opacity: 0, x: 60, scale: 0.7 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 60, scale: 0.7 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute top-24 md:top-auto md:right-4 lg:right-8 z-20 bg-[#F3EEE7] text-[#201C1B] p-6 rounded-xs shadow-2xl rotate-[2deg] border border-[#D8D8D6] w-[90%] md:w-[340px]"
              >
                {/* Spiral Notebook Hole Punch Top Edge */}
                <div className="flex justify-between items-center border-b-2 border-dashed border-[#8E0E13]/30 pb-3 mb-3">
                  <div className="flex gap-2">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i} className="w-3 h-3 rounded-full bg-[#1A1616]" />
                    ))}
                  </div>
                </div>
                <Tape className="-top-3 right-6" variant="red" rotate="rotate-[3deg]" />
                <h3 className="font-handwriting text-4xl font-bold text-[#8E0E13] mb-4">
                  my experience
                </h3>
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <div key={index} className="pb-3 border-b border-[#D8D8D6] last:border-b-0">
                      <div className="font-sans font-bold text-sm text-[#201C1B]">
                        {exp.role}
                      </div>
                      <div className="text-xs font-mono text-[#8E0E13] font-semibold mt-0.5">
                        {exp.studio}
                      </div>
                      <div className="text-[10px] font-mono text-[#6F6862]">
                        {exp.period}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 5. TOP-LEFT CORNER: Torn Photo Scrap of Female Designer + Scissors Object */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: -6 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="absolute top-12 left-4 md:left-12 z-20 hidden sm:block"
              >
                {/* Physical Scissors Icon */}
                <div className="absolute -top-6 -left-6 z-30 text-neutral-300 transform -rotate-45 drop-shadow-md">
                  <svg className="w-12 h-12 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <path d="M8.5 7.5 L20 18 M8.5 16.5 L20 6" />
                  </svg>
                </div>

                <div className="bg-[#F3EEE7] p-2 pb-6 shadow-2xl border border-[#D8D8D6] rotate-[-5deg] w-40">
                  <div className="relative aspect-[3/4] w-full bg-black overflow-hidden border border-black/40">
                    <Image
                      src="/images/portraits/portrait-02.jpg"
                      alt="Valentina Cutout Photo"
                      fill
                      sizes="180px"
                      className="object-cover grayscale contrast-150"
                    />
                  </div>
                  <span className="block text-center font-handwriting text-xs text-[#8E0E13] mt-1 font-bold">
                    photo scrap #01
                  </span>
                </div>
              </motion.div>

              {/* 6. BOTTOM-LEFT CORNER: Cassette Tape & Star Sticker */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.6 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-6 left-12 md:left-44 z-20 hidden md:block"
              >
                <div className="bg-[#F3EEE7] text-[#201C1B] px-5 py-3 rounded-xs border-2 border-neutral-700 shadow-2xl rotate-[3deg] flex flex-col items-center w-52">
                  <div className="w-full flex justify-between items-center text-[8px] font-mono font-bold text-[#8E0E13] mb-1">
                    <span>ARCTIC MONKEYS</span>
                    <span>SIDE A</span>
                  </div>
                  <div className="bg-black/90 w-full h-8 rounded-sm flex items-center justify-around px-4 mb-1">
                    <div className="w-4 h-4 rounded-full border-2 border-white/80 animate-spin" />
                    <span className="text-[7px] font-mono text-white">Do I Wanna Know?</span>
                    <div className="w-4 h-4 rounded-full border-2 border-white/80 animate-spin" />
                  </div>
                  <span className="text-[8px] font-mono text-[#6F6862]">STUDIO SOUNDTRACK ♫</span>
                </div>
              </motion.div>

              {/* 7. BOTTOM-RIGHT CORNER: Taped B&W Photo & Ticket Stub ("good things are coming") */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
                animate={{ opacity: 1, scale: 1, rotate: 6 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="absolute bottom-8 right-6 md:right-16 z-20 hidden sm:block"
              >
                <Tape className="-top-3 right-4" variant="cream" rotate="rotate-[4deg]" />
                
                {/* Ticket Stub Sticker */}
                <div className="absolute -top-4 -left-6 z-30 bg-[#8E0E13] text-white px-2 py-1 text-[8px] font-mono font-bold tracking-widest uppercase rotate-[-12deg] shadow-md border border-white/20">
                  GOOD THINGS ARE COMING
                </div>

                <div className="bg-[#F3EEE7] p-2 pb-5 shadow-2xl border border-[#D8D8D6] w-36">
                  <div className="relative aspect-[3/4] w-full bg-black overflow-hidden">
                    <Image
                      src="/images/portraits/portrait-04.jpg"
                      alt="Valentina B&W Photo"
                      fill
                      sizes="160px"
                      className="object-cover grayscale contrast-150"
                    />
                  </div>
                </div>
              </motion.div>

              {/* 8. TOP-RIGHT CORNER: Playing Cards (Ace of Spades / Clubs) */}
              <motion.div
                initial={{ opacity: 0, y: -20, rotate: -20 }}
                animate={{ opacity: 1, y: 0, rotate: 12 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-10 right-8 md:right-24 z-20 hidden lg:block"
              >
                <div className="bg-[#F3EEE7] text-[#201C1B] px-3 py-4 rounded-xs border border-[#D8D8D6] shadow-xl w-16 text-center font-serif font-bold text-lg leading-none">
                  <span>A</span>
                  <span className="block text-xs mt-1">♠</span>
                </div>
              </motion.div>

            </>
          )}
        </AnimatePresence>

      </div>
    </ScrapbookCard>
  );
}
