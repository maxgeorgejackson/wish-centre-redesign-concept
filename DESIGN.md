---
name: The Wish Centre
description: Domestic abuse support in Blackburn with Darwen, set out like a fabric shop wall, with help as the first bolt of cloth.
colors:
  ink: "#15171c"
  ink-soft: "#4a4f59"
  paper: "#ffffff"
  cotton: "#f3efe7"
  rule: "#d8d2c6"
  teal: "#0b4f4b"
  on-teal-soft: "#cfe7e3"
  madder: "#a8144a"
  on-madder-soft: "#f8d7e2"
  saffron: "#e8820c"
  on-saffron-soft: "#3a2205"
  indigo: "#23307a"
  on-indigo-soft: "#d4d9f3"
  marigold: "#ffd23f"
  marigold-hover: "#ffe17a"
  flag-bg: "#fff3d6"
  flag: "#6b4300"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3.8vw, 5.25rem)"
    fontWeight: 750
    lineHeight: 1.05
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 92"
  headline:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 1.4rem + 2vw, 3.1rem)"
    fontWeight: 750
    lineHeight: 1.05
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 92"
  title:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 1.15rem + 0.6vw, 1.65rem)"
    fontWeight: 750
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  number:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 1.3rem + 2.6vw, 3.4rem)"
    fontWeight: 800
    lineHeight: 1
    fontVariation: "'wdth' 88"
    fontFeature: "'tnum'"
  body:
    fontFamily: "Atkinson Hyperlegible Next Variable, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "'tnum'"
  selvedge:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "0.74rem"
    fontWeight: 700
    letterSpacing: "0.2em"
    fontVariation: "'wdth' 80"
rounded:
  none: "0"
spacing:
  gutter: "clamp(1.1rem, 4vw, 2.75rem)"
  section: "clamp(3.5rem, 8vw, 6.5rem)"
  wrap: "1320px"
  exit-bar: "3rem"
components:
  call-button:
    backgroundColor: "{colors.marigold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.4rem 0.95rem"
  call-button-hover:
    backgroundColor: "{colors.marigold-hover}"
  exit-button:
    backgroundColor: "{colors.marigold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  button-ink:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.9rem 1.35rem"
  button-ink-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-light:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.9rem 1.35rem"
  button-light-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.7rem 0.8rem"
---

# Design System: The Wish Centre

## Overview

**Creative North Star: "The Cloth Shop Wall"**

The site is a wall of dyed cotton bolts, the kind stacked floor to ceiling in Blackburn's fabric shops. Each audience gets its own bolt of colour, and help is always the first and largest. Colour fills whole regions instead of being sprinkled as accents. Every field is flat and sealed: no gradients, glows or shadows. The printed selvedge strip along the top edge of a bolt carries the strapline or wayfinding.

The mood is warm, plain-spoken and steady: confident enough to feel like an expert service, never clinical or corporate, and never fragile. Fundraising never sits above help. Help pages stay image-free and light so they load fast on a shared or low-data phone.

**Key Characteristics:**
- Four cloth colours (teal, madder, saffron, indigo) used as whole fields, with cotton and white for reading.
- Marigold means only "call" or "exit".
- Square corners everywhere; ruled rows and swatch chips instead of cards.
- A sticky ink exit bar on every page, plus the Esc key.
- Phone numbers are the page's data: large, tabular, always tap-to-call.

## Colors

Saturated dyed-cotton colours against unbleached cotton and white, with one reserved signal yellow.

### Primary
- **Deep Bolt Teal** (#0b4f4b): the help field. Homepage hero, About, Contact and Work page headers, and the footer. Secondary text on it uses Pale Teal Thread (#cfe7e3), never grey.

### Secondary
- **Madder Pink** (#a8144a): the "I need help" bolt and the help pages (Get help, Services, Resources).
- **Saffron** (#e8820c): Training and community. Text on saffron is always ink.
- **Indigo Bolt** (#23307a): Support us, survivor stories and the donation tickets.

### Signal
- **Marigold** (#ffd23f): the call button, the Exit site button and the focus halo. Nothing else.

### Neutral
- **Ink** (#15171c): body text, the exit bar, outline buttons.
- **Unbleached Cotton** (#f3efe7): alternate reading band and selvedge ground.
- **Paper** (#ffffff): main reading ground and the shop-sign header that carries the logo.
- **Seam** (#d8d2c6): row dividers on light grounds.
- **Flag** (#fff3d6 / #6b4300, dashed #b7862c border): `PLACEHOLDER` notices only.

### Named Rules
**The Marigold Rule.** Marigold is only for calling or leaving. Never use it for decoration, donations or general links.

**The Sealed Field Rule.** Colour fields are flat. No gradients, glows, blurs or drop shadows anywhere.

**The Help First Rule.** On any page that serves more than one audience, help comes before fundraising, in reading order and in size.

## Typography

**Display Font:** Bricolage Grotesque Variable (self-hosted, width axis), fallback system-ui
**Body Font:** Atkinson Hyperlegible Next Variable (self-hosted), fallback system-ui

**Character:** Bricolage reads like shop fascia lettering, a little narrowed (`wdth` 88 to 92) and warm. Atkinson Hyperlegible was designed for low-vision readers and keeps every character distinct, which matters for numbers and for readers under stress.

### Hierarchy
- **Display** (750, clamp(2.5rem → 5.25rem), 1.05): page headlines; the homepage hero runs slightly smaller (max 4.4rem) so the number fits in the first viewport.
- **Headline** (750, clamp(1.9rem → 3.1rem), 1.05): section headings.
- **Title** (750, clamp(1.3rem → 1.65rem), 1.15): row titles, fold summaries.
- **Number** (800, clamp(1.9rem → 3.4rem), `wdth` 88, tabular): the call button number. List numbers use 750 at 1.35rem.
- **Body** (400, 1.125rem, 1.6, max 68ch, tabular figures).
- **Selvedge** (700, 0.74rem, 0.2em tracking, uppercase, `wdth` 80): the printed edge strip and the vertical edge labels on bolts. Decorative only (`aria-hidden`), never the only place information appears.

### Named Rules
**The No Eyebrow Rule.** Headings stand alone; no kicker labels above them. The selvedge sits at the edge of a field, not above a heading.

## Layout

Content sits in a 1320px wrap with a fluid gutter (clamp(1.1rem, 4vw, 2.75rem)). Sections are separated by a fluid rhythm of clamp(3.5rem, 8vw, 6.5rem). Interior pages use a two-column split: a heading column (max 18rem) and a content column, collapsing to one column below 820px. The homepage hero is a 1.5 : 1 grid with the bolts running to the right edge of the window. Below 900px the bolts become full-width horizontal bands with their sub-links always showing.

## Elevation & Depth

The system is completely flat. Depth comes from colour fields meeting each other and from photographs overlapping at different scales (the small photo sits over the large one, framed in a cotton border). The only non-flat device is the gentle tilt of the donation swing tickets.

## Shapes

Square corners throughout (radius 0). Borders are 2px ink for buttons and inputs, 2px rules to open lists, and 1px seams between rows. The selvedge carries a 3px dotted edge, like the tenter holes along real cloth. Swing tickets use a notched-corner silhouette with a punched hole.

## Components

### Exit bar
Sticky at the top of every page: ink ground, "In danger now? Call 999. Press Esc to leave this site fast." with a full-height marigold **Exit site** button. Exit (button or Esc) hides the page at once and replaces the history entry with a neutral page (BBC Weather, set in `src/data/site.js`).

### Call button
Marigold block, ink text, small label above a large tabular number with a phone icon. Always a `tel:` link. Hover lightens to #ffe17a.

### Buttons
- **Shape:** square (0), 2px border.
- **Ink outline** on light grounds; fills ink on hover.
- **Light outline** on cloth grounds; fills white on hover.
- **Solid ink** for form submits.

### Bolts (signature)
Three tall colour fields (madder, saffron, indigo) separated by 5px of teal. Each carries a vertical selvedge label, a large name and a short description, with the whole bolt clickable. On hover or focus (desktop, hover-capable devices) the bolt "unrolls": its sub-links reveal with a clip-path and height transition (420ms, ease-out `cubic-bezier(0.16, 1, 0.3, 1)`). With reduced motion the transition is instant.

### Ruled rows and swatches
The default list pattern in place of cards: a 2px rule opens the list, 1px seams divide rows, and each row is a 1.1rem colour swatch, a title, and text.

### Swing tickets
Donation amounts hang as white tickets on the indigo field, with notched top corners, a punched hole and a slight alternating tilt.

### Folds
`<details>` disclosures for safety information, ruled top and bottom in ink with a +/− marker.

### Inputs
White, 2px ink border, square. Unconnected forms stay disabled with a visible `PLACEHOLDER` note.

### Navigation
A white shop-sign header holds the logo (it needs a light ground) and the display-face links. The current page is marked by a 4px underline in that section's cloth colour. Below 900px a Menu button opens a stacked list.

## Do's and Don'ts

### Do:
- **Do** give each audience its cloth colour and keep it consistent across pages (help is madder or teal, training is saffron, support is indigo).
- **Do** make every phone number a `tel:` link set in tabular figures.
- **Do** keep help pages image-free and script-light.
- **Do** flag unfinished links and forms with the `PLACEHOLDER` style until they are connected.
- **Do** theme focus with the ink ring and marigold halo (`outline: 3px solid ink; box-shadow: 0 0 0 6px marigold`).

### Don't:
- **Don't** use marigold for anything except calling, exiting and focus.
- **Don't** add gradients, shadows, glass or rounded corners.
- **Don't** put fundraising above help.
- **Don't** use stock imagery of people as if they were real clients, or add tracking or third-party scripts.
- **Don't** add eyebrow or kicker labels above headings.
