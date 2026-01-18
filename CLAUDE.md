# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Urban Catering - A catering business website for a company based in Nicosia, Cyprus. Next.js 14 application with TypeScript and Tailwind CSS.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display (headings), Raleway (body)
- **Carousel**: Embla Carousel

## Project Structure

```
app/
├── layout.tsx              # Root layout with Header/Footer
├── page.tsx                # Homepage
├── company-profile/        # About page
├── our-chefs/              # Chef profiles
├── contact/                # Contact form
├── services/
│   ├── [slug]/             # Dynamic service pages (11 services)
│   └── equipment-rentals/  # Equipment catalog (custom slideshow)
└── menu/
    ├── [slug]/             # Dynamic menu pages (3 menus)
    └── christmas/          # Christmas menu (card grid)

components/
├── layout/                 # Header, Footer
├── sections/               # HeroSection, CTASection, FeatureGrid, Testimonial
├── slideshow/              # MenuSlideshow, EquipmentSlideshow
└── pages/                  # ServicePageTemplate

lib/
├── constants/              # colors.ts, downloads.ts
└── data/                   # services.ts, menus.ts
```

## Brand Colors

```typescript
blue: '#0F4494'    // Primary (weddings, corporate)
teal: '#497173'    // Secondary
gold: '#D4AF37'    // Accent (equipment, christmas)
```

## External Assets

- **Images**: Hosted on ibb.co (configured in next.config.js)
- **PDFs**: Hosted on Google Drive
- **Logo**: `https://i.ibb.co/3ytjFrv/Whats-App-Image-2024-10-07-at-18-03-48.jpg`

## Adding New Services

1. Add service data to `lib/data/services.ts`
2. Service color to `lib/constants/colors.ts`
3. Page auto-generates via `app/services/[slug]/page.tsx`

## Reference Content

`old-website-pages/` contains HTML/CSS from the previous website used as reference.
