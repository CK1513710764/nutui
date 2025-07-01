import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // dts 插件会自动分析你的TS代码并生成 .d.ts 文件
    dts({
      insertTypesEntry: true,
    }),
  ],
  // **核心：构建配置**
  build: {
    // **库模式配置**
    lib: {
      // 库的入口文件。确保你有一个 `src/index.tsx` 文件，
      // 从中导出了所有你想公开的组件。
      entry: path.resolve(__dirname, "src/index.tsx"),

      // UMD构建模式下，暴露的全局变量名
      name: "YourLibraryName", // 例如：NutUI

      // 构建后输出的文件名
      fileName: (format) => `nutui.${format}.js`,
    },
    // **Rollup 配置**
    rollupOptions: {
      // **关键：将 React 和 ReactDOM 设为外部依赖**
      // 这样它们就不会被打包进你的库里
      external: ["react", "react-dom"],

      output: {
        // 为 UMD 构建模式提供全局变量名
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
