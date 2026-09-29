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
  { name: 'Photoshop', icon: 'Ps', bg: 'bg-[#001E36]', text: 'text-[#31A8FF]' },
  { name: 'InDesign', icon: 'Id', bg: 'bg-[#2D001E]', text: 'text-[#FF3366]' },
  { name: 'Illustrator', icon: 'Ai', bg: 'bg-[#330000]', text: 'text-[#FF9A00]' },
  { name: 'After Effects', icon: 'Ae', bg: 'bg-[#00005C]', text: 'text-[#9999FF]' },
  { name: 'Premiere Pro', icon: 'Pr', bg: 'bg-[#00005C]', text: 'text-[#EA77FF]' },
  { name: 'Canva', icon: 'Cn', bg: 'bg-[#00C4CC]', text: 'text-white' },
  { name: 'Figma', icon: 'Fg', bg: 'bg-[#1E1E1E]', text: 'text-[#F24E1E]' },
  { name: 'Blender', icon: '3D', bg: 'bg-[#EA7600]', text: 'text-white' },
];

const softSkills = [
  'Contribute creative ideas and perspectives',
  'Active team discussion & collaboration',
  'Developing innovative solutions to problem solving and overall team productivity',
  'Effective communicator demonstrated through our experience',
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
    <ScrapbookCard id="skills" variant="red" rotate="rotate-0" className="overflow-visible py-8 md:py-12">
      <div
        ref={sectionRef}
        className={`relative w-full transition-all duration-700 ease-out flex flex-col items-center justify-center ${
          isOpen ? 'min-h-[620px] md:min-h-[820px] lg:min-h-[860px]' : 'min-h-[380px] md:min-h-[460px]'
        }`}
      >
        
        {/* SVG CONNECTING HAND-DRAWN WHITE STRING LINES (Appears when Open on Desktop/Tablet) */}
        <AnimatePresence>
          {isOpen && (
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden md:block"
              viewBox="0 0 1000 800"
              preserveAspectRatio="none"
            >
              {/* String to Hard Skills (Top Center) */}
              <path d="M 500 420 Q 490 260, 500 130" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="2.5" strokeDasharray="6 4" />
              {/* String to Top Left Photo Scrap */}
              <path d="M 500 420 Q 320 320, 220 220" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="2.5" strokeDasharray="6 4" />
              {/* String to Soft Skills (Bottom Left) */}
              <path d="M 500 420 Q 330 520, 240 600" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="2.5" strokeDasharray="6 4" />
              {/* String to Experience Card (Right) */}
              <path d="M 500 420 Q 720 450, 780 480" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="2.5" strokeDasharray="6 4" />
            </motion.svg>
          )}
        </AnimatePresence>

        {/* 1. CENTER MAIN TAPED SKILLS CARD (Matches Screenshot 1 & 2 Center Hub) */}
        <motion.div
          onClick={() => setIsOpen(!isOpen)}
          data-cursor="GO"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className={`z-30 cursor-pointer bg-[#F3EEE7] text-[#201C1B] p-6 sm:p-8 rounded-xs shadow-2xl border border-[#D8D8D6] text-center w-full max-w-[280px] sm:max-w-[320px] min-h-[220px] sm:min-h-[250px] flex flex-col items-center justify-center transition-all duration-500 ${
            isOpen ? 'md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2' : 'relative my-auto'
          }`}
        >
          <Tape className="-top-4 left-1/2 transform -translate-x-1/2 w-28" variant="dark" rotate="rotate-[0deg]" />

          <h3 className="font-handwriting text-5xl sm:text-6xl md:text-7xl font-bold text-[#8E0E13] mb-1 select-none">
            Skills
          </h3>
          <p className="font-handwriting text-xl sm:text-2xl text-[#6F6862] select-none">
            our abilities
          </p>

          <div className="mt-4 pt-3 border-t border-[#8E0E13]/20 text-[10px] font-mono text-[#8E0E13] font-bold tracking-widest uppercase animate-pulse select-none">
            {isOpen ? 'click to collapse' : 'click here!!'}
          </div>
        </motion.div>

        {/* 2. SURROUNDING POPOUT MOODBOARD ITEMS (Revealed when Open) */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* DESKTOP POPOUT LAYOUT (Exact Match for Screenshot 2) */}
              <div className="hidden md:block absolute inset-0 pointer-events-auto">
                
                {/* A. HARD SKILLS CARD (Top Center) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.4, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.4, y: 50 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="absolute top-[3%] left-1/2 transform -translate-x-1/2 bg-[#F3EEE7] text-[#201C1B] p-4 sm:p-5 rounded-xs shadow-2xl rotate-[-1deg] border border-[#D8D8D6] z-20 flex items-center gap-4 min-w-[340px] max-w-[440px]"
                >
                  <Tape className="-top-3 left-6" variant="cream" rotate="rotate-[-3deg]" />
                  <div className="border-r border-[#8E0E13]/20 pr-4">
                    <h4 className="font-handwriting text-3xl font-bold text-[#8E0E13] leading-none">
                      hard<br />skills
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5 flex-1">
                    {hardSkills.map((skill, idx) => (
                      <div
                        key={idx}
                        className={`${skill.bg} ${skill.text} px-2 py-1 rounded-[3px] text-[10px] font-mono font-bold tracking-wider shadow-xs flex items-center gap-1`}
                      >
                        <span>{skill.icon}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* B. TOP LEFT PHOTO SCRAP WITH SCISSORS */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.4, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.4, x: 50 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="absolute top-[4%] left-[4%] z-20 flex items-start gap-2"
                >
                  {/* Scissors Icon */}
                  <div className="text-white/80 rotate-[-30deg] mt-6 text-3xl select-none">
                    ✂️
                  </div>
                  <div className="bg-[#F3EEE7] p-2 pb-5 shadow-2xl border border-[#D8D8D6] rotate-[-5deg] w-44 relative">
                    <Tape className="-top-3 left-4" variant="cream" rotate="rotate-[-5deg]" />
                    <div className="relative aspect-[3/4] w-full bg-black overflow-hidden border border-black/40">
                      <Image
                        src="/images/CREATIVE/2.jpg"
                        alt="Photo Scrap"
                        fill
                        sizes="200px"
                        className="object-cover grayscale contrast-150"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* C. TOP RIGHT VINTAGE PLAYING CARDS */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.4, x: -50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.4, x: -50 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute top-[5%] right-[6%] z-20 flex gap-[-10px] rotate-[12deg] select-none"
                >
                  <div className="w-14 h-20 bg-white rounded-xs border border-gray-300 shadow-lg flex flex-col justify-between p-1.5 rotate-[-8deg]">
                    <span className="text-[10px] font-bold text-red-600 leading-none">A♥</span>
                    <span className="text-center text-lg text-red-600">♥</span>
                    <span className="text-[10px] font-bold text-red-600 leading-none text-right">A</span>
                  </div>
                  <div className="w-14 h-20 bg-white rounded-xs border border-gray-300 shadow-lg flex flex-col justify-between p-1.5 -ml-6 rotate-[6deg]">
                    <span className="text-[10px] font-bold text-black leading-none">A♣</span>
                    <span className="text-center text-lg text-black">♣</span>
                    <span className="text-[10px] font-bold text-black leading-none text-right">A</span>
                  </div>
                </motion.div>

                {/* D. SOFT SKILLS NOTEBOOK CARD (Bottom Left) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.4, y: -50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.4, y: -50 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="absolute bottom-[4%] left-[2%] bg-[#F3EEE7] text-[#201C1B] p-6 rounded-xs shadow-2xl rotate-[-1deg] border border-[#D8D8D6] w-[340px] lg:w-[370px] z-20"
                >
                  <div className="flex justify-between items-center border-b-2 border-dashed border-[#8E0E13]/30 pb-3 mb-3">
                    <div className="flex gap-2">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="w-3 h-3 rounded-full bg-[#1A1616]" />
                      ))}
                    </div>
                  </div>
                  <Tape className="-top-3 left-4" variant="red" rotate="rotate-[-4deg]" />
                  <h3 className="font-handwriting text-4xl font-bold text-[#8E0E13] mb-3">
                    soft skills
                  </h3>
                  <ul className="space-y-2 text-xs font-mono text-[#201C1B]/90 leading-relaxed">
                    {softSkills.map((skill, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#8E0E13] font-bold mt-0.5">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* E. MY EXPERIENCE NOTEBOOK CARD (Right Side) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.4, x: -50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.4, x: -50 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute top-[28%] right-[2%] bg-[#F3EEE7] text-[#201C1B] p-6 rounded-xs shadow-2xl rotate-[1.5deg] border border-[#D8D8D6] w-[350px] lg:w-[390px] z-20"
                >
                  <div className="flex justify-between items-center border-b-2 border-dashed border-[#8E0E13]/30 pb-3 mb-3">
                    <div className="flex gap-2">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="w-3 h-3 rounded-full bg-[#1A1616]" />
                      ))}
                    </div>
                  </div>
                  <Tape className="-top-3 right-6" variant="red" rotate="rotate-[3deg]" />
                  <h3 className="font-handwriting text-4xl font-bold text-[#8E0E13] mb-4">
                    our experience
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

                {/* F. BOTTOM RIGHT PHOTO SCRAP & TICKET STUB */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.4, y: -40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.4, y: -40 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="absolute bottom-[4%] right-[32%] z-20 flex items-center gap-2"
                >
                  <div className="bg-[#F3EEE7] p-2 pb-5 shadow-2xl border border-[#D8D8D6] w-36 rotate-[6deg]">
                    <Tape className="-top-3 left-1/2 transform -translate-x-1/2 w-20" variant="dark" rotate="rotate-[-2deg]" />
                    <div className="relative aspect-[3/4] w-full bg-black overflow-hidden">
                      <Image
                        src="/images/Social Media Intern/1.jpg"
                        alt="Photo"
                        fill
                        sizes="160px"
                        className="object-cover grayscale contrast-150"
                      />
                    </div>
                  </div>
                </motion.div>

              </div>

              {/* MOBILE POPOUT FLOW (< 768px Viewports) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                className="md:hidden flex flex-col items-center gap-6 mt-6 w-full z-20"
              >
                {/* Mobile Hard Skills */}
                <div className="bg-[#F3EEE7] text-[#201C1B] p-4 rounded-xs shadow-xl border border-[#D8D8D6] w-full max-w-sm text-center">
                  <h4 className="font-handwriting text-2xl font-bold text-[#8E0E13] mb-2">
                    hard skills
                  </h4>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {hardSkills.map((skill, idx) => (
                      <div
                        key={idx}
                        className={`${skill.bg} ${skill.text} px-2 py-1 rounded-[3px] text-[10px] font-mono font-bold tracking-wider`}
                      >
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Soft Skills */}
                <div className="bg-[#F3EEE7] text-[#201C1B] p-5 rounded-xs shadow-xl border border-[#D8D8D6] w-full max-w-sm">
                  <h3 className="font-handwriting text-3xl font-bold text-[#8E0E13] mb-3">
                    soft skills
                  </h3>
                  <ul className="space-y-2 text-xs font-mono text-[#201C1B]/90 leading-snug">
                    {softSkills.map((skill, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#8E0E13] font-bold">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mobile Experience */}
                <div className="bg-[#F3EEE7] text-[#201C1B] p-5 rounded-xs shadow-xl border border-[#D8D8D6] w-full max-w-sm">
                  <h3 className="font-handwriting text-3xl font-bold text-[#8E0E13] mb-3">
                    our experience
                  </h3>
                  <div className="space-y-3">
                    {experiences.map((exp, index) => (
                      <div key={index} className="pb-2 border-b border-[#D8D8D6] last:border-b-0">
                        <div className="font-sans font-bold text-xs text-[#201C1B]">
                          {exp.role}
                        </div>
                        <div className="text-[11px] font-mono text-[#8E0E13] font-semibold">
                          {exp.studio}
                        </div>
                        <div className="text-[10px] font-mono text-[#6F6862]">
                          {exp.period}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </ScrapbookCard>
  );
}


