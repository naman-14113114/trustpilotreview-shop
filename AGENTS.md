# TrustpilotReview Repository Rules

## Mandatory First Action

Before doing anything in this repository:

1. Read `E:\1st YEAR DTU\New folder\AGENTS.md` in full.
2. Read `E:\1st YEAR DTU\New folder\CONTEXT.md` in full.
3. Read this file in full.
4. Read `E:\1st YEAR DTU\New folder\trustpilotreview-shop\CONTEXT.md` in full.
5. Read `DESIGN.md` and `PRODUCT.md` when the task can affect frontend output,
   copy, product data, links, SEO, tracking, or responsive layout.

Do not use compressed chat memory as the source of truth.

## Freshness Audit Before Editing

The user and Naman both push to GitHub, and the user also edits through
Antigravity. Before every edit:

1. Run `git status --short --branch`.
2. Run `git remote -v`.
3. Fetch remote references.
4. Compare `HEAD` with `origin/main`.
5. Inspect the latest commits and every local change.
6. Confirm the current live route when the task concerns production output.

Never overwrite a newer local asset, manual copy edit, affiliate URL, route,
product order, or GitHub commit because an older assistant remembers a
different version.

If the worktree is dirty, identify the exact files and preserve them. If the
remote is ahead, inspect the incoming commits before deciding whether a
fast-forward is safe. If current state is ambiguous, tell the user the exact
last change found and ask whether that is the expected baseline.

## Scope Lock

- Work only in `trustpilotreview-shop` unless the user names another target.
- `trustpilot-led-mask-replica` is a reference and backup. Do not edit it while
  implementing TrustpilotReview changes.
- Do not touch Buudy/LED-mask routes when a task concerns hair pages, except a
  specifically approved shared homepage change.
- Do not change visible design, copy, images, videos, links, data, layout,
  colors, fonts, tracking, SEO, or responsive behavior outside the request.
- Do not rename stable public asset paths without explicit approval.
- Do not modify a competitor or guide page when the user says to change the
  Best Hair Dryer page only.
- Direct comparison pages must contain only the named products.
- No commit, push, branch, pull request, or Vercel deployment unless explicitly
  requested.

## Required Verification

Use the repository scripts appropriate to the change:

- `pnpm --filter @trustpilotreview/site typecheck`
- `pnpm --filter @trustpilotreview/site lint`
- `pnpm --filter @trustpilotreview/site build`
- `pnpm verify:parity` when legacy route parity is affected

For visible changes, inspect desktop and phone output. Verify links and image
paths. Do not claim completion when checks were not run.

## Mandatory Final Action

Before the final response, append a detailed entry to `CONTEXT.md`. Do not
rewrite, shorten, or summarize old entries. Record:

- user intent and protected scope
- starting and ending Git state
- inspected and changed files
- exact data, routes, asset paths, and links
- mistakes and corrections
- verification performed and skipped
- commit, push, branch, and deployment status

Never store secrets or PII in `CONTEXT.md`.

