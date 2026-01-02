#!/usr/bin/env node

import puppeteer from 'puppeteer';
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://stephen.taipei/open-source';

// 7 個主題配置（實際項目數：4,544）
const TOPICS = [
  { id: 'tailwind-templates', path: 'tailwind-templates', name: 'Tailwind UI' }, // 1043
  { id: 'ai-local-tools', path: 'ai-local-tools', name: 'AI Tools' }, // 728
  { id: 'chrome-extensions', path: 'chrome-extensions', name: 'Chrome Extensions' }, // 469
  { id: 'free-games', path: 'free-games', name: 'Free Games' }, // 510
  { id: 'mini-tools', path: 'mini-tools', name: 'Mini Tools' }, // 828
  { id: 'wasm-tools', path: 'wasm-tools', name: 'WASM Tools' }, // 341
  { id: 'web-toys', path: 'web-toys', name: 'Web Toys' }, // 625
  // web-workers-examples: 0 項（已跳過）
];

const STATS = {
  total: 0,
  success: 0,
  failed: 0,
  skipped: 0,
  notFound: 0, // 工具不存在的頁面
  startTime: Date.now()
};

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getExistingScreenshots(outputDir) {
  try {
    const files = await fs.readdir(outputDir);
    return new Set(files.filter(f => f.endsWith('.webp')).map(f => f.replace('.webp', '')));
  } catch {
    return new Set();
  }
}

async function captureScreenshot(page, topicPath, itemId, outputPath) {
  try {
    const url = `${BASE_URL}/${topicPath}/${itemId}`;

    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    await delay(2000);

    // 檢查頁面是否顯示錯誤訊息
    const pageInfo = await page.evaluate(() => {
      const iframe = document.querySelector('iframe');

      // 檢查是否有錯誤訊息（頁面不存在）
      const bodyText = document.body.innerText;
      const hasError = bodyText.includes('不存在');

      if (iframe) {
        const rect = iframe.getBoundingClientRect();
        return {
          hasIframe: true,
          hasError: hasError,
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height
        };
      }
      return { hasIframe: false, hasError: hasError };
    });

    // 如果頁面顯示錯誤，跳過不截圖
    if (pageInfo.hasError) {
      STATS.notFound++;
      return false;
    }

    if (pageInfo.hasIframe) {
      const screenshot = await page.screenshot({
        type: 'png',
        clip: {
          x: pageInfo.x,
          y: pageInfo.y,
          width: Math.min(pageInfo.width, 1200),
          height: Math.min(pageInfo.height, 800)
        }
      });

      await sharp(screenshot).webp({ quality: 85 }).toFile(outputPath);
      STATS.success++;
      return true;
    } else {
      STATS.failed++;
      return false;
    }
  } catch (error) {
    STATS.failed++;
    if (!error.message.includes('timeout')) {
      console.error(`✗ ${itemId}: ${error.message}`);
    }
    return false;
  }
}

async function getTopicItems(page, topicPath) {
  await page.goto(`${BASE_URL}/${topicPath}`, { waitUntil: 'networkidle2', timeout: 60000 });
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

  // 獲取所有項目
  const items = await page.evaluate((topicPath) => {
    const links = Array.from(document.querySelectorAll(`a[href*="/${topicPath}/"]`));
    return links.map(link => {
      const href = link.getAttribute('href');
      const match = href.match(new RegExp(`/${topicPath}/(.+)$`));
      return match ? match[1] : null;
    }).filter(Boolean);
  }, topicPath);

  return [...new Set(items)]; // 去重
}

async function processTopic(browser, topic) {
  console.log(`\n${'='.repeat(50)}`);
  console.log(`${topic.name} (${topic.id})`);
  console.log('='.repeat(50));

  const outputDir = path.join(__dirname, 'public/screenshots', topic.id);
  await fs.mkdir(outputDir, { recursive: true });

  const existing = await getExistingScreenshots(outputDir);
  console.log(`已存在: ${existing.size} 個截圖`);

  let page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  // 獲取項目列表
  const items = await getTopicItems(page, topic.path);
  console.log(`找到: ${items.length} 個項目`);

  const toCapture = items.filter(id => !existing.has(id));
  console.log(`需要抓取: ${toCapture.length} 個\n`);

  STATS.total += items.length;
  STATS.skipped += existing.size;

  let processed = 0;
  for (const itemId of toCapture) {
    const outputPath = path.join(outputDir, `${itemId}.webp`);
    await captureScreenshot(page, topic.path, itemId, outputPath);

    processed++;
    if (processed % 50 === 0) {
      // 每 50 個項目重啟頁面釋放記憶體
      await page.close();
      page = await browser.newPage();
      await page.setViewport({ width: 1920, height: 1080 });
    }

    if (processed % 10 === 0) {
      const done = existing.size + processed;
      console.log(`進度: ${done}/${items.length} (${Math.round(done/items.length*100)}%)`);
    }

    await delay(800);
  }

  await page.close();

  const final = existing.size + toCapture.filter((_, i) => i < processed).length;
  console.log(`✓ 完成: ${final}/${items.length}`);
}

async function printStats() {
  const elapsed = Math.round((Date.now() - STATS.startTime) / 1000);
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;

  console.log(`\n${'='.repeat(50)}`);
  console.log('總計統計');
  console.log('='.repeat(50));
  console.log(`總項目: ${STATS.total}`);
  console.log(`成功截圖: ${STATS.success}`);
  console.log(`工具不存在: ${STATS.notFound} (已自動跳過)`);
  console.log(`載入失敗: ${STATS.failed}`);
  console.log(`已存在跳過: ${STATS.skipped}`);
  console.log(`用時: ${mins}分${secs}秒`);
  if (STATS.success > 0) {
    const avgTime = Math.round(elapsed / STATS.success);
    console.log(`平均速度: ${avgTime}秒/張`);
  }
  console.log('='.repeat(50));
}

async function main() {
  console.log('開始截圖所有主題...\n');

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu'
    ]
  });

  try {
    for (const topic of TOPICS) {
      try {
        await processTopic(browser, topic);
      } catch (error) {
        console.error(`\n✗ ${topic.name} 處理失敗: ${error.message}`);
      }
    }
  } finally {
    await browser.close();
    await printStats();
  }
}

main().catch(console.error);
