import { defineConfig } from 'vite';

export default defineConfig({
  base: '/suptecgabriel.github.io/',

  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        pj: 'pj.html'
      }
    }
  }
});