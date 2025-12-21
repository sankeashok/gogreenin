// Reimagined GoGreenIn JavaScript

// Header gallery navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    const galleryLinks = document.querySelectorAll('.gallery-link');
    
    galleryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = link.dataset.filter;
            
            // Scroll to gallery section
            document.querySelector('#events-gallery').scrollIntoView({ behavior: 'smooth' });
            
            // Apply filter after scroll
            setTimeout(() => {
                const filterBtns = document.querySelectorAll('.filter-btn');
                const galleryItems = document.querySelectorAll('.gallery-item');
                
                // Update filter buttons
                filterBtns.forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.filter === filter);
                });
                
                // Filter gallery items
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            }, 500);
        });
    });
});

// Gallery filtering
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});

// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    
    if (body.getAttribute('data-theme') === 'light') {
        body.removeAttribute('data-theme');
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    }
}

// Gallery expand/collapse functionality
function toggleGallery() {
    const galleryContent = document.getElementById('galleryContent');
    const toggleText = document.querySelector('.toggle-text');
    const toggleIcon = document.querySelector('.toggle-icon');
    
    if (galleryContent.classList.contains('collapsed')) {
        galleryContent.classList.remove('collapsed');
        toggleText.textContent = 'Collapse';
        toggleIcon.textContent = '▼';
        toggleIcon.style.transform = 'rotate(0deg)';
    } else {
        galleryContent.classList.add('collapsed');
        toggleText.textContent = 'Expand';
        toggleIcon.textContent = '▶';
        toggleIcon.style.transform = 'rotate(0deg)';
    }
}

// Timeline year expand/collapse functionality
function toggleYear(year) {
    const eventsContainer = document.getElementById(`events-${year}`);
    const arrow = document.querySelector(`[onclick="toggleYear('${year}')"] .year-arrow`);
    
    if (eventsContainer.classList.contains('collapsed')) {
        eventsContainer.classList.remove('collapsed');
        arrow.style.transform = 'rotate(90deg)';
    } else {
        eventsContainer.classList.add('collapsed');
        arrow.style.transform = 'rotate(0deg)';
    }
}

// Load saved theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.querySelector('.theme-icon');
    
    if (savedTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        themeIcon.textContent = '☀️';
    } else {
        themeIcon.textContent = '🌙';
    }
});

// Video player function
function playVideoInline(thumbnail, videoId) {
    const iframe = thumbnail.nextElementSibling;
    const playButton = thumbnail.parentElement.querySelector('.play-button');
    
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.style.display = 'block';
    thumbnail.style.display = 'none';
    playButton.style.display = 'none';
}

function playVideo(thumbnail, videoId) {
    const iframe = thumbnail.nextElementSibling;
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.style.display = 'block';
    thumbnail.style.display = 'none';
    thumbnail.parentElement.querySelector('.play-button').style.display = 'none';
}

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

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate counters
            if (entry.target.classList.contains('number') || entry.target.classList.contains('impact-number')) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
            }
            
            // Add animation class
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Observe counters
    document.querySelectorAll('.number, .impact-number').forEach(el => {
        observer.observe(el);
    });
    
    // Observe cards for entrance animations
    document.querySelectorAll('.video-card, .timeline-item, .activity-card, .impact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
    
    // Smooth scrolling for anchor links
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

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';