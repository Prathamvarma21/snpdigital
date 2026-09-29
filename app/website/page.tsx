'use client';

import SmoothScroll from '@/components/SmoothScroll';
import WebsiteGallery from '@/components/WebsiteGallery';
import Link from 'next/link';

export default function WebsitePage() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#D9D9D7] overflow-hidden flex flex-col items-center py-24 md:py-32">
        {/* Subtle paper grain texture overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-30 z-30 mix-blend-overlay bg-[radial-gradient(#201C1B_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <Link 
          href="/"
          className="fixed top-8 left-8 z-50 text-xs font-mono font-bold tracking-widest text-[#8E0E13] hover:text-black transition-colors"
        >
          ← BACK TO HOME
        </Link>
        
        <div className="relative z-10 w-full px-4">
           <WebsiteGallery />
        </div>
        
        {/* Footer */}
        <div className="mt-24 text-[10px] font-mono text-[#6F6862] tracking-widest uppercase z-10">
          © 2026 DIGITAL EXPERIENCES • MILANO
        </div>
      </main>
    </SmoothScroll>
  );
}
