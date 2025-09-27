import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 5173,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        assetFileNames: 'Assets/[name]-[hash][extname]',
        chunkFileNames: 'Assets/[name]-[hash].js',
        entryFileNames: 'Assets/[name]-[hash].js'
      }
    }
  }
})