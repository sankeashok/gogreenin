# GoGreenIn.org - Complete Website Suite

A comprehensive, modern website for Bangalore's premier cycling community (est. 2008) built with Material Design 3, featuring 17 years of environmental impact data and community engagement tools.

## 🌟 Features

### 🎨 Modern Design
- Material Design 3 principles with custom green theme
- Dynamic gradient backgrounds and glass morphism effects
- Dark/Light theme toggle with persistent storage
- Smooth animations and micro-interactions
- Mobile-first responsive design

### 📊 Data-Driven Content
- **17-year timeline** (2008-2025) with interactive modals
- **Statistics dashboard** with animated counters
- **Environmental impact metrics** (CO2 saved, trees planted, etc.)
- **Year-wise event data** with JSON structure
- **Real-time participant tracking**

### 🎯 Key Pages & Sections
- **Main Homepage** (`index.html`): Hero section, timeline, gallery
- **Events Timeline** (`events-timeline.html`): Detailed event history with filtering
- **Statistics Dashboard** (`statistics.html`): Comprehensive impact metrics
- **Interactive Gallery**: Filterable event photos and videos
- **Registration Integration**: Direct links to Google Forms
- **Social Media Integration**: YouTube videos, Facebook links

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, Gradients
- **JavaScript**: ES6+, Intersection Observer API, Smooth animations
- **Material Icons**: Google's icon system
- **Roboto Font**: Google's Material Design font

## 📁 File Structure

```
gogreenin/
├── index.html                    # Main homepage
├── events-timeline.html          # Detailed events page
├── statistics.html              # Impact statistics dashboard
├── styles-reimagined-v2.css     # Main stylesheet
├── script-reimagined-v2.js      # Interactive functionality
├── events-timeline-styles.css   # Timeline page styles
├── 
├── 2024/
│   └── events.json              # 2024 event data
├── 2023/
│   └── events.json              # 2023 event data
├── 2022/                        # Year-wise organization
├── 2025/
│   └── 17th Anniversary-2025 Year.jpg
├── 
├── GGI_logo.png                 # Community logo
├── GGI_Campaign2008.jpg         # Historical images
├── GGI_Campaign2023.png         # Recent campaign images
├── Summary-GoGreenIn.md         # Community summary
└── README.md                    # This file
```

## Color Scheme

- **Primary**: Green gradient (#1B5E20 to #4CAF50)
- **Secondary**: Orange gradient (#FF6F00 to #FFC107)
- **Background**: Clean whites and light grays
- **Accents**: Material Design color palette

## 🚀 Deployment Guide

### GoDaddy Hosting (Recommended)
1. **Login** to your GoDaddy hosting account
2. **File Manager**: Navigate to `public_html` folder
3. **Upload Files**: Upload all project files maintaining folder structure
4. **Set Default**: Ensure `index.html` is set as default page
5. **SSL Certificate**: Enable HTTPS for security
6. **Domain Configuration**: Point your domain to the hosting

### Essential Files to Upload:
```
✅ index.html (main page)
✅ events-timeline.html (events page)
✅ statistics.html (stats page)
✅ styles-reimagined-v2.css (main styles)
✅ script-reimagined-v2.js (functionality)
✅ All image files (GGI_logo.png, campaigns, etc.)
✅ Year folders (2022/, 2023/, 2024/, 2025/) with JSON data
```

### Alternative Hosting Options:
- **Netlify**: Drag & drop deployment with automatic HTTPS
- **Vercel**: Git-based deployment with preview URLs
- **GitHub Pages**: Free hosting for public repositories
- **Firebase Hosting**: Google's hosting with CDN

## Customization

### Colors
Edit CSS variables in `:root` section of `styles.css`:
```css
:root {
    --primary: #1B5E20;
    --secondary: #FF6F00;
    /* Add your custom colors */
}
```

### Content
- Update text content in `index.html`
- Replace placeholder images in gallery section
- Modify event details and dates
- Update contact information

### ✅ Recently Added Features
- **Events Timeline Page**: Comprehensive event history with filtering
- **Statistics Dashboard**: Environmental impact metrics and growth data
- **Year-wise Data Structure**: JSON-based event organization (2022-2025)
- **Interactive Modals**: Detailed year information with event lists
- **Enhanced Gallery**: Category-based filtering system
- **Registration Integration**: Direct Google Forms integration
- **Social Media Links**: YouTube videos and Facebook integration

### 🚀 Future Enhancements
- Real-time photo gallery with cloud storage
- Member portal with login system
- Newsletter signup with email automation
- Live social media feeds integration
- Blog section for community stories
- Mobile app development
- Advanced analytics dashboard
- Event check-in system with QR codes

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Tips

- Optimize images before adding to gallery
- Use WebP format for better compression
- Enable gzip compression on server
- Implement lazy loading for images

## 📞 Contact & Support

### Community Contact:
- **Email**: prabhakarrao.cm@gmail.com
- **Facebook**: [GoGreenIn Community](https://www.facebook.com/profile.php?id=100064416142595)
- **YouTube**: [GoGreenIn Channel](https://youtu.be/kojDjqbusYs)
- **Registration**: [Join Community](https://docs.google.com/forms/d/e/1FAIpQLSc-w0_2NGRsqiSUqDAiFzO2F6dtd7mAY1N-bXx02eR1WWbQ7g/viewform)

### Technical Support:
For website customization, bug reports, or feature requests, contact the development team.

### Contributing:
- Share event photos and videos
- Provide feedback on website functionality
- Suggest new features or improvements
- Help with content updates and translations

---

**Built with ❤️ for GoGreenIn.org community**  
*Pedaling towards a sustainable future since 2008*

### Project Stats:
- **17 years** of community impact
- **5000+** cyclists engaged
- **300+** events organized
- **50,000+** kilometers cycled
- **2500+** trees planted
- **15+** lakes cleaned