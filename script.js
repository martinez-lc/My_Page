document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Fade-in effect on scroll
    const fadeIns = document.querySelectorAll('.fade-in');

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    fadeIns.forEach(fadeIn => {
        appearOnScroll.observe(fadeIn);
    });
});
