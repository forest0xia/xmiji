#!/bin/bash
#
# Regenerates the inline Ma Shan Zheng font subset in assets/fonts.css.
# Run this after adding new Chinese characters to UI elements
# (new tags in site.js, new post titleCn, new hardcoded chars).
#
# Usage: bash scripts/update-font-subset.sh
#

set -e

echo "1. Collecting Chinese characters from UI..."

CHARS=$(node -e "
const fs = require('fs');
const chars = new Set();

// Hardcoded UI chars (seal, nav, sidebar)
'夏集全归议'.split('').forEach(c => chars.add(c));

// From site.js tagCN values
const site = fs.readFileSync('js/site.js','utf8');
(site.match(/'([^']+)'/g)||[]).forEach(m =>
  m.replace(/'/g,'').split('').forEach(c => { if (c.charCodeAt(0) > 127) chars.add(c); })
);

// From post titleCn
const index = JSON.parse(fs.readFileSync('content/posts/index.json'));
index.forEach(slug => {
  const p = JSON.parse(fs.readFileSync('content/posts/'+slug+'.json'));
  if (p.titleCn) p.titleCn.split('').forEach(c => { if (c.charCodeAt(0) > 127) chars.add(c); });
});

console.log([...chars].sort().join(''));
")

COUNT=$(node -e "console.log('$CHARS'.length)")
echo "   Found $COUNT unique characters: $CHARS"

echo "2. Fetching subset CSS from Google Fonts..."
ENCODED=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$CHARS'))")
SUBSET_CSS=$(curl -sL \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
  "https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&text=${ENCODED}")

FONT_URL=$(echo "$SUBSET_CSS" | grep -o 'url([^)]*' | head -1 | sed 's/url(//')
if [ -z "$FONT_URL" ]; then
  echo "   ERROR: Could not extract font URL from Google Fonts response"
  exit 1
fi

echo "3. Downloading subset woff2..."
curl -sL "$FONT_URL" > /tmp/msz-subset.woff2
SIZE=$(wc -c < /tmp/msz-subset.woff2 | tr -d ' ')
echo "   Downloaded: ${SIZE} bytes"

echo "4. Generating inline @font-face..."
B64=$(base64 -i /tmp/msz-subset.woff2)
UNICODE_RANGE=$(node -e "
const chars = '$CHARS';
const ranges = [...new Set(chars.split(''))].map(c => 'U+' + c.charCodeAt(0).toString(16).toUpperCase().padStart(4,'0')).sort().join(',');
console.log(ranges);
")

INLINE_CSS="/* Ma Shan Zheng subset — ${COUNT} UI characters, inlined to prevent font flash */
/* Regenerate with: bash scripts/update-font-subset.sh */
@font-face {
  font-family: 'Ma Shan Zheng';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url(data:font/woff2;base64,${B64}) format('woff2');
  unicode-range: ${UNICODE_RANGE};
}"

echo "5. Updating assets/fonts.css..."
# Remove old inline subset (everything before first /* cyrillic or /* latin comment)
MAIN_CSS=$(sed -n '/^\/\* [a-z]/,$p' assets/fonts.css)
echo "$INLINE_CSS" > assets/fonts.css
echo "" >> assets/fonts.css
echo "$MAIN_CSS" >> assets/fonts.css

LINES=$(wc -l < assets/fonts.css | tr -d ' ')
echo "   Done. assets/fonts.css: ${LINES} lines"
echo ""
echo "Commit assets/fonts.css to apply the update."
