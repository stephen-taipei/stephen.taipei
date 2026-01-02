import puppeteer from 'puppeteer';
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://stephen.taipei/open-source';

// 從命令列參數獲取主題和失敗項目列表
const topic = process.argv[2] || 'tailwind-templates';
const failedItemsFile = process.argv[3];

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function captureScreenshot(page, topicPath, itemId, outputPath, retryCount = 0) {
  const maxRetries = 3;

  try {
    const url = `${BASE_URL}/${topicPath}/${itemId}`;
    console.log(`正在訪問 (嘗試 ${retryCount + 1}/${maxRetries + 1}): ${url}`);

    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 90000 // 增加到 90 秒
    });

    await delay(3000); // 增加等待時間

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
      return { success: true, itemId };
    } else {
      console.error(`✗ 未找到 iframe (${itemId})`);
      return { success: false, itemId, reason: 'no-iframe' };
    }
  } catch (error) {
    console.error(`✗ 錯誤 (${itemId}):`, error.message);

    // 如果還有重試機會，則重試
    if (retryCount < maxRetries) {
      console.log(`⟳ 將在 5 秒後重試...`);
      await delay(5000);
      return await captureScreenshot(page, topicPath, itemId, outputPath, retryCount + 1);
    }

    return { success: false, itemId, reason: error.message };
  }
}

async function main() {
  console.log('========================================');
  console.log('重試失敗的截圖項目');
  console.log('========================================\n');

  // 如果提供了失敗項目文件，讀取它
  let failedItems = [];
  if (failedItemsFile) {
    const content = await fs.readFile(failedItemsFile, 'utf-8');
    failedItems = content.split('\n').filter(Boolean);
  } else {
    console.error('請提供失敗項目列表文件');
    console.log('用法: node screenshot-retry-failed.js <主題> <失敗項目文件>');
    console.log('例如: node screenshot-retry-failed.js tailwind-templates failed-items.txt');
    process.exit(1);
  }

  console.log(`主題: ${topic}`);
  console.log(`失敗項目數: ${failedItems.length}\n`);

  const outputDir = path.join(__dirname, 'public/screenshots', topic);
  await fs.mkdir(outputDir, { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  const results = {
    success: [],
    failed: []
  };

  for (let i = 0; i < failedItems.length; i++) {
    const itemId = failedItems[i].trim();
    if (!itemId) continue;

    const outputPath = path.join(outputDir, `${itemId}.webp`);

    const result = await captureScreenshot(page, topic, itemId, outputPath);

    if (result.success) {
      results.success.push(itemId);
    } else {
      results.failed.push({ itemId, reason: result.reason });
    }

    if ((i + 1) % 5 === 0) {
      console.log(`\n進度: ${i + 1}/${failedItems.length} (成功: ${results.success.length}, 失敗: ${results.failed.length})\n`);
    }

    await delay(1000);
  }

  await browser.close();

  console.log('\n========================================');
  console.log('=== 重試完成 ===');
  console.log('========================================');
  console.log(`成功: ${results.success.length}`);
  console.log(`失敗: ${results.failed.length}`);

  if (results.failed.length > 0) {
    console.log('\n仍然失敗的項目:');
    results.failed.forEach(({ itemId, reason }) => {
      console.log(`  - ${itemId}: ${reason}`);
    });

    // 保存仍然失敗的項目
    const stillFailedFile = path.join(__dirname, `still-failed-${topic}.txt`);
    await fs.writeFile(
      stillFailedFile,
      results.failed.map(f => f.itemId).join('\n')
    );
    console.log(`\n已將仍然失敗的項目保存到: ${stillFailedFile}`);
  }
}

main().catch(console.error);
