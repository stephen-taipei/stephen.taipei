import puppeteer from 'puppeteer';
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://stephen.taipei/open-source/tailwind-templates';
const OUTPUT_DIR = path.join(__dirname, 'public/screenshots/tailwind-templates');

// 根據頁面上顯示的分類和數量
const categories = [
  { name: '12-cards', count: 50, prefix: 'card' },
  // 可以根據實際情況添加更多分類
];

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function captureScreenshot(page, itemId, outputPath) {
  try {
    const url = `${BASE_URL}/${itemId}`;
    console.log(`正在訪問: ${url}`);

    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 60000
    });

    await delay(2000); // 等待頁面完全渲染

    // 找到 iframe 元素並獲取其位置
    const iframeRect = await page.evaluate(() => {
      const iframe = document.querySelector('iframe');
      if (iframe) {
        const rect = iframe.getBoundingClientRect();
        return {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height
        };
      }
      return null;
    });

    if (iframeRect) {
      // 截取 iframe 區域
      const screenshot = await page.screenshot({
        type: 'png',
        clip: {
          x: iframeRect.x,
          y: iframeRect.y,
          width: Math.min(iframeRect.width, 1200),
          height: Math.min(iframeRect.height, 800)
        }
      });

      // 使用 sharp 轉換為 webp
      await sharp(screenshot)
        .webp({ quality: 85 })
        .toFile(outputPath);

      console.log(`✓ 已保存: ${outputPath}`);
      return true;
    } else {
      console.error(`✗ 未找到 iframe (${itemId})`);
      return false;
    }
  } catch (error) {
    console.error(`✗ 錯誤 (${itemId}):`, error.message);
    return false;
  }
}

async function main() {
  console.log('開始截圖 Tailwind UI 模板...\n');

  // 確保輸出目錄存在
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  // 檢查已存在的截圖
  const existingFiles = await fs.readdir(OUTPUT_DIR).catch(() => []);
  const existingIds = new Set(existingFiles.map(f => f.replace('.webp', '')));
  console.log(`已存在 ${existingIds.size} 個截圖，將跳過這些項目\n`);

  let browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage', // 減少共享記憶體使用
      '--disable-gpu'
    ]
  });

  let page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  let successCount = 0;
  let failCount = 0;
  let skippedCount = existingIds.size;

  // 首先嘗試自動獲取所有項目
  console.log('正在獲取項目列表...');
  await page.goto(BASE_URL, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(2000);

  // 點擊所有"顯示更多"按鈕來加載所有項目
  console.log('正在點擊"顯示更多"按鈕加載所有項目...');
  let loadMoreClicks = 0;
  while (true) {
    const hasMoreButton = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const loadMoreButton = buttons.find(btn => btn.textContent.includes('顯示更多'));
      if (loadMoreButton) {
        loadMoreButton.click();
        return true;
      }
      return false;
    });

    if (!hasMoreButton) {
      break;
    }

    loadMoreClicks++;
    console.log(`已點擊"顯示更多" ${loadMoreClicks} 次`);
    await delay(1500); // 等待內容加載
  }

  console.log(`總共點擊了 ${loadMoreClicks} 次"顯示更多"按鈕\n`);

  // 獲取所有卡片鏈接
  const items = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('a[href*="/tailwind-templates/"]'));
    return links.map(link => {
      const href = link.getAttribute('href');
      const match = href.match(/\/tailwind-templates\/(.+)$/);
      return match ? match[1] : null;
    }).filter(Boolean);
  });

  console.log(`找到 ${items.length} 個項目\n`);

  // 過濾出需要截圖的項目
  const itemsToCapture = items.filter(itemId => !existingIds.has(itemId));
  console.log(`需要截圖的項目: ${itemsToCapture.length} 個\n`);

  if (items.length === 0) {
    console.log('未找到項目，使用預設的編號範圍...');
    // 如果無法自動獲取，使用編號範圍
    for (let i = 1; i <= 1043; i++) {
      const itemId = `card-${String(i).padStart(3, '0')}`;

      // 跳過已存在的檔案
      if (existingIds.has(itemId)) {
        continue;
      }

      const outputPath = path.join(OUTPUT_DIR, `${itemId}.webp`);

      const success = await captureScreenshot(page, itemId, outputPath);
      if (success) {
        successCount++;
      } else {
        failCount++;
      }

      // 每 50 個項目重啟瀏覽器以釋放記憶體
      if ((successCount + failCount) % 50 === 0) {
        console.log('\n重啟瀏覽器以釋放記憶體...');
        await browser.close();
        browser = await puppeteer.launch({
          headless: true,
          args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu'
          ]
        });
        page = await browser.newPage();
        await page.setViewport({ width: 1920, height: 1080 });
      }

      // 每 10 個項目顯示一次進度
      if ((successCount + failCount) % 10 === 0) {
        console.log(`\n進度: ${successCount + failCount + skippedCount}/1043 (成功: ${successCount}, 失敗: ${failCount}, 已跳過: ${skippedCount})\n`);
      }

      // 避免請求過快
      await delay(800);
    }
  } else {
    // 使用獲取到的項目列表
    for (let i = 0; i < itemsToCapture.length; i++) {
      const itemId = itemsToCapture[i];
      const outputPath = path.join(OUTPUT_DIR, `${itemId}.webp`);

      const success = await captureScreenshot(page, itemId, outputPath);
      if (success) {
        successCount++;
      } else {
        failCount++;
      }

      // 每 50 個項目重啟瀏覽器以釋放記憶體
      if ((i + 1) % 50 === 0) {
        console.log('\n重啟瀏覽器以釋放記憶體...');
        await browser.close();
        browser = await puppeteer.launch({
          headless: true,
          args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu'
          ]
        });
        page = await browser.newPage();
        await page.setViewport({ width: 1920, height: 1080 });
      }

      if ((i + 1) % 10 === 0) {
        console.log(`\n進度: ${i + 1 + skippedCount}/${items.length} (成功: ${successCount}, 失敗: ${failCount}, 已跳過: ${skippedCount})\n`);
      }

      await delay(800);
    }
  }

  await browser.close();

  console.log('\n=== 截圖完成 ===');
  console.log(`成功: ${successCount}`);
  console.log(`失敗: ${failCount}`);
  console.log(`已跳過: ${skippedCount}`);
  console.log(`總計: ${successCount + failCount + skippedCount}`);
}

main().catch(console.error);
