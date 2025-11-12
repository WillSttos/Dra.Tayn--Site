"use client";

import { cn } from '@/lib/utils';
import type { CanvasElement as CanvasElementType } from '@/lib/types';
import React, { useEffect, useRef, useState } from 'react';
import { CanvasElementRenderer } from './canvas-element-renderer';

const GRID_SIZE = 10;

const resizeHandles = ['tl', 'tr', 'bl', 'br', 't', 'b', 'l', 'r'] as const;
type ResizeHandle = (typeof resizeHandles)[number];

interface CanvasElementProps {
  element: CanvasElementType;
  isSelected: boolean;
  onSelect: (e: React.MouseEvent, id: string) => void;
  onUpdate: (id: string, updates: Partial<CanvasElementType>) => void;
}

export function CanvasElement({
  element,
  isSelected,
  onSelect,
  onUpdate,
}: CanvasElementProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState<ResizeHandle | null>(null);
  const dragStartPos = useRef({ x: 0, y: 0, elX: 0, elY: 0, elW: 0, elH: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(e, element.id);

    const handle = (e.target as HTMLElement).dataset.handle as ResizeHandle;
    if (handle) {
      setIsResizing(handle);
    } else {
      setIsDragging(true);
    }

    dragStartPos.current = {
      x: e.clientX,
      y: e.clientY,
      elX: element.x,
      elY: element.y,
      elW: element.width,
      elH: element.height,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging && !isResizing) return;
      e.preventDefault();

      const dx = e.clientX - dragStartPos.current.x;
      const dy = e.clientY - dragStartPos.current.y;

      let { elX, elY, elW, elH } = dragStartPos.current;

      if (isDragging) {
        elX += dx;
        elY += dy;
      } else if (isResizing) {
        if (isResizing.includes('r')) elW += dx;
        if (isResizing.includes('l')) { elW -= dx; elX += dx; }
        if (isResizing.includes('b')) elH += dy;
        if (isResizing.includes('t')) { elH -= dy; elY += dy; }
      }

      const snappedX = Math.round(elX / GRID_SIZE) * GRID_SIZE;
      const snappedY = Math.round(elY / GRID_SIZE) * GRID_SIZE;
      const snappedW = Math.max(GRID_SIZE * 4, Math.round(elW / GRID_SIZE) * GRID_SIZE);
      const snappedH = Math.max(GRID_SIZE * 4, Math.round(elH / GRID_SIZE) * GRID_SIZE);
      
      const updates: Partial<CanvasElementType> = { x: snappedX, y: snappedY };

      // Only update width/height if they've changed to avoid re-renders
      if (snappedW !== element.width) updates.width = snappedW;
      if (snappedH !== element.height) updates.height = snappedH;

      onUpdate(element.id, updates);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(null);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, element.id, onUpdate, element.width, element.height]);

  return (
    <div
      style={{
        transform: `translate(${element.x}px, ${element.y}px)`,
        width: element.width,
        height: element.height,
      }}
      className={cn('absolute', isDragging || isResizing ? 'cursor-grabbing' : 'cursor-grab')}
      onMouseDown={handleMouseDown}
    >
      <div
        className={cn(
          'w-full h-full relative transition-all duration-100 ease-in-out',
          isSelected && 'outline outline-2 outline-primary outline-offset-2',
          isDragging && 'shadow-2xl'
        )}
      >
        <CanvasElementRenderer element={element} />
        {isSelected && (
          <>
            {resizeHandles.map((handle) => (
              <div
                key={handle}
                data-handle={handle}
                className={cn(
                  'absolute bg-primary rounded-full w-3 h-3 -m-1.5 z-20 hover:ring-2 hover:ring-primary/50',
                  {
                    'top-0 left-0 cursor-nwse-resize': handle === 'tl',
                    'top-0 right-0 cursor-nesw-resize': handle === 'tr',
                    'bottom-0 left-0 cursor-nesw-resize': handle === 'bl',
                    'bottom-0 right-0 cursor-nwse-resize': handle === 'br',
                    'top-0 left-1/2 -translate-x-1/2 cursor-ns-resize': handle === 't',
                    'bottom-0 left-1/2 -translate-x-1/2 cursor-ns-resize': handle === 'b',
                    'top-1/2 -translate-y-1/2 left-0 cursor-ew-resize': handle === 'l',
                    'top-1/2 -translate-y-1/2 right-0 cursor-ew-resize': handle === 'r',
                  }
                )}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
