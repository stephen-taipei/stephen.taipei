import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// SPA Route Handler Plugin - Generate index.html for all routes
const spaRoutePlugin = {
  name: 'spa-route-handler',
  apply: 'build',
  enforce: 'post',
  async generateBundle(options, bundle) {
    const indexHtmlContent = bundle['index.html']?.source

    if (!indexHtmlContent) {
      return
    }

    // Routes that need their own index.html for SPA fallback
    const routes = [
      'open-source/index.html',
    ]

    for (const route of routes) {
      const routePath = path.join(options.dir, route)
      const dir = path.dirname(routePath)

      // Create directory if it doesn't exist
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }

      // Write index.html to the route directory
      fs.writeFileSync(routePath, indexHtmlContent, 'utf-8')
    }
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spaRoutePlugin],
  server: {
    // Configure static file serving for submodule tools
    fs: {
      // Allow serving files from src/tools submodules
      allow: ['.', 'src/tools'],
    },
  },
  // Configure public directory to include tools
  publicDir: 'public',
  build: {
    // Ensure proper asset handling
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
})
