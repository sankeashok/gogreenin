# GoGreenIn Website Content Management Guide

## 📝 Overview
This guide helps community members and administrators update website content without technical expertise.

## 🔄 Regular Updates Needed

### 1. **Adding New Events**

#### For Upcoming Events:
1. **Edit** `index.html`
2. **Find** the events gallery section
3. **Add** new event card:
```html
<div class="event-item" data-category="EVENT_TYPE">
    <div class="event-card">
        <div class="event-icon">🎉</div>
        <h4>Event Name</h4>
        <p>Event Date</p>
        <a href="REGISTRATION_LINK" class="event-link">Register Now</a>
    </div>
</div>
```

#### For Past Events:
1. **Create/Update** year folder (e.g., `2025/events.json`)
2. **Add** event data:
```json
{
  "id": "event-id",
  "title": "Event Name",
  "date": "2025-01-26",
  "category": "national-events",
  "description": "Event description",
  "participants": 300,
  "distance": "20km",
  "photos": ["photo1.jpg"],
  "videos": ["youtube-link"]
}
```

### 2. **Updating Statistics**

#### Main Statistics (index.html):
- Find `data-target` attributes in stat numbers
- Update values: `<span class="number" data-target="NEW_NUMBER">0</span>`

#### Statistics Dashboard (statistics.html):
- Update `data-target` values in stat cards
- Modify year-wise metrics in year cards

### 3. **Adding Photos/Videos**

#### Photos:
1. **Upload** images to project folder
2. **Update** event JSON files with photo names
3. **Add** to gallery sections in HTML

#### YouTube Videos:
1. **Get** YouTube video ID from URL
2. **Update** video sections with new thumbnail and ID
3. **Test** video playback functionality

## 📊 Content Types & Locations

### Event Categories:
- `anniversary` - Annual celebration rides
- `sunday-rides` - Weekly community rides  
- `national-events` - Republic/Independence Day
- `endurance` - Long-distance challenges
- `environmental` - Tree planting, lake cleaning

### File Locations:
```
📁 Content Files:
├── index.html (main page content)
├── events-timeline.html (detailed events)
├── statistics.html (impact metrics)
├── 2024/events.json (2024 event data)
├── 2023/events.json (2023 event data)
└── images/ (photos and graphics)
```

## 🎨 Design Guidelines

### Colors (CSS Variables):
- Primary Green: `#00ff88`
- Secondary Orange: `#ff6b35`
- Dark Background: `#0a0a0a`
- Light Text: `#ffffff`

### Image Specifications:
- **Event Photos**: 1200x800px, JPG/PNG
- **Campaign Images**: 1920x1080px, JPG/PNG
- **Logo**: 200x200px, PNG with transparency
- **Thumbnails**: 400x300px, JPG

## 🔗 Important Links to Update

### Registration Forms:
- Community Join: `https://docs.google.com/forms/d/e/1FAIpQLSc-w0_2NGRsqiSUqDAiFzO2F6dtd7mAY1N-bXx02eR1WWbQ7g/viewform`
- Anniversary Ride: `https://forms.gle/xBr4Ppko3zwNsc2eA`

### Social Media:
- Facebook: `https://www.facebook.com/profile.php?id=100064416142595`
- YouTube: `https://youtu.be/kojDjqbusYs`
- Email: `prabhakarrao.cm@gmail.com`

## 📱 Mobile Responsiveness

### Testing Checklist:
- [ ] Navigation works on mobile
- [ ] Images scale properly
- [ ] Text is readable
- [ ] Buttons are touch-friendly
- [ ] Forms work on mobile devices

## 🚀 Publishing Updates

### Local Testing:
1. **Open** `index.html` in browser
2. **Test** all links and functionality
3. **Check** mobile view (browser dev tools)
4. **Verify** all images load correctly

### Upload to Server:
1. **Login** to hosting account (GoDaddy/Netlify)
2. **Upload** modified files
3. **Test** live website
4. **Clear** browser cache if needed

## 📞 Support Contacts

### Technical Issues:
- Website bugs or broken functionality
- Mobile responsiveness problems
- Performance optimization

### Content Updates:
- Event information changes
- Photo/video additions
- Statistics updates
- New page requests

### Community Management:
- **Primary**: prabhakarrao.cm@gmail.com
- **Facebook**: GoGreenIn Community Page
- **WhatsApp**: Community group admins

## 📋 Monthly Maintenance Checklist

### Content Review:
- [ ] Update upcoming events
- [ ] Add recent event photos
- [ ] Update participation statistics
- [ ] Check all external links
- [ ] Review and update contact information

### Technical Maintenance:
- [ ] Test website speed
- [ ] Check mobile compatibility
- [ ] Verify form submissions
- [ ] Update browser compatibility
- [ ] Backup website files

## 🎯 Quick Reference

### Common Tasks:
1. **New Event**: Add to events.json + update HTML
2. **Update Stats**: Modify data-target values
3. **Add Photos**: Upload + update JSON/HTML
4. **Change Links**: Find and replace URLs
5. **Update Text**: Edit HTML content directly

### Emergency Contacts:
- **Website Down**: Contact hosting provider
- **Form Issues**: Check Google Forms settings
- **Email Problems**: Verify email configuration
- **Social Media**: Contact platform support

---

*Last Updated: February 2025*  
*For technical support: Contact development team*