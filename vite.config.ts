import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/my-app/', // <--- add your repo name here
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], 
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
