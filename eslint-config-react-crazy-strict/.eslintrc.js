const path = require('path'),
  root = path.resolve(__dirname, './')

const { rulesOfReact } = require('./rules/rulesOfReact')

module.exports = {
  root: true,
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      plugins: ['react', 'react-hooks'],
      rules: {
        ...rulesOfReact(),
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
  },
}
