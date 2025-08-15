/// <reference types="vite/client" />
// src/vite-env.d.ts

// --- ‼️ 在这里添加对 CSS Modules 的声明 ---
declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.sass" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// --- ‼️ (可选，但推荐) 为普通 CSS/SCSS 导入添加声明 ---
// 这会让 import './style.scss' 这样的语句不再报错
declare module "*.css";
declare module "*.scss";
declare module "*.sass";
