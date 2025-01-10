import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@game': '/src/game',
      '@enums': '/src/models/enums.ts',
      '@interfaces': '/src/models/interfaces.ts',
    },
  },
})
