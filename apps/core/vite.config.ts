import react from '@vitejs/plugin-react';
// import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // visualizer({ template: 'network', emitFile: true, filename: 'stats.html' }),
  ],
  build: {
    emptyOutDir: true,
    outDir: path.resolve('../clients/html/dist/core'),
    rollupOptions: {
      input: {
        main: path.resolve('./src/main.tsx'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
});
