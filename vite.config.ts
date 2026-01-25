import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://localhost:3002',
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  },
  build: {
    // 代码分割优化
    rollupOptions: {
      output: {
        manualChunks: {
          // 核心框架库
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // 动画库
          motion: ['framer-motion'],
          // Markdown 渲染相关
          markdown: ['react-markdown', 'remark-gfm', 'rehype-highlight', 'highlight.js'],
        }
      }
    },
    // 启用 CSS 代码分割
    cssCodeSplit: true,
    // 资源文件名哈希
    assetsInlineLimit: 4096,
  }
});
