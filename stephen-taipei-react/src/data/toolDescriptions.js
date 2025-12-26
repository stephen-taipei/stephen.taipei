// Tool Description Generator
// Generates descriptions for tools based on their names and categories

// Custom descriptions for specific tools (can be expanded)
const customDescriptions = {
  // Text tools
  'CaseConverter': { en: 'Convert text between uppercase, lowercase, title case, and more', tw: '轉換文字大小寫格式' },
  'WordCounter': { en: 'Count words, characters, sentences, and paragraphs', tw: '計算字數、字元、句子和段落' },
  'TextDiff': { en: 'Compare two texts and highlight differences', tw: '比較兩段文字並標示差異' },
  'LoremGenerator': { en: 'Generate placeholder Lorem Ipsum text', tw: '產生 Lorem Ipsum 佔位文字' },
  'MarkdownPreview': { en: 'Preview Markdown with live rendering', tw: '即時預覽 Markdown 文件' },
  'JsonFormatter': { en: 'Format and beautify JSON data', tw: '格式化和美化 JSON 資料' },
  'Base64Encoder': { en: 'Encode and decode Base64 strings', tw: 'Base64 編碼解碼工具' },
  'UrlEncoder': { en: 'Encode and decode URLs', tw: 'URL 編碼解碼工具' },
  'HashGenerator': { en: 'Generate MD5, SHA-1, SHA-256 hashes', tw: '產生 MD5、SHA-1、SHA-256 雜湊值' },
  'QrCodeGenerator': { en: 'Generate QR codes from text or URLs', tw: '從文字或網址產生 QR Code' },
  'ColorPicker': { en: 'Pick and convert colors between formats', tw: '選取並轉換顏色格式' },
  'RegexTester': { en: 'Test and debug regular expressions', tw: '測試和除錯正規表達式' },
  'UuidGenerator': { en: 'Generate random UUIDs', tw: '產生隨機 UUID' },
  'TimestampConverter': { en: 'Convert between Unix timestamps and dates', tw: '轉換 Unix 時間戳與日期' },
};

// Category-based description templates
const categoryTemplates = {
  'ai-local-tools': {
    en: (name) => `AI-powered ${name.toLowerCase()} running locally in your browser`,
    tw: (name) => `在瀏覽器本地運行的 AI ${name}`
  },
  'web-toys': {
    en: (name) => `Interactive ${name.toLowerCase()} experiment`,
    tw: (name) => `互動式 ${name} 實驗`
  },
  'tailwind-templates': {
    en: (name) => `Beautiful ${name.toLowerCase()} Tailwind CSS component`,
    tw: (name) => `精美的 ${name} Tailwind 元件`
  },
  'chrome-extensions': {
    en: (name) => `Chrome extension for ${name.toLowerCase()}`,
    tw: (name) => `${name} Chrome 擴充套件`
  },
  'free-games': {
    en: (name) => `Play ${name.toLowerCase()} in your browser`,
    tw: (name) => `在瀏覽器中玩 ${name}`
  },
  'mini-tools': {
    en: (name) => `Quick ${name.toLowerCase()} utility tool`,
    tw: (name) => `快速 ${name} 工具`
  },
  'wasm-tools': {
    en: (name) => `High-performance ${name.toLowerCase()} powered by WebAssembly`,
    tw: (name) => `由 WebAssembly 驅動的高效能 ${name}`
  },
  'web-workers': {
    en: (name) => `${name} demo using Web Workers`,
    tw: (name) => `使用 Web Workers 的 ${name} 展示`
  }
};

// Generate description based on tool name patterns
function generateFromName(name, language = 'en') {
  const lowerName = name.toLowerCase();

  // Pattern matching for common tool types
  if (lowerName.includes('converter')) {
    return language === 'en' ? 'Convert between different formats' : '不同格式之間的轉換';
  }
  if (lowerName.includes('generator')) {
    return language === 'en' ? 'Generate content or data' : '產生內容或資料';
  }
  if (lowerName.includes('viewer')) {
    return language === 'en' ? 'View and preview content' : '查看和預覽內容';
  }
  if (lowerName.includes('editor')) {
    return language === 'en' ? 'Edit and modify content' : '編輯和修改內容';
  }
  if (lowerName.includes('calculator') || lowerName.includes('calc')) {
    return language === 'en' ? 'Calculate values and metrics' : '計算數值和指標';
  }
  if (lowerName.includes('formatter') || lowerName.includes('beautif')) {
    return language === 'en' ? 'Format and beautify content' : '格式化和美化內容';
  }
  if (lowerName.includes('encoder') || lowerName.includes('decoder')) {
    return language === 'en' ? 'Encode and decode data' : '編碼和解碼資料';
  }
  if (lowerName.includes('validator') || lowerName.includes('checker')) {
    return language === 'en' ? 'Validate and check content' : '驗證和檢查內容';
  }
  if (lowerName.includes('picker') || lowerName.includes('selector')) {
    return language === 'en' ? 'Pick and select options' : '選取和選擇選項';
  }
  if (lowerName.includes('counter')) {
    return language === 'en' ? 'Count and measure content' : '計算和測量內容';
  }
  if (lowerName.includes('preview')) {
    return language === 'en' ? 'Preview content in real-time' : '即時預覽內容';
  }
  if (lowerName.includes('tester') || lowerName.includes('test')) {
    return language === 'en' ? 'Test and debug functionality' : '測試和除錯功能';
  }
  if (lowerName.includes('minifier') || lowerName.includes('compressor')) {
    return language === 'en' ? 'Minify and compress content' : '壓縮和縮小內容';
  }

  // Default description
  return language === 'en' ? 'Interactive utility tool' : '互動式工具';
}

/**
 * Get description for a tool
 * @param {Object} tool - Tool object with slug, name, nameTw
 * @param {string} categoryId - Category ID
 * @param {string} language - Language code (en, zh-TW, zh-CN, zh-HK)
 * @returns {string} Tool description
 */
export function getToolDescription(tool, categoryId, language = 'en') {
  const isChinese = language === 'zh-TW' || language === 'zh-CN' || language === 'zh-HK';
  const langKey = isChinese ? 'tw' : 'en';

  // Check for custom description first
  if (customDescriptions[tool.slug]) {
    return customDescriptions[tool.slug][langKey];
  }

  // Try category template
  const template = categoryTemplates[categoryId];
  if (template) {
    const name = isChinese ? (tool.nameTw || tool.name) : tool.name;
    return template[langKey](name);
  }

  // Fall back to pattern-based generation
  return generateFromName(tool.name, langKey);
}

export default { getToolDescription, customDescriptions };
