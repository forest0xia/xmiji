/*
 * ╔══════════════════════════════════════════════╗
 * ║  POSTS — Add new posts here                  ║
 * ╚══════════════════════════════════════════════╝
 *
 * To add a new post, copy this template and paste it
 * at the TOP of the array (newest first):
 *
 *   {
 *     slug: 'my-post-slug',          // URL-safe name (no spaces, lowercase)
 *     title: 'My Post Title',
 *     date: '2026-04-01',            // YYYY-MM-DD
 *     image: 'posts/images/my-image.jpg',  // put images in posts/images/
 *     tags: ['Tag1', 'Tag2'],
 *     body: `
 *       <p>Your content here. Use HTML.</p>
 *       <p>Second paragraph.</p>
 *       <p><strong>Bold text</strong> and <em>italic text</em>.</p>
 *       <p><img src="posts/images/inline-photo.jpg" alt="description" style="width:100%;margin:20px 0"></p>
 *     `
 *   },
 *
 * Then commit & push. That's it.
 */

const posts = [
  {
    slug: 'night-city-series',
    title: 'Night City Series',
    date: '2026-02-10',
    image: 'sample-images/09c382d8e9ad293a8470790cfc1b6305.jpg',
    tags: ['Photography', 'Cities'],
    body: `
      <p>There's something about cities after dark that reveals their true character. The artificial constellations of windows, the rhythm of traffic lights, the silhouettes against illuminated skylines.</p>
      <p>This series captures nighttime cityscapes from various locations — each city has its own light signature, its own color temperature, its own pulse.</p>
      <p><strong>Equipment:</strong> Sony A7IV, 24-70mm f/2.8 GM, occasional tripod for long exposures.</p>
    `
  },
  {
    slug: 'meridian-cli',
    title: 'Meridian',
    date: '2025-11-22',
    image: 'sample-images/54c46812806ffe54947fe6650ed9cece.jpg',
    tags: ['Open Source', 'CLI', 'Go'],
    body: `
      <p>Managing configuration drift across dozens of microservices and multiple environments was a recurring pain point. Meridian was born from that frustration.</p>
      <p>It provides a unified interface for diffing, syncing, and validating configuration files across services. Think of it as <strong>git diff but for your service configs</strong>.</p>
      <p>Open sourced under MIT. Available on GitHub with full documentation.</p>
    `
  },
  {
    slug: 'waveform-visualizer',
    title: 'Waveform Visualizer',
    date: '2025-09-05',
    image: 'sample-images/6d8199682ffe362d00c611e76f81851b.jpg',
    tags: ['Creative Coding', 'WebAudio'],
    body: `
      <p>A weekend experiment that turned into something I keep coming back to. Drop in any audio file and watch it come alive as reactive waveforms, frequency bars, and particle systems.</p>
      <p>Built entirely with vanilla JavaScript using the <strong>Web Audio API</strong> and <strong>Canvas 2D</strong>. No frameworks, no dependencies.</p>
    `
  },
  {
    slug: 'reliable-pipelines',
    title: 'Building Reliable Pipelines at Scale',
    date: '2025-06-18',
    image: 'sample-images/a75852052faedb1a2790d66c26c9c568.jpg',
    tags: ['Engineering', 'Writing'],
    body: `
      <p>After two years of building and operating data pipelines that process billions of events daily, I wrote up the key lessons our team learned the hard way.</p>
      <p><strong>Reliability isn't a feature you add — it's a property that emerges from good design decisions made early.</strong></p>
    `
  },
  {
    slug: 'home-lab-v3',
    title: 'Home Lab v3',
    date: '2025-03-12',
    image: 'sample-images/d6ce0846b084b4db94e8886472d42db2.jpg',
    tags: ['Hardware', 'Kubernetes'],
    body: `
      <p>Version 3 of the home lab. Three Intel NUCs running k3s, a Synology NAS for persistent storage, and a Ubiquiti network stack.</p>
      <p>The big upgrade: <strong>full observability</strong>. Prometheus + Grafana for metrics, Loki for logs, Tempo for tracing.</p>
      <p>Total power consumption: ~45W idle. Infrastructure as a hobby.</p>
    `
  },
  {
    slug: 'type-explorer',
    title: 'Type Explorer',
    date: '2024-12-01',
    image: 'sample-images/de3841c2690daf34e386c6519dda8e08.jpg',
    tags: ['Design', 'Typography'],
    body: `
      <p>Born from the frustration of endlessly scrolling through Google Fonts. Type Explorer lets you preview font combinations in real-time with your own content.</p>
      <p><strong>Side-by-side comparison</strong> of up to four pairings, adjustable scale/weight/spacing, preview in light and dark contexts.</p>
    `
  }
];
