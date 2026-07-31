// main.js - Project A.R.G.U.S & PRAHARI Client Logic & PDF Controller

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Mermaid.js Diagrams
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

  // 2. Bind PDF Download Trigger
  const pdfBtn = document.getElementById('pdfBtn');
  if (pdfBtn) {
    pdfBtn.addEventListener('click', () => {
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