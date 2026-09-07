'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Maximize2, X } from 'lucide-react';
import Tape from './Tape';

interface ProjectImageProps {
  src: string;
  title: string;
  category?: string;
  year?: string;
  aspect?: string;
  rotation?: string;
  className?: string;
}

export default function ProjectImage({
  src,
  title,
  category = 'ARTWORK',
  year = '2026',
  aspect = 'aspect-[4/5]',
  rotation = 'rotate-0',
  className = '',
}: ProjectImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        data-cursor="VIEW"
        className={`group relative cursor-pointer bg-[#F3EEE7] p-2 pb-6 shadow-md border border-[#D8D8D6] ${rotation} transition-all duration-300 hover:rotate-0 hover:scale-[1.03] hover:shadow-2xl z-10 ${className}`}
      >
        <Tape className="-top-2 right-4" variant="cream" rotate="rotate-[-2deg]" />
        
        <div className={`relative overflow-hidden ${aspect} w-full bg-neutral-900`}>
          <Image
            src={src}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 450px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle film grain overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
          
          {/* Hover Overlay Icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-[2px]">
            <div className="bg-[#8E0E13] text-white p-2.5 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <Maximize2 className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="mt-2.5 px-1 flex justify-between items-baseline">
          <h4 className="font-handwriting text-xl font-bold text-[#8E0E13] truncate max-w-[80%]">
            {title}
          </h4>
          <span className="text-[10px] font-mono text-[#6F6862] tracking-wider uppercase">
            {year}
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-300"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#8E0E13] transition-colors p-2 bg-white/10 rounded-full"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] w-full bg-[#F3EEE7] p-4 md:p-8 rounded-sm border-4 border-[#8E0E13] shadow-2xl flex flex-col md:flex-row gap-6 overflow-hidden"
          >
            <div className="relative flex-1 h-[50vh] md:h-[70vh]">
              <Image
                src={src}
                alt={title}
                fill
                className="object-contain"
              />
            </div>
            <div className="w-full md:w-72 flex flex-col justify-between text-[#201C1B]">
              <div>
                <span className="text-xs font-mono text-[#8E0E13] font-bold tracking-widest uppercase">
                  {category} • {year}
                </span>
                <h3 className="font-handwriting text-3xl md:text-4xl font-bold text-[#8E0E13] mt-2 mb-4">
                  {title}
                </h3>
                <p className="text-xs text-[#6F6862] leading-relaxed">
                  An original visual composition by Valentina Rossi exploring modern fashion, analog texture, and expressive color storytelling.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#D8D8D6] text-xs font-mono text-[#6F6862]">
                VALENTINA ROSSI ART JOURNAL
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
