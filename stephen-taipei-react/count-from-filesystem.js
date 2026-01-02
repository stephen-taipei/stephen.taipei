#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPOS_DIR = path.join(__dirname, '../repos');

const configs = [
  { name: 'awesome-tailwind-ui-templates-1000', dirs: ['templates', 'cards', 'forms', 'lists'] },
  { name: 'awesome-ai-local-tools-1000', dirs: ['tools'] },
  { name: 'awesome-chrome-extensions-1000', dirs: ['extensions'] },
  { name: 'awesome-free-games-1000', dirs: ['src/games'] },
  { name: 'awesome-free-mini-tools-1000', dirs: ['src/tools'] },
  { name: 'awesome-wasm-tools-1000', dirs: ['src/tools'] },
  { name: 'awesome-web-toys-1000', dirs: ['toys'] },
  { name: 'awesome-web-workers-examples-1000', dirs: ['examples'] },
];

function countInDir(dir) {
  if (!fs.existsSync(dir)) return 0;

  let count = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory() && !entry.name.startsWith('.')) {
      const fullPath = path.join(dir, entry.name);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        // 檢查是否有 index.html 或其他文件
        const hasContent = fs.readdirSync(fullPath).length > 0;
        if (hasContent) {
          count++;
        }
      }
    }
  }

  return count;
}

function countFilesInDir(dir, pattern) {
  if (!fs.existsSync(dir)) return 0;

  const files = fs.readdirSync(dir);
  return files.filter(f => f.match(pattern)).length;
}

console.log('文件系統掃描結果：');
console.log('='.repeat(50));

let total = 0;

for (const config of configs) {
  const repoPath = path.join(REPOS_DIR, config.name);

  if (!fs.existsSync(repoPath)) {
    console.log(`${config.name}: 目錄不存在`);
    continue;
  }

  let repoTotal = 0;

  for (const dir of config.dirs) {
    const fullDir = path.join(repoPath, dir);

    if (config.name === 'awesome-tailwind-ui-templates-1000') {
      if (dir === 'templates') {
        // 掃描 templates 下的子目錄中的 HTML 文件
        if (fs.existsSync(fullDir)) {
          const subDirs = fs.readdirSync(fullDir).filter(f => {
            const p = path.join(fullDir, f);
            return fs.statSync(p).isDirectory();
          });

          for (const subDir of subDirs) {
            const subPath = path.join(fullDir, subDir);
            const htmlCount = countFilesInDir(subPath, /\.html$/);
            repoTotal += htmlCount;
          }
        }
      } else {
        // cards, forms, lists
        const count = countInDir(fullDir);
        repoTotal += count;
      }
    } else {
      // 其他主題，掃描子目錄
      if (fs.existsSync(fullDir)) {
        const entries = fs.readdirSync(fullDir, { withFileTypes: true });

        for (const entry of entries) {
          if (entry.isDirectory()) {
            const subPath = path.join(fullDir, entry.name);
            const subEntries = fs.readdirSync(subPath, { withFileTypes: true });

            // 計算有 index.html 或內容的目錄
            for (const sub of subEntries) {
              if (sub.isDirectory()) {
                repoTotal++;
              } else if (sub.name === 'index.html') {
                // 已經計入
              }
            }
          }
        }

        // 如果是 mini-tools (tsx 文件)
        if (dir === 'src/tools' && config.name === 'awesome-free-mini-tools-1000') {
          const tsxCount = countFilesInDir(fullDir, /\.tsx$/);
          repoTotal = tsxCount;
        }
      }
    }
  }

  console.log(`${config.name}: ${repoTotal}`);
  total += repoTotal;
}

console.log('='.repeat(50));
console.log(`總計: ${total}`);
