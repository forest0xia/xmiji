/*
 * Site-wide configuration
 * Shared across gallery.html and post.html
 */

const site = {
  /* Background textures for each page (set via .bg-ink img) */
  backgrounds: {
    index:   'assets/bg/index.jpg',
    gallery: 'assets/bg/gallery.jpg',
    post:    'assets/bg/post.jpg',
  },

  /* Tag → Chinese character mapping for sidebar/filter UI */
  tagCN: {
    AI:                '智',
    'Open Source':     '源',
    Web:               '网',
    'Creative Coding': '码',
    Gaming:            '游',
    Career:            '业',
    Engineering:       '工',
    Education:         '学',
    Startup:           '创',
  },
};
