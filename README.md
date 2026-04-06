This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Copy `.env.example` to `.env.local` and set the variables below. **Never commit `.env.local`.**

### Environment Variables (server-only where noted)

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | **Server only.** Supabase service role (invite API, admin operations) |
| `ANTHROPIC_API_KEY` | **Server only.** Anthropic API key for chat/audit |
| `RESEND_API_KEY` | **Server only.** Resend API key for sending invite emails |
| `EMAIL_FROM` | **Server only.** Sender for invite emails (e.g. `True Track <onboarding@yourdomain.com>`) |
| `APP_BASE_URL` | **Server only.** Base URL for invite links (e.g. `http://localhost:3000`) |

Invite emails use [Resend](https://resend.com). Create an API key and verify your domain for `EMAIL_FROM`.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## QA Checklist

**One command (CI / local):**

```bash
npm run qa
```

Runs, in order: **`npm run lint`** → **`npm run test`** (Vitest) → **`npm run build`** → **`npx playwright test`**.

- First time running e2e locally: `npx playwright install chromium`.
- Manual smoke steps (Home, Profiles, Search, Circle, Scout, Settings) are documented in **`QA.md`** at the repo root.

If your iSee360 web clone lives at another path (e.g. `/home/isee360/.openclaw/workspace/isee360` on Linux), copy the same `qa` script and the `tests/`, `e2e/`, `vitest.config.ts`, and `playwright.config.ts` files from this repo.
