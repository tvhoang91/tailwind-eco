// import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // visualizer({ template: 'network', emitFile: true, filename: 'stats.html' }),
  ],
  build: {
    emptyOutDir: true,
    outDir: path.resolve('../../clients/main/html/dist/react'),
    rollupOptions: {
      input: {
        react: path.resolve('./src/react.ts'),
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
});
