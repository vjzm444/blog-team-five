import { defineConfig, loadEnv } from 'vite';
import compression from 'vite-plugin-compression';
import react from '@vitejs/plugin-react';
import path from 'path';

// const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL;
// const env = loadEnv(mode, process.cwd())
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react(), compression()],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    server: {
      proxy: {
        '/api': {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
});
