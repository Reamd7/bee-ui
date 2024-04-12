import chalk from "chalk";
import { execSync } from "node:child_process";
import fs from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// plopfile.js
export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setActionType("install", function () {
    execSync(`pnpm i`);
  });
  // plop generator code
  // create your generators here
  plop.setGenerator("basics", {
    description: "这是组件创建模版的配置文件",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "请输入组件名称，驼峰式命名",
      },
    ], // array of inquirer prompts
    actions: function (data) {
      const pascalCase = plop.getHelper("pascalCase");
      const dashCase = plop.getHelper("dashCase");
      const dirName = dashCase(data.componentName);
      const componentName = pascalCase(data.componentName);
      const actions = [];

      const targetPath = path.join(__dirname, "./packages", `./${dirName}`);
      if (fs.existsSync(targetPath)) {
        console.log(chalk.red(`!! 组件 ${componentName} 已存在`));
        return actions;
      }
      const templatePath = path.join(__dirname, "./template");
      return [
        {
          type: "addMany",
          base: templatePath,
          destination: targetPath,
          templateFiles: templatePath + "/**/*",
          data: {
            dirName,
            componentName,
          },
        },
        {
          type: "install",
        },
      ];
    }, // array of actions
  });
}
