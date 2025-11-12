"use client";

import { useCallback, useState } from 'react';
import { Download, Trash2 } from 'lucide-react';
import { nanoid } from 'nanoid';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { useToast } from '@/hooks/use-toast';
import { Canvas } from '@/components/prototyping/canvas';
import { ElementPalette } from '@/components/prototyping/element-palette';
import { PropertiesPanel } from '@/components/prototyping/properties-panel';
import { exportToHtml } from '@/lib/export-html';
import type { CanvasElement, ElementType } from '@/lib/types';

// Default dimensions and properties for new elements
const defaultSpecs: Record<
  ElementType,
  { width: number; height: number; props: any }
> = {
  Heading: { width: 300, height: 60, props: { textContent: 'Heading' } },
  Paragraph: {
    width: 300,
    height: 100,
    props: { textContent: 'This is a paragraph. You can edit this text.' },
  },
  Button: { width: 120, height: 40, props: { textContent: 'Click me' } },
  Input: { width: 240, height: 40, props: {} },
  Textarea: { width: 240, height: 120, props: {} },
  Image: { width: 200, height: 200, props: {} },
};

export default function Home() {
  const [elements, setElements] = useState<CanvasElement[]>([]);
  const [selectedElementId, setSelectedElementId] = useState<string | null>(null);
  const { toast } = useToast();

  const handleAddElement = useCallback((type: ElementType) => {
    const { width, height, props } = defaultSpecs[type];
    const newElement: CanvasElement = {
      id: nanoid(),
      type,
      x: 100,
      y: 100,
      width,
      height,
      props,
    };
    setElements((prev) => [...prev, newElement]);
    setSelectedElementId(newElement.id);
  }, []);

  const handleUpdateElement = useCallback(
    (id: string, updates: Partial<CanvasElement>) => {
      setElements((prev) =>
        prev.map((el) => (el.id === id ? { ...el, ...updates } : el))
      );
    },
    []
  );

  const handleUpdateElementProps = useCallback(
    (id: string, newProps: Partial<CanvasElement['props']>) => {
      setElements((prev) =>
        prev.map((el) =>
          el.id === id ? { ...el, props: { ...el.props, ...newProps } } : el
        )
      );
    },
    []
  );

  const handleDeleteElement = useCallback(() => {
    if (!selectedElementId) return;
    setElements((prev) => prev.filter((el) => el.id !== selectedElementId));
    setSelectedElementId(null);
  }, [selectedElementId]);

  const handleSelectElement = (e: React.MouseEvent, id: string | null) => {
    if (e.shiftKey) return; // For future multi-select
    setSelectedElementId(id);
  };

  const handleDownload = () => {
    const html = exportToHtml(elements);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'prototype.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast({
      title: 'Download Started',
      description: 'Your prototype.html file is being downloaded.',
    });
  };

  const selectedElement =
    elements.find((el) => el.id === selectedElementId) || null;

  return (
    <SidebarProvider>
      <Sidebar side="left" className="border-r bg-card" collapsible="icon">
        <SidebarContent className="p-0">
          <ElementPalette onAddElement={handleAddElement} />
          <Separator />
          <PropertiesPanel
            selectedElement={selectedElement}
            onUpdateElement={handleUpdateElementProps}
          />
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <div className="flex flex-col h-screen bg-background">
          <header className="flex items-center justify-between p-2 border-b bg-card shrink-0">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <h1 className="text-xl font-semibold font-headline">Blank Canvas</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleDeleteElement}
                disabled={!selectedElementId}
                aria-label="Delete selected element"
              >
                <Trash2 className="w-5 h-5" />
              </Button>
              <Button onClick={handleDownload}>
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </header>
          <main className="flex-1 overflow-hidden">
            <Canvas
              elements={elements}
              selectedElementId={selectedElementId}
              onSelectElement={handleSelectElement}
              onUpdateElement={handleUpdateElement}
            />
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
