'use client';

import Image from 'next/image';
import ScrapbookCard from './ScrapbookCard';
import ProjectImage from './ProjectImage';

const artworks = [
  { src: '/images/decorative/Screenshot 2026-09-09 at 3.57.01 PM.png', title: 'ÉCLIPSE Design System', year: '2026', category: 'BRANDING & IDENTITY' },
  { src: '/images/decorative/Screenshot 2026-09-09 at 3.57.14 PM.png', title: 'Editorial Spread Layout', year: '2026', category: 'EDITORIAL DESIGN' },
  { src: '/images/decorative/Screenshot 2026-09-09 at 3.57.25 PM.png', title: 'Minimalist Poster Series', year: '2026', category: 'TYPOGRAPHY POSTER' },
  { src: '/images/decorative/Screenshot 2026-09-09 at 3.58.40 PM.png', title: 'Visual Composition Vol. 1', year: '2026', category: 'GRAPHIC ART' },
  { src: '/images/decorative/Screenshot 2026-09-09 at 3.58.48 PM.png', title: 'Abstract Graphic Studies', year: '2026', category: 'EXPERIMENTAL DESIGN' },
  { src: '/images/decorative/Screenshot 2026-09-09 at 3.58.57 PM.png', title: 'Monochrome Layout Art', year: '2026', category: 'EDITORIAL SPREAD' },
  { src: '/images/decorative/Screenshot 2026-09-09 at 3.59.09 PM.png', title: 'Creative Brand Framework', year: '2026', category: 'BRAND IDENTITY' },
  { src: '/images/decorative/Screenshot 2026-09-09 at 3.59.30 PM.png', title: 'Geometric Poster Concept', year: '2026', category: 'PRINT & POSTER' },
  { src: '/images/decorative/Screenshot 2026-09-09 at 3.59.50 PM.png', title: 'Vibrant Visual Experiment', year: '2026', category: 'DIGITAL ART' },
  { src: '/images/decorative/Screenshot 2026-09-09 at 4.00.03 PM.png', title: 'Modern Fashion Graphics', year: '2026', category: 'FASHION POSTER' },
];

export default function CollectionOfArt() {
  return (
    <ScrapbookCard id="art" variant="red" rotate="rotate-[0.2deg]">
      
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="font-handwriting text-5xl md:text-7xl font-bold text-white tracking-wide">
          collection of art
        </h2>
      </div>

      {/* Top Feature: Vintage Digital Camera LCD & Editorial Text */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mb-12 bg-black/20 p-6 md:p-8 rounded-xs border border-white/15">
        
        {/* LEFT: Vintage Compact Camera Mockup with Screen */}
        <div className="relative w-full max-w-md flex justify-center">
          
          {/* Camera Physical Outer Body */}
          <div className="relative w-[340px] sm:w-[380px] bg-gradient-to-b from-[#2B2B2B] to-[#171717] p-5 rounded-2xl border-2 border-neutral-700 shadow-2xl">
            {/* Camera Top Controls */}
            <div className="absolute -top-3 left-8 flex gap-2">
              <div className="w-8 h-3 bg-neutral-400 rounded-t-sm shadow-inner" />
              <div className="w-5 h-2 bg-red-600 rounded-full" />
            </div>
            <div className="absolute -top-4 right-8 w-10 h-4 bg-neutral-300 rounded-t-md border border-neutral-500" />

            {/* Camera Viewfinder & Flash */}
            <div className="flex justify-between items-center mb-3 px-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[9px] font-mono text-white/80 font-bold tracking-widest">
                  REC • 4K 60FPS
                </span>
              </div>
              <div className="text-[9px] font-mono text-neutral-400">
                LUMIX DIGI-VINTAGE
              </div>
            </div>

            {/* Camera Screen Displaying Artwork */}
            <div className="relative w-full h-[220px] sm:h-[240px] bg-black rounded-md overflow-hidden border-4 border-neutral-800 shadow-inner">
              <Image
                src="/images/decorative/Screenshot 2026-09-09 at 3.57.01 PM.png"
                alt="Artwork inside vintage camera LCD"
                fill
                sizes="400px"
                className="object-cover"
              />
              {/* LCD Camera Screen Grid Overlay */}
              <div className="absolute inset-0 border border-white/20 pointer-events-none grid grid-cols-3 grid-rows-3">
                <div className="border-r border-b border-white/10" />
                <div className="border-r border-b border-white/10" />
                <div className="border-b border-white/10" />
                <div className="border-r border-b border-white/10" />
                <div className="border-r border-b border-white/10" />
                <div className="border-b border-white/10" />
              </div>
              {/* Camera LCD HUD Overlay */}
              <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-[8px] font-mono text-white bg-black/60 px-2 py-1 rounded-sm">
                <span>ART_01.RAW</span>
                <span>ISO 200 • F/2.8</span>
                <span>98% BAT</span>
              </div>
            </div>

            {/* Camera Bottom Label */}
            <div className="mt-3 text-center text-[9px] font-mono text-neutral-400 uppercase tracking-widest">
              DIGITAL ART JOURNAL VIEW // MILANO 2026
            </div>
          </div>
        </div>

        {/* RIGHT: Editorial Text Description */}
        <div className="w-full lg:w-1/2 text-left space-y-4 text-white">
          <h3 className="font-handwriting text-3xl md:text-4xl font-bold text-white">
            "A visual exploration of color, emotion, and identity."
          </h3>
          <p className="text-sm md:text-base text-white/90 leading-relaxed font-sans font-light">
            An ongoing gallery of visual stories, color experiments, digital portraiture, and fine art photography. Each artwork represents an unfiltered glimpse into my creative thought process — created without client parameters, driven purely by intuition and artistic curiosity.
          </p>
          <div className="pt-4 flex items-center gap-4">
            <span className="bg-white/15 text-white text-xs font-mono px-3 py-1.5 rounded-full border border-white/20">
              10 PHYSICAL PRINTS
            </span>
            <span className="text-xs font-handwriting text-white/80 text-lg">
              click any print to enlarge ↑
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Horizontal Row of Physical Artwork Prints */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-handwriting text-2xl font-bold text-white">
            physical prints archive
          </h3>
          <span className="text-xs font-mono text-white/60">
            01 — 10 ARTWORKS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((art, idx) => (
            <ProjectImage
              key={idx}
              src={art.src}
              title={art.title}
              year={art.year}
              category={art.category}
              rotation={idx % 2 === 0 ? 'rotate-[-1.5deg]' : 'rotate-[1.5deg]'}
            />
          ))}
        </div>
      </div>

    </ScrapbookCard>
  );
}
