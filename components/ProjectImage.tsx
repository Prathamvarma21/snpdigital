'use client';

import Image from 'next/image';
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
  return (
    <>
      <div
        className={`group relative bg-[#F3EEE7] p-2 pb-6 shadow-md border border-[#D8D8D6] ${rotation} transition-all duration-300 hover:rotate-0 hover:scale-[1.03] hover:shadow-2xl z-10 ${className}`}
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
    </>
  );
}
