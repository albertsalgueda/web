# albert-website

Personal website for Albert Salgueda. One page, full black, system SF fonts. Built with Next.js (App Router) and Tailwind CSS v4, deployed on Vercel.

The number on the page is age in years to 20 decimal places, ticking every animation frame. Hover (or press, on touch) flips it to ETD — estimated time of departure, the years remaining to an estimated 90.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Framework:** Next.js 16 (App Router, SSG)
- **Styling:** Tailwind CSS v4
- **Fonts:** System stack (SF Pro / SF Mono on Apple devices)
- **Deploy:** Vercel

## Structure

```
src/
  app/
    page.tsx       # The page
    layout.tsx     # Root layout + metadata
    globals.css    # Tailwind + fonts
  components/
    age.tsx        # Live age counter / ETD on hover
```
