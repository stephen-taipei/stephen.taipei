# GitHub Actions Workflows

## 檔案說明

| 檔案 | 用途 |
|------|------|
| `deploy-prod.yml` | 主要部署流程 |
| `submodule-sync.yml` | 自動同步 submodule 更新 |

## 觸發方式

### 1. Push to main
直接推送到 main 分支會自動部署。

### 2. 手動觸發
在 GitHub Actions 頁面點擊 "Run workflow"。

### 3. Submodule 更新自動觸發
每小時檢查一次，或由 submodule 主動通知。

---

## 設定 Submodule 自動通知 Parent

在每個 submodule 專案中新增以下 workflow：

### `.github/workflows/notify-parent.yml`

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
          token: ${{ secrets.GH_PAT }}
          repository: stephen-taipei/stephen.taipei
          event-type: submodule-updated
          client-payload: '{"submodule": "${{ github.repository }}", "ref": "${{ github.ref }}", "sha": "${{ github.sha }}"}'
```

### 需要的 Secret
在每個 submodule repo 設定：
- `GH_PAT`: GitHub Personal Access Token（需要 `repo` 權限）

---

## 所需 Secrets（Parent Repo）

| Secret | 說明 |
|--------|------|
| `GH_PAT` | GitHub Personal Access Token（需要 `repo` 權限，用於 checkout submodules 和接收 dispatch） |
| `WEB_SERVER_HOST` | 伺服器 IP 或網域 |
| `WEB_SERVER_USER` | SSH 使用者名稱 |
| `WEB_SERVER_SSH_KEY` | SSH 私鑰 |

---

## 建立 GitHub PAT

1. 前往 GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 點擊 "Generate new token (classic)"
3. 勾選權限：
   - `repo` (Full control of private repositories)
   - `workflow` (Update GitHub Action workflows)
4. 複製 token 並加到 repo secrets

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
