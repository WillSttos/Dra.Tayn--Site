import type { CanvasElement } from '@/lib/types';

function getElementHtml(element: CanvasElement): string {
  const style = `width: 100%; height: 100%; box-sizing: border-box; margin: 0;`;
  switch (element.type) {
    case 'Heading':
      return `<h1 style="${style} font-size: 2em; display: flex; align-items: center; padding: 0.5rem;">${
        element.props.textContent || 'Heading'
      }</h1>`;
    case 'Paragraph':
      return `<p style="${style} padding: 0.5rem;">${
        element.props.textContent || 'Paragraph'
      }</p>`;
    case 'Button':
      return `<button style="${style} background-color: #3b82f6; color: white; border: none; border-radius: 0.375rem; cursor: pointer; font-size: 1rem;">${
        element.props.textContent || 'Button'
      }</button>`;
    case 'Input':
      return `<input type="text" placeholder="Input field" style="${style} padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 0.375rem;">`;
    case 'Textarea':
      return `<textarea placeholder="Textarea" style="${style} padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 0.375rem; resize: none;"></textarea>`;
    case 'Image':
      return `<div style="${style} background-color: #e5e7eb; border: 2px dashed #9ca3af; display: flex; align-items: center; justify-content: center; color: #6b7280; flex-direction: column; gap: 0.5rem; border-radius: 0.375rem;">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
        <span>Image</span>
      </div>`;
    default:
      return '';
  }
}

export function exportToHtml(elements: CanvasElement[]): string {
  const bodyContent = elements
    .map(
      (el) => `
    <div
      style="
        position: absolute;
        left: ${el.x}px;
        top: ${el.y}px;
        width: ${el.width}px;
        height: ${el.height}px;
      "
    >
      ${getElementHtml(el)}
    </div>
  `
    )
    .join('');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Prototype</title>
  <style>
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: #F5F5F5;
      position: relative;
      min-height: 100vh;
      margin: 0;
      overflow: auto;
    }
  </style>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
  ${bodyContent}
</body>
</html>
  `;
}
