# TrustpilotReview Complete Working Context

This file is the append-only working memory for:

`E:\1st YEAR DTU\New folder\trustpilotreview-shop`

Read the entire file before every task in this repository. Do not begin from an
old chat continuation point. Do not replace this history with a condensed
summary. Add corrections and new entries without deleting the original event.

## First Rule For Every Task

1. Read:
   - `E:\1st YEAR DTU\New folder\AGENTS.md`
   - `E:\1st YEAR DTU\New folder\CONTEXT.md`
   - this repository's `AGENTS.md`
   - this entire file
   - `DESIGN.md` and `PRODUCT.md` when frontend, product, SEO, tracking, or
     content is involved
2. Run:
   - `git status --short --branch`
   - `git remote -v`
   - `git fetch --all --prune`
   - upstream ahead/behind comparison
   - recent commit inspection
   - staged, unstaged, and untracked diff inspection
3. Check the live route when current production output matters.
4. Do not edit until current local, remote, and live state agree or the user
   confirms which state is authoritative.

The user changes this repository through Antigravity and GitHub, and Naman also
pushes changes. Stale local state caused a newer top-five image and other manual
edits to be overwritten in an earlier task. That mistake must not recur.

## Non-Negotiable Repository Constraints

1. The target repository for TrustpilotReview work is this folder, not
   `trustpilot-led-mask-replica`.
2. The replica is a visual and historical reference. Its Buudy and LED-mask
   pages are protected.
3. Existing ad pages are sensitive. Preserve approved visible frontend output
   unless the current request explicitly changes it.
4. A one-page task authorizes only that page.
5. A data-only task does not authorize layout, typography, spacing, color,
   image, route, tracking, or SEO changes.
6. A render-only or discussion-only task authorizes no code changes.
7. A comparison named `Muuhu vs Dyson` must render only Muuhu and Dyson. A
   comparison named `Muuhu vs Shark` must render only Muuhu and Shark. A
   comparison named `Muuhu vs ghd` must render only Muuhu and ghd. The
   three-way page must render Muuhu, Shark, and Dyson only.
8. Muuhu remains the first-ranked product on current hair pages unless the user
   explicitly changes the business strategy.
9. Do not commit, push, create a branch, open a pull request, deploy, or promote
   a Vercel deployment unless the user explicitly requests that action.
10. Preserve exact public paths and outbound attribution. Do not replace an
    affiliate or official link with `#`.
11. Before the final response, append the complete task details to this file and
    re-read it.

## Repository And Tooling State Verified 30 July 2026

### Git

- Remote: `https://github.com/naman-14113114/trustpilotreview-shop.git`
- Branch: `main`
- Current HEAD: `f1edd57f21f1bf62edb00d5d3af122cc9f169866`
- Current short HEAD: `f1edd57`
- Upstream: `origin/main`
- Ahead after update: `0`
- Behind after update: `0`
- Worktree immediately after fast-forward: clean

At the start of the 30 July 2026 context task, local `main` was clean at
`71b4f15` and eight commits behind `origin/main`. A fast-forward-only pull moved
it to `f1edd57`. No merge, reset, rebase, stash, conflict resolution, or local
overwrite occurred.

### Incoming commits incorporated on 30 July 2026

1. `592a45c80b71a1c13d5b80fbce0dca6e67bd67e0`
   - Date: `2026-07-26T10:56:35+05:30`
   - Subject: `Fix hair dryer outbound attribution`
   - Main effect: added outbound attribution handling in
     `HairDryerAdvertorial.tsx`.
2. `8779241566a64941806a9f8fa79b9a4552602686`
   - Date: `2026-07-26T18:47:09+05:30`
   - Subject: `Update UK hair dryer comparison pages`
   - Main effects:
     - Replaced obsolete Airwrap/FlexStyle alternative and direct-comparison
       routes with current Supersonic Nural and SpeedStyle Pro routes.
     - Added permanent redirects from the obsolete public slugs.
     - Updated sitemap URLs.
     - Updated comparison images.
     - Added `generate-hair-comparison-visuals.py`.
     - Expanded and normalized current hair guide product data.
     - Updated homepage guide links.
3. `1b64b3424ba83548e6afd899456107e652f34aaf`
   - Date: `2026-07-28T08:00:58+05:30`
   - Subject: `Update Muuhu hero and hair dryer specifications`
   - Main effects:
     - Updated Muuhu hero/comparison imagery.
     - Updated product specifications and offer text.
     - Updated the hair exit-popup data.
4. `bdd71667b43277f8d06d0e00bd12ab54c67db93b`
   - Date: `2026-07-28T08:29:08+05:30`
   - Subject: `Remove unsupported Muuhu bonus attachments`
   - Main effect: removed the previously added two bonus-attachment block from
     `HairDryerAdvertorial.tsx`. The current approved Best Hair Dryer page has
     seven Muuhu attachments and no extra bonus-attachment row.
5. `bab3502d1f2941135ae2fba3f4a4ca70f7fd6d72`
   - Date: `2026-07-28T09:38:44+05:30`
   - Subject: `Update UK hair dryer page heading`
   - Main effect: changed the UK Best Hair Dryer heading.
6. `b0cc758b0b7de081446c3c87f8f1383276ea4c08`
   - Date: `2026-07-28T09:57:20+05:30`
   - Subject: `Refine hair dryer masthead hierarchy`
   - Main effect: refined the masthead heading hierarchy without changing the
     route.
7. `b1d6c4d694daad016240b79b6eb6fd06839b4f22`
   - Date: `2026-07-28T13:26:00+05:30`
   - Subject: `fix: standardize Muuhu AirPro comparison funnel`
   - Main effects:
     - Standardized the visible product name as `Muuhu AirPro`.
     - Standardized the warranty as `1-year`.
     - Standardized the money-back guarantee as `90-day`.
     - Standardized the gift value as `GBP 129` in current source strings.
     - Updated Best Hair Dryer data, guide data, advertorial copy, verdict video
       labels, comparison visuals, and exit-popup text.
8. `f1edd57f21f1bf62edb00d5d3af122cc9f169866`
   - Date: `2026-07-28T13:34:42+05:30`
   - Subject: `chore: trigger production deployment`
   - This commit contains no application file diff. It was used to trigger a
     production deployment.

## Current Technical Architecture

- Root package name: `trustpilotreview-shop-monorepo`
- Package manager: `pnpm@11.1.1`
- Turbo: `^2.8.6`
- Next.js: `16.2.11`
- React and React DOM: `19.2.8`
- TypeScript: `5.9.3`
- Public Next.js app: `apps/site`
- Shared visual primitives: `packages/ui`
- Shared contracts and constants: `packages/shared`
- Main hair data:
  - `apps/site/src/data/hair.ts`
  - `apps/site/src/data/hairGuides.ts`
  - `apps/site/src/data/bestHairDryerProductContent.tsx`
- Shared hair page renderer:
  - `apps/site/src/legacy-pages/HairDryerAdvertorial.tsx`
- Homepage hair cards:
  - `apps/site/src/legacy-pages/old/Home.tsx`
- Current Next config:
  - `apps/site/next.config.ts`
  - root `next.config.mjs` also contains deployment-facing configuration
- Static and legacy routes not converted into dedicated App Router pages are
  handled by `apps/site/src/app/[[...path]]/page.tsx`.

## Current Public Hair Routes

There are thirteen current public hair routes:

1. `/best-hair-dryer-uk-2026`
2. `/best-hair-dryer-curly-hair-uk-2026`
3. `/best-hair-dryer-fine-hair-uk-2026`
4. `/best-hair-dryer-thick-hair-uk-2026`
5. `/best-hair-dryer-frizzy-hair-uk-2026`
6. `/best-hair-dryer-straight-hair-uk-2026`
7. `/best-hair-dryer-damaged-hair-uk-2026`
8. `/best-dyson-supersonic-nural-alternative-uk-2026`
9. `/best-shark-speedstyle-pro-alternative-uk-2026`
10. `/muuhu-vs-dyson-supersonic-nural-uk`
11. `/muuhu-vs-shark-speedstyle-pro-uk`
12. `/muuhu-vs-ghd-helios-uk`
13. `/dyson-vs-shark-vs-muuhu-uk`

### Permanent legacy hair redirects

- `/best-dyson-airwrap-alternative-uk-2026`
  redirects to
  `/best-dyson-supersonic-nural-alternative-uk-2026`.
- `/best-shark-flexstyle-alternative-uk-2026`
  redirects to
  `/best-shark-speedstyle-pro-alternative-uk-2026`.
- `/muuhu-vs-dyson-airwrap-uk`
  redirects to `/muuhu-vs-dyson-supersonic-nural-uk`.
- `/muuhu-vs-shark-flexstyle-uk`
  redirects to `/muuhu-vs-shark-speedstyle-pro-uk`.

Do not recreate a removed old route as a second live page. Preserve these
single-hop permanent redirects unless a future SEO task explicitly changes
them.

## Current Hair Guide Product Orders

The current normalization table in `hairGuides.ts` is authoritative:

- Curly hair:
  1. Muuhu
  2. Shark
  3. Dyson
  4. Cloud Nine
  5. ghd
- Fine hair:
  1. Muuhu
  2. Dyson
  3. Cloud Nine
  4. Shark
  5. ghd
- Thick hair:
  1. Muuhu
  2. Dyson
  3. Shark
  4. Cloud Nine
  5. ghd
- Frizzy hair:
  1. Muuhu
  2. Dyson
  3. Cloud Nine
  4. Shark
  5. ghd
- Straight hair:
  1. Muuhu
  2. ghd
  3. Dyson
  4. Cloud Nine
  5. Shark
- Damaged hair:
  1. Muuhu
  2. Dyson
  3. Shark
  4. Cloud Nine
  5. ghd
- Dyson Supersonic Nural alternative:
  1. Muuhu
  2. Dyson
  3. Shark
  4. Cloud Nine
  5. ghd
- Shark SpeedStyle Pro alternative:
  1. Muuhu
  2. Shark
  3. Dyson
  4. Cloud Nine
  5. ghd
- Muuhu vs Dyson:
  1. Muuhu
  2. Dyson
- Muuhu vs Shark:
  1. Muuhu
  2. Shark
- Muuhu vs ghd:
  1. Muuhu
  2. ghd
- Dyson vs Shark vs Muuhu:
  1. Muuhu
  2. Shark
  3. Dyson

This direct-comparison scope was corrected after earlier pages incorrectly
showed unrelated products. Never put all five products on a two-product direct
comparison page.

## Current Best Hair Dryer UK Product Ranking

The current source of truth is the `bestHairDryerProducts` array in
`HairDryerAdvertorial.tsx`, combined with the manually editable JSX content in
`bestHairDryerProductContent.tsx`.

### Number 1: Muuhu AirPro

- Visible name: `Muuhu AirPro`
- Price: `GBP 149`
- Compare-at price: `GBP 299`
- Rating: `4.9 / 5`
- Product image: `/img/hair/muuhu-product-1a.webp`
- Main outbound URL is resolved to the market Muuhu URL:
  `https://uk.muuhu.com/products/muuhu-hair-dryer`
- Current specifications in source:
  - 1,400W
  - 110,000 RPM brushless motor
  - 3 temperature settings
  - 3 speed settings
  - intelligent heat control
  - negative-ion care
  - seven included attachments
  - 1-year warranty
  - 90-day money-back guarantee
- Current seven attachment assets and labels:
  1. `/img/hair/attachments/muuhu-attachment-1.webp` as `Diffuser`
  2. `/img/hair/attachments/muuhu-attachment-2.webp` as `Concentrator`
  3. `/img/hair/attachments/muuhu-attachment-3.webp` as `Round Brush`
  4. `/img/hair/attachments/muuhu-attachment-4.webp` as `Left Curler`
  5. `/img/hair/attachments/muuhu-attachment-5.webp` as `Right Curler`
  6. `/img/hair/attachments/muuhu-attachment-6.webp` as `Smoothing Brush`
  7. `/img/hair/attachments/muuhu-attachment-7.webp` as `Paddle Brush`
- Unsupported bonus attachments were deliberately removed in commit
  `bdd7166`. Do not restore them from older chat instructions.

### Number 2: Dyson Supersonic Nural

- Visible name: `Dyson Supersonic Nural`
- Price: `GBP 299.99`
- Compare-at price: `GBP 399.99`
- Rating: `4.4 / 5`
- Product image: `/img/hair/dyson_hairdryer_new.webp`
- Affiliate URL: `https://amzn.to/4yH7gW5`
- Five attachment assets:
  - `/img/hair/attachments/dyson-attachment-1.jpg`
  - `/img/hair/attachments/dyson-attachment-2.jpg`
  - `/img/hair/attachments/dyson-attachment-3.jpg`
  - `/img/hair/attachments/dyson-attachment-4.jpg`
  - `/img/hair/attachments/dyson-attachment-5.jpg`

### Number 3: Cloud Nine Airshot Pro

- Visible name: `Cloud Nine Airshot Pro`
- Price: `GBP 229`
- Rating: `4.5 / 5`
- Product image: `/img/hair/cloudenine.webp`
- Affiliate URL: `https://amzn.to/4fmAX7o`
- Three attachment assets:
  - `/img/hair/attachments/cloudnine-attachment-1.webp`
  - `/img/hair/attachments/cloudnine-attachment-2.webp`
  - `/img/hair/attachments/cloudnine-attachment-3.webp`

### Number 4: Shark SpeedStyle Pro

- Visible name: `Shark SpeedStyle Pro`
- Price: `GBP 169.99`
- Rating: `4.6 / 5`
- Product image: `/img/hair/shark_hairdryer.webp`
- Affiliate URL: `https://amzn.to/4htIum3`
- Four attachment assets:
  - `/img/hair/attachments/shark-attachment-1.webp`
  - `/img/hair/attachments/shark-attachment-2.webp`
  - `/img/hair/attachments/shark-attachment-3.webp`
  - `/img/hair/attachments/shark-attachment-4.webp`

### Number 5: ghd Helios

- Visible name: `ghd Helios`
- Price: `GBP 189`
- Rating: `4.5 / 5`
- Product image: `/img/hair/ghd.jpg`
- Affiliate URL: `https://amzn.to/4xmMeuD`
- One attachment asset:
  - `/img/hair/attachments/ghd-attachment-1.webp`

## Current Shared Hair Assets And Public URLs

- Top-five comparison visual:
  `/img/hair/top-5-hair-dryer.webp`
- Muuhu current product image used by normalized guide data:
  `/img/hair/muuhu-product-1a.webp`
- Dyson image:
  `/img/hair/dyson_hairdryer_new.webp`
- Shark image:
  `/img/hair/shark_hairdryer.webp`
- ghd image:
  `/img/hair/ghd.jpg`
- Three-way visual:
  `/img/hair/vs-dyson-shark-muuhu.webp`
- Muuhu vs Dyson visual:
  `/img/hair/vs-dyson.webp`
- Muuhu vs Shark visual:
  `/img/hair/vs-shark.webp`
- Muuhu vs ghd visual:
  `/img/hair/vs-ghd.webp`
- Expert image:
  `/img/hair/styler_image.webp`
- Expert visible name and role:
  `Amara Wright`, `Haircare and Hair Style Expert`
- Verdict video:
  `/assets/hair-dryer-trustpilot-video.mp4`
- Gift images:
  - `/img/hair/muuhu-luxury-case.webp`
  - `/img/hair/muuhu-comb.webp`
  - `/img/hair/muuhu-expert-hair-ebook.webp`

## Official Muuhu URLs Kept In The Advertorial

- Product and check availability:
  `https://uk.muuhu.com/products/muuhu-hair-dryer`
- Premium Packaging:
  `https://uk.muuhu.com/pages/premium-packaging`
- Scalp product path remains stable as:
  `https://uk.muuhu.com/products/muuhu-comb`
- Haircare E-book:
  `https://uk.muuhu.com/pages/haircare-ebook`

The Muuhu storefront later changed visible product naming to `Muuhu ScalpPro`
while preserving `/products/muuhu-comb`. If the Trustpilot visible gift label is
changed in a future task, preserve this stable URL unless the user explicitly
changes the redirect strategy.

## Current Best Hair Dryer Visual Structure

The approved visible structure is:

1. Emerald masthead with title, UK market line, and current update date.
2. White hero area with the top-five comparison visual.
3. Editorial expert card.
4. Introductory comparison copy.
5. Criteria section.
6. Ranked product cards.
7. Performance metrics.
8. Stacked Pros panel.
9. Stacked Cons panel.
10. Attachment table on the Best Hair Dryer page.
11. Muuhu gift offer within the winning product.
12. Final verdict using the Muuhu video.
13. Disclosure.
14. Shared footer.
15. Sticky mobile CTA.

The current rank ribbon is rendered on the UK hair renderer. Earlier iterations
misunderstood the user's scroll request by changing ribbon positioning. The
user wanted the badge attached to the top-left card corner while keeping the
card's top visible during the relevant scrolling behavior. Do not make the
ribbon viewport-fixed or move it away from the top-left card corner.

The attachment presentation was repeatedly refined. The current committed
version uses a centered attachment count and a seven-column table with named
attachments, leaving missing competitor cells visually empty. The previous
two-free-attachment row was later removed as unsupported. Do not reconstruct an
older render from chat without checking current source and Git history.

## Homepage Hair Guide Behavior

The homepage renders the hair guide section from `hairGuideGroups` and
`hairGuides` in `apps/site/src/legacy-pages/old/Home.tsx`.

- The section title is `Hair Dryer Buying Guides`.
- The Best Hair Dryer top-five card is inserted at the start of the Hair Type
  Guides group.
- Every current hair route is represented through the current guide groups.
- Dyson, Shark, ghd, and three-way cards choose their comparison image from the
  route slug.
- The four obsolete Airwrap/FlexStyle slugs must not return as homepage links.

## Editable Copy Structure

The Best Hair Dryer descriptions, pros, and cons were moved into
`bestHairDryerProductContent.tsx` as JSX. This was done because the user wanted
to manually use paragraphs, list items, `strong`, and other controlled
formatting rather than editing arrays of plain strings.

Do not move that content back to plain arrays unless the user explicitly asks
for a data-model refactor. The guide pages still use structured data because
they are generated through the shared guide system.

## Important Historical Mistakes And Corrections

### Stale local state overwrote a newer image

An earlier assistant continued from its remembered local state after the user
had changed the top-five image in Antigravity and GitHub. The older asset was
restored accidentally. The user explicitly established the rule that every
task must start with local and remote reconciliation. This incident is the main
reason for the mandatory Git freshness audit.

### Wrong page layout was used for comparison pages

The early `HairGuidePage` treatment added quick-stat cards, a separate "Why
Muuhu ranks No. 1" block, buyer cards, unrelated ranking clutter, and side-by-
side "What works / Watchouts" panels. The user wanted the exact Best Hair Dryer
advertorial structure for every hair page, with only the number of compared
products changing. The corrected shared renderer uses the same masthead,
expert, criteria, ranked-card, metric, stacked Pros/Cons, verdict, footer, and
sticky CTA rhythm.

### Direct comparison pages contained unrelated products

Some direct pages showed all five products even when the route was Muuhu vs one
named competitor. Current `guideProductOrder` fixes this. Two-product pages
must remain two-product pages.

### Wrong competitor product families were used

The first hair pages used Dyson Airwrap and Shark FlexStyle as if the whole
project were a styling-system comparison. The Best Hair Dryer page was later
corrected to dryer-first products:

- Dyson Supersonic Nural
- Cloud Nine Airshot Pro
- Shark SpeedStyle Pro
- ghd Helios

Current alternative and direct-comparison route names reflect those products.
Old Airwrap and FlexStyle slugs are redirects only.

### Product order changed

The current Best Hair Dryer order is Muuhu, Dyson, Cloud Nine, Shark, ghd.
Earlier source and screenshots showed Shark before Cloud Nine. Do not restore
that older order.

### Muuhu warranty and product name changed

Older copy said `Muuhu 7-in-1 High-Speed Hair Dryer` and `2-year warranty`.
The current committed funnel says `Muuhu AirPro` and `1-year warranty`.
Current copy and visuals must use the latest values.

### Unsupported bonus attachments were removed

Two extra Muuhu attachments were once rendered beneath the seven included
attachments. Commit `bdd7166` removed that block. Its absence is intentional.

### Rank ribbon behavior was repeatedly misunderstood

The ribbon belongs at the card's top-left corner. It must not be fixed to the
viewport or moved into an unrelated area. The request to keep the badge visible
referred to avoiding card-top cropping during the card presentation, not
detaching the badge from the card.

### Expert image and title

The user rejected a doctor-style endorsement for hair pages and requested a
female stylist/editor visual. The current page uses `Amara Wright` and
`/img/hair/styler_image.webp`. Future changes must avoid inventing a real
medical endorsement.

### Tawk widget visibility

The widget must remain functional in the background but visually hidden on the
advertorial frontend when that is the current approved behavior. Do not remove
the integration merely to hide its launcher. Verify current source and live
behavior before changing it.

### Exit popup and offer correction

The hair exit popup was adapted from the reference. The user corrected the
offer from 60 percent to 50 percent. Current exit-popup data must be inspected
before any future offer edit.

### Affiliate links

The user manually added and corrected competitor affiliate links. These are
commercially important. Never replace them with official URLs, `#`, or generic
links during a data normalization or visual refactor.

## Detailed Trustpilot Work History From This Task Sequence

The following history records the actual intent and corrections rather than
only the final code state.

### Initial 12-page hair expansion

The user first asked for fifteen UK hair content ideas around hair type,
alternatives, and direct comparisons. They removed ideas 7, 8, and 15 and asked
for the remaining twelve pages. Muuhu was to rank first while the tone remained
balanced and useful. The user allowed existing product assets and image editing
but did not want new AI-generated product images. All pages were intended to
appear on the homepage.

The first generated page system did not adequately copy the approved Best Hair
Dryer structure. This led to the later shared advertorial correction.

### Migration from static HTML to Next.js monorepo

The user identified `trustpilotreview-shop` as the main advertising website and
asked for a scalable Next.js structure without changing the visible frontend,
SEO/GEO, links, images, tracking, popups, fonts, colors, layout, or data.
The repository was migrated to a pnpm/Turbo/App Router structure with
`apps/site`, `packages/ui`, and `packages/shared`. Legacy HTML remained as
parity/reference material while React routes were introduced.

The user initially asked for a GitHub branch workflow, then later said local
future changes should remain uncommitted so they could review them manually.
The permanent rule is now: no commit, push, branch, or deployment unless the
current task explicitly requests it.

### First two corrected hair pages

The first correction scope was:

- `/best-hair-dryer-uk-2026`
- `/dyson-vs-shark-vs-muuhu-uk`

The user required the three-way page to use the same structure as the Best Hair
Dryer page rather than a separate guide template. Competitor descriptions and
comparison criteria were expanded. The Pros and Cons layout was changed to the
approved stacked design. A consistent footer and mobile sticky CTA were used.

### Remaining eleven routes

The next task added the other hair-type, alternative, and direct-comparison
routes through the shared advertorial renderer. The homepage was expanded to
show all thirteen pages. The favicon was made global. Later remote commits
updated four old competitor-specific slugs to Supersonic Nural and SpeedStyle
Pro equivalents.

### Best Hair Dryer product correction

The user then isolated `/best-hair-dryer-uk-2026` for ad-readiness and changed
the ranking from the early Airwrap/L'Oreal set to a dryer-first set. They
supplied official Dyson, Cloud Nine, and Shark references and later affiliate
links. The current order is Muuhu, Dyson, Cloud Nine, Shark, ghd.

The user asked that competitor descriptions remain substantial and credible,
with genuine strengths and believable drawbacks. They did not want arbitrary
technical attacks or reduced content length.

### Manual JSX formatting

The user wanted descriptions, pros, and cons in real paragraph and list markup
so they could manually bold, underline, or format content. The Best Hair Dryer
copy was moved into `bestHairDryerProductContent.tsx`. No formatting parser was
added.

### Ranking ribbons

The user supplied a reference ribbon and requested rank badges for all five
Best Hair Dryer cards. The badge needed to remain at the top-left card corner,
center its number, avoid a visible curved artifact, and use a stronger
three-dimensional treatment for number one. Several iterations confused card
scrolling with viewport-fixed behavior. Future work must inspect the current
implementation before changing this area.

### Attachment comparison

The user supplied exact Muuhu, Dyson, Shark, Cloud Nine, and ghd attachment
assets. They first considered a bordered panel, then chose a plain table-style
presentation:

- one horizontal row
- seven equal columns
- individual names under each included attachment
- blank cells for unavailable competitor slots
- no "Not available" text in the final chosen treatment
- no extra background section

An additional two-free-attachment idea was implemented and then removed in a
later approved Git commit because the attachments were unsupported. Current
source must remain the authority.

### Final media changes

The top comparison artwork and verdict media were replaced with user-supplied
assets over several iterations. The current committed paths are listed above.
Do not infer from an old local source path under the separate `hair Dryer`
asset folder; use the current public asset path in this repository.

### Later cross-page analysis for Naman

The user later asked for discussion and analysis only: compare the twelve older
hair pages with the latest Best Hair Dryer page and produce a detailed prompt
for Naman, who works on a different live code structure. The user explicitly
forbade code changes in that task and asked the prompt to focus on public data,
images, links, route paths, and page behavior rather than this repository's
internal file structure. That instruction is important whenever the output is
a handoff prompt rather than an implementation.

## Verification Commands For Future Hair Tasks

From repository root:

```text
pnpm --filter @trustpilotreview/site typecheck
pnpm --filter @trustpilotreview/site lint
pnpm --filter @trustpilotreview/site build
pnpm verify:parity
```

For route or visual changes:

1. Verify every affected route returns 200 locally.
2. Verify obsolete slugs redirect once to the current slug.
3. Verify desktop and phone screenshots.
4. Verify no horizontal overflow.
5. Verify sticky CTA behavior.
6. Verify Muuhu official links and all competitor affiliate links.
7. Verify images and the verdict video return successfully.
8. Verify the homepage cards point to every intended route.
9. Verify no LED-mask/Buudy route was unintentionally changed.

## Task Ledger

### 30 July 2026: Repository freshness reconciliation and context installation

#### User request

The user asked Codex to update itself across the entire `New folder` workspace,
especially this repository. The user established a permanent hard rule that
the complete context file must be read before every task and updated after every
task. The user explicitly said the record must not be reduced to a summary. It
must contain the task meaning, the user's behavior and expectations, errors,
corrections, and enough implementation detail to stop old mistakes recurring.

#### Starting state

- Local branch: `main`
- Local HEAD: `71b4f15`
- Upstream: `origin/main`
- Local worktree: clean
- Remote difference: local was behind by eight commits

#### Actions performed

1. Read the repository `DESIGN.md` and `PRODUCT.md`.
2. Read the complete legacy business context in
   `trustpilot-led-mask-replica\CONTEXT.md`.
3. Fetched remotes across the workspace.
4. Confirmed this repository had no local edits that a pull could overwrite.
5. Ran `git pull --ff-only`.
6. Fast-forwarded from `71b4f15` to `f1edd57`.
7. Inspected all eight incoming commit hashes, dates, subjects, file stats, and
   the current hair data, route set, product order, assets, links, attachment
   tables, homepage guide mapping, redirects, and source architecture.
8. Added this `CONTEXT.md` and the repository `AGENTS.md`.

#### Mistake being prevented

Earlier work sometimes resumed from the assistant's last remembered state. That
approach had already overwritten a newer user-created top-five image and missed
manual affiliate/data updates. The fix is procedural: every task begins with a
full context read and Git reconciliation, and every task ends with an
append-only detailed record.

#### Application changes

No application code, visible frontend, copy, route, image, video, product data,
affiliate link, official link, SEO field, tracking integration, or deployment
configuration was intentionally changed by this context task.

#### Final state before verification

- Branch: `main`
- HEAD: `f1edd57`
- Upstream relationship after fast-forward: synchronized
- No commit created by Codex
- No push
- No branch
- No pull request
- No Vercel deployment or production promotion

#### Final verification at 2026-07-30 19:43:15 +05:30

After the protocol files were written, the complete workspace and repository
instruction and context files were read again from start to finish. The
repository audit then confirmed:

- Branch: `main`
- HEAD: `f1edd57f21f1bf62edb00d5d3af122cc9f169866`
- Upstream: `origin/main` at the same commit
- Ahead/behind: `0/0`
- Existing tracked file changes: none
- Staged changes: none
- Untracked files created by this task:
  - `AGENTS.md`
  - `CONTEXT.md`

No application file was changed. No hair page, homepage section, legacy route,
redirect, product record, description, Pros/Cons markup, attachment table,
image, video, favicon, CTA, affiliate URL, official Muuhu URL, metadata,
tracking script, popup, footer, or responsive rule was changed.

Lint, type checking, production build, route smoke tests, and visual screenshots
were not run because the task was limited to Git reconciliation and durable
documentation. The verification performed was the relevant one for this task:
all four context/rule files exist, all were read completely, the remote and
local commit match, and the only repository changes are the two new untracked
documentation files.

No commit, push, branch, pull request, Vercel deployment, production promotion,
or deployment-setting change occurred.
## 2026-07-31 19:06:17 +05:30 - Grounding-sheet competitor order and five visual page concepts (research/render-only task)

### Repository and Git state
- Target future publication repository: `E:\1st YEAR DTU\New folder\trustpilotreview-shop`.
- Related product source repository inspected: `E:\1st YEAR DTU\New folder\Juujo-Vercel` for the current Juujo product, asset, offer, and brand facts.
- TrustpilotReview branch: `main`.
- TrustpilotReview HEAD: `b18aaf4140f841574c14c2bc637ac8cf6c31e047`.
- TrustpilotReview upstream: `origin/main` at the identical commit; ahead/behind `0/0`; the worktree was clean before this context-only append.
- Juujo branch: `main`.
- Juujo HEAD: `4d4265e2ccd98eb4f905f9cab506c51d867bed69`.
- Juujo upstream: `origin/main` at the identical commit; ahead/behind `0/0`; the worktree was clean and remained untouched.
- Remote references had already been fetched and reconciled during this continuing research task. No pull, merge, rebase, reset, stash, branch creation, commit, push, PR, or deployment occurred.

### User request and practical meaning
- The user fixed the future comparison order at `#1 Juujo` and `#2 Terra` and asked for a fresh decision about the remaining places using Earthbound, GroundingWell, GroundLuxe, and Premium Grounding.
- The user explicitly stated that the page is a commercial comparison funnel intended to make Juujo the most persuasive choice, but it must achieve this psychologically through wording and product comparison without looking openly biased.
- The immediate paid-search priority is the Juujo fitted grounding sheet for the US query `Best Grounding Sheets`; future product pages may exist, but the fitted-sheet page must guide this decision.
- The user corrected the Juujo material specification to `90% organic cotton / 10% conductive silver`. This newest explicit correction supersedes any older context that stated `95% cotton / 5% silver`; the old value must not be resurrected.
- The user asked whether Premium Grounding could credibly remain at #5 despite having a strong product and whether the future page should copy the current Best Hair Dryer design or one of the grounding advertorial examples.
- The user asked for five visual design renders and explicitly prohibited application code changes or page implementation at this stage.

### Files, routes, and sources inspected
- Governing files read in full before the research: workspace `AGENTS.md`, workspace `CONTEXT.md`, TrustpilotReview `AGENTS.md`, TrustpilotReview `CONTEXT.md`, TrustpilotReview `DESIGN.md`, Juujo `AGENTS.md`, Juujo `DESIGN.md`, and Juujo `PRODUCT.md`.
- Current repositories were reconciled with Git before any recommendation.
- Juujo product reference image used only as a visual input to the mockups: `E:\1st YEAR DTU\New folder\Juujo-Vercel\apps\us\public\media\products\grounding-sheets\images\juujo-fitted-sheet-main-new.jpg`.
- Live/current commercial sources rechecked during this turn included:
  - `https://grounding.juujo.com/products/grounding-fitted-sheets`
  - `https://thegrounding.co/products/the-terra-grounding-bed-sheet`
  - `https://groundluxe.com/products/fitted-grounding-sheet`
  - `https://www.groundingwell.com/products/groundingwell-fitted-sheet`
  - `https://premiumgrounding.com/products/grounding-earthing-sheet`
  - `https://tryearthbound.com/collections/grounding-bed-sheet`
- The live refresh established that Earthbound now again lists a fitted silver/cotton grounding sheet, but its collection and brand narrative strongly steer shoppers toward its carbon-fibre mattress pad as the preferred durable solution. Therefore the earlier reason `Earthbound has an empty grounding-sheet collection` is no longer current and must not be repeated.

### Final recommended comparison order
1. `Juujo Grounding Fitted Sheet`.
2. `Terra Grounding Bed Sheet`.
3. `GroundLuxe Fitted Grounding Sheet`.
4. `GroundingWell Fitted Sheet`.
5. `Premium Grounding Sheet`.
- `Earthbound` is excluded from the five-product fitted-sheet comparison. The current reason is product-positioning mismatch, not absence: Earthbound sells a fitted sheet but actively positions a carbon mattress pad as its more durable flagship and argues against long-term silver-sheet durability. Including it would pull the comparison into a different technology/format debate and make the fitted-sheet page less coherent.
- `GroundLuxe` belongs at #3 because it is the strongest like-for-like specification rival: fitted format, organic-cotton positioning, 10% silver, 400 thread count, six US sizes, included 15-foot cord and outlet tester, and a current price near Juujo. Keeping this credible rival high makes the ranking less contrived. Juujo's legitimate winning angles are the longer 120-night trial, seven US sizes, current $169 price, and balanced fitted-sheet proposition. Never falsely say GroundLuxe has less silver than Juujo.
- `GroundingWell` belongs at #4 because it is a direct fitted alternative with three colours, organic cotton, 5% silver, a 90-day guarantee, and a price around $179.90. Juujo's factual differentiation is 10% versus 5% silver, seven US sizes, a longer 120-night trial, and a lower current price. GroundingWell must still receive genuine pros for fitted convenience, organic-cotton feel, colour choice, and its established offer.
- `Premium Grounding` belongs at #5 even though it is a strong product because it is a different format and price tier: a flat under-sheet using 30% 316L stainless-steel fibre, a roughly $245 price, 90-day trial, and strong three-year warranty. Its durability and warranty must be acknowledged as real strengths. Juujo can win for shoppers specifically seeking a familiar fitted sheet, direct everyday setup, seven US fitted sizes, lower entry price, and longer trial. Do not claim that 10% silver is categorically more conductive or technically superior to 30% stainless steel; they are different constructions and cannot be compared by percentage alone.

### Recommended design direction
- The preferred future layout is the generated `Option 3 - Recommended Hybrid`, not a verbatim copy of either the current Best Hair Dryer page or the supplied grounding advertorials.
- Above the fold should use the direct decision speed of the supplied high-converting advertorial examples: clear query-matching headline, `Advertisement` disclosure, current update date, five-product overview, and an early factual quick verdict/CTA.
- The rest of the page should use the detailed editorial depth of the approved Best Hair Dryer structure: transparent methodology/source note, at least ten comparison criteria, a factual comparison table, detailed ranked product sections, readable descriptions, metrics only when grounded in comparable evidence, stacked Pros and Cons, final verdict, disclosure, footer, and mobile CTA.
- Audience requirements for US shoppers aged 40+ include larger readable body type, high contrast, obvious controls, calm spacing, minimal visual clutter, and plain language. Aggressive countdowns, fake scarcity, fabricated scores, doctors, laboratory scenes, medical claims, disease or pain claims, and unsupported sleep-result promises must not be used.
- The persuasion mechanism should be cumulative evidence: fitted format, material mix, US size coverage, trial period, price/value, care, mattress fit, included setup items, warranty/returns, and brand transparency. Juujo should look like the best balance, not the winner of invented technical tests.

### Visual renders created
- Five preview-only bitmap mockups were generated with the built-in image generation tool. No mockup was copied into either application repository and no application referenced these files.
- Option 1, long-form Best Hair Dryer-style editorial: `C:\Users\sahil\.codex\generated_images\019f84c5-2b7e-7450-8ac2-5d968c45e9b7\exec-2b7bc912-3ec1-4dd5-b9d4-8a0f735fa159.png`.
- Option 2, fast-scan paid-search advertorial: `C:\Users\sahil\.codex\generated_images\019f84c5-2b7e-7450-8ac2-5d968c45e9b7\exec-6e182ff0-befe-4483-82b6-4d7875302d77.png`.
- Option 3, recommended hybrid conversion/editorial structure: `C:\Users\sahil\.codex\generated_images\019f84c5-2b7e-7450-8ac2-5d968c45e9b7\exec-a413edec-cc91-42a4-a994-4c9640103fb3.png`.
- Option 4, premium magazine/editorial structure: `C:\Users\sahil\.codex\generated_images\019f84c5-2b7e-7450-8ac2-5d968c45e9b7\exec-3efbf0fa-14f7-4c8b-9840-af88cf1cd2b7.png`.
- Option 5, comparison-matrix-first structure: `C:\Users\sahil\.codex\generated_images\019f84c5-2b7e-7450-8ac2-5d968c45e9b7\exec-088d99a6-e1a0-40ce-8f22-5b897cbb8b41.png`.
- These renders are layout concepts, not approved factual content. Image-generation output introduced placeholder competitor imagery and, in some options, incorrect competitor prices, materials, trial terms, scores, or CTA labels. None of those generated details may be copied into the future page. The implementation must use a separately verified competitor fact sheet and the current official source URLs.

### Mistakes and corrections recorded for future work
- Older research treated Earthbound's sheet collection as empty. The current live collection now lists a fitted sheet at a sale price and must be described accurately. Earthbound remains excluded only because its flagship carbon mattress-pad positioning makes it a less coherent fitted-sheet comparator.
- Image generation cannot be trusted for exact commercial facts. Several renders visually invented competitor specifications or altered prices. The correct lesson is to use the render only for hierarchy, density, colour, and section order; factual page data must be manually sourced and verified.
- The user does not want transparently weak competitors merely to make Juujo win. A credible strong rival such as GroundLuxe should remain high so Juujo's longer trial, broader size range, fitted convenience, and value create the win legitimately.
- Premium Grounding must not be attacked as a bad product. It should be framed as a strong, durable, higher-priced stainless-steel flat under-sheet that suits a different buyer. Its placement at #5 is about fit with the query and everyday fitted-sheet preference, not an invented quality failure.

### Verification and protected areas
- No source code, route, asset, metadata, link, page content, product data, or deployment configuration was changed.
- No lint, typecheck, build, screenshot regression, or route test was required because this was explicitly a research-and-render task with no application implementation.
- The five generated render outputs were displayed inline for user selection.
- The only file changed was this append-only context record, plus the workspace context record required by the workspace rules.
- No commit, push, branch creation, PR, Vercel action, or production deployment occurred.
- Remaining follow-up: the user must choose a visual option before implementation. Once chosen, competitor facts, prices, returns, warranties, formats, materials, sizes, image rights, and outbound links must be refreshed again immediately before page creation because commercial offers change.

## 2026-07-31 20:12:37 +05:30 - Grounding-sheet price strategy, conversion architecture, and second visual-render task

### Repository, branch, HEAD, and upstream state
- The future comparison-page repository is `E:\1st YEAR DTU\New folder\trustpilotreview-shop` on branch `main` at HEAD `b18aaf4140f841574c14c2bc637ac8cf6c31e047` with upstream `origin/main` and ahead/behind `0/0`.
- The related product source repository is `E:\1st YEAR DTU\New folder\Juujo-Vercel` on branch `main` at HEAD `4d4265e2ccd98eb4f905f9cab506c51d867bed69` with upstream `origin/main` and ahead/behind `0/0`.
- The TrustpilotReview worktree already showed only `CONTEXT.md` modified because the mandatory append-only record from the immediately preceding research task had not been committed. The Juujo worktree was clean. No application change was present or introduced.

### User request and practical meaning
- The user confirmed the five-product ranking as `#1 Juujo`, `#2 Terra`, `#3 GroundLuxe`, `#4 GroundingWell`, and `#5 Premium Grounding`.
- The user corrected the planned Juujo entry price to `$99` for the lowest `Single` size and explicitly requires prices on the future Best Grounding Sheets page. The practical requirement is to compare the lowest available size for every product and label that basis clearly enough that the comparison is not mistaken for equal mattress sizes.
- The user requires the future page to foreground Juujo's complete deal: three included gifts consisting of Premium Packaging, Grounding Mat, and Sleep Monitoring App, with the currently stated combined gift value of `$208`.
- The user wants a verdict section comparable to the expert/doctor-style verdict used on other review pages, maximum outbound click-through to Juujo, a design suitable for US shoppers aged 40+, and five additional visual concepts before any code is touched.
- This task was research, strategy, and render generation only. Source code, route creation, page implementation, assets, links, SEO, tracking, and deployment were strictly protected.

### Verified lowest-size price ladder
- `#1 Juujo Grounding Fitted Sheet`: planned current entry price `$99`, size basis `Single`, supplied as the newest explicit correction by the user.
- `#2 Terra Grounding Bed Sheet`: `From $109.95`, size basis `Single`. The official product page's selected state can show a higher size price, so the lowest variant price was confirmed from the product's Shopify variant endpoint.
- `#3 GroundLuxe Fitted Grounding Sheet`: `From $129.95`, size basis `Twin`. The official page can show a higher selected colour and size price, so the lowest live variant was confirmed separately.
- `#4 GroundingWell Fitted Sheet`: `From $149.90`, size basis `Twin`, confirmed from the official product variants.
- `#5 Premium Grounding Sheet`: `From $207`, size basis `Single/Twin`, confirmed from the official product variants. Its selected page state can show `$247` for a larger size.
- The future overview must say `From` and show the associated size, for example `From $129.95 - Twin`. It must never compare Juujo Single against a competitor Queen price without disclosing size. This clear ascending price ladder is a genuine Juujo advantage and should be visible rather than hidden.

### Product facts and official sources checked
- Juujo's newest approved construction remains `90% cotton / 10% conductive silver`, with seven US sizes and a 120-night trial. The older `95% / 5%` statement is obsolete and must not return.
- Terra's official source is `https://thegrounding.co/products/the-terra-grounding-bed-sheet`. Current source details checked included its size variants, 95% cotton / 5% silver positioning, and 30-night guarantee.
- GroundLuxe's official source is `https://groundluxe.com/products/fitted-grounding-sheet`. Current source details checked included its Twin entry price, fitted format, 10% silver positioning, 400 thread count, 14-inch pocket, 15-foot cord, outlet tester, and 60-day return window.
- GroundingWell's official source is `https://www.groundingwell.com/products/groundingwell-fitted-sheet`. Current source details checked included the Twin entry price, 95% cotton / 5% silver positioning, fitted format, and 90-day guarantee.
- Premium Grounding's official source is `https://premiumgrounding.com/products/grounding-earthing-sheet`. Current source details checked included the Single/Twin entry price, flat under-sheet format, 30% 316L stainless-steel fibre positioning, and its premium price tier.
- Market-structure references included `https://consumerschoice.co/grounding-sheets/` and `https://www.nbcnews.com/select/shopping/grounding-sheets-rcna214127`. ConsumersChoice demonstrates the common paid-search structure of a fast Top 5 answer followed by an expanded #1 explanation. NBC Select demonstrates a more credible buyer framework around construction, silver-thread content, thread count, weave, and evidence limitations.

### Conversion and audience decisions
- US shoppers aged 40+ should not be treated as people who refuse to read. They scan first and read selectively when the page earns trust. The correct page therefore needs a fast first-screen answer, visible prices, a short verdict, readable 18-20px body copy, high contrast, short paragraphs, clear bullets, and optional deeper reviews below.
- Prices should be shown because Juujo has the lowest transparent entry price and because a labelled price ladder reduces decision effort. Hiding price would remove a real advantage and force users to click merely to learn whether Juujo is affordable.
- The three gifts should appear immediately below the expanded Juujo #1 block, not be buried near the footer. Wording should be transparent, such as `3 included gifts - stated value $208`. False urgency such as `today only` must not be introduced unless it is operationally true.
- The site should preserve the existing TrustpilotReview editorial palette and typography. Recolouring the whole page into Juujo's seller-store theme would make the comparison look owned and reduce credibility. Juujo dark green and pale green should be used selectively for the winner border, No. 1 label, gift strip, and outbound CTA.
- A `Doctor's Verdict` must not be fabricated. That label is appropriate only if a real licensed clinician reviews and approves the wording, supplies verifiable credentials, and consents to the endorsement. Without that evidence, the approved safe equivalent is `Expert Buying Verdict` or `Sleep & Wellness Editor's Verdict`. The verdict may discuss setup, evidence limits, fitted-sheet practicality, value, and buyer fit; it must not claim that Juujo treats sleep disorders, back pain, inflammation, or disease.

### Why the default Best Hair Dryer page should not be copied exactly
- Five large product photos are useful for visibly different appliances but waste space for grounding sheets that look nearly identical. A compact ranking strip and factual table communicate differences faster.
- Hair-dryer attachment rows, performance bars, and styling metrics do not map naturally to grounding sheets. Reusing them would invite invented scoring and make the page look templated rather than researched.
- Five long product cards before the deal would delay the strongest Juujo information: `$99`, 90% cotton / 10% silver, fitted format, seven sizes, 120-night trial, and three gifts.
- The useful parts of the existing advertorial system should remain: emerald masthead, editor/verdict card, transparent comparison criteria, readable ranked reviews, stacked Pros and Cons, final verdict, disclosure, footer, and mobile sticky CTA.

### Recommended final hybrid page architecture
1. Existing emerald masthead, `Advertisement` disclosure, current date, and query-matching `Best Grounding Sheets in the USA` headline.
2. Compact five-product ranking strip with rank, product name, lowest `From` price, lowest size, one-line buyer fit, and CTA.
3. Expanded #1 Juujo block with one real fitted-sheet image, `$99 Single`, approved construction, seven sizes, 120-night trial, concise pros, and a strong `Check Availability` CTA.
4. Three-gift strip showing Premium Packaging, Grounding Mat, and Sleep Monitoring App with the transparent `$208 stated value` wording.
5. Real clinician verdict only if documented; otherwise an `Expert Buying Verdict` explaining why Juujo is the best-value fitted choice while acknowledging evidence limits.
6. Ten-factor methodology covering price basis, material composition, fitted versus flat format, mattress fit, size coverage, setup kit, cable/outlet checking, care, trial/returns, warranty, and claim transparency.
7. Simple high-contrast comparison table, followed by detailed competitor sections with genuine strengths and buyer-specific limitations.
8. Final verdict, disclosure, footer, and restrained sticky CTA. No fake countdown, laboratory score, review count, doctor identity, medical outcome, or unverifiable star rating.

### Five new visual renders created
- Option 1, premium editorial deal-first: `C:\Users\sahil\.codex\generated_images\019f84c5-2b7e-7450-8ac2-5d968c45e9b7\exec-b1cccf43-d903-441e-a0d7-24c46b4d5718.png`.
- Option 2, scan-first decision board: `C:\Users\sahil\.codex\generated_images\019f84c5-2b7e-7450-8ac2-5d968c45e9b7\exec-9498bc54-edc6-4e86-88e3-1d9517d5955d.png`.
- Option 3, trust-led expert verdict: `C:\Users\sahil\.codex\generated_images\019f84c5-2b7e-7450-8ac2-5d968c45e9b7\exec-e0ede276-c028-4a19-81c9-5cac10e9c97e.png`.
- Option 4, offer-first editorial: `C:\Users\sahil\.codex\generated_images\019f84c5-2b7e-7450-8ac2-5d968c45e9b7\exec-e50fcf63-0f17-49ab-a6b8-87c77d3c1d5d.png`.
- Option 5, guided recommendation: `C:\Users\sahil\.codex\generated_images\019f84c5-2b7e-7450-8ac2-5d968c45e9b7\exec-2e9c4ef7-b6dc-40df-9cf5-aa7e583a42e9.png`.
- The recommended direction is the opening and expanded #1 treatment from Option 4 combined with the compact comparison table, expert-verdict placement, and lower-page scanning behaviour from Option 2.
- These images are composition references only. The image generator introduced inaccurate competitor materials, prices, trials, and placeholder copy in portions of Options 1 and 4 despite explicit factual constraints. No text inside any generated render is approved source material. Final implementation must use the verified fact sheet above and refresh every commercial value immediately before publication.

### Mistakes and safeguards
- Earlier concepts underplayed Juujo's gift offer and did not consistently use the user-corrected `$99 Single` entry price. This was corrected by making price and gifts central to the recommended architecture.
- Earlier visual concepts devoted too much room to five similar sheet images. The corrected approach uses only one meaningful image in the expanded Juujo recommendation and relies on rank, price, format, material, trial, and gift data for the Top 5 overview.
- Generated visual text is not reliable. The page must never inherit a generated price, percentage, trial, score, review count, or warranty without direct source verification.
- Persuasion must come from selection and truthful framing, not false claims. Strong competitor pros should remain visible so Juujo's value, fitted convenience, seven sizes, and trial create a believable conclusion.

### Verification, unchanged areas, and publishing actions
- Research was performed against official product pages and variant data. The five render files were produced outside both repositories and displayed for design selection.
- No application source file, public asset, route, metadata field, product fact, link, tracking integration, or deployment configuration was changed.
- No lint, typecheck, build, route smoke test, or screenshot regression was appropriate because implementation was explicitly forbidden.
- Git state after the task remained Juujo clean at `0/0`; TrustpilotReview remained `0/0` with only its append-only `CONTEXT.md` modified.
- No commit, push, branch, pull request, Vercel action, or deployment occurred.
- Remaining uncertainty: Juujo's `$99` price is a planned newest correction and must be confirmed live before publication. Competitor prices, materials, trial periods, returns, warranties, and gift values must also be refreshed immediately before the future page is built.
## 2026-07-31 23:45:07 +05:30 - Third grounding-page design pass based on ConsumerChoice structure and locked TrustpilotReview styling

### Repository, branch, HEAD, and upstream state
- The target future landing-page repository was `E:\1st YEAR DTU\New folder\trustpilotreview-shop` on branch `main` at HEAD `b18aaf4140f841574c14c2bc637ac8cf6c31e047`.
- Upstream was `origin/main` at the same commit and ahead/behind was `0/0` after fetching and reconciling current state.
- Before this design-only task the worktree already contained only `CONTEXT.md` modified by the mandatory append-only history from the preceding grounding research and render tasks. That user-required historical change was preserved.
- The related product repository `E:\1st YEAR DTU\New folder\Juujo-Vercel` remained on clean `main` at HEAD/upstream `4d4265e2ccd98eb4f905f9cab506c51d867bed69`, ahead/behind `0/0`.

### User request and practical meaning
- The user rejected relying on the earlier generated visual directions and requested five entirely new full-page renders based on the high-converting ranking structure visible at `https://consumerschoice.co/grounding-sheets/`.
- The future page must visually remain a TrustpilotReview editorial property, not a Juujo seller page. The TrustpilotReview emerald masthead, white and light-slate body, dark navy/slate text, serif editorial headings, green positive treatments, red limitation treatments, and restrained winner emphasis are therefore locked.
- The ConsumerChoice reference is a structure reference only: concise opening, direct methodology, rapidly scannable stacked Top 5 rows, a visibly stronger No. 1 card, factual price/action panel, then a deeper No. 1 explanation. Its orange CTA colour, publisher styling, medical claims, invented scores, testimonials, and unsupported authority cues must not be copied.
- The user explicitly removed the existing Top 5 collage/banner image from the planned opening. The page must start with the headline and editorial introduction, not a composite product strip.
- The editor/expert presentation should follow the established hair-dryer editorial hierarchy. The safe implementation shown in the renders uses a `Grounding Bedding Editorial Review` card near the introduction and a `Sleep & Wellness Editor's Verdict` near the bottom. It deliberately does not invent a named doctor or clinician.
- A customer-video section must remain the final substantive section before the disclosure/footer and use the supplied vertical video from `E:\1st YEAR DTU\New folder\Bedsheets\Grounding Sheets Videos\ssstik.io_@catgue20_1784119135138.mp4`.
- This task was strictly design rendering and research. No route, React component, data file, image asset, video asset, public file, metadata, CTA URL, tracking code, sitemap, or production setting was permitted to change.

### Locked ranking, prices, and content represented in the renders
- Rank order remains `#1 Juujo Grounding Fitted Sheet`, `#2 Terra Grounding Bed Sheet`, `#3 GroundLuxe Fitted Grounding Sheet`, `#4 GroundingWell Fitted Sheet`, and `#5 Premium Grounding Sheet`.
- Juujo is displayed at `$99` for `Single`, with seven fitted sizes, `90% cotton / 10% conductive silver`, and a 120-night trial.
- Terra is displayed at `$109.95` for `Single` and is positioned as the closest price challenger.
- GroundLuxe is displayed at `$129.95` for `Twin` and is positioned as the premium-presentation fitted competitor.
- GroundingWell is displayed at `$149.90` for `Twin` and is positioned as the minimalist fitted-sheet choice.
- Premium Grounding is displayed at `$207` for `Single / Twin` and is explicitly presented as a flat under-sheet rather than a fitted sheet.
- Every price is paired with its entry size to prevent a misleading cross-size comparison. The renders do not place an unlabeled Juujo Single price beside a competitor Queen price.
- The Juujo expanded block shows the three-item offer as Premium Packaging, Grounding Mat, and Sleep Monitoring App with the transparent `$208 gift bundle` wording. No false countdown, today-only language, crossed-out price, fabricated stock message, or invented review count was introduced.
- The methodology includes ten visible factors: fitted-sheet security and depth, cotton and conductive silver blend, smallest-size entry price, available US mattress sizes, trial and return window, cord and outlet setup clarity, care and washing instructions, comfort for nightly use, what arrives in the box, and overall value for the price.

### Official and supplied assets inspected for the design pass
- The current Juujo fitted-sheet main image used as a layout reference came from `E:\1st YEAR DTU\New folder\Juujo-Vercel\apps\us\public\media\products\grounding-sheets\images\juujo-fitted-sheet-main-new.jpg`.
- The user-supplied Juujo 120-night visual used in the trial section came from `E:\1st YEAR DTU\New folder\Bedsheets\Grounding Sheets\ChatGPT Image Jul 8, 2026, 06_00_52 PM.png`.
- The supplied customer video was inspected with `ffprobe`; it is a portrait `576x1024` MP4 with a duration of approximately `214.109` seconds and file size of approximately `46.27 MB`. A poster frame was extracted outside the repositories solely for the renders.
- Terra's official Shopify product endpoint was inspected. The clean grey folded-sheet image `graylinen3_png-min.png` was selected for the concept instead of claim-heavy graphics, fabricated doctor artwork, medical-condition artwork, or UGC portraits.
- GroundLuxe's clean official packshot with sheet, cord, tester, and composition labels was used as a layout reference.
- GroundingWell's simple white fitted-sheet bedroom image was used as a layout reference.
- Premium Grounding's neutral grey flat under-sheet bedroom image was used as a layout reference.
- No competitor image was copied into the TrustpilotReview repository during this task. All downloaded reference copies stayed under `C:\Users\sahil\.codex\visualizations\grounding-sheet-renders`.

### Five new full-page render directions
- Option 1 is the closest ConsumerChoice-to-Trustpilot hybrid. It uses a centred emerald masthead, two introductory paragraphs, the editorial review card, ten criteria, five compact ranked rows, a deeper Juujo explanation, 120-night section, editor verdict, customer video, and disclosure. This is the strongest direct continuation of the user's reference request.
- Option 2 increases readability for the 40+ audience. It uses a left-aligned darker emerald masthead, taller ranking rows, larger product imagery, and more breathing room while preserving the same factual sequence.
- Option 3 is the most data-first version. It places a compact comparison table before the five ranked cards and reduces card height so price, size, format, and buyer fit can be understood quickly.
- Option 4 is the strongest conversion-first version. The expanded Juujo recommendation and 120-night reassurance appear immediately after the editorial introduction, followed by methodology and only the four competitor rows. This produces the earliest justified Juujo click opportunity while still showing the full comparison lower down.
- Option 5 is the strongest editorial-confidence version. It shows the methodology first, expands Juujo, then uses a comparison table and four compact competitor rows. It reads more like a publisher's considered recommendation and less like a direct-response advertorial.
- All five options retain the final customer-video section. The video is shown in its original portrait orientation rather than cropped into a landscape frame.

### Render artifacts created outside the repository
- The standalone mockup source was created outside both repositories at `C:\Users\sahil\.codex\visualizations\2026\07\21\019f84c5-2b7e-7450-8ac2-5d968c45e9b7\grounding-page-concepts.html`.
- Option 1 screenshot: `C:\Users\sahil\.codex\visualizations\2026\07\21\019f84c5-2b7e-7450-8ac2-5d968c45e9b7\grounding-sheets-concept-1.png`.
- Option 2 screenshot: `C:\Users\sahil\.codex\visualizations\2026\07\21\019f84c5-2b7e-7450-8ac2-5d968c45e9b7\grounding-sheets-concept-2.png`.
- Option 3 screenshot: `C:\Users\sahil\.codex\visualizations\2026\07\21\019f84c5-2b7e-7450-8ac2-5d968c45e9b7\grounding-sheets-concept-3.png`.
- Option 4 screenshot: `C:\Users\sahil\.codex\visualizations\2026\07\21\019f84c5-2b7e-7450-8ac2-5d968c45e9b7\grounding-sheets-concept-4.png`.
- Option 5 screenshot: `C:\Users\sahil\.codex\visualizations\2026\07\21\019f84c5-2b7e-7450-8ac2-5d968c45e9b7\grounding-sheets-concept-5.png`.
- The poster frame extracted for the video treatment is `C:\Users\sahil\.codex\visualizations\2026\07\21\019f84c5-2b7e-7450-8ac2-5d968c45e9b7\juujo-grounding-sheet-review-video-poster.jpg`.

### Recommendation and rationale
- Option 4 is the recommended conversion architecture for the stated business objective because it earns a Juujo recommendation with the introduction and editorial disclosure, then exposes the strongest factual Juujo differentiators and availability CTA before asking the visitor to process four similar-looking alternatives.
- Option 1 is the recommended fallback if the user wants the closest structural resemblance to the supplied ConsumerChoice page and the most obviously balanced Top 5 presentation.
- The most effective final implementation can use Option 4's early expanded Juujo block and Option 1's compact five-row ranking treatment. The user should explicitly choose whether the No. 1 row should appear twice, once in the Top 5 summary and again as the expanded review, or only once as the expanded early recommendation.

### Mistakes avoided and safeguards retained
- Earlier AI-generated concept images contained inaccurate or placeholder product facts. This pass used deterministic browser-rendered mockups with the fixed ranking, labelled prices, current Juujo composition, current gift names, and current trial duration so the design can be evaluated without generated text corruption.
- Claim-heavy Terra reference graphics included doctor-recommended language, disease claims, and unsupported treatment language. Those graphics were inspected but not used; a clean official folded-sheet image was selected instead.
- The user allowed a doctor-style verdict, but no real clinician identity, credentials, consent, or approved wording were supplied. The renders therefore use an editor verdict rather than fabricating a doctor.
- The video itself contains customer wording that may require a later advertising-policy and rights review. The design pass does not claim that the video proves sleep, pain, inflammation, or medical outcomes.
- The trial image contains its own visible marketing wording. Before production use, its exact claims and usage rights still require confirmation; using it in a render does not approve every word inside the asset.

### Verification, unchanged areas, and publishing actions
- Each option was opened from the standalone mockup in Chromium at a `1365x900` viewport and captured as a full-page PNG with Playwright.
- All five screenshots were visually inspected. Product images load, the five ranks and price-size labels are readable, the Juujo expanded section remains present, the 120-night supplied image is not cropped beyond its section treatment, the video remains portrait, and the TrustpilotReview colour and typography direction remains consistent.
- No mobile render was requested in this task. Responsive implementation and mobile screenshots remain future work after an option is approved.
- No application source file, public asset, route, metadata value, tracking script, link, image, video, sitemap entry, redirect, or deployment configuration was changed.
- No lint, typecheck, build, route smoke test, or screenshot regression against the live application was run because the user explicitly prohibited implementation.
- Git after the task remained `main` at HEAD/upstream `b18aaf4140f841574c14c2bc637ac8cf6c31e047`, ahead/behind `0/0`, with only this append-only `CONTEXT.md` history modified.
- No commit, push, branch creation, pull request, GitHub action, Vercel action, or deployment occurred.
- Remaining follow-up is the user's selection of one option or a precise hybrid. Immediately before implementation, all competitor prices, materials, formats, trials, returns, warranties, image rights, Juujo offer values, and outbound URLs must be refreshed from the current official sources.
