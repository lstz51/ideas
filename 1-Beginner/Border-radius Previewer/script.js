// script.js
document.addEventListener('DOMContentLoaded', () => {
    const previewBox = document.getElementById('preview-box');
    const topLeftInput = document.getElementById('top-left');
    const topRightInput = document.getElementById('top-right');
    const bottomLeftInput = document.getElementById('bottom-left');
    const bottomRightInput = document.getElementById('bottom-right');
    const cssOutput = document.getElementById('css-output');
    const copyButton = document.getElementById('copy-css');

    function updateBorderRadius() {
        const topLeft = topLeftInput.value;
        const topRight = topRightInput.value;
        const bottomLeft = bottomLeftInput.value;
        const bottomRight = bottomRightInput.value;
        
        const borderRadiusValue = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;
        previewBox.style.borderRadius = borderRadiusValue;
        cssOutput.textContent = `border-radius: ${borderRadiusValue};`;
    }

    topLeftInput.addEventListener('input', updateBorderRadius);
    topRightInput.addEventListener('input', updateBorderRadius);
    bottomLeftInput.addEventListener('input', updateBorderRadius);
    bottomRightInput.addEventListener('input', updateBorderRadius);

    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(cssOutput.textContent).then(() => {
            alert('CSS copied to clipboard!');
        }).catch(err => {
            console.error('Error copying text: ', err);
        });
    });

    // Initial call to set default border radius
    updateBorderRadius();
});
