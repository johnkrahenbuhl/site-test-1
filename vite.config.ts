import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/site-test-1/', // Replace <your-repo-name> with your actual GitHub repository name
})
