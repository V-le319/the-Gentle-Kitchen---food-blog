# 🍚 Gentle Kitchen

A minimalist food blog for home-comfort cooking, with a quiet Japanese-leaning, retro aesthetic.

**Live site:** [the-gentle-kitchen-foodblog.vercel.app](https://the-gentle-kitchen-foodblog.vercel.app)

## About

Gentle Kitchen is a content-first blog focused on simple, comforting recipes — no clutter, no vanity metrics (no view counts, no likes), just recipes and a place for readers to connect through comments.

## Tech Stack

- **[Astro](https://astro.build/)** — chosen over Next.js for better speed performance and SEO on content-heavy static pages
- **TypeScript**
- **[Supabase](https://supabase.com/)** — subscriber storage & backend
- **[CloudCannon](https://cloudcannon.com/)** — visual CMS for content editing, connected directly to this repo
- **Vercel** — hosting & deployment

## Features

- 📖 Recipe pages on individual routes
- 💬 Comment section for reader interaction
- 📬 Email subscribe form (Supabase-backed, with success/error states)
- 🎨 Client-editable content via CloudCannon (no CMS account needed for the client — shared via password-protected link)
- 🚫 No view/like counters — kept intentionally minimal

## CMS Workflow

Content edits made in CloudCannon push commits directly to this repo, which triggers a redeploy on Vercel. CloudCannon is editor-only — it doesn't host the site.



