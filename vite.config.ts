import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import type { InlineConfig } from 'vitest';
import type { UserConfig } from 'vite';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './config/test/setUpTest.js',
  },
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@api', replacement: '/src/api' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@common', replacement: '/src/common' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@stores', replacement: '/src/stores' },
      { find: '@components', replacement: '/src/components' },
      { find: '@utils', replacement: '/src/utils' },
      { find: '@hooks', replacement: '/src/hooks' },
    ],
  },
} as VitestConfigExport);
