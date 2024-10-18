import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
