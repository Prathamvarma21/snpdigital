'use client';

import { useEffect, useRef } from 'react';
import ScrapbookCard from './ScrapbookCard';
import ProjectImage from './ProjectImage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const decorativeProjects = [
  { id: 'dec-01', src: '/images/decorative/Screenshot 2026-09-09 at 3.57.01 PM.png', title: 'ÉCLIPSE Design System', category: 'BRANDING & IDENTITY', year: '2026' },
  { id: 'dec-02', src: '/images/decorative/Screenshot 2026-09-09 at 3.57.14 PM.png', title: 'Editorial Spread Layout', category: 'EDITORIAL DESIGN', year: '2026' },
  { id: 'dec-03', src: '/images/decorative/Screenshot 2026-09-09 at 3.57.25 PM.png', title: 'Minimalist Poster Series', category: 'TYPOGRAPHY POSTER', year: '2026' },
  { id: 'dec-04', src: '/images/decorative/Screenshot 2026-09-09 at 3.58.40 PM.png', title: 'Visual Composition Vol. 1', category: 'GRAPHIC ART', year: '2026' },
  { id: 'dec-05', src: '/images/decorative/Screenshot 2026-09-09 at 3.58.48 PM.png', title: 'Abstract Graphic Studies', category: 'EXPERIMENTAL DESIGN', year: '2026' },
  { id: 'dec-06', src: '/images/“UNFOLDING THIS MOTIF FROM COLLECTION./2.jpg', title: 'Monochrome Layout Art', category: 'EDITORIAL SPREAD', year: '2026' },
  { id: 'dec-07', src: '/images/decorative/Screenshot 2026-09-09 at 3.59.09 PM.png', title: 'Creative Brand Framework', category: 'BRAND IDENTITY', year: '2026' },
  { id: 'dec-08', src: '/images/“UNFOLDING THIS MOTIF FROM COLLECTION./4.jpg', title: 'Geometric Poster Concept', category: 'PRINT & POSTER', year: '2026' },
  { id: 'dec-09', src: '/images/decorative/Screenshot 2026-09-09 at 3.59.50 PM.png', title: 'Vibrant Visual Experiment', category: 'DIGITAL ART', year: '2026' },
  { id: 'dec-10', src: '/images/decorative/Screenshot 2026-09-09 at 4.00.03 PM.png', title: 'Modern Fashion Graphics', category: 'FASHION POSTER', year: '2026' },
];

const row1Projects = [
  ...decorativeProjects.slice(0, 5),
  { id: '01', src: '/images/“UNFOLDING THIS MOTIF FROM COLLECTION./1.jpg', title: 'Unfolding Motif 01', category: 'FASHION POSTER', year: '2026' },
  { id: '02', src: '/images/“UNFOLDING THIS MOTIF FROM COLLECTION./2.jpg', title: 'Unfolding Motif 02', category: 'MAGAZINE SPREAD', year: '2026' },
];

const row2Projects = [
  ...decorativeProjects.slice(5, 10),
  { id: '03', src: '/images/“UNFOLDING THIS MOTIF FROM COLLECTION./3.jpg', title: 'Unfolding Motif 03', category: 'TYPOGRAPHY POSTER', year: '2026' },
  { id: '04', src: '/images/“UNFOLDING THIS MOTIF FROM COLLECTION./4.jpg', title: 'Unfolding Motif 04', category: 'BRAND IDENTITY', year: '2026' },
];

export default function GraphicDesign() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !row1Ref.current || !row2Ref.current) return;

    // Row 1 moves smoothly LEFT on scroll
    const anim1 = gsap.to(row1Ref.current, {
      x: '-30%',
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
      x: '30%',
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
        
        {/* 1. TOP HEADER & EDITORIAL TEXT */}
        <div className="text-center max-w-3xl mx-auto mb-12 px-4 z-20">
          <h2 className="font-handwriting text-6xl sm:text-8xl md:text-9xl font-bold text-white tracking-wide mb-6 drop-shadow-md select-none">
            graphic design
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-white/90 font-sans leading-relaxed max-w-2xl mx-auto font-light">
            Through our love of art, we began exploring new ways of creating and expressing ideas. Our work integrates digital tools like Photoshop, Illustrator and InDesign, allowing us to expand our practice into editorial layouts, brand identity, and high contrast print compositions.
          </p>
        </div>

        {/* 2. DOUBLE-ROW SMOOTH HORIZONTAL SLIDING IMAGE STRIPS */}
        <div className="w-full flex flex-col gap-6 md:gap-8 my-6 overflow-hidden z-10">
          
          {/* ROW 1: SLIDES SMOOTHLY TO THE LEFT ON SCROLL */}
          <div
            ref={row1Ref}
            className="flex gap-4 md:gap-6 w-max will-change-transform"
            style={{ transform: 'translateX(0%)' }}
          >
            {row1Projects.map((item) => (
              <div key={item.id} className="w-[220px] sm:w-[280px] md:w-[320px] shrink-0">
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
              <div key={item.id} className="w-[220px] sm:w-[280px] md:w-[320px] shrink-0">
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
        <div className="mt-6 text-center text-xs font-mono text-white/70 tracking-widest uppercase z-20">
          ↔ KEEP SCROLLING — IMAGE ROWS SLIDE IN OPPOSITE DIRECTIONS
        </div>

        {/* 3. DECORATIVE DESIGN GALLERY GRID (ALL 10 DESIGNS) */}
        <div className="w-full max-w-6xl mx-auto mt-16 px-4 z-20">
          <div className="flex flex-col sm:flex-row items-center justify-between border-b border-white/20 pb-4 mb-8 text-white">
            <h3 className="font-handwriting text-3xl sm:text-4xl font-bold tracking-wide">
              decorative design gallery
            </h3>
            <span className="text-xs font-mono text-white/80 uppercase tracking-widest mt-2 sm:mt-0">
              10 SELECTED WORKS • CLICK TO ENLARGE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {decorativeProjects.map((item, idx) => (
              <ProjectImage
                key={item.id}
                src={item.src}
                title={item.title}
                category={item.category}
                year={item.year}
                aspect="aspect-[3/4]"
                rotation={idx % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]'}
              />
            ))}
          </div>
        </div>

      </div>
    </ScrapbookCard>
  );
}
