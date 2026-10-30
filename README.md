# URVA Agritech Website

A modern Next.js + TypeScript + Tailwind website for URVA by VERMA AGROTECH PVT LTD.

## Stack

- Frontend: Next.js 16, React 19, TypeScript
- Styling: Tailwind CSS
- Testing: Vitest + Testing Library
- Deployment-ready architecture: modular pages, reusable components, and extensible data models

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Scripts

- `npm run dev` — local development server
- `npm run build` — production build
- `npm run lint` — ESLint validation
- `npm run test` — automated UI checks

## Environment variables

Create a `.env.local` file based on `.env.example` before production integration.

```bash
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+919999999999
```

## Demo-mode notes

This initial release includes working front-end flows and development-mode handlers for:

- consultation inquiry forms
- product discovery screens
- lead capture feedback states

These flows currently store sample submissions in browser local storage for demo use and should be replaced with a secure backend and database layer before production deployment.

## Required integrations

The following services may require external credentials or paid subscriptions in production:

- WhatsApp business integration or API provider
- SMTP or email delivery service
- Analytics provider
- Object storage for product imagery and documents
- CRM or lead management export layer
- Weather, GIS, or satellite data provider

## Deployment

Deploy to any Node-compatible host such as Vercel, Railway, or a custom container environment. Ensure environment variables are stored securely and not exposed in client-side code.

## Content notes

Sample content used in this build is clearly for development and demo purposes. Official product specs, company contact details, and verified technical data should be replaced before production launch.
