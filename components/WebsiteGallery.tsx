'use client';

import Image from 'next/image';
import ScrapbookCard from './ScrapbookCard';
import Tape from './Tape';

const websites = [
  {
    id: 1,
    client: 'REALTY CHAMBER',
    title: 'Real Estate Consultancy Website',
    image: '/images/website/Screenshot 2026-09-29 at 11.23.24 AM.png',
    tags: ['REAL ESTATE', 'CONSULTING', 'CORPORATE'],
    desc: 'A professional web presence for Realty Chamber, offering real estate consultancy services with a focus on trust and market expertise.',
  },
  {
    id: 2,
    client: 'BHAWANA ENTERPRISES',
    title: 'Real Estate Consultancy Website',
    image: '/images/website/Screenshot 2026-09-29 at 11.23.43 AM.png',
    tags: ['REAL ESTATE', 'PROPERTY', 'AGENCY'],
    desc: 'An authoritative platform for Bhawana Enterprises, designed to connect clients with premium property listings and expert real estate advice.',
  },
  {
    id: 3,
    client: 'KRAFIX',
    title: 'Digital Marketing Company',
    image: '/images/website/Screenshot 2026-09-29 at 11.23.57 AM.png',
    tags: ['MARKETING', 'AGENCY', 'B2B'],
    desc: 'A dynamic, conversion-focused agency website for Krafix, showcasing their digital marketing services, case studies, and ROI-driven strategies.',
  },
  {
    id: 4,
    client: 'KRAFIX',
    title: 'Creative Archive',
    image: '/images/website/Screenshot 2026-09-29 at 11.24.04 AM.png',
    tags: ['PORTFOLIO', 'AGENCY', 'SHOWCASE'],
    desc: 'An extended showcase of creative projects and digital marketing campaigns within the Krafix portfolio, emphasizing bold design and strategic thinking.',
  },
  {
    id: 5,
    client: 'CIROCO',
    title: 'Ube Drink Section',
    image: '/images/website/Screenshot 2026-09-29 at 11.25.35 AM.png',
    tags: ['BEVERAGE', 'LANDING PAGE', 'PROMO'],
    desc: 'A dedicated, highly visual landing page section for Ciroco focusing exclusively on their signature Ube drink, designed to drive engagement.',
  },
  {
    id: 6,
    client: 'CIROCO',
    title: 'Drink Showcase',
    image: '/images/website/Screenshot 2026-09-29 at 11.26.03 AM.png',
    tags: ['BEVERAGE', 'PRODUCT', 'SHOWCASE'],
    desc: 'An engaging promotional showcase for Ciroco’s refreshing drink line, featuring bold typography and thirst-quenching visuals.',
  }
];

export default function WebsiteGallery() {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-12 lg:gap-24">
      
      {/* Header Note */}
      <div className="relative text-center mx-auto bg-[#F3EEE7] p-8 md:p-12 shadow-2xl border border-[#D8D8D6] max-w-2xl rotate-[-1deg]">
        <Tape className="-top-4 left-1/2 transform -translate-x-1/2 w-24" variant="dark" rotate="rotate-[2deg]" />
        <h1 className="font-handwriting text-5xl md:text-7xl font-bold text-[#8E0E13] mb-4">
          digital & web
        </h1>
        <p className="font-sans text-sm md:text-base text-[#6F6862] leading-relaxed">
          Exploring the intersection of editorial art direction and interactive web experiences. 
          Each digital product is treated as a living canvas — designed to engage, inspire, and tell a story through code and layout.
        </p>
      </div>

      {/* Website Showcases */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {websites.map((site, idx) => (
          <ScrapbookCard key={site.id} id={`site-${site.id}`} variant="cream" rotate={idx % 2 === 0 ? 'rotate-[1deg]' : 'rotate-[-1.5deg]'} className="h-full flex flex-col">
            <Tape className="-top-3 left-6" variant="red" rotate="rotate-[-3deg]" />
            
            <div className="flex justify-between items-center text-[10px] font-mono text-[#8E0E13] font-bold tracking-widest uppercase mb-4 border-b border-[#D8D8D6] pb-2">
              <span>{site.client}</span>
              <span>2026</span>
            </div>
            
            <div className="relative w-full aspect-[4/3] bg-neutral-900 border-2 border-black/80 shadow-inner mb-4 overflow-hidden rounded-xs">
              {/* Browser Header Mockup */}
              <div className="absolute top-0 left-0 right-0 h-5 bg-[#1A1616] flex items-center px-2 gap-1.5 z-10 border-b border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
              </div>
              <Image 
                src={site.image} 
                alt={site.title} 
                fill 
                className="object-cover mt-5 hover:scale-105 transition-transform duration-700" 
              />
            </div>
            
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-handwriting text-3xl font-bold text-[#201C1B] mb-2">{site.title}</h3>
                <p className="text-xs font-sans text-[#6F6862] leading-relaxed mb-4">{site.desc}</p>
              </div>
              
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {site.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-mono font-bold bg-[#8E0E13]/10 text-[#8E0E13] px-2 py-1 rounded-[2px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrapbookCard>
        ))}
      </div>
      
    </div>
  );
}
