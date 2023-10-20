import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/calc-ui/', // Set the base path
  server: {
    host: 'https://gomezjuanefe.github.io/',
  },
  build: {
    outDir: 'dist',
  },

})
