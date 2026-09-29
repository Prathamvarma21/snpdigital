'use client';

import Image from 'next/image';
import ScrapbookCard from './ScrapbookCard';
import Tape from './Tape';

const collabs = [
  {
    name: '@emily_style',
    campaign: 'Summer Capsule',
    image: '/images/STORIES BEHAD/7.jpg',
    stats: '1.2M Reach',
    rotate: 'rotate-[-3deg]'
  },
  {
    name: '@creative.muse',
    campaign: 'Art Basel Tour',
    image: '/images/STORIES BEHAD/8.jpg',
    stats: '800k Reach',
    rotate: 'rotate-[4deg]'
  },
  {
    name: '@digital_nomad',
    campaign: 'Tech Meets Fashion',
    image: '/images/Social Media Intern/1.jpg',
    stats: '2.5M Reach',
    rotate: 'rotate-[-2deg]'
  },
  {
    name: '@vintage.vibes',
    campaign: 'Retro Denim Launch',
    image: '/images/Social Media Intern/2.jpg',
    stats: '950k Reach',
    rotate: 'rotate-[3deg]'
  }
];

export default function InfluencerCollabs() {
  return (
    <ScrapbookCard id="influencers" variant="cream" rotate="rotate-[0.5deg]">
      <div className="text-center mb-12">
        <h2 className="font-handwriting text-5xl md:text-7xl font-bold text-[#8E0E13] tracking-wide">
          influencer collabs
        </h2>
        <p className="text-xs md:text-sm text-[#6F6862] font-sans max-w-lg mx-auto mt-3">
          Partnering with global creators to amplify brand narratives. From creative strategy to final execution, these campaigns sparked viral conversations and deep engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {collabs.map((collab, idx) => (
          <div key={idx} className={`relative bg-white p-3 pb-8 rounded-sm shadow-xl border border-gray-200 transition-transform hover:scale-105 duration-300 ${collab.rotate}`}>
            <Tape className="-top-3 left-1/2 transform -translate-x-1/2 w-16" variant="dark" rotate={idx % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'} />
            
            <div className="relative w-full aspect-[4/5] bg-neutral-100 overflow-hidden border border-gray-100 mb-3">
              <Image 
                src={collab.image}
                alt={collab.name}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            <div className="text-center flex flex-col items-center">
              <span className="font-bold text-[#201C1B] font-mono text-xs">{collab.name}</span>
              <span className="text-[#8E0E13] font-handwriting text-xl leading-none mt-1">{collab.campaign}</span>
              <div className="mt-3 bg-[#F3EEE7] px-3 py-1 rounded-full border border-[#D8D8D6] text-[9px] font-mono font-bold text-[#6F6862] tracking-wider">
                {collab.stats}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrapbookCard>
  );
}
