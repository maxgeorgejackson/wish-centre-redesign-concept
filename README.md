# The Wish Centre — redesign concept

A static demo rebuild of thewishcentre.org, using the charity's own content, restructured around the three audiences from the funding brief (I Need Help / Learning & Community / Support Us). Built as plain HTML/CSS/JS — no build step, no dependencies.

**This is a design concept to show prospective funders/developers what Phase 1 could look like — it is not a working CMS, and forms/donate buttons are placeholders.**

## What's included
- `index.html` — homepage with the three audience pathways
- `need-help.html` — crisis numbers, safety planning, "Am I in danger?", no tracking scripts
- `learning-community.html` — training/workshops content, enquiry form
- `support-us.html` — donation impact amounts, corporate partnerships
- `about.html`, `work-volunteer.html`, `news.html`, `contact.html`
- Sitewide "Exit site safely" button in the header (Escape key also triggers it)

## Deploying on Render
1. Push this `wish-centre-demo` folder to a new GitHub repo (or a folder within an existing one).
2. In Render: **New > Static Site**, connect the repo.
3. Build command: leave blank (or `echo "no build"`).
4. Publish directory: `.` (or the path to this folder if it's nested in a larger repo).
5. Deploy — Render will give you a `*.onrender.com` URL you can share.

No environment variables or server needed; it's entirely static.
