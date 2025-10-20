# Siddharth Santhosh — Personal Website

A modern, accessible personal portfolio website featuring a neumorphic design system. Built with vanilla HTML, CSS, and JavaScript with no build process required.

## About

This website showcases the academic achievements, projects, and experiences of Siddharth Santhosh, a Year 9 Academic Scholar at St John's College, Cardiff. The site features detailed sections about education, experience, leadership activities, and flagship projects including Terragy and STEM.3.

### Key Features

- **Neumorphic Design**: Soft, tactile UI with dual light/dark shadows
- **Single Page Application**: Smooth hash-based routing with deep-linkable sections
- **Solo View Mode**: Individual sections can be viewed in isolation (`#section?view=solo`)
- **Fully Responsive**: Mobile-first design with touch-friendly interactions
- **Accessibility First**: WCAG compliant with keyboard navigation and screen reader support
- **Performance Optimized**: No build process, minimal dependencies, fast loading

## Project Structure

```
personal-website/
├── index.html          # Main HTML structure
├── styles.css          # Neumorphic design system and responsive styles
├── script.js           # Navigation, animations, and interactions
└── README.md           # This documentation
```

## Getting Started

### Running Locally

1. Clone or download the project files
2. Open `index.html` directly in any modern web browser
3. No build process or server required!

### For Development

For live reloading during development, you can use a simple HTTP server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Design System

### Neumorphic Principles

- **Background**: Soft light gray (`#e0e0e0`) as the base material
- **Shadows**: Dual light/dark shadows create depth and tactile feel
- **No Borders**: Elements appear carved from the same material
- **Subtle Interactions**: Pressed states use inset shadows
- **Monochromatic**: Consistent color palette with accent blue (`#4d628a`)

### CSS Variables

```css
:root {
  /* Colors */
  --bg: #e0e0e0;
  --text: #303030;
  --text-muted: #5a5a5a;
  --accent: #4d628a;
  
  /* Spacing */
  --radius: 16px;
  --pad: 24px;
  --gap: 16px;
  
  /* Shadows */
  --shadow-lg: 12px 12px 24px rgba(0,0,0,0.12), -12px -12px 24px rgba(255,255,255,0.85);
  --shadow-sm: 6px 6px 12px rgba(0,0,0,0.10), -6px -6px 12px rgba(255,255,255,0.90);
  --shadow-inset: inset 6px 6px 12px rgba(0,0,0,0.12), inset -6px -6px 12px rgba(255,255,255,0.95);
}
```

## Navigation & Routing

### Hash-based Routing

The website uses hash-based routing for smooth navigation:

- `#home` - Hero section
- `#education` - Academic background
- `#experience` - Professional experience
- `#leadership` - Leadership activities
- `#terragy` - Detailed Terragy project page
- `#stem3` - Detailed STEM.3 initiative page
- `#awards` - Awards and honors
- `#skills` - Skills and interests
- `#contact` - Contact information

### Solo View Mode

Append `?view=solo` to any section URL to view it in isolation:
- `#terragy?view=solo` - Show only Terragy section
- `#stem3?view=solo` - Show only STEM.3 section

This creates a page-like experience while maintaining the single-file structure.

## Content Sections

### Hero Section
Personal introduction with contact actions

### Education
Academic background at St John's College Cardiff

### Experience
- F1 in Schools (Lead Engineer, Project Manager)
- AeroFlux/Terragy (Founder)
- Sports Camp (Lead Volunteer)
- Cardiff Junior Triathlon (Member)

### Leadership & Activities
- School Council (Head Year Representative)
- St John's Ambulance (Volunteer & Educator)
- Terragy (Founder)
- STEM.3 (Founder)

### Featured Projects

#### Terragy
Innovative wind turbine concept for airports, addressing aviation's environmental impact through renewable energy generation.

#### STEM.3
Educational initiative making STEM more accessible and engaging for underprivileged students in Wales.

### Awards & Honours
- TeenTech Awards (Gold)
- CREST Gold Award (British Science Association)
- F1 in Schools Best Portfolio UK

## Customization

### Updating Content

1. **Personal Information**: Edit the hero section in `index.html`
2. **Sections**: Modify content within each `<section>` element
3. **Contact Details**: Update email and LinkedIn URLs throughout
4. **Projects**: Customize Terragy and STEM.3 sections with your own projects

### Styling Changes

1. **Colors**: Modify CSS variables in `:root` within `styles.css`
2. **Spacing**: Adjust `--pad` and `--gap` variables
3. **Shadows**: Customize shadow values for different neumorphic effects
4. **Typography**: Change font family in the body selector

### Adding New Sections

1. Add new `<section id="new-section">` to HTML
2. Add navigation link to `.nav-links`
3. Section will automatically work with routing and animations

## Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **ARIA Labels**: Navigation and interactive elements properly labeled
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators and logical tab order
- **Screen Reader Support**: Descriptive text and proper markup
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **Color Contrast**: WCAG AA compliant contrast ratios

## Performance

- **No Dependencies**: Pure HTML, CSS, and JavaScript
- **Optimized Assets**: Minimal and efficient code
- **Font Loading**: Optimized Google Fonts loading
- **Lazy Loading**: Intersection Observer for animations
- **Minimal JavaScript**: Essential functionality only

## Browser Compatibility

Supported browsers:
- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+

Key features used:
- CSS Custom Properties
- CSS Grid and Flexbox
- Intersection Observer API
- ES6+ JavaScript features

## Deployment

### GitHub Pages

1. Create a new repository named `personal-website`
2. Upload all files to the repository
3. Go to Settings → Pages
4. Set source to "Deploy from a branch"
5. Select `main` branch and `/ (root)` folder
6. Your site will be available at `username.github.io/personal-website`

### Other Hosting Options

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **Surge.sh**: `npm install -g surge && surge`
- **Any Web Server**: Upload files to any hosting provider

## Future Enhancements

### Planned Features
- [ ] Dark mode toggle
- [ ] Downloadable PDF resume
- [ ] Project image gallery
- [ ] Contact form with EmailJS
- [ ] Progressive Web App features
- [ ] Enhanced animations
- [ ] Blog section
- [ ] Multi-language support

### Performance Optimizations
- [ ] Image lazy loading
- [ ] Service worker for offline support
- [ ] CSS and JS minification
- [ ] Asset compression

## Contributing

While this is a personal website, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly across devices
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Siddharth Santhosh**
- Email: [siddharthsanthoscr7@gmail.com](mailto:siddharthsanthoscr7@gmail.com)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/siddharth-santhosh-574500359/)
- Location: Cardiff, Wales

---

*Built with passion for innovation and education. No frameworks, just clean code and thoughtful design.*