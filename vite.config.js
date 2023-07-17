import { defineConfig } from 'vite'
import pluginRewriteAll from 'vite-plugin-rewrite-all';

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),pluginRewriteAll()],
})
