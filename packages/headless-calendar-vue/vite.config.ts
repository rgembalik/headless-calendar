import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "HeadlessCalendar",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "moment", "loadsh"],
      output: {
        globals: {
          // react: "React",
          // "react-dom": "ReactDOM",
        },
      },
    },
  },
});
