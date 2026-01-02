import puppeteer from 'puppeteer';
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://stephen.taipei/open-source';

// 從命令列參數獲取主題 ID
const topicId = process.argv[2];

// 8 個主題配置
const topics = {
  'ai-local-tools': {
    path: 'ai-local-tools',
    name: 'AI 本地工具'
  },
  'chrome-extensions': {
    path: 'chrome-extensions',
    name: 'Chrome 擴充功能'
  },
  'free-games': {
    path: 'free-games',
    name: '免費遊戲'
  },
  'mini-tools': {
    path: 'mini-tools',
    name: '迷你工具'
  },
  'tailwind-templates': {
    path: 'tailwind-templates',
    name: 'Tailwind UI 模板'
  },
  'wasm-tools': {
    path: 'wasm-tools',
    name: 'WebAssembly 工具'
  },
  'web-toys': {
    path: 'web-toys',
    name: '網頁玩具'
  },
  'web-workers-examples': {
    path: 'web-workers-examples',
    name: 'Web Workers 範例'
  },
};

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function captureScreenshot(page, topicPath, itemId, outputPath) {
  try {
    const url = `${BASE_URL}/${topicPath}/${itemId}`;
    console.log(`正在訪問: ${url}`);

    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 60000
    });

    await delay(2000);

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

async function getTopicItems(page, topicPath) {
  console.log(`正在獲取項目列表...`);
  await page.goto(`${BASE_URL}/${topicPath}`, {
    waitUntil: 'networkidle2',
    timeout: 60000
  });
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
    if (loadMoreClicks % 5 === 0) {
      console.log(`已點擊"顯示更多" ${loadMoreClicks} 次`);
    }
    await delay(1500);
  }

  console.log(`總共點擊了 ${loadMoreClicks} 次"顯示更多"按鈕\n`);

  // 獲取所有項目鏈接
  const items = await page.evaluate((topicPath) => {
    const links = Array.from(document.querySelectorAll(`a[href*="/${topicPath}/"]`));
    return links.map(link => {
      const href = link.getAttribute('href');
      const match = href.match(new RegExp(`/${topicPath}/(.+)$`));
      return match ? match[1] : null;
    }).filter(Boolean);
  }, topicPath);

  console.log(`找到 ${items.length} 個項目\n`);
  return items;
}

async function main() {
  if (!topicId || !topics[topicId]) {
    console.error('請提供有效的主題 ID');
    console.log('\n可用的主題:');
    Object.keys(topics).forEach(id => {
      console.log(`  - ${id}: ${topics[id].name}`);
    });
    console.log('\n用法: node screenshot-single-topic.js <主題ID>');
    console.log('例如: node screenshot-single-topic.js ai-local-tools');
    process.exit(1);
  }

  const topic = topics[topicId];
  console.log('========================================');
  console.log(`開始截圖: ${topic.name}`);
  console.log('========================================\n');

  const outputDir = path.join(__dirname, 'public/screenshots', topicId);
  await fs.mkdir(outputDir, { recursive: true });

  // 檢查已存在的截圖
  const existingFiles = await fs.readdir(outputDir).catch(() => []);
  const existingIds = new Set(existingFiles.map(f => f.replace('.webp', '')));
  console.log(`已存在 ${existingIds.size} 個截圖，將跳過這些項目\n`);

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu'
    ]
  });

  let page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  // 獲取項目列表
  const items = await getTopicItems(page, topic.path);

  if (items.length === 0) {
    console.log(`⚠ 未找到任何項目`);
    await browser.close();
    return;
  }

  // 過濾出需要截圖的項目
  const itemsToCapture = items.filter(itemId => !existingIds.has(itemId));
  const skippedCount = items.length - itemsToCapture.length;

  console.log(`總項目: ${items.length}`);
  console.log(`需要截圖: ${itemsToCapture.length}\n`);

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < itemsToCapture.length; i++) {
    const itemId = itemsToCapture[i];
    const outputPath = path.join(outputDir, `${itemId}.webp`);

    const success = await captureScreenshot(page, topic.path, itemId, outputPath);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }

    // 每 50 個項目重啟頁面以釋放記憶體
    if ((i + 1) % 50 === 0) {
      console.log('\n重啟頁面以釋放記憶體...');
      await page.close();
      page = await browser.newPage();
      await page.setViewport({ width: 1920, height: 1080 });
    }

    if ((i + 1) % 10 === 0) {
      console.log(`\n進度: ${i + 1 + skippedCount}/${items.length} (成功: ${successCount}, 失敗: ${failCount}, 已跳過: ${skippedCount})\n`);
    }

    await delay(800);
  }

  await page.close();
  await browser.close();

  console.log('\n========================================');
  console.log(`=== ${topic.name} 完成 ===`);
  console.log('========================================');
  console.log(`成功: ${successCount}`);
  console.log(`失敗: ${failCount}`);
  console.log(`已跳過: ${skippedCount}`);
  console.log(`總計: ${successCount + failCount + skippedCount}`);
}

main().catch(console.error);
