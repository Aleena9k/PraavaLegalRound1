# Praava Legal — Legal Work Platform Hero

Hero section matching the Round-1 reference design — overlapping floating pills, portal message card, and mixed-weight headline. Built with Next.js 15 (App Router), Tailwind CSS, Framer Motion, and Lucide icons.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

- `app/page.tsx` — renders `HeroSection`
- `app/layout.tsx` — root layout with Plus Jakarta Sans
- `components/HeroSection.tsx` — full hero with blobs, cards, dark mode
- `components/FloatingCard.tsx` — reusable floating pill card
- `components/PortalCard.tsx` — John Doe client portal variant

## Features

- Headline: “A single platform to manage every part of your legal work”
- Five floating pills (Matters, Billing, Tasks, Documents, John Doe Portal)
- Horizontal pill cards with correct color mapping from the design
- Portal card with lavender background, orange accent, avatar, and message
- Dark mode toggle, Framer Motion animations, responsive mobile stack

## Tech Stack

- Next.js 14+ App Router
- Tailwind CSS
- Framer Motion
- lucide-react
