'use client';

import { useEffect, useRef } from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import FilmStrip from '@/components/FilmStrip';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import CollectionOfArt from '@/components/CollectionOfArt';
import TableOfContents from '@/components/TableOfContents';
import GraphicDesign from '@/components/GraphicDesign';
import SocialMedia from '@/components/SocialMedia';
import EndSection from '@/components/EndSection';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const filmBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Smooth Entrance animations for physical paper sheet sections
    const sections = containerRef.current.querySelectorAll('section');

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 80,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
            end: 'top 25%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Centered Background Film Reel Parallax effect (speed = 0.5x)
    if (filmBgRef.current) {
      gsap.to(filmBgRef.current, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#D9D9D7] overflow-hidden" ref={containerRef}>
        
        {/* 1. ONE CONTINUOUS VERTICAL VINTAGE RED FILM STRIP BEHIND EVERYTHING */}
        <div ref={filmBgRef} className="absolute inset-0 w-full h-[115%] pointer-events-none z-0">
          <FilmStrip />
        </div>

        {/* Subtle paper grain texture overlay across entire app */}
        <div className="fixed inset-0 pointer-events-none opacity-30 z-30 mix-blend-overlay bg-[radial-gradient(#201C1B_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* 2. FOREGROUND PHYSICAL PAPER SECTIONS (01 TO 08) */}
        <div className="relative z-10 flex flex-col gap-12 md:gap-24 py-8">
          {/* 01 — HERO / INTRO */}
          <Hero />

          {/* 02 — ABOUT ME */}
          <About />

          {/* 03 — SKILLS + EXPERIENCE */}
          <Skills />

          {/* 04 — COLLECTION OF ART */}
          <CollectionOfArt />

          {/* 05 — TABLE OF CONTENTS */}
          <TableOfContents />

          {/* 06 — GRAPHIC DESIGN */}
          <GraphicDesign />

          {/* 07 — SOCIAL MEDIA */}
          <SocialMedia />

          {/* 08 — THE END */}
          <EndSection />
        </div>

      </main>
    </SmoothScroll>
  );
}
