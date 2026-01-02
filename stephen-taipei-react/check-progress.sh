#!/bin/bash

# 檢查所有主題的截圖進度
# 用法: ./check-progress.sh          # 顯示一次
#      ./check-progress.sh -w        # 持續監控（每 10 秒更新）
#      ./check-progress.sh -w 5      # 持續監控（每 5 秒更新）

WATCH_MODE=false
INTERVAL=10

# 解析參數
if [ "$1" = "-w" ] || [ "$1" = "--watch" ]; then
  WATCH_MODE=true
  if [ -n "$2" ]; then
    INTERVAL=$2
  fi
fi

# 實際項目數量（2026-01-02 更新）
TOPICS=(
  "tailwind-templates:1043"
  "ai-local-tools:728"
  "chrome-extensions:469"
  "free-games:510"
  "mini-tools:828"
  "wasm-tools:341"
  "web-toys:625"
  "web-workers-examples:0"
)

# 總計：4,544 項
# 如需重新獲取：node get-actual-counts.js

show_progress() {
  # 清屏（僅在持續監控模式）
  if [ "$WATCH_MODE" = true ]; then
    clear
  fi

  echo "========================================="
  echo "截圖進度報告"
  if [ "$WATCH_MODE" = true ]; then
    echo "持續監控中... (Ctrl+C 退出，每 ${INTERVAL} 秒更新)"
  fi
  echo "========================================="
  echo "更新時間: $(date '+%Y-%m-%d %H:%M:%S')"
  echo ""

  TOTAL_EXPECTED=0
  TOTAL_COMPLETED=0

  for topic_info in "${TOPICS[@]}"; do
    IFS=':' read -r topic expected <<< "$topic_info"

    dir="public/screenshots/$topic"
    if [ -d "$dir" ]; then
      count=$(ls "$dir" 2>/dev/null | wc -l | tr -d ' ')
    else
      count=0
    fi

    if [ $expected -eq 0 ]; then
      percentage="N/A"
    else
      percentage=$(awk "BEGIN {printf \"%.1f\", ($count/$expected)*100}")
    fi

    # 添加進度條
    bar_length=20
    if [ $expected -eq 0 ]; then
      bar=$(printf '%*s' "$bar_length" | tr ' ' '░')
      printf "%-25s %4d/%4d [%s] %5s\n" "$topic" "$count" "$expected" "$bar" "$percentage"
    else
      filled=$(awk "BEGIN {printf \"%.0f\", ($count/$expected)*$bar_length}")
      bar=$(printf '%*s' "$filled" | tr ' ' '█')
      empty=$(printf '%*s' "$((bar_length - filled))" | tr ' ' '░')
      printf "%-25s %4d/%4d [%s%s] %5s%%\n" "$topic" "$count" "$expected" "$bar" "$empty" "$percentage"
    fi

    TOTAL_EXPECTED=$((TOTAL_EXPECTED + expected))
    TOTAL_COMPLETED=$((TOTAL_COMPLETED + count))
  done

  echo ""
  echo "-----------------------------------------"
  TOTAL_PERCENTAGE=$(awk "BEGIN {printf \"%.1f\", ($TOTAL_COMPLETED/$TOTAL_EXPECTED)*100}")

  # 總計進度條
  bar_length=20
  filled=$(awk "BEGIN {printf \"%.0f\", ($TOTAL_COMPLETED/$TOTAL_EXPECTED)*$bar_length}")
  bar=$(printf '%*s' "$filled" | tr ' ' '█')
  empty=$(printf '%*s' "$((bar_length - filled))" | tr ' ' '░')

  printf "%-25s %4d/%4d [%s%s] %5s%%\n" "總計" "$TOTAL_COMPLETED" "$TOTAL_EXPECTED" "$bar" "$empty" "$TOTAL_PERCENTAGE"

  # 預估剩餘時間（如果有進度）
  if [ $TOTAL_COMPLETED -gt 0 ]; then
    remaining=$((TOTAL_EXPECTED - TOTAL_COMPLETED))
    echo ""
    echo "剩餘項目: $remaining"

    # 如果能讀取日誌，計算速度
    if [ -f "screenshot.log" ]; then
      recent_success=$(tail -100 screenshot.log 2>/dev/null | grep -c "✓" || echo 0)
      if [ $recent_success -gt 0 ]; then
        echo "最近成功: $recent_success (最近 100 行日誌)"
      fi
    fi
  fi

  echo "========================================="
}

# 主循環
if [ "$WATCH_MODE" = true ]; then
  # 持續監控模式
  while true; do
    show_progress
    sleep $INTERVAL
  done
else
  # 單次顯示
  show_progress
fi
