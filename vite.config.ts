import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',

  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        pj: 'pj.html',
        privacidade: 'privacidade.html',
      }
    }
  }
});