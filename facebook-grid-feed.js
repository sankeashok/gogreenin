// Facebook Grid Feed JavaScript

class FacebookGridFeed {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.options = {
            postsToShow: options.postsToShow || 8,
            autoLoad: options.autoLoad || true,
            showLoadMore: options.showLoadMore || true,
            ...options
        };
        this.posts = [];
        this.currentIndex = 0;
        this.isLoading = false;
        
        this.init();
    }
    
    init() {
        if (!this.container) {
            console.error('Facebook Grid container not found');
            return;
        }
        
        this.createGridStructure();
        
        if (this.options.autoLoad) {
            this.loadSamplePosts();
        }
    }
    
    createGridStructure() {
        this.container.innerHTML = `
            <div class="facebook-grid-header-info">
                <a class="facebook-grid-header-link" target="_blank" rel="nofollow noopener" href="https://www.facebook.com/GoGreenIn.org/" title="GoGreenIn">
                    <div class="facebook-grid-header-icon">
                        <svg class="facebook-grid-logo" aria-hidden="true" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </div>
                    <div class="facebook-grid-header-username">
                        <h3>GoGreenIn</h3>
                        <p style="font-size: 12px; color: #666; margin: 5px 0 0 0;">🚴♂️ Follow our cycling community & environmental initiatives</p>
                    </div>
                </a>
                <a href="https://www.facebook.com/GoGreenIn.org/" target="_blank" class="facebook-grid-follow-btn">
                    <svg class="facebook-grid-follow-icon" aria-hidden="true" viewBox="0 0 24 24" width="16" height="16">
                        <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Follow
                </a>
            </div>
            <div class="facebook-grid-posts" id="facebook-grid-posts"></div>
            <div class="facebook-grid-load-more" id="facebook-grid-load-more" style="display: none;">
                <button class="facebook-grid-load-btn" onclick="facebookGrid.loadMorePosts()">
                    <span class="facebook-grid-btn-text">Load More Posts</span>
                </button>
                <a href="https://www.facebook.com/GoGreenIn.org/" target="_blank" class="facebook-grid-follow-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Follow on Facebook
                </a>
            </div>
        `;
    }
    
    loadSamplePosts() {
        // Sample Facebook posts data - replace with actual Facebook API data
        const samplePosts = [
            {
                id: '1',
                type: 'photo',
                image: 'data/2026/01-January/04-January-2026 - Chikka Tirupathi/IMG-20260104-WA00.jpg',
                text: 'New Year Kickoff Ride to Chikka Tirupathi! 🚴♂️ Starting 2026 with our cycling community. #NewYear #ChikkaTirupathi #GoGreenIn',
                likes: 45,
                comments: 12,
                shares: 8,
                link: 'https://www.facebook.com/GoGreenIn.org/'
            },
            {
                id: '2',
                type: 'photo',
                image: 'data/2025/17th Anniversary-2025 Year.jpg',
                text: '17 Years of Environmental Impact! 🌱 Celebrating our journey of making Bangalore greener through cycling. #17thAnniversary #GoGreenIn',
                likes: 89,
                comments: 23,
                shares: 15,
                link: 'https://www.facebook.com/GoGreenIn.org/'
            },
            {
                id: '3',
                type: 'photo',
                image: 'data/2025/2-Feb-2025 00.jpg',
                text: 'Sunday Morning Ride with our amazing cycling community! 🌅 Every pedal counts towards a sustainable future. #SundayRide #Cycling',
                likes: 67,
                comments: 18,
                shares: 11,
                link: 'https://www.facebook.com/GoGreenIn.org/'
            },
            {
                id: '4',
                type: 'text',
                text: 'Join us every Sunday at 6:30 AM for our community rides! 🚴♂️ Together we can make Bangalore greener, one pedal at a time. New cyclists welcome! 🌱 #CyclingCommunity #GoGreenIn #SustainableTransport',
                likes: 34,
                comments: 9,
                shares: 6,
                link: 'https://www.facebook.com/GoGreenIn.org/'
            },
            {
                id: '5',
                type: 'photo',
                image: 'data/2025/2-Feb-2025 01.jpg',
                text: 'Environmental awareness through cycling! 🌍 Our mission is to promote sustainable transportation and create environmental consciousness.',
                likes: 52,
                comments: 14,
                shares: 9,
                link: 'https://www.facebook.com/GoGreenIn.org/'
            },
            {
                id: '6',
                type: 'photo',
                image: 'data/2026/01-January/04-January-2026 - Chikka Tirupathi/IMG-20260104-WA0008.jpg',
                text: 'Team spirit at its best! 💪 Our cycling community continues to grow stronger with each ride. #TeamWork #CyclingCommunity',
                likes: 41,
                comments: 11,
                shares: 7,
                link: 'https://www.facebook.com/GoGreenIn.org/'
            },
            {
                id: '7',
                type: 'video',
                image: 'data/2025/2-Feb-2025 02.jpg',
                text: 'Watch our latest cycling adventure! 🎥 Experience the thrill of group cycling and environmental advocacy. #CyclingVideo #Adventure',
                likes: 78,
                comments: 21,
                shares: 13,
                link: 'https://www.facebook.com/GoGreenIn.org/'
            },
            {
                id: '8',
                type: 'photo',
                image: 'data/2026/01-January/04-January-2026 - Chikka Tirupathi/IMG-20260104-WA0010.jpg',
                text: 'Adventure awaits on two wheels! 🏔️ Exploring beautiful routes while promoting environmental consciousness.',
                likes: 63,
                comments: 16,
                shares: 10,
                link: 'https://www.facebook.com/GoGreenIn.org/'
            },
            {
                id: '9',
                type: 'text',
                text: '🌱 Did you know? Cycling just 10km instead of driving can save approximately 2.6kg of CO2 emissions! Join our movement for a greener Bangalore. Every ride makes a difference! 🚴♂️ #EnvironmentalImpact #SustainableLiving #GoGreenIn',
                likes: 95,
                comments: 28,
                shares: 22,
                link: 'https://www.facebook.com/GoGreenIn.org/'
            },
            {
                id: '10',
                type: 'photo',
                image: 'GGI_Campaign2023.png',
                text: '15 Years of Making a Difference! 🎉 From a small group to 5000+ cyclists, our journey continues. #15thAnniversary #CyclingRevolution',
                likes: 156,
                comments: 42,
                shares: 31,
                link: 'https://www.facebook.com/GoGreenIn.org/'
            },
            {
                id: '11',
                type: 'photo',
                image: 'data/2026/01-January/04-January-2026 - Chikka Tirupathi/IMG-20260104-WA0011.jpg',
                text: 'Spreading environmental awareness one ride at a time! 📢 Join us in creating a sustainable future for Bangalore.',
                likes: 38,
                comments: 8,
                shares: 5,
                link: 'https://www.facebook.com/GoGreenIn.org/'
            },
            {
                id: '12',
                type: 'text',
                text: '🚴♂️ UPCOMING RIDE ALERT! 🚴♂️\n\nJoin us for our 17th Anniversary Ride on December 21, 2025!\n📅 Date: December 21, 2025\n⏰ Time: 6:30 AM\n📍 Meeting Point: TBD\n\nRegister now and be part of our cycling revolution! #17thAnniversary #CyclingEvent #GoGreenIn',
                likes: 127,
                comments: 35,
                shares: 28,
                link: 'https://www.facebook.com/GoGreenIn.org/'
            }
        ];
        
        this.posts = samplePosts;
        this.renderPosts();
    }
    
    renderPosts() {
        const postsContainer = document.getElementById('facebook-grid-posts');
        const loadMoreContainer = document.getElementById('facebook-grid-load-more');
        
        if (!postsContainer) return;
        
        // Show loading state
        if (this.currentIndex === 0) {
            postsContainer.innerHTML = '<div class="facebook-grid-loading"><div class="facebook-grid-spinner"></div></div>';
        }
        
        setTimeout(() => {
            const postsToShow = this.posts.slice(this.currentIndex, this.currentIndex + this.options.postsToShow);
            
            if (this.currentIndex === 0) {
                postsContainer.innerHTML = '';
            }
            
            postsToShow.forEach(post => {
                const postElement = this.createPostElement(post);
                postsContainer.appendChild(postElement);
            });
            
            this.currentIndex += postsToShow.length;
            
            // Show/hide load more button
            if (this.options.showLoadMore && this.currentIndex < this.posts.length) {
                loadMoreContainer.style.display = 'flex';
            } else {
                loadMoreContainer.style.display = 'none';
            }
            
            this.isLoading = false;
        }, 1000);
    }
    
    createPostElement(post) {
        const postDiv = document.createElement('div');
        postDiv.className = 'facebook-grid-item';
        postDiv.onclick = () => window.open(post.link, '_blank');
        
        if (post.type === 'text') {
            postDiv.classList.add('facebook-grid-text-post');
            postDiv.innerHTML = `
                <div class="facebook-grid-text">${this.truncateText(post.text, 100)}</div>
                <div class="facebook-grid-meta">
                    <div class="facebook-grid-stat">
                        <span>👍</span>
                        <span>${post.likes}</span>
                    </div>
                    <div class="facebook-grid-stat">
                        <span>💬</span>
                        <span>${post.comments}</span>
                    </div>
                </div>
            `;
        } else if (post.type === 'video') {
            postDiv.classList.add('facebook-grid-video-post');
            postDiv.innerHTML = `
                <div class="facebook-grid-photo">
                    <img class="facebook-grid-image" src="${post.image}" alt="${this.truncateText(post.text, 50)}" loading="lazy">
                    <div class="facebook-grid-video-icon">▶</div>
                    <div class="facebook-grid-overlay">
                        <div class="facebook-grid-icon">🎥</div>
                        <div class="facebook-grid-text">${this.truncateText(post.text, 80)}</div>
                    </div>
                    <div class="facebook-grid-meta">
                        <div class="facebook-grid-stat">
                            <span>👍</span>
                            <span>${post.likes}</span>
                        </div>
                        <div class="facebook-grid-stat">
                            <span>💬</span>
                            <span>${post.comments}</span>
                        </div>
                    </div>
                </div>
            `;
        } else {
            postDiv.innerHTML = `
                <div class="facebook-grid-photo">
                    <img class="facebook-grid-image" src="${post.image}" alt="${this.truncateText(post.text, 50)}" loading="lazy">
                    <div class="facebook-grid-overlay">
                        <div class="facebook-grid-icon">📷</div>
                        <div class="facebook-grid-text">${this.truncateText(post.text, 80)}</div>
                    </div>
                    <div class="facebook-grid-meta">
                        <div class="facebook-grid-stat">
                            <span>👍</span>
                            <span>${post.likes}</span>
                        </div>
                        <div class="facebook-grid-stat">
                            <span>💬</span>
                            <span>${post.comments}</span>
                        </div>
                    </div>
                </div>
            `;
        }
        
        return postDiv;
    }
    
    loadMorePosts() {
        if (this.isLoading || this.currentIndex >= this.posts.length) return;
        
        this.isLoading = true;
        const loadBtn = document.querySelector('.facebook-grid-load-btn .facebook-grid-btn-text');
        if (loadBtn) {
            loadBtn.textContent = 'Loading...';
        }
        
        setTimeout(() => {
            this.renderPosts();
            if (loadBtn) {
                loadBtn.textContent = 'Load More Posts';
            }
        }, 1000);
    }
    
    truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }
    
    // Method to refresh posts (useful for real API integration)
    refresh() {
        this.currentIndex = 0;
        this.loadSamplePosts();
    }
    
    // Method to add new posts (useful for real-time updates)
    addPosts(newPosts) {
        this.posts = [...newPosts, ...this.posts];
        this.refresh();
    }
}

// Initialize Facebook Grid Feed
let facebookGrid;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Facebook Grid Feed
    facebookGrid = new FacebookGridFeed('facebook-grid-feed', {
        postsToShow: 8,
        autoLoad: true,
        showLoadMore: true
    });
});

// Function to handle Facebook API integration (for future use)
function loadFacebookPosts() {
    // This function can be extended to integrate with Facebook Graph API
    // For now, it uses sample data
    console.log('Loading Facebook posts...');
    
    // Example of how to integrate with Facebook API:
    /*
    FB.api('/GoGreenIn.org/posts', 'GET', {
        fields: 'id,message,full_picture,created_time,likes.summary(true),comments.summary(true),shares',
        limit: 20
    }, function(response) {
        if (response && response.data) {
            const posts = response.data.map(post => ({
                id: post.id,
                type: post.full_picture ? 'photo' : 'text',
                image: post.full_picture || '',
                text: post.message || '',
                likes: post.likes ? post.likes.summary.total_count : 0,
                comments: post.comments ? post.comments.summary.total_count : 0,
                shares: post.shares ? post.shares.count : 0,
                link: `https://www.facebook.com/${post.id}`
            }));
            
            facebookGrid.addPosts(posts);
        }
    });
    */
}

// Auto-refresh posts every 5 minutes (optional)
setInterval(() => {
    if (facebookGrid && document.visibilityState === 'visible') {
        // Uncomment to enable auto-refresh
        // facebookGrid.refresh();
    }
}, 300000); // 5 minutes