#!/usr/bin/env node

// 獲取每個主題的實際項目數量
import puppeteer from 'puppeteer';

const BASE_URL = 'https://stephen.taipei/open-source';
const TOPICS = [
  { id: 'tailwind-templates', path: 'tailwind-templates', name: 'Tailwind UI' },
  { id: 'ai-local-tools', path: 'ai-local-tools', name: 'AI Tools' },
  { id: 'chrome-extensions', path: 'chrome-extensions', name: 'Chrome Extensions' },
  { id: 'free-games', path: 'free-games', name: 'Free Games' },
  { id: 'mini-tools', path: 'mini-tools', name: 'Mini Tools' },
  { id: 'wasm-tools', path: 'wasm-tools', name: 'WASM Tools' },
  { id: 'web-toys', path: 'web-toys', name: 'Web Toys' },
  { id: 'web-workers-examples', path: 'web-workers-examples', name: 'Web Workers' },
];

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getTopicCount(page, topic) {
  try {
    console.log(`正在檢查: ${topic.name}...`);

    await page.goto(`${BASE_URL}/${topic.path}`, {
      waitUntil: 'networkidle2',
      timeout: 60000
    });
    await delay(2000);

    // 點擊所有"顯示更多"
    let clicks = 0;
    while (true) {
      const hasMore = await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const btn = buttons.find(b => b.textContent.includes('顯示更多'));
        if (btn) {
          btn.click();
          return true;
        }
        return false;
      });
      if (!hasMore) break;
      clicks++;
      await delay(1500);
    }

    // 獲取項目數量
    const items = await page.evaluate((topicPath) => {
      const links = Array.from(document.querySelectorAll(`a[href*="/${topicPath}/"]`));
      return links.map(link => {
        const href = link.getAttribute('href');
        const match = href.match(new RegExp(`/${topicPath}/(.+)$`));
        return match ? match[1] : null;
      }).filter(Boolean);
    }, topic.path);

    const count = [...new Set(items)].length;
    console.log(`  ✓ ${topic.name}: ${count} 個項目\n`);
    return count;
  } catch (error) {
    console.log(`  ✗ ${topic.name}: 無法獲取 (${error.message})\n`);
    return 0;
  }
}

async function main() {
  console.log('========================================');
  console.log('獲取實際項目數量');
  console.log('========================================\n');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  const results = [];
  let total = 0;

  for (const topic of TOPICS) {
    const count = await getTopicCount(page, topic);
    results.push({ topic: topic.id, name: topic.name, count });
    total += count;
  }

  await browser.close();

  console.log('\n========================================');
  console.log('實際項目數量統計');
  console.log('========================================\n');

  results.forEach(r => {
    console.log(`${r.name.padEnd(25)} ${r.count}`);
  });

  console.log('\n----------------------------------------');
  console.log(`總計: ${total} 個項目`);
  console.log('========================================\n');

  console.log('更新 check-progress.sh 的配置：\n');
  console.log('TOPICS=(');
  results.forEach(r => {
    console.log(`  "${r.topic}:${r.count}"`);
  });
  console.log(')\n');
}

main().catch(console.error);
