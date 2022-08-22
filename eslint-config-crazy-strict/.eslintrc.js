const path = require('path'),
  root = path.resolve(__dirname, './')

const { rulesOfESLint } = require('./rules/rulesOfESLint'),
  { rulesOfReact } = require('./rules/rulesOfReact'),
  { rulesOfTypeScript } = require('./rules/rulesOfTypeScript'),
  { rulesOfPluginImport } = require('./rules/rulesOfPluginImport'),
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
      plugins: ['@typescript-eslint', 'react', 'import', 'sonarjs', 'react-hooks'],
      rules: {
        ...rulesOfESLint(),
        ...rulesOfReact(),
        ...rulesOfTypeScript(),
        ...rulesOfPluginImport(),
        ...rulesOfSonar(),
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' },
      { name: 'NavLink', linkAttribute: 'to' },
    ],
    'import/resolver': {
      typescript: {
        project: root,
      },
    },
  },
}
