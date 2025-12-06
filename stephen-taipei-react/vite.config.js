import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
