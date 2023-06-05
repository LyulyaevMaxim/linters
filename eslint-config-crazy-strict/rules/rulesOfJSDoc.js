const { canBeFixedLater } = require('../utils')

module.exports = {
  rulesOfJSDoc,
}

function rulesOfJSDoc() {
  const requireRules = {
    'jsdoc/require-jsdoc': [
      canBeFixedLater,
      {
        publicOnly: false,
        require: {
          ClassDeclaration: true,
          ClassExpression: true,
          MethodDefinition: false,
          // it triggers on every callback
          FunctionExpression: false,
          ArrowFunctionExpression: false,
          // it triggers on every React component
          FunctionDeclaration: false,
        },
        exemptEmptyConstructors: true,
        exemptEmptyFunctions: true,
        checkConstructors: true,
        checkGetters: false,
        checkSetters: false,
      },
    ],

    'jsdoc/require-asterisk-prefix': [canBeFixedLater, 'always'],
    'jsdoc/require-example': 'warn',
    'jsdoc/require-description': [canBeFixedLater],
    'jsdoc/require-description-complete-sentence': 0,
    'jsdoc/require-file-overview': 0,
    //
    'jsdoc/require-param': ['warn', { checkRestProperty: true }],
    'jsdoc/require-param-description': [canBeFixedLater],
    'jsdoc/require-param-name': [canBeFixedLater],
    'jsdoc/require-param-type': 0, // we have TypeScript
    'jsdoc/require-hyphen-before-param-description': [canBeFixedLater],

    'jsdoc/require-property': [canBeFixedLater],
    'jsdoc/require-property-description': [canBeFixedLater],
    'jsdoc/require-property-name': [canBeFixedLater],
    'jsdoc/require-property-type': 0,

    'jsdoc/require-returns': ['warn', { forceRequireReturn: true, forceReturnsWithAsync: true }],
    'jsdoc/require-returns-check': [canBeFixedLater],
    'jsdoc/require-returns-description': [canBeFixedLater],
    'jsdoc/require-returns-type': 0, // we have TypeScript

    'jsdoc/require-throws': [canBeFixedLater],

    'jsdoc/require-yields': [
      canBeFixedLater,
      { forceRequireYields: true, forceRequireNext: true, nextWithGeneratorTag: true },
    ],
    'jsdoc/require-yields-check': [canBeFixedLater],
  }

  const checkRules = {
    'jsdoc/check-access': [canBeFixedLater],
    'jsdoc/check-alignment': [canBeFixedLater],
    'jsdoc/check-examples': [canBeFixedLater],
    'jsdoc/check-indentation': [canBeFixedLater],
    'jsdoc/check-line-alignment': [canBeFixedLater],
    'jsdoc/check-param-names': [
      canBeFixedLater,
      {
        checkRestProperty: true,
        checkDestructured: true,
      },
    ],
    'jsdoc/check-property-names': [canBeFixedLater, { enableFixer: true }],
    'jsdoc/check-syntax': [canBeFixedLater],
    'jsdoc/check-tag-names': [canBeFixedLater],
    'jsdoc/check-types': 0, // we have TypeScript
    'jsdoc/check-values': [canBeFixedLater],
  }

  return {
    ...requireRules,
    ...checkRules,
    'jsdoc/empty-tags': [canBeFixedLater],
    'jsdoc/implements-on-classes': [canBeFixedLater],
    'jsdoc/match-description': [canBeFixedLater],
    'jsdoc/multiline-blocks': [canBeFixedLater],
    'jsdoc/no-bad-blocks': [canBeFixedLater],
    'jsdoc/no-defaults': [canBeFixedLater],
    'jsdoc/no-missing-syntax': 0,
    'jsdoc/no-multi-asterisks': 0,
    'jsdoc/no-restricted-syntax': [canBeFixedLater],
    'jsdoc/no-types': [canBeFixedLater],
    'jsdoc/no-undefined-types': [canBeFixedLater],
    'jsdoc/tag-lines': 0,
    'jsdoc/valid-types': [canBeFixedLater],
  }
}
