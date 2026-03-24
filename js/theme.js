/*
 * Theme system — injects CSS variables and handles light/dark toggle.
 * Reads saved preference from localStorage, defaults to 'dark'.
 */

const themes = {
  light: {
    '--paper':        '#f4efe6',
    '--ink':          '#2a2622',
    '--ink-light':    '#181818',
    '--ink-wash':     '#8a847e',
    '--ink-faint':    '#b8b2ab',
    '--vermillion':   '#c94040',
    '--vermillion-muted': '#b5524a',
    '--border':       'rgba(42, 38, 34, 0.08)',
    '--selection-bg': '#c94040',
    '--selection-fg': '#f4efe6',
    '--bg-opacity':   '0.06',
    '--glass-bg':     'rgba(244,239,230,0.6)',
    '--glass-border': 'rgba(255,255,255,0.5)',
    '--glass-shadow': '0 4px 24px rgba(0,0,0,0.05)',
    '--glass-inset':  'inset 0 1px 0 rgba(255,255,255,0.5)',
    '--glass-bg-solid': 'rgba(244,239,230,0.85)',
    '--card-bg':      'rgba(255,255,255,0.3)',
    '--card-border':  'rgba(255,255,255,0.5)',
    '--card-shadow':  '0 3px 20px rgba(42,38,34,0.06)',
    '--card-hover-border': 'rgba(201,64,64,0.12)',
    '--card-hover-shadow': '0 6px 28px rgba(42,38,34,0.1)',
    '--pill-bg':      'rgba(255,255,255,0.4)',
    '--pill-border':  'rgba(255,255,255,0.5)',
    '--btn-bg':       'rgba(255,255,255,0.45)',
    '--btn-border':   'rgba(255,255,255,0.55)',
    '--btn-shadow':   '0 2px 16px rgba(0,0,0,0.04)',
    '--btn-inset':    'inset 0 1px 0 rgba(255,255,255,0.5)',
    '--btn-hover-bg': 'rgba(255,255,255,0.65)',
    '--photo-shadow': '0 4px 24px rgba(42,38,34,0.1)',
    '--photo-border': 'rgba(255,255,255,0.6)',
    '--overlay-bg':   'rgba(42,38,34,0.88)',
    '--nav-btn-bg':   'rgba(255,255,255,0.7)',
    '--nav-btn-color':'#2a2622',
    '--seal-color':   '#f4efe6',
  },
  dark: {
    '--paper':        '#1a1816',
    '--ink':          '#e8e0d4',
    '--ink-light':    '#bababa',
    '--ink-wash':     '#8a847e',
    '--ink-faint':    '#5a5650',
    '--vermillion':   '#d4544a',
    '--vermillion-muted': '#c9685f',
    '--border':       'rgba(232, 224, 212, 0.08)',
    '--selection-bg': 'rgba(180,200,220,0.3)',
    '--selection-fg': '#e8e0d4',
    '--bg-opacity':   '0.04',
    '--glass-bg':     'rgba(26,24,22,0.6)',
    '--glass-border': 'rgba(255,255,255,0.1)',
    '--glass-shadow': '0 4px 24px rgba(0,0,0,0.3)',
    '--glass-inset':  'inset 0 1px 0 rgba(255,255,255,0.05)',
    '--glass-bg-solid': 'rgba(26,24,22,0.85)',
    '--card-bg':      'rgba(255,255,255,0.05)',
    '--card-border':  'rgba(255,255,255,0.08)',
    '--card-shadow':  '0 3px 20px rgba(0,0,0,0.2)',
    '--card-hover-border': 'rgba(212,84,74,0.25)',
    '--card-hover-shadow': '0 6px 28px rgba(0,0,0,0.3)',
    '--pill-bg':      'rgba(255,255,255,0.06)',
    '--pill-border':  'rgba(255,255,255,0.1)',
    '--btn-bg':       'rgba(255,255,255,0.08)',
    '--btn-border':   'rgba(255,255,255,0.12)',
    '--btn-shadow':   '0 2px 16px rgba(0,0,0,0.2)',
    '--btn-inset':    'inset 0 1px 0 rgba(255,255,255,0.06)',
    '--btn-hover-bg': 'rgba(255,255,255,0.14)',
    '--photo-shadow': '0 4px 24px rgba(0,0,0,0.3)',
    '--photo-border': 'rgba(255,255,255,0.15)',
    '--overlay-bg':   'rgba(0,0,0,0.88)',
    '--nav-btn-bg':   'rgba(255,255,255,0.12)',
    '--nav-btn-color':'#e8e0d4',
    '--seal-color':   '#e8e0d4',
  }
};

function applyTheme(name) {
  const vars = themes[name];
  if (!vars) return;
  const root = document.documentElement;
  for (const [k, v] of Object.entries(vars)) root.style.setProperty(k, v);
  localStorage.setItem('theme', name);
  // Update toggle button icon if it exists
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = name === 'dark' ? '☀' : '☽';
}

function toggleTheme() {
  const current = localStorage.getItem('theme') || 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

// Apply saved theme immediately
applyTheme(localStorage.getItem('theme') || 'light');
