# Investora — Frontend

Investora is a wealth management and passive income platform that helps users grow their finances through daily tasks, AI-assisted wealth management, deposits/withdrawals, and detailed financial reporting.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | Radix UI, shadcn/ui |
| Animations | Motion (Framer Motion), Three.js / React Three Fiber |
| Icons | Lucide React, Tabler Icons |
| i18n | next-intl |
| Auth | Cookie-based (js-cookie) with React Context |
| Package Manager | pnpm |

---

## Project Structure

```
app/
  page.tsx                  # Landing page
  layout.tsx                # Root layout with AuthProvider
  (auth)/
    login/                  # Login page
    registration/           # Registration page
  admin/dashboard/          # Protected admin/user dashboard

components/
  sections/                 # Landing page sections (Hero, Services, Partners, etc.)
  dashboard/                # Dashboard UI (desktop & mobile)
    quick-actions/          # Modals: Recharge, Withdrawal, Invite Friends, etc.
  ui/                       # Reusable UI primitives
  NavDemo.tsx               # Top navigation bar

lib/
  auth-context.tsx          # Authentication context & cookie-based session
  utils.ts                  # Utility helpers

messages/
  en/                       # English translations
  ar/                       # Arabic translations
```

---

## Pages & Features

### Landing Page (`/`)
- Animated hero section with call-to-action
- Services overview: Passive Income, Wealth Management, Deposits & Withdrawals, Financial Reports, 24/7 Support
- Our Partners section (infinite scrolling cards)
- Data security / "We Care You" section
- Contact Us form
- Footer

### Auth (`/login`, `/registration`)
- Email/password login with validation
- Session persisted via cookies (7-day expiry)
- Redirect to dashboard on success

**Demo credentials:**
```
Email:    admin@investora.com
Password: 123456
```

### Dashboard (`/admin/dashboard`)
Protected route — redirects to `/login` if unauthenticated.

- **Desktop layout** — sidebar navigation, metrics cards, quick actions, top performers, analytics, task management, profile settings
- **Mobile layout** — header, balance card, quick action buttons, task area, members list, bottom navigation

**Quick Action Modals:**
- Personal Information
- Team Reports
- Invite Friends
- Wheel of Fortune
- Recharge
- Withdrawal
- Financial Records

---

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Install dependencies

```bash
pnpm install
```

### Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
pnpm build
pnpm start
```

### Lint

```bash
pnpm lint
```

### Check translations

```bash
pnpm i18n:check
```

---

## Internationalisation

The project supports English (`en`) and Arabic (`ar`) via `next-intl`. Translation files are located in `messages/`. See [docs/i18n-guide.md](docs/i18n-guide.md) for usage instructions.

---

## Environment

No environment variables are required to run the project locally. The auth context uses mock credentials and cookie-based sessions for the current implementation.

