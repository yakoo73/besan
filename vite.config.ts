import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {defineConfig, loadEnv} from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    root: '.',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
  };
});
