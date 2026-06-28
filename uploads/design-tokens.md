# GCS Design System — Design Tokens

Fonte de verdade: `src/index.css` e `tailwind.config.ts`.
Todas as cores em HSL. Espaçamento base 4pt. Corner radius 0 (cantos retos).

---

## 1. Cores

### 1.1 Brand — Night Blue
| Token | HSL | HEX | Tailwind |
|---|---|---|---|
| `--night-blue-25`  | `218 17% 92%`   | `#E8EBF0` | `nightBlue-25` |
| `--night-blue-50`  | `233 22% 75%`   | `#B3B5CD` | `nightBlue-50` |
| `--night-blue-100` | `232 18% 59%`   | `#8084AB` | `nightBlue-100` |
| `--night-blue-200` | `233 41% 34%`   | `#333A79` | `nightBlue-200` |
| `--night-blue-300` | `233 60% 26%`   | `#1A2268` | `nightBlue-300` |
| `--night-blue-400` | `233 100% 17%`  | `#000957` | `nightBlue-400` *(primary)* |

### 1.2 Brand — Electric Blue
| Token | HSL | HEX | Tailwind |
|---|---|---|---|
| `--electric-blue-25`  | `215 100% 96%` | `#ECF4FF` | `electricBlue-25` |
| `--electric-blue-50`  | `216 100% 93%` | `#D9E8FF` | `electricBlue-50` |
| `--electric-blue-400` | `216 100% 62%` | `#3F8CFF` | `electricBlue-400` *(accent)* |

### 1.3 Star (rating)
| Token | HSL | HEX | Tailwind |
|---|---|---|---|
| `--star` | `47 100% 44%` | `#DFB300` | `star` |

### 1.4 Tokens semânticos — Light
| Token | HSL |
|---|---|
| `--background` | `210 20% 98%` |
| `--foreground` | `220 43% 11%` |
| `--card` / `--popover` | `0 0% 100%` |
| `--card-foreground` / `--popover-foreground` | `220 43% 11%` |
| `--primary` | `233 100% 17%` |
| `--primary-foreground` | `0 0% 100%` |
| `--secondary` | `216 100% 62%` |
| `--secondary-foreground` | `0 0% 100%` |
| `--muted` | `218 21% 93%` |
| `--muted-foreground` | `221 13% 46%` |
| `--accent` | `216 100% 62%` |
| `--accent-foreground` | `0 0% 100%` |
| `--destructive` | `0 84% 60%` |
| `--destructive-foreground` | `0 0% 100%` |
| `--border` / `--input` | `216 100% 93%` |
| `--ring` | `233 100% 17%` |

### 1.5 Tokens semânticos — Dark
| Token | HSL |
|---|---|
| `--background` | `233 100% 17%` |
| `--foreground` | `0 0% 100%` |
| `--card` / `--popover` | `234 100% 22%` |
| `--primary` | `0 0% 100%` |
| `--primary-foreground` | `233 100% 17%` |
| `--secondary` | `220 43% 11%` |
| `--muted` | `220 43% 11%` |
| `--accent` | `216 100% 62%` |
| `--destructive` | `0 63% 31%` |
| `--border` / `--input` | `220 43% 11%` |
| `--ring` | `0 0% 100%` |

### 1.6 Escala Primary (alias Night Blue)
`--primary-50` → `nightBlue-25` · `--primary-100/200` → `nightBlue-50` · `--primary-300` → `nightBlue-100` · `--primary-400` → `nightBlue-200` · `--primary-500/700` → `nightBlue-300` · `--primary-600` `233 80% 22%` · `--primary-800` → `nightBlue-400` · `--primary-900` `233 100% 12%`.

### 1.7 Escala Secondary (Electric Blue)
`--secondary-50` `215 100% 96%` · `100` `216 100% 93%` · `200` `216 100% 85%` · `300` `216 100% 76%` · `400` `216 100% 68%` · `500` `216 100% 62%` · `600` `216 100% 55%` · `700` `216 100% 45%` · `800` `216 100% 35%` · `900` `216 100% 25%`.

### 1.8 Charts
`--chart-1` primary · `--chart-2` accent · `--chart-3` muted-fg · `--chart-4` border · `--chart-5` muted.

### 1.9 Sidebar
`--sidebar-background` (light `233 100% 17%`, dark `234 100% 14%`) · `--sidebar-foreground` `0 0% 100%` · `--sidebar-primary` accent (light) / white (dark) · `--sidebar-accent` muted · `--sidebar-border` border · `--sidebar-ring` ring.

---

## 2. Tipografia

### 2.1 Famílias
| Token | Valor |
|---|---|
| `--font-sans`  | `Heebo, system-ui, sans-serif` |
| `--font-serif` | `Yrsa, Georgia, serif` |
| `--font-mono`  | `JetBrains Mono, monospace` |

### 2.2 Letter-spacing
| Token | Valor |
|---|---|
| `--tracking-tighter` | `-0.05em` |
| `--tracking-tight`   | `-0.025em` |
| `--tracking-normal`  | `-0.01em` |
| `--tracking-wide`    | `0.025em` |
| `--tracking-wider`   | `0.05em` |
| `--tracking-widest`  | `0.1em` |

### 2.3 Escala (utilitários)
| Classe | Família | Tamanho | Line-height | Weight |
|---|---|---|---|---|
| `.text-display-xl` | Yrsa  | 60px | 64px | 400 |
| `.text-display-l`  | Yrsa  | 48px | 54px | 400 |
| `.text-display-md` | Yrsa  | 36px | 40px | 400 |
| `.text-h1`         | Yrsa  | 48px | 54px | 400 |
| `.text-h2`         | Yrsa  | 36px | 40px | 400 |
| `.text-h3`         | Heebo | 30px | 1.4  | 300 |
| `.text-h4`         | Heebo | 24px | 1.4  | 400 |
| `.text-display-xs` | Heebo | 24px | 1.4  | 400 |
| `.text-text-xl`    | Heebo | 20px | 1.4  | 400 |
| `.text-body-large` | Heebo | 18px | 1.4  | 400 |
| `.text-body`       | Heebo | 16px | 1.4  | 400 |
| `.text-body-small` | Heebo | 14px | 20px | 400 |
| `.text-caption`    | Heebo | 12px | 1.4  | 400 (tracking-wide) |
| `.text-overline`   | Heebo | 12px | 1.4  | 600 (uppercase, tracking-widest) |
| `.text-serif-lg`   | Yrsa  | 18px | 28px | 500 |

---

## 3. Layout

### 3.1 Radius
| Token | Valor |
|---|---|
| `--radius`    | `0rem` *(default — cantos retos)* |
| `--radius-sm` | `0.125rem` |
| `--radius-md` | `0.25rem` |
| `--radius-lg` | `0.5rem` |
| `--radius-xl` | `0.75rem` |

### 3.2 Spacing
`--spacing: 0.25rem` (escala 4pt).

### 3.3 Container
Centralizado, padding `2rem`, breakpoint `2xl: 1400px`.

---

## 4. Sombras

Variáveis base: `--shadow-x`, `--shadow-y`, `--shadow-blur`, `--shadow-spread`, `--shadow-opacity`, `--shadow-color`.

| Token | Light | Dark |
|---|---|---|
| `--shadow-2xs` | `0 4px 10px 0 hsl(0 0 0 / .03)` | `0 10px 15px 0 hsl(0 0 0 / .15)` |
| `--shadow-xs`  | `0 1px 2px 0 hsl(220 43% 11% / .05)` | `0 10px 15px 0 hsl(0 0 0 / .15)` |
| `--shadow-sm`  | `0 4px 10px / .05 + 0 1px 2px -1px / .05` | `0 10px 15px / .30 + 0 1px 2px -1px / .30` |
| `--shadow`     | igual a `sm` | igual a `sm` (dark) |
| `--shadow-md`  | `0 4px 10px / .05 + 0 2px 4px -1px / .05` | `0 10px 15px / .30 + 0 2px 4px -1px / .30` |
| `--shadow-lg`  | `0 4px 10px / .05 + 0 4px 6px -1px / .05` | `0 10px 15px / .30 + 0 4px 6px -1px / .30` |
| `--shadow-xl`  | `0 4px 10px / .05 + 0 8px 10px -1px / .05` | `0 10px 15px / .30 + 0 8px 10px -1px / .30` |
| `--shadow-2xl` | `0 4px 10px 0 hsl(0 0 0 / .13)` | `0 10px 15px 0 hsl(0 0 0 / .75)` |

---

## 5. Animações

| Keyframe / animação | Definição |
|---|---|
| `accordion-down` | `0 → var(--radix-accordion-content-height)` em `0.2s ease-out` |
| `accordion-up`   | inverso, `0.2s ease-out` |
| `fade-in`        | `opacity 0→1` + `translateY(10px → 0)` em `0.5s ease-out forwards` |
