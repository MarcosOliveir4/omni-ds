import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import libcss from 'vite-plugin-libcss';

export default defineConfig({
  plugins: [
    libcss(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*.ts'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: (format) => `omni-components.${format}.js`,
    },
    rollupOptions: {
      external: ['lit', /^lit\/.*/],
      output: {
        globals: {
          lit: 'lit',
          'lit/decorators.js': 'litDecorators',
          'lit/directives/class-map.js': 'litClassMap',
        },
      },
    },
  },
});
