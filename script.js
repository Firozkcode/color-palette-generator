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
      // alert(`Copied: ${color}`);
      notificationMessage("success", `${color} Color has been Copied!`, `${color}`);
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


function notificationMessage(type, messageText, bColor) {
  const notificationContainer = document.getElementById("notificationContainer");

  // Create the notification element
  const notification = document.createElement("div");
  notification.className = `notification ${type}`; // Add class for styling
  notification.style.backgroundColor = bColor;
  

  // Add the message
  const message = document.createElement("div");
  const mesType = document.getElementsByClassName("success");
  message.className = "message";
  message.textContent = messageText;
  // message.style.backgroundColor = bColor;

  // Add a close button
  const closeBtn = document.createElement("button");
  closeBtn.className = "close-btn";
  closeBtn.innerHTML = "&times;";
  closeBtn.addEventListener("click", () => {
      notification.remove();
  });

  // Add the progress bar
  const progressBar = document.createElement("div");
  progressBar.className = "progress-bar";

  // Append elements to the notification
  notification.appendChild(message);
  notification.appendChild(closeBtn);
  notification.appendChild(progressBar);

  // Append the notification to the container
  notificationContainer.appendChild(notification);

  // Remove the notification after 5 seconds
  setTimeout(() => {
      notification.remove();
  }, 5000);
}
