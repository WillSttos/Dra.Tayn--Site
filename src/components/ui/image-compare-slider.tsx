'use client';

import * as React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageCompareSliderProps {
  before: string;
  after: string;
  alt: string;
  beforeHint: string;
  afterHint: string;
}

export function ImageCompareSlider({ before, after, alt, beforeHint, afterHint }: ImageCompareSliderProps) {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isDragging = React.useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
  };
  
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-2xl overflow-hidden select-none group image-compare-slider"
      style={{ '--position': `${sliderPosition}%` } as React.CSSProperties}
    >
      <Image
        src={before}
        alt={`Antes - ${alt}`}
        fill
        className="object-cover"
        data-ai-hint={beforeHint}
      />
      <Image
        src={after}
        alt={`Depois - ${alt}`}
        fill
        className="object-cover after-image"
        data-ai-hint={afterHint}
      />
      <div
        className="absolute top-0 bottom-0 w-1 bg-white/50 cursor-ew-resize slider-line"
      >
        <div 
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 text-foreground rounded-full shadow-lg flex items-center justify-center cursor-ew-resize slider-handle"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <ChevronLeft size={16} />
          <ChevronRight size={16} />
        </div>
      </div>
    </div>
  );
}
