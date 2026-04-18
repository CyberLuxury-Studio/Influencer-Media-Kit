# Prototype Generation Prompt

Please use the following prompt to generate the initial prototype front page from scratch.

---

**System Role:** You are an expert Next.js (App Router), Tailwind CSS, and Framer Motion developer specializing in high-end, cyberpunk/neo-cyber aesthetic landing pages.

**Task:** Generate the complete, production-ready code for a single-page "Influencer Media Kit" based on the provided design system and component architecture.

**Tech Stack:** Next.js (App Router), Tailwind CSS, Framer Motion, `@splinetool/react-spline`, TypeScript, `lucide-react` (for icons).

**Design System & Theme (Neo-Cyber):**
- **Colors:**
  - Background: `#050505` (Deep space black)
  - Surface: `rgba(255, 255, 255, 0.03)` (Glassmorphic panels)
  - Primary: `#00F0FF` (Cyan neon glow)
  - Secondary: `#FF003C` (Cyberpunk magenta/red accent)
  - Text Primary: `#EAEAEA`
  - Text Muted: `#888888`
- **Typography:** Space Grotesk (Headings), Inter or Geist Mono (Body/Stats). Use `next/font/google`.
- **Aesthetic:** Dark mode only. Sharp but slightly rounded corners (`rounded-2xl`). Heavy use of glassmorphism (`backdrop-blur-md`, subtle white borders `border-white/10`).
- **Hover Effects:** Elements should have a subtle, dynamic neon glow when hovered.

**Required Sections & Components:**

1. **Global Layout (`app/layout.tsx` & `app/page.tsx`):**
   - Set up the fonts and dark background.
   - The main page should be a seamless, scrolling single-page experience.

2. **Hero Section (`Hero` Component):**
   - **Layout:** 100vh, flex/grid split layout.
   - **Left side:** Staggered fade-up text (Framer Motion) displaying the influencer's handle (e.g., "@NeoCyberStreamer"), a tagline ("Digital Creator / Tech Streamer"), and a `NeonButton` component ("Collaborate").
   - **Right side / Background:** Embed a placeholder Spline 3D scene using `@splinetool/react-spline`. *Use this generic Spline URL for testing: `https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode`*. Wrap it in a `next/dynamic` import for lazy loading.

3. **Social Stats Bento Grid (`SocialStats` Component):**
   - **Layout:** CSS Grid bento layout (`grid-cols-1 md:grid-cols-3 lg:grid-cols-4`).
   - **Content:** Create an array of mock data for Twitch, YouTube, Twitter, and Instagram (followers, engagement rate, average viewers).
   - **Components:** Create a reusable `BentoCard` component that takes `title`, `value`, `icon` (from `lucide-react`), and `trend` (+X%).
   - **Animations:** Use Framer Motion for `whileInView` scroll reveals (cards fading/sliding up) and a `whileHover` scale effect. Add a subtle cyan/magenta gradient border that appears on hover.

4. **Content Showcase (`ContentShowcase` Component):**
   - **Layout:** A horizontal scrolling section (`overflow-x-auto snap-x`) displaying recent work.
   - **Content:** 3-4 placeholder cards for "Recent YouTube Videos" or "Brand Deals". Use colored divs or placeholder image URLs for thumbnails.

5. **Footer / CTA (`Footer` Component):**
   - **Layout:** Centered, padding top/bottom.
   - **Content:** A final call to action ("Ready to upgrade your campaign?"), an email link, and social icons.

**Constraints & Guidelines:**
- Write **all** the necessary code in a single comprehensive output, separated by file paths (e.g., `// src/app/page.tsx`, `// src/components/ui/bento-card.tsx`).
- Ensure all components are fully responsive (mobile-first Tailwind).
- Use `"use client"` directives only where necessary (e.g., components with Framer Motion or Spline).
- Do not omit the `tailwind.config.ts` setup—provide the exact configuration needed for the custom colors and animations.

**Begin generation now.**