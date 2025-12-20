// Ultra Modern JavaScript

// Animated counter
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    }
    
    updateCounter();
}

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('stat-number')) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
            }
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Observe stats
    document.querySelectorAll('.stat-number').forEach(el => {
        observer.observe(el);
    });
    
    // Observe cards
    document.querySelectorAll('.impact-card, .cta-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
    
    // Parallax effect on image stack
    const imageStack = document.querySelector('.image-stack');
    if (imageStack) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            imageStack.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// YouTube video player
function playVideo(thumbnail) {
    const iframe = thumbnail.nextElementSibling;
    iframe.src = 'https://www.youtube.com/embed/kojDjqbusYs?autoplay=1&rel=0';
    iframe.style.display = 'block';
    thumbnail.style.display = 'none';
    const overlay = thumbnail.parentElement.querySelector('.play-overlay');
    if (overlay) overlay.style.display = 'none';
}

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';