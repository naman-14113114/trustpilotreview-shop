# Trustpilot UK Reference Page Design

## Goal

Preserve the current Trustpilot UK comparison page at a noindex archive URL and replace the production UK route with a native Trustpilot-hosted version of the live BestLedFaceMask UK page.

## Routes

- Production: `/best-led-face-mask-uk-2026`
- Previous version: `/best-led-face-mask-uk-2026-previous`

The previous version must remain accessible for rollback and visual comparison, but it must send `X-Robots-Tag: noindex, nofollow` and must not appear in the sitemap.

## Visual Source

The live page at `https://www.bestledfacemask.org/best-led-face-mask-uk-2026` is the complete visual source of truth. Copy its masthead, comparison strip, expert card, typography, spacing, product cards, Pros and Cons presentation, offers, final recommendation, and responsive behaviour.

## Trustpilot-Specific Behaviour

- Canonical and social metadata must remain on `trustpilotreview.shop`.
- Buudy links must remain `https://www.buudy.co.uk/products/buudy-led-mask`.
- Microsoft outbound conversions must retain INR 660.
- GTM, UET, Clarity-compatible dataLayer events, Tawk, and the current exit popup must remain functional.
- Native anchors must navigate immediately.
- No BestLedFaceMask canonical, analytics identity, or visible domain reference may leak into Trustpilot production.

## Verification

Validate desktop and mobile screenshots, all Buudy destination links, the archive route, noindex headers, page metadata, console errors, text encoding, Tawk loading, and outbound conversion payloads before production deployment.
