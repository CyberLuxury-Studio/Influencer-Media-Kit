# Kinetic Archive - Cyberpunk Influencer Media Kit

Welcome to **Kinetic Archive**, a premium, production-ready Next.js template designed for digital creators, tech streamers, and influencers who want to present their brand as a high-frequency digital entity.

This kit was built using **Next.js 16.2.4 (App Router)**, **Tailwind CSS v4**, **Framer Motion**, and **Spline 3D**.

## Features

- **Neo-Cyber Aesthetic:** Deep space blacks, cyan/magenta neon glows, and glassmorphic panels.
- **Dynamic Interactions:** Custom mouse-tracking glow effects on bento cards, powered by Framer Motion.
- **Live Telemetry Bento Grid:** A highly responsive grid layout for showcasing followers, engagement, and sub-stats.
- **3D Hero Integration:** A dedicated space in the hero section for embedding abstract 3D models via Spline.
- **Fully Typed:** Built with strict TypeScript.
- **Mock Data Ready:** All content is driven by a single, easily editable JSON/TS file.

## Setup & Installation

To get started with the kit locally:

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run the Development Server:**
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization Guide

### 1. Editing the Content (Mock Data)
All the text, numbers, portfolio items, and profile information are stored in a single file to make updating the kit incredibly easy.
- Navigate to `src/data/media-kit-data.ts`.
- Edit the `MediaKitData` object to replace the placeholder data with your own live stats and links.

### 2. Updating the Spline 3D Scene
The Hero section currently uses an abstract glowing placeholder. To replace this with your own 3D asset:
- Create or export a scene from [Spline](https://spline.design/).
- Get the React/Next.js export URL.
- Navigate to `src/components/3d/spline-hero-scene.tsx`.
- Update the `scene` prop URL inside the `<Spline />` component to your new URL.

### 3. Modifying the Theme Colors
The entire color palette is controlled via CSS variables in the Tailwind setup.
- Navigate to `src/app/globals.css`.
- In the `@theme` block, you can adjust `--color-primary` (Cyan), `--color-secondary` (Magenta), or `--color-background` to entirely re-theme the kit to match your brand.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.


## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](./CONTRIBUTING.md) for details.


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
