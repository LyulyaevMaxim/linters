const { isCI, fixable } = require('../utils')

module.exports = {
  rulesOfPluginImport,
}

function rulesOfPluginImport() {
  const staticAnalysis = {
    'import/no-unresolved': 0,
    'import/named': 0,
    'import/default': 0,
    'import/namespace': 0,
    'import/no-restricted-paths': 0,
    'import/no-absolute-path': 0,
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/no-self-import': 0,
    'import/no-cycle': 0,
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
    'import/no-relative-parent-imports': 0,
    'import/no-relative-packages': 'error',
  }

  const helpfulWarnings = {
    'import/export': 'error',
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/no-deprecated': 'warn',
    'import/no-extraneous-dependencies': 0,
    'import/no-mutable-exports': 0, //'no-import-assign' catch this case
    'import/no-unused-modules': isCI ? ['error', { unusedExports: true }] : 0,
  }

  const moduleSystems = {
    'import/unambiguous': 0,
    'import/no-commonjs': 0,
    'import/no-amd': 0,
    'import/no-nodejs-modules': 0,
    'import/no-import-module-exports': 0,
  }

  const styleGuide = {
    'import/first': fixable,
    'import/exports-last': 0, // replaced to 'import/group-exports'
    'import/no-duplicates': 0, // replaced to '@typescript-eslint/no-duplicate-imports'
    'import/no-namespace': 0,
    'import/extensions': 0,
    'import/order': isCI
      ? [
          'error',
          {
            'newlines-between': 'always',
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          },
        ]
      : 0,
    'import/newline-after-import': 0,
    'import/prefer-default-export': 0,
    'import/max-dependencies': 0,
    'import/no-unassigned-import': 0,
    'import/no-named-default': 'error',
    'import/no-default-export': 'error',
    'import/no-named-export': 0,
    'import/no-anonymous-default-export': 0, // we already throw error for any export by default ('import/no-default-export')
    /**
     * We can use 'Structure' tab of IDEA to see which variables are exporting.
     * But if we haven't code-style limitation on logic of adding 'export' keyword (do it around creation variable or some later),
     * then it's not enough clearly which variables are our API for external using.
     *
     * Unfortunately, it doesn't work with 'namespaces' of TypeScript correctly but because we use them actively now disabling rules is enough noisy.
     *
     * However, we can enable this rule periodically to check our exports and make them by one way.
     */
    'import/group-exports': 'warn',
    'import/dynamic-import-chunkname': 'error',
  }

  return {
    ...staticAnalysis,
    ...helpfulWarnings,
    ...moduleSystems,
    ...styleGuide,
  }
}
