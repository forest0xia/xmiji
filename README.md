# xmiji

Personal site for [Forest Xia](https://www.linkedin.com/in/forest-xia-38454479/) — a minimal, ink-wash-inspired gallery and blog.

## Live

Deploy to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages). No build step required.

## Structure

```
index.html        Landing page — bio, links, profile photo with hover overlay + lightbox
gallery.html      Filterable post grid with sidebar (desktop) / overlay (mobile)
post.html         Individual post view with image carousel, fullscreen gallery, prev/next nav, comments
js/posts.js       Post data — add new posts here (newest first)
assets/           Profile photo and background textures
assets/bg/        Background textures (index.jpg, gallery.jpg, post.jpg)
content/images/   Post cover images and screenshots
```

## Adding a post

Add an entry at the top of `js/posts.js`:

```js
{
  slug: 'my-post',
  title: 'My Post Title',
  titleCn: '中文标题',               // optional — shown alongside English title
  date: '2026-04-01',
  image: 'content/images/cover.png',   // gallery thumbnail (3:2 landscape)
  images: [                          // optional — carousel in post view
    'content/images/cover.png',
    'content/images/screenshot1.png',
    'content/images/screenshot2.png',
  ],
  tags: ['Tag1', 'Tag2'],
  body: `
    <p>English paragraph.</p>
    <p>中文段落。</p>
  `
},
```

Drop images into `content/images/`, commit, push. That's it.

## Content rules

### Bilingual

All content is bilingual (English + Chinese). This applies to:
- Post titles: use `title` (English) and `titleCn` (Chinese)
- Post body: alternate English and Chinese paragraphs
- Cover images: include both English title and Chinese subtitle
- Gallery grid: shows both titles beneath the thumbnail

### Images

- **Gallery thumbnails** use 3:2 landscape aspect ratio
- **Cover images** should be 900x600px with large, readable text — title (64-72px), Chinese subtitle (36-42px), tagline (20-22px)
- **Post carousel** supports multiple images via the `images` array. If omitted, falls back to the single `image` field
- Clicking a carousel image opens a **fullscreen gallery** with left/right arrows and keyboard navigation (arrow keys, Escape)
- The carousel has **arrow buttons on both edges** (visible on hover) and dot indicators below

### Tags

Each tag has a Chinese character mapping defined once in `js/site.js` (`site.tagCN`). Both `gallery.html` and `post.html` read from there — update it in one place.

### Profile photo (index.html)

- The profile photo shows a "夏" overlay on hover
- Clicking it opens a fullscreen lightbox
- To change the photo, replace `assets/profile.jpg` and update the `src` in `index.html`

### Mobile filter

Both `gallery.html` and `post.html` have a filter/list button in the top bar (visible at <=900px). The dropdown shows categories with a max-height of ~10.5 items and scrolls for the rest. In `post.html`, clicking a category navigates to `gallery.html?cat=<tag>`.

## Design

- Ink-wash paper aesthetic with vermillion accents
- Fonts: Ma Shan Zheng (brush), Cormorant Garamond (display), Crimson Pro (body)
- Zero dependencies, zero build tools — pure HTML/CSS/JS
- Responsive: sidebar filters on desktop, overlay dropdown on mobile
- Animations use only `opacity` and `transform` for GPU performance — no `backdrop-filter` transitions

## Comments

Powered by [Giscus](https://giscus.app) (GitHub Discussions). Config is in `post.html` near the bottom of the `<script>` block.

## License

MIT
