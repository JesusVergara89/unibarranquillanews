import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import envCompatible from 'vite-plugin-env-compatible';
import million from "million/compiler";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    million.vite({ auto: true }),
    react(),
    envCompatible({
      filename: '.env',
    })
  ],
  css: {
    modules: true,
  },
})
