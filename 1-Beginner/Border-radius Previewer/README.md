### Plan

1. **Create the HTML structure:**
   - A container to preview the box with the `border-radius` property.
   - Four input fields to change the `border-radius` values for the top-left, top-right, bottom-left, and bottom-right corners.
   - A button to copy the resulting CSS to the clipboard.

2. **Style the components with CSS:**
   - Style the preview box.
   - Style the input fields and the button.

3. **Implement the JavaScript functionality:**
   - Update the `border-radius` property of the box dynamically as the user changes the input values.
   - Generate the corresponding CSS code.
   - Copy the generated CSS to the clipboard when the button is clicked.

### Pseudocode

1. **HTML:**
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Border-Radius Previewer</title>
       <link rel="stylesheet" href="styles.css">
   </head>
   <body>
       <div class="container">
           <div class="preview-box" id="preview-box"></div>
           <div class="controls">
               <label for="top-left">Top-left:</label>
               <input type="number" id="top-left" value="0">
               <label for="top-right">Top-right:</label>
               <input type="number" id="top-right" value="0">
               <label for="bottom-left">Bottom-left:</label>
               <input type="number" id="bottom-left" value="0">
               <label for="bottom-right">Bottom-right:</label>
               <input type="number" id="bottom-right" value="0">
           </div>
           <button id="copy-css">Copy CSS</button>
           <pre id="css-output"></pre>
       </div>
       <script src="script.js"></script>
   </body>
   </html>
   ```

2. **CSS:**
   ```css
   /* styles.css */
   body {
       display: flex;
       justify-content: center;
       align-items: center;
       height: 100vh;
       margin: 0;
       font-family: Arial, sans-serif;
   }

   .container {
       text-align: center;
   }

   .preview-box {
       width: 200px;
       height: 200px;
       background-color: #3498db;
       margin-bottom: 20px;
   }

   .controls {
       margin-bottom: 20px;
   }

   .controls label, .controls input {
       margin: 5px;
   }

   #copy-css {
       margin-bottom: 20px;
       padding: 10px 20px;
       background-color: #2ecc71;
       color: white;
       border: none;
       cursor: pointer;
   }

   #css-output {
       background-color: #ecf0f1;
       padding: 10px;
       border: 1px solid #bdc3c7;
       display: inline-block;
   }
   ```

3. **JavaScript:**
   ```javascript
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
   ```

### Full Implementation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Border-Radius Previewer</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="preview-box" id="preview-box"></div>
        <div class="controls">
            <label for="top-left">Top-left:</label>
            <input type="number" id="top-left" value="0">
            <label for="top-right">Top-right:</label>
            <input type="number" id="top-right" value="0">
            <label for="bottom-left">Bottom-left:</label>
            <input type="number" id="bottom-left" value="0">
            <label for="bottom-right">Bottom-right:</label>
            <input type="number" id="bottom-right" value="0">
        </div>
        <button id="copy-css">Copy CSS</button>
        <pre id="css-output"></pre>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

```css
/* styles.css */
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
}

.container {
    text-align: center;
}

.preview-box {
    width: 200px;
    height: 200px;
    background-color: #3498db;
    margin-bottom: 20px;
}

.controls {
    margin-bottom: 20px;
}

.controls label, .controls input {
    margin: 5px;
}

#copy-css {
    margin-bottom: 20px;
    padding: 10px 20px;
    background-color: #2ecc71;
    color: white;
    border: none;
    cursor: pointer;
}

#css-output {
    background-color: #ecf0f1;
    padding: 10px;
    border: 1px solid #bdc3c7;
    display: inline-block;
}
```

```javascript
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
```