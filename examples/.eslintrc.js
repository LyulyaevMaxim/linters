const path = require('path'),
  root = path.resolve(__dirname, './')

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    es2021: true, //TODO: change to es2022 after ESLint will updated
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
  extends: ['@lyulyaev-maxim/eslint-config-crazy-strict'],
}
