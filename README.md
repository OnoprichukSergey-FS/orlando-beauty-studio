# Orlando Beauty Studio

A responsive business website for Orlando Beauty Studio, built with Next.js and React. The site introduces the studio, showcases its treatments, and helps visitors find service information, contact details, and external appointment booking options.

## Features

- Multi-page website with Home, About, Services, Beauty School, Gift Cards, and Contact pages
- Service listings with treatment descriptions and pricing
- Interactive interface elements built with React state
- Appointment and gift-card links to the studio's Vagaro booking platform
- Embedded location map and links to social media
- Image and video content to showcase the studio
- Custom styling with page-specific CSS

## Tech stack

- **Next.js 16** — React framework and App Router
- **React 19** — Components and interactive UI
- **JavaScript** — Application logic
- **CSS** — Layout, typography, and responsive styling
- **Netlify** — Deployment configuration

## Project structure

```text
src/
  app/          # Routes, page components, root layout, navigation
  components/   # Reusable page sections
  styles/       # Global and page-specific styles
public/         # Images, videos, and other static assets
```

## Run locally

**Requirements:** Node.js and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To create a production build:

```bash
npm run build
npm run start
```

## How booking works

The website links visitors to the studio's external Vagaro booking platform. Appointment scheduling and payment processing are **not implemented in this repository**.

## My development focus

This project demonstrates multi-page React development, organizing reusable UI components, managing interactive page state, integrating external services, and building a website around a real business's content and user needs.

## Notes

The project contains business-specific images, video, copy, and contact information. Permission should be confirmed before distributing the repository or its assets publicly.
