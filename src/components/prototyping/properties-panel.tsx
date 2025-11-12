"use client";

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import type { CanvasElement } from '@/lib/types';

interface PropertiesPanelProps {
  selectedElement: CanvasElement | null;
  onUpdateElement: (id: string, newProps: Partial<CanvasElement['props']>) => void;
}

export function PropertiesPanel({
  selectedElement,
  onUpdateElement,
}: PropertiesPanelProps) {
  if (!selectedElement) {
    return (
      <div className="p-4 text-muted-foreground text-center text-sm">
        Select an element to edit its properties.
      </div>
    );
  }

  const handlePropChange = (propName: string, value: any) => {
    onUpdateElement(selectedElement.id, { [propName]: value });
  };

  const renderProps = () => {
    switch (selectedElement.type) {
      case 'Heading':
      case 'Paragraph':
      case 'Button':
        return (
          <div className="space-y-2">
            <Label htmlFor="textContent">Text</Label>
            <Textarea
              id="textContent"
              value={selectedElement.props.textContent || ''}
              onChange={(e) => handlePropChange('textContent', e.target.value)}
              placeholder={`Enter ${selectedElement.type.toLowerCase()} text`}
            />
          </div>
        );
      case 'Input':
      case 'Textarea':
      case 'Image':
        return (
          <p className="text-sm text-muted-foreground">
            No editable properties for this element.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4 space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground font-headline">
          {selectedElement.type} Properties
        </h3>
        <p className="text-xs text-muted-foreground break-all">ID: {selectedElement.id}</p>
      </div>
      <div className="space-y-4">{renderProps()}</div>
    </div>
  );
}
