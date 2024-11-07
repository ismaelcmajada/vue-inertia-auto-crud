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
      entry: "./src/index.js",
      name: "VueInertiaAutoCrud",
      fileName: (format) => `vue-inertia-auto-crud.${format}.js`,
    },
    rollupOptions: {
      external: [
        "vue",
        "vuetify",
        "@inertiajs/inertia",
        "@inertiajs/inertia-vue3",
        "vuetify/styles",
      ],
      output: {
        globals: {
          vue: "Vue",
          vuetify: "Vuetify",
          "@inertiajs/inertia": "Inertia",
          "@inertiajs/inertia-vue3": "InertiaVue3",
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
