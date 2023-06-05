const path = require('path'),
  root = path.resolve(__dirname, './')

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    es2022: true,
    browser: true,
    node: true,
    commonjs: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    tsconfigRootDir: root,
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['@lyulyaev-maxim/eslint-config-crazy-strict', '@lyulyaev-maxim/eslint-config-react-crazy-strict'],
}
