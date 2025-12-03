# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the marketing landing page for **My Job Trackr** (https://myjobtrackr.com) - a job application tracking and career productivity tool. The site is deployed as a static HTML/CSS/JavaScript landing page.

**Important Context**: This project was originally scaffolded as a Vite + React + TypeScript + shadcn/ui application (as evidenced by package.json and configuration files), but has since been converted to a vanilla HTML/CSS/JavaScript static site. The React/TypeScript source files have been removed. The package.json and build tooling remain for potential future use, but are not currently active.

**Current State**: The active landing page consists of:
- `index.html` - Main marketing page with SEO optimization
- `styles.css` - Custom CSS styling (not Tailwind, despite config presence)
- `script.js` - Vanilla JavaScript for smooth scrolling and animations
- `public/` - Static assets (images, favicon, robots.txt)

**External App**: The actual Job Trackr application is hosted separately at `app.myjobtrackr.com` (links to `/login` and `/register` endpoints).

## Development Commands

### Active Development
```bash
# Run development server (if using Vite)
npm run dev

# Preview production build
npm run preview

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Run linter
npm run lint
```

**Note**: Since the current site is static HTML/CSS/JS, you can also simply open `index.html` in a browser or use any static file server.

## Project Architecture

### Technology Stack (Current)
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Fonts**: Inter from Google Fonts
- **Analytics**: Hotjar tracking (hjid: 6451888)
- **Build Tools**: Vite (configured but not actively used)

### Technology Stack (Configured but Unused)
- React 18 + TypeScript
- shadcn/ui components (all deleted from src/)
- Tailwind CSS (configured but not used; custom CSS is used instead)
- React Router, React Hook Form, Zod, TanStack Query
- Radix UI primitives

### File Structure

```
/
├── index.html          # Main landing page (SEO optimized)
├── styles.css          # Custom CSS (responsive design)
├── script.js           # Smooth scroll, animations, event handlers
├── public/
│   ├── img/
│   │   ├── app/        # App screenshots (dashboard, table, create, search)
│   │   └── favicon/    # Favicon variants and manifest
│   ├── robots.txt      # Search engine directives
│   └── favicon.ico
├── package.json        # Legacy from React setup
├── vite.config.ts      # Vite config (@ alias to ./src)
├── tailwind.config.ts  # Tailwind config (not actively used)
├── components.json     # shadcn/ui config (not actively used)
└── tsconfig.json       # TypeScript config (not actively used)
```

### Key Features Implemented

1. **SEO Optimization**
   - Comprehensive meta tags (Open Graph, Twitter Cards)
   - Structured data (JSON-LD) for SoftwareApplication
   - Semantic HTML with proper heading hierarchy
   - Alt text on images with SEO keywords
   - Canonical URL set to https://myjobtrackr.com/

2. **Responsive Design**
   - Mobile-first CSS with breakpoints at 640px, 768px, 1024px
   - Sticky navigation with blur backdrop
   - Responsive grid layouts
   - Mobile navigation hides text links on small screens

3. **Interactive Elements**
   - Smooth scrolling to anchor sections (#features, #pricing)
   - Intersection Observer for section fade-in animations
   - Scroll-based navigation background opacity
   - Button click handlers (console logs for tracking)

4. **Content Sections**
   - Hero with CTA buttons
   - App screenshots gallery (4 images)
   - Features grid (3 cards)
   - Pricing comparison (Free vs Pro)
   - Benefits section with demo card
   - Platform availability (Web + Mobile coming soon)
   - CTA section
   - Footer with links

### External Links

All CTAs and navigation buttons link to:
- **Register**: `https://app.myjobtrackr.com/register`
- **Login**: `https://app.myjobtrackr.com/login`

Links open in new tab with `target="_blank"`.

### Path Aliases

If reverting to React/TypeScript:
- `@/` maps to `./src/`
- Configured in both `vite.config.ts` and `tsconfig.json`
- shadcn/ui aliases: `@/components`, `@/lib/utils`, `@/hooks`, etc.

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements
- Maintain accessibility (alt text, ARIA labels where needed)
- Keep SEO keywords in titles, descriptions, and image alt text
- Follow existing class naming conventions (BEM-like)

### CSS
- Custom CSS using utility-first naming (similar to Tailwind)
- Colors: Blue primary (#2563eb), Slate grays, Green accents
- Consistent spacing scale (0.5rem, 1rem, 1.5rem, 2rem, etc.)
- Mobile-first responsive design
- Use CSS custom properties for theme colors (if adding)

### JavaScript
- Vanilla ES6+ (no frameworks in current implementation)
- Event delegation where appropriate
- Console logging for debugging (can be removed for production)
- Intersection Observer for scroll animations
- Smooth scrolling via `scrollIntoView` API

## Important Notes

1. **Git Status**: There are many deleted files in staging (src/ directory and all component files). These were removed when converting from React to static HTML. The git status shows ~60 deleted files - this is expected.

2. **Hotjar Integration**: Analytics tracking is live with ID 6451888. Do not modify or remove unless instructed.

3. **Brand Assets**:
   - Logo: `public/img/my-job-trackr-logo-colour.png` (1.4 MB)
   - Favicon set is complete in `public/img/favicon/`
   - App screenshots in `public/img/app/`

4. **Domain**: Site is configured for `myjobtrackr.com` (see CNAME file and canonical URLs).

5. **Build Mode**: The project has both `build` and `build:dev` scripts. Use `build:dev` if you need development mode features with Vite.

## Development Workflow

When making changes:

1. **For Static Site Changes**: Edit HTML/CSS/JS directly and test in browser
2. **For React Migration**: Would need to recreate src/ directory structure
3. **For SEO Updates**: Update meta tags in `index.html` head section
4. **For Content Changes**: Update HTML directly in relevant sections
5. **For Styling**: Modify `styles.css` (Tailwind is not compiled)

## Common Tasks

### Update App Screenshots
Replace images in `public/img/app/` and update alt text in `index.html` for SEO.

### Change Pricing
Edit the pricing section in `index.html` (search for `pricing-section`).

### Add New Features
Add feature cards in the `features-grid` section with consistent icon/title/description structure.

### Modify Analytics
Update Hotjar script in `index.html` head section (currently lines 78-90).
