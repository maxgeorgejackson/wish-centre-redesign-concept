# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro static site, content in `src/data/` (JSON/JS) so non-developers can update it, deployed as a Render Static Site via `render.yaml`. Same stack and maintainer as the sister sites `tig-website` and `loorg-website`. Chosen by the user on 2026-11-01, replacing the earlier plain HTML/CSS/JS concept.

## Users

- **People seeking help (primary):** anyone experiencing, or at risk of, domestic abuse in Blackburn with Darwen, and people worried about someone else. They may be in crisis, browsing on a shared or monitored phone, on low data, and short of time. Their job: find a number to call, understand what help exists (refuge, outreach, IDVA, counselling), and leave the site instantly if needed. When space is contested, this audience wins.
- **Learning & community (secondary):** schools, colleges, employers/HR teams and professionals wanting domestic abuse training, CPD, healthy-relationships education, or referral routes.
- **Supporters (secondary):** individual donors, fundraisers, corporate partners and patrons wanting to give, partner or fundraise, and to see the impact.
- Also served: prospective staff, volunteers, student counsellors and allies (Work or volunteer).

## Product Purpose

The public website of The Wish Centre, a domestic abuse charity in Blackburn with Darwen. It is intended to replace the live site at thewishcentre.org (confirmed 2026-11-01), not to remain a concept. Success means:

1. A person in danger reaches the right phone number, or exits the site, within seconds, on any device.
2. Professionals and schools understand the training offer and send an enquiry.
3. Supporters see what a donation buys and can give, partner or fundraise.

## Positioning

A local, specialist service that has supported survivors in Blackburn with Darwen since 1989 (founded as Blackburn and Darwen District Women's Aid; first refuge 1991), covering the whole path from crisis to recovery under one roof: refuge, IDVA, outreach, counselling, recovery programmes, children and young people's services, and a behaviour change programme for perpetrators. Specialist expertise in honour-based abuse and forced marriage; a specialist BAME IDVA, an Over 55s service ("Open Doors") and a Stalking Advocacy Caseworker.

## Operating Context

- Help-seekers may be watched: the site must offer a quick exit (button and Escape key) to a neutral page, and must not add tracking or third-party scripts to help pages.
- Office hours: Mon–Thu 9am–5pm, Fri 9am–4pm. Outside hours, the site points to the National Domestic Abuse Helpline (24h) and 999.
- Information is offered in other languages on request (Urdu, Punjabi, Polish via interpreter; public factsheets in English, Arabic, Bulgarian, Latvian, Polish, Punjabi, Romanian and Urdu).
- Part of the regional #NoExcuseForAbuse campaign.

## Capabilities and Constraints

- Pages: Home, I need help, Services, Learning & community, Support us, Survivor stories, Resources, About, Work or volunteer, News, Contact, 404.
- Not yet live: the training enquiry form, donate buttons, volunteer application and mailing list have no back end. They must be flagged as `PLACEHOLDER` until connected, not presented as working.
- Planned later (Phase 2): event/training booking, staff-editable news hub, downloadable partner and fundraising packs.
- Undecided: domain cut-over, donation provider, form handling service, whether survivor stories and photos have current consent for reuse.

## Brand Commitments

- Name: **The Wish Centre**. Strapline in use: "We listen. We support. We empower."
- The existing logo (`images/logo.png`) is fixed. Palette and typography are open to redesign (confirmed 2026-11-01).
- Voice: warm, calm, plain English, non-judgemental; never sensational about abuse. Domestic abuse can affect anyone; the charity notes it disproportionately affects women and girls.
- Legal line: registered charitable company limited by guarantee, Company No. 5834929, Charity No. 1116444.

## Evidence on Hand

- Real content from thewishcentre.org: services, team (CEO Shigufta Khan; Head of People & Culture Steph Sayers), governance, accreditations (Investors in People, Investing in Children, Respect, GSK Impact Award April 2021, Bronze Trauma-Informed Quality Mark), donation amounts, text-to-donate codes, partnership contacts, news headlines, survivor stories, helpline numbers.
- Photos in `public/images/` taken from the current site: refuge, IDVA, young people's groups, HR training, donate, a carousel image, and the logo. Some (at least the IDVA image) appear to be stock photography; confirm source and licence for each before launch.
- Do not fabricate statistics, testimonials, survivor stories, partner endorsements or photos of people. Stock-style imagery of survivors must not pass as real clients.

## Product Principles

1. Safety before everything: exit, phone numbers and discretion come first on every page.
2. Calm, not alarming: help-seekers are often frightened, so the site never adds pressure.
3. One clear way in per audience; help-seekers never have to wade through fundraising to find help.
4. Every fact traceable to the charity; unfinished features are flagged, not dressed up.
5. Editable by non-developers: content lives in data files.

## Accessibility & Inclusion

WCAG 2.2 AA as a minimum. Fast and light on low-data and older phones, especially help pages (no heavy images or third-party scripts there). Readable for people under stress and with low literacy or English as an additional language. Exit control reachable by keyboard and visible on every page.
