module.exports = {
  // ... 其他配置，比如 parser, plugins ...
  extends: [
    "react-app", // Create React App 的基础配置
    "react-app/jest",
    // ... 其他你可能有的配置，比如 'plugin:storybook/recommended' ...
    "plugin:prettier/recommended", // **将这一行添加到数组的末尾**
  ],
  // ... 其他 rules ...
};
