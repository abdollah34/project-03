document.addEventListener('DOMContentLoaded', () => {
    // Reuse the navbar and menu toggle logic from home.js
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        menuToggle.querySelector('i').classList.toggle('fa-times');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        navLinks.classList.toggle('active');
    });

    // Add smooth reveal animation for destination items
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.destination-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});