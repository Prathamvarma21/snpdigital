import Image from 'next/image';
import Tape from './Tape';

interface PolaroidProps {
  src: string;
  alt: string;
  caption?: string;
  rotation?: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function Polaroid({
  src,
  alt,
  caption,
  rotation = 'rotate-1',
  className = '',
  width = 300,
  height = 320,
}: PolaroidProps) {
  return (
    <div
      className={`relative bg-[#F3EEE7] p-3 pb-8 shadow-xl border border-[#D8D8D6]/80 ${rotation} transition-transform duration-300 hover:rotate-0 hover:scale-105 z-10 ${className}`}
      style={{
        boxShadow: '0 12px 28px -6px rgba(0, 0, 0, 0.25), 0 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Tape className="-top-3 left-1/2 transform -translate-x-1/2" variant="cream" rotate="rotate-2" />
      <div className="relative overflow-hidden bg-neutral-900 aspect-square w-full">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover w-full h-full grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
        />
        {/* Analog grain texture overlay */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none mix-blend-overlay" />
      </div>
      {caption && (
        <p className="mt-3 text-center font-handwriting text-lg text-[#8E0E13] tracking-wide font-bold">
          {caption}
        </p>
      )}
    </div>
  );
}
