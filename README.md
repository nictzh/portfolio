# Next.js export — light mode + new case studies

**This is a clean, full replacement — don't hand-merge individual lines.** Delete each corresponding file/folder in your repo first, then copy these in wholesale. Partial copy-pastes are almost certainly why the logo, canvas effects, and animations weren't showing up on the last push.

Paths below are relative to `nextjs_export/` here → copy to the same path in `nictzh/portfolio`, then commit/push (Vercel auto-deploys on push to `main`).

## What's in here
- `app/globals.css` — full replacement.
- `app/layout.tsx` — full replacement. Now renders `<Footer/>` after page content on every route.
- `app/page.tsx` — full replacement. Homepage; client-logo ticker removed (moved to About).
- `app/about/page.tsx` — full replacement. Work History, Platforms, Brands, Education.
- `components/Nav/Nav.tsx` — full replacement. Real `<img>` logo (see below), Contact link scrolls to `#contact`.
- `components/Hero/Hero.tsx` — full replacement. Full-window pen-drawing canvas instead of the dot grid.
- `components/Footer/Footer.tsx` — **new file**. The "Say Hello!" contact section with its own pen-drawing canvas.
- `components/Reveal/RevealSection.tsx` — **new file**. Generic scroll-reveal wrapper (IntersectionObserver → adds `.visible`), used by the new case studies so their sections actually animate in on scroll instead of rendering statically visible.
- `public/images/nt-logo.svg` — **new file**. Your real NT monogram, referenced by Nav.
- `app/work/{taubmans,mirvac,aspect-skincare,mitre10,mmem,archives}/page.tsx` — new case study routes.

## Sync note (this pass)
Before making new changes, this export was re-synced to match fixes already live in your repo, so it won't clobber them:
- `.heroGrid` in `app/globals.css` — square line grid (not radial dots), matching your current fix.
- `components/Hero/Hero.tsx` — canvas setup now runs in a `useEffect` (not a `ref` callback), matching your production fix for the mouse-trail not appearing on Vercel.
- `components/Reveal/Reveal.tsx` is the correct filename — deleted the stray `RevealSection.tsx` and repointed every case-study import to `@/components/Reveal/Reveal`.
- Nav logo — no inline width/height override; sizing comes from `.monogram` in CSS (48px tall), flush against the "Nick Toh" text.

## New in this pass
- **Smooth scroll to Contact** — added `scroll-behavior: smooth` to `html` in `globals.css`, so the header's Contact link (and any `#contact` link) eases down to the footer instead of jumping.
- **About page scroll animations** — About's three sections (Work History/Platforms, Brands, Education) are now wrapped in the `Reveal` component and fade up on scroll, same as the homepage's Skills/Experience and work grid.

## Before you deploy
1. **Images**: every `<CaseImage>`/`<img>` below points at `/images/<project>/n.jpg`. Add the real files to `public/images/<project>/` (create the folders) — same pattern as `bumbung`. Nothing will 404 the build, but slots render broken until the files exist.
2. **Nav order**: I linked the case-study prev/next chain as Mitre 10 → Taubmans → MMEM → Aspect Skincare → Mirvac → L3 Home UX/UI, matching the homepage list order. Adjust `prevLink`/`nextLink` in each file if you want a different sequence.
3. **Archives**: `app/work/archives/page.tsx` merges the IDEAS + Fundamental case studies plus a new "Other works" gallery into one page, matching the live HTML site. It replaces your repo's separate `app/work/fundamental` and `app/work/ideas` routes — **delete those two folders**, and update `app/work/3ciety/page.tsx`'s `nextLink` to point at `/work/archives` (it currently points at `/work/fundamental`). The homepage project list here already swaps the old Fundamental/IDEAS cards for one "Archives" card.
4. **Old Contact route**: if your repo still has `app/contact/page.tsx` or a root `contact.html`, **delete it** — Contact is now the footer anchor on every page, not a separate route.
5. Run `npm run build` locally once to confirm no type errors before pushing.

No code push happened automatically — I don't have write access to your GitHub repo, only read access.
