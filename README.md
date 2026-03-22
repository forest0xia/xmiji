# xmiji

Personal site for [Forest Xia](https://www.linkedin.com/in/forest-xia-38454479/) — [xmiji.com](https://xmiji.com)

A minimal, ink-wash-inspired gallery and blog. Zero dependencies, zero build tools, pure HTML/CSS/JS.

## Structure

```
index.html                Landing page — bio, links, profile photo
gallery.html              Filterable post grid with sidebar / mobile overlay
post.html                 Post view with carousel, fullscreen gallery, comments
js/theme.js               Light/dark theme system (CSS variables, localStorage)
js/site.js                Shared config (tag mappings)
js/posts.js               Auto-generated — do not edit directly
build.js                  Compiles post JSONs → js/posts.js with validation
content/posts/            One JSON file per post
content/posts/index.json  Ordered list of post slugs (newest first)
content/images/           Cover images and screenshots
content/images/_covers.html  HTML template for generating cover images
assets/                   Profile photo, background textures
assets/fonts.css          Self-hosted font CSS with inline CJK subset
scripts/update-font-subset.sh  Regenerates inline Chinese font subset
```

## Adding a new post

### 1. Create cover image

Edit `content/images/_covers.html`, add a new cover section, then screenshot at 900x600.

Or drop a pre-made 900x600 PNG into `content/images/`.

### 2. Create the post file

Create `content/posts/my-post.json`:

```json
{
  "slug": "my-post",
  "title": "My Post Title",
  "titleCn": "中文标题",
  "date": "2026-04-01",
  "image": "content/images/my-post.png",
  "images": [
    "content/images/my-post.png",
    "content/images/my-post-screenshot.png"
  ],
  "tags": ["AI", "Open Source"],
  "body": "<p>English paragraph.</p>\n<p>中文段落。</p>"
}
```

| Field     | Required | Notes |
|-----------|----------|-------|
| `slug`    | yes      | URL-safe identifier, must match filename |
| `title`   | yes      | English title |
| `titleCn` | no       | Chinese title, shown alongside English |
| `date`    | yes      | `YYYY-MM-DD` format |
| `image`   | yes      | Gallery thumbnail path |
| `images`  | no       | Array for post carousel; falls back to `image` |
| `tags`    | yes      | Array of tag strings |
| `body`    | yes      | HTML string; alternate English and Chinese `<p>` blocks |

### 3. Register the slug

Add the slug to `content/posts/index.json` (newest first).

### 4. Add tag mapping (if new tag)

Add the Chinese character to `js/site.js` → `site.tagCN`.

### 5. Build and push

```bash
node build.js
git add content/ js/posts.js
git commit -m "Add post: my-post"
git push
```

`build.js` validates: required fields, image existence, JS syntax, tag coverage.

## Cover image rules

All gallery covers are generated from `content/images/_covers.html`.

**Font sizes:**

| Element | Font | Size |
|---------|------|------|
| Title (English) | Cormorant Garamond 600 | 77–84px |
| Title (Chinese) | Ma Shan Zheng | 52px |
| Tagline / subtitle | Crimson Pro 300 | 38–42px |
| Stat numbers | Cormorant Garamond 600 | 47px |
| Stat labels | Crimson Pro | 21px |
| Pills / concept tags | Crimson Pro | 25–27px |

**Layout:**

- Canvas: 900x600px (3:2 landscape)
- Include English title + Chinese subtitle on every cover
- Use infographic elements where possible (mock UI, charts, timelines, grids)
- Light covers: `#f4efe6` background, `#2a2622` text
- Dark covers: dark gradient background, light text
- Vermillion accent: `#c94040`
- All text must be readable at ~300px thumbnail width

**Secondary images** (post carousel) are screenshots of live sites or repos.

## Themes

Two themes: light (default) and dark. Toggle via sun/moon button in the nav bar.

- Theme variables defined in `js/theme.js`
- Persists to `localStorage` — consistent across all pages
- All colors use CSS custom properties; no hardcoded rgba in HTML
- To add a new theme: add an object to the `themes` map in `theme.js`

## Fonts

Fonts are served from `assets/fonts.css` (local copy of Google Fonts CSS), with font files loaded from `fonts.gstatic.com` (+ `gstatic.loli.net` mirror for China).

**Chinese font subset**: The top of `assets/fonts.css` contains an inline base64 `@font-face` for Ma Shan Zheng, covering only the ~46 Chinese characters used in UI elements (nav, sidebar, seals, post titles). This uses `font-display: block` so these characters render instantly with zero flash. The full Ma Shan Zheng loads via `font-display: swap` for body text.

**When adding new Chinese UI characters** (new tags, new post titleCn):

```bash
bash scripts/update-font-subset.sh
```

This script automatically collects all Chinese characters from UI elements, fetches a minimal font subset from Google Fonts, base64-encodes it, and updates `assets/fonts.css`.

## Content rules

- **Bilingual**: all posts alternate English and Chinese paragraphs
- **Tags**: mapped to Chinese characters in `js/site.js` (`site.tagCN`), single source of truth
- **External links**: opened in new tab automatically (handled in `post.html`)
- **Profile photo**: `assets/profile.jpg`, shows "夏" overlay on hover

## Comments

Powered by [Giscus](https://giscus.app) (GitHub Discussions). Config in `post.html` — `data-repo-id` and `data-category-id` point to the Comments category on `forest0xia/xmiji`.

## Local dev

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## License

MIT
