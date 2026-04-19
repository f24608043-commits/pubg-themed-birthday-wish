# PUBG Birthday Website — Complete Build Prompt

Fix the 404 error and build Hassam's PUBG-themed birthday site as a single, fully-functional HTML file.

---

## 🔧 CRITICAL FIX — 404 Error

**The Problem:** `public/hassam-birthday.html` exists but returns 404 because the dev server expects `index.html` as the entry point.

**The Fix (choose one):**

**Option A (Recommended):** Rename/copy the file:
```bash
mv public/hassam-birthday.html public/index.html
```

**Option B:** Create a redirect at project root:
```html
<!-- index.html at project root -->
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="refresh" content="0; url=./public/hassam-birthday.html">
</head>
<body>Redirecting...</body>
</html>
```

**Verify:** Opening the preview URL must show the birthday site immediately — not 404, not blank.

---

## 🎨 Visual Design System

### Color Palette (PUBG Authentic)
| Role | Color | Hex |
|------|-------|-----|
| Primary accent | Warm amber | `#d4910a` |
| Secondary accent | Muted brass | `#c8a84b` |
| Background deep | Military black-brown | `#0d0b07` |
| Surface panels | Dark olive | `#161208` |
| Panel border | Bronze | `#6b5a2a` |
| Text primary | Warm off-white | `#f0ebe0` |
| Text muted | Tan | `#8a7d5a` |
| Military green | Desaturated olive | `#5a7a3a` |
| Danger red | Tactical red | `#8b2a1a` |
| Health green | PUBG green | `#4a9a3a` |

### Typography
```html
<link href="https://fonts.googleapis.com/css2?family=Teko:wght@400;600;700&family=Inter:wght@300;400;500&family=Caveat:wght@400;500&display=swap" rel="stylesheet">
```
- **Headings:** Teko (condensed, military)
- **Body:** Inter (clean, readable)
- **Handwritten (card only):** Caveat

### Global UI Rules
- **border-radius: 0** on ALL elements — PUBG uses sharp corners
- **Buttons:** Flat rectangular, amber background `#d4910a`, dark text, Teko font, no border, hover scale 1.02
- **Panels:** Dark background + bronze border + scanline overlay
- **Corner brackets:** Thin gold L-shapes at all 4 corners of major panels
- **Scanlines:** `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)`
- **Cursor:** `cursor: crosshair` on desktop

---

## 📱 Section 1 — Loading Screen

**Layout:** Full screen, centered content  
**Duration:** 2.5 seconds, then fade out  
**Background:** Pure black `#0a0a0a`

**Elements:**
1. Small top text: "PLAYERUNKNOWN'S" — Teko 12px, `#c8a84b`, letter-spacing 6px
2. Main heading: "LOADING BIRTHDAY MISSION" — Teko 700 24px, `#f0ebe0`, uppercase
3. Progress bar: 280×6px, bronze border `#6b5a2a`, amber fill `#d4910a` animating 0% → 100% over 2s
4. Percentage counter: 0% → 100% — Inter 12px, `#4a9a3a` monospace
5. Bottom blinking text: "INITIALIZING SQUAD DATA..." — Inter 11px, `#8a7d5a`

**Animation:**
- Bar fills left to right with ease-in-out
- Percentage counts up synced with bar
- At 100%, entire screen fades out (opacity 0, visibility hidden)
- Site content revealed underneath

---

## 📱 Section 2 — Hero / Drop Zone (Full Screen)

**Background:** 
- Primary: PUBG parachute GIF `https://media.giphy.com/media/l4FGFNpFtDGfqIXkI/giphy.gif`
- Fallback image: `https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_f9036a87a6fd22736e2a77e4a5d7e24a27e6e23d.jpg`
- Overlay: `linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(10,8,4,0.75) 100%)`
- Floating embers: 20-30 CSS particles (white/orange dots, 2-4px, rising slowly with keyframes)

**Fixed HUD Bar (44px height, sticky top):**
```
[Left]  HASSAM  + shield icon  |  [Center] HP bar (green 80%)  XP bar (amber 60%)  |  [Right] 🔊 toggle  14:32:05 (green monospace)
```
- Background: `rgba(8, 6, 2, 0.95)`
- Border-bottom: 1px solid `#3a3020`
- Kill feed: Top-right below HUD, small dark pills sliding in every 4-5s
  - Messages: "Hassam eliminated another year", "Birthday cake has been looted", "New season unlocked"

**Hero Content (centered):**
1. "PLAYER IDENTIFIED" — Inter 11px, `#5a7a3a`, letter-spacing 8px, blinking green dot before text
2. "HASSAM" — Teko 700, 110px desktop / 72px mobile, `#f0ebe0`, subtle text-shadow glow, glitch animation (2px horizontal flicker)
3. "BIRTHDAY MISSION INITIATED" — Inter 14px, `#8a7d5a`, uppercase, letter-spacing 4px
4. "TUE, APR 21, 2026" — `#4a9a3a` monospace, 13px (use tomorrow's date dynamically)
5. **[ DEPLOY ]** button — Teko 18px, amber bg, dark text, no border-radius, padding 12px 48px, hover scale 1.02

**Interactions:**
- First scroll triggers screen shake (300ms subtle translate animation) — parachute landing impact
- DEPLOY button smooth-scrolls to Section 3

---

## 📱 Section 3 — Mission Briefing (Full Screen)

**Background:** Smoky tactical GIF `https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif` + dark overlay

**Centered Panel (max-width 680px):**
- Background: `rgba(16, 12, 4, 0.92)`
- Border: 1px solid `#6b5a2a`
- Corner brackets: 1px `#d4910a`, 12px arms
- Scanline overlay

**Panel Contents:**
1. Horizontal divider with ◆ CLASSIFIED TRANSMISSION ◆ centered — `#8a7d5a`, 11px Teko
2. Heading: "TRANSMISSION RECEIVED" — Teko 700 38px, `#f0ebe0`
3. Animated radar (top-right corner): CSS circle 60×60px, rotating sweep line, green on dark
4. **Decryption animation:** Text reveals character-by-character:
   - Initial color: `#5a7a3a` (green terminal)
   - Final color: `#c8b898` (warm readable)
   - Speed: 15ms per character
5. **Message content (3 paragraphs):**
   ```
   Channel opened. Squad communication secure.
   
   Hassam — another year, another season. We've dropped into countless battles together, from Pochinki chaos to those impossible final circles. You've always been the reliable callout, the clutch revive, the one who never leaves a teammate behind.
   
   This isn't just another birthday. This is a celebration of every Chicken Dinner we've earned, every laugh shared over comms, and every moment that proved why you're the heart of this squad.
   
   May your loot always be legendary. May your zones always favor you. And may this next season bring you everything you've been grinding for.
   ```
6. Signature: "— YOUR SQUAD. ALWAYS." — Teko italic, `#c8a84b`, right-aligned
7. Stat chips at bottom: "FRIENDSHIP: LEGENDARY" | "LOYALTY: 99/100" — military green pills

---

## 📱 Section 4 — The Birthday Airdrop (Full Screen)

**Background:** Dark battlefield `https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_f9036a87a6fd22736e2a77e4a5d7e24a27e6e23d.jpg` + heavy dark overlay

**3D Airdrop Crate (CSS 3D):**
- Structure: Front face, top face, right side using `transform-style: preserve-3d`
- Front: `#2d3a1a` with diagonal warning stripes (`repeating-linear-gradient(45deg, #8b2a1a 0px, #8b2a1a 10px, #0d0b07 10px, #0d0b07 20px)`)
- Top: `#3a4a22`, Right: `#1e2812`
- Gold bolts at 4 corners (small circles)
- Parachute: CSS semicircle `#c8a84b` with 4 string lines
- Bobbing animation: 4px range, 2.5s ease-in-out infinite
- Label: "AIRDROP" Teko 700 24px + "FOR: HASSAM" Inter 14px `#c8a84b`
- "TAP TO OPEN" — Inter 12px `#8a7d5a`, pulsing opacity

**Open Animation (on tap/click):**
1. Lid flips back (CSS `rotateX(-110deg)` with perspective)
2. Character image springs up with bounce (`translateY` keyframes: -100px → 0 with overshoot)
3. Confetti explosion: 30 colored dots burst outward from center, fade out
4. Gold stars radiate and fade
5. "SURPRISE! HAPPY BIRTHDAY HASSAM! 🎉" fades in — Teko 32px `#d4910a`
6. **[ CLOSE ]** button appears — PUBG button style

**Character Image:** Use Hassam's cut-out photo (the uploaded image). Embed as base64 or reference as `hassam-character.png` with placeholder fallback.

---

## 📱 Section 5 — Squad Gallery (Full Screen)

**Background:** Grass field `https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_3de0b8d5a0bb5e9f24b20cb42b4d63eef3e99082.jpg` + dark overlay

**Header:**
- "SQUAD GALLERY" — Teko 700 48px, `#f0ebe0`, left-aligned
- "CLASSIFIED ARCHIVE — EYES ONLY" — Inter 11px `#5a7a3a`, uppercase, letter-spacing 6px
- 1px `#6b5a2a` horizontal line below

**Horizontal Filmstrip (9 cards):**
- Card size: 220×290px
- Card style: Background `#161208`, border 1px `#6b5a2a`, corner brackets in `#d4910a` (1px, 12px arms)
- Placeholder state: Camera icon (outline, `#6b5a2a`, 32px) + "MEMORY LOADING..." Inter 11px `#8a7d5a`
- Card labels: "SQUAD MEMORY #01" through "#09" — Teko 13px `#c8a84b`
- Swipeable on mobile, auto-scroll on desktop with PUBG chevron buttons at edges
- Hover/tap: scale 1.04, border brightens

**Photo Slots (clearly marked in code for user to replace):**
```html
<!-- REPLACE WITH ACTUAL PHOTO URLS -->
<div class="photo-card" data-index="1">
    <img src="YOUR_PHOTO_1_URL" alt="Squad Memory 1" style="display:none;">
    <div class="placeholder">...</div>
</div>
```

---

## 📱 Section 6 — Player Stats (Full Screen)

**Background:** Dark lobby/compound feel, heavy vignette edges

**Layout:** Two columns desktop (character left, stats right), stacked mobile

**Character Display (Left):**
- Hassam's cut-out photo, 60% viewport height, centered
- Drop shadow: `0 20px 40px rgba(0,0,0,0.8)`
- Name below: "HASSAM" Teko 24px `#f0ebe0`
- Tagline: "SQUAD LEADER — BIRTHDAY SEASON" Inter 11px `#5a7a3a`

**Stats Panel (Right):**
- Background: `#161208`, border 1px `#6b5a2a`, corner brackets, scanlines
- **ROYALE PASS — BIRTHDAY EDITION** badge: Circular, gold gradient border, positioned upper right

**Animated Stats Bars (fill on scroll into view):**
| Stat | Label | Value | Fill % |
|------|-------|-------|--------|
| LOYALTY | Inter 11px `#8a7d5a` | Teko 20px `#f0ebe0` | 99% |
| VIBE LEVEL | Inter 11px `#8a7d5a` | Teko 20px `#f0ebe0` | 100% S-TIER |
| BIRTHDAY ENERGY | Inter 11px `#8a7d5a` | Teko 20px `#f0ebe0` | 100% MAXED |
| SQUAD BOND | Inter 11px `#8a7d5a` | Teko 20px `#f0ebe0` | 100% LEGENDARY |
| YEARS SURVIVED | Inter 11px `#8a7d5a` | Teko 20px `#f0ebe0` | [AGE]% |

- Bar track: `#1e1a0e` (4px height, no border-radius)
- Bar fill: `#d4910a` (animates from 0% using CSS transition)

**LEGEND UNLOCKED Banner:**
- Slides in from left when section visible
- Background: `#d4910a`, Text: `#0d0b07`, Teko 700
- No border-radius

---

## 📱 Section 7 — Birthday Card (Full Screen)

**Background:** Blurred dark battlefield, focus on card

**Card (300×420px, centered):**

**Front Face:**
- Background: `#161208`, border 2px `#6b5a2a`, corner brackets
- Top: Crosshair icon (gold, small)
- "OPEN ORDERS:" — Inter 10px `#8a7d5a`
- "BIRTHDAY CELEBRATION" — Teko 700 32px `#f0ebe0`
- "FOR: HASSAM" — Inter 13px `#c8a84b`
- "► TAP TO OPEN ◄" — pulsing `#d4910a`, Inter 11px

**Flip Animation:**
- On tap: `rotateY(180deg)` over 0.6s ease
- `backface-visibility: hidden` on both faces
- 3D perspective on container

**Back Face:**
- Background: `#1a150a` (warmer)
- Confetti particles floating behind text (CSS animated dots)
- Message in Caveat 18px `#d4c8a8`, line-height 2.0:
  ```
  Happy Birthday, Hassam! 🎂
  
  Another season, another Chicken Dinner. 
  You make every match worth playing. 
  Here's to loud laughs, wild wins, 
  and a year full of legendary moments.
  
  — Always your squad.
  ```
- **[ SHARE THIS CARD ]** button — PUBG button style

**Share Function:**
- Copies `window.location.href` to clipboard
- Shows toast notification (top-right, dark pill, green left border, "LINK COPIED" Teko 14px)
- Auto-dismisses after 2 seconds

---

## 📱 Section 8 — Chicken Dinner Finale (Full Screen)

**Background:** Explosion GIF `https://media.giphy.com/media/xT9DPpf0zTqRASyzTi/giphy.gif` + heavy dark overlay

**Content (centered):**
1. "MATCH RESULT" — Inter 12px `#5a7a3a`, letter-spacing 6px
2. "WINNER WINNER" — Teko 700 80px `#d4910a`
3. "BIRTHDAY DINNER" — Teko 700 88px `#f0ebe0`
4. "HASSAM — SEASON CHAMPION" — Teko 400 22px `#5a7a3a`
5. Divider: Horizontal line with ◆ diamond in center, `#6b5a2a`
6. Message: "From your best friend, with love. Here's to another legendary season — may every drop land hot and every loot be loaded." — Inter 16px `#8a7d5a`, max-width 480px
7. **[ RETURN TO LOBBY ]** — PUBG button, scrolls to top on click

**CSS Fireworks:**
- 3 radial burst containers
- Bursts in `#d4910a`, `#4a9a3a`, `#f0ebe0`
- Expand and fade repeatedly (4s loop)
- Positioned around the text

---

## ⚙️ Technical Requirements

**Single File Structure:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HASSAM — Birthday Mission</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Teko:wght@400;600;700&family=Inter:wght@300;400;500&family=Caveat:wght@400;500&display=swap" rel="stylesheet">
    <style>
        /* All CSS here — variables, reset, utilities, sections */
    </style>
</head>
<body>
    <!-- Loading Screen -->
    <!-- Fixed HUD -->
    <!-- Section 2: Hero -->
    <!-- Section 3: Briefing -->
    <!-- Section 4: Airdrop -->
    <!-- Section 5: Gallery -->
    <!-- Section 6: Stats -->
    <!-- Section 7: Card -->
    <!-- Section 8: Finale -->
    <script>
        // All JS here — IntersectionObserver, animations, interactions
    </script>
</body>
</html>
```

**CSS Variables:**
```css
:root {
    --bg-deep: #0d0b07;
    --surface: #161208;
    --border: #6b5a2a;
    --amber: #d4910a;
    --brass: #c8a84b;
    --text: #f0ebe0;
    --muted: #8a7d5a;
    --green: #5a7a3a;
    --health: #4a9a3a;
}
```

**Critical JavaScript Functions:**
1. `loadingScreen()` — 2.5s progress bar, then fade
2. `initIntersectionObserver()` — triggers all scroll animations
3. `decryptText(element)` — character-by-character reveal
4. `openCrate()` — 3D lid flip, character bounce, confetti
5. `flipCard()` — 3D rotateY with backface handling
6. `copyToClipboard()` — share functionality + toast
7. `killFeed()` — rotating messages every 4-5s
8. `updateClock()` — live time in HUD
9. `screenShake()` — on first scroll
10. `initStatsBars()` — fill animations on scroll

**Mobile-First Breakpoints:**
- Base: 375px
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

**Touch Targets:** Minimum 44px height for all buttons

**Performance:**
- Use `transform` and `opacity` for all animations (GPU accelerated)
- Lazy load images below fold
- Debounce scroll handlers

---

## ✅ Verification Checklist

- [ ] File saved as `index.html` in correct location (no 404)
- [ ] Loading screen plays 2.5s then reveals site
- [ ] HUD bar fixed at top with working clock and audio toggle
- [ ] Kill feed cycles messages every 4-5 seconds
- [ ] Hero "HASSAM" text has subtle glitch animation
- [ ] DEPLOY button scrolls to next section
- [ ] First scroll triggers screen shake
- [ ] Mission briefing text decrypts on scroll
- [ ] Airdrop crate bobs, opens on tap, shows Hassam's photo with confetti
- [ ] All 9 gallery cards visible with placeholder styling
- [ ] Gallery is swipeable on mobile
- [ ] Stats bars animate fill on scroll
- [ ] LEGEND UNLOCKED banner slides in
- [ ] Birthday card flips 3D on tap
- [ ] Share button copies URL and shows toast
- [ ] Finale has animated CSS fireworks
- [ ] RETURN TO LOBBY scrolls to top
- [ ] No console errors
- [ ] All sections work at 375px width without horizontal scroll

---

## 🖼️ Hassam's Photo Embed

**Option A — Base64 Embed (Recommended):**
Convert `Screenshot_2026-04-19_232906-removebg-preview.png` to base64 and embed:
```html
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..." alt="Hassam" class="character-img">
```

**Option B — File Reference:**
Save the image as `hassam.png` in same folder, reference as:
```html
<img src="./hassam.png" alt="Hassam" class="character-img">
```

Use this image in:
- Airdrop crate pop-out (Section 4)
- Player stats character display (Section 6)

---

**Final Deliverable:** A single `index.html` file that loads immediately without errors, displays all sections with PUBG aesthetic, and functions perfectly on mobile and desktop.
