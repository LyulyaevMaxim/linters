const { fixable, canBeFixedLater } = require('../utils')

module.exports = {
  rulesOfUnicorn,
}

function rulesOfUnicorn() {
  return {
    /**
     * It conflicts with 'require-unicode-regexp':
     * It doesn't see error if we passed 'u' flag to regexp before fix this rule
     */
    'unicorn/better-regex': fixable,
    'unicorn/catch-error-name': 0,
    /**
     * Long path is better
     */
    'unicorn/consistent-destructuring': 0,
    'unicorn/consistent-function-scoping': canBeFixedLater,
    /**
     * I don't see real difference between 'MySpecificError' of 'ErrorMySpecific
     */
    'unicorn/custom-error-definition': 0,
    'unicorn/empty-brace-spaces': 0, // just formatting
    'unicorn/error-message': canBeFixedLater,
    'unicorn/escape-case': 0,
    'unicorn/expiring-todo-comments': canBeFixedLater,
    'unicorn/explicit-length-check': canBeFixedLater,
    /**
     * Name of file can include abbreviation.
     * I'm not sure will be better see part of them in lowercase
     **/
    'unicorn/filename-case': [
      canBeFixedLater,
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/import-style': 0,
    'unicorn/new-for-builtins': fixable,
    'unicorn/no-abusive-eslint-disable': canBeFixedLater,
    /**
     * It just searches by regexp ".map" that sometimes is wrong (e.g., "MST.types.map(ModelX)").
     * Also, it breaks reusable type guards (e.g., `filter(someTypeGuardFromVariable`).
     */
    'unicorn/no-array-callback-reference': 'warn',
    /**
     * ".forEach" useful only in cases
     * where we use chaining or passed reused callbacks -
     * just ignore rule in these cases.
     *
     * Also, it's easy to name callback functions with 'forEach',
     * but we just need to move logic from 'for-of' to callback
     * to get the same readability result.
     *
     * https://2ality.com/2021/01/looping-over-arrays.html
     */
    'unicorn/no-array-for-each': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-array-reduce': 'error',

    'unicorn/no-array-method-this-argument': 'error',
    'unicorn/no-array-push-push': 'error',
    'unicorn/no-await-expression-member': canBeFixedLater,
    'unicorn/no-console-spaces': 0,
    'unicorn/no-document-cookie': 'error',
    'unicorn/no-empty-file': canBeFixedLater,
    'unicorn/no-hex-escape': fixable,
    'unicorn/no-instanceof-array': fixable,
    'unicorn/no-invalid-remove-event-listener': 'error',
    'unicorn/no-keyword-prefix': 0,
    'unicorn/no-lonely-if': canBeFixedLater,
    'unicorn/no-negated-condition': 0,
    /**
     * 'no-nested-ternary' of Eslint works better
     */
    'unicorn/no-nested-ternary': 0,
    'unicorn/no-new-array': 'error',
    'unicorn/no-new-buffer': 'error',
    /**
     * 'React' deeply integrated with 'null' values
     */
    'unicorn/no-null': 0,
    'unicorn/no-object-as-default-parameter': 'error',
    'unicorn/no-process-exit': 0,
    'unicorn/no-static-only-class': 0, // '@typescript-eslint/no-extraneous-class' covers it
    'unicorn/no-thenable': 'error',
    'unicorn/no-this-assignment': 0, // used via '@typescript-eslint/no-this-alias'
    'unicorn/no-typeof-undefined': 'error',
    'unicorn/no-unnecessary-await': 0, // '@typescript-eslint/await-thenable' covers it
    'unicorn/no-unreadable-array-destructuring': canBeFixedLater,
    'unicorn/no-unreadable-iife': 'error',
    'unicorn/no-unsafe-regex': canBeFixedLater,
    'unicorn/no-unused-properties': canBeFixedLater,
    'unicorn/no-useless-fallback-in-spread': fixable,
    'unicorn/no-useless-length-check': fixable,
    'unicorn/no-useless-promise-resolve-reject': fixable,
    'unicorn/no-useless-spread': fixable,
    'unicorn/no-useless-switch-case': 'error',
    'unicorn/no-useless-undefined': [canBeFixedLater, { checkArguments: true }],
    'unicorn/no-zero-fractions': fixable,
    'unicorn/number-literal-case': fixable,
    'unicorn/numeric-separators-style': fixable,
    'unicorn/prefer-add-event-listener': canBeFixedLater,
    'unicorn/prefer-array-find': canBeFixedLater,
    'unicorn/prefer-array-flat': canBeFixedLater,
    'unicorn/prefer-array-flat-map': canBeFixedLater,
    'unicorn/prefer-array-index-of': canBeFixedLater,
    'unicorn/prefer-array-some': canBeFixedLater,
    'unicorn/prefer-at': [canBeFixedLater, { checkAllIndexAccess: true }],
    'unicorn/prefer-blob-reading-methods': canBeFixedLater,
    'unicorn/prefer-code-point': 'error',
    'unicorn/prefer-date-now': fixable,
    'unicorn/prefer-default-parameters': 0,
    'unicorn/prefer-dom-node-append': canBeFixedLater,
    'unicorn/prefer-dom-node-dataset': canBeFixedLater,
    'unicorn/prefer-dom-node-remove': canBeFixedLater,
    'unicorn/prefer-dom-node-text-content': 'error',
    'unicorn/prefer-event-target': 0,
    'unicorn/prefer-export-from': 0, // fixable TODO: I'm not sure yet,
    'unicorn/prefer-includes': canBeFixedLater,
    'unicorn/prefer-json-parse-buffer': 0,
    'unicorn/prefer-keyboard-event-key': canBeFixedLater,
    'unicorn/prefer-logical-operator-over-ternary': canBeFixedLater,
    'unicorn/prefer-math-trunc': canBeFixedLater,
    'unicorn/prefer-modern-dom-apis': fixable,
    'unicorn/prefer-modern-math-apis': fixable,
    'unicorn/prefer-module': canBeFixedLater,
    'unicorn/prefer-native-coercion-functions': canBeFixedLater,
    'unicorn/prefer-negative-index': fixable,
    /**
     * TODO: it requires additional settings
     * But it doesn't make sense to change project's configuration for stylistic change only
     * @description Module build failed: UnhandledSchemeError: Reading from "node:assert" is not handled by plugins
     * @link https://github.com/vercel/next.js/issues/28774#issuecomment-1467514930
     */
    'unicorn/prefer-node-protocol': 0, // fixable,
    'unicorn/prefer-number-properties': fixable,
    'unicorn/prefer-object-from-entries': canBeFixedLater,
    'unicorn/prefer-optional-catch-binding': 0, // should be found via '@typescript-eslint/no-unused-vars'
    'unicorn/prefer-prototype-methods': canBeFixedLater,
    'unicorn/prefer-query-selector': 0, //don't agree, semantic selectors improve readability
    'unicorn/prefer-reflect-apply': canBeFixedLater,
    'unicorn/prefer-regexp-test': canBeFixedLater,
    'unicorn/prefer-set-has': canBeFixedLater,
    'unicorn/prefer-set-size': canBeFixedLater,
    'unicorn/prefer-spread': canBeFixedLater,
    'unicorn/prefer-string-replace-all': fixable,
    'unicorn/prefer-string-slice': fixable,
    'unicorn/prefer-string-starts-ends-with': canBeFixedLater,
    'unicorn/prefer-string-trim-start-end': fixable,
    /**
     * Because it has autofix be better manually check "default" case
     * and using "No default" only in manual mode
     **/
    'unicorn/prefer-switch': [canBeFixedLater, { emptyDefaultCase: 'no-default-case' }],
    'unicorn/prefer-ternary': [canBeFixedLater, 'always'],
    'unicorn/prefer-top-level-await': 0, // canBeFixedLater TODO: jest requires additional settings for this feature
    'unicorn/prefer-type-error': fixable,
    /**
     * TODO
     * Maybe we can use but if allow 'props', 'args', 'ref'
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
     */
    'unicorn/prevent-abbreviations': canBeFixedLater,
    'unicorn/relative-url-style': [fixable, 'never'],
    'unicorn/require-array-join-separator': fixable,
    'unicorn/require-number-to-fixed-digits-argument': fixable,
    'unicorn/require-post-message-target-origin': 0,
    'unicorn/string-content': 0,
    'unicorn/switch-case-braces': ['error', 'always'],
    'unicorn/template-indent': 0, // just code formatting
    'unicorn/text-encoding-identifier-case': fixable,
    'unicorn/throw-new-error': 0, // 'unicorn/error-message' checks this
  }
}
