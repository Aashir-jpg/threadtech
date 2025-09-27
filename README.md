# ThreadTech Landing Page

A modern, responsive landing page for ThreadTech - an AI-powered style recommendation platform. This landing page features a clean design with smooth animations, responsive layout, and interactive components.

## 🎨 Design Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Fully responsive across all device sizes
- **Interactive Components**: Hover effects, smooth transitions, and engaging animations
- **Accessibility**: Focus states, proper contrast, and keyboard navigation
- **Performance Optimized**: Fast loading with optimized assets

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd threadtech
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🛠️ Built With

- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Custom CSS** - Additional styling and animations

## 📱 Features

### Landing Page Sections

1. **Header**
   - Sticky navigation with smooth scrolling
   - Mobile-responsive hamburger menu
   - Call-to-action buttons

2. **Hero Section**
   - Compelling headline and subheadline
   - Interactive style preferences preview
   - Primary and secondary CTA buttons

3. **Features Section**
   - Three-column feature grid
   - Icon-based feature cards
   - Hover animations

4. **Style Preferences Preview**
   - Color palette demonstrations
   - Style personality showcase
   - Interactive elements preview

5. **Testimonials**
   - Customer testimonials with ratings
   - Avatar and role information
   - Responsive grid layout

6. **Call-to-Action Section**
   - Prominent CTA with gradient background
   - Multiple action buttons
   - Engaging copy

7. **Footer**
   - Comprehensive site links
   - Social media icons
   - Company information

### Design System

- **Colors**: Indigo primary (#6366F1), Purple secondary (#8B5CF6), Amber accent (#F59E0B)
- **Typography**: Inter font family with proper hierarchy
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Animations**: Smooth transitions and hover effects
- **Shadows**: Layered shadow system for depth

## 🎯 Key Components

- `LandingPage.tsx` - Main landing page component
- `App.tsx` - Root application component
- `index.css` - Global styles and Tailwind imports
- `App.css` - Additional custom styles

## 📱 Responsive Breakpoints

- **Mobile**: 375px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px - 1440px
- **Large Desktop**: 1441px+

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color palette
  }
}
```

### Typography
Modify font families in the same config file:

```javascript
fontFamily: {
  sans: ['Your-Font', 'system-ui', 'sans-serif'],
}
```

### Animations
Custom animations can be added to the `@keyframes` section in `index.css`.

## 🚀 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

This creates a `build` folder with optimized production files.

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project
2. Drag and drop the `build` folder to Netlify
3. Configure redirects if needed

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email support@threadtech.com or join our Discord community.

---

Built with ❤️ by the ThreadTech team
