---
name: gcs-social-media
description: "Generates posts, carousels and ads with Global Citizen Solutions visual identity. Covers multi-slide carousel for Instagram/LinkedIn, single-image posts, and ads for Google Ads (Square 1200×1200, Landscape 1200×628) and Meta Ads (Vertical 1080×1920, Square 1080×1080). Triggers: carousel, post, instagram carousel, linkedin carousel, slide post, carousel GCS, google ads, meta ads, ad GCS, social media GCS, social media image, GCS content"
allowed-tools: Bash(*)
---

# Social Media & Ads — Global Citizen Solutions

Generates posts, carousels and ads with GCS visual identity. Supports **Posts** (single image or carousel) and **Ads** (Google Ads and Meta Ads). Slides and ads rendered with **Playwright** and exported as PNG/PDF.

---

## ⚠️ Mandatory Workflow — Always Follow This Order

```
STEP 1 → Collect user input
STEP 2 → Present the Carousel Plan for approval
STEP 3 → Wait for explicit approval (⛔ DO NOT create slides without approval)
STEP 4 → Generate slides in the correct format per platform
STEP 5 → Ask the user what to do next
```

**NEVER skip Steps 2 and 3.** Even if the user sends complete content, the Plan must be presented and approved before any slide generation.

---

## Step 1 — Collect Input

The flow branches at the very first question:

---

> **Question 1 — Content type:**
> 📣 **"Is this a Social Media Post or an Ad?"**

---

### 🅐 If the answer is **Post**

> **Question 1a — Post format:**
> 🖼️ **"Is it a single-image post or a carousel?"**
> - *Single-image post* → generates only Slide 1 (Cover/Hook)
> - *Carousel* → generates multiple slides using Types 1–5

> **Question 1b — Cover image (required):**
> 📎 **"Can you send the cover photo?"**
> *(Wait for upload. ⛔ Do not proceed without the image.)*

> **Question 1c — Additional images (carousel only, optional):**
> 🖼️ **"Are there any other images you'd like to use in the other slides?"**
> *(No images → use Slide 3 white background for all content. With images → use Slide 2 for slides that have a photo.)*

> **Question 1d — Platform:**
> 📱 **"Which platform — Instagram, LinkedIn, Twitter/X, Facebook, or all?"**

> **Question 1e — Content language:**
> 🌐 **"Should the content be written in Portuguese (BR) or English?"**

**⛔ Only proceed to Step 2 after receiving answers to all 5 questions.** The cover image is always required.

---

### 🅑 If the answer is **Ads**

> **Question 1a — Ad platform:**
> 🎯 **"Is it Google Ads or Meta Ads?"**

> **Question 1b — Image (required):**
> 📎 **"Can you send the ad image?"**
> *(Wait for upload. ⛔ Do not proceed without the image.)*

> **Question 1c — Format(s) to generate:**
> *(Present options based on the chosen platform — see table below. More than one can be selected.)*
>
> **Google Ads:**
> - Square: 1200 × 1200 px
> - Landscape: 1200 × 628 px
>
> **Meta Ads:**
> - Vertical: 1080 × 1920 px
> - Square: 1080 × 1080 px

> **Question 1d — Ad copy:**
> ✍️ **"What is the title? (Use line breaks with ↵ to control wrapping. Max. 10 words.)"**
> *(Optional: subtitle — typically the website URL e.g. `globalcitizensolutions.com`. Use `None` to omit.)*

> **Question 1e — Content language:**
> 🌐 **"Should the content be written in Portuguese (BR) or English?"**

**⛔ Only proceed to Step 2 after receiving answers to all 5 questions.** The image is always required.

---

### Output table — Posts

| Type | Slides generated | Dimensions |
|---|---|---|
| **Single post** | Slide 1 (Cover/Hook) only | 1080 × 1350 px |
| **Instagram/LinkedIn carousel** | Slide 1 + content + Slide 5 (CTA) | 1080 × 1350 px |
| **Twitter/X or Facebook carousel** | Same as above | 1080 × 1080 px |

### Output table — Ads

| Platform | Format | Dimensions | File |
|---|---|---|---|
| Google Ads | Square | 1200 × 1200 px | `[topic]_google_square.png` |
| Google Ads | Landscape | 1200 × 628 px | `[topic]_google_landscape.png` |
| Meta Ads | Vertical | 1080 × 1920 px | `[topic]_meta_vertical.png` |
| Meta Ads | Square | 1080 × 1080 px | `[topic]_meta_square.png` |

### Reference template — Post (carousel)

The carousel is based on the GCS repository template. It has **5 fixed slide types**:

| Slide | Name | Background | Use |
|---|---|---|---|
| 1 | **Cover / Hook** | Full-bleed photo + Night Blue gradient overlay | Opening slide; photo required |
| 2 | **Content + Image** | Photo on top (594px), white below | Content slide when a relevant photo is available |
| 3 | **Content — White** | Pure white | **Default for ALL written content** — no photo |
| 4 | **Quote** | Pure white | Expert quote with circular speaker photo |
| 5 | **CTA — Dark** | Night Blue gradient (`#0c1563 → #000957 → #000644`) | Always the last slide |

**Core rule:** written content always goes in **Slide 3 (white)**. Slide 2 is only used when the user provides a relevant photo.

---

### Form A — Briefing (topic / intent)
The user describes the topic, goal and platform. Claude proposes the full structure.

> Examples: "Make a carousel about Portugal's Golden Visa for LinkedIn", "Educational carousel on citizenship by investment"

### Form B — Ready-made copy
The user sends already-written content. Claude maps each block to the correct slide type and presents the Plan for approval.

**In both cases, Step 2 is mandatory before generating any content.**

---

## Step 2 — Carousel Plan (present for approval)

Present the Plan in the format below. Be concise — the user should be able to approve or request changes quickly.

```
📋 CAROUSEL PLAN

Topic: [main topic]
Language: [Portuguese (BR) / English]
Platform: [Instagram / LinkedIn / Twitter/X / Facebook / Multi-platform]
Output format: [PDF (LinkedIn) / PNG ZIP (others) / PDF + ZIPs]
No. of slides: [n]
Carousel type: [Article / Educational / Q&A / Comparison / Stats / "X Minutes With"]

SLIDES
──────────────────────────────────────────
Slide 1 — Cover / Hook  [Slide Type 1]
  Overline: [uppercase text — Heebo, electric blue]
  Headline: [title — Yrsa, white, max. 12 words]
  Background image: [provided image: name/description] OR [placeholder — colour #7a8fa0]

Slide 2 — [Content type]  [Slide Type 2 — only if a relevant image exists]
  Top image: [provided image: name/description]
  Heading: [title — Yrsa, Night Blue]
  Body: [copy — Heebo, max. 40 words]

Slide 3 — [Content type]  [Slide Type 3 — white, text only OR visual asset]
  Mode: [Text / Visual]
  Heading: [title — Yrsa, Night Blue]
  Content: [copy — max. 40 words] OR [asset type: bar chart / stat cards / table / timeline / ranked list]
  [Repeat for each written content slide]

Slide N-1 — Quote  [Slide Type 4 — if applicable]
  Speaker photo: [provided image] OR [circular placeholder]
  Quote: ["quote text"]
  Name: [Speaker name]
  Title: [Title, Global Citizen Solutions]

Slide N — CTA  [Slide Type 5]
  Headline: ["What do you think?" or equivalent]
  Body: [text + URL]
  CTA: [requested action]
──────────────────────────────────────────

✅ Do you approve this plan? I can adjust any slide, change the type,
   rewrite copy or add/remove slides before generating.
```

**Wait for explicit response before proceeding.**
- If approved → Step 4
- If changes requested → update and re-present
- If new content sent → incorporate and re-present

---

## Step 3 — Approval

Only proceed when the user explicitly says:
- "Approved", "Ok", "Go ahead", "Looks good", "✅" or equivalent
- A change followed by "now it's good" counts as approval of the updated version

⛔ **Do not interpret silence, doubts or questions as approval.**

---

## Step 4 — Output Format

### Posts — Summary table

| Platform | Format | Dimensions | Delivered file |
|---|---|---|---|
| LinkedIn | PDF | 1080 × 1350 px / page | `[topic]_linkedin.pdf` |
| Instagram | PNG × N | 1080 × 1350 px | `[topic]_instagram.zip` |
| Twitter/X | PNG × N | 1080 × 1080 px | `[topic]_twitter.zip` |
| Facebook | PNG × N | 1080 × 1080 px | `[topic]_facebook.zip` |
| Multi-platform | PDF + ZIP(s) | As above | Deliver separately per platform |

### Ads — Summary table

| Platform | Format | Dimensions | Delivered file |
|---|---|---|---|
| Google Ads | Square | 1200 × 1200 px | `[topic]_google_square.png` |
| Google Ads | Landscape | 1200 × 628 px | `[topic]_google_landscape.png` |
| Meta Ads | Vertical | 1080 × 1920 px | `[topic]_meta_vertical.png` |
| Meta Ads | Square | 1080 × 1080 px | `[topic]_meta_square.png` |

If the user requests multiple formats → generate all and deliver as ZIP: `[topic]_ads.zip`.

### Decision: photo provided vs. pure gradient

For each slide, decide based on the images the user sent:

| Slide type | Use photo? | Reasoning |
|---|---|---|
| Hook — destination / lifestyle | ✅ If provided | Photo anchors the place or lifestyle |
| Hook — data / analysis / concept | ❌ Gradient | Photo would be decorative and misleading |
| Context — narrative | ❌ Gradient | Text is the focus; photo distracts |
| Value — numbered point | ✅ If provided and relevant | Gradient if no image fits |
| Quote / Speaker | ✅ Speaker photo if provided | Circular photo of the person |
| CTA | ❌ No photo | Template 5 |

**If the user provided no images or no suitable image for a given slide → use a pure gradient. Never use a decontextualised photo just to have an image.**

### LinkedIn → PDF

- One page per slide · 1080×1350px dimensions
- All fonts embedded
- Resolution: 150dpi for sharpness on retina screens
- File name = carousel title (appears in LinkedIn feed)

### Instagram / Twitter/X / Facebook → PNG ZIP

- Playwright with exact viewport per platform
- DPI: 72dpi · Colour space: sRGB
- Naming: `slide_01.png`, `slide_02.png`, ...
- Deliver as ZIP

---

## Step 5 — After Delivery

After generating and delivering, always ask:

> "Files are ready. What would you like to do next?
> — Adjust a slide / ad
> — Generate another format (e.g. landscape from the square)
> — Adapt for another platform
> — Create the caption for publishing
> — Start a new carousel or ad"

---

## GCS Design Tokens

Source of truth: `src/index.css` and `tailwind.config.ts`. **Never substitute with generic palettes.**

### Colours

| Token | HEX | Tailwind | Use |
|---|---|---|---|
| `--night-blue-25` | `#E8EBF0` | `nightBlue-25` | Dark foreground, borders |
| `--night-blue-50` | `#B3B5CD` | `nightBlue-50` | Muted text on light background |
| `--night-blue-100` | `#8084AB` | `nightBlue-100` | Decorative, dividers |
| `--night-blue-200` | `#333A79` | `nightBlue-200` | Medium overlay on photos |
| `--night-blue-300` | `#1A2268` | `nightBlue-300` | Headings on white background |
| `--night-blue-400` | `#000957` | `nightBlue-400` | Primary background, logo, primary |
| `--electric-blue-25` | `#ECF4FF` | `electricBlue-25` | Subtle badge background |
| `--electric-blue-50` | `#D9E8FF` | `electricBlue-50` | Highlight borders |
| `--electric-blue-400` | `#3F8CFF` | `electricBlue-400` | Overlines, numbers, CTAs, Q&A |
| `--star` | `#DFB300` | `star` | Ratings (rare use) |

### Semantic Tokens

| Token | Light | Dark |
|---|---|---|
| `--background` | `#F4F6F9` | `#000957` |
| `--foreground` | `#0D1633` | `#FFFFFF` |
| `--primary` | `#000957` | `#FFFFFF` |
| `--secondary` / accent | `#3F8CFF` | `#3F8CFF` |
| `--muted-foreground` | `#6B7280` | `rgba(232,235,240,0.65)` |
| `--border` | `#D9E8FF` | `#0D1633` |

### GCS Gradients

| Token | CSS | Use |
|---|---|---|
| `--gradient-primary` | `linear-gradient(180deg, #000957 0%, #0F1A2D 100%)` | Dark slide backgrounds |
| `--gradient-overlay-photo` | `linear-gradient(180deg, rgba(0,9,87,0.15) 0%, rgba(0,9,87,0.60) 45%, rgba(15,26,45,0.92) 100%)` | Overlay on full-bleed photos |
| `--gradient-band` | `linear-gradient(180deg, #1A2268 0%, #000957 100%)` | Bottom band over photos |

**Rules:**
- Gradient always `#000957` (top) → `#0F1A2D` (base) — **never invert**
- Do not mix primary gradient with Night Blue `#1A2268` as a solid background on the same slide

### Typography

| Element | Family | Size (at 1080px) | Line-height | Weight |
|---|---|---|---|---|
| Display / Hook | Yrsa / Georgia (serif) | 60–72px | 64–80px | 400 |
| Heading h1 | Yrsa / Georgia (serif) | 48–56px | 54–64px | 400 |
| Heading h2 | Yrsa / Georgia (serif) | 36–44px | 40–50px | 400 |
| Q&A | Yrsa / Georgia (serif) | 42–48px | 1.2 | 400 — Electric Blue |
| Quote | Yrsa / Georgia (serif) | 36–44px | 1.45 | 400 |
| Body text | Heebo / system-ui (sans) | 26–32px | 1.55 | 400 |
| Overline / label | Heebo / system-ui (sans) | 12–14px (×2.5 scale) | 1.4 | 600 — uppercase, tracking 0.1em |
| CTA / caption | Heebo / system-ui (sans) | 20–24px | 1.4 | 400 |
| Name | Heebo / system-ui (sans) | 20–24px | 1.4 | 600 |
| Title / role | Heebo / system-ui (sans) | 16–18px | 1.4 | 400 — muted |

**Font families:**
- `--font-sans: Heebo, system-ui, sans-serif`
- `--font-serif: Yrsa, Georgia, serif`

### Visual Identity

- **Corner radius: 0** (`--radius: 0rem`) on all layout elements
  - Exceptions: speaker photos (`border-radius:50%`) and GCS logo (circle)
- **Minimum padding:** 72–80px (base spacing 4pt = 0.25rem)
- **GCS Logo:** always top-left corner (except Types 4 and 5 where it is centred)
  - Dark background: white circle + Night Blue star `#000957`
  - Light background: Night Blue circle `#000957` + white star
- **Overlay on photos:** always Night Blue — `rgba(0,9,87,x)` — **never pure black**
- **Speaker photo:** `border-radius:50%` · border `4px solid white` (dark) or `3px solid #E8EBF0` (light)

---

## Platform Specs

| Platform | Dimensions | Max slides | Aspect ratio |
|---|---|---|---|
| Instagram | 1080 × 1350 px | 20 | 4:5 |
| LinkedIn | 1080 × 1350 px | 20 | 4:5 |
| Twitter/X | 1080 × 1080 px | 4 | 1:1 |
| Facebook | 1080 × 1080 px | 10 | 1:1 |

**Always use 4:5** on Instagram and LinkedIn — takes up ~20% more feed space.

### Rules per platform

**Instagram:** the first slide is the only swipe trigger · always "Swipe →" on slide 1 · ask for "save" in the CTA · practical limit 7–10 slides

**LinkedIn:** PDF carousel generates 3–5× more reach than native images · PDF name appears in the feed · ask for comment or repost in the CTA

**Twitter/X:** max. 4 slides — adapt to the strongest points · text readable in timeline at ~200px

**Facebook:** GCS audience 35–55 years old · practical limit 5–7 slides

---

## Carousel Structure

The official template has **5 fixed slide types**. Always use these types — do not invent new layouts.

### ⚠️ Core Rule: Written Content = White Background

**All written content** (value points, tips, context, data, comparisons, explanations) goes in **Slide Type 2** or **Slide Type 3** — both with white backgrounds. This is the most important rule of the template.

| Slide | Name | Background | When to use |
|---|---|---|---|
| **Type 1** | Cover / Hook | Full-bleed photo + Night Blue overlay | Always the first slide — stops the scroll |
| **Type 2** | Content + Image | White — photo on top, text below | Content slide **when a relevant photo exists** |
| **Type 3** | Content White | Pure white — text only or visual asset | Content slide **without photo** / **default for all written content** |
| **Type 4** | Quote | White — circular speaker photo | GCS expert quote |
| **Type 5** | CTA | Dark Night Blue gradient | Always the last slide |

### Carousel Framework (5–8 slides, typical)

```
Slide 1  → Type 1 (Cover/Hook) — photo + overline + headline
Slide 2  → Type 2 or 3 (content — Type 2 if photo available, Type 3 if not)
Slide 3  → Type 3 (white content)
[...]
Slide N-1 → Type 4 (Quote — optional, when a relevant quote exists)
Slide N  → Type 5 (CTA)
```

**Rules for content slides (Types 2 and 3):**
- One point per slide — never two concepts
- Heading: Yrsa, Night Blue, 74px
- Body: Heebo, `#6b7280`, 34px, max. 40 words
- Optional overline in Electric Blue uppercase

### Sequences by content type

**Article / Report (5–7 slides):**
```
Type 1 (Hook) → Type 3 (context) → Type 3 × N (points) → Type 4 (Quote) → Type 5 (CTA)
```

**Educational / Tips (5–8 slides):**
```
Type 1 (Hook) → Type 2 (context with photo) → Type 3 × N (points) → Type 5 (CTA)
```

**Comparison (5 slides):**
```
Type 1 (Hook) → Type 3 (Option A) → Type 3 (Option B) → Type 3 (Verdict) → Type 5 (CTA)
```

**"X Minutes With" / Quote feature:**
```
Type 1 (Hook with speaker photo) → Type 3 × N (Q&A) → Type 4 (Quote) → Type 5 (CTA)
```

### GCS Copywriting

**Tone:** professional yet accessible · direct · authority without arrogance · write in the language selected in Step 1 (Portuguese BR or English)

**Prohibited:** ❌ generic superlatives · ❌ excessive legal jargon · ❌ guaranteed promises · ❌ aggressive sales language

**Use:** ✅ verifiable data · ✅ language of choice and control · ✅ action verbs · ✅ questions the reader is already asking

---

## Slide Templates — Based on Official Template

Source repository: `https://github.com/vtorres-gcs/gcs-design-system/blob/main/templates/social-media/InstagramCarousel.dc.html`

**Before generating any slide:** download logos from GitHub and embed as base64 (see Logos section below). Never use CSS circles as logo backgrounds.

### Base structure of the 5 slide types

```html
<!-- SLIDE TYPE 1 · Cover / Hook — full-bleed photo + overlay -->
<!-- Logo: GCS-Symbol-White — direct <img>, no wrapper div -->
<div style="position:relative; width:1080px; height:1350px; overflow:hidden;">
  <img src="{USER_PHOTO_DATA_URI}" style="position:absolute; inset:0; width:1080px; height:1350px; object-fit:cover; display:block;">
  <!-- Night Blue overlay — NEVER pure black -->
  <div style="position:absolute; inset:0; background:linear-gradient(to bottom, transparent 28%, rgba(0,9,87,0.72) 52%, rgba(0,6,60,0.95) 100%);"></div>
  <div style="position:absolute; top:44px; left:44px; z-index:2;">
    <img src="{LOGO_WHITE}" style="width:72px; height:72px; object-fit:contain;" alt="GCS">
  </div>
  <div style="position:absolute; bottom:0; left:0; right:0; padding:0 52px 72px;">
    <p style="font-family:'Heebo',sans-serif; font-size:18px; font-weight:500; color:#3F8CFF; letter-spacing:0.13em; text-transform:uppercase; margin-bottom:20px;">[OVERLINE]</p>
    <h2 style="font-family:'Yrsa',serif; font-size:72px; font-weight:400; color:#ffffff; line-height:1.08; letter-spacing:-0.01em;">[HEADLINE — max. 12 words]</h2>
  </div>
</div>

<!-- SLIDE TYPE 2 · Content + Image — photo top (594px) + white text below -->
<!-- Logo: GCS-Symbol-White over photo — no CSS circle -->
<div style="width:1080px; height:1350px; background:#fff; display:flex; flex-direction:column; overflow:hidden;">
  <div style="position:relative; width:1080px; height:594px; flex-shrink:0; overflow:hidden; background:#c8d0dc;">
    <img src="{USER_PHOTO_DATA_URI}" style="position:absolute; inset:0; width:1080px; height:594px; object-fit:cover; display:block;">
    <div style="position:absolute; top:44px; left:44px; z-index:2;">
      <img src="{LOGO_WHITE}" style="width:72px; height:72px; object-fit:contain;" alt="GCS">
    </div>
  </div>
  <div style="flex:1; padding:56px 64px 60px; display:flex; flex-direction:column; justify-content:flex-start; gap:32px;">
    <h1 style="font-family:'Yrsa',serif; font-size:74px; font-weight:400; color:#000957; line-height:1.08; letter-spacing:-0.01em;">[HEADING]</h1>
    <p style="font-family:'Heebo',sans-serif; font-size:34px; font-weight:300; color:#6b7280; line-height:1.6;">[BODY — max. 40 words]</p>
  </div>
</div>

<!-- SLIDE TYPE 3 · Content White — TEXT MODE -->
<!-- Use when: descriptive value point, narrative context, editorial tip -->
<!-- Logo: GCS-Symbol-Blue — no CSS circle -->
<div style="position:relative; width:1080px; height:1350px; background:#fff; overflow:hidden;">
  <div style="position:absolute; top:44px; left:44px;">
    <img src="{LOGO_BLUE}" style="width:72px; height:72px; object-fit:contain;" alt="GCS">
  </div>
  <div style="position:absolute; top:380px; left:0; right:0; padding:0 64px; display:flex; flex-direction:column; gap:36px;">
    <p style="font-family:'Heebo',sans-serif; font-size:18px; font-weight:600; color:#3F8CFF; letter-spacing:0.13em; text-transform:uppercase;">[OVERLINE — optional]</p>
    <h2 style="font-family:'Yrsa',serif; font-size:74px; font-weight:400; color:#000957; line-height:1.08; letter-spacing:-0.01em;">[HEADING]</h2>
    <p style="font-family:'Heebo',sans-serif; font-size:34px; font-weight:300; color:#6b7280; line-height:1.6;">[BODY — max. 40 words]</p>
  </div>
</div>

<!-- SLIDE TYPE 3 · Content White — VISUAL MODE -->
<!-- Use when: numerical data, comparisons, rankings, processes, parallel lists -->
<!-- Claude generates the visual asset as inline SVG/HTML inside the content area -->
<!-- Available area: top:380px → bottom:60px (≈910px useful height), padding 0 64px (952px width) -->
<div style="position:relative; width:1080px; height:1350px; background:#fff; overflow:hidden;">
  <div style="position:absolute; top:44px; left:44px;">
    <img src="{LOGO_BLUE}" style="width:72px; height:72px; object-fit:contain;" alt="GCS">
  </div>
  <div style="position:absolute; top:380px; left:0; right:0; padding:0 64px; display:flex; flex-direction:column; gap:24px;">
    <p style="font-family:'Heebo',sans-serif; font-size:18px; font-weight:600; color:#3F8CFF; letter-spacing:0.13em; text-transform:uppercase;">[OVERLINE — optional]</p>
    <h2 style="font-family:'Yrsa',serif; font-size:60px; font-weight:400; color:#000957; line-height:1.08; letter-spacing:-0.01em;">[SHORT HEADING]</h2>
    <!-- ↓ Visual asset generated by Claude here ↓ -->
    <!-- Examples: table, bar chart, stat cards, timeline, styled list -->
    <!-- Palette: #000957 · #3F8CFF · #6b7280 · #e5e7eb | border-radius:0 | no shadows -->
    [VISUAL_ASSET_SVG_OR_HTML]
  </div>
</div>

<!-- SLIDE TYPE 4 · Quote — white, circular speaker photo -->
<!-- Footer: GCS-Secondary-Blue (full wordmark) -->
<div style="position:relative; width:1080px; height:1350px; background:#fff; overflow:hidden;">
  <div style="position:absolute; top:100px; left:50%; transform:translateX(-50%); width:190px; height:190px; border-radius:50%; overflow:hidden; background:#e8ebf0;">
    <img src="{SPEAKER_PHOTO_DATA_URI}" style="width:190px; height:190px; object-fit:cover; display:block;">
  </div>
  <!-- Quote — colour #1A2268, NEVER Electric Blue -->
  <div style="position:absolute; top:360px; left:0; right:0; padding:0 72px; text-align:center;">
    <p style="font-family:'Yrsa',serif; font-size:54px; font-weight:400; color:#1A2268; line-height:1.22; letter-spacing:-0.01em;">"[QUOTE — max. 4 lines]"</p>
  </div>
  <div style="position:absolute; bottom:160px; left:0; right:0; text-align:center; display:flex; flex-direction:column; align-items:center; gap:10px;">
    <p style="font-family:'Heebo',sans-serif; font-size:28px; font-weight:500; color:#3F8CFF;">[Speaker Name]</p>
    <p style="font-family:'Heebo',sans-serif; font-size:22px; font-weight:400; color:#9ca3af;">[Title, Global Citizen Solutions]</p>
  </div>
  <!-- Footer wordmark: GCS-Secondary-Blue -->
  <div style="position:absolute; bottom:52px; left:0; right:0; display:flex; justify-content:center;">
    <img src="{LOGO_WORDMARK}" style="height:32px; object-fit:contain;" alt="Global Citizen Solutions">
  </div>
</div>

<!-- SLIDE TYPE 5 · CTA — dark Night Blue gradient -->
<!-- Logo: GCS-Symbol-White, 104px, centred — no CSS circle -->
<div style="width:1080px; height:1350px; background:linear-gradient(160deg, #0c1563 0%, #000957 35%, #000644 100%); display:flex; flex-direction:column; align-items:center; justify-content:center; overflow:hidden;">
  <img src="{LOGO_WHITE}" style="width:104px; height:104px; object-fit:contain; flex-shrink:0;" alt="GCS">
  <h2 style="margin-top:64px; font-family:'Yrsa',serif; font-size:80px; font-weight:400; color:#ffffff; text-align:center; line-height:1.1; padding:0 80px;">[CTA HEADLINE]</h2>
  <p style="margin-top:36px; font-family:'Heebo',sans-serif; font-size:32px; font-weight:300; color:#9ca3af; text-align:center; line-height:1.6; padding:0 120px;">[BODY — URL included]</p>
  <div style="margin-top:64px; display:flex; align-items:center; gap:4px; flex-wrap:wrap; justify-content:center; padding:0 60px;">
    <div style="display:flex; align-items:center; gap:10px; background:#1A2268; padding:16px 28px;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.8"><path d="M9 21h6M12 3a6 6 0 016 6c0 2.2-1.2 4.1-3 5.2V17H9v-2.8C7.2 13.1 6 11.2 6 9a6 6 0 016-6z"/></svg>
      <span style="font-family:'Heebo',sans-serif; font-size:24px; color:#fff; font-weight:400;">Insightful</span>
    </div>
    <div style="display:flex; align-items:center; gap:10px; padding:16px 28px;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.8"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
      <span style="font-family:'Heebo',sans-serif; font-size:24px; color:#9ca3af; font-weight:400;">Comment</span>
    </div>
    <div style="display:flex; align-items:center; gap:10px; padding:16px 28px;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.8"><path d="M17 1l4 4-4 4M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 01-4 4H3"/></svg>
      <span style="font-family:'Heebo',sans-serif; font-size:24px; color:#9ca3af; font-weight:400;">Repost</span>
    </div>
    <div style="display:flex; align-items:center; gap:10px; padding:16px 28px;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.8"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
      <span style="font-family:'Heebo',sans-serif; font-size:24px; color:#9ca3af; font-weight:400;">Send</span>
    </div>
  </div>
  <p style="margin-top:60px; font-family:'Yrsa',serif; font-size:52px; font-weight:400; color:#ffffff;">[SIGN-OFF — e.g. "Thanks."]</p>
</div>
```

### Logos — GCS repository assets

Repository: `https://github.com/vtorres-gcs/gcs-design-system`

| Asset | File | Raw URL | Use |
|---|---|---|---|
| **GCS-Symbol-White** | `assets/logos/GCS-Symbol-White.svg` | `https://raw.githubusercontent.com/vtorres-gcs/gcs-design-system/main/assets/logos/GCS-Symbol-White.svg` | Slides 1, 2, 5 — white star on dark backgrounds/photos |
| **GCS-Symbol-Blue** | `assets/logos/GCS-Symbol-Blue.svg` | `https://raw.githubusercontent.com/vtorres-gcs/gcs-design-system/main/assets/logos/GCS-Symbol-Blue.svg` | Slide 3 — Night Blue star with white circle, on white background |
| **GCS-Secondary-Blue** | `assets/logos/GCS-Secondary-Blue.svg` | `https://raw.githubusercontent.com/vtorres-gcs/gcs-design-system/main/assets/logos/GCS-Secondary-Blue.svg` | Slide 4 footer — full wordmark "GLOBAL CITIZEN SOLUTIONS" |

### ⚠️ Critical logo rule — NEVER violate

**The GCS symbol NEVER appears on a CSS-built white circle.**

The SVG already contains the correct background internally:
- **GCS-Symbol-White**: SVG with white star — use directly on photos and dark backgrounds.
- **GCS-Symbol-Blue**: SVG with white circle + Night Blue star — use on white backgrounds. The white circle is already inside the SVG.

**Never do:** `<div style="background:white;border-radius:50%">` + SVG inside.
**Always do:** `<img src="[SVG_URL]" style="width:72px;height:72px;object-fit:contain;">` directly.

### Embedding logos in generated HTML

Always download SVGs from GitHub and embed as base64 to avoid CORS issues:

```python
import base64, urllib.request

GITHUB_BASE = "https://raw.githubusercontent.com/vtorres-gcs/gcs-design-system/main/assets/logos"

def fetch_logo_b64(filename: str) -> str:
    """Downloads SVG from GitHub and returns as base64 data URI."""
    url = f"{GITHUB_BASE}/{filename}"
    with urllib.request.urlopen(url) as r:
        svg_bytes = r.read()
    b64 = base64.b64encode(svg_bytes).decode('ascii')
    return f"data:image/svg+xml;base64,{b64}"

# At the start of each generation (Post OR Ads):
LOGO_WHITE          = fetch_logo_b64("GCS-Symbol-White.svg")      # Slides 1, 2, 5 and Ads
LOGO_BLUE           = fetch_logo_b64("GCS-Symbol-Blue.svg")       # Slide 3
LOGO_WORDMARK_BLUE  = fetch_logo_b64("GCS-Secondary-Blue.svg")    # Slide 4 footer
LOGO_WORDMARK_WHITE = fetch_logo_b64("GCS-Secondary-White.svg")   # Ads footer

# Use in HTML — directly as <img>, no wrapper div:
# <img src="{LOGO_WHITE}" style="width:72px;height:72px;object-fit:contain;" alt="GCS">
# <img src="{LOGO_BLUE}" style="width:72px;height:72px;object-fit:contain;" alt="GCS">
# <img src="{LOGO_WORDMARK_BLUE}" style="height:32px;object-fit:contain;" alt="Global Citizen Solutions">
# <img src="{LOGO_WORDMARK_WHITE}" style="height:Npx;object-fit:contain;" alt="Global Citizen Solutions">
```

### Logos per slide/format (summary)

| Context | Logo | Size | Position |
|---|---|---|---|
| Slide 1 — Cover | `GCS-Symbol-White` | 72px | `top:44px; left:44px` |
| Slide 2 — Content+Image | `GCS-Symbol-White` | 72px | `top:44px; left:44px` (over photo) |
| Slide 3 — Content White | `GCS-Symbol-Blue` | 72px | `top:44px; left:44px` |
| Slide 4 — Quote | `GCS-Secondary-Blue` (blue wordmark) | height:32px | `bottom:52px` centred |
| Slide 5 — CTA Dark | `GCS-Symbol-White` | 104px | centred vertically |
| **Ads — all formats** | `GCS-Symbol-White` (top-left) + `GCS-Secondary-White` (footer) | 4.4% of width + proportional height | top-left + bottom-centre |

---

## Ads Template — GCS

### Source of truth

Templates in the repository: `https://github.com/vtorres-gcs/gcs-design-system/tree/main/templates`

| Template | File | Dimensions |
|---|---|---|
| Google Ads Square | `templates/google-ads-square/GoogleAdsSquare.dc.html` | 1200 × 1200 px |
| Google Ads Landscape | `templates/google-ads-landscape/GoogleAdsLandscape.dc.html` | 1200 × 628 px |
| Meta Ads Square | `templates/meta-ads-square/MetaAdsSquare.dc.html` | 1080 × 1080 px |
| Meta Ads Vertical | `templates/meta-ads-vertical/MetaAdsVertical.dc.html` | 1080 × 1920 px |

### Template anatomy (extracted from .dc.html files)

**Background gradient — identical across all 4 formats:**
```css
background: linear-gradient(180deg, rgba(0,9,87,0.1) 12.41%, rgb(0,9,87) 86.27%),
            url('./assets/background.jpg') center/cover no-repeat;
```
When the user provides a photo → replace `url('./assets/background.jpg')` with the base64 data URI of the photo.

**Template fields:**
- `{{ title }}` — main title. Supports line breaks with `\n` (CSS: `white-space:pre-line`). Yrsa 400.
- `{{ subtitle }}` — optional. Typically used for the site URL (`globalcitizensolutions.com`). Yrsa 400, `rgba(255,255,255,0.8)`.
- `{{ showSubtitle }}` — boolean. If `false`, subtitle does not appear.

**Logo — `GCS-Secondary-White` (full white wordmark):**
- Google Square, Google Landscape, Meta Square → **footer** (bottom, centred)
- Meta Vertical → **top** of the content block (above the title)

### Typography specs per format

| Format | Title (font-size) | Title (line-height) | Subtitle (font-size) | Wordmark | Footer padding |
|---|---|---|---|---|---|
| Google Square 1200×1200 | **110px** | 0.9 | 40px | 388×24px | `padding:40px 0` |
| Google Landscape 1200×628 | **90px** | 0.9 | 32px | 388×24px | `padding:32px 0` |
| Meta Square 1080×1080 | **100px** | 0.9 | 36px | 388×24px | `padding:40px 0` |
| Meta Vertical 1080×1920 | **100px** | 0.9 | 40px | 388×24px (top) | — |

**Content block padding:** `60px 125px` on all formats (Google Landscape and Square, Meta Square).
**Meta Vertical** has different padding: container `padding:0 60px`, inner `padding:60px 125px`.

### Ready-to-use HTML templates

```html
<!-- ═══════════════════════════════════════════════════════
     GOOGLE ADS SQUARE — 1200×1200
     ═══════════════════════════════════════════════════════ -->
<div style="width:1200px;height:1200px;overflow:hidden;position:relative;display:flex;flex-direction:column;">
  <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,9,87,0.1) 12.41%,rgb(0,9,87) 86.27%),url('{PHOTO_DATA_URI}') center/cover no-repeat;"></div>
  <div style="position:relative;z-index:1;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 125px;gap:32px;">
    <span style="font-family:'Yrsa',Georgia,serif;font-weight:400;font-size:110px;line-height:0.9;color:#ffffff;text-align:center;white-space:pre-line;align-self:stretch;">{TITLE}</span>
    <span style="font-family:'Yrsa',Georgia,serif;font-weight:400;font-size:40px;color:rgba(255,255,255,0.8);text-align:center;letter-spacing:0.02em;">{SUBTITLE}</span>
  </div>
  <div style="position:relative;z-index:1;display:flex;align-items:center;justify-content:center;padding:40px 0;flex-shrink:0;">
    <img src="{LOGO_WORDMARK_WHITE}" style="width:388px;height:24px;object-fit:contain;" alt="Global Citizen Solutions">
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════
     GOOGLE ADS LANDSCAPE — 1200×628
     ═══════════════════════════════════════════════════════ -->
<div style="width:1200px;height:628px;overflow:hidden;position:relative;display:flex;flex-direction:column;">
  <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,9,87,0.1) 12.41%,rgb(0,9,87) 86.27%),url('{PHOTO_DATA_URI}') center/cover no-repeat;"></div>
  <div style="position:relative;z-index:1;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 125px;gap:24px;">
    <span style="font-family:'Yrsa',Georgia,serif;font-weight:400;font-size:90px;line-height:0.9;color:#ffffff;text-align:center;white-space:pre-line;align-self:stretch;">{TITLE}</span>
    <span style="font-family:'Yrsa',Georgia,serif;font-weight:400;font-size:32px;color:rgba(255,255,255,0.8);text-align:center;letter-spacing:0.02em;">{SUBTITLE}</span>
  </div>
  <div style="position:relative;z-index:1;display:flex;align-items:center;justify-content:center;padding:32px 0;flex-shrink:0;">
    <img src="{LOGO_WORDMARK_WHITE}" style="width:388px;height:24px;object-fit:contain;" alt="Global Citizen Solutions">
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════
     META ADS SQUARE — 1080×1080
     ═══════════════════════════════════════════════════════ -->
<div style="width:1080px;height:1080px;overflow:hidden;position:relative;display:flex;flex-direction:column;">
  <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,9,87,0.1) 12.41%,rgb(0,9,87) 86.27%),url('{PHOTO_DATA_URI}') center/cover no-repeat;"></div>
  <div style="position:relative;z-index:1;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 125px;gap:32px;">
    <span style="font-family:'Yrsa',Georgia,serif;font-weight:400;font-size:100px;line-height:0.9;color:#ffffff;text-align:center;white-space:pre-line;align-self:stretch;">{TITLE}</span>
    <span style="font-family:'Yrsa',Georgia,serif;font-weight:400;font-size:36px;color:rgba(255,255,255,0.8);text-align:center;letter-spacing:0.02em;">{SUBTITLE}</span>
  </div>
  <div style="position:relative;z-index:1;display:flex;align-items:center;justify-content:center;padding:40px 0;flex-shrink:0;">
    <img src="{LOGO_WORDMARK_WHITE}" style="width:388px;height:24px;object-fit:contain;" alt="Global Citizen Solutions">
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════
     META ADS VERTICAL — 1080×1920
     ⚠️ DIFFERENT: wordmark AT TOP (above title), not in footer
     ═══════════════════════════════════════════════════════ -->
<div style="width:1080px;height:1920px;overflow:hidden;position:relative;display:flex;flex-direction:column;padding:0 60px;align-items:center;justify-content:center;box-sizing:border-box;">
  <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,9,87,0.1) 12.41%,rgb(0,9,87) 86.27%),url('{PHOTO_DATA_URI}') center/cover no-repeat;"></div>
  <div style="position:relative;z-index:1;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 125px;gap:40px;box-sizing:border-box;align-self:stretch;">
    <!-- Wordmark AT TOP — critical difference for Vertical format -->
    <img src="{LOGO_WORDMARK_WHITE}" style="width:388px;height:24px;object-fit:contain;flex-shrink:0;" alt="Global Citizen Solutions">
    <span style="font-family:'Yrsa',Georgia,serif;font-weight:400;font-size:100px;line-height:0.9;color:#ffffff;text-align:center;white-space:pre-line;align-self:stretch;">{TITLE}</span>
    <span style="font-family:'Yrsa',Georgia,serif;font-weight:400;font-size:40px;color:rgba(255,255,255,0.8);text-align:center;letter-spacing:0.02em;">{SUBTITLE}</span>
  </div>
</div>
```

### Python function to generate all Ads

```python
import base64, tarfile, io, urllib.request
from pathlib import Path

# Load logos and fonts (Yrsa only — Ads do not use Heebo)
GH = "https://raw.githubusercontent.com/vtorres-gcs/gcs-design-system/main/assets/logos"
def logo_uri(f):
    with urllib.request.urlopen(f"{GH}/{f}") as r:
        return f"data:image/svg+xml;base64,{base64.b64encode(r.read()).decode()}"

LOGO_WORDMARK_WHITE = logo_uri("GCS-Secondary-White.svg")

GRADIENT = "linear-gradient(180deg,rgba(0,9,87,0.1) 12.41%,rgb(0,9,87) 86.27%)"

def ad_head(fonts_css):
    return f"""<head><meta charset="utf-8"><style>
*{{box-sizing:border-box;margin:0;padding:0;}}body{{background:#000957;}}
{fonts_css}
</style></head>"""

def build_ad(format_name: str, title: str, subtitle: str,
             photo_data_uri: str, logo_wm: str, fonts_css: str) -> str:
    """
    format_name: 'google_square' | 'google_landscape' | 'meta_square' | 'meta_vertical'
    title: supports \n for line breaks
    subtitle: e.g. 'globalcitizensolutions.com' — use None to omit
    """
    SPECS = {
        "google_square":    (1200, 1200, 110, 40, 32, "40px 0"),
        "google_landscape": (1200,  628,  90, 32, 24, "32px 0"),
        "meta_square":      (1080, 1080, 100, 36, 32, "40px 0"),
        "meta_vertical":    (1080, 1920, 100, 40, 40, None),
    }
    w, h, title_px, sub_px, gap, footer_pad = SPECS[format_name]
    head = ad_head(fonts_css)
    bg = f"{GRADIENT},url('{photo_data_uri}') center/cover no-repeat"
    sub_html = (f'<span style="font-family:\'Yrsa\',Georgia,serif;font-weight:400;'
                f'font-size:{sub_px}px;color:rgba(255,255,255,0.8);text-align:center;'
                f'letter-spacing:0.02em;">{subtitle}</span>') if subtitle else ""
    wm_img = (f'<img src="{logo_wm}" style="width:388px;height:24px;'
              f'object-fit:contain;flex-shrink:0;" alt="Global Citizen Solutions">')

    if format_name == "meta_vertical":
        return f"""<!DOCTYPE html><html>{head}<body>
<div style="width:{w}px;height:{h}px;overflow:hidden;position:relative;display:flex;flex-direction:column;padding:0 60px;align-items:center;justify-content:center;box-sizing:border-box;">
  <div style="position:absolute;inset:0;background:{bg};"></div>
  <div style="position:relative;z-index:1;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 125px;gap:{gap}px;box-sizing:border-box;align-self:stretch;">
    {wm_img}
    <span style="font-family:'Yrsa',Georgia,serif;font-weight:400;font-size:{title_px}px;line-height:0.9;color:#ffffff;text-align:center;white-space:pre-line;align-self:stretch;">{title}</span>
    {sub_html}
  </div>
</div>
</body></html>"""
    else:
        return f"""<!DOCTYPE html><html>{head}<body>
<div style="width:{w}px;height:{h}px;overflow:hidden;position:relative;display:flex;flex-direction:column;">
  <div style="position:absolute;inset:0;background:{bg};"></div>
  <div style="position:relative;z-index:1;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 125px;gap:{gap}px;">
    <span style="font-family:'Yrsa',Georgia,serif;font-weight:400;font-size:{title_px}px;line-height:0.9;color:#ffffff;text-align:center;white-space:pre-line;align-self:stretch;">{title}</span>
    {sub_html}
  </div>
  <div style="position:relative;z-index:1;display:flex;align-items:center;justify-content:center;padding:{footer_pad};flex-shrink:0;">
    {wm_img}
  </div>
</div>
</body></html>"""


AD_FORMATS = {
    "google_square":    (1200, 1200),
    "google_landscape": (1200,  628),
    "meta_square":      (1080, 1080),
    "meta_vertical":    (1080, 1920),
}

slug = topic.replace(" ", "_").lower()
for fmt, (w, h) in AD_FORMATS.items():
    html = build_ad(
        format_name=fmt,
        title=title,           # e.g. "Portugal Golden Visa:\nPath to EU Residency"
        subtitle=subtitle,     # e.g. "globalcitizensolutions.com" or None
        photo_data_uri=USER_PHOTO_DATA_URI,
        logo_wm=LOGO_WORDMARK_WHITE,
        fonts_css=FONTS_CSS,   # Yrsa embedded via fontsource
    )
    Path(f"/home/claude/{slug}_{fmt}.html").write_text(html, encoding="utf-8")
```

### Important notes on the title field

- Use `\n` in the title to control line breaks (CSS `white-space:pre-line` active)
- For landscape, the title should be shorter (no breaks or at most one break)
- Suggested length: Square/Vertical → max. 5 words per line; Landscape → max. 7 words total
- The subtitle is normally `globalcitizensolutions.com` — ask the user if they want different text or none

### Rendering Ads with Playwright

```python
async def render_ads(formats: list[str], slug: str, w_h_map: dict) -> list[str]:
    paths = []
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        for fmt in formats:
            w, h = w_h_map[fmt]
            page = await browser.new_page(viewport={"width": w, "height": h})
            html = Path(f"/home/claude/{slug}_{fmt}.html").read_text()
            await page.set_content(html, wait_until="networkidle")
            await page.wait_for_timeout(500)
            out = f"/mnt/user-data/outputs/{slug}_{fmt}.png"
            await page.screenshot(path=out, full_page=False)
            await page.close()
            paths.append(out)
        await browser.close()
    return paths
```

### Slide 3 — Content rules

**Slide Type 1 — Cover:**
- Overline in uppercase, Heebo 500, Electric Blue `#3F8CFF`, letter-spacing 0.13em
- Headline in Yrsa 400, white, 72px, line-height 1.08
- Always requires a photo — if none, use `background:#7a8fa0` (blue-grey placeholder)
- No body text — overline + headline only

**Slide Type 2 — Content + Image:**
- Use **only when a relevant photo exists** from the user
- Photo on top: 1080×594px
- Heading: Yrsa 400, Night Blue `#000957`, 74px
- Body: Heebo 300, `#6b7280`, 34px, line-height 1.6
- Max. 40 words in body

**Slide Type 3 — Content White:**
- Pure white background — **never a gradient in this type**
- Logo: `GCS-Symbol-Blue`, `top:44px; left:44px`
- Optional overline: Heebo 600, Electric Blue `#3F8CFF`, uppercase, letter-spacing 0.13em
- Heading: Yrsa 400, Night Blue `#000957`, 74px, line-height 1.08
- Content starts at `top:380px` — logo stays at top with no overlap

**Slide Type 3 — Layout modes (Claude decides based on content):**

Slide 3 supports two modes. Claude chooses the most appropriate for the content, without needing approval:

| Mode | When to use | What it includes |
|---|---|---|
| **Text** | Descriptive value point, narrative context, editorial tip | Overline + Heading + Body (max. 40 words) |
| **Visual** | Numerical data, comparisons, rankings, processes, timelines, parallel lists | Visual asset generated as inline SVG/HTML + short heading |

**Visual mode — assets Claude can create:**

- **Bar chart** — comparison of values between countries, years, programmes
- **Donut / pie chart** — percentage distribution (e.g. investor profile by country of origin)
- **Comparison table** — side by side (e.g. Portugal vs. Malta vs. Greece)
- **Horizontal timeline** — process steps with dates (e.g. Golden Visa application process)
- **Styled numbered list** — ranking with icons or large numbers in Electric Blue
- **Stat cards** — 2–4 highlighted statistics (large Yrsa number + Heebo label)
- **Process infographic** — arrows or connectors between steps
- **Simplified map** — styled SVG (Schengen, Portugal, etc.) when geographically relevant

**Rules for visual assets in Slide 3:**

```
Mandatory palette:    Night Blue #000957 · Electric Blue #3F8CFF · Text grey #6b7280
                      Background always white #ffffff — never coloured backgrounds on blocks
Fonts:                Large numbers/values → Yrsa 400
                      Labels, legends, axes → Heebo 300/400
Corners:              border-radius:0 on EVERYTHING (charts, tables, cards, bars)
                      Exception: decorative circles (border-radius:50%)
Bars and lines:       Primary colour #000957 · Highlight colour #3F8CFF · Neutral #e5e7eb
Dividers:             1px solid #e5e7eb — never shadows
Spacing:              Multiples of 4px (4, 8, 12, 16, 24, 32, 48)
Max. asset width:     952px (1080 - 64px padding each side)
Available area:       From top:380px to bottom:60px → ≈910px useful height
```

**Slide Type 4 — Quote:**
- Circular speaker photo (`border-radius:50%`)
- Quote in Yrsa 400, `#1A2268`, 54px, centred, with typographic quotation marks
- Name in Heebo 500, Electric Blue, 28px
- Title in Heebo 400, `#9ca3af`, 22px
- Wordmark in footer (`height:32px`)

**Slide Type 5 — CTA:**
- Fixed structure — do not alter the button layout
- "Insightful" with `background:#1A2268` (highlighted)
- Headline Yrsa 400, white, 80px
- Body Heebo 300, `#9ca3af`, 32px

---

## Slide 3 — Visual Assets (implementation reference)

Claude generates the assets below directly as inline HTML/SVG, inside the Slide 3 content area (Visual mode). All use GCS tokens: `#000957`, `#3F8CFF`, `#6b7280`, `#e5e7eb`. `border-radius:0` on everything.

### Stat Cards (2–4 highlighted statistics)

```html
<div style="display:flex; gap:16px; margin-top:32px;">
  <div style="flex:1; padding:32px 24px; border:1px solid #e5e7eb; display:flex; flex-direction:column; gap:12px;">
    <span style="font-family:'Yrsa',serif; font-size:72px; font-weight:400; color:#000957; line-height:1;">€500k</span>
    <span style="font-family:'Heebo',sans-serif; font-size:22px; font-weight:400; color:#6b7280; line-height:1.4;">Minimum investment</span>
  </div>
  <div style="flex:1; padding:32px 24px; border:1px solid #e5e7eb; display:flex; flex-direction:column; gap:12px;">
    <span style="font-family:'Yrsa',serif; font-size:72px; font-weight:400; color:#3F8CFF; line-height:1;">27</span>
    <span style="font-family:'Heebo',sans-serif; font-size:22px; font-weight:400; color:#6b7280; line-height:1.4;">Schengen countries</span>
  </div>
  <div style="flex:1; padding:32px 24px; border:1px solid #e5e7eb; display:flex; flex-direction:column; gap:12px;">
    <span style="font-family:'Yrsa',serif; font-size:72px; font-weight:400; color:#000957; line-height:1;">5+1</span>
    <span style="font-family:'Heebo',sans-serif; font-size:22px; font-weight:400; color:#6b7280; line-height:1.4;">Years to citizenship</span>
  </div>
</div>
```

### Horizontal Bar Chart

```html
<div style="display:flex; flex-direction:column; gap:20px; margin-top:32px;">
  <div style="display:flex; flex-direction:column; gap:8px;">
    <div style="display:flex; justify-content:space-between; align-items:baseline;">
      <span style="font-family:'Heebo',sans-serif; font-size:24px; font-weight:400; color:#000957;">Portugal</span>
      <span style="font-family:'Yrsa',serif; font-size:32px; font-weight:400; color:#000957;">€500k</span>
    </div>
    <div style="height:12px; background:#e5e7eb;">
      <div style="height:12px; width:60%; background:#000957;"></div>
    </div>
  </div>
  <div style="display:flex; flex-direction:column; gap:8px;">
    <div style="display:flex; justify-content:space-between; align-items:baseline;">
      <span style="font-family:'Heebo',sans-serif; font-size:24px; font-weight:400; color:#000957;">Malta</span>
      <span style="font-family:'Yrsa',serif; font-size:32px; font-weight:400; color:#000957;">€690k</span>
    </div>
    <div style="height:12px; background:#e5e7eb;">
      <div style="height:12px; width:82%; background:#3F8CFF;"></div>
    </div>
  </div>
  <div style="display:flex; flex-direction:column; gap:8px;">
    <div style="display:flex; justify-content:space-between; align-items:baseline;">
      <span style="font-family:'Heebo',sans-serif; font-size:24px; font-weight:400; color:#000957;">Greece</span>
      <span style="font-family:'Yrsa',serif; font-size:32px; font-weight:400; color:#000957;">€400k</span>
    </div>
    <div style="height:12px; background:#e5e7eb;">
      <div style="height:12px; width:48%; background:#6b7280;"></div>
    </div>
  </div>
</div>
```

### Comparison Table

```html
<div style="margin-top:32px; border:1px solid #e5e7eb;">
  <div style="display:grid; grid-template-columns:1fr 1fr 1fr; background:#000957;">
    <div style="padding:20px 24px;">
      <span style="font-family:'Heebo',sans-serif; font-size:20px; font-weight:500; color:#fff; letter-spacing:0.05em;">CRITERIA</span>
    </div>
    <div style="padding:20px 24px; border-left:1px solid rgba(255,255,255,0.15);">
      <span style="font-family:'Heebo',sans-serif; font-size:20px; font-weight:500; color:#fff;">Portugal</span>
    </div>
    <div style="padding:20px 24px; border-left:1px solid rgba(255,255,255,0.15);">
      <span style="font-family:'Heebo',sans-serif; font-size:20px; font-weight:500; color:#6b7280;">Malta</span>
    </div>
  </div>
  <div style="display:grid; grid-template-columns:1fr 1fr 1fr; border-top:1px solid #e5e7eb;">
    <div style="padding:20px 24px;"><span style="font-family:'Heebo',sans-serif; font-size:22px; color:#6b7280;">Investment</span></div>
    <div style="padding:20px 24px; border-left:1px solid #e5e7eb;"><span style="font-family:'Yrsa',serif; font-size:28px; color:#000957;">€500k</span></div>
    <div style="padding:20px 24px; border-left:1px solid #e5e7eb;"><span style="font-family:'Yrsa',serif; font-size:28px; color:#6b7280;">€690k</span></div>
  </div>
  <div style="display:grid; grid-template-columns:1fr 1fr 1fr; border-top:1px solid #e5e7eb;">
    <div style="padding:20px 24px;"><span style="font-family:'Heebo',sans-serif; font-size:22px; color:#6b7280;">Citizenship</span></div>
    <div style="padding:20px 24px; border-left:1px solid #e5e7eb;"><span style="font-family:'Yrsa',serif; font-size:28px; color:#000957;">5 years</span></div>
    <div style="padding:20px 24px; border-left:1px solid #e5e7eb;"><span style="font-family:'Yrsa',serif; font-size:28px; color:#6b7280;">36 months</span></div>
  </div>
  <div style="display:grid; grid-template-columns:1fr 1fr 1fr; border-top:1px solid #e5e7eb;">
    <div style="padding:20px 24px;"><span style="font-family:'Heebo',sans-serif; font-size:22px; color:#6b7280;">Schengen</span></div>
    <div style="padding:20px 24px; border-left:1px solid #e5e7eb;"><span style="font-family:'Yrsa',serif; font-size:28px; color:#3F8CFF;">✓ Yes</span></div>
    <div style="padding:20px 24px; border-left:1px solid #e5e7eb;"><span style="font-family:'Yrsa',serif; font-size:28px; color:#3F8CFF;">✓ Yes</span></div>
  </div>
</div>
```

### Process Timeline

```html
<div style="display:flex; align-items:flex-start; position:relative; margin-top:40px;">
  <div style="position:absolute; top:28px; left:28px; right:28px; height:2px; background:#e5e7eb; z-index:0;"></div>
  <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:16px; position:relative; z-index:1;">
    <div style="width:56px; height:56px; background:#000957; display:flex; align-items:center; justify-content:center;">
      <span style="font-family:'Yrsa',serif; font-size:28px; color:#fff;">1</span>
    </div>
    <span style="font-family:'Heebo',sans-serif; font-size:22px; font-weight:500; color:#000957; text-align:center;">Application</span>
    <span style="font-family:'Heebo',sans-serif; font-size:18px; color:#6b7280; text-align:center;">1–2 weeks</span>
  </div>
  <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:16px; position:relative; z-index:1;">
    <div style="width:56px; height:56px; background:#3F8CFF; display:flex; align-items:center; justify-content:center;">
      <span style="font-family:'Yrsa',serif; font-size:28px; color:#fff;">2</span>
    </div>
    <span style="font-family:'Heebo',sans-serif; font-size:22px; font-weight:500; color:#000957; text-align:center;">Approval</span>
    <span style="font-family:'Heebo',sans-serif; font-size:18px; color:#6b7280; text-align:center;">3–6 months</span>
  </div>
  <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:16px; position:relative; z-index:1;">
    <div style="width:56px; height:56px; background:#000957; display:flex; align-items:center; justify-content:center;">
      <span style="font-family:'Yrsa',serif; font-size:28px; color:#fff;">3</span>
    </div>
    <span style="font-family:'Heebo',sans-serif; font-size:22px; font-weight:500; color:#000957; text-align:center;">Residency</span>
    <span style="font-family:'Heebo',sans-serif; font-size:18px; color:#6b7280; text-align:center;">Issued</span>
  </div>
  <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:16px; position:relative; z-index:1;">
    <div style="width:56px; height:56px; background:#3F8CFF; display:flex; align-items:center; justify-content:center;">
      <span style="font-family:'Yrsa',serif; font-size:28px; color:#fff;">4</span>
    </div>
    <span style="font-family:'Heebo',sans-serif; font-size:22px; font-weight:500; color:#000957; text-align:center;">Citizenship</span>
    <span style="font-family:'Heebo',sans-serif; font-size:18px; color:#6b7280; text-align:center;">After 5 years</span>
  </div>
</div>
```

### Styled Numbered List (Ranking)

```html
<div style="display:flex; flex-direction:column; gap:4px; margin-top:24px;">
  <div style="display:flex; align-items:center; gap:32px; padding:24px 0; border-bottom:1px solid #e5e7eb;">
    <span style="font-family:'Yrsa',serif; font-size:64px; font-weight:400; color:#e5e7eb; line-height:1; min-width:56px;">1</span>
    <div style="display:flex; flex-direction:column; gap:6px;">
      <span style="font-family:'Heebo',sans-serif; font-size:30px; font-weight:500; color:#000957;">Portugal</span>
      <span style="font-family:'Heebo',sans-serif; font-size:22px; font-weight:300; color:#6b7280;">Henley Index — 189 visa-free destinations</span>
    </div>
  </div>
  <div style="display:flex; align-items:center; gap:32px; padding:24px 0; border-bottom:1px solid #e5e7eb;">
    <span style="font-family:'Yrsa',serif; font-size:64px; font-weight:400; color:#e5e7eb; line-height:1; min-width:56px;">2</span>
    <div style="display:flex; flex-direction:column; gap:6px;">
      <span style="font-family:'Heebo',sans-serif; font-size:30px; font-weight:500; color:#000957;">Malta</span>
      <span style="font-family:'Heebo',sans-serif; font-size:22px; font-weight:300; color:#6b7280;">Henley Index — 188 visa-free destinations</span>
    </div>
  </div>
  <div style="display:flex; align-items:center; gap:32px; padding:24px 0;">
    <span style="font-family:'Yrsa',serif; font-size:64px; font-weight:400; color:#e5e7eb; line-height:1; min-width:56px;">3</span>
    <div style="display:flex; flex-direction:column; gap:6px;">
      <span style="font-family:'Heebo',sans-serif; font-size:30px; font-weight:500; color:#000957;">Greece</span>
      <span style="font-family:'Heebo',sans-serif; font-size:22px; font-weight:300; color:#6b7280;">Henley Index — 187 visa-free destinations</span>
    </div>
  </div>
</div>
```

### How Claude decides between Text and Visual

```
Content with numbers, percentages, rankings, comparisons between ≥2 items
  → Visual Mode

Narrative, explanatory, editorial tip, single value point
  → Text Mode

Unsure? Check: "Would this be clearer as a table/chart than a paragraph?"
  → If yes → Visual Mode
```

---

## Image Embedding — Playwright

### Embedding user-provided images

All images sent by the user must be embedded as base64 `data:` URIs — never as relative paths.

```python
import base64
from pathlib import Path

def embed_image(file_path: str) -> str:
    """Converts an image to a base64 data URI for embedding in HTML."""
    p = Path(file_path)
    import subprocess
    result = subprocess.run(["file", "--mime-type", "-b", file_path], capture_output=True, text=True)
    mime = result.stdout.strip() or "image/jpeg"
    b64 = base64.b64encode(p.read_bytes()).decode()
    return f"data:{mime};base64,{b64}"

# Use in slide HTML:
# data_uri = embed_image("/mnt/user-data/uploads/photo.jpg")
# <img src="{data_uri}" style="...object-fit:cover...">
```

**Embedding rules:**
- Always use `data:` URI — works in preview, export and any environment
- Never use relative paths (`photo.png`)
- Always use `<img>` tag with `object-fit: cover` for background images
- Generate HTML via Python (`Path.write_text()`) — never via shell heredoc (interpolates `$` and backticks)

### ⚠️ Fonts — Critical rule: ALWAYS use embedded @font-face

**Google Fonts (`fonts.googleapis.com`) is blocked in Claude's execution environment.** A `<link>` to googleapis in the `<head>` will not load fonts — Playwright renders with generic system fonts, producing incorrect output.

**Mandatory solution:** Download `.woff2` files from npm (`registry.npmjs.org` is available) and embed as base64 `@font-face` in each slide HTML.

```python
# ─────────────────────────────────────────────────────────────
# STEP 0 (run ONCE per session, before generating slides)
# Downloads Yrsa + Heebo from npm and generates embedded @font-face CSS
# ─────────────────────────────────────────────────────────────
import base64, tarfile, io, urllib.request
from pathlib import Path

def download_fontsource_css(package: str, version: str, files: list[tuple]) -> str:
    url = f"https://registry.npmjs.org/@fontsource/{package}/-/{package}-{version}.tgz"
    with urllib.request.urlopen(url) as r:
        tgz_bytes = r.read()
    with tarfile.open(fileobj=io.BytesIO(tgz_bytes), mode="r:gz") as tar:
        font_data = {}
        for fname, *_ in files:
            try:
                f = tar.extractfile(tar.getmember(f"package/files/{fname}"))
                font_data[fname] = f.read()
            except KeyError:
                print(f"⚠️  {fname} not found in tarball")
    css_blocks = []
    for fname, font_family, weight, style in files:
        if fname in font_data:
            b64 = base64.b64encode(font_data[fname]).decode('ascii')
            css_blocks.append(
                f"@font-face {{\n"
                f"  font-family: '{font_family}';\n"
                f"  font-style: {style};\n"
                f"  font-weight: {weight};\n"
                f"  src: url('data:font/woff2;base64,{b64}') format('woff2');\n"
                f"}}"
            )
    return "\n".join(css_blocks)


def get_fonts_css() -> str:
    """Returns the full CSS block with Yrsa and Heebo embedded."""
    yrsa_css = download_fontsource_css(
        package="yrsa", version="5.2.10",
        files=[
            ("yrsa-latin-400-normal.woff2", "Yrsa", 400, "normal"),
            ("yrsa-latin-500-normal.woff2", "Yrsa", 500, "normal"),
        ]
    )
    heebo_css = download_fontsource_css(
        package="heebo", version="5.2.8",
        files=[
            ("heebo-latin-300-normal.woff2", "Heebo", 300, "normal"),
            ("heebo-latin-400-normal.woff2", "Heebo", 400, "normal"),
            ("heebo-latin-500-normal.woff2", "Heebo", 500, "normal"),
        ]
    )
    return yrsa_css + "\n\n" + heebo_css


FONTS_CSS = get_fonts_css()   # ~80KB, called once per session

def slide_head() -> str:
    return f"""<head>
<meta charset="utf-8">
<style>
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}
  body {{ background: #0a0b12; }}
  {FONTS_CSS}
</style>
</head>"""
```

**Fixed npm versions** (update if necessary):
- `@fontsource/yrsa` → `5.2.10`
- `@fontsource/heebo` → `5.2.8`

### Rendering with Playwright

```python
import asyncio
from playwright.async_api import async_playwright
import zipfile, os
from PIL import Image

async def render_all_slides(slides_html: list[str], prefix: str,
                            width: int = 1080, height: int = 1350) -> list[str]:
    paths = []
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        for i, html in enumerate(slides_html, 1):
            path = f"{prefix}_slide_{i:02d}.png"
            page = await browser.new_page(viewport={"width": width, "height": height})
            await page.set_content(html, wait_until="networkidle")
            await page.wait_for_timeout(500)
            await page.screenshot(path=path, full_page=False)
            await page.close()
            paths.append(path)
        await browser.close()
    return paths

def zip_slides(png_paths: list[str], zip_path: str) -> str:
    with zipfile.ZipFile(zip_path, "w") as zf:
        for p in png_paths:
            zf.write(p, arcname=os.path.basename(p))
    return zip_path

def pngs_to_pdf(png_paths: list[str], pdf_path: str) -> str:
    images = [Image.open(p).convert("RGB") for p in png_paths]
    images[0].save(pdf_path, save_all=True, append_images=images[1:], resolution=150)
    return pdf_path

async def build_carousel(slides_html: list[str], topic: str, platform: str) -> str:
    slug = topic.replace(" ", "_").lower()
    prefix = f"/home/claude/{slug}"
    if platform == "linkedin":
        pngs = await render_all_slides(slides_html, prefix, 1080, 1350)
        return pngs_to_pdf(pngs, f"{prefix}_linkedin.pdf")
    elif platform in ("twitter", "facebook"):
        pngs = await render_all_slides(slides_html, prefix, 1080, 1080)
        return zip_slides(pngs, f"{prefix}_{platform}.zip")
    else:
        pngs = await render_all_slides(slides_html, prefix, 1080, 1350)
        return zip_slides(pngs, f"{prefix}_instagram.zip")
```

### Install dependencies

```bash
pip install playwright pillow --break-system-packages
playwright install chromium
```

---

## Consistency Rules

| Element | Rule |
|---|---|
| **Logo — critical rule** | **NEVER use a CSS circle as logo background.** Always use `<img src="{LOGO_DATA_URI}">` directly. SVGs already have the correct background internally. |
| Logo Slides 1, 2, 5 | `GCS-Symbol-White.svg` — white star, directly on photo/dark background |
| Logo Slide 3 | `GCS-Symbol-Blue.svg` — contains internal white circle, use on white background |
| Logo Slide 4 footer | `GCS-Secondary-Blue.svg` — full wordmark, `height:32px`, centred |
| Logo size | 72px on slides 1, 2, 3 · 104px on slide 5 |
| Overlay on photos | Always Night Blue — `rgba(0,9,87,x)` — **never pure black** |
| Electric Blue | Only on overlines, sequence numbers and Q&A — **never in body text** |
| Corner radius | `0` on all layout elements · only speaker photos have `border-radius:50%` |
| Headings | Always Yrsa (serif) — **never Heebo in headings** |
| Gradient | Always `#000957` (top) → `#0F1A2D` (base) — **never invert** |
| Max. words/slide | 40 words in body · headlines up to 12 words |
| Swipe cue | "Swipe →" always on slide 1 |
| Content language | Write all slide and ad copy in the language selected in Step 1 (Portuguese BR or English) |

---

## Common Errors

| Error | Problem | Fix |
|---|---|---|
| **CSS circle as logo background** | ⛔ Violates GCS identity | Use `<img src="{LOGO_DATA_URI}">` directly — SVGs already have the correct background |
| White logo on white background | Logo invisible | Slide 3 uses `GCS-Symbol-Blue` (which has an internal white circle) |
| Blue logo on dark background | Logo invisible | Slides 1, 2, 5 use `GCS-Symbol-White` |
| Corner radius on blocks | Outside GCS identity | `border-radius:0` on everything except speaker photos |
| Black overlay on photos | Loses branding | `rgba(0,9,87,x)` — always Night Blue |
| Electric Blue in body text | Disrupts hierarchy | Electric Blue only on overlines and Q&A |
| Heebo in headings | Breaks editorial identity | Headings always Yrsa/Georgia |
| Missing logo | Loses brand recognition | GCS logo always present |
| Last slide without CTA | Missed opportunity | Always use Slide Type 5 |
| Decontextualised photo | Unrelated image on slide | Use pure gradient when no image fits |
| Image with relative path | Image fails to load in export | Always convert to base64 `data:` URI |
| HTML generated via shell heredoc | Base64 corrupted by `$` interpolation | Always use Python `Path.write_text()` |
| Inverted gradient | Outside GCS identity | `#000957` top → `#0F1A2D` base |
| Generating slides without approval | ⛔ Violates workflow | Plan → approval → generation |
| Wrong content language | Copy not in requested language | Always write in the language confirmed in Step 1 |

---

> **Workflow reminder:**
> **1** → Ask for images + language + confirm platform(s) · **2** → Plan with slide type per position — include language (wait for approval) · **3** → Explicit approval · **4** → Generate: Type 1 (hook with photo), Type 2/3 (white content), Type 4 (optional quote), Type 5 (CTA) → embed images as base64 → render with Playwright → deliver PDF (LinkedIn) or ZIP (others) · **5** → Ask what to do next.
>
> **All written content goes on a white background (Type 2 or Type 3). Never generate slides without Plan approval. Always write copy in the language selected in Step 1.**
