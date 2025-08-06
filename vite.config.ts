import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
        globalVars: {
          "@primary-color": "#1890ff"
        }
      }
    }
  },
  server: {
    port: 8090,
    open: true
  }
})
