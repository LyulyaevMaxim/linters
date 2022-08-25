const { projectNamePattern } = require('./rules/helpersForRules')

const { rulesOfStylelint } = require('./rules/rulesOfStylelint')

module.exports = {
  reportDescriptionlessDisables: [true, { except: [] }],
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
  rules: {
    ...rulesOfStylelint(),
  },
  overrides: [
    {
      files: ['**/*.css'],
      rules: {
        'selector-class-pattern': [projectNamePattern, { resolveNestedSelectors: true }],
      },
    },
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
      rules: {},
    },
    {
      files: ['**/*.{ts,tsx}'],
      customSyntax: 'postcss-scss',
      processors: ['stylelint-processor-styled-components'],
      rules: {
        'no-empty-source': null,
      },
    },
  ],
}
