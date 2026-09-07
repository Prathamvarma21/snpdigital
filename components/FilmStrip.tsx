'use client';

import Image from 'next/image';

const portraitList = [
  { src: '/images/portraits/hero-black-white.jpg', id: '01', caption: 'VALENTINA — 01' },
  { src: '/images/portraits/portrait-02.jpg', id: '02', caption: 'VALENTINA — 02' },
  { src: '/images/portraits/portrait-03.jpg', id: '03', caption: 'VALENTINA — 03' },
  { src: '/images/portraits/portrait-04.jpg', id: '04', caption: 'VALENTINA — 04' },
  { src: '/images/portraits/portrait-05.jpg', id: '05', caption: 'VALENTINA — 05' },
  { src: '/images/portraits/about-postage.jpg', id: '06', caption: 'VALENTINA — 06' },
];

export default function FilmStrip() {
  // Repeat the sequence to ensure continuous film reel down the entire scrollable page
  const frames = Array.from({ length: 24 }, (_, index) => {
    const portrait = portraitList[index % portraitList.length];
    return {
      ...portrait,
      frameNumber: `${(index + 1).toString().padStart(2, '0')}A`,
    };
  });

  return (
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[92vw] md:w-[680px] max-w-[720px] h-full z-0 pointer-events-none select-none overflow-hidden">
      {/* Main Vintage Red Film Negative Spine with Increased Width & Dot Texture */}
      <div className="w-full h-full bg-[#8E0E13] border-x-4 border-[#6F090D] shadow-2xl relative flex flex-col items-center py-8 opacity-95">
        
        {/* Dot Matrix Pattern Overlay on Red Negative (Matches User Screenshot) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: 'radial-gradient(#201C1B 1.2px, transparent 1.2px)',
            backgroundSize: '10px 10px',
          }}
        />

        {/* Left Side Perforations */}
        <div className="absolute left-3 md:left-5 top-0 bottom-0 w-6 flex flex-col justify-around items-center py-2">
          {Array.from({ length: 140 }).map((_, i) => (
            <div
              key={`perf-left-${i}`}
              className="w-4 h-7 bg-[#D9D9D7] rounded-[2px] shadow-inner border border-black/50 my-2"
            />
          ))}
        </div>

        {/* Right Side Perforations */}
        <div className="absolute right-3 md:right-5 top-0 bottom-0 w-6 flex flex-col justify-around items-center py-2">
          {Array.from({ length: 140 }).map((_, i) => (
            <div
              key={`perf-right-${i}`}
              className="w-4 h-7 bg-[#D9D9D7] rounded-[2px] shadow-inner border border-black/50 my-2"
            />
          ))}
        </div>

        {/* Continuous Film Reel Frames Array with Generous Red Margins */}
        <div className="w-[72%] max-w-[480px] flex flex-col gap-16 pt-4">
          {frames.map((frame, idx) => (
            <div
              key={`strip-frame-${idx}`}
              className="w-full bg-[#1A1616] p-3 md:p-4 rounded-xs border-2 border-black/90 shadow-2xl relative"
            >
              {/* Frame top timestamp & brand */}
              <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 font-bold px-1 mb-2 uppercase tracking-widest">
                <span>KODAK TRI-X 400</span>
                <span>• {frame.frameNumber} •</span>
                <span>VALENTINA ROSSI</span>
              </div>

              {/* B&W Image Frame */}
              <div className="relative w-full h-[180px] sm:h-[240px] md:h-[290px] overflow-hidden bg-black border border-white/10">

                <Image
                  src={frame.src}
                  alt={frame.caption}
                  fill
                  sizes="500px"
                  className="object-cover grayscale contrast-150 brightness-95 opacity-95 hover:opacity-100 transition-opacity duration-300"
                />
                {/* Film grain and edge fading */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
              </div>

              {/* Frame bottom number matching screenshot: ► 03A    SAFETY FILM */}
              <div className="flex justify-between items-center text-[10px] font-mono text-neutral-300 px-1 mt-2 font-semibold tracking-wider">
                <span>► {frame.frameNumber}</span>
                <span>SAFETY FILM</span>
              </div>
            </div>
          ))}
        </div>

        {/* Red Film Grain & Vignette Overlay */}
        <div className="absolute inset-0 bg-red-950/10 pointer-events-none mix-blend-multiply" />
      </div>
    </div>
  );
}
