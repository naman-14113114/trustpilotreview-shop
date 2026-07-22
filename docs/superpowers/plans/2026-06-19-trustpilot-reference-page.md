# Trustpilot UK Reference Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the production Trustpilot UK comparison route with the approved BestLedFaceMask UK presentation while preserving the current page at a noindex archive route.

**Architecture:** Keep the existing `app.html` and its assets as the immutable archive. Produce a domain-adapted build from the BestLedFaceMask UK source, publish that build as a separate production HTML/assets set, and route the two public paths independently through `vercel.json`. Trustpilot-specific metadata and integrations wrap the new build.

**Tech Stack:** Next.js/React source reference, static Vercel deployment, HTML, JavaScript, GTM, Microsoft UET, Tawk.

---

### Task 1: Preserve the current production artifact

**Files:**
- Create: `previous-app.html`
- Modify: `vercel.json`

- [ ] Copy `app.html` to `previous-app.html` without changing its bundled assets.
- [ ] Add `/best-led-face-mask-uk-2026-previous` rewrite to `previous-app.html`.
- [ ] Add `X-Robots-Tag: noindex, nofollow` for the archive route.
- [ ] Verify the archive returns HTTP 200 and is absent from `sitemap.xml`.

### Task 2: Create the native Trustpilot production build

**Files:**
- Create: production HTML and hashed assets generated from the approved reference source.
- Modify: `vercel.json`

- [ ] Build the UK advertorial from `best-led-face-mask-org` using its current UK market component.
- [ ] Replace reference-domain canonical, metadata, and analytics wiring with Trustpilot values.
- [ ] Retain the complete reference presentation and responsive behaviour.
- [ ] Point `/best-led-face-mask-uk-2026` to the new production HTML.

### Task 3: Preserve revenue integrations

**Files:**
- Reuse: `assets/buudy-outbound-failsafe-buudycouk-660.js`
- Reuse: current Microsoft consent, exit popup, and Tawk integration assets.

- [ ] Confirm every Buudy CTA targets `https://www.buudy.co.uk/products/buudy-led-mask`.
- [ ] Confirm outbound events include `buudy_outbound_click` and `affiliate_click` with INR 660.
- [ ] Confirm native anchor navigation is not delayed or prevented.
- [ ] Confirm the popup contains no `uk.buudy.com` destination.

### Task 4: Verify locally and in production

**Files:**
- Modify: route verification scripts only when their expectations are stale.

- [ ] Run the local preview server and verify production/archive routes.
- [ ] Capture desktop and mobile screenshots and compare with the live reference.
- [ ] Scan rendered text for mojibake and replacement characters.
- [ ] Validate console output, Tawk, images, CTA destinations, and tracking payloads.
- [ ] Deploy to the linked Trustpilot Vercel project.
- [ ] Repeat the full checks against the live URLs.
