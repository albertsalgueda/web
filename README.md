# albert-website

Personal website for Albert Salgueda. Built with Next.js (App Router), Tailwind CSS v4, and deployed on Vercel.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Framework:** Next.js 16 (App Router, SSG)
- **Styling:** Tailwind CSS v4
- **Font:** Geist (via next/font)
- **Deploy:** Vercel

## Structure

```
src/
  app/
    page.tsx          # Home / Hero
    about/page.tsx    # About
    work/page.tsx     # Work / Projects
    writing/page.tsx  # Writing (placeholder for MDX)
    contact/page.tsx  # Contact links
    layout.tsx        # Root layout
    globals.css       # Global styles + theme variables
  components/
    header.tsx        # Navigation + theme toggle
    theme-provider.tsx # Dark/light mode context
```
