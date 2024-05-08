module.exports = {
  printWidth: 80,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'none',
  arrowParens: 'avoid',
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  overrides: [
    {
      files: '*.json',
      options: {
        parser: 'json',
        useTabs: false
      }
    },
    {
      files: '*.ts',
      options: {
        parser: 'typescript'
      }
    },
    {
      files: '*.tsx',
      options: {
        parser: 'typescript'
      }
    },
    {
      files: '*.md',
      options: {
        proseWrap: 'never'
      }
    }
  ]
};
