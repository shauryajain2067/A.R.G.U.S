// script.js - Project TRISHUL Site Interactions

// Configure Mermaid for Diagrams
document.addEventListener('DOMContentLoaded', () => {
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

    // Handle PDF Print Button Click
    const pdfBtn = document.getElementById('pdfBtn');
    if (pdfBtn) {
        pdfBtn.addEventListener('click', () => {
            // Check if MathJax is finished rendering to prevent incomplete PDFs
            if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
                MathJax.typesetPromise().then(() => {
                    window.print();
                });
            } else {
                window.print();
            }
        });
    }
});