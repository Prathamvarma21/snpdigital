import Image from 'next/image';

interface FilmFrameProps {
  src: string;
  alt: string;
  frameNumber?: string;
  aspect?: string;
  className?: string;
}

export default function FilmFrame({
  src,
  alt,
  frameNumber = '24A',
  aspect = 'aspect-[4/3]',
  className = '',
}: FilmFrameProps) {
  return (
    <div className={`relative bg-[#1A1616] p-3 rounded-sm border border-[#8E0E13]/30 shadow-md ${className}`}>
      {/* Top Film markings */}
      <div className="flex justify-between items-center text-[9px] font-mono text-[#8E0E13]/80 px-1 mb-1 tracking-widest uppercase">
        <span>SAFETY FILM 400</span>
        <span>• {frameNumber} •</span>
        <span>VR-PORTFOLIO</span>
      </div>

      {/* Main photographic frame */}
      <div className={`relative overflow-hidden bg-neutral-900 ${aspect} w-full rounded-xs border border-black/80`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-700"
        />
        {/* Grain overlay */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none mix-blend-overlay" />
      </div>

      {/* Bottom Film markings */}
      <div className="flex justify-between items-center text-[8px] font-mono text-neutral-400 px-1 mt-1 font-semibold">
        <span>► {frameNumber}</span>
        <span>ISO 400 // B&W</span>
      </div>
    </div>
  );
}
