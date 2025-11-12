export type ElementType =
  | 'Heading'
  | 'Paragraph'
  | 'Button'
  | 'Input'
  | 'Textarea'
  | 'Image';

export interface CanvasElement {
  id: string;
  type: ElementType;
  x: number;
  y: number;
  width: number;
  height: number;
  props: {
    textContent?: string;
    [key: string]: any;
  };
}
