'use client';

import Image from 'next/image';
import ScrapbookCard from './ScrapbookCard';
import Tape from './Tape';
import { Mail, ExternalLink, Globe } from 'lucide-react';

const endPortraits = [
  '/images/“UNFOLDING THIS MOTIF FROM COLLECTION./1.jpg',
  '/images/“UNFOLDING THIS MOTIF FROM COLLECTION./2.jpg',
  '/images/“UNFOLDING THIS MOTIF FROM COLLECTION./3.jpg',
  '/images/“UNFOLDING THIS MOTIF FROM COLLECTION./4.jpg',
];

export default function EndSection() {
  return (
    <ScrapbookCard id="end" variant="cream" rotate="rotate-[-0.2deg]" className="mb-32">
      
      <div className="flex flex-col items-center text-center max-w-xl mx-auto py-4">
        
        {/* Small Centered Red Film Strip Containing 4 B&W Portraits */}
        <div className="relative bg-[#8E0E13] p-3 rounded-xs shadow-2xl border border-[#6F090D] mb-8 w-full max-w-md rotate-[1deg]">
          <Tape className="-top-3 left-1/2 transform -translate-x-1/2" variant="cream" rotate="rotate-[-2deg]" />
          



          <div className="grid grid-cols-4 gap-2">
            {endPortraits.map((src, idx) => (
              <div key={idx} className="relative aspect-[3/4] overflow-hidden border border-white/10">
                <Image
                  src={src}
                  alt={`End portrait ${idx + 1}`}
                  fill
                  sizes="150px"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>


        </div>

        {/* Red Paper Label: "the end" */}
        <div className="bg-[#8E0E13] text-[#F3EEE7] px-8 py-2 rounded-xs shadow-md border border-[#6F090D] rotate-[-1deg] mb-6">
          <h2 className="font-handwriting text-5xl md:text-6xl font-bold tracking-wide">
            the end
          </h2>
        </div>

        {/* Small Handwritten Editorial Note */}
        <p className="font-handwriting text-2xl md:text-3xl font-bold text-[#8E0E13] max-w-md mb-8 leading-snug">
          "thanks for scrolling through our little world."
        </p>



        {/* Footer copyright */}
        <div className="mt-12 text-[10px] font-mono text-[#6F6862] tracking-widest uppercase">
          © 2026 CREATIVE PORTFOLIO • ALL RIGHTS RESERVED • Jaipur,Rajasthan
        </div>

      </div>

    </ScrapbookCard>
  );
}
