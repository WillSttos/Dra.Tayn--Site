"use client";

import { Button } from '@/components/ui/button';
import type { ElementType } from '@/lib/types';
import {
  CaseSensitive,
  FileText,
  Heading1,
  Image as ImageIcon,
  MousePointerClick,
  Pilcrow,
} from 'lucide-react';
import type React from 'react';

const paletteItems: {
  type: ElementType;
  icon: React.ReactNode;
  label: string;
}[] = [
  { type: 'Heading', icon: <Heading1 />, label: 'Heading' },
  { type: 'Paragraph', icon: <Pilcrow />, label: 'Paragraph' },
  { type: 'Button', icon: <MousePointerClick />, label: 'Button' },
  { type: 'Input', icon: <CaseSensitive />, label: 'Input' },
  { type: 'Textarea', icon: <FileText />, label: 'Textarea' },
  { type: 'Image', icon: <ImageIcon />, label: 'Image' },
];

interface ElementPaletteProps {
  onAddElement: (type: ElementType) => void;
}

export function ElementPalette({ onAddElement }: ElementPaletteProps) {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4 text-foreground font-headline">
        Components
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {paletteItems.map(({ type, icon, label }) => (
          <Button
            key={type}
            variant="outline"
            className="flex flex-col items-center justify-center h-24 p-2 text-center bg-card hover:bg-secondary hover:text-secondary-foreground transition-colors group"
            onClick={() => onAddElement(type)}
            aria-label={`Add ${label} element`}
          >
            <div className="text-muted-foreground group-hover:text-secondary-foreground transition-colors">
              {icon}
            </div>
            <span className="text-xs mt-2">{label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
