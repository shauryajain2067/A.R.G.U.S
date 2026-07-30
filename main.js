// main.js - Project A.R.G.U.S Client Logic & PDF Export Controller

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Mermaid.js Diagrams for System Architecture
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

  // 2. Bind PDF Download Trigger to Action Bar Button
  const pdfBtn = document.getElementById('pdfBtn');
  if (pdfBtn) {
    pdfBtn.addEventListener('click', () => {
      // Ensure MathJax renders all LaTeX vectors and formulas prior to opening print engine
      // Prevents formulas from showing up as raw '$...$' in the exported PDF.
      if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
        MathJax.typesetPromise()
          .then(() => {
            window.print();
          })
          .catch((err) => {
            console.warn('MathJax typesetting error prior to print:', err);
            window.print(); // Fallback to print even if MathJax throws a warning
          });
      } else {
        window.print();
      }
    });
  }
});