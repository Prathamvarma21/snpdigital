'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ScrapbookCard from './ScrapbookCard';
import { Expand } from 'lucide-react';

const collabsImages = [
  '/images/instagram collabs/WhatsApp Image 2026-09-29 at 12.09.56 PM.jpeg',
  '/images/instagram collabs/WhatsApp Image 2026-09-29 at 12.10.12 PM.jpeg',
  '/images/instagram collabs/WhatsApp Image 2026-09-29 at 12.10.44 PM.jpeg',
  '/images/instagram collabs/WhatsApp Image 2026-09-29 at 12.11.17 PM.jpeg',
  '/images/instagram collabs/WhatsApp Image 2026-09-29 at 12.11.41 PM.jpeg',
  '/images/instagram collabs/WhatsApp Image 2026-09-29 at 12.15.17 PM.jpeg',
  '/images/instagram collabs/WhatsApp Image 2026-09-29 at 12.21.15 PM (1).jpeg',
  '/images/instagram collabs/WhatsApp Image 2026-09-29 at 12.21.15 PM.jpeg',
  '/images/instagram collabs/WhatsApp Image 2026-09-29 at 12.21.22 PM.jpeg',
  '/images/instagram collabs/WhatsApp Image 2026-09-29 at 12.21.23 PM.jpeg',
];

export default function InfluencerCollabs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<number | null>(null);

  // Apply 3D perspective to elements based on scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerCenterX = container.getBoundingClientRect().left + container.clientWidth / 2;
      const children = Array.from(container.children) as HTMLElement[];

      children.forEach((child) => {
        const childRect = child.getBoundingClientRect();
        const childCenterX = childRect.left + childRect.width / 2;
        const distanceFromCenter = childCenterX - containerCenterX;

        // Calculate rotation based on distance from center
        const maxRotation = 45; // Max degrees to rotate
        const rotationForce = 0.05; // How fast it rotates
        let rotationY = distanceFromCenter * rotationForce;
        
        // Clamp rotation
        if (rotationY > maxRotation) rotationY = maxRotation;
        if (rotationY < -maxRotation) rotationY = -maxRotation;

        // Calculate scale and z-index (center is bigger and on top)
        const absDistance = Math.abs(distanceFromCenter);
        const scale = Math.max(0.75, 1 - absDistance * 0.0005);
        const zIndex = Math.round(100 - absDistance);

        child.style.transform = `perspective(1000px) rotateY(${rotationY}deg) scale(${scale})`;
        child.style.zIndex = zIndex.toString();
        
        // Add subtle shadow based on curve
        child.style.boxShadow = `0 ${20 + absDistance * 0.1}px ${40 + absDistance * 0.1}px rgba(0,0,0,${0.3 + absDistance * 0.001})`;
      });
    };

    // Initial calculation
    handleScroll();

    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Simulate scroll to trigger initial setup after images load
    setTimeout(handleScroll, 100);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <ScrapbookCard id="influencers" variant="cream" rotate="rotate-[0.5deg]">
      <div className="text-center mb-8">
        <h2 className="font-handwriting text-5xl md:text-7xl font-bold text-[#8E0E13] tracking-wide">
          influencer collabs
        </h2>
        <p className="text-xs md:text-sm text-[#6F6862] font-sans max-w-lg mx-auto mt-3">
          Partnering with global creators to amplify brand narratives. Swipe through our visual archive of viral campaigns and deep engagement moments.
        </p>
      </div>

      <div className="relative w-full overflow-hidden py-12" style={{ transformStyle: 'preserve-3d' }}>
        <div 
          ref={containerRef}
          data-lenis-prevent="true"
          className="flex gap-4 md:gap-4 overflow-x-auto hide-scrollbar px-[5vw] md:px-[5vw] py-8 snap-x snap-mandatory"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {collabsImages.map((src, idx) => (
            <div 
              key={idx} 
              className="relative shrink-0 w-[180px] md:w-[240px] aspect-[4/5] bg-neutral-900 rounded-sm cursor-pointer snap-center transition-all duration-300 ease-out group"
              style={{ transition: 'transform 0.1s linear, filter 0.3s' }}
              onClick={() => setActiveItem(idx === activeItem ? null : idx)}
            >
              <Image 
                src={src}
                alt={`Collab ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-bottom rounded-sm"
              />
              
              {/* Expand Icon Overlay (like the reference image) */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center rounded-sm">
                <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                  <Expand className="text-white w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      

    </ScrapbookCard>
  );
}
