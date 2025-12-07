#!/usr/bin/env node

/**
 * Script to scan all submodule tools and generate toolsRegistry.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Update all submodules first
console.log('--- Updating submodules ---');
try {
  execSync('git submodule update --remote --merge', {
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit'
  });
  console.log('Submodules updated.\n');
} catch (error) {
  console.error('Failed to update submodules:', error.message);
  // Continue anyway - maybe offline or no updates
}

const TOOLS_DIR = path.join(__dirname, '../src/tools');
const OUTPUT_FILE = path.join(__dirname, '../src/data/toolsRegistry.js');

// Category configurations
const categoryConfigs = {
  'awesome-ai-local-tools-1000': {
    id: 'ai-local-tools',
    name: 'AI Local Tools',
    nameTw: 'AI 本地工具',
    nameZh: 'AI 本地工具',
    description: 'AI-powered tools that run locally in your browser',
    descriptionTw: '在瀏覽器本地運行的 AI 工具',
    icon: 'Sparkles',
    color: 'from-purple-500 to-indigo-600',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    toolsDir: 'tools',
    parseToolDir: (dirname) => {
      const match = dirname.match(/^(\d+)-(.+)$/);
      if (match) {
        return {
          id: match[1],
          slug: dirname,
          name: match[2].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
          nameTw: match[2].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        };
      }
      return null;
    }
  },
  'awesome-web-toys-1000': {
    id: 'web-toys',
    name: 'Web Toys',
    nameTw: '網頁玩具',
    nameZh: '网页玩具',
    description: 'Fun interactive web experiments',
    descriptionTw: '有趣的互動網頁實驗',
    icon: 'Boxes',
    color: 'from-teal-500 to-cyan-600',
    bgColor: 'bg-teal-50',
    textColor: 'text-teal-600',
    toolsDir: 'toys',
    parseToolDir: (dirname) => {
      const match = dirname.match(/^(\d+)-(.+)$/);
      if (match) {
        return {
          id: match[1],
          slug: dirname,
          name: match[2].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
          nameTw: match[2].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        };
      }
      return null;
    }
  },
  'awesome-tailwind-ui-templates-1000': {
    id: 'tailwind-templates',
    name: 'Tailwind Templates',
    nameTw: 'Tailwind 模板',
    nameZh: 'Tailwind 模板',
    description: 'Beautiful Tailwind CSS templates',
    descriptionTw: '精美的 Tailwind CSS 模板',
    icon: 'Palette',
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-600',
    toolsDir: 'templates',
    hasSubCategories: true,
    subCategories: {
      '01-navigation': { name: 'Navigation', nameTw: '導航列' },
      '02-hero-sections': { name: 'Hero Sections', nameTw: '主視覺區塊' },
      '03-features': { name: 'Features', nameTw: '功能區塊' },
      '04-content': { name: 'Content', nameTw: '內容區塊' },
      '05-cta': { name: 'CTA', nameTw: '行動呼籲' },
      '06-pricing': { name: 'Pricing', nameTw: '價格' },
      '07-testimonials': { name: 'Testimonials', nameTw: '推薦' },
      '08-team': { name: 'Team', nameTw: '團隊' },
      '09-gallery': { name: 'Gallery', nameTw: '圖廊' },
      '10-forms': { name: 'Forms', nameTw: '表單' },
      '20-landing-pages': { name: 'Landing Pages', nameTw: '登陸頁面' }
    },
    parseToolFile: (filename, subCategory) => {
      // Match patterns: nav-001.html, hero-001.html, feat-001.html, content-001.html,
      // cta-001.html, price-001.html, test-001.html, team-001.html, gallery-001.html,
      // form-001.html, landing-040.html
      const match = filename.match(/^([a-z-]+)-(\d+)\.html$/);
      if (match) {
        const prefix = match[1];
        const number = match[2];

        const categoryMap = {
          '01-navigation': { prefix: 'nav', name: 'Navigation', nameTw: '導航列' },
          '02-hero-sections': { prefix: 'hero', name: 'Hero Section', nameTw: '主視覺區塊' },
          '03-features': { prefix: 'feat', name: 'Feature', nameTw: '功能區塊' },
          '04-content': { prefix: 'content', name: 'Content', nameTw: '內容區塊' },
          '05-cta': { prefix: 'cta', name: 'CTA', nameTw: '行動呼籲' },
          '06-pricing': { prefix: 'price', name: 'Pricing', nameTw: '價格' },
          '07-testimonials': { prefix: 'test', name: 'Testimonial', nameTw: '推薦' },
          '08-team': { prefix: 'team', name: 'Team', nameTw: '團隊' },
          '09-gallery': { prefix: 'gallery', name: 'Gallery', nameTw: '圖廊' },
          '10-forms': { prefix: 'form', name: 'Form', nameTw: '表單' },
          '20-landing-pages': { prefix: 'landing', name: 'Landing Page', nameTw: '登陸頁面' }
        };

        const category = categoryMap[subCategory];
        if (category && prefix === category.prefix) {
          return {
            id: number,
            slug: filename.replace('.html', ''),
            name: `${category.name} ${number}`,
            nameTw: `${category.nameTw} ${number}`,
            category: subCategory
          };
        }
      }
      return null;
    }
  },
  'awesome-chrome-extensions-1000': {
    id: 'chrome-extensions',
    name: 'Chrome Extensions',
    nameTw: 'Chrome 擴充套件',
    nameZh: 'Chrome 扩展',
    description: 'Useful Chrome browser extensions',
    descriptionTw: '實用的 Chrome 瀏覽器擴充套件',
    icon: 'Puzzle',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    toolsDir: 'extensions',
    hasSubCategories: true,
    subCategories: {
      '01-productivity': { name: 'Productivity', nameTw: '生產力' },
      '10-experimental': { name: 'Experimental', nameTw: '實驗性' }
    },
    parseToolDir: (dirname) => {
      // Match pattern like "001-tab-manager-pro"
      const match = dirname.match(/^(\d+)-(.+)$/);
      if (match) {
        return {
          id: match[1],
          slug: dirname,
          name: match[2].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
          nameTw: match[2].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        };
      }
      return null;
    }
  },
  'awesome-free-games-1000': {
    id: 'free-games',
    name: 'Free Games',
    nameTw: '免費遊戲',
    nameZh: '免费游戏',
    description: 'Free browser-based games',
    descriptionTw: '免費的瀏覽器遊戲',
    icon: 'Gamepad2',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
    toolsDir: 'src/games',
    hasSubCategories: true,
    subCategories: {
      'horror': { name: 'Horror', nameTw: '恐怖' },
      'puzzle': { name: 'Puzzle', nameTw: '益智' }
    },
    parseToolDir: (dirname) => {
      // Match pattern like "game-001-tetris"
      const match = dirname.match(/^game-(\d+)-(.+)$/);
      if (match) {
        return {
          id: match[1],
          slug: dirname,
          name: match[2].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
          nameTw: match[2].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        };
      }
      return null;
    }
  },
  'awesome-free-mini-tools-1000': {
    id: 'mini-tools',
    name: 'Mini Tools',
    nameTw: '迷你工具',
    nameZh: '迷你工具',
    description: 'Lightweight utility tools',
    descriptionTw: '輕量級實用工具',
    icon: 'Wrench',
    color: 'from-orange-500 to-amber-600',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-600',
    toolsDir: 'src/tools',
    hasSubCategories: true,
    subCategories: {
      '01-text': { name: 'Text Tools', nameTw: '文字工具' },
      '25-other': { name: 'Other', nameTw: '其他' }
    },
    parseToolFile: (filename, subCategory) => {
      // Match pattern like "CaseConverter.tsx"
      const match = filename.match(/^([A-Z][a-zA-Z]+)\.tsx$/);
      if (match) {
        // Convert camelCase to readable name
        const name = match[1].replace(/([A-Z])/g, ' $1').trim();
        return {
          id: filename.replace('.tsx', '').toLowerCase(),
          slug: filename.replace('.tsx', ''),
          name: name,
          nameTw: name,
          category: subCategory
        };
      }
      return null;
    }
  },
  'awesome-wasm-tools-1000': {
    id: 'wasm-tools',
    name: 'WASM Tools',
    nameTw: 'WASM 工具',
    nameZh: 'WASM 工具',
    description: 'WebAssembly powered tools',
    descriptionTw: 'WebAssembly 驅動的工具',
    icon: 'Cpu',
    color: 'from-red-500 to-orange-600',
    bgColor: 'bg-red-50',
    textColor: 'text-red-600',
    toolsDir: 'src/tools',
    hasSubCategories: true,
    subCategories: {
      'image': { name: 'Image Processing', nameTw: '圖像處理' },
      'calculation': { name: 'Calculation', nameTw: '計算' }
    },
    parseToolDir: (dirname) => {
      // Match pattern like "IMG-001" or "CAL-002"
      const match = dirname.match(/^(IMG|CAL)-(\d+)$/);
      if (match) {
        const type = match[1] === 'IMG' ? 'Image Tool' : 'Calculator';
        const typeTw = match[1] === 'IMG' ? '圖像工具' : '計算器';
        return {
          id: match[2],
          slug: dirname,
          name: `${type} ${match[2]}`,
          nameTw: `${typeTw} ${match[2]}`,
        };
      }
      return null;
    }
  },
  'awesome-web-workers-examples-1000': {
    id: 'web-workers',
    name: 'Web Workers',
    nameTw: 'Web Workers',
    nameZh: 'Web Workers',
    description: 'Web Worker examples and demos',
    descriptionTw: 'Web Worker 範例與展示',
    icon: 'Zap',
    color: 'from-yellow-500 to-orange-600',
    bgColor: 'bg-yellow-50',
    textColor: 'text-yellow-600',
    toolsDir: 'examples',
    hasSubCategories: true,
    subCategories: {
      '01-computation': { name: 'Computation', nameTw: '運算' },
      '11-scientific-computing': { name: 'Scientific Computing', nameTw: '科學計算' },
      '12-machine-learning': { name: 'Machine Learning', nameTw: '機器學習' }
    },
    parseToolDir: (dirname) => {
      const match = dirname.match(/^(\d+)-(.+)$/);
      if (match) {
        return {
          id: match[1],
          slug: dirname,
          name: match[2].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
          nameTw: match[2].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        };
      }
      return null;
    }
  }
};

function scanTools(submoduleName, config) {
  const tools = [];
  const submodulePath = path.join(TOOLS_DIR, submoduleName, config.toolsDir);

  if (!fs.existsSync(submodulePath)) {
    console.log(`Directory not found: ${submodulePath}`);
    return tools;
  }

  if (config.hasSubCategories) {
    const subCategories = fs.readdirSync(submodulePath).filter(f => {
      const fullPath = path.join(submodulePath, f);
      return fs.statSync(fullPath).isDirectory();
    });

    for (const subCat of subCategories) {
      const subCatPath = path.join(submodulePath, subCat);
      const items = fs.readdirSync(subCatPath);

      for (const item of items) {
        const itemPath = path.join(subCatPath, item);
        const isDir = fs.statSync(itemPath).isDirectory();

        if (isDir && config.parseToolDir) {
          const toolInfo = config.parseToolDir(item);
          if (toolInfo) {
            toolInfo.category = subCat;
            tools.push(toolInfo);
          }
        } else if (!isDir && config.parseToolFile) {
          const toolInfo = config.parseToolFile(item, subCat);
          if (toolInfo) {
            tools.push(toolInfo);
          }
        }
      }
    }
  } else if (config.parseToolDir) {
    const items = fs.readdirSync(submodulePath).filter(f => {
      const fullPath = path.join(submodulePath, f);
      return fs.statSync(fullPath).isDirectory();
    });

    for (const item of items) {
      const toolInfo = config.parseToolDir(item);
      if (toolInfo) {
        tools.push(toolInfo);
      }
    }
  }

  return tools;
}

function generateRegistry() {
  const categories = [];
  const toolsByCategory = {};

  for (const [submoduleName, config] of Object.entries(categoryConfigs)) {
    categories.push({
      id: config.id,
      name: config.name,
      nameTw: config.nameTw,
      nameZh: config.nameZh,
      description: config.description,
      descriptionTw: config.descriptionTw,
      icon: config.icon,
      color: config.color,
      bgColor: config.bgColor,
      textColor: config.textColor,
      path: `/open-source/${config.id}`,
      submodule: submoduleName,
      toolsDir: config.toolsDir,
    });

    if (!config.isReactApp) {
      const tools = scanTools(submoduleName, config);
      toolsByCategory[config.id] = tools;
      console.log(`${submoduleName}: ${tools.length} tools found`);
    }
  }

  // Generate output
  let output = `// Tools Registry - Auto-generated by scripts/generateToolsRegistry.js
// Last updated: ${new Date().toISOString()}

export const categories = ${JSON.stringify(categories, null, 2)};

`;

  // Generate tool arrays for each category
  for (const [categoryId, tools] of Object.entries(toolsByCategory)) {
    const varName = categoryId.replace(/-/g, '_') + '_tools';
    output += `export const ${varName} = ${JSON.stringify(tools, null, 2)};\n\n`;
  }

  // Generate helper functions
  output += `
// Helper function to get category by id
export function getCategoryById(id) {
  return categories.find(cat => cat.id === id);
}

// Helper function to get tools by category id
export function getToolsByCategoryId(categoryId) {
  switch (categoryId) {
${Object.keys(toolsByCategory).map(id =>
  `    case '${id}':\n      return ${id.replace(/-/g, '_')}_tools;`
).join('\n')}
    default:
      return [];
  }
}

// Get tool URL for iframe embedding
export function getToolUrl(categoryId, toolSlug) {
  const category = getCategoryById(categoryId);
  if (!category) return null;

  // Special handling for different category types
  if (categoryId === 'tailwind-templates') {
    // Determine subcategory from slug
    if (toolSlug.startsWith('nav-')) {
      return \`/open-source/\${category.submodule}/\${category.toolsDir}/01-navigation/\${toolSlug}.html\`;
    } else if (toolSlug.startsWith('hero-')) {
      return \`/open-source/\${category.submodule}/\${category.toolsDir}/02-hero-sections/\${toolSlug}.html\`;
    } else if (toolSlug.startsWith('feat-')) {
      return \`/open-source/\${category.submodule}/\${category.toolsDir}/03-features/\${toolSlug}.html\`;
    } else if (toolSlug.startsWith('content-')) {
      return \`/open-source/\${category.submodule}/\${category.toolsDir}/04-content/\${toolSlug}.html\`;
    } else if (toolSlug.startsWith('landing-')) {
      return \`/open-source/\${category.submodule}/\${category.toolsDir}/20-landing-pages/\${toolSlug}.html\`;
    }
  }

  if (categoryId === 'chrome-extensions') {
    const tool = chrome_extensions_tools.find(t => t.slug === toolSlug);
    if (tool) {
      return \`/open-source/\${category.submodule}/\${category.toolsDir}/\${tool.category}/\${toolSlug}/index.html\`;
    }
  }

  if (categoryId === 'free-games') {
    const tool = free_games_tools.find(t => t.slug === toolSlug);
    if (tool) {
      return \`/open-source/\${category.submodule}/\${category.toolsDir}/\${tool.category}/\${toolSlug}/index.html\`;
    }
  }

  if (categoryId === 'wasm-tools') {
    const tool = wasm_tools_tools.find(t => t.slug === toolSlug);
    if (tool) {
      return \`/open-source/\${category.submodule}/\${category.toolsDir}/\${tool.category}/\${toolSlug}/index.html\`;
    }
  }

  if (categoryId === 'web-workers') {
    const tool = web_workers_tools.find(t => t.slug === toolSlug);
    if (tool) {
      return \`/open-source/\${category.submodule}/\${category.toolsDir}/\${tool.category}/\${toolSlug}/index.html\`;
    }
  }

  return \`/open-source/\${category.submodule}/\${category.toolsDir}/\${toolSlug}/index.html\`;
}

// Total tools count
export function getTotalToolsCount() {
  return ${Object.keys(toolsByCategory).map(id => `${id.replace(/-/g, '_')}_tools.length`).join(' + ')};
}
`;

  fs.writeFileSync(OUTPUT_FILE, output);
  console.log(`\nRegistry generated: ${OUTPUT_FILE}`);

  // Print summary
  let total = 0;
  for (const [categoryId, tools] of Object.entries(toolsByCategory)) {
    total += tools.length;
  }
  console.log(`Total tools: ${total}`);
}

generateRegistry();

// Run build and deploy
console.log('\n--- Running npm run build ---');
try {
  execSync('npm run build', {
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit'
  });
  console.log('Build completed successfully!\n');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}

console.log('--- Syncing to stephen.taipei ---');
try {
  const certPath = path.join(process.env.HOME, 'Downloads/website/cert/copila-ssh-key');
  const distPath = path.join(__dirname, '../dist/');
  const remoteHost = 'stephen@64.176.35.245';
  const remotePath = '/var/www/stephen.taipei/';

  const rsyncCmd = `rsync -ahv --delete --exclude=.DS_Store --rsync-path="sudo rsync" -e "ssh -i ${certPath}" --verbose --itemize-changes ${distPath} ${remoteHost}:${remotePath}`;
  execSync(rsyncCmd, { stdio: 'inherit' });

  const chownCmd = `ssh -i ${certPath} ${remoteHost} "sudo chown -R www-data:www-data ${remotePath}"`;
  execSync(chownCmd, { stdio: 'inherit' });

  console.log('\nDeploy completed successfully!');
} catch (error) {
  console.error('Deploy failed:', error.message);
  process.exit(1);
}
