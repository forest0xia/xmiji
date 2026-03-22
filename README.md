# xmiji

Personal site for [Forest Xia](https://www.linkedin.com/in/forest-xia-38454479/) — a minimal, ink-wash-inspired gallery and blog.

## Live

Deploy to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages). No build step required.

## Structure

```
index.html              Landing page — bio, links, profile photo
gallery.html            Filterable post grid with sidebar / mobile overlay
post.html               Post view with carousel, fullscreen gallery, comments
js/site.js              Shared config (tagCN mapping, backgrounds)
js/posts.js             Auto-generated from content/posts/ — do not edit directly
build.js                Compiles individual post JSONs into js/posts.js
content/posts/          One JSON file per post
content/posts/index.json  Ordered list of post slugs (newest first)
content/images/         Post cover images and screenshots
assets/                 Profile photo, background textures
```

## Adding a new post

### 1. Add images

Drop cover image and any screenshots into `content/images/`.

- Gallery thumbnails: 3:2 landscape aspect ratio
- Cover images: 900x600px with large readable text

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
| `images`  | no       | Array for post carousel. Falls back to `image` if omitted |
| `tags`    | yes      | Array of tag strings |
| `body`    | yes      | HTML string. Alternate English and Chinese `<p>` blocks |

### 3. Register the slug

Add the slug to `content/posts/index.json` (newest first):

```json
[
  "my-post",
  "follow-builders",
  "ai-career-navigator",
  ...
]
```

### 4. Add tag mapping (if new tag)

If you used a new tag, add its Chinese character to `js/site.js`:

```js
tagCN: {
  ...
  'My New Tag': '新',
},
```

### 5. Build and push

```bash
node build.js
git add content/posts/my-post.json content/posts/index.json content/images/ js/posts.js
git commit -m "Add post: my-post"
git push
```

`build.js` compiles the individual post JSONs into `js/posts.js`.

## Content rules

### Bilingual

All content is bilingual (English + Chinese):
- Post titles: `title` (English) + `titleCn` (Chinese)
- Post body: alternate English and Chinese paragraphs
- Cover images: include both English title and Chinese subtitle

### Tags

Each tag has a Chinese character mapping defined once in `js/site.js` (`site.tagCN`). Both `gallery.html` and `post.html` read from there — update it in one place.

### Profile photo (index.html)

- Shows a "夏" overlay on hover, opens fullscreen lightbox on click
- To change: replace `assets/profile.jpg`

## Design

- Ink-wash paper aesthetic with vermillion accents
- Fonts: Ma Shan Zheng (brush), Cormorant Garamond (display), Crimson Pro (body)
- Zero dependencies, zero build tools — pure HTML/CSS/JS
- Responsive: sidebar filters on desktop, overlay dropdown on mobile

## Comments

Powered by [Giscus](https://giscus.app) (GitHub Discussions). Config is in `post.html`.

## License

MIT
