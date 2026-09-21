'use client';

import Image from 'next/image';
import ScrapbookCard from './ScrapbookCard';
import Tape from './Tape';

const tocItems = [
  { num: '01', title: 'about me', desc: 'biography & background story', id: 'about' },
  { num: '02', title: 'skills', desc: 'abilities & software tools', id: 'skills' },
  { num: '03', title: 'experience', desc: 'creative trajectory timeline', id: 'skills' },
  { num: '04', title: 'collection of art', desc: 'vibrant visual artwork gallery', id: 'art' },
  { num: '05', title: 'graphic design', desc: 'editorial poster & branding archives', id: 'design' },
  { num: '06', title: 'social media', desc: 'campaign mockups & digital feeds', id: 'social' },
];

const miniThumbs = [
  '/images/artwork/art-01.jpg',
  '/images/artwork/art-02.jpg',
  '/images/graphic-design/graphic-01.jpg',
  '/images/artwork/art-04.jpg',
];

export default function TableOfContents() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ScrapbookCard id="toc" variant="cream" rotate="rotate-[-0.2deg]">
      
      {/* Top Header: Small Artwork Collection Thumbnails */}
      <div className="flex justify-between items-center gap-3 mb-8 overflow-x-auto pb-2 border-b border-[#D8D8D6]">
        <span className="text-xs font-mono text-[#8E0E13] font-bold uppercase tracking-widest shrink-0">
          INDEX THUMBNAILS:
        </span>
        <div className="flex gap-3">
          {miniThumbs.map((src, i) => (
            <div key={i} className="relative w-16 h-16 bg-neutral-900 border border-[#8E0E13]/30 rounded-xs shadow-sm overflow-hidden shrink-0">
              <Image src={src} alt="Index thumbnail" fill sizes="80px" className="object-cover grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Main Inner Burgundy Paper Panel */}
      <div className="relative bg-[#8E0E13] text-white p-6 md:p-12 rounded-xs shadow-xl border border-[#6F090D] rotate-[0.3deg]">
        <Tape className="-top-3 left-6" variant="cream" rotate="rotate-[-3deg]" />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-6 border-b border-white/20 gap-4">
          <div>
            <h2 className="font-handwriting text-5xl md:text-7xl font-bold text-white tracking-wide">
              table of contents
            </h2>
          </div>
          <p className="text-xs font-mono text-white/80 max-w-xs leading-relaxed">
            A structured roadmap through my personal visual journal, art collection, graphic design editorials, and social media campaigns.
          </p>
        </div>

        {/* Magazine Index Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {tocItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => scrollTo(item.id)}
              data-cursor="GO"
              className="group cursor-pointer flex items-baseline justify-between p-3 rounded-xs hover:bg-white/10 transition-colors border-b border-white/10"
            >
              <div className="flex items-baseline gap-3">
                <div>
                  <h3 className="font-handwriting text-2xl md:text-3xl font-bold text-white group-hover:translate-x-1 transition-transform">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-mono text-white/70 uppercase tracking-wider">
                    {item.desc}
                  </p>
                </div>
              </div>

              <span className="text-white/40 font-handwriting text-xl group-hover:text-white transition-colors">
                →
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Index Footer */}
        <div className="mt-8 pt-4 flex justify-between items-center text-[10px] font-mono text-white/60 uppercase tracking-widest">
          <span>INDEX REEL 2026</span>
          <span>ART & DESIGN PORTFOLIO</span>
        </div>

      </div>

    </ScrapbookCard>
  );
}
