// JavaScript code for Dark mode

// Function to toggle Dark mode
function toggleDarkMode() {
  // Toggle the 'dark-mode' class on the document body
  document.body.classList.toggle('dark-mode');
}

// Function to initialize dark mode based on user preference
function initializeDarkMode() {
  // Check if 'dark-mode' is set to 'true' in localStorage
  const isDarkMode = localStorage.getItem('dark-mode') === 'true';

  // Toggle dark mode if it was enabled previously
  if (isDarkMode) {
    toggleDarkMode();
  }
}

// Function to save dark mode preference to localStorage
function saveDarkModePreference() {
  // Check if 'dark-mode' class is present on the document body
  const isDarkModeEnabled = document.body.classList.contains('dark-mode');

  // Save the dark mode preference to localStorage
  localStorage.setItem('dark-mode', isDarkModeEnabled.toString());
}

// Event listener for the dark mode toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', function () {
    toggleDarkMode();
    saveDarkModePreference();
  });
}

// Initialize dark mode based on user preference when the page loads
document.addEventListener('DOMContentLoaded', function () {
  initializeDarkMode();
});
