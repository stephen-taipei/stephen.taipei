#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const SCREENSHOTS_DIR = path.join(__dirname, 'public/screenshots');

const themes = [
  { id: 'tailwind-templates', dir: 'tailwind-templates' },
  { id: 'ai-local-tools', dir: 'ai-local-tools' },
  { id: 'chrome-extensions', dir: 'chrome-extensions' },
  { id: 'free-games', dir: 'free-games' },
  { id: 'mini-tools', dir: 'mini-tools' },
  { id: 'wasm-tools', dir: 'wasm-tools' },
  { id: 'web-toys', dir: 'web-toys' },
  { id: 'web-workers-examples', dir: 'web-workers-examples' },
];

const result = {};

for (const theme of themes) {
  const themePath = path.join(SCREENSHOTS_DIR, theme.dir);

  if (!fs.existsSync(themePath)) {
    result[theme.id] = [];
    continue;
  }

  const files = fs.readdirSync(themePath)
    .filter(f => f.endsWith('.webp'))
    .sort()
    .map(f => `/screenshots/${theme.dir}/${f}`);

  result[theme.id] = files;
  console.log(`${theme.id}: ${files.length} screenshots`);
}

// 保存為 JSON
const outputPath = path.join(__dirname, 'src/data/screenshots.json');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));

console.log(`\n✓ 已生成截圖清單: ${outputPath}`);
console.log(`總計: ${Object.values(result).reduce((sum, arr) => sum + arr.length, 0)} 張截圖`);
