document.addEventListener('DOMContentLoaded', () => {
    // Reuse navbar toggle logic
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        menuToggle.querySelector('i').classList.toggle('fa-times');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        navLinks.classList.toggle('active');
    });

    // Add animations for elements
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

    document.querySelectorAll('.story-content, .value-card, .team-member').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Animate statistics when in view
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                statsObserver.unobserve(entry.target);
            }
        });
    });

    document.querySelector('.stats').forEach(el => {
        statsObserver.observe(el);
    });
});

function animateNumbers() {
    document.querySelectorAll('.number').forEach(num => {
        const target = parseInt(num.textContent);
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                num.textContent = target + (num.textContent.includes('+') ? '+' : '');
                clearInterval(timer);
            } else {
                num.textContent = Math.floor(current);
            }
        }, 30);
    });
}