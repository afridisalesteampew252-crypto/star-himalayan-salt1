import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // You can change the port if you want
    open: true   // Opens browser automatically on a computer
  },
  build: {
    outDir: 'dist', // Standard output for deployment
  }
})

