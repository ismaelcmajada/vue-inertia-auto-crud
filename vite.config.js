import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vuetify from "vite-plugin-vuetify"
import path from "path"

export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "VueInertiaAutoCrud",
      fileName: (format) => `vue-inertia-auto-crud.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "vuetify"],
      output: {
        globals: {
          vue: "Vue",
          vuetify: "Vuetify",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
