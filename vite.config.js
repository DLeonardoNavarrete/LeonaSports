import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { es } from 'zod/locales'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    cssMinify: 'esbuild',
  },
})
