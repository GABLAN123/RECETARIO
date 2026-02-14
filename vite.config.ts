import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // 1. IMPORTANTE: Esto le dice a GitHub que la app está en la carpeta /RECETARIO/
  base: '/RECETARIO/', 
  
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  
  plugins: [react()],

  // 2. SEGURIDAD: Eliminamos las referencias a API_KEY para que no haya cobros
  define: {
    'process.env': {} 
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
