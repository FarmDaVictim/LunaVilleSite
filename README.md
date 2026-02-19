# Lunaville Website

React + Vite app for Lunaville—where threads meet the stars. Craft your cosmic rug 🌙

## Tech Stack

- **React** + **Vite**
- **React Router** (10 routes)
- **GSAP** (installed, ready for animations)
- **Matter.js** (installed, ready for physics)

## Project Structure

```
lunaville/
├── public/
│   ├── lunaville-logo.png    # High-res logo (reference)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Layout.jsx        # App shell: Navbar + StarField + Outlet
│   │   ├── Navbar.jsx        # Sticky nav with logo + links
│   │   ├── Logo.jsx          # Lunaville text (yarn effect, Bangers font)
│   │   └── StarField.jsx     # Deep space particle stars (twinkle)
│   ├── pages/
│   │   ├── HomePage.jsx      # Single-page scroller with section placeholders
│   │   ├── About.jsx
│   │   ├── Catalog.jsx
│   │   ├── Shop.jsx          # Current Collection
│   │   ├── Auctions.jsx
│   │   ├── BookAClass.jsx
│   │   ├── Archive.jsx
│   │   ├── Press.jsx
│   │   ├── PrivateList.jsx
│   │   └── Contact.jsx
│   ├── App.jsx               # Router setup
│   ├── main.jsx
│   └── index.css             # Brand vars, base styles
└── index.html
```

## Routes

| Path | Page |
|------|------|
| `/` | Homepage (single-page scroller) |
| `/about` | About |
| `/catalog` | Catalog |
| `/shop` | Current Collection / Shop |
| `/auctions` | Auctions |
| `/book-a-class` | Book a Class |
| `/archive` | Archive |
| `/press` | Press |
| `/private-list` | Private List |
| `/contact` | Contact |

## Brand Palette

- **Black** `#000000` – Backgrounds
- **Neon Green** `#39FF14` – Logo, headings, accents
- **Yellow** `#FFFF00` – CTAs, highlights; `#FFD700` on hover
- **Dark Gray** `#333333` – Body text

## Scripts

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Production build
npm run preview  # Preview production build
```

## Next Steps

The base frame is ready. You can now add:

1. Content to each page
2. GSAP animations (import from `gsap`)
3. Matter.js physics (import from `matter-js`)
4. Forms (e.g. Formspree for bookings/contact)
5. Gallery images and rug previews
