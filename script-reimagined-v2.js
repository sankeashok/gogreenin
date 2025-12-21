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

// Timeline year modal functionality
const yearData = {
    '2008': {
        title: 'The Beginning',
        description: 'Started with a vision to make Bangalore greener through cycling and environmental awareness.',
        image: 'GGI_Campaign2008.jpg',
        events: ['First cycling group formation', 'Environmental awareness campaigns', 'Community outreach programs'],
        url: '#2008-details'
    },
    '2009': {
        title: 'Growing Community',
        description: 'First year of regular cycling events and community building initiatives.',
        image: 'GGI_Campaign2008.jpg',
        events: ['Weekly Sunday rides established', 'First 50 members milestone', 'Local park cleanup drives'],
        url: '#2009-details'
    },
    '2010': {
        title: 'Expanding Reach',
        description: 'More cyclists joining the movement with expanded activities.',
        image: 'GGI_Campaign2008.jpg',
        events: ['100+ active cyclists', 'First inter-city cycling event', 'Partnership with local NGOs'],
        url: '#2010-details'
    },
    '2011': {
        title: 'Environmental Focus',
        description: 'Started lake cleaning initiatives and water conservation programs.',
        image: 'GGI_Campaign2008.jpg',
        events: ['First lake restoration project', 'Water conservation awareness', 'Collaboration with BBMP'],
        url: '#2011-details'
    },
    '2012': {
        title: 'Tree Plantation',
        description: 'Began large-scale tree planting drives across Bangalore.',
        image: 'GGI_Campaign2008.jpg',
        events: ['500+ saplings planted', 'Green corridor development', 'School environmental programs'],
        url: '#2012-details'
    },
    '2013': {
        title: '5 Years Strong',
        description: 'Celebrating half a decade of environmental impact and community growth.',
        image: 'GGI_Campaign2008.jpg',
        events: ['5th Anniversary celebration', 'Media recognition', 'Community awards received'],
        url: '#2013-details'
    },
    '2014': {
        title: 'Community Outreach',
        description: 'Expanded to multiple cycling groups and corporate partnerships.',
        image: 'GGI_Campaign2008.jpg',
        events: ['Multiple zone chapters', 'Corporate partnerships', 'Youth engagement programs'],
        url: '#2014-details'
    },
    '2015': {
        title: 'Sustainability Focus',
        description: 'Promoting cycling as eco-friendly transport solution.',
        image: 'GGI_Campaign2008.jpg',
        events: ['Cycle-to-work campaigns', 'Carbon footprint awareness', 'Green transport advocacy'],
        url: '#2015-details'
    },
    '2016': {
        title: 'Digital Presence',
        description: 'Launched online community platform and digital campaigns.',
        image: 'GGI_Campaign2008.jpg',
        events: ['Facebook community launch', 'Online event coordination', 'Digital awareness campaigns'],
        url: '#2016-details'
    },
    '2017': {
        title: 'Milestone Year',
        description: 'Reached 1000+ active cyclists and expanded impact.',
        image: 'GGI_Campaign2008.jpg',
        events: ['1000+ member milestone', 'Long distance rides', 'Environmental impact study'],
        url: '#2017-details'
    },
    '2018': {
        title: '10 Years Legacy',
        description: 'Decade of environmental contribution and community building.',
        image: 'GGI_Campaign2008.jpg',
        events: ['10th Anniversary celebration', 'Government recognition', 'Legacy documentation'],
        url: '#2018-details'
    },
    '2019': {
        title: 'Recognition',
        description: 'Awarded for environmental initiatives and community impact.',
        image: 'GGI_Campaign2008.jpg',
        events: ['Environmental excellence award', 'Media coverage expansion', 'Policy advocacy initiatives'],
        url: '#2019-details'
    },
    '2020': {
        title: 'Pandemic Resilience',
        description: 'Adapted to safe cycling practices during COVID-19.',
        image: 'GGI_Campaign2008.jpg',
        events: ['COVID-safe cycling protocols', 'Virtual community events', 'Health awareness campaigns'],
        url: '#2020-details'
    },
    '2021': {
        title: 'Recovery & Growth',
        description: 'Bounced back stronger post-pandemic with renewed energy.',
        image: 'GGI_Campaign2008.jpg',
        events: ['Post-pandemic revival', 'New member onboarding', 'Enhanced safety measures'],
        url: '#2021-details'
    },
    '2022': {
        title: 'Innovation',
        description: 'Introduced new cycling routes and technology integration.',
        image: 'GGI_Campaign2008.jpg',
        events: ['New heritage route discovery', 'Technology integration', 'Fitness tracking initiatives'],
        url: '#2022-details'
    },
    '2023': {
        title: '15 Years Strong',
        description: 'Grown into Bangalore\'s largest cycling community.',
        image: 'GGI_Campaign2023.png',
        events: ['15th Anniversary mega ride', '5000+ community members', 'Leadership development programs'],
        url: '#2023-details'
    },
    '2024': {
        title: 'Continued Impact',
        description: 'Expanding environmental initiatives and climate action.',
        image: 'GGI_Campaign2023.png',
        events: ['Climate action campaigns', 'Sustainable transport advocacy', 'Youth leadership programs'],
        url: '#2024-details'
    },
    '2025': {
        title: '17 Years Legacy',
        description: 'Continuing the environmental revolution with future vision.',
        image: 'GGI_Campaign2023.png',
        events: ['17th Anniversary celebration', 'Future vision planning', 'Next generation initiatives'],
        url: '#2025-details'
    }
};

function openYearModal(year) {
    const data = yearData[year];
    if (!data) return;
    
    document.getElementById('modalYear').textContent = year;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDescription').textContent = data.description;
    document.getElementById('modalImage').src = data.image;
    document.getElementById('modalImage').alt = `${year} - ${data.title}`;
    
    const eventsContainer = document.getElementById('modalEvents');
    eventsContainer.innerHTML = data.events.map(event => 
        `<div class="modal-event-item">${event}</div>`
    ).join('');
    
    document.getElementById('yearModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Store current year for "View Full Details" button
    window.currentModalYear = year;
}

function closeYearModal() {
    document.getElementById('yearModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openInNewTab() {
    const year = window.currentModalYear;
    const data = yearData[year];
    if (data && data.url) {
        window.open(data.url, '_blank');
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('yearModal');
    if (event.target === modal) {
        closeYearModal();
    }
}

// Timeline year expand/collapse functionality (keeping as fallback)
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