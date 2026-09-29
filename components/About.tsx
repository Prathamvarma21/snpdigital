'use client';

import Image from 'next/image';
import ScrapbookCard from './ScrapbookCard';
import Tape from './Tape';

export default function About() {
  return (
    <ScrapbookCard id="about" variant="red" rotate="rotate-[0.3deg]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
        
        {/* Left Side: Vintage Postage Stamp & Handwritten Note Paper */}
        <div className="relative flex flex-col sm:flex-row items-center gap-6 w-full lg:w-1/2">
          
          {/* Postage Stamp */}
          <div className="relative group rotate-[-2deg] transition-transform hover:rotate-0 duration-300">
            <Tape className="-top-3 left-4" variant="cream" rotate="rotate-[3deg]" />
            <div className="postage-stamp-border bg-[#F3EEE7] p-3 shadow-2xl border border-dashed border-[#8E0E13]/30">
              
              {/* Postage Header */}
              <div className="flex justify-between items-center text-[8px] font-mono text-[#8E0E13] font-bold uppercase mb-1">
                <span>REPUBLIQUE ART</span>
                <span>$0.85</span>
              </div>

              {/* B&W Portrait Inside Postage Stamp */}
              <div className="relative w-44 h-56 sm:w-48 sm:h-60 overflow-hidden bg-black border border-[#8E0E13]">
                <Image
                  src="/images/CREATIVE/1.jpg"
                  alt="Postage Stamp Portrait"
                  fill
                  sizes="240px"
                  className="object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
              </div>

              {/* Stamp Caption */}
              <div className="text-center mt-1 text-[8px] font-mono text-[#201C1B] font-bold tracking-wider">
                CREATIVE STUDIO • 2026
              </div>
            </div>

            {/* Vintage Cancellation Postmark Stamp Overlay */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 pointer-events-none opacity-85 text-[#201C1B]">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current stroke-[1.5]">
                <circle cx="50" cy="50" r="42" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="34" />
                <path d="M 10 50 Q 30 40, 50 50 T 90 50" strokeWidth="1" />
                <text x="50" y="44" textAnchor="middle" className="text-[7px] font-mono fill-current stroke-none uppercase tracking-widest">
                  JAIPUR POST
                </text>
                <text x="50" y="58" textAnchor="middle" className="text-[8px] font-mono font-bold fill-current stroke-none">
                  07 SEPT 2026
                </text>
              </svg>
            </div>
          </div>

          {/* Transparent / Outlined Note Paper */}

        </div>

        {/* Right Side: Large Title & Editorial Paragraph */}
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="font-handwriting text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-wide drop-shadow-sm">
            about us
          </h2>


          <div className="space-y-4 text-sm sm:text-base text-white/90 leading-relaxed font-sans font-normal max-w-lg">
            <p>
              We are a team of multidisciplinary designers and visual artists who love turning complex ideas into emotionally resonant visual stories.
            </p>
            <p>
              Our work moves seamlessly between graphic design, digital experiences, visual identity, and editorial art direction.
            </p>
            <p>
              We’re deeply interested in creating work that feels personal, expressive, and unforgettable — blending tactile paper textures with high-contrast analog photography.
            </p>
          </div>

          {/* Hand-drawn underline symbol & metadata */}
          <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/80">
            <div>LOCATION: JAIPUR / REMOTE</div>
            <div>SPECIALTY: SMM, WEBSITE DEVELOPMENT & CREATIVENESS</div>
            <div>STATUS: AVAILABLE FOR 2026</div>
          </div>
        </div>

      </div>
    </ScrapbookCard>
  );
}
