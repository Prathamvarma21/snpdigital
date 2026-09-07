'use client';

import Image from 'next/image';
import ScrapbookCard from './ScrapbookCard';
import Tape from './Tape';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

const socialCampaigns = [
  {
    id: 1,
    brand: '@maison.noir.couture',
    title: 'Luxury Fashion Campaign',
    image: '/images/social/social-01.jpg',
    likes: '14.2k',
    caption: 'Fall Editorial drop — High-contrast monochrome & velvet aesthetics.',
    rotate: 'rotate-[-6deg]',
  },
  {
    id: 2,
    brand: '@botanique.beauty',
    title: 'Beauty & Lifestyle Reel',
    image: '/images/social/social-02.jpg',
    likes: '9.8k',
    caption: 'Avant-garde watercolor fashion study for summer launch.',
    rotate: 'rotate-[4deg]',
  },
  {
    id: 3,
    brand: '@valentina.studio',
    title: 'Creative Art Campaign',
    image: '/images/social/social-03.jpg',
    likes: '22.5k',
    caption: 'Tropical Echoes Vol. I — Paper collage & botanical study.',
    rotate: 'rotate-[-3deg]',
  },
  {
    id: 4,
    brand: '@harmony.type.mag',
    title: 'Product Branding Feed',
    image: '/images/social/social-04.jpg',
    likes: '18.1k',
    caption: 'Issue No. 42 Creative Harmony print launch preview.',
    rotate: 'rotate-[5deg]',
  },
];

export default function SocialMedia() {
  return (
    <ScrapbookCard id="social" variant="cream" rotate="rotate-[0.2deg]">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="font-handwriting text-6xl md:text-8xl font-bold text-[#8E0E13] tracking-wide">
          social media
        </h2>

        <p className="text-xs md:text-sm text-[#6F6862] font-sans max-w-md mx-auto mt-2">
          Curated Instagram feeds and social campaign strategies built for luxury fashion, beauty, and independent art publications.
        </p>
      </div>

      {/* 4 Organically Rotated Overlapping Smartphone Mockups */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 py-6 items-center">
        {socialCampaigns.map((camp) => (
          <div
            key={camp.id}
            className={`relative mx-auto w-[260px] bg-[#1A1616] rounded-[36px] p-3 border-4 border-neutral-800 shadow-2xl transition-transform duration-500 hover:rotate-0 hover:scale-105 ${camp.rotate} z-10`}
            style={{
              boxShadow: '0 20px 40px -10px rgba(142, 14, 19, 0.3), 0 10px 20px rgba(0,0,0,0.2)',
            }}
          >
            {/* Phone Notch & Speaker */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-neutral-900 rounded-full flex items-center justify-center z-20">
              <div className="w-3 h-3 rounded-full bg-black/80" />
            </div>

            {/* Phone Screen Container */}
            <div className="relative bg-[#F3EEE7] rounded-[28px] overflow-hidden pt-7 pb-4 text-[#201C1B]">
              
              {/* Instagram Feed Header */}
              <div className="flex items-center justify-between px-3 pb-2 border-b border-[#D8D8D6]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#8E0E13] p-[1px]">
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                      <Image src="/images/portraits/hero-black-white.jpg" alt="Profile" fill className="object-cover" />
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#201C1B] truncate max-w-[110px]">
                    {camp.brand}
                  </span>
                </div>
                <span className="text-xs font-bold text-[#8E0E13]">•••</span>
              </div>

              {/* Feed Image */}
              <div className="relative aspect-square w-full bg-neutral-900 my-1">
                <Image src={camp.image} alt={camp.title} fill sizes="260px" className="object-cover" />
              </div>

              {/* Social Action Bar */}
              <div className="flex justify-between items-center px-3 py-1.5 text-[#201C1B]">
                <div className="flex items-center gap-2.5">
                  <Heart className="w-4 h-4 text-[#8E0E13] fill-[#8E0E13]" />
                  <MessageCircle className="w-4 h-4 text-[#6F6862]" />
                  <Send className="w-4 h-4 text-[#6F6862]" />
                </div>
                <Bookmark className="w-4 h-4 text-[#6F6862]" />
              </div>

              {/* Likes & Caption */}
              <div className="px-3 text-[10px] font-sans">
                <div className="font-bold text-[#8E0E13]">{camp.likes} likes</div>
                <p className="text-[9.5px] text-[#201C1B]/90 line-clamp-2 mt-0.5 leading-tight">
                  <span className="font-bold mr-1">{camp.brand}</span>
                  {camp.caption}
                </p>
              </div>

            </div>

            {/* Tiny Editorial Label Under Phone */}
            <div className="mt-3 text-center">
              <span className="font-handwriting text-lg font-bold text-white block">
                {camp.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Editorial Footnote */}
      <div className="mt-10 text-center text-xs font-mono text-[#6F6862] border-t border-[#D8D8D6] pt-4">
        DIGITAL CAMPAIGNS • ORIGINAL FICTIONAL BRANDS & ART DIRECTION
      </div>

    </ScrapbookCard>
  );
}
