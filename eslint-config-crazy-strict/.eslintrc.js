const path = require('path'),
  root = path.resolve(__dirname, './')

const { rulesOfESLint } = require('./rules/rulesOfESLint'),
  { rulesOfTypeScript } = require('./rules/rulesOfTypeScript'),
  { rulesOfPluginImport } = require('./rules/rulesOfPluginImport'),
  { rulesOfUnicorn } = require('./rules/rulesOfUnicorn'),
  { rulesOfSonar } = require('./rules/rulesOfSonar')

module.exports = {
  root: true,
  env: {
    es2021: true, //TODO: change to es2022 after ESLint will updated
    browser: true,
    node: true,
    commonjs: true,
  },
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        tsconfigRootDir: root,
        project: ['./tsconfig.json'],
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ['@typescript-eslint', 'import', 'unicorn', 'sonarjs'],
      rules: {
        ...rulesOfESLint(),
        ...rulesOfTypeScript(),
        ...rulesOfPluginImport(),
        ...rulesOfUnicorn(),
        ...rulesOfSonar(),
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: root,
      },
    },
  },
}
