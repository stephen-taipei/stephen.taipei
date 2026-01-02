# 截圖自動化腳本使用說明

## 快速開始

### 推薦方式：背景執行 + 即時監控

**終端 1 - 執行截圖：**
```bash
nohup node screenshot-all.js > screenshot.log 2>&1 &
```

**終端 2 - 即時監控進度：**
```bash
./check-progress.sh -w
```

### 其他方式

#### 方法 1: 前景執行（推薦測試用）
```bash
node screenshot-all.js
```

#### 方法 2: 使用啟動腳本
```bash
./run-screenshot.sh
```

## 查看進度

### 即時查看日誌（背景執行時）
```bash
tail -f screenshot.log
```

### 查看截圖數量
```bash
./check-progress.sh
```

### 檢查進程是否運行
```bash
ps aux | grep screenshot-all
```

## 停止執行

```bash
pkill -f "node screenshot-all.js"
```

## 重要特性

✅ **自動跳過已存在的截圖** - 可以隨時中斷並重新執行
✅ **智能錯誤檢測** - 自動識別並跳過「不存在」的頁面
✅ **記憶體優化** - 每 50 個項目自動釋放記憶體
✅ **錯誤處理** - 失敗項目不影響後續處理
✅ **進度顯示** - 每 10 個項目顯示一次進度

## 預估時間

- **單個主題**: 30 分鐘 - 2 小時（視項目數量）
- **所有 7 個主題**: 約 10-15 小時（實際 4,544 項）
- **速度**: 約 2-5 秒/項（含失敗重試）
- **當前進度**: 32.8% (1489/4544)
- **預估剩餘**: 約 8-10 小時

## 輸出位置

```
public/screenshots/
├── tailwind-templates/
├── ai-local-tools/
├── chrome-extensions/
├── free-games/
├── mini-tools/
├── wasm-tools/
├── web-toys/
└── web-workers-examples/
```

## 常見問題

### Q: 可以中斷後繼續嗎？
A: 可以！腳本會自動跳過已存在的截圖。

### Q: 如何只處理特定主題？
A: 編輯 `screenshot-all.js`，修改 `TOPICS` 陣列，註解掉不需要的主題。

### Q: 記憶體不足怎麼辦？
A: 腳本已優化，每 50 個項目自動釋放記憶體。如果還是有問題，可以減少批次大小。

### Q: 某些項目一直失敗？
A: 正常現象，某些頁面可能加載較慢。腳本會記錄失敗數量，可以稍後重試。

### Q: 會截取「不存在」的錯誤頁面嗎？
A: 不會！腳本會自動檢測「不存在」文字，並跳過這些頁面。詳見 `docs/error-detection.md`。

### Q: 如何測試錯誤檢測功能？
A: 執行 `node test-error-detection.js` 可以測試腳本是否正確識別錯誤頁面。

## 監控建議

建議每 1-2 小時檢查一次：
```bash
# 查看進度
./check-progress.sh

# 查看最新日誌（背景執行時）
tail -20 screenshot.log

# 確認進程還在運行
ps aux | grep screenshot-all
```
