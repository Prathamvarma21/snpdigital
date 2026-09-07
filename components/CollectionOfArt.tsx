'use client';

import Image from 'next/image';
import ScrapbookCard from './ScrapbookCard';
import ProjectImage from './ProjectImage';
import Tape from './Tape';

const artworks = [
  { src: '/images/artwork/art-01.jpg', title: 'Chromatic Portrait No. 1', year: '2026', category: 'DIGITAL PAINTING' },
  { src: '/images/artwork/art-02.jpg', title: 'Avant-Garde Couture', year: '2026', category: 'FASHION ILLUSTRATION' },
  { src: '/images/artwork/art-03.jpg', title: 'Surreal Geometry', year: '2025', category: 'ABSTRACT ART' },
  { src: '/images/artwork/art-04.jpg', title: 'Tropical Echoes Vol. I', year: '2025', category: 'BOTANICAL COLLAGE' },
  { src: '/images/artwork/art-05.jpg', title: 'Neon Gel Vignettes', year: '2026', category: 'FINE ART PHOTO' },
  { src: '/images/artwork/art-06.jpg', title: 'Creative Harmony', year: '2024', category: 'TYPOGRAPHY POSTER' },
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
                src="/images/artwork/art-01.jpg"
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
              6 PHYSICAL PRINTS
            </span>
            <span className="text-xs font-handwriting text-white/80 text-lg">
              click any print to enlarge ↑
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Horizontal Row of 6 Physical Artwork Prints */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-handwriting text-2xl font-bold text-white">
            physical prints archive
          </h3>
          <span className="text-xs font-mono text-white/60">
            01 — 06 ARTWORKS
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
