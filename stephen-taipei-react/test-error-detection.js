#!/usr/bin/env node

// 測試錯誤頁面檢測功能
// 用法: node test-error-detection.js

import puppeteer from 'puppeteer';

const TEST_URLS = [
  'https://stephen.taipei/open-source/ai-local-tools/620-area-chart', // 不存在的
  'https://stephen.taipei/open-source/tailwind-templates/card-001', // 存在的
];

async function testUrl(page, url) {
  console.log(`\n測試: ${url}`);

  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    await new Promise(r => setTimeout(r, 2000));

    const pageInfo = await page.evaluate(() => {
      const iframe = document.querySelector('iframe');
      const bodyText = document.body.innerText;

      const hasError = bodyText.includes('不存在');

      return {
        hasIframe: !!iframe,
        hasError: hasError,
        bodyPreview: bodyText.substring(0, 200)
      };
    });

    console.log(`  - 有 iframe: ${pageInfo.hasIframe ? '✓' : '✗'}`);
    console.log(`  - 有錯誤訊息: ${pageInfo.hasError ? '✓ (會跳過)' : '✗ (會截圖)'}`);
    console.log(`  - 頁面內容預覽: ${pageInfo.bodyPreview.substring(0, 50)}...`);

    if (pageInfo.hasError) {
      console.log('  ➜ 結果: 此頁面會被跳過，不會截圖 ✓');
    } else if (pageInfo.hasIframe) {
      console.log('  ➜ 結果: 此頁面會被正常截圖 ✓');
    } else {
      console.log('  ➜ 結果: 沒有 iframe，標記為失敗');
    }
  } catch (error) {
    console.log(`  ✗ 錯誤: ${error.message}`);
  }
}

async function main() {
  console.log('========================================');
  console.log('錯誤頁面檢測測試');
  console.log('========================================');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  for (const url of TEST_URLS) {
    await testUrl(page, url);
  }

  await browser.close();

  console.log('\n========================================');
  console.log('測試完成');
  console.log('========================================');
}

main().catch(console.error);
