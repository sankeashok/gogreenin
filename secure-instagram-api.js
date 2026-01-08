// Secure Instagram API Integration with Encrypted Token
// This file safely handles Instagram API calls with encrypted tokens

class SecureInstagramAPI {
    constructor() {
        // Encrypted Instagram token (replace with your encrypted token)
        this.encryptedToken = 'YOUR_ENCRYPTED_TOKEN_HERE';
        this.encryption = new TokenEncryption();
        this.cache = {
            posts: null,
            timestamp: 0,
            duration: 10 * 60 * 1000 // 10 minutes cache
        };
    }

    // Get decrypted token
    getToken() {
        return this.encryption.decrypt(this.encryptedToken);
    }

    // Check if cache is valid
    isCacheValid() {
        return this.cache.posts && (Date.now() - this.cache.timestamp) < this.cache.duration;
    }

    // Fetch posts from Instagram API
    async fetchPosts(limit = 12) {
        // Return cached data if valid
        if (this.isCacheValid()) {
            return this.cache.posts.slice(0, limit);
        }

        const token = this.getToken();
        if (!token) {
            console.warn('Instagram token not available, using sample data');
            return this.getSamplePosts(limit);
        }

        try {
            const response = await fetch(
                `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=${limit}&access_token=${token}`
            );

            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }

            const data = await response.json();
            
            // Cache the results
            this.cache.posts = data.data || [];
            this.cache.timestamp = Date.now();
            
            return this.cache.posts;
        } catch (error) {
            console.error('Instagram API Error:', error);
            // Fallback to sample data
            return this.getSamplePosts(limit);
        }
    }

    // Sample posts fallback
    getSamplePosts(limit = 12) {
        const samplePosts = [
            {
                id: '1',
                media_url: 'data/2026/01-January/04-January-2026 - Chikka Tirupathi/IMG-20260104-WA00.jpg',
                caption: '🚴♂️ New Year kickoff ride to Chikka Tirupathi! Starting 2026 with 8 dedicated cyclists. #NewYear2026 #ChikkaTirupathi #GoGreenIn',
                permalink: 'https://www.instagram.com/p/sample1/',
                media_type: 'IMAGE',
                timestamp: '2026-01-04T06:30:00+0000'
            },
            {
                id: '2',
                media_url: 'data/2025/17th Anniversary-2025 Year.jpg',
                caption: '🎉 17 YEARS OF IMPACT! 🌱 2500+ trees 💧 15 lakes 🚴♂️ 5000+ cyclists #17thAnniversary #GoGreenIn',
                permalink: 'https://www.instagram.com/p/sample2/',
                media_type: 'IMAGE',
                timestamp: '2025-12-21T07:00:00+0000'
            },
            {
                id: '3',
                media_url: 'data/2025/2-Feb-2025 00.jpg',
                caption: '☀️ Sunday Morning Vibes! Every Sunday at 6:30 AM #SundayRide #GoGreenIn #Bangalore',
                permalink: 'https://www.instagram.com/p/sample3/',
                media_type: 'IMAGE',
                timestamp: '2025-02-02T06:30:00+0000'
            },
            {
                id: '4',
                media_url: 'data/2026/01-January/04-January-2026 - Chikka Tirupathi/IMG-20260104-WA0008.jpg',
                caption: '👥 Team Spirit! Unity and shared vision for sustainability #TeamWork #CyclingCommunity',
                permalink: 'https://www.instagram.com/p/sample4/',
                media_type: 'IMAGE',
                timestamp: '2026-01-04T08:00:00+0000'
            },
            {
                id: '5',
                media_url: 'data/2025/2-Feb-2025 01.jpg',
                caption: '🌍 Environmental Awareness Through Action! #Environment #Sustainability #ClimateAction',
                permalink: 'https://www.instagram.com/p/sample5/',
                media_type: 'IMAGE',
                timestamp: '2025-02-02T09:15:00+0000'
            },
            {
                id: '6',
                media_url: 'data/2025/2-Feb-2025 02.jpg',
                caption: '🚲 Every Pedal Counts! Choose cycling for clean air #EcoFriendly #GreenFuture',
                permalink: 'https://www.instagram.com/p/sample6/',
                media_type: 'IMAGE',
                timestamp: '2025-02-02T10:30:00+0000'
            }
        ];
        
        return samplePosts.slice(0, limit);
    }

    // Format timestamp
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

    // Render posts to container
    async renderPosts(containerId, limit = 8) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Show loading
        container.innerHTML = '<div class="instagram-loading"><div class="instagram-spinner"></div></div>';

        try {
            const posts = await this.fetchPosts(limit);
            
            container.innerHTML = posts.map(post => `
                <div class="instagram-item" data-post-id="${post.id}">
                    <div class="instagram-photo-wrap">
                        <a class="instagram-photo" href="${post.permalink}" target="_blank" rel="noopener nofollow">
                            <img decoding="async" src="${post.media_url}" alt="${(post.caption || '').substring(0, 100)}..." class="instagram-image">
                            <div class="instagram-overlay">
                                <div class="instagram-icon">📷</div>
                            </div>
                        </a>
                    </div>
                </div>
            `).join('');
        } catch (error) {
            console.error('Error rendering posts:', error);
            container.innerHTML = '<p>Unable to load Instagram posts</p>';
        }
    }

    // Render detailed posts
    async renderDetailedPosts(containerId, limit = 6) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '<div class="instagram-loading"><div class="instagram-spinner"></div></div>';

        try {
            const posts = await this.fetchPosts(limit);
            
            container.innerHTML = `
                <div class="instagram-detailed-posts">
                    ${posts.map(post => `
                        <div class="instagram-detailed-item">
                            <div class="instagram-post-header">
                                <div class="instagram-user-info">
                                    <div class="instagram-avatar">
                                        <img src="GGI_logo.png" alt="@gogreenrao" width="40" height="40">
                                    </div>
                                    <div class="instagram-user-details">
                                        <h4>@gogreenrao</h4>
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
                                <img src="${post.media_url}" alt="${(post.caption || '').substring(0, 100)}..." onclick="openImageFullscreen('${post.media_url}')">
                            </div>
                            <div class="instagram-post-content">
                                <p class="instagram-caption">${post.caption || ''}</p>
                                <div class="instagram-actions">
                                    <a href="${post.permalink}" target="_blank" class="instagram-view-btn">View on Instagram</a>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } catch (error) {
            console.error('Error rendering detailed posts:', error);
            container.innerHTML = '<p>Unable to load Instagram posts</p>';
        }
    }
}

// Initialize secure Instagram API
const secureInstagramAPI = new SecureInstagramAPI();

// Update existing functions
window.loadInstagramPosts = async function() {
    const loadBtn = document.querySelector('.instagram-load-btn');
    if (loadBtn) {
        loadBtn.innerHTML = '<span class="instagram-btn-text">Loading...</span>';
        
        await secureInstagramAPI.renderPosts('instagram-images');
        loadBtn.innerHTML = '<span class="instagram-btn-text">Refresh</span>';
    }
};

// Auto-load posts when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(async () => {
        await secureInstagramAPI.renderPosts('instagram-images');
        
        const detailedContainer = document.getElementById('instagram-detailed-feed');
        if (detailedContainer) {
            await secureInstagramAPI.renderDetailedPosts('instagram-detailed-feed');
        }
    }, 2000);
});