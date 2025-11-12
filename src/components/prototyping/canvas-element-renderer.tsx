"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { CanvasElement } from '@/lib/types';
import { Image } from 'lucide-react';
import type React from 'react';

interface CanvasElementRendererProps {
  element: CanvasElement;
}

export function CanvasElementRenderer({ element }: CanvasElementRendererProps) {
  const commonStyles: React.CSSProperties = {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    pointerEvents: 'none',
  };

  switch (element.type) {
    case 'Heading':
      return (
        <h1
          style={commonStyles}
          className="text-2xl font-bold m-0 p-2 overflow-hidden flex items-center"
        >
          {element.props.textContent || 'Heading'}
        </h1>
      );
    case 'Paragraph':
      return (
        <p style={commonStyles} className="m-0 p-2 overflow-hidden">
          {element.props.textContent || 'Lorem ipsum dolor sit amet...'}
        </p>
      );
    case 'Button':
      return (
        <Button style={commonStyles} className="text-base" tabIndex={-1}>
          {element.props.textContent || 'Button'}
        </Button>
      );
    case 'Input':
      return (
        <Input
          style={commonStyles}
          placeholder="Input field"
          className="text-base"
          readOnly
        />
      );
    case 'Textarea':
      return (
        <Textarea
          style={commonStyles}
          placeholder="Textarea"
          className="text-base resize-none"
          readOnly
        />
      );
    case 'Image':
      return (
        <Card className="w-full h-full flex items-center justify-center bg-secondary/50 border-dashed">
          <div className="text-secondary-foreground/50 flex flex-col items-center gap-2">
            <Image className="w-8 h-8" />
            <span className="text-sm">Image</span>
          </div>
        </Card>
      );
    default:
      return null;
  }
}
