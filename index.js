
"use strict";

// Change the background to a valid RGB color
function changeBackgroundColor() {
  document.body.style.backgroundColor = "rgb(173, 216, 230)";
}

// Clear the inline background color
function resetBackgroundColor() {
  document.body.style.backgroundColor = "";
}

// Display the key pressed
function displayKeyPress(event) {
  const keyPressDisplay = document.querySelector("#keyPressDisplay");

  if (keyPressDisplay) {
    keyPressDisplay.textContent = `Key pressed: ${event.key}`;
  }
}

// Display the user's input
function displayUserInput() {
  const textInput = document.querySelector("#textInput");
  const textInputDisplay = document.querySelector("#textInputDisplay");

  if (textInput && textInputDisplay) {
    textInputDisplay.textContent = `You typed: ${textInput.value}`;
  }
}

// Set up event listeners
function setupEventListeners() {
  // Prevent duplicate listeners if setup is called more than once
  if (document.body.dataset.listenersInitialized === "true") {
    return;
  }

  document.body.dataset.listenersInitialized = "true";

  document.addEventListener("click", (event) => {
    if (event.target.closest("#changeColorButton")) {
      changeBackgroundColor();
    }
  });

  // Capture also handles a dblclick event that doesn't bubble
  document.addEventListener("dblclick", (event) => {
    if (event.target.closest("#resetColorButton")) {
      resetBackgroundColor();
    }
  }, true);

  document.addEventListener("keydown", displayKeyPress);

  document.addEventListener("input", (event) => {
    if (event.target.matches("#textInput")) {
      displayUserInput();
    }
  });
}

// Initialize listeners when the DOM is ready
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupEventListeners);
  } else if (document.body) {
    setupEventListeners();
  }
}

// Export functions for Jest tests
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
    setupEventListeners,
  };
}
