# GCS Design System

**Global Citizen Solutions** — Design Tokens, Components, and UI Kits.

---

## About Global Citizen Solutions

Global Citizen Solutions (GCS) is an international advisory firm specialising in **citizenship by investment (CBI)** and **residency by investment (RBI)** programmes. They guide high-net-worth individuals and families through the process of obtaining a second citizenship or permanent residency across Europe, the Caribbean, and the Pacific.

Representative programmes: Portugal Golden Visa, Greek Golden Visa, Malta CBI, Malta Permanent Residence Programme (MPRP), Caribbean CBI (St Kitts & Nevis, Dominica, Grenada, Antigua, St Lucia), and more.

**Sources provided for this design system:**
- `uploads/design-tokens.md` — design token definitions from the production Tailwind/React codebase (`src/index.css` and `tailwind.config.ts`)
- Logo SVG files: primary, secondary, and symbol variants in Blue, Black, and White

No Figma access, codebase, or product screenshots were provided. This system is built from the design tokens document and brand logos. **Contact the GCS brand team for expanded access.**

---

## Content Fundamentals

### Tone of Voice
GCS speaks with **expert authority** on complex legal and financial matters, while remaining **warm and personal** — clients are making life-changing decisions. Copy should be:

- **Confident and precise:** "Your application is under review." not "It looks like your application might still be being processed."
- **Personal:** Address clients directly as "you" and "your" — never "the client" or third-person references.
- **Action-oriented:** Every screen points toward a clear next step.
- **Globally-minded:** Acknowledge multiple nationalities, contexts, and legal frameworks.

### Writing Rules
- **UK English** spelling throughout: "programme", "colour", "organise", "authorised"
- **Title Case** for headings, navigation labels, and CTA buttons
- **Sentence case** for body copy, descriptions, and helper text
- **No emoji** in product UI or formal communications
- **No exclamation marks** in professional contexts
- Short, declarative sentences — one idea per sentence
- Use active voice: "Upload your passport" not "Your passport should be uploaded"

### CTA Patterns
- "Start Your Application" — primary onboarding
- "Explore Your Options" — programme discovery
- "Book a Consultation" — advisor engagement
- "Upload Documents" — document submission
- "View Programme Details" — information expansion
- "Continue" / "Back" — wizard navigation

### Application/Reference IDs
Format: `APP-YYYY-CC-NNNNN` — e.g. `APP-2024-GR-00847`. Displayed in `JetBrains Mono`.

---

## Visual Foundations

### Colour
- **Night Blue** (`#000957`, `--night-blue-400`) is the dominant brand colour — sidebar, primary buttons, display headings, high-emphasis surfaces.
- **Electric Blue** (`#3F8CFF`, `--electric-blue-400`) is the accent — links, secondary buttons, focus rings, highlights.
- **Background** is a warm near-white (`hsl(210 20% 98%)`) — not pure white, giving it a subtle warmth.
- **Borders** use a very light Electric Blue tint (`hsl(216 100% 93%)`) — almost invisible but structurally present.
- **Star / rating** uses golden amber (`#DFB300`) — used exclusively for review stars.
- The sidebar is **always Night Blue** regardless of light/dark mode.
- Dark mode inverts to Night Blue background with white text; cards become slightly lighter navy.
- No gradients, no background patterns, no textures in UI surfaces.

### Typography
- **Yrsa** (serif, `--font-serif`) — display headings and editorial moments. Weight 400 (regular) — deliberately elegant, not heavy. Creates a cosmopolitan, international quality.
- **Heebo** (sans-serif, `--font-sans`) — all UI text, labels, body copy. Light (300) for large h3, regular (400) for body, medium (500) for emphasis.
- **JetBrains Mono** (`--font-mono`) — application IDs, reference numbers, codes, data.
- Letter-spacing: most UI text uses `--tracking-normal` (-0.01em). Overlines use `--tracking-widest` (0.1em, uppercase).

### Corners — The Defining Brand Choice
**Zero border-radius (`--radius: 0`) by default.** All cards, buttons, inputs, dropdowns, and panels are **sharp-cornered**. This is a deliberate, premium, architectural visual statement. Exceptions:
- Avatars: always circular (`--radius-full`)
- Badges: pill-shaped (`--radius-full`)
- Tags: sharp by default, but can use `--radius-sm` (2px) in card-embedded contexts

### Shadows
Subtle and restrained — used for floating/modal elements only. Standard cards use **no shadow** — just a 1px border. Shadows:
- `--shadow-xs` / `--shadow-sm` for slight elevation on interactive cards
- `--shadow-md` through `--shadow-xl` for modals, dropdowns, tooltips
- Shadows are warm-navy-tinted in light mode, deep black in dark mode

### Spacing
4pt base grid (`--space-1` = 4px). Component-level defaults:
- Button: 12–24px horizontal, 32–48px height
- Card: 24px padding
- Input: 12px vertical, 16px horizontal

### Animation
- Duration: 150ms for micro-interactions (hover), 200ms for state changes, 500ms for page transitions
- Easing: `ease-out` for most transitions (quick start, smooth stop)
- `fade-in`: opacity 0→1 + translateY(10px→0) over 500ms — used for page sections appearing
- **No bouncy/springy animations** — professional, restrained motion only
- Accordion collapses at 200ms ease-out

### Hover & Press States
- Primary buttons: background shifts to `--night-blue-300` (`#1A2268`) on hover
- Secondary buttons: Electric Blue lightens slightly on hover
- Ghost/outline: background fills with `--muted` on hover
- Interactive cards: add `--shadow-sm` on hover via CSS
- No opacity-based hover states on buttons — colour shifts only
- Press state: remove shadow, slight opacity drop

### Cards & Surfaces
- White background, 1px `--border` colour, 0px radius, no shadow (by default)
- Elevated cards (floating panels, dialogs): add `--shadow-sm` or `--shadow-md`
- Sidebar: `--sidebar-background` (Night Blue), white text, Electric Blue accent
- Dark mode cards: `hsl(234 100% 22%)` — slightly lighter than the Navy background

### Imagery & Illustrations
No stock imagery or illustrations were provided. The brand uses clean, data-driven layouts without decorative imagery. Country photography (where used) is full-bleed, high-quality, desaturated slightly towards cool tones.

---

## Iconography

The GCS product uses **no bundled icon font**. The production application uses **Lucide React** (`lucide-react`) — a stroke-based icon library with consistent 2px stroke weight.

**Key icons in use:**
- `LayoutDashboard` — dashboard navigation
- `FileText` / `File` — applications and documents
- `FolderOpen` — document folders
- `Globe2` — international programmes, countries
- `Calendar` — consultations, appointments
- `User` / `Users` — client, advisor
- `Building` — country/jurisdiction
- `CheckCircle2` / `XCircle` / `Clock` — status indicators
- `ArrowRight` / `ChevronRight` — navigation progression
- `Upload` / `Download` — document actions
- `Search` — filters and search bars
- `Bell` — notifications

**Icon sizing:**
- 14px — compact inline (table cells, badge icons)
- 16px — standard interactive (buttons, nav items)
- 20px — standalone contextual icons
- 24px — feature/section icons

Icons always use `currentColor` — they inherit text colour from their parent. No emoji are used in product UI.

**If Lucide is unavailable**, substitute with Heroicons (outline, 2px stroke) at the same sizes — visual parity is very close.

---

## Components

| Component | Export(s) | Description |
|-----------|-----------|-------------|
| Button | `Button` | Primary action element, 6 variants × 4 sizes, icon slots |
| Badge | `Badge` | Inline status label, pill-shaped, 5 semantic variants |
| Avatar | `Avatar` | User thumbnail with initials fallback, deterministic colour |
| Tag | `Tag` | Filter/selection chip, optional dismiss |
| Icon | `Icon` | Thin wrapper for Lucide-compatible stroke icons |
| Accordion | `Accordion`, `AccordionItem` | Collapsible disclosure sections |
| Chart | `BarChart`, `LineChart`, `PieChart` | SVG data visualisation using GCS Night Blue + Electric Blue palette; hover tooltips included |

---

## File Structure

```
styles.css                       — Global CSS entry point (import this one file)
tokens/
  fonts.css                      — Google Fonts @import (replace with self-hosted files in production)
  colors.css                     — Night Blue scale, Electric Blue scale, Star, semantic tokens (light + dark)
  typography.css                 — Font families, letter-spacing, type scale utility classes
  spacing.css                    — 4pt spacing scale + semantic gap/padding aliases
  radius.css                     — Border radius scale (default 0rem)
  shadows.css                    — Shadow elevation scale (light + dark mode)
  animations.css                 — Easing functions, durations, keyframes, utility animation classes
assets/
  logos/
    GCS-Primary-Blue.svg         — Primary logo (symbol + wordmark), navy/blue, for light backgrounds
    GCS-Primary-Black.svg        — Primary logo, all black, for light backgrounds
    GCS-Primary-White.svg        — Primary logo, all white, for dark/navy backgrounds
    GCS-Secondary-Blue.svg       — Wordmark only, blue
    GCS-Secondary-Black.svg      — Wordmark only, black
    GCS-Secondary-White.svg      — Wordmark only, white
    GCS-Symbol-Blue.svg          — Starburst symbol only, navy
    GCS-Symbol-Black.svg         — Starburst symbol only, black
    GCS-Symbol-White.svg         — Starburst symbol only, white
guidelines/                      — Foundation specimen cards (appear in Design System tab)
  night-blue.card.html           — Night Blue palette (6-step scale)
  electric-blue.card.html        — Electric Blue palette (7-step scale)
  semantic-light.card.html       — Semantic tokens, light mode
  semantic-dark.card.html        — Semantic tokens, dark mode
  sidebar-palette.card.html      — Sidebar surface tokens
  status-colors.card.html        — Star, success, warning, destructive, info
  type-display.card.html         — Yrsa display headings (60–36px)
  type-ui.card.html              — Heebo UI text (h3–body-small)
  type-small.card.html           — Overline, caption, serif-lg, mono
  type-families.card.html        — Font family specimens
  spacing-scale.card.html        — 4pt spacing scale visual
  spacing-in-use.card.html       — Spacing in button/card/input context
  radius.card.html               — Border radius scale (0–full)
  shadows.card.html              — Shadow elevation scale
  brand-logo-primary.card.html   — Primary logo on 3 backgrounds
  brand-wordmark.card.html       — Wordmark on 3 backgrounds
  brand-symbol.card.html         — Symbol on 4 backgrounds
components/
  core/
    Button.jsx + .d.ts + .prompt.md    — Action button, 5 variants × 3 sizes
    Badge.jsx + .d.ts + .prompt.md     — Inline status label, pill-shaped
    Avatar.jsx + .d.ts + .prompt.md    — User thumbnail, initials fallback, deterministic colour
    Tag.jsx + .d.ts + .prompt.md       — Filter/selection chip, optional dismiss
    Chart.jsx + .d.ts                  — Data visualisation: BarChart, LineChart, PieChart
    button.card.html                   — Button showcase card
    chart.card.html                    — Chart showcase card (bar · line · pie)
ui_kits/
  client-portal/
    index.html                         — GCS client portal application mockup (interactive)
SKILL.md                               — Agent skill definition for Claude Code
```

---

## Font Note

Fonts are currently loaded from **Google Fonts** (`tokens/fonts.css`). For production use, self-host the font files and replace the `@import` with local `@font-face` declarations. Contact the GCS brand team for licensed font files (Heebo, Yrsa, JetBrains Mono are all commercially available via Google Fonts under the OFL licence).
