# Immersive Storytelling Portfolio — task-list.md

Author: Adnan Khan  

Objective:  
Build a senior-grade, immersive, storytelling portfolio that demonstrates frontend engineering judgment, systems thinking, performance awareness, and business impact — not animation gimmicks.

This portfolio is not a visual experiment.  
It is a **translation of a real career into an interactive system**.

---

## 0. CORE PHILOSOPHY (NON-NEGOTIABLE)

### Narrative Rule
Every scroll interaction must answer **one question at a time**:

- Who is this person?
- How do they think?
- Can they handle scale?
- Did their work create impact?
- What should I do next?

If an animation does not improve understanding → **DELETE IT**.

---

### Motion Ethics
- Scroll = user intent
- Scrub = user-controlled time
- Play-once = observation
- Never animate for decoration
- Respect `prefers-reduced-motion` everywhere

---

### Psychological Arc (Hero → Footer)
Calm → Confidence → Credibility → Intelligence → Trust → Clarity

---

## 0.1 SOURCE OF TRUTH — PROFILE-3.pdf

### Purpose
`Profile-3.pdf` is the **single source of truth** for:

- All claims
- All experience ordering
- All credibility signals
- All metrics and outcomes

Nothing in this portfolio may contradict or exaggerate beyond this document.

---

### How Profile-3.pdf Drives the Site

#### Hero Section
Derived from:
- Name
- Role
- Summary headline
- Years of experience

Hero copy must:
- Avoid company names
- Avoid metrics
- Communicate seniority quietly

---

#### Identity Section (How I Think)
Derived from repeated themes in the PDF:
- Performance (SSR, SEO, Core Web Vitals)
- Systems thinking (dashboards, editors, scalable UI)
- Business outcomes (retention, conversion, usability)

Each belief must be defensible by **multiple experiences**, not one bullet.

---

#### Experience Section
Order must strictly follow:
1. Alongside (current, international, AI workflows)
2. Monsoonfish / HealthKart ecosystem
3. IOT EXCEL (systems depth, Konva editor)

Each panel must include:
- Context (scale / domain)
- Responsibility
- Outcome (qualitative or quantitative)

---

#### Thinking Section
Architecture and diagrams must map to:
- SSR vs CSR decisions
- CI/CD pipelines
- Canva-style editor (Konva.js)
- Performance optimization work

No generic diagrams.

---

#### Impact Section
Metrics must trace back to:
- Retention improvement
- SEO gains
- Performance improvements

If a metric cannot be defended → it does not ship.

---

## 1. GLOBAL VISUAL SYSTEM — GLASS LOOK & FEEL

### Glassmorphism Principles
- Frosted translucency, not shiny gloss
- Depth through layering, not heavy shadows
- Calm, premium, enterprise-grade aesthetic

---

### Global Glass Tokens
- Background: rgba(255, 255, 255, 0.06–0.12)
- Border: rgba(255, 255, 255, 0.18)
- Blur: backdrop-filter: blur(12px)
- Radius: 16px–24px
- Shadow: extremely soft, low opacity
- Noise grain: subtle (2–4%)

---

### Constraints
- Never stack more than 2 glass layers
- Never glass the full canvas
- Text contrast must pass WCAG AA
- Glass containers = content only

---

## 2. PHASE 0 — PROJECT FOUNDATION

### Task 0.1 — Project Bootstrap
- Next.js 14 (App Router)
- TypeScript strict mode
- Tailwind CSS
- ESLint + Prettier
- Server Components by default

Cursor Prompt:
> Initialize a Next.js 14 App Router project with strict TypeScript, Tailwind CSS, ESLint, and SSR-safe defaults.

---

### Task 0.2 — Design Token System
Create CSS variables for:
- Glass background opacity
- Blur intensity
- Borders
- Motion duration
- Easing curves

Cursor Prompt:
> Create a global design token system using CSS variables for glassmorphism, spacing, and motion.

---

### Task 0.3 — Reduced Motion System
- Detect `prefers-reduced-motion`
- Central `motionEnabled` flag
- Global animation fallbacks

Cursor Prompt:
> Implement a global reduced-motion system that disables or simplifies animations.

---

## 3. PHASE 1 — SCROLL & TIME ARCHITECTURE

### Task 1.1 — Lenis Scroll Layer
- Install Lenis
- Single scroll controller
- Isolated rAF loop
- No GSAP coupling yet

Cursor Prompt:
> Integrate Lenis with a centralized scroll controller and isolated RAF loop.

---

### Task 1.2 — GSAP + ScrollTrigger Setup
- Install GSAP + ScrollTrigger
- Register plugins once
- Sync Lenis ↔ GSAP
- Create reusable animation helpers

Cursor Prompt:
> Set up GSAP with ScrollTrigger and sync it with Lenis scrolling.

---

### Task 1.3 — Scroll Scene Registry
Define structure only (NO animations):
- id
- trigger
- start / end
- scrub (true | false)
- pin (true | false)

Cursor Prompt:
> Create a scroll scene registry defining section boundaries only.

---

## 4. PHASE 2 — GLOBAL PAGE STRUCTURE

### Task 2.1 — Story Sections
Full-viewport vertical sections:
1. Hero / Prologue
2. Identity
3. Experience
4. Thinking
5. Impact
6. Contact
7. Footer

Cursor Prompt:
> Create a vertical storytelling layout with isolated full-viewport sections.

---

### Task 2.2 — Debug Overlay (Temporary)
- Show section boundaries
- Show scroll progress
- Dev-only toggle

Cursor Prompt:
> Add a temporary scroll debug overlay.

---

## 5. PHASE 3 — HERO / PROLOGUE (ESTABLISH AUTHORITY)

### Narrative Goal
Answer in under 5 seconds:
“Is this person senior and worth my time?”

---

### Task 3.1 — Background Atmosphere
- Dark gradient background
- Subtle noise grain
- No loaders or spinners

Cursor Prompt:
> Implement an instant-loading background with subtle noise.

---

### Task 3.2 — Liquid Cursor / Liquid Background Effect (Hero Only)

#### Narrative Intent
- Create tactile depth
- Respond to cursor presence
- Feel premium, not playful

#### Scope Constraints
- Active ONLY in Hero
- Disabled for reduced motion
- Optional downgrade on mobile

---

#### Technical Steps

##### Step A — Component Setup
- Ensure shadcn structure exists
- `/components/ui` is mandatory
- Copy `liquid-effect-animation.tsx` into `/components/ui`

Cursor Prompt:
> Add the LiquidEffectAnimation component to /components/ui as a client-only component with proper cleanup.

---

##### Step B — Asset & Material Tuning
- Use neutral abstract texture
- Reduce displacement if overpowering
- Tune metalness / roughness for glass harmony

Cursor Prompt:
> Tune the liquid material so it stays subtle and supports glass readability.

---

##### Step C — Hero-only Mounting
- Mount inside Hero section only
- Fixed positioning
- Behind glass cards (z-index discipline)

Cursor Prompt:
> Render the liquid effect only in the Hero section and unmount it on scroll exit.

---

##### Step D — Scroll Relationship
- Cursor movement affects liquid
- Scroll depth reduces intensity
- Liquid fades as user scrolls down

Cursor Prompt:
> Reduce liquid distortion intensity as scroll progresses past the Hero.

---

##### Step E — Reduced Motion Fallback
- Disable liquid
- Replace with static gradient + noise

Cursor Prompt:
> Add a reduced-motion fallback that disables the liquid effect.

---

### Task 3.3 — Minimal 3D Scene
- React Three Fiber
- Single geometry
- Neutral lighting
- No post-processing

Cursor Prompt:
> Create a minimal R3F scene optimized for performance.

---

### Task 3.4 — Scroll-Driven Camera Depth
- Z-axis only
- Subtle
- Scrubbed

Cursor Prompt:
> Bind scroll progress to camera Z-position using GSAP ScrollTrigger.

---

### Task 3.5 — Hero Glass Card
Content:
- Name
- Role
- One-line value statement

Motion:
- Slight position shift
- Opacity refinement

Cursor Prompt:
> Create a glass hero card with subtle scroll-synced motion.

---

## 6. PHASE 4 — IDENTITY (HOW I THINK)

### Task 4.1 — Identity Glass Cards
Three stacked cards:
1. Performance First
2. Systems Thinking
3. Business Impact

Cursor Prompt:
> Create stacked glass identity cards with clear hierarchy.

---

### Task 4.2 — Identity Motion
- Enter one-by-one
- No scrub
- Play once

Cursor Prompt:
> Animate identity cards with restrained, non-scrubbed motion.

---

## 7. PHASE 5 — EXPERIENCE (PROOF OF WORK)

### Task 5.1 — Horizontal Scroll Section
- Vertical scroll → horizontal motion
- One panel per company
- Glass panels only

Cursor Prompt:
> Implement a horizontal scrolling experience section driven by vertical scroll.

---

### Task 5.2 — Experience Panel Structure
Each panel:
- Company
- Context
- Role
- Outcome

Cursor Prompt:
> Standardize experience panels with consistent structure.

---

### Task 5.3 — GSAP Master Timeline
- One master timeline
- Child timelines per panel
- Lazy-loaded assets

Cursor Prompt:
> Create a GSAP master timeline with nested timelines for experience panels.

---

### Task 5.4 — Progress Indicator
- Minimal
- Scroll-linked
- No flashy motion

Cursor Prompt:
> Add a subtle progress indicator for the experience section.

---

## 8. PHASE 6 — THINKING (ENGINEERING DEPTH)

### Task 6.1 — Architecture Diagram Base
- SVG or Canvas
- Static first
- Glass container

Cursor Prompt:
> Build a static architecture diagram inside a glass container.

---

### Task 6.2 — Scroll-Built Explanation
- Reveal layers step-by-step
- Scrub structure only
- Text always readable

Cursor Prompt:
> Animate architecture layers progressively on scroll.

---

### Task 6.3 — Business / Technical Toggle
- Toggle views
- Preserve scroll state
- Smooth transition

Cursor Prompt:
> Implement a business/technical view toggle without breaking scroll continuity.

---

## 9. PHASE 7 — IMPACT (RESULTS)

### Task 7.1 — Metric Glass Cards
- Clear typography
- Semantic HTML
- Strong contrast

Cursor Prompt:
> Create glass metric cards for performance and SEO impact.

---

### Task 7.2 — Metric Animation
- Count up once
- No loops
- Reduced-motion safe

Cursor Prompt:
> Animate metric numbers once on section entry.

---

## 10. PHASE 8 — CONTACT (CLARITY)

### Task 8.1 — CTA Section
- Minimal motion
- Clear copy
- Fast load

Cursor Prompt:
> Create a minimal contact section with near-zero animation.

---

## 11. PHASE 9 — FOOTER (QUIET CONFIDENCE)

### Task 9.1 — Footer
- Static
- No animation
- Essentials only

Cursor Prompt:
> Implement a static footer with no animations.

---

## 12. PHASE 10 — POLISH & DISCIPLINE

### Task 10.1 — Motion Audit
- Remove unnecessary animations
- Simplify easing
- Reduce timelines

Cursor Prompt:
> Audit and remove any animation that does not improve comprehension.

---

### Task 10.2 — Performance Audit
- Lighthouse
- Core Web Vitals
- Bundle analysis
- Lazy-load 3D assets

Cursor Prompt:
> Optimize performance and ensure excellent Core Web Vitals.

---

## FINAL ALIGNMENT RULE

This portfolio is a **translation of Profile-3.pdf into an interactive system**.

- Profile defines WHAT is true
- Story defines HOW it is revealed
- Motion defines WHEN it is understood
- Glass defines WHERE attention goes

If any layer contradicts another → remove the interaction, not the truth.

END OF FILE