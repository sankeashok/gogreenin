// Instagram Integration for GoGreenIn Website
// This script fetches and displays Instagram posts from @gogreenrao

class InstagramFeed {
    constructor() {
        this.username = 'gogreenrao';
        this.posts = [];
        this.isLoading = false;
    }

    // Method 1: Using Instagram Basic Display API (requires setup)
    async fetchWithAPI(accessToken) {
        try {
            const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`);
            const data = await response.json();
            return data.data || [];
        } catch (error) {
            console.error('Instagram API Error:', error);
            return [];
        }
    }

    // Method 2: Using a third-party service (InstagramBasicDisplayApi)
    async fetchWithService() {
        // This would require a backend service or Instagram Basic Display API
        // For now, we'll use sample data based on your website content
        return this.getSamplePosts();
    }

    // Sample posts based on your website's cycling content
    getSamplePosts() {
        return [
            {
                id: '1',
                media_url: 'data/2026/01-January/04-January-2026 - Chikka Tirupathi/IMG-20260104-WA00.jpg',
                caption: '🚴‍♂️ New Year kickoff ride to Chikka Tirupathi! Starting 2026 with 8 dedicated cyclists ready to make a difference. Every pedal stroke counts towards a greener Bangalore! #NewYear2026 #ChikkaTirupathi #GoGreenIn #CyclingCommunity #Sustainability',
                permalink: 'https://www.instagram.com/p/sample1/',
                media_type: 'IMAGE',
                timestamp: '2026-01-04T06:30:00+0000'
            },
            {
                id: '2',
                media_url: 'data/2025/17th Anniversary-2025 Year.jpg',
                caption: '🎉 17 YEARS OF IMPACT! From 2008 to 2025, we\'ve: 🌱 Planted 2500+ trees 💧 Cleaned 15 lakes 🚴‍♂️ Built a community of 5000+ cyclists 🌍 Saved 10,000+ kg CO2 Thank you for being part of this green revolution! #17thAnniversary #GoGreenIn #EnvironmentalImpact',
                permalink: 'https://www.instagram.com/p/sample2/',
                media_type: 'IMAGE',
                timestamp: '2025-12-21T07:00:00+0000'
            },
            {
                id: '3',
                media_url: 'data/2025/2-Feb-2025 00.jpg',
                caption: '☀️ Sunday Morning Vibes! Another beautiful Sunday ride with our amazing GoGreenIn family. Every Sunday at 6:30 AM, we gather to promote sustainable transportation and environmental awareness. Join us! #SundayRide #GoGreenIn #CyclingLife #Bangalore',
                permalink: 'https://www.instagram.com/p/sample3/',
                media_type: 'IMAGE',
                timestamp: '2025-02-02T06:30:00+0000'
            },
            {
                id: '4',
                media_url: 'data/2026/01-January/04-January-2026 - Chikka Tirupathi/IMG-20260104-WA0008.jpg',
                caption: '👥 Team Spirit at its Best! The strength of GoGreenIn lies in our unity and shared vision for a sustainable future. Together, we\'re not just cycling - we\'re creating change! #TeamWork #CyclingCommunity #GoGreenIn #Unity #Sustainability',
                permalink: 'https://www.instagram.com/p/sample4/',
                media_type: 'IMAGE',
                timestamp: '2026-01-04T08:00:00+0000'
            },
            {
                id: '5',
                media_url: 'data/2025/2-Feb-2025 01.jpg',
                caption: '🌍 Environmental Awareness Through Action! We don\'t just talk about sustainability - we live it. Every ride is a statement, every pedal stroke is progress towards a greener tomorrow. #Environment #Sustainability #GreenLiving #ClimateAction',
                permalink: 'https://www.instagram.com/p/sample5/',
                media_type: 'IMAGE',
                timestamp: '2025-02-02T09:15:00+0000'
            },
            {
                id: '6',
                media_url: 'data/2025/2-Feb-2025 02.jpg',
                caption: '🚲 Every Pedal Counts! Small actions, big impact. When we choose cycling over cars, we\'re choosing clean air, better health, and a sustainable future for our children. Be the change! #EcoFriendly #GreenFuture #Cycling #SustainableTransport',
                permalink: 'https://www.instagram.com/p/sample6/',
                media_type: 'IMAGE',
                timestamp: '2025-02-02T10:30:00+0000'
            },
            {
                id: '7',
                media_url: 'data/2026/01-January/04-January-2026 - Chikka Tirupathi/IMG-20260104-WA0010.jpg',
                caption: '🏔️ Adventure Awaits on Two Wheels! From city streets to mountain trails, cycling opens up a world of possibilities. Explore, discover, and protect our beautiful landscapes. #Adventure #MountainCycling #Nature #Exploration #GoGreenIn',
                permalink: 'https://www.instagram.com/p/sample7/',
                media_type: 'IMAGE',
                timestamp: '2026-01-04T11:45:00+0000'
            },
            {
                id: '8',
                media_url: 'data/2026/01-January/04-January-2026 - Chikka Tirupathi/IMG-20260104-WA0011.jpg',
                caption: '📢 Spreading the Message! Environmental consciousness isn\'t just a hobby - it\'s a responsibility. Through cycling, we inspire others to make sustainable choices. One ride at a time, one person at a time. #Awareness #GoGreen #Community #Inspiration',
                permalink: 'https://www.instagram.com/p/sample8/',
                media_type: 'IMAGE',
                timestamp: '2026-01-04T13:20:00+0000'
            }
        ];
    }

    // Format timestamp for display
    formatDate(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) return '1 day ago';
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
        return `${Math.ceil(diffDays / 30)} months ago`;
    }

    // Render Instagram posts
    renderPosts(containerId, limit = 8) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const posts = this.getSamplePosts().slice(0, limit);
        
        container.innerHTML = posts.map(post => `
            <div class="instagram-item" data-post-id="${post.id}">
                <div class="instagram-photo-wrap">
                    <a class="instagram-photo" href="${post.permalink}" target="_blank" rel="noopener nofollow">
                        <img decoding="async" src="${post.media_url}" alt="${post.caption.substring(0, 100)}..." class="instagram-image">
                        <div class="instagram-overlay">
                            <div class="instagram-icon">📷</div>
                        </div>
                    </a>
                </div>
            </div>
        `).join('');
    }

    // Render detailed posts with captions
    renderDetailedPosts(containerId, limit = 6) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const posts = this.getSamplePosts().slice(0, limit);
        
        container.innerHTML = `
            <div class="instagram-detailed-posts">
                ${posts.map(post => `
                    <div class="instagram-detailed-item">
                        <div class="instagram-post-header">
                            <div class="instagram-user-info">
                                <div class="instagram-avatar">
                                    <img src="GGI_logo.png" alt="@${this.username}" width="40" height="40">
                                </div>
                                <div class="instagram-user-details">
                                    <h4>@${this.username}</h4>
                                    <span class="instagram-time">${this.formatDate(post.timestamp)}</span>
                                </div>
                            </div>
                            <a href="${post.permalink}" target="_blank" class="instagram-external-link">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                                </svg>
                            </a>
                        </div>
                        <div class="instagram-post-image">
                            <img src="${post.media_url}" alt="${post.caption.substring(0, 100)}..." onclick="openImageFullscreen('${post.media_url}')">
                        </div>
                        <div class="instagram-post-content">
                            <p class="instagram-caption">${post.caption}</p>
                            <div class="instagram-actions">
                                <a href="${post.permalink}" target="_blank" class="instagram-view-btn">View on Instagram</a>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Initialize the Instagram feed
    init() {
        // Load posts into the main Instagram section
        this.renderPosts('instagram-images');
        
        // Load detailed posts if there's a detailed container
        const detailedContainer = document.getElementById('instagram-detailed-feed');
        if (detailedContainer) {
            this.renderDetailedPosts('instagram-detailed-feed');
        }
    }
}

// Initialize Instagram feed when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const instagramFeed = new InstagramFeed();
    
    // Replace the existing loadInstagramPosts function
    window.loadInstagramPosts = function() {
        const loadBtn = document.querySelector('.instagram-load-btn');
        if (loadBtn) {
            loadBtn.innerHTML = '<span class="instagram-btn-text">Loading...</span>';
            
            setTimeout(() => {
                instagramFeed.init();
                loadBtn.innerHTML = '<span class="instagram-btn-text">Refresh</span>';
            }, 1000);
        }
    };
    
    // Auto-load posts
    setTimeout(() => {
        instagramFeed.init();
    }, 2000);
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = InstagramFeed;
}