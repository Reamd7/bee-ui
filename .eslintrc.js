module.exports = {
  extends: [
    'airbnb',
    // 'plugin:compat/recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:markdown/recommended-legacy',
    'prettier'
  ],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    '@babel',
    'jest',
    '@typescript-eslint',
    'react-hooks',
    'unicorn',
    'markdown',
    'lodash',
    'react-refresh',
    'prettier'
  ],
  rules: {
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        tsx: 'never',
        ts: 'never'
      }
    ],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ]
  },
  overrides: [
    {
      files: ['*.stories.ts', '*.stories.tsx', '*.test.ts', '*.test.tsx'],
      rules: {
        'import/no-extraneous-dependencies': 0
      }
    }
  ]
};
