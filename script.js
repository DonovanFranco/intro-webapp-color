document.addEventListener("DOMContentLoaded", function() {
    updateColor();
  
    const colorPicker = document.getElementById("colorPicker");
    const redInput = document.getElementById("redInput");
    const greenInput = document.getElementById("greenInput");
    const blueInput = document.getElementById("blueInput");
  
    colorPicker.addEventListener("input", function() {
      const color = colorPicker.value;
      const rgb = hexToRgb(color);
      redInput.value = rgb.r;
      greenInput.value = rgb.g;
      blueInput.value = rgb.b;
      updateColor();
    });
  
    redInput.addEventListener("input", updateColor);
    greenInput.addEventListener("input", updateColor);
    blueInput.addEventListener("input", updateColor);
  });
  
  function updateColor() {
    let red = parseInt(document.getElementById("redInput").value);
    let green = parseInt(document.getElementById("greenInput").value);
    let blue = parseInt(document.getElementById("blueInput").value);
  
    // Validar valores para asegurarse de que estén en el rango correcto
    red = Math.min(255, Math.max(0, red));
    green = Math.min(255, Math.max(0, green));
    blue = Math.min(255, Math.max(0, blue));
  
    document.getElementById("redInput").value = red;
    document.getElementById("greenInput").value = green;
    document.getElementById("blueInput").value = blue;
  
    const colorBox = document.getElementById("colorBox");
    colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  
    const hexCode = document.getElementById("hexCode");
    hexCode.textContent = `Código Hexadecimal: #${componentToHex(red)}${componentToHex(green)}${componentToHex(blue)}`;
  }
  
  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function hexToRgb(hex) {
    const bigint = parseInt(hex.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }
  