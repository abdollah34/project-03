// This file serves as the main JavaScript file for the website, handling core functionality and event listeners.

document.addEventListener('DOMContentLoaded', () => {
    // Initialize event listeners
    initEventListeners();
});

function initEventListeners() {
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', toggleNavigation);
    }
}

function toggleNavigation() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Additional core functionality can be added here.