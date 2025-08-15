// 从 'vite' 中导入 defineConfig，以获得类型提示和智能补全
import { defineConfig } from "vite";

// 导入 Vite 的官方 React 插件
import react from "@vitejs/plugin-react-swc";

// 导入 Node.js 的 'path' 模块，用于处理文件路径，确保跨平台兼容性
import path from "path";

import dts from "vite-plugin-dts";

// 使用 defineConfig 包裹你的配置对象
export default defineConfig({
  // -------------------------------------------------------------------
  // 插件配置 (Plugins)
  // -------------------------------------------------------------------
  // 在这里列出所有需要使用的 Vite 插件。
  // 对于我们的场景，只需要 React 插件即可。
  plugins: [
    react(),
    // 注意：我们已经移除了 vite-plugin-dts，因为我们将手动生成类型。
    dts({
      tsconfigPath: "./tsconfig.dts.json",
    }),
  ],

  // -------------------------------------------------------------------
  // 构建配置 (Build Options)
  // -------------------------------------------------------------------
  // 这部分是打包组件库的核心配置。
  build: {
    // 关键！告诉 Vite 在构建时不要清空输出目录 (dist)。
    // 因为我们的 build:css 和 build:types 步骤会先往 dist 目录里写入文件。
    // 如果 Vite 清空了它，我们先生成的 style.css 和 .d.ts 文件就会被删除。
    emptyOutDir: false,

    // **核心：库模式 (Library Mode) 配置**
    lib: {
      // 指定库的入口文件。这是打包的起点。
      // 我们使用 path.resolve 来获取绝对路径，避免路径问题。
      entry: path.resolve(__dirname, "src/index.tsx"),

      // 在 UMD (Universal Module Definition) 构建模式下，
      // 你的库在浏览器中通过 <script> 标签引入时，会暴露一个全局变量。
      // 这个 name 就是那个全局变量的名字。
      name: "NutUI",

      // 定义打包后输出的文件名模板。
      // Vite 会根据 format (如 'es', 'umd') 自动生成不同的文件名。
      fileName: "nutui",
    },

    // **Rollup 底层打包配置**
    // Vite 底层使用 Rollup 进行打包，我们可以通过这里对 Rollup 进行更精细的控制。
    rollupOptions: {
      // **关键！将 React 和 ReactDOM 设为外部依赖 (external)。**
      // 这会告诉 Rollup：“在打包时，如果遇到 import React from 'react'，
      // 不要把整个 React 库的代码打包进来，而是在最终的文件里保留这条 import 语句。”
      // 这是因为使用你的库的人，他们的项目里已经安装了 React。
      external: ["react", "react-dom"],

      // 输出配置
      output: {
        exports: "named",
        // 在 UMD 构建模式下，需要为外部化的依赖提供一个全局变量名。
        // 这会告诉浏览器：“当代码需要 React 时，请去全局变量 window.React 中寻找。”
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
