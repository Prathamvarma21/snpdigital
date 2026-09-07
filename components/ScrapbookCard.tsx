'use client';

import React from 'react';
import Tape from './Tape';

interface ScrapbookCardProps {
  children: React.ReactNode;
  variant?: 'cream' | 'red';
  rotate?: string;
  className?: string;
  id?: string;
  hasTape?: boolean;
}

export default function ScrapbookCard({
  children,
  variant = 'cream',
  rotate = 'rotate-[-0.3deg]',
  className = '',
  id,
  hasTape = true,
}: ScrapbookCardProps) {
  const bgClass =
    variant === 'red'
      ? 'bg-[#5C070B] text-white border-[#3A0406]'
      : 'bg-[#F3EEE7] text-[#201C1B] border-[#D8D8D6]';

  return (
    <section
      id={id}
      className={`relative mx-auto w-[92vw] max-w-[1150px] my-12 md:my-20 p-6 md:p-12 rounded-xs border shadow-2xl transition-transform duration-700 hover:rotate-0 ${bgClass} ${rotate} ${className}`}
      style={{
        boxShadow:
          variant === 'red'
            ? '0 30px 60px -12px rgba(0, 0, 0, 0.6), 0 12px 24px rgba(0, 0, 0, 0.4)'
            : '0 30px 60px -12px rgba(0, 0, 0, 0.45), 0 12px 24px rgba(0, 0, 0, 0.25)',
      }}
    >

      {/* Optional decorative corner tape */}
      {hasTape && (
        <>
          <Tape className="-top-3 -left-3" variant={variant === 'red' ? 'cream' : 'red'} rotate="rotate-[-6deg]" />
          <Tape className="-top-3 -right-3" variant={variant === 'red' ? 'cream' : 'red'} rotate="rotate-[5deg]" />
        </>
      )}

      {/* Subtle paper grain texture */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none rounded-xs mix-blend-overlay" />

      {/* Main card content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
