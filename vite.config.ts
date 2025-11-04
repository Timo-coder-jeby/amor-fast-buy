import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: './',
  server: {
    host: process.env.HOST || '0.0.0.0',
    proxy: {
      '/api': {
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
        target: 'http://192.168.100.39:8081',
        // target: 'http://172.31.9.192:16070',
        // target: 'http://172.31.9.192:16070',
      },
    }
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@service": path.resolve(__dirname, "./src/service/index"),
      "@types": path.resolve(__dirname, "./src/types/index"),
      "@apis": path.resolve(__dirname, "./src/service/apis/*"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  build: {
    outDir: 'docs',
  },
}));