# Design System And Frontend Lock

## Non-Negotiable Migration Rule

The current production frontend is the source of truth. During the Next.js migration, do not change visible design, copy, SEO/GEO structure, images, links, tracking, scripts, popups, section order, colours, fonts, spacing, responsive behaviour, or CTA behaviour on any existing route.

If a change would alter the rendered page, metadata, schema, canonical, heading structure, image path, outbound URL, tracking event, or mobile layout, it needs a separate product/content approval before implementation.

## Direction

Mirror the live BestLedFaceMask UK comparison page: a committed emerald masthead, white editorial body, centred comparison imagery, a bordered expert card, spacious ranked-product sections, and clearly separated Pros, Cons, metrics, offers, and calls to action.

## Code Structure

- The public Next.js app lives in `apps/site`.
- Shared visual primitives live in `packages/ui`.
- Shared route, product, advertorial, guide-card, comparison, and SEO contracts live in `packages/shared`.
- Product-page data belongs in `apps/site/src/data`, grouped by product family.
- Product-specific React sections belong in `apps/site/src/features/<product-family>`.
- Old exported HTML files are parity snapshots only. Do not use them as the source for a new product page unless no React source exists and the route is being protected for ad safety.

## SEO And GEO Preservation

- Preserve titles, descriptions, canonicals, Open Graph tags, structured data, headings, visible copy, link anchors, robots rules, sitemap entries, and llms files exactly unless a separate SEO task approves edits.
- Keep the current HTML structure as the GEO reference pattern for future product pages.
- Do not rewrite approved copy for “better SEO” during technical migration work.
- Maintain crawler access rules from `robots.txt`, including AI/search crawler allowances and existing blocked crawlers.
- Page metadata should be copied from approved source pages before any code conversion begins.
- Product pages should use clean UK slugs and canonical URLs only after the route is approved.
- GEO-style sections should follow the existing proof rhythm: comparison criteria, ranked cards, buyer-fit explanation, clear verdict, disclosure, and crawler-visible FAQ or structured sections only when already approved for that product.

## Colour

- Primary emerald: use the exact reference implementation tokens.
- Canvas: tinted white and very light slate.
- Text: dark navy/slate rather than pure black.
- Positive: emerald tints.
- Negative: restrained red tints.
- Rating: warm amber.

## Typography

Preserve the reference page's existing display serif and sans-serif body pairing, including its responsive scale, line height, and heading hierarchy.

## Layout

- Wide green masthead with centred title, country, and update date.
- Comparison image strip before the expert card.
- Maximum reading width and section spacing copied from the reference.
- Product cards use a left media/price/CTA rail and right editorial detail rail on desktop.
- Mobile collapses to one column with a persistent bottom CTA.
- Pros and Cons follow the reference page's full-width stacked treatment.

## Components

- Masthead
- Comparison image strip
- Expert profile card
- Introductory copy and evaluation criteria
- Ranked product card
- Performance metrics
- Pros and Cons panels
- Winner gift offer
- Final recommendation
- Exit popup, chat, and tracking integrations

## Product Page Order

For a new best-product or comparison advertorial, keep this order unless the owner approves a visible change:

1. Emerald masthead with H1, country or market signal, and last-updated line.
2. White hero area with real product or comparison imagery.
3. Editorial reviewer card with non-medical role labels such as `Beauty Technology Editor` or `Editorial Review`.
4. Intro copy that explains what was compared.
5. Criteria/checklist section.
6. Ranked product cards or focused comparison cards.
7. Winner offer or gift bundle section only where the offer exists.
8. Final verdict with a clear first-click recommendation.
9. Disclosure and persistent mobile CTA.

## Product Data Rules

- Muuhu hair-dryer CTA URL: `https://uk.muuhu.com/products/muuhu-hair-dryer`.
- Muuhu hair gift URLs:
  - Premium Packaging: `https://uk.muuhu.com/pages/premium-packaging`
  - Muuhu Comb: `https://uk.muuhu.com/products/muuhu-comb`
  - Haircare E-book: `https://uk.muuhu.com/pages/haircare-ebook`
- Use existing local image paths first and keep public URLs stable, especially `/assets/...`, `/img/...`, `/videos/...`, and `/gallery/...`.
- Do not generate AI images for product pages unless the owner explicitly approves it.
- Use licensed or local editorial/stylist imagery for author visuals. Do not imply a real doctor or medical endorsement for beauty-device advertorials.

## Tracking And Advertising

- Preserve GTM, Microsoft consent mode, outbound failsafe scripts, chat widgets, conversion configs, affiliate URLs, URL parameter handling, and CTA timing.
- Never delay outbound navigation for animation, analytics retries, or UI transitions.
- Treat every current page as ad-sensitive until the owner explicitly marks it inactive.
- Do not rename existing CTA anchors, tracking script URLs, or public asset paths during technical migrations.
- Do not push to GitHub, commit locally, or deploy to Vercel unless the owner explicitly asks for that action.

## Future Product Page Checklist

- Reuse the approved section order and responsive layout from the current production HTML.
- Keep the same visual hierarchy, CTA placement, sticky mobile CTA pattern, rating treatment, comparison framing, and editorial proof sections.
- Use product-specific data and images only where the existing pattern expects those values.
- Verify page metadata, schema, crawler files, internal links, and CTA links before publishing.
- Run desktop and mobile screenshot comparison before replacing an existing live route.

## Motion

Use only the transitions already present in the approved reference. Respect reduced-motion preferences and never delay outbound navigation.
