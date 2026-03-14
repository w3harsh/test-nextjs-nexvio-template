# Nexvio AI Next.js Template

Deploy a Next.js site with the Nexvio AI chat widget in seconds.

**One widget. One env key. Instant AI agent.**

---

## Deploy with Vercel

Click the button below to clone and deploy this template. You'll be asked for `NEXT_PUBLIC_NEXVIO_ID` — get it from the [Nexvio dashboard](https://app.nexvio.ai) (Agents → your agent → Integrate).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/nextjs-nexvio-template&env=NEXT_PUBLIC_NEXVIO_ID&envDescription=Nexvio%20public%20widget%20key%20(from%20app.nexvio.ai))

Replace `YOUR_USERNAME` with your GitHub username (or your org) and `nextjs-nexvio-template` with your repo name if different.

---

## Setup

1. **Get your Nexvio public key** from [app.nexvio.ai](https://app.nexvio.ai) → Agents → your agent → Integrate.
2. **Deploy to Vercel** via the button above, or clone the repo and run locally:
   - Copy `.env.example` to `.env.local`
   - Set `NEXT_PUBLIC_NEXVIO_ID` to your widget key
   - `npm install` → `npm run dev`
3. Your AI chat widget appears in the bottom-right automatically. Config: `src/lib/nexvio.ts`.

---

## Template description (for Vercel / listings)

**Tagline:** Add an AI Chat Agent to Your Next.js App in 30 Seconds

**Description:** A Next.js starter template with Nexvio AI chat widget integration. Deploy instantly and add an AI assistant to your website with one env key.
