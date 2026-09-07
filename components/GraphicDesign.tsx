'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ScrapbookCard from './ScrapbookCard';
import Tape from './Tape';
import ProjectImage from './ProjectImage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const row1Projects = [
  { id: '01', src: '/images/graphic-design/graphic-01.jpg', title: 'ÉCLIPSE Couture', category: 'FASHION POSTER', year: '2026' },
  { id: '02', src: '/images/graphic-design/graphic-02.jpg', title: 'Mode Expression Spread', category: 'MAGAZINE SPREAD', year: '2026' },
  { id: '03', src: '/images/graphic-design/graphic-03.jpg', title: 'Creative Harmony Type', category: 'TYPOGRAPHY POSTER', year: '2025' },
  { id: '04', src: '/images/graphic-design/graphic-04.jpg', title: 'Botanical Echo Identity', category: 'BRAND IDENTITY', year: '2025' },
  { id: '05', src: '/images/artwork/art-01.jpg', title: 'Chromatic Portrait', category: 'DIGITAL PAINTING', year: '2026' },
  { id: '06', src: '/images/artwork/art-02.jpg', title: 'Avant-Garde Watercolor', category: 'FASHION ART', year: '2026' },
];

const row2Projects = [
  { id: '07', src: '/images/graphic-design/graphic-05.jpg', title: 'Milan Art Fest 2026', category: 'EVENT POSTER', year: '2026' },
  { id: '08', src: '/images/graphic-design/graphic-06.jpg', title: 'Surreal Vinyl Album', category: 'ALBUM COVER', year: '2024' },
  { id: '09', src: '/images/graphic-design/graphic-07.jpg', title: 'Magenta Neon Experiment', category: 'EXPERIMENTAL COMPOSITION', year: '2026' },
  { id: '10', src: '/images/artwork/art-03.jpg', title: 'Surreal Geometry', category: 'ABSTRACT ART', year: '2025' },
  { id: '11', src: '/images/artwork/art-04.jpg', title: 'Tropical Echoes', category: 'BOTANICAL COLLAGE', year: '2025' },
  { id: '12', src: '/images/artwork/art-05.jpg', title: 'Neon Gel Vignette', category: 'FINE ART PHOTO', year: '2026' },
];

export default function GraphicDesign() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !row1Ref.current || !row2Ref.current) return;

    // Row 1 moves smoothly LEFT on scroll
    const anim1 = gsap.to(row1Ref.current, {
      x: '-25%',
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
      },
    });

    // Row 2 moves smoothly RIGHT on scroll
    const anim2 = gsap.to(row2Ref.current, {
      x: '25%',
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
      },
    });

    return () => {
      anim1.scrollTrigger?.kill();
      anim2.scrollTrigger?.kill();
      anim1.kill();
      anim2.kill();
    };
  }, []);

  return (
    <ScrapbookCard id="design" variant="red" rotate="rotate-0" className="overflow-hidden py-12 md:py-16">
      <div ref={sectionRef} className="relative w-full flex flex-col items-center">
        
        {/* 1. TOP HEADER & EDITORIAL TEXT (Exact Match for Screenshot Image 1) */}
        <div className="text-center max-w-3xl mx-auto mb-12 px-4 z-20">
          <h2 className="font-handwriting text-6xl sm:text-8xl md:text-9xl font-bold text-white tracking-wide mb-6 drop-shadow-md select-none">
            graphic design
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-white/90 font-sans leading-relaxed max-w-2xl mx-auto font-light">
            Through my love of art, I began exploring new ways of creating and expressing ideas. My work integrates digital tools like Photoshop, Illustrator and InDesign, allowing me to expand my practice into editorial layouts, brand identity, and high contrast print compositions.
          </p>
        </div>

        {/* 2. DOUBLE-ROW SMOOTH HORIZONTAL SLIDING IMAGE STRIPS (Exact Match for Screenshot Image 2) */}
        <div className="w-full flex flex-col gap-6 md:gap-8 my-6 overflow-hidden z-10">
          
          {/* ROW 1: SLIDES SMOOTHLY TO THE LEFT ON SCROLL */}
          <div
            ref={row1Ref}
            className="flex gap-4 md:gap-6 w-max will-change-transform"
            style={{ transform: 'translateX(0%)' }}
          >
            {row1Projects.map((item) => (
              <div key={item.id} className="w-[200px] sm:w-[260px] md:w-[300px] shrink-0">
                <ProjectImage
                  src={item.src}
                  title={item.title}
                  category={item.category}
                  year={item.year}
                  aspect="aspect-[3/4]"
                  rotation="rotate-0"
                />
              </div>
            ))}
          </div>

          {/* ROW 2: SLIDES SMOOTHLY TO THE RIGHT ON SCROLL */}
          <div
            ref={row2Ref}
            className="flex gap-4 md:gap-6 w-max will-change-transform"
            style={{ transform: 'translateX(-35%)' }}
          >
            {row2Projects.map((item) => (
              <div key={item.id} className="w-[200px] sm:w-[260px] md:w-[300px] shrink-0">
                <ProjectImage
                  src={item.src}
                  title={item.title}
                  category={item.category}
                  year={item.year}
                  aspect="aspect-[3/4]"
                  rotation="rotate-0"
                />
              </div>
            ))}
          </div>

        </div>

        {/* Scroll Instruction Hint */}
        <div className="mt-8 text-center text-xs font-mono text-white/70 tracking-widest uppercase z-20">
          ↔ KEEP SCROLLING — IMAGE ROWS SLIDE IN OPPOSITE DIRECTIONS Smoothly
        </div>

      </div>
    </ScrapbookCard>
  );
}
