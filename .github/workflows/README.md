# GitHub Actions Workflows

## 檔案說明

| 檔案 | 用途 |
|------|------|
| `deploy-prod.yml` | 主要部署流程 |
| `submodule-sync.yml` | 自動同步 submodule 更新（每小時檢查） |

## 觸發方式

### 1. Push to main
直接推送到 main 分支會自動部署。

### 2. 手動觸發
在 GitHub Actions 頁面點擊 "Run workflow"。

### 3. Submodule 自動同步
`submodule-sync.yml` 每小時檢查所有 submodule 是否有更新。若有更新，自動觸發部署。

---

## 安全設計

### 使用 GITHUB_TOKEN（不需要 PAT）

本專案使用 GitHub 內建的 `GITHUB_TOKEN`，而非 Personal Access Token (PAT)：

- 無需手動維護 token 過期問題
- 遵循 GitHub 官方建議的最佳實踐
- 公開 repo 不需要額外的 token 權限

```yaml
# deploy-prod.yml
permissions:
  contents: write
  actions: read
```

---

## 所需 Secrets

| Secret | 說明 |
|--------|------|
| `WEB_SERVER_HOST` | 伺服器 IP 或網域 |
| `WEB_SERVER_USER` | SSH 使用者名稱 |
| `WEB_SERVER_SSH_KEY` | SSH 私鑰 |

> **注意**：不再需要 `GH_PAT`

---

## Submodule 通知機制（可選）

若希望 submodule 更新時立即觸發部署（而非等待每小時檢查），可在 submodule 中設定 `notify-parent.yml`：

```yaml
name: Notify Parent Repo

on:
  push:
    branches: [main, dev]

jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger parent repo workflow
        uses: peter-evans/repository-dispatch@v3
        with:
          token: ${{ secrets.GH_PAT }}  # 這需要 PAT
          repository: stephen-taipei/stephen.taipei
          event-type: submodule-updated
```

> **注意**：使用 `repository-dispatch` 跨 repo 觸發需要 PAT。若不想維護 PAT，可依賴每小時的自動檢查機制。

---

## Nginx 設定

```nginx
server {
    listen 80;
    listen 443 ssl http2;
    server_name stephen.taipei;

    # SSL 設定...

    root /var/www/stephen.taipei/current;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 快取靜態資源
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## 目錄結構

```
/var/www/stephen.taipei/
├── current -> releases/abc123...  # 指向當前版本
├── releases/
│   ├── abc123.../                 # 版本 1
│   ├── def456.../                 # 版本 2
│   └── ...                        # 保留最近 5 個版本
└── .previous_release              # 上一版本（用於 rollback）
```
