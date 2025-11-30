# stephen.taipei 個人形象網站開發計劃

## 項目概述

- **目標**：打造科幻未來感的個人形象網站，展示資深全端工程師的專業實力與獨特背景
- **域名**：stephen.taipei
- **主題**：未來世界科幻風格 + 科技人專業形象 (融合街舞與程式的律動感)
- **內容**：個人簡介、技能展示、作品集、聯絡方式

---

## 視覺設計方案

### 色彩方案

| 類型 | 顏色 |
|------|------|
| 主色 | 深空藍 `#0a1128` / 霓虹青 `#00d9ff` |
| 輔色 | 深紫 `#2d1b69` / 霓虹粉 `#ff006e` |
| 中性色 | 淡灰 `#f5f5f5` / 深灰 `#1a1a1a` |

### 設計特色

- 網格背景動畫 (Grid Background Animation)
- 粒子效果 (Particle System) - 象徵數據流動
- 全息卡片 (Holographic Cards)
- Glassmorphism 玻璃態效果
- 3D 視差滾動 (Parallax Scrolling)
- Neon 霓虹燈文字效果
- 動態邊框與光影效果

---

## 技術架構

### 前端技術棧

| 項目 | 技術選型 |
|------|----------|
| 框架 | **Angular 21** (Signal / Computed / Effect、OnPush、Zoneless) |
| 樣式 | TailwindCSS + SCSS |
| 動畫 | GSAP、Three.js、Motion One |
| 狀態管理 | NgRx / Akita (Signal Store) |
| 架構 | Nx Monorepo (模組化設計) |

### 後端技術棧

| 項目 | 技術選型 |
|------|----------|
| 框架 | Laravel 10 + Swoole (Octane) |
| 資料庫 | MySQL (讀寫分離) + Redis (快取) |
| 用途 | 聯絡表單、簡歷下載追蹤、API 服務 |

### 部署方案

- **靜態站點**：Vercel / Netlify (推薦)
- **完整棧**：GCP / Vultr + Docker (CI/CD 自動化部署)

---

## 頁面結構

### 1. 首頁 (Hero Section)

```
┌─────────────────────────────────┐
│  背景：科幻網格 + 粒子動畫      │
│                                 │
│  標題：莊宗憲 (Stephen)         │
│  副標：資深全端工程師 / 架構師   │
│  CTA：探索作品 / 聯絡我         │
│                                 │
│  動畫：文字打字效果、光標閃爍    │
└─────────────────────────────────┘
```

### 2. 關於我 (About Section)

- **個人簡介**：
    > 資深全端工程師，擁有 AI 平台、電商、金融及教育應用的跨領域開發經驗。擅長架構設計與團隊領導，致力於打造高性能系統。
    > 從設計轉身投入資訊管理，再到全端開發，這段旅程讓我具備獨特的產品思維。
    > 工作之餘，我曾創辦街舞教室，並獲得全國冠軍及世界八強的殊榮，這份經歷鍛鍊了我面對挑戰時的專注與毅力。
- **核心優勢卡片**：跨領域開發、架構創新、性能優化、團隊領導。
- **職涯亮點時間軸**。

### 3. 技能展示 (Skills Section)

- **前端**：Angular 21 (Signal, Zoneless), Vue, jQuery
- **後端**：Laravel 10 (Octane/Swoole), WebSocket
- **資料庫**：MySQL, Redis
- **DevOps**：Docker, GitLab CI/CD, GCP, Ubuntu, Nginx
- **AI 工具**：Cursor AI, Claude, Codex, OpenAI API
- **交互式技能樹**：可點擊展開詳情。

### 4. 工作經歷 (Experience Section)

- **勝和科技有限公司** (2024/1 - 至今) | *Senior Engineer*
    - 導入 Nx Monorepo 架構，整合多專案與模組共享。
    - 升級 Angular 21，全面採用 Signal/Zoneless 架構。
    - 性能優化：代碼精簡 (1000行→200行)，提升開發效率。
    - 帶領 2-4 人前端團隊，建立技術分享文化。
- **向尚設計有限公司** (2014/1 - 2023/11) | *Full-stack Engineer*
    - 開發直銷電商平台 (Angular PWA + Laravel)，會員數 0 -> 20,000。
    - 實作 Redis 快取，減少 70% 資料庫查詢。
    - 建立電子合約平台與個人化推薦演算法。
- **馨琳揚企管顧問有限公司** (2013/1 - 2014/1) | *Engineer*
    - 開發內部行政管理系統與法拍資訊系統。

### 5. 作品集 (Portfolio Section)

- **項目卡片** (重點展示技術棧與成就)

| 項目名稱 | 描述 | 技術棧 | 成就 |
|----------|------|--------|------|
| **Copila** | AI 客製化功能平台 (對話/繪圖/圖表) | Angular PWA, Laravel Octane, WebSocket, OpenAI | Lighthouse 滿分表現 |
| **米寶鏢局** | OMO 電商購物車系統 | Angular PWA, Laravel | 1年內累積 20,000 會員 |
| **StocX** | 股市盤感訓練系統 | Vue, Laravel | 共享主機支援 500+ 同時在線 |
| **皮紋檢測系統** | 手指皮紋檢測平台 | jQuery, Laravel | 自動化報表生成 |

### 6. 認可與成就 (Achievements Section)

- **商業成長**：協助客戶 12 個月內會員數突破 20,000，MAU > 85%。
- **性能提升**：Redis 快取減少 70% DB 查詢；代碼重構減少 80% 體積。
- **特殊榮譽**：街舞全國冠軍 / 世界八強。

### 7. 聯絡方式 (Contact Section)

- 聯絡表單
- 社交媒體連結 (GitHub, LinkedIn)
- 郵件連結
- QR Code 快速聯絡

---

## 動畫與交互方案

### 全局動畫

- [ ] 背景網格漸進式動畫
- [ ] 粒子系統隨滑動變化
- [ ] 視差滾動效果
- [ ] 頁面過渡動畫

### 組件級動畫

- [ ] 卡片懸停：浮起 + 發光
- [ ] 文字入場：打字 / 淡入
- [ ] 計數器動畫 (數字遞增)
- [ ] 進度條填充動畫

---

## 項目文件結構

```
stephen-taipei/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── hero/
│   │   │   ├── about/
│   │   │   ├── skills/
│   │   │   ├── experience/
│   │   │   ├── portfolio/
│   │   │   ├── achievements/
│   │   │   ├── contact/
│   │   │   └── shared/
│   │   ├── services/
│   │   ├── models/
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── styles/
│   ├── assets/
│   └── main.ts
├── public/
├── angular.json
├── tsconfig.json
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 開發階段

### 第一階段：環境與基礎設置

- [ ] 初始化 **Angular 21** 項目
- [ ] 配置 TailwindCSS + SCSS
- [ ] 安裝依賴庫 (GSAP, Three.js, Motion One)
- [ ] 配置 Nx Monorepo (可選，視規模而定)

### 第二階段：設計系統與組件庫

- [ ] 創建全局主題變量
- [ ] 開發基礎組件 (Button, Card, Input)
- [ ] 設計 Navbar 與 Footer

### 第三階段：核心頁面開發

- [ ] 開發 Hero Section (背景動畫優先)
- [ ] 開發 About Section (整合街舞與職涯故事)
- [ ] 開發 Skills Section (交互式展示)
- [ ] 開發 Experience Section (時間軸)
- [ ] 開發 Portfolio Section (卡片網格)

### 第四階段：進階功能

- [ ] Achievements Section
- [ ] Contact Form + Email 服務
- [ ] SEO 優化

### 第五階段：性能優化與測試

- [ ] Lighthouse 性能檢測
- [ ] Zoneless 架構確認
- [ ] 圖片優化

### 第六階段：部署與上線

- [ ] 配置域名 DNS (stephen.taipei)
- [ ] 部署到 Vercel / Netlify

---

## 核心依賴庫

```json
{
  "dependencies": {
    "@angular/animations": "^21.0.0",
    "@angular/common": "^21.0.0",
    "@angular/compiler": "^21.0.0",
    "@angular/core": "^21.0.0",
    "@angular/forms": "^21.0.0",
    "@angular/platform-browser": "^21.0.0",
    "@angular/platform-browser-dynamic": "^21.0.0",
    "@angular/router": "^21.0.0",
    "gsap": "^3.12.0",
    "three": "^0.160.0",
    "motion": "^10.0.0",
    "rxjs": "^7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "^0.15.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^21.0.0",
    "@angular/cli": "^21.0.0",
    "@angular/compiler-cli": "^21.0.0",
    "typescript": "~5.7.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

---

## SEO 與 Meta 信息

```html
<title>莊宗憲 (Stephen) | 資深全端工程師作品集</title>
<meta name="description" content="資深全端工程師 Stephen，專注於 Angular 21、Laravel、Nx 架構與系統優化。曾任街舞冠軍，具備獨特產品思維與團隊領導能力。">
<meta name="keywords" content="全端工程師, Angular 21, Laravel, 作品集, Stephen, 莊宗憲, 街舞, Nx Monorepo">
<meta property="og:title" content="莊宗憲 | 資深全端工程師">
<meta property="og:description" content="探索 Stephen 的作品與技術實力 - 從街舞冠軍到全端架構師的旅程">
```

---

## 快速啟動指令

```bash
# 1. 創建項目 (Angular 21)
ng new stephen-taipei --style=scss --routing=true

# 2. 進入項目目錄
cd stephen-taipei

# 3. 安裝動畫與 3D 依賴
npm install gsap three motion

# 4. 配置 TailwindCSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 5. 啟動開發伺服器
ng serve
```