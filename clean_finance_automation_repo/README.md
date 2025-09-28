# Clean Finance Automation Starter (Next.js)

## What this is
A minimal, clean starter repo for a finance video automation dashboard:
- Next.js frontend (pages/) with a simple Dashboard UI
- Supabase client integration (lib/supabaseClient.js)
- Supabase auth context (contexts/SupabaseAuthContext.jsx)
- Simple ConnectionStatus component
- Vercel-compatible serverless endpoint at /api/megaPromptServer.js
- Server-side scheduler script skeleton (server/scheduler.js)
- .env.example with required environment variables and instructions

**How to run locally**
1. Copy `.env.example` to `.env.local` and fill in your keys.
2. `npm install`
3. `npm run dev`
4. Visit http://localhost:3000

**Notes**
- This is a starter scaffold intended to replace a broken project quickly.
- You must provide your Supabase + YouTube credentials in `.env.local`.
- The scheduler is a Node script for local/testing. For production, run it on a server or adapt to serverless cron.
