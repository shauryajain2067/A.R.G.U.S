// main.js - Project TRISHUL Client Logic & PDF Export Controller

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Mermaid Diagrams
  if (typeof mermaid !== 'undefined') {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'neutral',
      securityLevel: 'loose',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true
      }
    });
  }

  // 2. Bind PDF Download Trigger Button
  const pdfBtn = document.getElementById('pdfBtn');
  if (pdfBtn) {
    pdfBtn.addEventListener('click', () => {
      // Ensure MathJax renders all LaTeX vectors prior to opening print engine
      if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
        MathJax.typesetPromise()
          .then(() => {
            window.print();
          })
          .catch((err) => {
            console.warn('MathJax typesetting error prior to print:', err);
            window.print();
          });
      } else {
        window.print();
      }
    });
  }
});
