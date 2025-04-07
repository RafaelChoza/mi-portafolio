import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const isProduction = process.env.NODE_ENV === 'production';
const base = isProduction ? '/mi-portafolio/' : '/';

export default defineConfig({
  base,
  plugins: [react()],
});