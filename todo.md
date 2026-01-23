# DrainCheck NG - Development Plan

## Design Guidelines

### Design References
- Modern community platform design
- Youth-friendly, approachable aesthetic
- Clean, professional with environmental theme
- Mobile-first responsive design

### Color Palette
- Primary Green: #27AE60 (environmental theme, Nigerian flag green)
- Secondary Blue: #3498DB (water, hope, youth energy)
- Accent Orange: #F39C12 (urgency, call-to-action)
- Dark Gray: #2C3E50 (text)
- Light Gray: #ECF0F1 (backgrounds)
- White: #FFFFFF (cards, sections)
- Dark Background: #1a1a1a (footer)

### Typography
- Headings: Poppins (Google Fonts) - bold, modern
- Body text: Open Sans (Google Fonts) - clean, readable
- Font weights: 400 (regular), 600 (semi-bold), 700 (bold)
- Minimum body font size: 16px

### Key Component Styles
- **Buttons**: Primary (green #27AE60), Secondary (blue #3498DB), padding 12px 30px, border-radius 25px, hover lift effect
- **Cards**: White background, border-radius 15px, box-shadow: 0 4px 6px rgba(0,0,0,0.1), hover lift animation
- **Icons**: Font Awesome 6.4.0, 3x size in circular backgrounds
- **Animations**: Fade-in (0.8s), stagger delays (0.2s), hover transforms (0.3s)

### Layout & Spacing
- Section padding: 80px vertical (desktop), 60px (mobile)
- Container max-width: 1140px
- Card gaps: 30px
- Responsive breakpoints: Mobile (<768px), Tablet (768-991px), Desktop (≥992px)

### Images to Generate
1. **hero-lagos-urban-drainage.jpg** - Lagos urban scene with drainage systems, dark gradient overlay ready, photorealistic, dramatic lighting
2. **icon-report-camera.png** - Camera icon for report step, circular green-blue gradient background, modern flat design
3. **icon-track-map.png** - Map/location icon for tracking step, circular gradient background, modern flat design
4. **icon-act-hands.png** - Helping hands icon for action step, circular gradient background, modern flat design
5. **profile-chidera.jpg** - Professional youth portrait photo, circular frame ready, natural lighting, approachable expression
6. **sdg-icons-composite.png** - SDG 6, 11, 13 icons arranged horizontally, official UN SDG colors, transparent background

---

## Development Tasks

### 1. Project Setup & Structure
- Set up file structure (css/, js/, images/ folders)
- Import Bootstrap 5.3 CDN
- Import Font Awesome 6.4.0 CDN
- Import Google Fonts (Poppins, Open Sans)
- Create base CSS with custom properties for color palette

### 2. Generate All Images
- Use ImageCreator.generate_images to create all 6 images following design guidelines
- Save to images/ folder with descriptive filenames

### 3. Shared Components (Navbar & Footer)
- Create sticky navbar with logo, menu items, mobile hamburger
- Create footer with 3 columns (Quick Links, Contact, Branding)
- Add smooth scroll behavior and active page highlighting

### 4. Home Page (index.html)
- Hero section with full viewport height, background image, animated content
- How It Works section with 3 cards (Report, Track, Act)
- Why It Matters section with stats and explanation
- Add fade-in animations and hover effects

### 5. Report Issue Page (report.html)
- Page heading and instructions
- Embedded Google Form iframe with placeholder
- "What Happens Next?" section with checkmarks
- Link to map page

### 6. Live Map Page (map.html)
- Page heading and map instructions
- Embedded Google My Maps iframe with placeholder
- Map legend with color coding
- Recent Reports section with sample data cards
- Statistics box with totals

### 7. About Page (about.html)
- Hero section with profile photo and introduction
- "Why I Built DrainCheck NG" story section
- Mission statement section
- "How You Can Help" cards
- SDG Alignment section with icons
- Contact section with email, phone, Instagram

### 8. JavaScript Functionality
- Mobile menu toggle
- Smooth scrolling for anchor links
- Scroll-triggered fade-in animations
- Active navbar highlighting

### 9. Responsive Design & Testing
- Test all breakpoints (mobile, tablet, desktop)
- Ensure mobile-first approach
- Verify all animations work smoothly
- Check accessibility (semantic HTML, ARIA labels, color contrast)

### 10. Final Polish
- Add detailed code comments for beginners
- Optimize CSS organization
- Test all internal links
- Run lint check
- Verify all placeholder instructions are clear