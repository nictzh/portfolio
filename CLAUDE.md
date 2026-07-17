# Nick Toh — Portfolio Website
## CLAUDE.md — Project Context & Build Instructions

This file gives Claude Code full context for every session.
Read this before doing anything. Do not start coding without reviewing this first.

---

## Who I Am

**Name:** Nick Toh
**Title:** Communication Designer — Branding, Digital & UI/UX
**Location:** Melbourne, VIC, Australia
**Email:** nictzh@gmail.com
**Phone:** +61 466 975 858
**LinkedIn:** https://www.linkedin.com/in/nick-toh-4a0911a/
**Current site:** https://www.nicktoh.com (Wix — being replaced by this build)

10+ years in the creative industry. Started in Malaysia (KL), moved to Melbourne.
Background spans brand identity, art direction, print, digital, and UX/UI.
Primary clients have been startups and SMBs in Australia and Malaysia.

---

## What We're Building

A personal portfolio website built with **Next.js 14 (App Router)**.
Inspired by kysondana.com — clean, minimal, typographic, project-list layout.
Mobile-first (375px base), fast load times, deployed on Vercel.

### Vibe coding workflow
- Design reference: Figma (see below)
- Primary build tool: v0.dev (describe → preview → save)
- Refinement: Claude Code in GitHub Codespaces
- Deploy: Vercel (auto-deploys on every push to main)

### Figma designs (reference these)
File: https://www.figma.com/design/AgaD7Myu2q2QlGyInVdxde
All 4 pages are designed here. Build to match these designs exactly.

---

## Tech Stack

```
Framework:    Next.js 14 (App Router)
Language:     TypeScript
Styling:      CSS Modules (one .module.css per component)
Fonts:        next/font — Inter
Images:       next/image for all project images
Deploy:       Vercel
Repo:         github.com/nictzh/portfolio
```

No Tailwind. No UI libraries. No unnecessary dependencies.
Keep it lean — this is a portfolio, not a SaaS app.

---

## Brand Tokens

Define these in app/globals.css as CSS custom properties:

```css
:root {
  --color-bg:       #F9F7F4;  /* warm off-white — page background */
  --color-text:     #111111;  /* near-black — primary text */
  --color-accent:   #E05A4B;  /* red/salmon — NT monogram, tag pills, active nav, email only */
  --color-muted:    #888888;  /* subheadings, descriptors, secondary text */
  --color-border:   #E0DDD8;  /* dividers, row borders */
  --color-tag-bg:   #FDF0EE;  /* discipline tag pill background */
  --color-hover:    #F0EDE8;  /* project row hover state */
  --color-white:    #FFFFFF;

  --font-display:   700;      /* Bold — headlines */
  --font-semibold:  600;      /* Semi Bold — project titles */
  --font-regular:   400;      /* Regular — body */
  --font-medium:    500;      /* Medium — labels, nav */

  --tracking-tight: -1.5px;  /* display headlines */
  --tracking-label: 1.5px;   /* uppercase section labels */

  --lh-display:     1.15;
  --lh-body:        1.65;

  --max-width:      1440px;
  --content-pad:    64px;     /* horizontal padding on desktop */
  --content-pad-sm: 20px;     /* horizontal padding on mobile */
}
```

---

## Project Structure

```
portfolio/
│
├── CLAUDE.md                        ← this file (keep at root)
├── next.config.ts
├── tsconfig.json
├── package.json
│
├── app/
│   ├── globals.css                  ← CSS tokens + resets
│   ├── layout.tsx                   ← Root layout (Nav + Footer)
│   ├── page.tsx                     ← Homepage
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── work/
│       ├── l3home-ux/
│       │   └── page.tsx
│       ├── bumbung/
│       │   └── page.tsx
│       └── fn-angpau/
│           └── page.tsx
│
├── components/
│   ├── Nav/
│   │   ├── Nav.tsx
│   │   └── Nav.module.css
│   ├── ProjectRow/
│   │   ├── ProjectRow.tsx
│   │   └── ProjectRow.module.css
│   ├── TagPill/
│   │   ├── TagPill.tsx
│   │   └── TagPill.module.css
│   ├── CaseStudyLayout/
│   │   ├── CaseStudyLayout.tsx
│   │   └── CaseStudyLayout.module.css
│   └── Footer/
│       ├── Footer.tsx
│       └── Footer.module.css
│
└── public/
    ├── images/
    │   ├── l3home-ux/
    │   ├── l3home-branding/
    │   ├── bumbung/
    │   ├── eastern-warehouse/
    │   ├── 3ciety/
    │   ├── fundamental/
    │   ├── ideas/
    │   └── fn-angpau/
    └── pdfs/
        └── nick-toh-cv.pdf
```

---

## Pages & Content

### app/page.tsx — Homepage

**Nav:** NT monogram (accent colour) + "Nick Toh" | Work · About · Contact (right)
**Hero headline:** "Nick Toh — designer for brands that want to mean something."
**Hero sub:** "10+ years across branding, digital, and UX/UI. Melbourne-based, helping startups and growing businesses build brands and products with clarity and character."
**Client strip:** L3 Home · Eastern Warehouse · Bumbung · Temple & Webster · OgilvyAction · Petronas · F&N
**Section label:** SELECTED WORK (uppercase, muted, tracked)
**Project list:** Single column — use <ProjectRow> component for each

Projects in order:
1. L3 Home — UX/UI | "E-commerce redesign for a Melbourne furniture brand" | [UX/UI] | → /work/l3home-ux
2. L3 Home — Branding | "Brand identity for a direct-to-consumer homewares label" | [Branding] | → coming soon
3. Bumbung | "Identity system for a Malaysian property startup" | [Branding] | → /work/bumbung
4. Eastern Warehouse | "Brand and visual language for a homewares distributor" | [Branding] | → coming soon
5. 3ciety.com | "Brand identity for a social lifestyle platform" | [Branding] | → coming soon
6. Fundamental | "Identity and print collateral for a KL creative agency" | [Branding · Print] | → coming soon
7. IDEAS | "Publication design for a Malaysian policy think tank" | [Print] | → coming soon
8. F&N Ang Pau | "Festive packaging for a national F&B brand" | [Packaging · Print] | → /work/fn-angpau

Row hover: background shifts to var(--color-hover), arrow nudges right 4px (CSS transition)
"Coming soon" rows: render without an <Link> wrapper, cursor default, arrow muted

---

### app/about/page.tsx — About

**Bold opener:** "I blur the line between brand and product design."
**Bio:** Melbourne-based designer with 10+ years across branding, digital, and UX/UI. Started in Malaysia, moved to Australia, built for startups and SMBs ever since.

**Work history (most recent first):**
- 2017–Present | Marketing & Digital Designer | L3 Home, Melbourne
- 2015–2016 | Senior Designer | 3ciety, Kuala Lumpur
- 2013–2014 | Senior Graphic Designer | DIA Brands, KL
- 2011–2013 | Art Director | Lucideas / Fundamental, KL
- 2010–2011 | Designer / Visualizer | OgilvyAction Malaysia

**Education:**
- 2004–2005 | Brighton Secondary College — VCE Year 11–12
- 2006–2008 | Swinburne University — Bachelor of Communication Design
- 2021 | Academy Xi — UX / UI Elevate Course

**Skills (two columns):**
Product Design: UX/UI Design, Wireframing & Prototyping, User Research, Design Systems, Interaction Design, Web Design
Brand & Creative: Brand Strategy, Brand Identity, Art Direction, Creative Direction, Print & Packaging, Campaign Design

**CTA:** Download CV button → /pdfs/nick-toh-cv.pdf (opens in new tab)

---

### app/contact/page.tsx — Contact

**Headline:** "Let's make something good."
**Details:**
- nictzh@gmail.com (accent colour, mailto link)
- +61 466 975 858 (tel link)
- Melbourne, VIC, Australia

**Social links:** LinkedIn · Instagram · Facebook
**Form:** Name, Email, Phone, Message, Send button (use a Vercel-compatible form handler)

---

### app/work/[project]/page.tsx — Case Study Template

Use <CaseStudyLayout> component for all case studies. Sections:

1. ← Back to work (links to /)
2. Project title (large, bold)
3. <TagPill> with discipline
4. Overview row: Client | Role | Year | Tools (4 columns, 1px border top/bottom)
5. Hero image — next/image, full content width, border-radius 8px
6. Section: The brief
7. Section: Research & discovery (images via next/image)
8. Section: Key decisions
9. Section: Outcome & impact
10. Section: What I'd do differently

**Active case studies:** /work/l3home-ux, /work/bumbung, /work/fn-angpau
**Others:** If no page exists, show "Case study coming soon" state

---

## Component Specs

### <Nav>
- Fixed top, full width, height 64px, background var(--color-bg)
- Left: NT (accent, bold, 20px) + "Nick Toh" (text, medium, 14px)
- Right: Work · About · Contact (13px, regular)
- Active link: accent colour
- Mobile: hamburger menu below 768px

### <ProjectRow>
Props: title, description, tag, href?, comingSoon?
- Full content width, height 72px, flex row, align center
- Left: title (15px semibold) + description (12px muted) stacked
- Middle: <TagPill>
- Right: → arrow (16px muted)
- Bottom: 1px var(--color-border) line
- Hover (if not comingSoon): background var(--color-hover), arrow nudges right

### <TagPill>
Props: label
- background: var(--color-tag-bg)
- color: var(--color-accent)
- border-radius: 20px
- padding: 3px 10px
- font: 10px medium

### <CaseStudyLayout>
Props: title, tag, client, role, year, tools, heroImage, children
- Wraps all case study pages
- Handles the overview row and hero image
- children = the written sections

---

## Design Rules (never break these)

- Accent #E05A4B appears ONLY on: NT monogram, tag pills, active nav link, email address
- No colour backgrounds on sections — everything on var(--color-bg)
- No drop shadows anywhere
- No rounded corners except tag pills (20px) and CV/Send buttons (4px)
- Project rows separated by 1px border lines only — no cards, no box shadows
- Section labels: always uppercase, 10px, medium weight, tracked 1.5px
- Case study images: full bleed within content column, border-radius 8px, use next/image
- Max 2 font weights on any single page element

---

## Metadata (per page)

Set via Next.js generateMetadata or static metadata export:

```ts
export const metadata = {
  title: 'Nick Toh — Communication Designer',
  description: '10+ years across branding, digital, and UX/UI. Melbourne-based.',
  openGraph: {
    title: 'Nick Toh — Communication Designer',
    description: '...',
    images: ['/images/og-default.png'],
  },
}
```

Each case study should have its own title and og:image.

---

## How to Bootstrap the Project

```bash
# 1. Create the Next.js project
npx create-next-app@latest portfolio \
  --typescript \
  --no-tailwind \
  --app \
  --src-dir=false \
  --import-alias="@/*"

cd portfolio
```

Then copy CLAUDE.md into the root, then push to GitHub:

```bash
git init
git add .
git commit -m "initial setup"
git remote add origin https://github.com/nictzh/portfolio.git
git push -u origin main
```

Then go to vercel.com → New Project → Import portfolio → Deploy.

---

## How to Run Locally

```bash
npm run dev
# opens at http://localhost:3000
```

---

## Deployment

- **GitHub repo:** https://github.com/nictzh/portfolio
- **Host:** Vercel — import repo at vercel.com/new
- **Domain:** nicktoh.com → add in Vercel → Project → Settings → Domains
- **Auto-deploy:** every push to main triggers a new deployment

---

## Cloud Coding Setup (for working overseas)

### v0.dev (vibe coding — start here)
1. Go to v0.dev
2. Describe what you want: "Build a homepage for my portfolio based on kysondana.com with these projects: [paste list]"
3. Reference your Figma file for visual direction
4. When happy, click "Add to codebase" to push to your GitHub repo
5. Vercel auto-deploys immediately

### GitHub Codespaces (refinements)
1. Go to github.com/nictzh/portfolio
2. Click Code → Codespaces → Create codespace
3. Run: `npm install -g @anthropic-ai/claude-code` then `claude`
4. Claude Code reads this CLAUDE.md and picks up exactly where you left off
5. Upload thumb drive images via the Codespaces file explorer (drag and drop into /public/images/)

---

## Current Status

- [x] Content exported from Wix
- [x] Figma designs complete (all 4 pages)
- [x] CLAUDE.md written
- [ ] Next.js project bootstrapped
- [ ] globals.css with CSS tokens written
- [ ] Nav component built
- [ ] ProjectRow component built
- [ ] TagPill component built
- [ ] Homepage (app/page.tsx) built
- [ ] About page built
- [ ] Contact page built
- [ ] CaseStudyLayout component built
- [ ] Case study: /work/l3home-ux
- [ ] Case study: /work/bumbung
- [ ] Case study: /work/fn-angpau
- [ ] Project images added from thumb drive → /public/images/
- [ ] CV PDF added → /public/pdfs/
- [ ] Pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Domain pointed at Vercel

---

## Session Prompt (use this to start every Claude Code session)

"Read CLAUDE.md first. Check which files exist in app/ and components/ to see what's been built. Then ask me what I want to work on today."
