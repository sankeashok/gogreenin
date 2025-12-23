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
        monthlyData: [
            {month: 'Dec', rides: 2, cyclists: 25, events: ['Event 2 - Year End Foundation', 'Event 1 - First Community Meet']},
            {month: 'Nov', rides: 2, cyclists: 20, events: ['Event 2 - Awareness Campaign', 'Event 1 - Group Formation']},
            {month: 'Oct', rides: 1, cyclists: 15, events: ['Event 1 - GoGreenIn Launch']},
            {month: 'Sep', rides: 1, cyclists: 12, events: ['Event 1 - Initial Planning']},
            {month: 'Aug', rides: 1, cyclists: 10, events: ['Event 1 - Concept Development']},
            {month: 'Jul', rides: 1, cyclists: 8, events: ['Event 1 - Vision Formation']},
            {month: 'Jun', rides: 1, cyclists: 6, events: ['Event 1 - Idea Discussion']},
            {month: 'May', rides: 1, cyclists: 5, events: ['Event 1 - Foundation Planning']},
            {month: 'Apr', rides: 1, cyclists: 4, events: ['Event 1 - Initial Concept']},
            {month: 'Mar', rides: 1, cyclists: 3, events: ['Event 1 - Vision Birth']},
            {month: 'Feb', rides: 1, cyclists: 2, events: ['Event 1 - Idea Formation']},
            {month: 'Jan', rides: 1, cyclists: 1, events: ['Event 1 - The Beginning']}
        ],
        url: '#2008-details'
    },
    '2009': {
        title: 'Growing Community',
        description: 'First year of regular cycling events and community building initiatives.',
        image: 'GGI_Campaign2008.jpg',
        events: ['Weekly Sunday rides established', 'First 50 members milestone', 'Local park cleanup drives'],
        monthlyData: [
            {month: 'Dec', rides: 4, cyclists: 50, events: ['Event 4 - First Year End', 'Event 3 - 50 Members Milestone', 'Event 2 - Park Cleanup', 'Event 1 - Sunday Rides']},
            {month: 'Nov', rides: 4, cyclists: 45, events: ['Event 4 - Community November', 'Event 3 - Member Growth', 'Event 2 - Cleanup Drive', 'Event 1 - Regular Rides']},
            {month: 'Oct', rides: 4, cyclists: 40, events: ['Event 4 - Growth October', 'Event 3 - Community Building', 'Event 2 - Park Focus', 'Event 1 - Sunday Establishment']},
            {month: 'Sep', rides: 4, cyclists: 35, events: ['Event 4 - Community September', 'Event 3 - Member Drive', 'Event 2 - Cleanup Initiative', 'Event 1 - Weekly Rides']},
            {month: 'Aug', rides: 5, cyclists: 55, events: ['Event 5 - Community Independence', 'Event 4 - Member Patriotic', 'Event 3 - Park Freedom', 'Event 2 - Sunday Special', 'Event 1 - Growth Celebration']},
            {month: 'Jul', rides: 3, cyclists: 25, events: ['Event 3 - Monsoon Community', 'Event 2 - Indoor Rides', 'Event 1 - Member Focus']},
            {month: 'Jun', rides: 4, cyclists: 30, events: ['Event 4 - Community Environment', 'Event 3 - Member Green', 'Event 2 - Park Eco', 'Event 1 - Sunday Environment']},
            {month: 'May', rides: 4, cyclists: 25, events: ['Event 4 - Growth May', 'Event 3 - Community Building', 'Event 2 - Park Initiative', 'Event 1 - Sunday Focus']},
            {month: 'Apr', rides: 4, cyclists: 20, events: ['Event 4 - Community Spring', 'Event 3 - Member Growth', 'Event 2 - Cleanup Start', 'Event 1 - Sunday Begin']},
            {month: 'Mar', rides: 4, cyclists: 15, events: ['Event 4 - Growth March', 'Event 3 - Community Plan', 'Event 2 - Park Vision', 'Event 1 - Sunday Planning']},
            {month: 'Feb', rides: 3, cyclists: 10, events: ['Event 3 - Community February', 'Event 2 - Member Goal', 'Event 1 - Sunday Vision']},
            {month: 'Jan', rides: 3, cyclists: 5, events: ['Event 3 - Community New Year', 'Event 2 - Growth Mission', 'Event 1 - Sunday Start']}
        ],
        url: '#2009-details'
    },
    '2010': {
        title: 'Expanding Reach',
        description: 'More cyclists joining the movement with expanded activities.',
        image: 'GGI_Campaign2008.jpg',
        events: ['100+ active cyclists', 'First inter-city cycling event', 'Partnership with local NGOs'],
        monthlyData: [
            {month: 'Dec', rides: 3, cyclists: 6, events: ['Event 3 - Expansion Year End', 'Event 2 - Inter-city Event', 'Event 1 - NGO Partnership']},
            {month: 'Nov', rides: 3, cyclists: 5, events: ['Event 3 - Reach November', 'Event 2 - City Expansion', 'Event 1 - NGO Collaboration']},
            {month: 'Oct', rides: 3, cyclists: 4, events: ['Event 3 - Growth October', 'Event 2 - Inter-city Planning', 'Event 1 - Partnership Building']},
            {month: 'Sep', rides: 3, cyclists: 3, events: ['Event 3 - Expansion September', 'Event 2 - City Outreach', 'Event 1 - NGO Meeting']},
            {month: 'Aug', rides: 4, cyclists: 8, events: ['Event 4 - Expansion Independence', 'Event 3 - Inter-city Patriotic', 'Event 2 - NGO Freedom', 'Event 1 - Growth Celebration']},
            {month: 'Jul', rides: 2, cyclists: 2, events: ['Event 2 - Monsoon Expansion', 'Event 1 - Indoor Growth']},
            {month: 'Jun', rides: 3, cyclists: 3, events: ['Event 3 - Expansion Environment', 'Event 2 - Inter-city Green', 'Event 1 - NGO Eco']},
            {month: 'May', rides: 3, cyclists: 2, events: ['Event 3 - Growth May', 'Event 2 - City Expansion', 'Event 1 - Partnership Start']},
            {month: 'Apr', rides: 2, cyclists: 1, events: ['Event 2 - Expansion Spring', 'Event 1 - Growth Focus']},
            {month: 'Mar', rides: 2, cyclists: 1, events: ['Event 2 - Reach March', 'Event 1 - Expansion Plan']},
            {month: 'Feb', rides: 2, cyclists: 1, events: ['Event 2 - Growth February', 'Event 1 - Expansion Vision']},
            {month: 'Jan', rides: 2, cyclists: 1, events: ['Event 2 - Expansion New Year', 'Event 1 - Growth Mission']}
        ],
        url: '#2010-details'
    },
    '2011': {
        title: 'Environmental Focus',
        description: 'Started lake cleaning initiatives and water conservation programs.',
        image: 'GGI_Campaign2008.jpg',
        events: ['First lake restoration project', 'Water conservation awareness', 'Collaboration with BBMP'],
        monthlyData: [
            {month: 'Dec', rides: 3, cyclists: 8, events: ['Event 3 - Lake Year End', 'Event 2 - Water Conservation', 'Event 1 - BBMP Collaboration']},
            {month: 'Nov', rides: 3, cyclists: 7, events: ['Event 3 - Lake Festival', 'Event 2 - Water Awareness', 'Event 1 - Government Partnership']},
            {month: 'Oct', rides: 3, cyclists: 6, events: ['Event 3 - Lake October', 'Event 2 - Water Focus', 'Event 1 - BBMP Meeting']},
            {month: 'Sep', rides: 3, cyclists: 5, events: ['Event 3 - Lake September', 'Event 2 - Water Campaign', 'Event 1 - Environmental Focus']},
            {month: 'Aug', rides: 4, cyclists: 10, events: ['Event 4 - Lake Independence', 'Event 3 - Water Patriotic', 'Event 2 - BBMP Special', 'Event 1 - Environmental Freedom']},
            {month: 'Jul', rides: 2, cyclists: 4, events: ['Event 2 - Monsoon Lake', 'Event 1 - Water Monsoon']},
            {month: 'Jun', rides: 3, cyclists: 5, events: ['Event 3 - Lake Environment', 'Event 2 - Water World Day', 'Event 1 - BBMP Eco']},
            {month: 'May', rides: 3, cyclists: 4, events: ['Event 3 - Lake May', 'Event 2 - Water Conservation', 'Event 1 - Environmental Start']},
            {month: 'Apr', rides: 3, cyclists: 3, events: ['Event 3 - Lake Spring', 'Event 2 - Water Initiative', 'Event 1 - BBMP Start']},
            {month: 'Mar', rides: 3, cyclists: 2, events: ['Event 3 - Lake March', 'Event 2 - Water Planning', 'Event 1 - Environmental Vision']},
            {month: 'Feb', rides: 2, cyclists: 1, events: ['Event 2 - Lake February', 'Event 1 - Water Goal']},
            {month: 'Jan', rides: 2, cyclists: 1, events: ['Event 2 - Lake New Year', 'Event 1 - Water Mission']}
        ],
        url: '#2011-details'
    },
    '2012': {
        title: 'Tree Plantation',
        description: 'Began large-scale tree planting drives across Bangalore.',
        image: 'GGI_Campaign2008.jpg',
        events: ['500+ saplings planted', 'Green corridor development', 'School environmental programs'],
        monthlyData: [
            {month: 'Dec', rides: 4, cyclists: 12, events: ['Event 4 - Tree Year End', 'Event 3 - Green Corridor', 'Event 2 - School Program', 'Event 1 - Plantation Drive']},
            {month: 'Nov', rides: 4, cyclists: 11, events: ['Event 4 - Tree Festival', 'Event 3 - Green Development', 'Event 2 - School Outreach', 'Event 1 - Sapling Campaign']},
            {month: 'Oct', rides: 4, cyclists: 10, events: ['Event 4 - Plantation October', 'Event 3 - Corridor Planning', 'Event 2 - School Initiative', 'Event 1 - Tree Focus']},
            {month: 'Sep', rides: 4, cyclists: 9, events: ['Event 4 - Green September', 'Event 3 - Tree Development', 'Event 2 - School Program', 'Event 1 - Plantation Drive']},
            {month: 'Aug', rides: 5, cyclists: 15, events: ['Event 5 - Tree Independence', 'Event 4 - Green Patriotic', 'Event 3 - School Special', 'Event 2 - Corridor Freedom', 'Event 1 - Plantation Celebration']},
            {month: 'Jul', rides: 3, cyclists: 7, events: ['Event 3 - Monsoon Plantation', 'Event 2 - Indoor Green', 'Event 1 - Tree Care']},
            {month: 'Jun', rides: 4, cyclists: 8, events: ['Event 4 - Tree Environment', 'Event 3 - Green World Day', 'Event 2 - School Eco', 'Event 1 - Plantation Special']},
            {month: 'May', rides: 4, cyclists: 7, events: ['Event 4 - Tree May', 'Event 3 - Green Growth', 'Event 2 - School Green', 'Event 1 - Plantation Focus']},
            {month: 'Apr', rides: 4, cyclists: 6, events: ['Event 4 - Tree Spring', 'Event 3 - Green Start', 'Event 2 - School Begin', 'Event 1 - Plantation Launch']},
            {month: 'Mar', rides: 4, cyclists: 5, events: ['Event 4 - Tree March', 'Event 3 - Green Planning', 'Event 2 - School Strategy', 'Event 1 - Plantation Plan']},
            {month: 'Feb', rides: 4, cyclists: 4, events: ['Event 4 - Tree February', 'Event 3 - Green Vision', 'Event 2 - School Goal', 'Event 1 - Plantation Idea']},
            {month: 'Jan', rides: 4, cyclists: 3, events: ['Event 4 - Tree New Year', 'Event 3 - Green Resolution', 'Event 2 - School Mission', 'Event 1 - Plantation Vision']}
        ],
        url: '#2012-details'
    },
    '2013': {
        title: '5 Years Strong',
        description: 'Celebrating half a decade of environmental impact and community growth.',
        image: 'GGI_Campaign2008.jpg',
        events: ['5th Anniversary celebration', 'Media recognition', 'Community awards received'],
        monthlyData: [
            {month: 'Dec', rides: 4, cyclists: 25, events: ['Event 4 - 5th Anniversary Celebration', 'Event 3 - Media Recognition', 'Event 2 - Community Awards', 'Event 1 - Milestone Achievement']},
            {month: 'Nov', rides: 4, cyclists: 24, events: ['Event 4 - Anniversary Preparation', 'Event 3 - Media Coverage', 'Event 2 - Award Ceremony', 'Event 1 - Recognition Drive']},
            {month: 'Oct', rides: 4, cyclists: 23, events: ['Event 4 - Milestone October', 'Event 3 - Media Attention', 'Event 2 - Award Nomination', 'Event 1 - Recognition Focus']},
            {month: 'Sep', rides: 4, cyclists: 22, events: ['Event 4 - Anniversary September', 'Event 3 - Media Outreach', 'Event 2 - Community Honor', 'Event 1 - Milestone Progress']},
            {month: 'Aug', rides: 5, cyclists: 30, events: ['Event 5 - Anniversary Independence', 'Event 4 - Patriotic Milestone', 'Event 3 - Media Special', 'Event 2 - Award Celebration', 'Event 1 - Freedom Achievement']},
            {month: 'Jul', rides: 3, cyclists: 18, events: ['Event 3 - Anniversary Monsoon', 'Event 2 - Indoor Milestone', 'Event 1 - Recognition Indoor']},
            {month: 'Jun', rides: 4, cyclists: 20, events: ['Event 4 - Anniversary Environment', 'Event 3 - Green Milestone', 'Event 2 - Eco Recognition', 'Event 1 - Environmental Award']},
            {month: 'May', rides: 4, cyclists: 19, events: ['Event 4 - Milestone May', 'Event 3 - Anniversary Growth', 'Event 2 - Recognition Drive', 'Event 1 - Community Achievement']},
            {month: 'Apr', rides: 4, cyclists: 18, events: ['Event 4 - Anniversary Spring', 'Event 3 - Milestone Planning', 'Event 2 - Recognition Prep', 'Event 1 - Award Preparation']},
            {month: 'Mar', rides: 4, cyclists: 17, events: ['Event 4 - Anniversary March', 'Event 3 - Milestone Strategy', 'Event 2 - Recognition Plan', 'Event 1 - Award Vision']},
            {month: 'Feb', rides: 4, cyclists: 16, events: ['Event 4 - Anniversary February', 'Event 3 - Milestone Goal', 'Event 2 - Recognition Target', 'Event 1 - Award Goal']},
            {month: 'Jan', rides: 4, cyclists: 15, events: ['Event 4 - Anniversary New Year', 'Event 3 - Milestone Resolution', 'Event 2 - Recognition Mission', 'Event 1 - Award Vision']}
        ],
        url: '#2013-details'
    },
    '2014': {
        title: 'Community Outreach',
        description: 'Expanded to multiple cycling groups and corporate partnerships.',
        image: 'GGI_Campaign2008.jpg',
        events: ['Multiple zone chapters', 'Corporate partnerships', 'Youth engagement programs'],
        monthlyData: [
            {month: 'Dec', rides: 4, cyclists: 50, events: ['Event 4 - Outreach Year End', 'Event 3 - Corporate Partnership', 'Event 2 - Zone Expansion', 'Event 1 - Youth Program']},
            {month: 'Nov', rides: 4, cyclists: 48, events: ['Event 4 - Community Diwali', 'Event 3 - Corporate Tie-up', 'Event 2 - Zone Growth', 'Event 1 - Youth Engagement']},
            {month: 'Oct', rides: 4, cyclists: 45, events: ['Event 4 - Outreach October', 'Event 3 - Partnership Drive', 'Event 2 - Zone Development', 'Event 1 - Youth Focus']},
            {month: 'Sep', rides: 4, cyclists: 42, events: ['Event 4 - Community September', 'Event 3 - Corporate Outreach', 'Event 2 - Zone Building', 'Event 1 - Youth Initiative']},
            {month: 'Aug', rides: 5, cyclists: 55, events: ['Event 5 - Outreach Independence', 'Event 4 - Corporate Patriotic', 'Event 3 - Zone Celebration', 'Event 2 - Youth Freedom', 'Event 1 - Community Unity']},
            {month: 'Jul', rides: 3, cyclists: 35, events: ['Event 3 - Outreach Monsoon', 'Event 2 - Indoor Community', 'Event 1 - Youth Indoor']},
            {month: 'Jun', rides: 4, cyclists: 40, events: ['Event 4 - Community Environment', 'Event 3 - Corporate Green', 'Event 2 - Zone Eco', 'Event 1 - Youth Environment']},
            {month: 'May', rides: 4, cyclists: 38, events: ['Event 4 - Outreach May', 'Event 3 - Partnership Growth', 'Event 2 - Zone Expansion', 'Event 1 - Youth Development']},
            {month: 'Apr', rides: 4, cyclists: 35, events: ['Event 4 - Community Spring', 'Event 3 - Corporate Start', 'Event 2 - Zone Planning', 'Event 1 - Youth Program']},
            {month: 'Mar', rides: 4, cyclists: 32, events: ['Event 4 - Outreach March', 'Event 3 - Partnership Plan', 'Event 2 - Zone Strategy', 'Event 1 - Youth Vision']},
            {month: 'Feb', rides: 4, cyclists: 30, events: ['Event 4 - Community February', 'Event 3 - Corporate Planning', 'Event 2 - Zone Design', 'Event 1 - Youth Goal']},
            {month: 'Jan', rides: 4, cyclists: 28, events: ['Event 4 - Outreach New Year', 'Event 3 - Partnership Goal', 'Event 2 - Zone Vision', 'Event 1 - Youth Mission']}
        ],
        url: '#2014-details'
    },
    '2015': {
        title: 'Sustainability Focus',
        description: 'Promoting cycling as eco-friendly transport solution.',
        image: 'GGI_Campaign2008.jpg',
        events: ['Cycle-to-work campaigns', 'Carbon footprint awareness', 'Green transport advocacy'],
        monthlyData: [
            {month: 'Dec', rides: 4, cyclists: 100, events: ['Event 4 - Sustainable Year End', 'Event 3 - Green Transport', 'Event 2 - Eco Campaign', 'Event 1 - Carbon Awareness']},
            {month: 'Nov', rides: 4, cyclists: 95, events: ['Event 4 - Green Diwali', 'Event 3 - Eco Transport', 'Event 2 - Sustainable Festival', 'Event 1 - Carbon Reduction']},
            {month: 'Oct', rides: 4, cyclists: 90, events: ['Event 4 - Eco October', 'Event 3 - Green Advocacy', 'Event 2 - Sustainable Ride', 'Event 1 - Carbon Focus']},
            {month: 'Sep', rides: 4, cyclists: 85, events: ['Event 4 - Green September', 'Event 3 - Eco Awareness', 'Event 2 - Sustainable Transport', 'Event 1 - Carbon Campaign']},
            {month: 'Aug', rides: 5, cyclists: 110, events: ['Event 5 - Green Independence', 'Event 4 - Eco Patriotic', 'Event 3 - Sustainable Freedom', 'Event 2 - Carbon Free', 'Event 1 - Green Celebration']},
            {month: 'Jul', rides: 3, cyclists: 70, events: ['Event 3 - Green Monsoon', 'Event 2 - Eco Indoor', 'Event 1 - Sustainable Focus']},
            {month: 'Jun', rides: 4, cyclists: 80, events: ['Event 4 - Green Environment', 'Event 3 - Eco World Day', 'Event 2 - Sustainable Planet', 'Event 1 - Carbon Awareness']},
            {month: 'May', rides: 4, cyclists: 75, events: ['Event 4 - Green May', 'Event 3 - Eco Transport', 'Event 2 - Sustainable Cycling', 'Event 1 - Carbon Reduction']},
            {month: 'Apr', rides: 4, cyclists: 70, events: ['Event 4 - Green Spring', 'Event 3 - Eco Campaign', 'Event 2 - Sustainable Start', 'Event 1 - Carbon Focus']},
            {month: 'Mar', rides: 4, cyclists: 65, events: ['Event 4 - Green March', 'Event 3 - Eco Advocacy', 'Event 2 - Sustainable Plan', 'Event 1 - Carbon Strategy']},
            {month: 'Feb', rides: 4, cyclists: 60, events: ['Event 4 - Green February', 'Event 3 - Eco Planning', 'Event 2 - Sustainable Vision', 'Event 1 - Carbon Goal']},
            {month: 'Jan', rides: 4, cyclists: 55, events: ['Event 4 - Green New Year', 'Event 3 - Eco Resolution', 'Event 2 - Sustainable Goal', 'Event 1 - Carbon Mission']}
        ],
        url: '#2015-details'
    },
    '2016': {
        title: 'Digital Presence',
        description: 'Launched online community platform and digital campaigns.',
        image: 'GGI_Campaign2008.jpg',
        events: ['Facebook community launch', 'Online event coordination', 'Digital awareness campaigns'],
        monthlyData: [
            {month: 'Dec', rides: 4, cyclists: 150, events: ['Event 4 - Digital Year End', 'Event 3 - Online Community', 'Event 2 - Facebook Launch', 'Event 1 - Digital Campaign']},
            {month: 'Nov', rides: 4, cyclists: 145, events: ['Event 4 - Digital Diwali', 'Event 3 - Online Coordination', 'Event 2 - Social Media', 'Event 1 - Digital Outreach']},
            {month: 'Oct', rides: 4, cyclists: 140, events: ['Event 4 - Digital Festival', 'Event 3 - Online Platform', 'Event 2 - Facebook Growth', 'Event 1 - Digital Expansion']},
            {month: 'Sep', rides: 4, cyclists: 135, events: ['Event 4 - Digital September', 'Event 3 - Online Events', 'Event 2 - Social Platform', 'Event 1 - Digital Focus']},
            {month: 'Aug', rides: 5, cyclists: 170, events: ['Event 5 - Digital Independence', 'Event 4 - Online Patriotic', 'Event 3 - Facebook Special', 'Event 2 - Digital Celebration', 'Event 1 - Online Freedom']},
            {month: 'Jul', rides: 3, cyclists: 120, events: ['Event 3 - Digital Monsoon', 'Event 2 - Online Indoor', 'Event 1 - Digital Connect']},
            {month: 'Jun', rides: 4, cyclists: 130, events: ['Event 4 - Digital Environment', 'Event 3 - Online Green', 'Event 2 - Facebook Eco', 'Event 1 - Digital Awareness']},
            {month: 'May', rides: 4, cyclists: 125, events: ['Event 4 - Digital May', 'Event 3 - Online Community', 'Event 2 - Social Growth', 'Event 1 - Digital Launch']},
            {month: 'Apr', rides: 4, cyclists: 120, events: ['Event 4 - Digital Spring', 'Event 3 - Online Platform', 'Event 2 - Facebook Start', 'Event 1 - Digital Begin']},
            {month: 'Mar', rides: 4, cyclists: 115, events: ['Event 4 - Digital March', 'Event 3 - Online Prep', 'Event 2 - Social Media Plan', 'Event 1 - Digital Strategy']},
            {month: 'Feb', rides: 4, cyclists: 110, events: ['Event 4 - Digital February', 'Event 3 - Online Planning', 'Event 2 - Platform Design', 'Event 1 - Digital Vision']},
            {month: 'Jan', rides: 4, cyclists: 105, events: ['Event 4 - Digital New Year', 'Event 3 - Online Goal', 'Event 2 - Digital Plan', 'Event 1 - Platform Idea']}
        ],
        url: '#2016-details'
    },
    '2017': {
        title: 'Milestone Year',
        description: 'Reached 1000+ active cyclists and expanded impact.',
        image: 'GGI_Campaign2008.jpg',
        events: ['1000+ member milestone', 'Long distance rides', 'Environmental impact study'],
        monthlyData: [
            {month: 'Dec', rides: 4, cyclists: 220, events: ['Event 4 - Milestone Celebration', 'Event 3 - 1000+ Achievement', 'Event 2 - Impact Study', 'Event 1 - Year End Success']},
            {month: 'Nov', rides: 4, cyclists: 210, events: ['Event 4 - November Milestone', 'Event 3 - Member Growth', 'Event 2 - Long Distance', 'Event 1 - Achievement Ride']},
            {month: 'Oct', rides: 4, cyclists: 200, events: ['Event 4 - October Growth', 'Event 3 - Impact Assessment', 'Event 2 - Distance Challenge', 'Event 1 - Milestone Progress']},
            {month: 'Sep', rides: 4, cyclists: 190, events: ['Event 4 - September Expansion', 'Event 3 - Member Drive', 'Event 2 - Long Route', 'Event 1 - Growth Focus']},
            {month: 'Aug', rides: 5, cyclists: 250, events: ['Event 5 - Independence Milestone', 'Event 4 - Patriotic Growth', 'Event 3 - Long Distance Special', 'Event 2 - Member Celebration', 'Event 1 - Freedom Ride']},
            {month: 'Jul', rides: 3, cyclists: 160, events: ['Event 3 - Monsoon Milestone', 'Event 2 - Indoor Growth', 'Event 1 - Member Focus']},
            {month: 'Jun', rides: 4, cyclists: 180, events: ['Event 4 - Environment Milestone', 'Event 3 - Green Growth', 'Event 2 - Impact Study', 'Event 1 - World Environment Day']},
            {month: 'May', rides: 4, cyclists: 175, events: ['Event 4 - May Expansion', 'Event 3 - Member Growth', 'Event 2 - Distance Focus', 'Event 1 - Milestone Drive']},
            {month: 'Apr', rides: 4, cyclists: 170, events: ['Event 4 - April Growth', 'Event 3 - Expansion Drive', 'Event 2 - Long Distance', 'Event 1 - Member Milestone']},
            {month: 'Mar', rides: 4, cyclists: 165, events: ['Event 4 - March Expansion', 'Event 3 - Growth Target', 'Event 2 - Distance Challenge', 'Event 1 - Milestone Preparation']},
            {month: 'Feb', rides: 4, cyclists: 160, events: ['Event 4 - February Growth', 'Event 3 - Member Drive', 'Event 2 - Expansion Plan', 'Event 1 - Milestone Focus']},
            {month: 'Jan', rides: 4, cyclists: 155, events: ['Event 4 - New Year Growth', 'Event 3 - Milestone Goal', 'Event 2 - Expansion Start', 'Event 1 - Growth Kickoff']}
        ],
        url: '#2017-details'
    },
    '2018': {
        title: '10 Years Legacy',
        description: 'Decade of environmental contribution and community building.',
        image: 'GGI_Campaign2008.jpg',
        events: ['10th Anniversary celebration', 'Government recognition', 'Legacy documentation'],
        monthlyData: [
            {month: 'Dec', rides: 5, cyclists: 240, events: ['Event 5 - 10th Anniversary Celebration', 'Event 4 - Decade Milestone', 'Event 3 - Government Recognition', 'Event 2 - Legacy Awards', 'Event 1 - Community Honor']},
            {month: 'Nov', rides: 4, cyclists: 160, events: ['Event 4 - Achievement Awards', 'Event 3 - Community Recognition', 'Event 2 - Milestone Celebration', 'Event 1 - Legacy Building']},
            {month: 'Oct', rides: 4, cyclists: 170, events: ['Event 4 - Documentation Drive', 'Event 3 - History Recording', 'Event 2 - Legacy Project', 'Event 1 - Memory Lane']},
            {month: 'Sep', rides: 4, cyclists: 155, events: ['Event 4 - Anniversary September', 'Event 3 - Decade Progress', 'Event 2 - Legacy Focus', 'Event 1 - Milestone Journey']},
            {month: 'Aug', rides: 5, cyclists: 200, events: ['Event 5 - Anniversary Independence', 'Event 4 - Decade Patriotic', 'Event 3 - Legacy Freedom', 'Event 2 - Government Honor', 'Event 1 - Recognition Celebration']},
            {month: 'Jul', rides: 3, cyclists: 130, events: ['Event 3 - Anniversary Monsoon', 'Event 2 - Indoor Legacy', 'Event 1 - Decade Indoor']},
            {month: 'Jun', rides: 4, cyclists: 145, events: ['Event 4 - Anniversary Environment', 'Event 3 - Decade Green', 'Event 2 - Legacy Eco', 'Event 1 - Environmental Decade']},
            {month: 'May', rides: 4, cyclists: 140, events: ['Event 4 - Decade May', 'Event 3 - Anniversary Growth', 'Event 2 - Legacy Building', 'Event 1 - Milestone Progress']},
            {month: 'Apr', rides: 4, cyclists: 135, events: ['Event 4 - Anniversary Spring', 'Event 3 - Decade Planning', 'Event 2 - Legacy Preparation', 'Event 1 - Milestone Focus']},
            {month: 'Mar', rides: 4, cyclists: 130, events: ['Event 4 - Decade March', 'Event 3 - Anniversary Strategy', 'Event 2 - Legacy Plan', 'Event 1 - Milestone Vision']},
            {month: 'Feb', rides: 4, cyclists: 125, events: ['Event 4 - Anniversary February', 'Event 3 - Decade Goal', 'Event 2 - Legacy Target', 'Event 1 - Milestone Mission']},
            {month: 'Jan', rides: 4, cyclists: 120, events: ['Event 4 - Decade New Year', 'Event 3 - Anniversary Resolution', 'Event 2 - Legacy Vision', 'Event 1 - Milestone Start']}
        ],
        url: '#2018-details'
    },
    '2019': {
        title: 'Recognition',
        description: 'Awarded for environmental initiatives and community impact.',
        image: 'GGI_Campaign2008.jpg',
        events: ['Environmental excellence award', 'Media coverage expansion', 'Policy advocacy initiatives'],
        monthlyData: [
            {month: 'Dec', rides: 4, cyclists: 250, events: ['Event 4 - Recognition Celebration', 'Event 3 - Award Ceremony', 'Event 2 - Media Coverage', 'Event 1 - Year End Honor']},
            {month: 'Nov', rides: 4, cyclists: 240, events: ['Event 4 - Excellence Award', 'Event 3 - Community Recognition', 'Event 2 - Media Attention', 'Event 1 - Achievement Ride']},
            {month: 'Oct', rides: 4, cyclists: 230, events: ['Event 4 - Policy Advocacy', 'Event 3 - Government Meeting', 'Event 2 - Recognition Drive', 'Event 1 - Award Preparation']},
            {month: 'Sep', rides: 4, cyclists: 220, events: ['Event 4 - September Recognition', 'Event 3 - Media Outreach', 'Event 2 - Policy Discussion', 'Event 1 - Advocacy Ride']},
            {month: 'Aug', rides: 5, cyclists: 280, events: ['Event 5 - Independence Recognition', 'Event 4 - Patriotic Award', 'Event 3 - Media Coverage', 'Event 2 - Policy Advocacy', 'Event 1 - Freedom Celebration']},
            {month: 'Jul', rides: 3, cyclists: 180, events: ['Event 3 - Monsoon Recognition', 'Event 2 - Indoor Awards', 'Event 1 - Media Interview']},
            {month: 'Jun', rides: 4, cyclists: 210, events: ['Event 4 - Environment Recognition', 'Event 3 - Green Award', 'Event 2 - Media Feature', 'Event 1 - World Environment Day']},
            {month: 'May', rides: 4, cyclists: 200, events: ['Event 4 - May Recognition', 'Event 3 - Community Award', 'Event 2 - Media Spotlight', 'Event 1 - Achievement Celebration']},
            {month: 'Apr', rides: 4, cyclists: 190, events: ['Event 4 - April Excellence', 'Event 3 - Recognition Drive', 'Event 2 - Award Nomination', 'Event 1 - Community Honor']},
            {month: 'Mar', rides: 4, cyclists: 185, events: ['Event 4 - March Recognition', 'Event 3 - Excellence Preparation', 'Event 2 - Award Application', 'Event 1 - Recognition Ride']},
            {month: 'Feb', rides: 4, cyclists: 175, events: ['Event 4 - February Excellence', 'Event 3 - Recognition Process', 'Event 2 - Award Submission', 'Event 1 - Community Achievement']},
            {month: 'Jan', rides: 4, cyclists: 170, events: ['Event 4 - New Year Recognition', 'Event 3 - Excellence Goal', 'Event 2 - Award Planning', 'Event 1 - Recognition Start']}
        ],
        url: '#2019-details'
    },
    '2020': {
        title: 'Pandemic Resilience',
        description: 'Adapted to safe cycling practices during COVID-19.',
        image: 'GGI_Campaign2008.jpg',
        events: ['COVID-safe cycling protocols', 'Virtual community events', 'Health awareness campaigns'],
        monthlyData: [
            {month: 'Dec', rides: 2, cyclists: 50, events: ['Event 2 - Year End Virtual', 'Event 1 - Safe Distance Ride']},
            {month: 'Nov', rides: 2, cyclists: 45, events: ['Event 2 - Diwali Safety', 'Event 1 - Virtual Celebration']},
            {month: 'Oct', rides: 3, cyclists: 60, events: ['Event 3 - Outdoor Return', 'Event 2 - Safety Protocol', 'Event 1 - Cautious Restart']},
            {month: 'Sep', rides: 2, cyclists: 40, events: ['Event 2 - September Safety', 'Event 1 - Limited Gathering']},
            {month: 'Aug', rides: 1, cyclists: 30, events: ['Event 1 - Independence Virtual']},
            {month: 'Jul', rides: 1, cyclists: 25, events: ['Event 1 - Monsoon Indoor']},
            {month: 'Jun', rides: 1, cyclists: 20, events: ['Event 1 - Unlock Phase']},
            {month: 'May', rides: 0, cyclists: 0, events: ['Virtual Events Only']},
            {month: 'Apr', rides: 0, cyclists: 0, events: ['Complete Lockdown']},
            {month: 'Mar', rides: 2, cyclists: 80, events: ['Event 2 - Pre-Lockdown', 'Event 1 - Last Normal Ride']},
            {month: 'Feb', rides: 4, cyclists: 180, events: ['Event 4 - Normal Operations', 'Event 3 - Community Strong', 'Event 2 - Regular Rides', 'Event 1 - February Active']},
            {month: 'Jan', rides: 4, cyclists: 190, events: ['Event 4 - New Year Strong', 'Event 3 - Community Active', 'Event 2 - Regular Schedule', 'Event 1 - January Kickoff']}
        ],
        url: '#2020-details'
    },
    '2021': {
        title: 'Recovery & Growth',
        description: 'Bounced back stronger post-pandemic with renewed energy.',
        image: 'GGI_Campaign2008.jpg',
        events: ['Post-pandemic revival', 'New member onboarding', 'Enhanced safety measures'],
        monthlyData: [
            {month: 'Dec', rides: 4, cyclists: 220, events: ['Event 4 - Recovery Celebration', 'Event 3 - Safety Protocol', 'Event 2 - New Member Welcome', 'Event 1 - Year End Revival']},
            {month: 'Nov', rides: 4, cyclists: 200, events: ['Event 4 - Growth Milestone', 'Event 3 - Community Rebuild', 'Event 2 - Safety First', 'Event 1 - Revival Ride']},
            {month: 'Oct', rides: 4, cyclists: 190, events: ['Event 4 - Post-Pandemic Strength', 'Event 3 - Community Recovery', 'Event 2 - Safe Cycling', 'Event 1 - Renewed Energy']},
            {month: 'Sep', rides: 4, cyclists: 180, events: ['Event 4 - September Revival', 'Event 3 - Growth Focus', 'Event 2 - Safety Measures', 'Event 1 - Community Strength']},
            {month: 'Aug', rides: 4, cyclists: 170, events: ['Event 4 - Independence Recovery', 'Event 3 - Patriotic Revival', 'Event 2 - Safe Celebration', 'Event 1 - Freedom Ride']},
            {month: 'Jul', rides: 3, cyclists: 150, events: ['Event 3 - Monsoon Safety', 'Event 2 - Indoor Training', 'Event 1 - Recovery Phase']},
            {month: 'Jun', rides: 4, cyclists: 160, events: ['Event 4 - Mid-Year Recovery', 'Event 3 - Safety Protocol', 'Event 2 - Community Rebuild', 'Event 1 - Environment Day']},
            {month: 'May', rides: 4, cyclists: 140, events: ['Event 4 - May Recovery', 'Event 3 - Safety First', 'Event 2 - Gradual Return', 'Event 1 - Cautious Start']},
            {month: 'Apr', rides: 3, cyclists: 120, events: ['Event 3 - April Revival', 'Event 2 - Safety Measures', 'Event 1 - Slow Recovery']},
            {month: 'Mar', rides: 3, cyclists: 100, events: ['Event 3 - March Restart', 'Event 2 - Safety Protocol', 'Event 1 - Careful Return']},
            {month: 'Feb', rides: 2, cyclists: 80, events: ['Event 2 - February Caution', 'Event 1 - Gradual Start']},
            {month: 'Jan', rides: 2, cyclists: 60, events: ['Event 2 - New Year Hope', 'Event 1 - Recovery Begin']}
        ],
        url: '#2021-details'
    },
    '2022': {
        title: 'Innovation',
        description: 'Introduced new cycling routes and technology integration.',
        image: 'GGI_Campaign2008.jpg',
        events: ['New heritage route discovery', 'Technology integration', 'Fitness tracking initiatives'],
        monthlyData: [
            {month: 'Dec', rides: 4, cyclists: 260, events: ['Event 4 - 14th Anniversary', 'Event 3 - Innovation Awards', 'Event 2 - Tech Integration', 'Event 1 - Year End Ride']},
            {month: 'Nov', rides: 4, cyclists: 175, events: ['Event 4 - Heritage Discovery', 'Event 3 - Route Innovation', 'Event 2 - Community Tech', 'Event 1 - Fitness Focus']},
            {month: 'Oct', rides: 4, cyclists: 190, events: ['Event 4 - Digital Campaign', 'Event 3 - Smart Cycling', 'Event 2 - Tech Adoption', 'Event 1 - Innovation Drive']},
            {month: 'Sep', rides: 4, cyclists: 180, events: ['Event 4 - September Innovation', 'Event 3 - Tech September', 'Event 2 - Route Discovery', 'Event 1 - Innovation Focus']},
            {month: 'Aug', rides: 5, cyclists: 220, events: ['Event 5 - Tech Independence', 'Event 4 - Innovation Patriotic', 'Event 3 - Digital Freedom', 'Event 2 - Route Freedom', 'Event 1 - Tech Celebration']},
            {month: 'Jul', rides: 3, cyclists: 140, events: ['Event 3 - Monsoon Innovation', 'Event 2 - Indoor Tech', 'Event 1 - Digital Monsoon']},
            {month: 'Jun', rides: 4, cyclists: 165, events: ['Event 4 - Tech Environment', 'Event 3 - Innovation Green', 'Event 2 - Digital Eco', 'Event 1 - Route Environment']},
            {month: 'May', rides: 4, cyclists: 160, events: ['Event 4 - Innovation May', 'Event 3 - Tech Growth', 'Event 2 - Digital Development', 'Event 1 - Route Planning']},
            {month: 'Apr', rides: 4, cyclists: 155, events: ['Event 4 - Tech Spring', 'Event 3 - Innovation Start', 'Event 2 - Digital Begin', 'Event 1 - Route Launch']},
            {month: 'Mar', rides: 4, cyclists: 150, events: ['Event 4 - Innovation March', 'Event 3 - Tech Planning', 'Event 2 - Digital Strategy', 'Event 1 - Route Vision']},
            {month: 'Feb', rides: 4, cyclists: 145, events: ['Event 4 - Tech February', 'Event 3 - Innovation Goal', 'Event 2 - Digital Target', 'Event 1 - Route Mission']},
            {month: 'Jan', rides: 4, cyclists: 140, events: ['Event 4 - Innovation New Year', 'Event 3 - Tech Resolution', 'Event 2 - Digital Vision', 'Event 1 - Route Start']}
        ],
        url: '#2022-details'
    },
    '2023': {
        title: '15 Years Strong',
        description: 'Grown into Bangalore\'s largest cycling community.',
        image: 'GGI_Campaign2023.png',
        events: ['15th Anniversary mega ride', '5000+ community members', 'Leadership development programs'],
        monthlyData: [
            {month: 'Dec', rides: 5, cyclists: 320, events: ['Event 5 - 15th Anniversary Mega Ride', 'Event 4 - Community Awards', 'Event 3 - Year Review', 'Event 2 - Winter Festival', 'Event 1 - Holiday Ride']},
            {month: 'Nov', rides: 4, cyclists: 185, events: ['Event 4 - Diwali Celebration', 'Event 3 - Light Festival', 'Event 2 - Community Bonding', 'Event 1 - Autumn Ride']},
            {month: 'Oct', rides: 4, cyclists: 200, events: ['Event 4 - Navratri Special', 'Event 3 - Cultural Ride', 'Event 2 - Heritage Route', 'Event 1 - Festival Season']},
            {month: 'Sep', rides: 4, cyclists: 190, events: ['Event 4 - September Strong', 'Event 3 - Community Growth', 'Event 2 - Milestone Progress', 'Event 1 - Strong Foundation']},
            {month: 'Aug', rides: 5, cyclists: 240, events: ['Event 5 - Strong Independence', 'Event 4 - 15 Years Patriotic', 'Event 3 - Community Freedom', 'Event 2 - Strong Celebration', 'Event 1 - Independence Strong']},
            {month: 'Jul', rides: 3, cyclists: 160, events: ['Event 3 - Strong Monsoon', 'Event 2 - Indoor Strong', 'Event 1 - Community Indoor']},
            {month: 'Jun', rides: 4, cyclists: 175, events: ['Event 4 - Strong Environment', 'Event 3 - 15 Years Green', 'Event 2 - Community Eco', 'Event 1 - Strong World Day']},
            {month: 'May', rides: 4, cyclists: 170, events: ['Event 4 - Strong May', 'Event 3 - Community Strong', 'Event 2 - 15 Years Growth', 'Event 1 - Strong Development']},
            {month: 'Apr', rides: 4, cyclists: 165, events: ['Event 4 - Strong Spring', 'Event 3 - Community April', 'Event 2 - 15 Years Building', 'Event 1 - Strong Foundation']},
            {month: 'Mar', rides: 4, cyclists: 160, events: ['Event 4 - Strong March', 'Event 3 - Community Planning', 'Event 2 - 15 Years Strategy', 'Event 1 - Strong Vision']},
            {month: 'Feb', rides: 4, cyclists: 155, events: ['Event 4 - Strong February', 'Event 3 - Community Goal', 'Event 2 - 15 Years Target', 'Event 1 - Strong Mission']},
            {month: 'Jan', rides: 4, cyclists: 150, events: ['Event 4 - Strong New Year', 'Event 3 - Community Resolution', 'Event 2 - 15 Years Vision', 'Event 1 - Strong Start']}
        ],
        url: '#2023-details'
    },
    '2024': {
        title: 'Continued Impact',
        description: 'Expanding environmental initiatives and climate action.',
        image: 'GGI_Campaign2023.png',
        events: ['Climate action campaigns', 'Sustainable transport advocacy', 'Youth leadership programs'],
        monthlyData: [
            {month: 'Dec', rides: 4, cyclists: 280, events: ['Event 4 - 16th Anniversary Ride', 'Event 3 - Year End Celebration', 'Event 2 - Winter Solstice', 'Event 1 - Christmas Special']},
            {month: 'Nov', rides: 4, cyclists: 195, events: ['Event 4 - Diwali Ride', 'Event 3 - Air Quality Drive', 'Event 2 - Heritage Tour', 'Event 1 - Festival Prep']},
            {month: 'Oct', rides: 4, cyclists: 210, events: ['Event 4 - Durga Puja Special', 'Event 3 - Clean Air Campaign', 'Event 2 - Community Service', 'Event 1 - Festive Season']},
            {month: 'Sep', rides: 4, cyclists: 200, events: ['Event 4 - September Impact', 'Event 3 - Climate Action', 'Event 2 - Sustainable Transport', 'Event 1 - Impact Focus']},
            {month: 'Aug', rides: 5, cyclists: 250, events: ['Event 5 - Impact Independence', 'Event 4 - Climate Patriotic', 'Event 3 - Sustainable Freedom', 'Event 2 - Transport Freedom', 'Event 1 - Independence Impact']},
            {month: 'Jul', rides: 3, cyclists: 170, events: ['Event 3 - Impact Monsoon', 'Event 2 - Indoor Impact', 'Event 1 - Climate Indoor']},
            {month: 'Jun', rides: 4, cyclists: 185, events: ['Event 4 - Impact Environment', 'Event 3 - Climate World Day', 'Event 2 - Sustainable Eco', 'Event 1 - Transport Environment']},
            {month: 'May', rides: 4, cyclists: 180, events: ['Event 4 - Impact May', 'Event 3 - Climate Growth', 'Event 2 - Sustainable Development', 'Event 1 - Transport Focus']},
            {month: 'Apr', rides: 4, cyclists: 175, events: ['Event 4 - Impact Spring', 'Event 3 - Climate Start', 'Event 2 - Sustainable Begin', 'Event 1 - Transport Launch']},
            {month: 'Mar', rides: 4, cyclists: 170, events: ['Event 4 - Impact March', 'Event 3 - Climate Planning', 'Event 2 - Sustainable Strategy', 'Event 1 - Transport Vision']},
            {month: 'Feb', rides: 4, cyclists: 165, events: ['Event 4 - Impact February', 'Event 3 - Climate Goal', 'Event 2 - Sustainable Target', 'Event 1 - Transport Mission']},
            {month: 'Jan', rides: 4, cyclists: 160, events: ['Event 4 - Impact New Year', 'Event 3 - Climate Resolution', 'Event 2 - Sustainable Vision', 'Event 1 - Transport Start']}
        ],
        url: '#2024-details'
    },
    '2025': {
        title: '17 Years Legacy',
        description: 'Continuing the environmental revolution with future vision.',
        image: '2025/17th Anniversary-2025 Year.jpg',
        events: ['17th Anniversary celebration', 'Future vision planning', 'Next generation initiatives'],
        monthlyData: [
            {month: 'Dec', rides: 5, cyclists: 300, events: ['Event 5 - 17th Anniversary Celebration', 'Event 4 - Community Awards', 'Event 3 - New Year Prep', 'Event 2 - Year-End Review', 'Event 1 - Christmas Ride']},
            {month: 'Nov', rides: 4, cyclists: 210, events: ['Event 4 - Thanksgiving Ride', 'Event 3 - Winter Prep', 'Event 2 - Air Quality Awareness', 'Event 1 - Diwali Celebration']},
            {month: 'Oct', rides: 4, cyclists: 195, events: ['Event 4 - Community Bonding', 'Event 3 - Heritage Tour', 'Event 2 - Festival of Lights Prep', 'Event 1 - Dussehra Ride']},
            {month: 'Sep', rides: 4, cyclists: 185, events: ['Event 4 - Fitness Focus', 'Event 3 - Clean-up Drive', 'Event 2 - Ganesh Festival', 'Event 1 - Post-Monsoon Revival']},
            {month: 'Aug', rides: 5, cyclists: 250, events: ['Event 5 - Unity Ride', 'Event 4 - Cultural Program', 'Event 3 - Flag Hoisting', 'Event 2 - Patriotic Route', 'Event 1 - Independence Day Ride']},
            {month: 'Jul', rides: 3, cyclists: 150, events: ['Event 3 - Community Meet', 'Event 2 - Indoor Training', 'Event 1 - Monsoon Ride']},
            {month: 'Jun', rides: 4, cyclists: 200, events: ['Event 4 - Mid-Year Review', 'Event 3 - Safety Awareness', 'Event 2 - Monsoon Prep', 'Event 1 - World Environment Day']},
            {month: 'May', rides: 4, cyclists: 175, events: ['Event 4 - Youth Engagement', 'Event 3 - Lake Restoration', 'Event 2 - Mother\'s Day Special', 'Event 1 - May Day Ride']},
            {month: 'Apr', rides: 4, cyclists: 190, events: ['Event 4 - Fitness Challenge', 'Event 3 - Community Service', 'Event 2 - Summer Prep Ride', 'Event 1 - Earth Day Special']},
            {month: 'Mar', rides: 5, cyclists: 220, events: ['Event 5 - Month End Ride', 'Event 4 - Endurance Challenge', 'Event 3 - Tree Plantation', 'Event 2 - Women\'s Day Special', 'Event 1 - Spring Festival']},
            {month: 'Feb', rides: 4, cyclists: 165, events: ['Event 4 - Heritage Route', 'Event 3 - Lake Cleaning Drive', 'Event 2 - Health Awareness', 'Event 1 - Valentine Ride']},
            {month: 'Jan', rides: 4, cyclists: 180, events: ['Event 4 - Community Outreach Ride', 'Event 3 - Weekend Wellness Ride', 'Event 2 - Republic Day Preparation', 'Event 1 - New Year Kickoff Ride']}
        ],
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
    eventsContainer.innerHTML = data.events.map(event => {
        if (event === '17th Anniversary celebration' && year === '2025') {
            return `<div class="modal-event-item"><a href="https://drive.google.com/drive/folders/1G30nMM-8f7A0kyYcdw6-KDJsxLUGGiHv" target="_blank" style="color: var(--primary); text-decoration: none;">${event}</a></div>`;
        }
        return `<div class="modal-event-item">${event}</div>`;
    }).join('');
    
    // Add monthly data if available
    if (data.monthlyData) {
        const monthlySection = `<div class="modal-monthly-section">
            <h4>Monthly Breakdown:</h4>
            ${data.monthlyData.map((monthData, index) => `
                <div class="modal-month-item">
                    <div class="month-header" onclick="toggleMonthEvents(${index})">
                        <span>${monthData.month}: ${monthData.rides} rides, ${monthData.cyclists} cyclists</span>
                        <span class="expand-arrow" id="arrow-${index}">▶</span>
                    </div>
                    <div class="month-events collapsed" id="month-events-${index}">
                        ${monthData.events.map(event => `<div class="event-detail">${event}</div>`).join('')}
                    </div>
                </div>
            `).join('')}
        </div>`;
        eventsContainer.innerHTML += monthlySection;
    }
    
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

function openImageFullscreen(imageSrc) {
    document.getElementById('fullscreenImage').src = imageSrc;
    document.getElementById('imageModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    document.getElementById('imageModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('yearModal');
    const imageModal = document.getElementById('imageModal');
    
    if (event.target === modal) {
        closeYearModal();
    }
    
    if (event.target === imageModal) {
        closeImageModal();
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

// Monthly view toggle for timeline
function toggleMonthView(year) {
    const monthlyView = document.getElementById(`monthly-${year}`);
    
    if (monthlyView.classList.contains('collapsed')) {
        monthlyView.classList.remove('collapsed');
    } else {
        monthlyView.classList.add('collapsed');
    }
}

// Toggle month events in modal
function toggleMonthEvents(monthIndex) {
    const eventsDiv = document.getElementById(`month-events-${monthIndex}`);
    const arrow = document.getElementById(`arrow-${monthIndex}`);
    
    if (eventsDiv.classList.contains('collapsed')) {
        eventsDiv.classList.remove('collapsed');
        arrow.textContent = '▼';
    } else {
        eventsDiv.classList.add('collapsed');
        arrow.textContent = '▶';
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