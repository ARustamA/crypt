import { defineConfig } from 'vite';
import sassGlobImports from 'vite-plugin-sass-glob-import';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sassGlobImports()],
});
