import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'OmniDS',
      fileName: 'omni-ds',
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'omni-ds.css';
          }
          return assetInfo.name || '';
        },
      },
    },
  },
});
