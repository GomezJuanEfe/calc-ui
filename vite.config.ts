import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "https://gomezjuanefe.github.io/calc-ui/"
  },
  preview: {
    host: true
  }
})
