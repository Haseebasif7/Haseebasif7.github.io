# haseebasif7.github.io

Personal academic site. Static HTML/CSS/JS — no build step, no dependencies.
Design follows the [al-folio](https://github.com/alshedivat/al-folio) convention
(minimal academic layout) with custom typography and colour.

## Structure

```
index.html       about — bio, research interests, news feed, selected research
research.html    research agenda + entries with status tags
projects.html    engineering projects + reproductions
cv.html          full CV (also printable: Cmd+P gives a clean page)
404.html
assets/
  css/main.css   the entire design system
  js/main.js     theme toggle + mobile nav
  img/profile.webp  served to modern browsers
  img/profile.jpg   fallback, and the og:image for link previews
  pdf/haseeb-asif-cv.pdf
```

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploying to GitHub Pages

1. Create a repo named exactly **`Haseebasif7.github.io`**.
2. Push this directory to its `main` branch.
3. Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.
4. Live at `https://haseebasif7.github.io/` within a minute or two.

If you later buy a custom domain, add a `CNAME` file containing the bare domain
and update the absolute URLs (see below).

## Editing

**Adding a news item** — `index.html`, in the `<ul class="news">` block. Newest
first. Keep the `datetime` attribute in `YYYY-MM` form.

**Adding a research entry** — `research.html`, copy an existing `<li class="entry">`.
Status chips: `chip chip-active` for ongoing work, plain `chip` for finished.

**Adding a project** — `projects.html`, copy an existing `<li class="card">`.
Add `card-wide` to make it span both columns, `card-featured` for the accent bar.

**Changing the accent colour** — `assets/css/main.css`, the `--accent`,
`--accent-hover`, and `--accent-wash` variables under `:root` (light) and
`html[data-theme="dark"]` (dark).

**Replacing the CV** — overwrite `assets/pdf/haseeb-asif-cv.pdf` (keep the
filename) and update the "Last updated" line in `cv.html`.

**Replacing the photo** — regenerate both files from one source image so they
stay in sync:

```bash
python3 -c "
from PIL import Image
src = Image.open('source.jpg').convert('RGB')
src.resize((480,480), Image.LANCZOS).save('assets/img/profile.webp','WEBP',quality=82,method=6)
src.resize((800,800), Image.LANCZOS).save('assets/img/profile.jpg','JPEG',quality=85,optimize=True,progressive=True)
"
```

## House style

The site is written in plain first person and American English. Avoid em-dashes
in prose (they are fine as title separators), three-item rhetorical lists, and
sentences that end on a reversal such as "X rather than Y". State what the work
is and what it measured, then stop.

## Things to update before/after going live

- Absolute URLs assume `https://haseebasif7.github.io/`. They appear in each
  page's `<link rel="canonical">`, the `og:` meta tags, the JSON-LD block in
  `index.html`, `robots.txt`, and `sitemap.xml`. Find and replace if the domain
  changes.
- The nav and footer are duplicated across the four pages by design (no build
  step). If you change one, change all four.
