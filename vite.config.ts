// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      // --- ‼️ 核心修正点在这里 ---
      // 明确指定 dts 插件应该使用的 tsconfig 文件路径
      // 这可以防止它错误地读取到 tsconfig.node.json
      tsconfigPath: "./tsconfig.app.json",

      // 其他配置保持不变
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  build: {
    // ... lib 和 rollupOptions 部分保持不变 ...
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "NutUI",
      fileName: (format) => `nutui.${format}.js`,
    },
    rollupOptions: {
      // ...
    },
  },
});
