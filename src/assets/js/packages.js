document.addEventListener('DOMContentLoaded', () => {
    // Reuse navbar toggle logic
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        menuToggle.querySelector('i').classList.toggle('fa-times');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        navLinks.classList.toggle('active');
    });

    // Add smooth animations for package cards
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

    document.querySelectorAll('.package-card, .feature').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Add booking functionality (example)
    document.querySelectorAll('.book-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            // Add your booking logic here
            alert('Booking system coming soon!');
        });
    });
});