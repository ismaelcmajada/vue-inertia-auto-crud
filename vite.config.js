// vite.config.js
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "YourLibraryName",
      fileName: (format) => `vue-inertia-auto-crud.${format}.js`,
    },
    rollupOptions: {
      // Asegúrate de incluir todas las dependencias externas aquí
      external: ["vue", "vuetify", "@inertiajs/vue3"],
      output: {
        globals: {
          vue: "Vue",
          vuetify: "Vuetify",
          "@inertiajs/vue3": "InertiaVue3",
        },
      },
    },
  },
  resolve: {
    alias: {
      // Si usas aliases en tu código, defínelos aquí
      "@": path.resolve(__dirname, "src"),
    },
  },
})
