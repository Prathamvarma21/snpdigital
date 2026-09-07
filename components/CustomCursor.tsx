'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check hovered element for cursor attribute
      const target = e.target as HTMLElement | null;
      const hoverEl = target?.closest('[data-cursor]') as HTMLElement | null;

      if (hoverEl) {
        setCursorText(hoverEl.getAttribute('data-cursor') || '');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouch) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center rounded-full border border-[#8E0E13] mix-blend-difference"
      animate={{
        x: position.x - (isHovered ? 28 : 10),
        y: position.y - (isHovered ? 28 : 10),
        width: isHovered ? 56 : 20,
        height: isHovered ? 56 : 20,
        backgroundColor: isHovered ? 'rgba(142, 14, 19, 0.9)' : 'transparent',
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
    >
      {cursorText && (
        <span className="text-white font-handwriting text-lg font-bold uppercase tracking-wider select-none">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
