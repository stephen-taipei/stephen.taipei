# 開源工具列表改善實作追蹤

## 實作清單

### Phase 1: 快速優化

- [x] **1.1 分頁/載入更多功能** ✅
  - 每個子分類預設顯示 8 個
  - 新增「顯示更多」按鈕
  - 檔案：`src/pages/CategoryPage.jsx`

- [x] **1.2 移除動畫延遲** ✅
  - 只保留前 8 個項目有動畫
  - 避免後面項目延遲過久
  - 檔案：`src/pages/CategoryPage.jsx`

- [x] **1.3 優化卡片資訊層級** ✅
  - 移除重複的中英文名稱
  - 顯示更有意義的資訊
  - 檔案：`src/pages/CategoryPage.jsx`

### Phase 2: 新增描述

- [x] **2.1 擴充工具資料結構** ✅
  - 新增 description / descriptionTw 欄位
  - 檔案：`src/data/toolDescriptions.js` (新建)

- [x] **2.2 批次產生工具描述** ✅
  - 根據工具名稱自動生成描述
  - 檔案：`src/data/toolDescriptions.js`

- [x] **2.3 卡片顯示描述** ✅
  - 在卡片中顯示工具描述
  - 檔案：`src/pages/CategoryPage.jsx`

### Phase 3: 視覺優化

- [x] **3.1 工具圖示系統** ✅
  - 根據工具類型顯示不同圖示
  - 檔案：`src/data/toolIcons.js` (新建)

- [x] **3.2 分類標籤色彩** ✅
  - 不同分類使用不同顏色
  - 檔案：`src/data/toolIcons.js`

### Phase 4: 進階篩選

- [x] **4.1 分類標籤篩選** ✅
  - 新增功能標籤篩選器
  - 檔案：`src/pages/CategoryPage.jsx`

- [x] **4.2 排序選項** ✅
  - 新增排序功能
  - 檔案：`src/pages/CategoryPage.jsx`

---

## 實作紀錄

### 2025-12-26

#### Phase 1 完成 ✅

**1.1 分頁/載入更多功能**
- 新增 `DEFAULT_VISIBLE_COUNT = 8` 常數
- 新增 `expandedCategories` state 追蹤展開狀態
- 新增 `getVisibleCount()` 和 `toggleExpand()` 函數
- Grid/List 視圖都加入 slice 和「顯示更多」按鈕

**1.2 移除動畫延遲**
- 動畫延遲只套用到前 8 個項目
- Grid: `delay: index < 8 ? index * 0.03 : 0`
- List: `delay: index < 8 ? index * 0.02 : 0`

**1.3 優化卡片資訊層級**
- 名稱根據語言顯示：英文顯示 `tool.name`，中文顯示 `tool.nameTw`
- 移除重複的中英文雙行顯示
- 改用 `tool.slug` 作為輔助識別
- 圖示從 Play 改為 ExternalLink

#### Phase 2 完成 ✅

**2.1 擴充工具資料結構**
- 新增 `src/data/toolDescriptions.js` 檔案
- 包含 `customDescriptions` 物件可自訂特定工具描述
- 包含 `categoryTemplates` 根據分類產生描述

**2.2 批次產生工具描述**
- 實作 `generateFromName()` 根據工具名稱模式產生描述
- 支援 converter、generator、viewer、editor 等常見模式
- 支援中英文雙語描述

**2.3 卡片顯示描述**
- Grid 視圖：顯示 2 行描述 (`line-clamp-2`)
- List 視圖：顯示 1 行描述 (`truncate`)
- 卡片高度統一 (`h-full`, `min-h-[2.5rem]`)

#### Phase 3 完成 ✅

**3.1 工具圖示系統**
- 新增 `src/data/toolIcons.js` 檔案
- 根據工具名稱模式匹配圖示 (converter, generator, viewer 等)
- 支援分類預設圖示和子分類特定圖示
- 使用 Lucide React 圖示庫

**3.2 分類標籤色彩**
- 實作 `getSubCategoryColor()` 函數
- 每個子分類有獨特的背景色和文字色
- 支援 20+ 種色彩方案

#### Phase 4 完成 ✅

**4.1 分類標籤篩選**
- 新增 `selectedSubCategories` state
- 顯示可點擊的子分類標籤按鈕
- 支援多選篩選
- 新增「清除篩選」按鈕

**4.2 排序選項**
- 新增 `sortBy` state
- 支援三種排序：預設、名稱、編號
- 排序會根據語言使用對應名稱
- 下拉選單 UI
