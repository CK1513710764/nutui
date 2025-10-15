import type { StorybookConfig } from "@storybook/react-webpack5";
const path = require("path");
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-webpack5-compiler-swc", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    // 为 SCSS 文件添加新的 loader 规则
    config.module?.rules?.push({
      test: /\.scss$/i, // 匹配所有 .scss 文件
      use: [
        "style-loader", // 3. 将 JS 字符串注入为 style 标签
        "css-loader", // 2. 将 CSS 转换为 CommonJS 模块
        "sass-loader", // 1. 将 Sass 编译为 CSS
      ],
      include: path.resolve(__dirname, "../"), // 确保处理您项目中的 scss 文件
    });

    // 必须返回修改后的 config
    return config;
  },
};
export default config;
