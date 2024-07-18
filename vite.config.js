import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,  // Facilita a depuração se ocorrerem erros
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
});
