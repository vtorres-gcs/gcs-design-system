---
name: gcs-social-media
description: "Multi-slide carousel design para Instagram e LinkedIn com identidade visual da Global Citizen Solutions. Cobre estrutura de slides, hierarquia de texto, psicologia do swipe e specs por plataforma. Use para: carousel posts, Instagram carousels, LinkedIn carousels, slide posts, conteúdo educacional GCS. Triggers: carousel, instagram carousel, linkedin carousel, slide post, carousel GCS, swipe post, multi-image post, carousel template, educational carousel, carousel content, instagram slides, linkedin slides, global citizen solutions carousel"
allowed-tools: Bash(*)
---

# Social Media Carousel — Global Citizen Solutions

Gera carousels de alta performance com identidade visual GCS. Utiliza imagens fornecidas pelo utilizador. Slides renderizados com **Playwright** e exportados como PNG (Instagram/Twitter/X/Facebook) ou PDF (LinkedIn).

---

## ⚠️ Workflow Obrigatório — Seguir Sempre Esta Ordem

```
PASSO 1 → Receber input do utilizador
PASSO 2 → Apresentar Plano do Carousel para aprovação
PASSO 3 → Aguardar aprovação explícita (⛔ NÃO criar slides sem aprovação)
PASSO 4 → Gerar os slides no formato correto por plataforma
PASSO 5 → Perguntar ao utilizador o que fazer a seguir
```

**NUNCA saltar o Passo 2 e 3.** Mesmo que o utilizador envie conteúdo completo, o Plano deve ser apresentado e aprovado antes de qualquer geração de slides.

---

## Passo 1 — Receber Input

**Ao iniciar qualquer pedido, fazer SEMPRE estas 4 perguntas em sequência antes de qualquer outra coisa:**

---

> **Pergunta 1 — Formato:**
> 🖼️ **"É um post de imagem única ou um carrossel?"**
> *(Post único = apenas Slide 1 (Cover). Carrossel = múltiplos slides com Tipos 1–5.)*

---

> **Pergunta 2 — Imagem de capa (obrigatória):**
> 📎 **"Pode enviar a foto da capa do carrossel (ou a imagem do post único)?"**
> *(Aguardar upload. **Não avançar sem receber a imagem.** A capa é obrigatória — o Slide 1 requer sempre uma foto.)*

---

> **Pergunta 3 — Imagens adicionais (opcional):**
> 🖼️ **"Há mais alguma imagem que queira usar nos outros slides?"**
> *(Se o utilizador não enviar imagens adicionais → usar Slide 3 (branco, texto apenas) para todos os slides de conteúdo. Se enviar → usar Slide 2 (foto topo + texto branco) nos slides que tiverem foto.)*

---

> **Pergunta 4 — Plataforma:**
> 📱 **"Para qual plataforma é o carousel — Instagram, LinkedIn, Twitter/X, Facebook, ou todas?"**
> *(Se responder "todas" → gerar outputs separados por plataforma conforme a tabela de saída.)*

---

**⛔ Só avançar para o Passo 2 depois de receber respostas às 4 perguntas.** A imagem de capa (Pergunta 2) é obrigatória — sem ela, não avançar.

### Regra: Post único vs. Carrossel

| Tipo | Slides gerados | Lógica |
|---|---|---|
| **Post único** | Apenas Slide 1 (Cover/Hook) | A foto enviada é usada como fundo full-bleed com overlay Night Blue |
| **Carrossel** | Slide 1 + Slides de conteúdo + Slide 5 (CTA) | Slide 2 se há foto, Slide 3 se não há; Quote (Slide 4) se relevante |

### Template de referência

O carousel usa o template **`Instagram_Carousel_-_Standalone.html`** como base. Este template tem **5 tipos de slide** fixos:

| Slide | Nome | Fundo | Uso |
|---|---|---|---|
| 1 | **Cover / Hook** | Foto full-bleed + overlay Night Blue gradiente | Slide de abertura; foto obrigatória |
| 2 | **Content + Image** | Foto no topo (594px), branco em baixo | Slide com imagem + texto explicativo |
| 3 | **Content — White** | Branco puro | **Padrão para TODO o conteúdo escrito** — sem foto |
| 4 | **Quote** | Branco puro | Citação com foto circular do speaker |
| 5 | **CTA — Dark** | Gradiente Night Blue (`#0c1563 → #000957 → #000644`) | Último slide sempre |

**Regra central:** o conteúdo escrito (pontos de valor, contexto, dicas, dados) vai sempre em **Slide 3 (branco, texto apenas)**. O Slide 2 só se usa quando existe uma foto relevante fornecida pelo utilizador.

---

### Forma A — Briefing (tema / intenção)
O utilizador descreve o tema, objetivo e plataforma. Claude propõe a estrutura completa baseada nos 5 tipos de slide do template.

> Exemplos: "Faz um carousel sobre o Portugal Golden Visa para LinkedIn", "Carousel educacional sobre cidadania por investimento"

### Forma B — Conteúdo direto (copy pronto)
O utilizador envia o conteúdo já escrito. Claude mapeia cada bloco para o tipo de slide correto (maioritariamente Slide 3) e apresenta o Plano para aprovação.

> Exemplos: paste de Google Doc, lista numerada de slides, artigo para transformar em carousel

**Em ambos os casos, o Passo 2 é obrigatório antes de gerar qualquer slide.**

---

## Passo 2 — Plano do Carousel (apresentar para aprovação)

Apresentar o Plano no formato abaixo. Ser conciso — o utilizador deve conseguir aprovar ou pedir alterações rapidamente.

```
📋 PLANO DO CAROUSEL

Tema: [tema principal]
Plataforma: [Instagram / LinkedIn / Twitter/X / Facebook / Multi-plataforma]
Formato de saída: [PDF (LinkedIn) / PNG ZIP (outras) / PDF + ZIPs]
Nº de slides: [n]
Tipo de carousel: [Artigo / Educacional / Q&A / Comparativo / Stats / "X Minutes With"]

SLIDES
──────────────────────────────────────────
Slide 1 — Cover / Hook  [Slide Tipo 1]
  Overline: [texto em maiúsculas — fonte Heebo, azul elétrico]
  Headline: [título — fonte Yrsa, branco, máx. 12 palavras]
  Imagem de fundo: [imagem fornecida: nome/descrição] OU [placeholder — cor #7a8fa0]

Slide 2 — [Tipo de conteúdo]  [Slide Tipo 2 — apenas se existe imagem relevante]
  Imagem topo: [imagem fornecida: nome/descrição]
  Heading: [título — Yrsa, Night Blue]
  Body: [copy — Heebo, máx. 40 palavras]

Slide 3 — [Tipo de conteúdo]  [Slide Tipo 3 — branco, texto apenas]
  Heading: [título — Yrsa, Night Blue]
  Body: [copy — Heebo, máx. 40 palavras]
  [Repetir para cada slide de conteúdo escrito]

Slide N-1 — Quote  [Slide Tipo 4 — se aplicável]
  Foto speaker: [imagem fornecida] OU [placeholder circular]
  Citação: ["texto da citação"]
  Nome: [Nome do speaker]
  Cargo: [Cargo, Global Citizen Solutions]

Slide N — CTA  [Slide Tipo 5]
  Headline: ["What do you think?" ou equivalente]
  Body: [texto + URL]
  CTA: [acção pedida]
──────────────────────────────────────────

✅ Aprovas este plano? Posso ajustar qualquer slide, mudar tipo,
   reescrever copy ou adicionar/remover slides antes de gerar.
```

**Aguardar resposta explícita antes de avançar.**
- Se aprovar → Passo 4
- Se pedir alterações → actualizar e reapresentar
- Se enviar conteúdo novo → incorporar e reapresentar

---

## Passo 3 — Aprovação

Só avançar quando o utilizador disser explicitamente:
- "Aprovado", "Ok", "Pode gerar", "Vai em frente", "Looks good", "✅" ou equivalente
- Uma alteração seguida de "agora sim" conta como aprovação da versão actualizada

⛔ **Não interpretar silêncio, dúvidas ou perguntas como aprovação.**

---

## Passo 4 — Formato de Saída por Plataforma

### Tabela resumo de saída

| Plataforma | Formato | Dimensões | Ficheiro entregue |
|---|---|---|---|
| LinkedIn | PDF | 1080 × 1350 px / página | `[tema]_linkedin.pdf` |
| Instagram | PNG × N | 1080 × 1350 px | `[tema]_instagram.zip` |
| Twitter/X | PNG × N | 1080 × 1080 px | `[tema]_twitter.zip` |
| Facebook | PNG × N | 1080 × 1080 px | `[tema]_facebook.zip` |
| Multi-plataforma | PDF + ZIP(s) | Conforme acima | Entregar separados por plataforma |

### Decisão: Foto fornecida vs. Gradiente Puro

Para cada slide, decidir com base nas imagens que o utilizador enviou:

| Tipo de slide | Usar foto? | Raciocínio |
|---|---|---|
| Hook — destino / lifestyle | ✅ Se fornecida | Foto ancora o lugar ou estilo de vida |
| Hook — dados / análise / conceito | ❌ Gradiente | Foto seria decorativa e enganosa |
| Contexto — narrativa | ❌ Gradiente (Template 0A) | Texto é o foco; foto distrai |
| Valor — ponto numerado | ✅ Se fornecida e relevante | Gradiente se nenhuma imagem encaixar |
| Quote / Speaker | ✅ Foto do speaker se fornecida | Foto circular da pessoa |
| CTA | ❌ Sem foto | Template 5L ou 5D |

**Se o utilizador não forneceu imagens ou não forneceu uma imagem adequada para determinado slide → usar Template 0 (gradiente puro).** Nunca usar foto descontextualizada só para ter imagem.

### LinkedIn → PDF

- Uma página por slide · dimensões 1080×1350px
- Todas as fontes incorporadas
- Resolução: 150dpi para nitidez em ecrãs retina
- Nome do ficheiro = título do carousel (aparece no feed LinkedIn)

### Instagram / Twitter/X / Facebook → PNG ZIP

- Playwright com viewport exacto por plataforma
- DPI: 72dpi · Colour space: sRGB
- Naming: `slide_01.png`, `slide_02.png`, ...
- Entregar em ZIP

---

## Passo 5 — Após Entrega

Após gerar e entregar, perguntar sempre:

> "Os ficheiros estão prontos. O que gostaria de fazer a seguir?
> — Ajustar algum slide
> — Gerar uma variação de template
> — Adaptar para outra plataforma
> — Criar a legenda para publicação
> — Iniciar um novo carousel"

---

## Design Tokens GCS

Fonte de verdade: `src/index.css` e `tailwind.config.ts`. **Nunca substituir por paletas genéricas.**

### Cores

| Token | HEX | Tailwind | Uso |
|---|---|---|---|
| `--night-blue-25` | `#E8EBF0` | `nightBlue-25` | Foreground escuro, borders |
| `--night-blue-50` | `#B3B5CD` | `nightBlue-50` | Texto muted sobre fundo claro |
| `--night-blue-100` | `#8084AB` | `nightBlue-100` | Decorativo, dividers |
| `--night-blue-200` | `#333A79` | `nightBlue-200` | Overlay médio sobre fotos |
| `--night-blue-300` | `#1A2268` | `nightBlue-300` | Headings sobre fundo branco |
| `--night-blue-400` | `#000957` | `nightBlue-400` | Background principal, logo, primary |
| `--electric-blue-25` | `#ECF4FF` | `electricBlue-25` | Background suave de badges |
| `--electric-blue-50` | `#D9E8FF` | `electricBlue-50` | Borders de destaque |
| `--electric-blue-400` | `#3F8CFF` | `electricBlue-400` | Overlines, números, CTAs, Q&A |
| `--star` | `#DFB300` | `star` | Ratings (uso raro) |

### Tokens Semânticos

| Token | Light | Dark |
|---|---|---|
| `--background` | `#F4F6F9` | `#000957` |
| `--foreground` | `#0D1633` | `#FFFFFF` |
| `--primary` | `#000957` | `#FFFFFF` |
| `--secondary` / accent | `#3F8CFF` | `#3F8CFF` |
| `--muted-foreground` | `#6B7280` | `rgba(232,235,240,0.65)` |
| `--border` | `#D9E8FF` | `#0D1633` |
| `--night-blue-25` (muted bg light) | `#E8EBF0` | — |

### Gradientes GCS

| Token | CSS | Uso |
|---|---|---|
| `--gradient-primary` | `linear-gradient(180deg, #000957 0%, #0F1A2D 100%)` | Background de slides escuros |
| `--gradient-overlay-photo` | `linear-gradient(180deg, rgba(0,9,87,0.15) 0%, rgba(0,9,87,0.60) 45%, rgba(15,26,45,0.92) 100%)` | Overlay sobre fotos full-bleed |
| `--gradient-band` | `linear-gradient(180deg, #1A2268 0%, #000957 100%)` | Faixa inferior sobre fotos |

**Regras:**
- Gradiente sempre `#000957` (topo) → `#0F1A2D` (base) — **nunca inverter**
- Não misturar gradiente primário com Night Blue `#1A2268` como fundo sólido no mesmo slide

### Tipografia

| Elemento | Família | Tamanho (1080px) | Line-height | Weight |
|---|---|---|---|---|
| Display / Hook | Yrsa / Georgia (serif) | 60–72px | 64–80px | 400 |
| Heading h1 | Yrsa / Georgia (serif) | 48–56px | 54–64px | 400 |
| Heading h2 | Yrsa / Georgia (serif) | 36–44px | 40–50px | 400 |
| Q&A | Yrsa / Georgia (serif) | 42–48px | 1.2 | 400 — Electric Blue |
| Quote | Yrsa / Georgia (serif) | 36–44px | 1.45 | 400 |
| Body text | Heebo / system-ui (sans) | 26–32px | 1.55 | 400 |
| Overline / label | Heebo / system-ui (sans) | 12–14px (×2.5 scale) | 1.4 | 600 — uppercase, tracking 0.1em |
| CTA / caption | Heebo / system-ui (sans) | 20–24px | 1.4 | 400 |
| Nome | Heebo / system-ui (sans) | 20–24px | 1.4 | 600 |
| Cargo | Heebo / system-ui (sans) | 16–18px | 1.4 | 400 — muted |

**Font families:**
- `--font-sans: Heebo, system-ui, sans-serif`
- `--font-serif: Yrsa, Georgia, serif`

### Identidade Visual

- **Corner radius: 0** (`--radius: 0rem`) em todos os elementos de layout
  - Excepções: fotos de speaker (`border-radius:50%`) e logo GCS (círculo)
- **Padding mínimo:** 72–80px (base spacing 4pt = 0.25rem)
- **Logo GCS:** sempre canto superior esquerdo (exceto Templates 4 e 5 onde é centrado)
  - Fundo escuro: círculo branco + estrela Night Blue `#000957`
  - Fundo claro: círculo Night Blue `#000957` + estrela branca
- **Overlay sobre fotos:** sempre Night Blue — `rgba(0,9,87,x)` — **nunca preto puro**
- **Foto de speaker:** `border-radius:50%` · border `4px solid white` (dark) ou `3px solid #E8EBF0` (light)

---

## Platform Specs

| Plataforma | Dimensões | Slides máx. | Aspecto |
|---|---|---|---|
| Instagram | 1080 × 1350 px | 20 | 4:5 |
| LinkedIn | 1080 × 1350 px | 20 | 4:5 |
| Twitter/X | 1080 × 1080 px | 4 | 1:1 |
| Facebook | 1080 × 1080 px | 10 | 1:1 |

**Usar sempre 4:5** no Instagram e LinkedIn — ocupa ~20% mais espaço no feed.

### Regras por plataforma

**Instagram:** o primeiro slide é o único gatilho de swipe · sempre "Deslize →" no slide 1 · pedir "save" no CTA · limite prático 7–10 slides

**LinkedIn:** PDF carousel gera 3–5× mais alcance que imagens nativas · nome do PDF aparece no feed · pedir comentário ou repost no CTA

**Twitter/X:** máx. 4 slides — adaptar para os pontos mais fortes · texto legível na timeline a ~200px

**Facebook:** público GCS 35–55 anos · limite prático 5–7 slides

---

## Estrutura do Carousel

O template oficial tem **5 tipos de slide** fixos. Usar sempre estes tipos — não inventar layouts novos.

### ⚠️ Regra Central: Conteúdo Escrito = Fundo Branco

**Todo o conteúdo escrito** (pontos de valor, dicas, contexto, dados, comparações, explicações) vai no **Slide Tipo 2** ou **Slide Tipo 3** — ambos com fundo branco. É a regra mais importante do template.

| Slide | Nome | Fundo | Quando usar |
|---|---|---|---|
| **Tipo 1** | Cover / Hook | Foto full-bleed + overlay Night Blue | Sempre o primeiro slide — para o scroll |
| **Tipo 2** | Content + Image | Branco — foto no topo, texto em baixo | Slide de conteúdo **quando existe foto relevante** |
| **Tipo 3** | Content White | Branco puro — só texto | Slide de conteúdo **sem foto** / **padrão para todo o conteúdo escrito** |
| **Tipo 4** | Quote | Branco — foto circular do speaker | Citação de especialista GCS |
| **Tipo 5** | CTA | Gradiente Night Blue escuro | Sempre o último slide |

### Framework de Carousel (5–8 slides, típico)

```
Slide 1  → Tipo 1 (Cover/Hook) — foto + overline + headline
Slide 2  → Tipo 2 ou 3 (conteúdo — Tipo 2 se tiver foto, Tipo 3 se não)
Slide 3  → Tipo 3 (conteúdo branco)
[...]
Slide N-1 → Tipo 4 (Quote — opcional, quando existe citação relevante)
Slide N  → Tipo 5 (CTA)
```

**Regra dos slides de conteúdo (Tipos 2 e 3):**
- Um ponto por slide — nunca dois conceitos
- Heading: Yrsa, Night Blue, 74px
- Body: Heebo, `#6b7280`, 34px, máx. 40 palavras
- Overline opcional em Electric Blue uppercase

### Sequências por tipo de conteúdo

**Artigo / Report (5–7 slides):**
```
Tipo 1 (Hook) → Tipo 3 (contexto) → Tipo 3 × N (pontos) → Tipo 4 (Quote) → Tipo 5 (CTA)
```

**Educacional / Dicas (5–8 slides):**
```
Tipo 1 (Hook) → Tipo 2 (contexto com foto) → Tipo 3 × N (pontos) → Tipo 5 (CTA)
```

**Comparativo (5 slides):**
```
Tipo 1 (Hook) → Tipo 3 (Opção A) → Tipo 3 (Opção B) → Tipo 3 (Veredicto) → Tipo 5 (CTA)
```

**"X Minutes With" / Quote feature:**
```
Tipo 1 (Hook com foto do speaker) → Tipo 3 × N (Q&A) → Tipo 4 (Quote) → Tipo 5 (CTA)
```

### Copywriting GCS

**Tom:** profissional mas acessível · directo · autoridade sem arrogância · inglês por defeito

**Proibido:** ❌ superlativos genéricos · ❌ jargão jurídico excessivo · ❌ promessas garantidas · ❌ linguagem de vendas agressiva

**Usar:** ✅ dados verificáveis · ✅ linguagem de escolha e controlo · ✅ verbos de acção · ✅ perguntas que o leitor já se faz

---

## Templates de Slide — Baseados no Template Oficial

Repositório fonte: `https://github.com/vtorres-gcs/gcs-design-system/blob/main/templates/social-media/InstagramCarousel.dc.html`

**Antes de gerar qualquer slide:** fazer download dos logos do GitHub e incorporar como base64 (ver secção Logos abaixo). Nunca usar círculos CSS como fundo do logo.

### Estrutura base dos 5 tipos de slide

```html
<!-- SLIDE TIPO 1 · Cover / Hook — foto full-bleed + overlay -->
<!-- Logo: GCS-Symbol-White — <img> directo, sem wrapper div -->
<div style="position:relative; width:1080px; height:1350px; overflow:hidden;">
  <!-- Foto de fundo (base64 data URI) -->
  <img src="{USER_PHOTO_DATA_URI}" style="position:absolute; inset:0; width:1080px; height:1350px; object-fit:cover; display:block;">
  <!-- Overlay Night Blue — NUNCA preto -->
  <div style="position:absolute; inset:0; background:linear-gradient(to bottom, transparent 28%, rgba(0,9,87,0.72) 52%, rgba(0,6,60,0.95) 100%);"></div>
  <!-- Logo: GCS-Symbol-White directo — sem círculo CSS -->
  <div style="position:absolute; top:44px; left:44px; z-index:2;">
    <img src="{LOGO_WHITE}" style="width:72px; height:72px; object-fit:contain;" alt="GCS">
  </div>
  <div style="position:absolute; bottom:0; left:0; right:0; padding:0 52px 72px;">
    <p style="font-family:'Heebo',sans-serif; font-size:18px; font-weight:500; color:#3F8CFF; letter-spacing:0.13em; text-transform:uppercase; margin-bottom:20px;">[OVERLINE]</p>
    <h2 style="font-family:'Yrsa',serif; font-size:72px; font-weight:400; color:#ffffff; line-height:1.08; letter-spacing:-0.01em;">[HEADLINE — máx. 12 palavras]</h2>
  </div>
</div>

<!-- SLIDE TIPO 2 · Content + Image — foto topo (594px) + texto branco em baixo -->
<!-- Logo: GCS-Symbol-White sobre a foto — sem círculo CSS -->
<div style="width:1080px; height:1350px; background:#fff; display:flex; flex-direction:column; overflow:hidden;">
  <div style="position:relative; width:1080px; height:594px; flex-shrink:0; overflow:hidden; background:#c8d0dc;">
    <img src="{USER_PHOTO_DATA_URI}" style="position:absolute; inset:0; width:1080px; height:594px; object-fit:cover; display:block;">
    <div style="position:absolute; top:44px; left:44px; z-index:2;">
      <img src="{LOGO_WHITE}" style="width:72px; height:72px; object-fit:contain;" alt="GCS">
    </div>
  </div>
  <div style="flex:1; padding:56px 64px 60px; display:flex; flex-direction:column; justify-content:flex-start; gap:32px;">
    <h1 style="font-family:'Yrsa',serif; font-size:74px; font-weight:400; color:#000957; line-height:1.08; letter-spacing:-0.01em;">[HEADING]</h1>
    <p style="font-family:'Heebo',sans-serif; font-size:34px; font-weight:300; color:#6b7280; line-height:1.6;">[BODY — máx. 40 palavras]</p>
  </div>
</div>

<!-- SLIDE TIPO 3 · Content — BRANCO PURO, TEXTO APENAS -->
<!-- ⚠️ PADRÃO para TODO o conteúdo escrito — overline opcional, heading, body -->
<!-- Logo: GCS-Symbol-Blue (contém círculo branco interno) — sem círculo CSS -->
<div style="position:relative; width:1080px; height:1350px; background:#fff; overflow:hidden;">
  <div style="position:absolute; top:44px; left:44px;">
    <img src="{LOGO_BLUE}" style="width:72px; height:72px; object-fit:contain;" alt="GCS">
  </div>
  <div style="position:absolute; top:380px; left:0; right:0; padding:0 64px; display:flex; flex-direction:column; gap:36px;">
    <!-- Overline opcional -->
    <p style="font-family:'Heebo',sans-serif; font-size:18px; font-weight:600; color:#3F8CFF; letter-spacing:0.13em; text-transform:uppercase;">[OVERLINE — opcional]</p>
    <h2 style="font-family:'Yrsa',serif; font-size:74px; font-weight:400; color:#000957; line-height:1.08; letter-spacing:-0.01em;">[HEADING]</h2>
    <p style="font-family:'Heebo',sans-serif; font-size:34px; font-weight:300; color:#6b7280; line-height:1.6;">[BODY — máx. 40 palavras]</p>
  </div>
</div>

<!-- SLIDE TIPO 4 · Quote — branco, foto circular do speaker -->
<!-- Rodapé: GCS-Secondary-Blue (wordmark completo) -->
<div style="position:relative; width:1080px; height:1350px; background:#fff; overflow:hidden;">
  <!-- Avatar circular do speaker -->
  <div style="position:absolute; top:100px; left:50%; transform:translateX(-50%); width:190px; height:190px; border-radius:50%; overflow:hidden; background:#e8ebf0;">
    <img src="{SPEAKER_PHOTO_DATA_URI}" style="width:190px; height:190px; object-fit:cover; display:block;">
  </div>
  <!-- Citação — cor #1A2268, NUNCA Electric Blue -->
  <div style="position:absolute; top:360px; left:0; right:0; padding:0 72px; text-align:center;">
    <p style="font-family:'Yrsa',serif; font-size:54px; font-weight:400; color:#1A2268; line-height:1.22; letter-spacing:-0.01em;">"[CITAÇÃO — máx. 4 linhas]"</p>
  </div>
  <!-- Atribuição -->
  <div style="position:absolute; bottom:160px; left:0; right:0; text-align:center; display:flex; flex-direction:column; align-items:center; gap:10px;">
    <p style="font-family:'Heebo',sans-serif; font-size:28px; font-weight:500; color:#3F8CFF;">[Nome do Speaker]</p>
    <p style="font-family:'Heebo',sans-serif; font-size:22px; font-weight:400; color:#9ca3af;">[Cargo, Global Citizen Solutions]</p>
  </div>
  <!-- Wordmark rodapé: GCS-Secondary-Blue -->
  <div style="position:absolute; bottom:52px; left:0; right:0; display:flex; justify-content:center;">
    <img src="{LOGO_WORDMARK}" style="height:32px; object-fit:contain;" alt="Global Citizen Solutions">
  </div>
</div>

<!-- SLIDE TIPO 5 · CTA — gradiente Night Blue escuro -->
<!-- Logo: GCS-Symbol-White, 104px, centrado — sem círculo CSS -->
<div style="width:1080px; height:1350px; background:linear-gradient(160deg, #0c1563 0%, #000957 35%, #000644 100%); display:flex; flex-direction:column; align-items:center; justify-content:center; overflow:hidden;">
  <img src="{LOGO_WHITE}" style="width:104px; height:104px; object-fit:contain; flex-shrink:0;" alt="GCS">
  <h2 style="margin-top:64px; font-family:'Yrsa',serif; font-size:80px; font-weight:400; color:#ffffff; text-align:center; line-height:1.1; padding:0 80px;">[HEADLINE CTA]</h2>
  <p style="margin-top:36px; font-family:'Heebo',sans-serif; font-size:32px; font-weight:300; color:#9ca3af; text-align:center; line-height:1.6; padding:0 120px;">[BODY — URL incluído]</p>
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
  <p style="margin-top:60px; font-family:'Yrsa',serif; font-size:52px; font-weight:400; color:#ffffff;">[SIGN-OFF — ex: "Thanks."]</p>
</div>
```

### Logos — assets do repositório GCS

Repositório: `https://github.com/vtorres-gcs/gcs-design-system`

| Asset | Ficheiro | URL raw | Uso |
|---|---|---|---|
| **GCS-Symbol-White** | `assets/logos/GCS-Symbol-White.svg` | `https://raw.githubusercontent.com/vtorres-gcs/gcs-design-system/main/assets/logos/GCS-Symbol-White.svg` | Slides 1, 2, 5 — estrela branca sobre fundos escuros/fotos |
| **GCS-Symbol-Blue** | `assets/logos/GCS-Symbol-Blue.svg` | `https://raw.githubusercontent.com/vtorres-gcs/gcs-design-system/main/assets/logos/GCS-Symbol-Blue.svg` | Slide 3 — estrela azul Night Blue com círculo branco, sobre fundo branco |
| **GCS-Secondary-Blue** | `assets/logos/GCS-Secondary-Blue.svg` | `https://raw.githubusercontent.com/vtorres-gcs/gcs-design-system/main/assets/logos/GCS-Secondary-Blue.svg` | Slide 4 rodapé — wordmark completo "GLOBAL CITIZEN SOLUTIONS" |

### ⚠️ Regra crítica dos logos — NUNCA violar

**O símbolo GCS NUNCA aparece sobre um círculo branco construído em HTML/CSS.**

O SVG já contém o fundo correcto internamente:
- **GCS-Symbol-White**: SVG com estrela branca — usar directamente sobre fotos e fundos escuros. A estrela é branca e o fundo é o próprio slide.
- **GCS-Symbol-Blue**: SVG com círculo branco + estrela Night Blue — usar sobre fundo branco. O círculo branco já está dentro do SVG.

**Nunca fazer:** `<div style="background:white;border-radius:50%">` + SVG dentro.
**Sempre fazer:** `<img src="[URL_DO_SVG]" style="width:72px;height:72px;object-fit:contain;">` directamente.

### Incorporar os logos no HTML gerado

Sempre fazer download dos SVGs do GitHub e incorporar como base64 para evitar problemas de CORS:

```python
import base64, urllib.request

GITHUB_BASE = "https://raw.githubusercontent.com/vtorres-gcs/gcs-design-system/main/assets/logos"

def fetch_logo_b64(filename: str) -> str:
    """Faz download do SVG do GitHub e devolve como data URI base64."""
    url = f"{GITHUB_BASE}/{filename}"
    with urllib.request.urlopen(url) as r:
        svg_bytes = r.read()
    b64 = base64.b64encode(svg_bytes).decode('ascii')
    return f"data:image/svg+xml;base64,{b64}"

# No início de cada geração de carousel:
LOGO_WHITE   = fetch_logo_b64("GCS-Symbol-White.svg")   # Slides 1, 2, 5
LOGO_BLUE    = fetch_logo_b64("GCS-Symbol-Blue.svg")    # Slide 3
LOGO_WORDMARK = fetch_logo_b64("GCS-Secondary-Blue.svg") # Slide 4 rodapé

# Uso no HTML — directamente como <img>, sem wrapper div:
# <img src="{LOGO_WHITE}" style="width:72px;height:72px;object-fit:contain;" alt="GCS">
# <img src="{LOGO_BLUE}" style="width:72px;height:72px;object-fit:contain;" alt="GCS">
# <img src="{LOGO_WORDMARK}" style="height:32px;object-fit:contain;" alt="Global Citizen Solutions">
```

### Logos por slide (resumo)

| Slide | Logo | Tamanho | Posição |
|---|---|---|---|
| 1 — Cover | `GCS-Symbol-White` | 72px | `top:44px; left:44px` — sobre overlay da foto |
| 2 — Content+Image | `GCS-Symbol-White` | 72px | `top:44px; left:44px` — sobre a foto, z-index:2 |
| 3 — Content White | `GCS-Symbol-Blue` | 72px | `top:44px; left:44px` — sobre fundo branco |
| 4 — Quote | `GCS-Secondary-Blue` (wordmark) | height:32px | `bottom:52px` — centrado |
| 5 — CTA Dark | `GCS-Symbol-White` | 104px | centrado verticalmente |

### Regras de conteúdo por tipo de slide

**Slide Tipo 1 — Cover:**
- Overline em maiúsculas, Heebo 500, Electric Blue `#3F8CFF`, letter-spacing 0.13em
- Headline em Yrsa 400, branco, 72px, line-height 1.08
- Sempre com `image-slot` — se não houver imagem, usar `background:#7a8fa0` (placeholder cinzento azulado)
- Sem body text — apenas overline + headline

**Slide Tipo 2 — Content + Image:**
- Usar **apenas quando existe uma foto relevante** fornecida pelo utilizador
- Foto no topo: 1080×594px, `image-slot` com `shape="rect"`
- Heading: Yrsa 400, Night Blue `#000957`, 74px
- Body: Heebo 300, `#6b7280`, 34px, line-height 1.6
- Máx. 40 palavras no body

**Slide Tipo 3 — Content White (PADRÃO OBRIGATÓRIO para conteúdo escrito):**
- **⚠️ Usar para TODO o conteúdo escrito**: pontos de valor, dicas, contexto, dados, comparações — tudo o que é texto
- Fundo branco puro — **nunca gradiente neste tipo**
- Logo azul `e2717d4a` — não o branco
- Heading: Yrsa 400, Night Blue `#000957`, 74px
- Body: Heebo 300, `#6b7280`, 34px, line-height 1.6
- Overline opcional: Heebo 600, Electric Blue, uppercase, letter-spacing 0.13em
- Conteúdo começa em `top:380px` — logo fica no topo sem sobreposição
- Se não há foto disponível → sempre usar este tipo (nunca inventar gradiente)

**Slide Tipo 4 — Quote:**
- `image-slot` circular (`shape="circle"`) para foto do speaker
- Citação em Yrsa 400, `#1A2268`, 54px, centrada, com aspas tipográficas
- Nome em Heebo 500, Electric Blue, 28px
- Cargo em Heebo 400, `#9ca3af`, 22px
- Wordmark no rodapé (`height:32px`)

**Slide Tipo 5 — CTA:**
- Estrutura fixa — não alterar o layout dos botões
- "Insightful" com `background:#1A2268` (highlighted)
- Headline Yrsa 400, branco, 80px
- Body Heebo 300, `#9ca3af`, 32px

---

## Geração de Imagens — Playwright

### Incorporar imagens fornecidas pelo utilizador

Todas as imagens enviadas pelo utilizador devem ser incorporadas como base64 `data:` URI — nunca como paths relativos.

```python
import base64
from pathlib import Path

def embed_image(file_path: str) -> str:
    """Converte imagem em data URI base64 para incorporar no HTML."""
    p = Path(file_path)
    # Detectar MIME type real (extensão pode mentir)
    import subprocess
    result = subprocess.run(["file", "--mime-type", "-b", file_path], capture_output=True, text=True)
    mime = result.stdout.strip() or "image/jpeg"
    b64 = base64.b64encode(p.read_bytes()).decode()
    return f"data:{mime};base64,{b64}"

# Uso no HTML do slide:
# data_uri = embed_image("/mnt/user-data/uploads/foto.jpg")
# <img src="{data_uri}" style="...object-fit:cover...">
```

**Regras de incorporação:**
- Usar sempre `data:` URI — funciona em preview, export e qualquer ambiente
- Nunca usar paths relativos (`foto.png`) nem `background: url(data:...)` com base64 largo (causa crash do parser)
- Sempre usar `<img>` tag com `object-fit: cover` para imagens de fundo
- Gerar o HTML via Python (`Path.write_text()`) — nunca via shell heredoc (interpola `$` e backticks)

### ⚠️ Fontes — Regra crítica: SEMPRE usar @font-face embebido

**O Google Fonts (`fonts.googleapis.com`) está bloqueado no ambiente de execução do Claude.** Um `<link>` para googleapis no `<head>` não carrega as fontes — o Playwright renderiza com fontes genéricas do sistema, produzindo output incorrecto.

**Solução obrigatória:** Descarregar os ficheiros `.woff2` do npm (`registry.npmjs.org` está disponível) e embeber como `@font-face` base64 em cada slide HTML.

```python
# ─────────────────────────────────────────────────────────────
# PASSO 0 (executar UMA VEZ por sessão, antes de gerar slides)
# Descarrega Yrsa + Heebo do npm e gera CSS @font-face embebido
# ─────────────────────────────────────────────────────────────
import base64, tarfile, io, urllib.request
from pathlib import Path

def download_fontsource_css(package: str, version: str, files: list[tuple]) -> str:
    """
    Descarrega um pacote @fontsource do npm e devolve CSS @font-face com woff2 em base64.
    files = [(filename, font_family, weight, style), ...]
    """
    url = f"https://registry.npmjs.org/@fontsource/{package}/-/{package}-{version}.tgz"
    with urllib.request.urlopen(url) as r:
        tgz_bytes = r.read()

    with tarfile.open(fileobj=io.BytesIO(tgz_bytes), mode="r:gz") as tar:
        font_data = {}
        for fname, *_ in files:
            member_path = f"package/files/{fname}"
            try:
                member = tar.getmember(member_path)
                f = tar.extractfile(member)
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
    """Devolve o bloco CSS completo com Yrsa e Heebo embebidos."""
    yrsa_css = download_fontsource_css(
        package="yrsa",
        version="5.2.10",
        files=[
            ("yrsa-latin-400-normal.woff2", "Yrsa", 400, "normal"),
            ("yrsa-latin-500-normal.woff2", "Yrsa", 500, "normal"),
        ]
    )
    heebo_css = download_fontsource_css(
        package="heebo",
        version="5.2.8",
        files=[
            ("heebo-latin-300-normal.woff2", "Heebo", 300, "normal"),
            ("heebo-latin-400-normal.woff2", "Heebo", 400, "normal"),
            ("heebo-latin-500-normal.woff2", "Heebo", 500, "normal"),
        ]
    )
    return yrsa_css + "\n\n" + heebo_css


# ─── Uso ─────────────────────────────────────────────────────
FONTS_CSS = get_fonts_css()   # ~80KB, chamada uma vez por sessão

# Incorporar em cada slide HTML assim:
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

**Versões npm fixas** (actualizar se necessário):
- `@fontsource/yrsa` → `5.2.10`
- `@fontsource/heebo` → `5.2.8`

Para verificar versões actuais: `curl -s "https://registry.npmjs.org/@fontsource/yrsa" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d['dist-tags']['latest'])"`

### Renderizar com Playwright

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
            # Fontes já estão embebidas — sem espera de rede necessária
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

### Instalar dependências

```bash
pip install playwright pillow --break-system-packages
playwright install chromium
```

---

## Regras de Consistência

| Elemento | Regra |
|---|---|
| **Logo — regra crítica** | **NUNCA usar círculo CSS como fundo do logo.** Usar sempre `<img src="{LOGO_DATA_URI}">` directo. Os SVGs já têm o fundo correcto internamente. |
| Logo Slide 1, 2, 5 | `GCS-Symbol-White.svg` — estrela branca, directamente sobre foto/fundo escuro |
| Logo Slide 3 | `GCS-Symbol-Blue.svg` — contém círculo branco interno, usar sobre fundo branco |
| Logo Slide 4 rodapé | `GCS-Secondary-Blue.svg` — wordmark completo, `height:32px`, centrado |
| Logo tamanho | 72px nos slides 1, 2, 3 · 104px no slide 5 |
| Overlay sobre fotos | Sempre Night Blue — `rgba(0,9,87,x)` — **nunca preto puro** |
| Electric Blue | Apenas em overlines, números de sequência e Q&A — **nunca em body text** |
| Corner radius | `0` em todos os elementos de layout · apenas fotos de speaker têm `border-radius:50%` |
| Headings | Sempre Yrsa (serif) — **nunca Heebo em headings** |
| Gradiente | Sempre `#000957` (topo) → `#0F1A2D` (base) — **nunca inverter** |
| Máx. palavras/slide | 40 palavras no body · headlines até 12 palavras |
| Swipe cue | "Deslize →" sempre no slide 1 |

---

## Erros Comuns

| Erro | Problema | Correção |
|---|---|---|
| **Círculo CSS como fundo do logo** | ⛔ Viola identidade GCS — o símbolo nunca aparece sobre círculo construído em HTML | Usar `<img src="{LOGO_DATA_URI}">` directo — os SVGs já têm o fundo correcto |
| Logo branco sobre fundo branco | Logo invisível | Slide 3 usa `GCS-Symbol-Blue` (que tem círculo branco interno) |
| Logo azul sobre fundo escuro | Logo invisível | Slides 1, 2, 5 usam `GCS-Symbol-White` |
| Corner radius em blocos | Fora da identidade GCS | `border-radius:0` em tudo exceto fotos de speaker |
| Overlay preto sobre fotos | Perde branding | `rgba(0,9,87,x)` — sempre Night Blue |
| Electric Blue no body text | Desvirtua hierarquia | Electric Blue apenas em overlines e Q&A |
| Heebo em headings | Quebra identidade editorial | Headings sempre Yrsa/Georgia |
| Logo ausente | Perde brand recognition | Logo GCS sempre presente |
| Último slide sem CTA | Oportunidade perdida | Sempre Template 5L ou 5D |
| Query de foto genérica | Resultado fora do contexto | Usar apenas imagens fornecidas pelo utilizador |
| Foto descontextualizada | Imagem sem relação com o slide | Usar Template 0 (gradiente puro) quando nenhuma imagem encaixar |
| Imagem com path relativo | Imagem não carrega no export | Sempre converter para base64 `data:` URI |
| HTML gerado via shell heredoc | Base64 corrompida por interpolação de `$` | Sempre usar Python `Path.write_text()` |
| Gradiente invertido | Fora da identidade GCS | `#000957` topo → `#0F1A2D` base |
| Gerar slides sem aprovação | ⛔ Viola workflow | Plano → aprovação → geração |

---

> **Lembrete do workflow:**
> **1** → Pedir imagens + confirmar plataforma(s) · **2** → Plano com tipo de slide por posição (aguardar aprovação) · **3** → Aprovação explícita · **4** → Gerar: Tipo 1 (hook com foto), Tipo 2/3 (conteúdo em branco), Tipo 4 (quote opcional), Tipo 5 (CTA) → incorporar imagens como base64 → renderizar Playwright → entregar PDF (LinkedIn) ou ZIP (outros) · **5** → Perguntar o que fazer a seguir.
>
> **Todo o conteúdo escrito vai em fundo branco (Tipo 2 ou Tipo 3). Nunca gerar slides sem aprovação do Plano.**
