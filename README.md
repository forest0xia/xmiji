# xmiji

Personal site for [Forest Xia](https://www.linkedin.com/in/forest-xia-38454479/) — a minimal, ink-wash-inspired gallery and blog.

## Live

Deploy the repo to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages). No build step required.

## Structure

```
index.html        Landing page — bio, links, profile
gallery.html      Filterable post grid with sidebar (desktop) / overlay (mobile)
post.html         Individual post view with prev/next nav and Giscus comments
posts.js          Post data — add new posts here (newest first)
assets/           Profile photo and static assets
posts/images/     Post-specific images
sample-images/    Placeholder images (safe to remove once replaced)
```

## Adding a post

Add an entry at the top of `posts.js`:

```js
{
  slug: 'my-post',
  title: 'My Post Title',
  date: '2026-04-01',
  image: 'posts/images/cover.jpg',
  tags: ['Tag1', 'Tag2'],
  body: `<p>Content here. HTML supported.</p>`
},
```

Drop cover/inline images into `posts/images/`, commit, push. That's it.

## Comments

Comments use [Giscus](https://giscus.app) (GitHub Discussions). To enable:

1. Make the repo public
2. Enable Discussions in repo Settings > Features
3. Install the [Giscus app](https://github.com/apps/giscus)
4. Go to [giscus.app](https://giscus.app), enter `forest0xia/xmiji`, and copy the `data-repo-id` and `data-category-id`
5. Update those two fields in `post.html`

## Design

- Ink-wash paper aesthetic with vermillion accents
- Fonts: Ma Shan Zheng (brush), Cormorant Garamond (display), Crimson Pro (body)
- Zero dependencies, zero build tools — pure HTML/CSS/JS
- Responsive: sidebar filters on desktop, overlay dropdown on mobile

## License

MIT
