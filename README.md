# Next.js export — light mode + new case studies

Drop these files into your `nictzh/portfolio` repo at the matching paths, then commit/push (Vercel auto-deploys on push to `main`).

## What's in here
- `app/globals.css` — full replacement. Swaps your dark tokens for the light-mode palette (bg #F7F3ED, text #1C1912, accent #E85A42), softens the nav to a 12px-radius glass pill, and adds the CSS the new case studies use (`caseImgRow.quad`, `caseBento6.five`, accent-red insight cards/list items).
- `app/page.tsx` — full replacement. Same homepage, but Mitre 10, Taubmans, MMEM, Aspect Skincare and Mirvac are now linked instead of "coming soon".
- `app/work/taubmans/page.tsx`, `app/work/mirvac/page.tsx`, `app/work/aspect-skincare/page.tsx`, `app/work/mitre10/page.tsx`, `app/work/mmem/page.tsx` — new case study routes, built with your existing `CaseStudyLayout` + `CaseImage` components.

## Before you deploy
1. **Images**: every `<CaseImage>` below points at `/images/<project>/n.jpg`. Add the real files to `public/images/<project>/` (create the folders) — same pattern as `bumbung`. Nothing will 404 the build, but slots render broken until the files exist.
2. **Nav order**: I linked the case-study prev/next chain as Mitre 10 → Taubmans → MMEM → Aspect Skincare → Mirvac → L3 Home UX/UI, matching the homepage list order. Adjust `prevLink`/`nextLink` in each file if you want a different sequence.
3. **Archives**: `app/work/archives/page.tsx` merges the IDEAS + Fundamental case studies plus a new "Other works" gallery into one page, matching the live HTML site. It replaces your repo's separate `app/work/fundamental` and `app/work/ideas` routes — delete those two folders, and update `app/work/3ciety/page.tsx`'s `nextLink` to point at `/work/archives` (it currently points at `/work/fundamental`). The homepage project list here already swaps the old Fundamental/IDEAS cards for one "Archives" card.
4. Run `npm run build` locally once to confirm no type errors before pushing.

No code push happened automatically — I don't have write access to your GitHub repo, only read access.
