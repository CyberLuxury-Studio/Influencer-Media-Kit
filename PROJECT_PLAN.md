# Cyberpunk Influencer Media Kit - Next.js 16.2.4 Architecture & UI/UX Plan

## 1. Project Structure (Next.js App Router Convention)
```text
/
├── public/
│   ├── fonts/               # Custom cyber/sans-serif fonts
│   ├── images/              # Optimized static assets/placeholders
│   └── spline/              # Spline fallbacks or exported assets
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout, global providers, font injection
│   │   ├── page.tsx         # Main entry point for the single page
│   │   └── globals.css      # Tailwind base and global CSS variables
│   ├── components/
│   │   ├── ui/              # Reusable base components (buttons, cards, badges)
│   │   │   ├── bento-card.tsx
│   │   │   ├── neon-button.tsx
│   │   │   └── glass-panel.tsx
│   │   ├── sections/        # Major page blocks
│   │   │   ├── hero.tsx
│   │   │   ├── social-stats.tsx
│   │   │   ├── content-showcase.tsx
│   │   │   └── footer.tsx
│   │   ├── 3d/              # Spline related components
│   │   │   └── spline-hero-scene.tsx
│   │   └── animations/      # Framer motion wrapper components
│   │       ├── fade-in.tsx
│   │       └── scroll-reveal.tsx
│   ├── data/                # Mocked JSON data
│   │   └── media-kit-data.ts# Profile info, stats, portfolio items
│   ├── hooks/               # Custom hooks
│   │   └── use-mouse-position.ts # For dynamic glowing hover effects
│   ├── lib/                 # Utilities
│   │   └── utils.ts         # Tailwind class merging (clsx + tailwind-merge)
│   └── types/               # TypeScript definitions
│       └── index.ts         # Types for the mocked JSON data
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 2. Section-by-Section Breakdown

**A. Hero Section**
*   **Layout:** Full viewport height (100vh). Split layout: Left column contains typography and CTA, right column (or background) holds the 3D Spline scene.
*   **Content:** Influencer's handle, a dynamic tag-line (e.g., "Digital Creator / Tech Streamer"), and primary "Collaborate" neon button.
*   **Animations:** Staggered fade-up for text elements.
*   **Spline Usage:** Abstract glowing geometry embedded seamlessly.
*   **Tailwind:** `h-screen flex items-center relative overflow-hidden bg-background`.

**B. Social Stats (Bento Grid)**
*   **Layout:** A CSS Grid/Tailwind Grid bento layout. Large hero tiles for primary platforms (Twitch/YouTube), smaller tiles for secondary platforms.
*   **Content:** Follower counts, engagement rates, monthly views.
*   **Animations:** Hover effects that intensify the glassmorphism and neon border glow. Scroll-reveal variants triggering as the grid enters the viewport.
*   **Tailwind:** `grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4`. Cards use `bg-white/5 backdrop-blur-md border border-white/10`.

**C. Content Showcase / Recent Work**
*   **Layout:** Horizontal scrolling or a masonry layout for recent videos, streams, or brand deals.
*   **Content:** Video thumbnails, brand logos, brief descriptions.
*   **Animations:** Framer Motion horizontal drag or scroll-linked progress bar.
*   **Tailwind:** Custom scrollbar utilities, `overflow-x-auto snap-x snap-mandatory`.

**D. Footer / Contact CTA**
*   **Layout:** Centered content box.
*   **Content:** "Ready to upgrade your campaign?" Business email, social links.
*   **Animations:** Floating effect on social icons.
*   **Tailwind:** `py-20 text-center border-t border-primary/20`.

## 3. Design System (Modern Neo-Cyber)

*   **Color Palette:**
    *   `background`: `#050505` (Deep space black)
    *   `surface`: `rgba(255, 255, 255, 0.03)` (Glassmorphic dark panels)
    *   `primary`: `#00F0FF` (Cyan neon glow)
    *   `secondary`: `#FF003C` (Cyberpunk magenta/red accent)
    *   `text-primary`: `#EAEAEA` (Off-white for readability)
    *   `text-muted`: `#888888`
*   **Typography:**
    *   Headings: A sleek sans-serif like *Space Grotesk* or *Syncopate*.
    *   Body: *Inter* or *Geist Mono* for tabular numbers (stats).
*   **Spacing & Radii:**
    *   Border Radii: Sharp but slightly rounded `rounded-2xl` for bento grids to maintain modern sleekness.
    *   Gaps: Generous spacing `gap-4` or `gap-6` in the grid.
*   **Reusable Components:**
    *   `BentoCard`: The base for all grid items (glass background, hover glow).
    *   `NeonButton`: Buttons with drop-shadow glows and gradient borders.
    *   `GlowingText`: Text utility for accentuating numbers.

## 4. Animation Plan (Framer Motion)

*   **Variants:**
    *   `itemReveal`: `{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }`
    *   `bentoHover`: `{ hover: { scale: 1.02, transition: { duration: 0.2, ease: "easeOut" } } }`
*   **Scroll Triggered:** Use `whileInView` with `viewport={{ once: true, amount: 0.2 }}` for sections.
*   **Dynamic Mouse Glow:** A global mouse move listener passing `x` and `y` coordinates to CSS variables, illuminating the borders of Bento cards dynamically as the cursor moves over them.

## 5. Spline Integration Plan

*   **Scene Setup:** Create an abstract glowing geometry in Spline (e.g., twisting toruses or glass spheres). Use emissive materials set to match the primary/secondary hex codes. Set the Spline background to transparent.
*   **Embedding:** Use `@splinetool/react-spline`.
*   **Performance:**
    *   Load via `next/dynamic` to avoid blocking initial page paint.
    *   Provide a highly compressed `.webp` or `.mp4` fallback behind the Spline canvas that displays while the 3D model loads, instantly giving the user visual feedback.
    *   Disable physics/heavy post-processing in Spline if not strictly necessary for the aesthetic.

## 6. Component Architecture

*   `SplineHeroScene`: `Props: { sceneUrl: string, fallbackImg: string }`. Renders the 3D canvas and handles the loading state.
*   `BentoGrid`: `Props: { items: StatItem[] }`. Maps over data and renders `BentoCard`s.
*   `BentoCard`: `Props: { title: string, value: string, icon: ReactNode, trend: string, colSpan?: number }`. Handles individual card layout and hover states.
*   `NeonButton`: `Props: { children: ReactNode, href?: string, onClick?: () => void, variant?: 'primary' | 'outline' }`.

## 7. Performance Strategy

*   **Images:** Utilize `next/image` with proper `sizes` attributes for all thumbnails and fallbacks.
*   **Fonts:** Use `next/font/google` for zero layout shift and optimized loading.
*   **Code Splitting:** React Server Components (RSC) where possible. Client components (`"use client"`) isolated to the interactive elements (`SplineHeroScene`, Framer Motion wrappers).
*   **Spline:** As mentioned, lazy load the Spline component and use a placeholder.

## 8. UI8 Packaging Checklist (Code Only)

*   [ ] **Clean Up:** Remove all `console.log`s, unused imports, and `.env.local` files.
*   [ ] **Documentation:** Create a comprehensive `README.md` explaining:
    *   How to run `npm install` and `npm run dev`.
    *   Where to edit the mocked JSON data (`/src/data/media-kit-data.ts`).
    *   How to update the Spline URL to their own custom scene.
    *   How to tweak Tailwind colors to re-theme the kit.
*   [ ] **Mock Data Verification:** Ensure `/src/data/media-kit-data.ts` contains realistic, easily editable fields.
*   [ ] **Dependencies:** Audit `package.json` to ensure versions are strict (e.g., `16.2.4` and no caret `^` for Next.js to guarantee stability for buyers).
*   [ ] **Archiving:** Zip the directory, explicitly excluding `node_modules` and `.next` build folders to keep the file size minimal.
