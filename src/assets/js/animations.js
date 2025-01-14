// This file contains JavaScript functions for animations and transitions on the website.

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.animate');

    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }, 100);
    });
});

function fadeIn(element, duration = 500) {
    element.style.opacity = 0;
    element.style.transition = `opacity ${duration}ms`;
    element.style.opacity = 1;
}

function slideIn(element, duration = 500) {
    element.style.transform = 'translateX(-100%)';
    element.style.transition = `transform ${duration}ms`;
    element.style.transform = 'translateX(0)';
}