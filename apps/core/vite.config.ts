import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import { viteExternalsPlugin } from 'vite-plugin-externals';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteExternalsPlugin(
      {
        react: 'React',
        'react-dom/client': 'ReactDOM',

        '@yaywind/components': 'components',
      },
      {
        disableInServe: true,
      },
    ),
    visualizer({ template: 'network', emitFile: true, filename: 'stats.html' }),
  ],
  build: {
    emptyOutDir: true,
    outDir: path.resolve('../../clients/main/html/dist/core'),
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
