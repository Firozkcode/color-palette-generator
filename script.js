const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generate-btn");

// Function to generate a random color
function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
}

// Function to create a color box
function createColorBox(color) {
  const colorBox = document.createElement("div");
  colorBox.className = "color-box";
  colorBox.style.backgroundColor = color;
  colorBox.textContent = color;

  // Copy to clipboard on click
  colorBox.addEventListener("click", () => {
    navigator.clipboard.writeText(color).then(() => {
      alert(`Copied: ${color}`);
    });
  });

  return colorBox;
}

// Function to generate the color palette
function generatePalette() {
  palette.innerHTML = ""; // Clear existing colors
  for (let i = 0; i < 5; i++) {
    const randomColor = getRandomColor();
    const colorBox = createColorBox(randomColor);
    palette.appendChild(colorBox);
  }
}

// Event listener for the button
generateBtn.addEventListener("click", generatePalette);

// Initial palette on page load
generatePalette();
