// https://vitejs.dev/config/

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 配置 svg 图标
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
  css: {
    preprocessorOptions: {
      // 配置 scss 全局变量
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "./src/styles/variable.scss";'
      }
    }
  }
})
