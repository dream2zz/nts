import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    vuetify({ autoImport: true }),
  ],
});
