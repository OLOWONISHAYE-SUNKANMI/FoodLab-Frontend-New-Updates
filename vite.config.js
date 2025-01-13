import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'], // Splitting common libraries into a separate chunk
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase chunk size warning limit to 1000 KB
  },
});
