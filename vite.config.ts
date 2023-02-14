import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      // { find: '@common', replacement: path.resolve(__dirname, './src/common') },
      { find: '@main', replacement: path.resolve(__dirname, './src/pages/MainPage') },
      { find: '@redux_', replacement: path.resolve(__dirname, './src/redux') },
      { find: '@hooks', replacement: path.resolve(__dirname, './src/hooks.ts') }
    ]
  },
  plugins: [react()]
});
