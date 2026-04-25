import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

/** Config légère (Storybook / usage local) — pas de build bundle, pas d’index barrel. */
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "src/styles/sfc-scss-prelude.scss" as *;
        `,
      },
    },
  },
});
