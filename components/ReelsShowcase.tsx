'use client';

import { useRef, useState } from 'react';
import ScrapbookCard from './ScrapbookCard';
import Tape from './Tape';
import { Play } from 'lucide-react';

const ReelVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div 
      className="relative w-full h-full cursor-pointer group"
      onMouseEnter={() => {
        videoRef.current?.play();
        setIsPlaying(true);
      }}
      onMouseLeave={() => {
        videoRef.current?.pause();
        setIsPlaying(false);
      }}
      onClick={handleTogglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
      />
      {/* Play Button Overlay - fades out when playing */}
      <div className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
        <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white/90">
          <Play className="w-8 h-8 fill-current" />
        </div>
      </div>
    </div>
  );
};

const reels = [
  { src: '/images/reels/IMG_5151.mp4', title: 'Reel' },
  { src: '/images/reels/IMG_5150.mp4', title: 'Reel' },
  { src: '/images/reels/IMG_5152.mp4', title: 'Reel' },
  { src: '/images/reels/IMG_5153.mp4', title: 'Reel' },
  { src: '/images/reels/IMG_5156.mov', title: 'Reel' },
];

export default function ReelsShowcase() {
  return (
    <ScrapbookCard id="reels" variant="dark" rotate="rotate-[0.5deg]">
      
      <div className="flex flex-col md:flex-row items-baseline justify-between mb-8 pb-4 border-b border-neutral-700">
        <h2 className="font-handwriting text-5xl md:text-7xl font-bold text-white tracking-wide">
          reel showcase
        </h2>
        <span className="text-xs font-mono text-neutral-400 mt-2 md:mt-0 uppercase tracking-widest">
          Video Campaigns & Motion
        </span>
      </div>

      <div className="relative w-full">
        <Tape className="-top-4 right-1/4" variant="red" rotate="rotate-[3deg]" />
        
        {/* Horizontal Scroll Container for Reels */}
        <div data-lenis-prevent="true" className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
          {reels.map((reel, idx) => (
            <div 
              key={idx} 
              className="relative shrink-0 w-[240px] md:w-[280px] snap-center bg-neutral-900 p-2 md:p-3 rounded-xs border border-neutral-700 shadow-xl"
            >
              {/* Phone Mockup Frame */}
              <div className="relative w-full aspect-[9/16] bg-black rounded-sm overflow-hidden border-2 border-black/80 shadow-inner">
                <ReelVideo src={reel.src} />
              </div>
              <div className="mt-3 flex justify-between items-center px-1">
                <span className="font-handwriting text-xl text-white">{reel.title}</span>
                <span className="text-[10px] font-mono text-neutral-500">MOTION</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-2 text-[#8E0E13] font-handwriting text-xl">
          hover or tap to play • swipe for more →
        </div>
      </div>

    </ScrapbookCard>
  );
}
