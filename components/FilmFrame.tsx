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


    </div>
  );
}
