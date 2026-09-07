import React from 'react';

interface TapeProps {
  className?: string;
  variant?: 'cream' | 'red' | 'dark';
  rotate?: string;
}

export default function Tape({ className = '', variant = 'cream', rotate = 'rotate-[-3deg]' }: TapeProps) {
  const bgClass =
    variant === 'red'
      ? 'bg-[#8E0E13]/80 border-[#6F090D]/30 text-white'
      : variant === 'dark'
      ? 'bg-[#201C1B]/75 border-black/40 text-white'
      : 'bg-[#F3EEE7]/85 border-[#D8D8D6]/60 text-[#6F6862]';

  return (
    <div
      className={`absolute z-20 h-6 px-4 flex items-center justify-center text-[10px] font-mono tracking-widest ${bgClass} ${rotate} shadow-sm backdrop-blur-[1px] border-y border-dashed ${className}`}
      style={{
        clipPath: 'polygon(0% 15%, 5% 0%, 95% 0%, 100% 15%, 98% 85%, 100% 100%, 5% 100%, 0% 85%)',
      }}
    >
      <span className="opacity-40 uppercase select-none">TAPE // 35MM</span>
    </div>
  );
}
