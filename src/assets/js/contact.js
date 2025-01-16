document.addEventListener('DOMContentLoaded', () => {
    // Reuse navbar toggle logic
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        menuToggle.querySelector('i').classList.toggle('fa-times');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        navLinks.classList.toggle('active');
    });

    // Form handling
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Here you would typically send the data to your server
        console.log('Form submitted:', formData);

        // Show success message (replace with your own implementation)
        alert('Thank you for your message! We will get back to you soon.');

        // Reset form
        contactForm.reset();
    });

    // Animation for form labels
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(field => {
        field.addEventListener('focus', () => field.classList.add('active'));
        field.addEventListener('blur', () => {
            if (!field.value) {
                field.classList.remove('active');
            }
        });
    });
});