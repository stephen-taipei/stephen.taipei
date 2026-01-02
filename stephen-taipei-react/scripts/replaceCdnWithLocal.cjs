#!/usr/bin/env node

/**
 * Script to replace CDN URLs with local vendor paths in HTML files
 */

const fs = require('fs');
const path = require('path');

const TOOLS_DIR = path.join(__dirname, '../src/tools');
const VENDOR_BASE = '/vendor';

// Mapping of CDN URLs to local paths
const replacements = [
  // Tailwind CSS - replace JIT with pre-built
  {
    pattern: /<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>/g,
    replacement: `<link href="${VENDOR_BASE}/tailwind/tailwind.min.css" rel="stylesheet">`
  },
  {
    pattern: /https:\/\/cdn\.jsdelivr\.net\/npm\/tailwindcss@2\.2\.19\/dist\/tailwind\.min\.css/g,
    replacement: `${VENDOR_BASE}/tailwind/tailwind.min.css`
  },

  // Font Awesome
  {
    pattern: /https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/font-awesome\/6\.0\.0\/css\/all\.min\.css/g,
    replacement: `${VENDOR_BASE}/fontawesome/css/all.min.css`
  },

  // JSZip
  {
    pattern: /https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/jszip\/3\.10\.1\/jszip\.min\.js/g,
    replacement: `${VENDOR_BASE}/jszip/jszip.min.js`
  },

  // Prism.js
  {
    pattern: /https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/prism\/1\.29\.0\/prism\.min\.js/g,
    replacement: `${VENDOR_BASE}/prism/prism.min.js`
  },
  {
    pattern: /https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/prism\/1\.29\.0\/themes\/prism-tomorrow\.min\.css/g,
    replacement: `${VENDOR_BASE}/prism/themes/prism-tomorrow.min.css`
  },
  {
    pattern: /https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/prism\/1\.29\.0\/themes\/prism\.min\.css/g,
    replacement: `${VENDOR_BASE}/prism/themes/prism.min.css`
  },
  {
    pattern: /https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/prism\/1\.29\.0\/components\/prism-(\w+)\.min\.js/g,
    replacement: `${VENDOR_BASE}/prism/components/prism-$1.min.js`
  },

  // GIF.js
  {
    pattern: /https:\/\/cdn\.jsdelivr\.net\/npm\/gif\.js@0\.2\.0\/dist\/gif\.min\.js/g,
    replacement: `${VENDOR_BASE}/gif/gif.min.js`
  },
  {
    pattern: /https:\/\/cdn\.jsdelivr\.net\/npm\/gif\.js@0\.2\.0\/dist\/gif\.worker\.js/g,
    replacement: `${VENDOR_BASE}/gif/gif.worker.js`
  },
  {
    pattern: /https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/gif\.js\/0\.2\.0\/gif\.js/g,
    replacement: `${VENDOR_BASE}/gif/gif.min.js`
  },
  {
    pattern: /https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/gif\.js\/0\.2\.0\/gif\.worker\.js/g,
    replacement: `${VENDOR_BASE}/gif/gif.worker.js`
  },
  {
    pattern: /https:\/\/cdn\.jsdelivr\.net\/npm\/gifuct-js@2\.1\.2\/dist\/gifuct-js\.min\.js/g,
    replacement: `${VENDOR_BASE}/gif/gifuct-js.min.js`
  },

  // Tesseract.js
  {
    pattern: /https:\/\/cdn\.jsdelivr\.net\/npm\/tesseract\.js@5\/dist\/tesseract\.min\.js/g,
    replacement: `${VENDOR_BASE}/tesseract/tesseract.min.js`
  },

  // KaTeX
  {
    pattern: /https:\/\/cdn\.jsdelivr\.net\/npm\/katex@0\.16\.9\/dist\/katex\.min\.js/g,
    replacement: `${VENDOR_BASE}/katex/katex.min.js`
  },
  {
    pattern: /https:\/\/cdn\.jsdelivr\.net\/npm\/katex@0\.16\.9\/dist\/katex\.min\.css/g,
    replacement: `${VENDOR_BASE}/katex/katex.min.css`
  },

  // Marked.js
  {
    pattern: /https:\/\/cdn\.jsdelivr\.net\/npm\/marked\/marked\.min\.js/g,
    replacement: `${VENDOR_BASE}/marked/marked.min.js`
  },

  // Chart.js
  {
    pattern: /https:\/\/cdn\.jsdelivr\.net\/npm\/chart\.js/g,
    replacement: `${VENDOR_BASE}/chart/chart.min.js`
  },

  // Three.js
  {
    pattern: /https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/three\.js\/r128\/three\.min\.js/g,
    replacement: `${VENDOR_BASE}/misc/three.min.js`
  },

  // Crypto-JS
  {
    pattern: /https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/crypto-js\/4\.1\.1\/crypto-js\.min\.js/g,
    replacement: `${VENDOR_BASE}/misc/crypto-js.min.js`
  },

  // Acorn
  {
    pattern: /https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/acorn\/8\.11\.2\/acorn\.min\.js/g,
    replacement: `${VENDOR_BASE}/misc/acorn.min.js`
  },

  // Esprima
  {
    pattern: /https:\/\/cdn\.jsdelivr\.net\/npm\/esprima@4\.0\.1\/dist\/esprima\.min\.js/g,
    replacement: `${VENDOR_BASE}/misc/esprima.min.js`
  },

  // EXIF.js
  {
    pattern: /https:\/\/cdn\.jsdelivr\.net\/npm\/exif-js@2\.3\.0\/exif\.min\.js/g,
    replacement: `${VENDOR_BASE}/misc/exif.min.js`
  },

  // piexif.js
  {
    pattern: /https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/piexifjs\/1\.0\.6\/piexif\.min\.js/g,
    replacement: `${VENDOR_BASE}/misc/piexif.min.js`
  },
  {
    pattern: /https:\/\/cdn\.jsdelivr\.net\/npm\/piexifjs@1\.0\.6\/piexif\.min\.js/g,
    replacement: `${VENDOR_BASE}/misc/piexif.min.js`
  },

  // GitHub Markdown CSS
  {
    pattern: /https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/github-markdown-css\/5\.5\.1\/github-markdown-light\.min\.css/g,
    replacement: `${VENDOR_BASE}/misc/github-markdown-light.min.css`
  },

  // js-beautify
  {
    pattern: /https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/js-beautify\/1\.14\.9\/beautify\.min\.js/g,
    replacement: `${VENDOR_BASE}/misc/beautify.min.js`
  },
  {
    pattern: /https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/js-beautify\/1\.14\.9\/beautify-html\.min\.js/g,
    replacement: `${VENDOR_BASE}/misc/beautify-html.min.js`
  },
  {
    pattern: /https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/js-beautify\/1\.14\.9\/beautify-css\.min\.js/g,
    replacement: `${VENDOR_BASE}/misc/beautify-css.min.js`
  },

  // UTIF and UPNG
  {
    pattern: /https:\/\/cdn\.jsdelivr\.net\/npm\/utif@3\.1\.0\/UTIF\.min\.js/g,
    replacement: `${VENDOR_BASE}/misc/UTIF.min.js`
  },
  {
    pattern: /https:\/\/cdn\.jsdelivr\.net\/npm\/upng-js@2\.1\.0\/UPNG\.min\.js/g,
    replacement: `${VENDOR_BASE}/misc/UPNG.min.js`
  },

  // Alpine.js (from unpkg)
  {
    pattern: /https:\/\/unpkg\.com\/alpinejs(@[\d.]+)?\/dist\/cdn\.min\.js/g,
    replacement: `${VENDOR_BASE}/misc/alpine.min.js`
  },
  {
    pattern: /<script src="https:\/\/unpkg\.com\/alpinejs"([^>]*)><\/script>/g,
    replacement: `<script src="${VENDOR_BASE}/misc/alpine.min.js"$1></script>`
  },

  // heic2any (from unpkg)
  {
    pattern: /https:\/\/unpkg\.com\/heic2any@[\d.]+\/dist\/heic2any\.min\.js/g,
    replacement: `${VENDOR_BASE}/misc/heic2any.min.js`
  },

  // gif.js from unpkg
  {
    pattern: /https:\/\/unpkg\.com\/gif\.js@[\d.]+\/dist\/gif\.js/g,
    replacement: `${VENDOR_BASE}/gif/gif.min.js`
  },
  {
    pattern: /https:\/\/unpkg\.com\/gif\.js@[\d.]+\/dist\/gif\.worker\.js/g,
    replacement: `${VENDOR_BASE}/gif/gif.worker.js`
  },

  // gif.js worker in workerScript property (JS files)
  {
    pattern: /workerScript:\s*['"]https:\/\/cdn\.jsdelivr\.net\/npm\/gif\.js@[\d.]+\/dist\/gif\.worker\.js['"]/g,
    replacement: `workerScript: '${VENDOR_BASE}/gif/gif.worker.js'`
  },
  {
    pattern: /workerScript:\s*['"]https:\/\/unpkg\.com\/gif\.js@[\d.]+\/dist\/gif\.worker\.js['"]/g,
    replacement: `workerScript: '${VENDOR_BASE}/gif/gif.worker.js'`
  },
  {
    pattern: /workerScript:\s*['"]https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/gif\.js\/[\d.]+\/gif\.worker\.js['"]/g,
    replacement: `workerScript: '${VENDOR_BASE}/gif/gif.worker.js'`
  },
];

function walkFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip node_modules and dist
      if (entry.name === 'node_modules' || entry.name === 'dist') continue;
      results.push(...walkFiles(fullPath));
    } else if (entry.name.endsWith('.html') || entry.name.endsWith('.js')) {
      results.push(fullPath);
    }
  }
  return results;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  for (const { pattern, replacement } of replacements) {
    if (pattern.test(content)) {
      content = content.replace(pattern, replacement);
      modified = true;
      // Reset regex lastIndex for global patterns
      pattern.lastIndex = 0;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  return false;
}

// Main
console.log('Scanning for HTML files...');
const htmlFiles = walkFiles(TOOLS_DIR);
console.log(`Found ${htmlFiles.length} HTML files`);

let modifiedCount = 0;
for (const file of htmlFiles) {
  if (processFile(file)) {
    console.log(`Modified: ${path.relative(TOOLS_DIR, file)}`);
    modifiedCount++;
  }
}

console.log(`\nDone! Modified ${modifiedCount} files.`);
