#!/bin/bash

# 截圖執行腳本
# 用法: ./run-screenshot.sh

cd "$(dirname "$0")"

echo "=========================================="
echo "開始執行截圖任務"
echo "=========================================="
echo ""
echo "提示："
echo "- 腳本會自動跳過已存在的截圖"
echo "- 可以隨時中斷 (Ctrl+C)，重新執行時會繼續"
echo "- 預計需要 20-30 小時完成全部 7,793 個截圖"
echo ""
echo "建議在背景執行："
echo "  nohup ./run-screenshot.sh > screenshot.log 2>&1 &"
echo ""
read -p "按 Enter 繼續，或 Ctrl+C 取消..."
echo ""

# 執行截圖
node screenshot-all.js

echo ""
echo "=========================================="
echo "截圖任務完成"
echo "=========================================="
