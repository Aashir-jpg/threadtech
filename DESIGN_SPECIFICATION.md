# ThreadTech Landing Page - Figma Design Specification

## 🎨 Design Overview

This document provides comprehensive specifications for creating the ThreadTech landing page in Figma. The design follows modern UI/UX principles with a focus on user experience, accessibility, and visual hierarchy.

## 📐 Layout Specifications

### Page Dimensions
- **Desktop**: 1440px width × 100vh height (minimum)
- **Tablet**: 768px width
- **Mobile**: 375px width
- **Container Max Width**: 1280px (with 80px side margins)

### Grid System
- **Desktop**: 12-column grid with 24px gutters
- **Tablet**: 8-column grid with 20px gutters  
- **Mobile**: 4-column grid with 16px gutters

## 🎨 Color Palette

### Primary Colors
- **Primary Indigo**: #6366F1
- **Primary Indigo Light**: #818CF8
- **Primary Indigo Dark**: #4F46E5
- **Primary Indigo 50**: #EEF2FF

### Secondary Colors
- **Secondary Purple**: #8B5CF6
- **Secondary Purple Light**: #A855F7
- **Secondary Purple Dark**: #7C3AED

### Accent Colors
- **Accent Amber**: #F59E0B
- **Accent Amber Light**: #FBBF24
- **Accent Amber Dark**: #D97706

### Neutral Colors
- **Text Primary**: #1F2937
- **Text Secondary**: #6B7280
- **Text Muted**: #9CA3AF
- **Background White**: #FFFFFF
- **Background Gray 50**: #F9FAFB
- **Background Gray 100**: #F3F4F6
- **Border Light**: #E5E7EB
- **Border Medium**: #D1D5DB

## 📝 Typography

### Font Family
- **Primary**: Inter (Google Fonts)
- **Fallback**: system-ui, -apple-system, sans-serif

### Font Sizes & Weights

#### Headlines
- **H1 (Hero)**: 48px/56px, Weight: 700, Color: #1F2937
- **H2 (Section)**: 36px/44px, Weight: 700, Color: #1F2937
- **H3 (Subsection)**: 24px/32px, Weight: 600, Color: #1F2937
- **H4 (Card Title)**: 20px/28px, Weight: 600, Color: #1F2937

#### Body Text
- **Large**: 20px/28px, Weight: 400, Color: #6B7280
- **Regular**: 16px/24px, Weight: 400, Color: #6B7280
- **Small**: 14px/20px, Weight: 400, Color: #6B7280
- **Caption**: 12px/16px, Weight: 400, Color: #9CA3AF

## 🧩 Component Specifications

### Header Component
- **Height**: 80px
- **Background**: #FFFFFF with 0px 1px 3px rgba(0, 0, 0, 0.1) shadow
- **Logo**: "ThreadTech" - 24px, Weight: 700, Color: #6366F1
- **Navigation Links**: 16px, Weight: 500, Color: #6B7280, Hover: #6366F1
- **CTA Buttons**: 
  - Primary: Background #6366F1, Text #FFFFFF, 16px, Weight: 500
  - Secondary: Border #6366F1, Text #6366F1, Background transparent

### Hero Section
- **Height**: 600px (desktop), 500px (mobile)
- **Background**: Linear gradient from #F8FAFC to #E2E8F0
- **Layout**: Two-column (60% text, 40% preview card)
- **Headline**: 48px/56px, Weight: 700, Color: #1F2937
- **Subheadline**: 20px/28px, Weight: 400, Color: #6B7280
- **CTA Buttons**: 
  - Primary: 18px, Weight: 500, Padding: 16px 32px
  - Secondary: 18px, Weight: 500, Padding: 16px 32px

### Feature Cards
- **Dimensions**: 320px × 280px
- **Background**: #FFFFFF
- **Border Radius**: 12px
- **Shadow**: 0px 4px 6px -1px rgba(0, 0, 0, 0.1)
- **Padding**: 32px
- **Icon Size**: 48px × 48px, Color: #6366F1
- **Title**: 20px/28px, Weight: 600, Color: #1F2937
- **Description**: 16px/24px, Weight: 400, Color: #6B7280

### Style Preview Cards
- **Dimensions**: 400px × 300px
- **Background**: #FFFFFF
- **Border Radius**: 16px
- **Shadow**: 0px 10px 15px -3px rgba(0, 0, 0, 0.1)
- **Padding**: 24px
- **Color Swatches**: 40px × 40px circles with 2px border
- **Badge Style**: 8px border radius, 12px padding, 14px font size

### Testimonial Cards
- **Dimensions**: 350px × 200px
- **Background**: #FFFFFF
- **Border Radius**: 12px
- **Shadow**: 0px 4px 6px -1px rgba(0, 0, 0, 0.1)
- **Padding**: 24px
- **Avatar**: 48px × 48px circle, Background: #EEF2FF
- **Star Rating**: 20px × 20px, Color: #F59E0B
- **Quote**: 16px/24px, Weight: 400, Color: #6B7280, Italic
- **Author**: 16px/24px, Weight: 600, Color: #1F2937

### CTA Section
- **Height**: 300px
- **Background**: Linear gradient #6366F1 to #8B5CF6
- **Text Color**: #FFFFFF
- **Headline**: 36px/44px, Weight: 700
- **Subheadline**: 20px/28px, Weight: 400
- **Buttons**: White background, colored text

### Footer
- **Height**: 400px
- **Background**: #1F2937
- **Text Color**: #FFFFFF
- **Link Color**: #9CA3AF, Hover: #FFFFFF
- **Logo**: 24px, Weight: 700, Color: #8B5CF6

## 🎭 Interactive States

### Buttons
- **Default**: As specified above
- **Hover**: 
  - Primary: Background darkens by 10%
  - Secondary: Background becomes #EEF2FF
  - Transform: translateY(-1px)
- **Active**: Background darkens by 20%
- **Focus**: 2px outline, Color: #6366F1, Offset: 2px

### Cards
- **Default**: As specified above
- **Hover**: 
  - Transform: translateY(-4px)
  - Shadow increases to 0px 20px 25px -5px rgba(0, 0, 0, 0.1)
- **Focus**: 2px outline, Color: #6366F1

### Links
- **Default**: As specified above
- **Hover**: Color changes to #6366F1
- **Active**: Color darkens by 20%

## 📱 Responsive Breakpoints

### Mobile (375px - 640px)
- Single column layout
- Reduced font sizes (H1: 36px, H2: 28px)
- Increased padding (24px)
- Stacked navigation
- Full-width cards

### Tablet (641px - 1024px)
- Two-column layout for features
- Medium font sizes
- 20px padding
- Collapsible navigation

### Desktop (1025px+)
- Full layout as specified
- All original dimensions
- Hover effects enabled

## 🎨 Visual Elements

### Icons
- **Library**: Lucide React icons
- **Size**: 24px (standard), 48px (large)
- **Color**: #6366F1 (primary), #6B7280 (secondary)
- **Style**: Outline style, 2px stroke

### Images
- **Hero Image**: Modern illustration, 400px × 300px
- **Avatar Images**: 48px × 48px circles
- **Background Images**: Subtle patterns or gradients

### Shadows
- **Light**: 0px 1px 3px rgba(0, 0, 0, 0.1)
- **Medium**: 0px 4px 6px -1px rgba(0, 0, 0, 0.1)
- **Heavy**: 0px 20px 25px -5px rgba(0, 0, 0, 0.1)

### Border Radius
- **Small**: 4px (buttons, small elements)
- **Medium**: 8px (badges, small cards)
- **Large**: 12px (cards, containers)
- **Extra Large**: 16px (hero preview card)

## 🎯 Accessibility Guidelines

### Color Contrast
- **Text on White**: Minimum 4.5:1 ratio
- **Text on Colored Backgrounds**: Minimum 4.5:1 ratio
- **Interactive Elements**: Minimum 3:1 ratio

### Focus States
- **Visible Focus**: 2px solid outline
- **Color**: #6366F1
- **Offset**: 2px from element

### Interactive Elements
- **Minimum Touch Target**: 44px × 44px
- **Hover States**: Clear visual feedback
- **Loading States**: Clear indication of processing

## 📋 Implementation Checklist

### Figma Setup
- [ ] Create 1440px × 100vh artboard
- [ ] Set up grid system (12 columns, 24px gutters)
- [ ] Import Inter font family
- [ ] Create color palette with all specified colors
- [ ] Set up text styles for all typography variants

### Components
- [ ] Header with navigation and CTAs
- [ ] Hero section with two-column layout
- [ ] Features section with three cards
- [ ] Style preferences preview section
- [ ] Testimonials section with three cards
- [ ] CTA section with gradient background
- [ ] Footer with links and social icons

### Responsive Design
- [ ] Create mobile artboard (375px)
- [ ] Create tablet artboard (768px)
- [ ] Adjust layouts for each breakpoint
- [ ] Test touch targets on mobile

### Interactive States
- [ ] Create hover states for all interactive elements
- [ ] Create focus states for accessibility
- [ ] Create active states for buttons
- [ ] Test color contrast ratios

### Assets
- [ ] Create or source hero illustration
- [ ] Create avatar placeholders
- [ ] Export icons in appropriate formats
- [ ] Optimize images for web

## 🚀 Next Steps

1. **Create Figma File**: Use this specification to build the design
2. **Review & Iterate**: Test with stakeholders and users
3. **Export Assets**: Extract images, icons, and color codes
4. **Handoff**: Provide specifications to development team
5. **Quality Assurance**: Test implementation against design

---

This specification ensures consistency between design and development while maintaining high standards for user experience and accessibility.
