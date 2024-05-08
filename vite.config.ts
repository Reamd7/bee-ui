/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import typescript from '@rollup/plugin-typescript';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import typescriptL from 'typescript';
import { readFileSync } from 'fs';

function resolve(str: string) {
  return path.resolve(__dirname, str);
}

const packageJson = JSON.parse(
  readFileSync('./package.json', { encoding: 'utf-8' })
);
const globals = {
  ...(packageJson?.dependencies || {}),
  ...(packageJson?.devDependencies || {})
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    typescript({
      target: 'es6',
      rootDir: resolve('src/'),
      declaration: true,
      declarationDir: resolve('typing'),
      exclude: resolve('node_modules/**'),
      allowSyntheticDefaultImports: true,
      typescript: typescriptL,
      tsconfig: resolve('tsconfig.build.json')
    }),
    vanillaExtractPlugin({
      // configuration
      identifiers: function ({ filePath, hash, debugId, packageName }) {
        console.log({
          filePath,
          hash,
          debugId,
          packageName,
          arguments
        });
        if (packageName?.startsWith('@bee-ui/')) {
          if (debugId) {
            return debugId;
          }
        }
        return `${filePath}_${hash}`;
      },
      unstable_mode: 'emitCss'
    })
  ],
  build: {
    // 输出文件夹
    outDir: './',
    lib: {
      // 组件库源码的入口文件
      entry: {
        index: resolve('src/index.tsx')
      },
      // 组件库名称
      name: 'Demo',
      // 打包格式
      formats: ['es', 'cjs'],
      fileName: function (format, name) {
        const dir = (() => {
          if (name === 'index') {
            return '';
          }
          return `${name}/`;
        })();
        const ext = (() => {
          if (format === 'es') {
            return 'js';
          }
          return `mjs`;
        })();
        return `${format}/${dir}${name}.${ext}`;
      }
    },
    rollupOptions: {
      //排除不相关的依赖
      external: [
        'react',
        'react/jsx-runtime',
        'jsx-runtime',
        'react-dom',
        ...Object.keys(globals)
      ]
      // output: {
      //   preserveModules: false,
      // },
    }
  }
});
