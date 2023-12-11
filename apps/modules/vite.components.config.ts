import react from '@vitejs/plugin-react';
// import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';
import { defineConfig } from 'vite';
import { viteExternalsPlugin } from 'vite-plugin-externals';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteExternalsPlugin({
      react: 'React',
      'react-dom': 'ReactDOM',
    }),
    // visualizer({ template: 'network', emitFile: true, filename: 'stats.html' }),
  ],
  build: {
    emptyOutDir: true,
    outDir: path.resolve('../../clients/main/html/dist/components'),
    rollupOptions: {
      input: {
        components: path.resolve('./src/components.ts'),
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
});
