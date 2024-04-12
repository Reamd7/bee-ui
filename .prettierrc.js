module.exports = {
  printWidth: 80,
  useTabs: false,
  tabWidth: 2,
  trailingComma: "es5",
  arrowParens: "avoid",
  overrides: [
    {
      files: "*.json",
      options: {
        parser: "json",
        useTabs: false,
      },
    },
    {
      files: "*.ts",
      options: {
        parser: "typescript",
      },
    },
    {
      files: "*.tsx",
      options: {
        parser: "typescript",
      },
    },
  ],
};
