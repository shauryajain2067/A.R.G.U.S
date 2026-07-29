// Initialize Mermaid Diagrams on Page Load
document.addEventListener('DOMContentLoaded', () => {
  if (typeof mermaid !== 'undefined') {
    mermaid.initialize({ startOnLoad: true, theme: 'neutral' });
  }

  // Bind PDF Print Action to Button
  const pdfButton = document.getElementById('pdfBtn');
  if (pdfButton) {
    pdfButton.addEventListener('click', () => {
      window.print();
    });
  }
});