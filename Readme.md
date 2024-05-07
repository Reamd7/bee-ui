- vite playground & bundle-less build tool
- [x] eslint
- [x] typescript
- [x] husky
- [x] lint-stage

- [x] commit lint
- [x] npmrc
- [x] nvmrc
- [x] jest / swc/jest
- [x] editorconfig
- [x] prettier
- [x] biome

https://github.com/victor-lillo/react-vite-component-template

目录结构：
- 组件本身不需要 monorepo 化
- 甚至因为引入了 storybook 组件的文档也不需要monorepo 化

.github
.husky
.vscode
.storybook
config
  - vite.config.build.json
  - tsconfig.build.json
components
  - ComponentName (组件命名规范是 CamelCase)
    - __test__
    - __stories__
    - style
      - variable.css.ts (css 变量定义)
      - variant
        - xxx.variant.css.ts
    - type
    - headless
  - locale
  - util
  - hooks
  - style (全局样式文件)
    - global.variable.css.ts
    - 
scripts (npm script)
tests (组件测试用到的公共函数)
template
.editorconfig
.gitignore
.npmrc
.nvmrc
.prettierignore
.prettierrc.js
biome.json
commitlint.config.cjs
package.json
plopfile.json
pnpm-lock.yaml
readme.md
tsconfig.node.json (swc)
tsconfig.json
vite.config.ts
jest.config.js