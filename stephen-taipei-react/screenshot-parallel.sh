#!/bin/bash

# 並行執行多個主題的截圖
# 用法: ./screenshot-parallel.sh

echo "========================================="
echo "並行截圖腳本"
echo "========================================="
echo ""

# 要處理的主題列表（從最小的開始以便快速看到結果）
TOPICS=(
  "web-workers-examples"
  "mini-tools"
  "free-games"
  "ai-local-tools"
  "web-toys"
  "chrome-extensions"
  "wasm-tools"
)

# 不包括 tailwind-templates，因為它已經在運行

echo "將開始處理以下主題:"
for topic in "${TOPICS[@]}"; do
  echo "  - $topic"
done
echo ""

# 創建日誌目錄
mkdir -p screenshot-logs

# 為每個主題啟動一個背景進程
PIDS=()
for topic in "${TOPICS[@]}"; do
  log_file="screenshot-logs/${topic}.log"
  echo "正在啟動 $topic..."

  node screenshot-single-topic.js "$topic" > "$log_file" 2>&1 &
  pid=$!
  PIDS+=($pid)

  echo "  PID: $pid, 日誌: $log_file"

  # 延遲 10 秒再啟動下一個，避免同時啟動太多瀏覽器實例
  sleep 10
done

echo ""
echo "========================================="
echo "所有截圖進程已啟動"
echo "========================================="
echo ""
echo "進程 PIDs: ${PIDS[@]}"
echo ""
echo "要監控進度，請執行:"
echo "  ./check-progress.sh"
echo ""
echo "要查看特定主題的日誌:"
echo "  tail -f screenshot-logs/<主題>.log"
echo ""
echo "要停止所有進程:"
echo "  kill ${PIDS[@]}"
echo ""
