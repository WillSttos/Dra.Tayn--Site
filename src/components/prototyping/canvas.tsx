"use client";

import type { CanvasElement as CanvasElementType } from '@/lib/types';
import React from 'react';
import { CanvasElement } from './canvas-element';

interface CanvasProps {
  elements: CanvasElementType[];
  selectedElementId: string | null;
  onSelectElement: (e: React.MouseEvent, id: string | null) => void;
  onUpdateElement: (
    id: string,
    updates: Partial<CanvasElementType>
  ) => void;
}

export function Canvas({
  elements,
  selectedElementId,
  onSelectElement,
  onUpdateElement,
}: CanvasProps) {
  const handleCanvasClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onSelectElement(e, null);
    }
  };

  return (
    <div
      className="w-full h-full relative overflow-auto bg-card"
      onClick={handleCanvasClick}
      style={{
        backgroundImage:
          'radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)',
        backgroundSize: '10px 10px',
      }}
    >
      {elements.map((element) => (
        <CanvasElement
          key={element.id}
          element={element}
          isSelected={element.id === selectedElementId}
          onSelect={onSelectElement}
          onUpdate={onUpdateElement}
        />
      ))}
    </div>
  );
}
