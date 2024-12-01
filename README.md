# Cyberpunk Portfolio Website 🌐

A matrix-themed personal portfolio showcasing my full-stack development and cybersecurity skills through an immersive, interactive web experience.

https://chiragpkumar.netlify.app/

## 🚀 Features

- **Matrix-Inspired Boot Sequence**
  - Dynamic typewriter effect
  - System initialization animation
  - Interactive key press transition

- **Cyberpunk UI/UX**
  - Terminal-style interface
  - Matrix rain animation
  - Glitch effects
  - Neon glow aesthetics
  - Responsive design

- **Interactive Sections**
  - Professional profile with social links
  - Skills visualization with animated bars
  - Project showcase with GitHub links
  - Contact form with cyberpunk styling

## 🎮 Theme Overview

The portfolio features a comprehensive cyberpunk/matrix theme that creates an immersive experience:

### 🖥️ Visual Elements

1. **Matrix Rain Effect**
   - Dynamic green matrix code rain in the background
   - Customizable character set and speed
   - Responsive to screen size and device performance

2. **Terminal Interface**
   - Authentic terminal window styling
   - Command-line inspired interactions
   - Blinking cursor effects
   - System boot sequence animations

3. **Cyberpunk Aesthetics**
   - Neon glow effects
   - Glitch animations
   - Scan line overlays
   - Digital distortion effects
   - Holographic elements

### 🎨 Color Scheme

```css
:root {
  --primary-color: #0f0;         /* Matrix Green */
  --primary-dark: #0a0;          /* Darker Green */
  --primary-light: #3f3;         /* Lighter Green */
  --bg-dark: #000;               /* Deep Black */
  --bg-light: #111;              /* Light Black */
  --accent-color: #f0f;          /* Neon Pink */
  --text-color: #fff;            /* White Text */
  --terminal-green: #00ff00;     /* Terminal Text */
  --cyber-blue: #0ff;            /* Cyber Blue */
}
```

### 🔤 Typography

- **Main Font**: 'Source Code Pro' - For terminal-style text
- **Accent Font**: 'Rubik Glitch' - For cyberpunk headings
- **Fallback**: monospace - For consistent terminal look

### 💫 Animations

1. **Boot Sequence**
   ```javascript
   // Initialization animation
   const bootSequence = [
     "INITIALIZING_SYSTEM...",
     "LOADING_MODULES...",
     "ESTABLISHING_CONNECTION...",
     "ACCESS_GRANTED"
   ];
   ```

2. **Glitch Effect**
   ```css
   .glitch {
     animation: glitch 1s infinite;
     text-shadow: 2px 0 #0ff, -2px 0 #f0f;
   }
   ```

3. **Matrix Rain**
   - Custom character set
   - Randomized speed and opacity
   - Performance-optimized

## 🚀 Running the Portfolio

### Prerequisites

1. **Web Server**
   - Python (3.x recommended)
   - Node.js (optional)
   - Any static file server

2. **Modern Browser**
   - Chrome (recommended)
   - Firefox
   - Safari
   - Edge

### Local Development

1. **Using Python**
   ```bash
   # Navigate to portfolio directory
   cd "path/to/portfolio"

   # Python 3.x
   python -m http.server 8000

   # Python 2.x
   python -m SimpleHTTPServer 8000
   ```

2. **Using Node.js**
   ```bash
   # Install serve globally
   npm install -g serve

   # Run server
   serve -s .
   ```

3. **Using VS Code**
   - Install "Live Server" extension
   - Right-click index.html
   - Select "Open with Live Server"

4. **Using XAMPP**
   - Copy portfolio to htdocs folder
   - Start Apache server
   - Visit localhost/portfolio

### Production Deployment

1. **GitHub Pages**
   ```bash
   # Create gh-pages branch
   git checkout -b gh-pages
   git push origin gh-pages
   ```

2. **Netlify**
   - Connect to GitHub repository
   - Set build command: none required
   - Set publish directory: root

3. **Vercel**
   - Import from GitHub
   - Auto-detects static site
   - Deploys automatically

### Performance Optimization

1. **Matrix Rain Effect**
   ```javascript
   // Adjust performance settings
   const PERFORMANCE_MODE = {
     LIGHT: {
       maxChars: 50,
       updateInterval: 50
     },
     MEDIUM: {
       maxChars: 100,
       updateInterval: 33
     },
     HIGH: {
       maxChars: 200,
       updateInterval: 16
     }
   };
   ```

2. **Animation Settings**
   ```javascript
   // Control animation intensity
   const ANIMATION_SETTINGS = {
     glitchIntensity: 0.5,    // 0 to 1
     rainSpeed: 1.0,          // Default speed
     particleDensity: 0.7     // 0 to 1
   };
   ```

### Troubleshooting

1. **Slow Performance**
   - Reduce matrix rain density
   - Disable heavy animations
   - Check browser console for errors

2. **Display Issues**
   - Clear browser cache
   - Update graphics drivers
   - Check CSS compatibility

3. **Loading Errors**
   - Verify file paths
   - Check CORS settings
   - Ensure proper server configuration

## 🛠️ Customization

### Theme Modification

1. **Colors**
   ```css
   /* In styles.css */
   :root {
     --primary-color: #your-color;
     --background-color: #your-bg;
   }
   ```

2. **Animations**
   ```javascript
   // In script.js
   const CONFIG = {
     enableGlitch: true,
     enableRain: true,
     enableParticles: true
   };
   ```

3. **Content**
   - Edit index.html for structure
   - Modify text and links
   - Update project cards

### Adding Features

1. **New Sections**
   ```html
   <section id="new-section" class="cyber-section">
     <div class="terminal-window">
       <!-- Your content -->
     </div>
   </section>
   ```

2. **Custom Effects**
   ```javascript
   function addCustomEffect() {
     // Your effect code
   }
   ```

## 🛠️ Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript
- No external frameworks

### Dependencies
- Google Fonts (Source Code Pro, Rubik Glitch)
- Font Awesome Icons

## 🎨 Design Features

### Color Palette
- Primary: Matrix Green (#0f0)
- Background: Dark variants
- Accents: Neon effects

### Typography
- Primary: Source Code Pro (Terminal aesthetic)
- Accent: Rubik Glitch (Cyberpunk style)

### Animations
- Matrix rain effect
- Glitch text animations
- Smooth hover transitions
- Loading sequences

## 📱 Responsive Design
- Mobile-first approach
- Adaptive layouts
- Preserved aesthetics across devices

## 🔧 Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Open with a live server:
   - Using Python:
     ```bash
     python -m http.server 8000
     ```
   - Using Node:
     ```bash
     npx serve
     ```

4. Visit `http://localhost:8000` in your browser

## 🌟 Sections

### 1. Boot Sequence
- Matrix-themed initialization
- Interactive startup sequence

### 2. Home
- Professional introduction
- Social media links
- Call-to-action buttons

### 3. About
- Professional background
- Core competencies
- Terminal-style presentation

### 4. Skills
- Technical proficiencies
- Animated skill bars
- Categorized expertise

### 5. Projects
- Featured work
- GitHub links
- Tech stack tags

### 6. Contact
- Interactive contact form
- Social media links
- Professional email

## 💻 Browser Support

- Chrome (recommended for best experience)
- Firefox
- Safari
- Edge

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contact

Chirag P Kumar
- GitHub: [github.com/Chiragpkumar](https://github.com/Chiragpkumar)
- LinkedIn: [linkedin.com/in/chiragpkumar](https://linkedin.com/in/chiragpkumar)
- Email: chiragpkumar@gmail.com
