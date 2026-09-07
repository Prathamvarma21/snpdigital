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
    <ScrapbookCard id="skills" variant="red" rotate="rotate-0" className="overflow-visible min-h-[600px] md:min-h-[780px]">
      <div ref={sectionRef} className="relative w-full flex flex-col items-center justify-center py-6">
        
        {/* TOP SECTION HEADER */}
        <div className="text-center z-20 mb-8 md:mb-0 md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2">
          <h2 className="font-handwriting text-5xl md:text-7xl font-bold text-white tracking-wide">
            skills & experience
          </h2>
        </div>

        {/* CONNECTING HAND-DRAWN WHITE LINES (Revealed when Open on Desktop/Tablet) */}
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden md:block"
          viewBox="0 0 1000 700"
          preserveAspectRatio="none"
        >
          <path d="M 500 350 Q 300 360, 260 380" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeDasharray="6 4" />
          <path d="M 500 350 Q 520 220, 530 140" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeDasharray="6 4" />
          <path d="M 500 350 Q 700 340, 760 360" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeDasharray="6 4" />
          <path d="M 500 350 Q 320 220, 220 160" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeDasharray="6 4" />
        </motion.svg>

        {/* 1. CENTER MAIN TAPED SQUARE CARD (Always Clickable & Triggers Open/Close) */}
        <motion.div
          onClick={() => setIsOpen(!isOpen)}
          data-cursor="GO"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="relative z-30 cursor-pointer bg-[#F3EEE7] text-[#201C1B] p-6 sm:p-8 md:p-10 rounded-xs shadow-2xl border border-[#D8D8D6] text-center w-[90%] max-w-[320px] min-h-[240px] md:min-h-[260px] flex flex-col items-center justify-center my-4 md:my-0 transition-shadow duration-300"
        >
          <Tape className="-top-4 left-1/2 transform -translate-x-1/2 w-28" variant="dark" rotate="rotate-[0deg]" />

          <h3 className="font-handwriting text-5xl sm:text-6xl md:text-7xl font-bold text-[#8E0E13] mb-1 select-none">
            Skills
          </h3>
          <p className="font-handwriting text-xl sm:text-2xl text-[#6F6862] select-none">
            my abilities
          </p>

          <div className="mt-4 pt-3 border-t border-[#8E0E13]/20 text-[9px] font-mono text-[#8E0E13] font-bold tracking-widest uppercase animate-pulse select-none">
            {isOpen ? '↓ SCROLL OR CLICK TO COLLAPSE' : '↑ CLICK OR SCROLL TO OPEN MOODBOARD'}
          </div>
        </motion.div>

        {/* SURROUNDING EXPANDING MOODBOARD CARDS (Desktop/iPad Absolute Layout & Mobile Flex Layout) */}
        <AnimatePresence>
          {isOpen && (
            <div className="w-full flex flex-col md:block items-center gap-6 mt-6 md:mt-0 z-20">
              
              {/* 2. Hard Skills Card */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative md:absolute md:top-8 md:left-1/2 md:transform md:-translate-x-1/2 bg-[#F3EEE7] text-[#201C1B] px-6 py-4 rounded-xs shadow-2xl rotate-[1deg] border border-[#D8D8D6] w-[92%] max-w-md md:w-auto"
              >
                <Tape className="-top-3 left-6" variant="cream" rotate="rotate-[-2deg]" />
                <h4 className="font-handwriting text-2xl font-bold text-[#8E0E13] mb-2 text-center">
                  hard skills & software
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

              {/* 3. Soft Skills Card */}
              <motion.div
                initial={{ opacity: 0, x: -40, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:left-4 lg:left-8 bg-[#F3EEE7] text-[#201C1B] p-6 rounded-xs shadow-2xl rotate-[-2deg] border border-[#D8D8D6] w-[92%] max-w-sm md:w-[320px]"
              >
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

              {/* 4. Experience Card */}
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:right-4 lg:right-8 bg-[#F3EEE7] text-[#201C1B] p-6 rounded-xs shadow-2xl rotate-[2deg] border border-[#D8D8D6] w-[92%] max-w-sm md:w-[340px]"
              >
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

              {/* 5. Photo Scraps & Objects (Desktop/Tablet Accents) */}
              <div className="hidden sm:flex flex-wrap justify-center gap-6 mt-4 md:block">
                <div className="md:absolute md:top-12 md:left-12 bg-[#F3EEE7] p-2 pb-6 shadow-2xl border border-[#D8D8D6] rotate-[-5deg] w-40">
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

                <div className="md:absolute md:bottom-8 md:right-16 bg-[#F3EEE7] p-2 pb-5 shadow-2xl border border-[#D8D8D6] w-36 rotate-[6deg]">
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
              </div>

            </div>
          )}
        </AnimatePresence>

      </div>
    </ScrapbookCard>
  );
}
