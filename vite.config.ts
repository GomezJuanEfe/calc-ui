import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/calc-ui/', // Set the base path
  server: {
    host: '0.0.0.0', // Use 0.0.0.0 for universal access
  },
  build: {
    outDir: 'dist',
  },

})
