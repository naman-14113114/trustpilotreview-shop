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
