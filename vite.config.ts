import { defineConfig } from 'vite';

import sassGlobImports from 'vite-plugin-sass-glob-import';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

export default defineConfig({
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
  plugins: [react(), sassGlobImports()],
});
