'use client';

import Image from 'next/image';
import ScrapbookCard from './ScrapbookCard';
import ProjectImage from './ProjectImage';

const artworks = [
  { src: '/images/STORIES BEHAD/1.jpg', title: 'Story One', year: '2026', category: 'PHOTOGRAPHY' },
  { src: '/images/STORIES BEHAD/2.jpg', title: 'Story Two', year: '2026', category: 'EDITORIAL' },
  { src: '/images/STORIES BEHAD/3.jpg', title: 'Story Three', year: '2026', category: 'ART DIRECTION' },
  { src: '/images/STORIES BEHAD/4.jpg', title: 'Story Four', year: '2026', category: 'PORTRAIT' },
  { src: '/images/STORIES BEHAD/5.jpg', title: 'Story Five', year: '2026', category: 'VISUAL ARTS' },
  { src: '/images/STORIES BEHAD/6.jpg', title: 'Story Six', year: '2026', category: 'CREATIVE' },
  { src: '/images/STORIES BEHAD/7.jpg', title: 'Story Seven', year: '2026', category: 'LIFESTYLE' },
  { src: '/images/STORIES BEHAD/8.jpg', title: 'Story Eight', year: '2026', category: 'MONOCHROME' },
  { src: '/images/CREATIVE/1.jpg', title: 'Creative Session I', year: '2026', category: 'ART' },
  { src: '/images/CREATIVE/2.jpg', title: 'Creative Session II', year: '2026', category: 'ART' },
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

              </div>

            </div>

            {/* Camera Screen Displaying Artwork */}
            <div className="relative w-full h-[220px] sm:h-[240px] bg-black rounded-md overflow-hidden border-4 border-neutral-800 shadow-inner">
              <Image
                src="/images/STORIES BEHAD/1.jpg"
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

            </div>


          </div>
        </div>

        {/* RIGHT: Editorial Text Description */}
        <div className="w-full lg:w-1/2 text-left space-y-4 text-white">
          <h3 className="font-handwriting text-3xl md:text-4xl font-bold text-white">
            "A visual exploration of color, emotion, and identity."
          </h3>
          <p className="text-sm md:text-base text-white/90 leading-relaxed font-sans font-light">
            An ongoing gallery of visual stories, color experiments, digital portraiture, and fine art photography. Each artwork represents an unfiltered glimpse into our creative thought process — created without client parameters, driven purely by intuition and artistic curiosity.
          </p>
          <div className="pt-4 flex items-center gap-4">

            <span className="text-xs font-handwriting text-white/80 text-lg">
              click any print to enlarge ↑
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Horizontal Row of Physical Artwork Prints */}
      <div>
        <div className="flex items-center justify-between mb-4">

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
