// .releaserc.js

module.exports = {
  branches: ['main'], // 在哪个分支上发布
  plugins: [
    '@semantic-release/commit-analyzer', // 分析 commit message
    '@semantic-release/release-notes-generator', // 生成 release notes
    [
      '@semantic-release/git', // Git 插件
      {
        assets: ['package.json', 'package-lock.json'], // 将这些文件也加入到 release commit 中
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github', // GitHub 插件，用于创建 Release
    '@semantic-release/npm', // npm 插件，用于发布到 npm
  ],
};
