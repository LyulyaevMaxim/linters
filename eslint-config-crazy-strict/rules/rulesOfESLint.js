const isCI = Boolean(process.env.CI)

module.exports = {
  rulesOfESLint,
}

function rulesOfESLint() {
  const possibleProblems = {
    'array-callback-return': 'error',
    'constructor-super': 'error',
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-control-regex': 'error',
    'no-debugger': isCI ? 'error' : 0,
    'no-dupe-args': 'error',
    'no-dupe-class-members': 0, // replaced to '@typescript-eslint/no-dupe-class-members'
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 0, // replaced to '@typescript-eslint/no-duplicate-imports',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-ex-assign': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': ['error', 'both'],
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 0, // replaced to '@typescript-eslint/no-loss-of-precision'
    'no-misleading-character-class': 'error',
    'no-new-symbol': 'error',
    'no-obj-calls': 'error',
    'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-undef': 0, //doesn't work with TS: https://typescript-eslint.io/docs/linting/troubleshooting#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }],
    'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
    'no-unused-private-class-members': 'error',
    'no-unused-vars': 0, //replaced to '@typescript-eslint/no-unused-vars'
    'no-use-before-define': 0, //replaced to '@typescript-eslint/no-use-before-define'
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'warn',
    'use-isnan': ['error', { enforceForSwitchCase: true, enforceForIndexOf: true }],
    'valid-typeof': ['error', { requireStringLiterals: true }],
  }

  const suggestions = {
    'accessor-pairs': ['error', { setWithoutGet: true, getWithoutSet: false, enforceForClassMembers: true }],
    'arrow-body-style': 0, //it's just code formatting
    'block-scoped-var': 'error',
    camelcase: [
      'error',
      {
        properties: 'always',
        ignoreDestructuring: false,
        ignoreImports: false,
        ignoreGlobals: false,
        allow: ['^API_', '^UNSAFE_'],
      },
    ],
    'capitalized-comments': 0, //FIXME: it sees any commented code as just text; ['error', 'always', { ignoreInlineComments: true, ignoreConsecutiveComments: true  }],
    'class-methods-use-this': ['error', { enforceForClassFields: true }],
    complexity: ['error', { max: 5 }],
    'consistent-return': ['error', { treatUndefinedAsUnspecified: false }],
    'consistent-this': ['error', 'self'],
    curly: ['error', 'multi-or-nest', 'consistent'], //I didn't find algorithm which will be comfortable in all cases
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 0, // replaced to '@typescript-eslint/default-param-last'
    'dot-notation': 0, // replaced to '@typescript-eslint/dot-notation'
    eqeqeq: ['error', 'always'],
    'func-name-matching': ['error', 'always', { considerPropertyDescriptor: true, includeCommonJSModuleExports: true }],
    'func-names': ['error', 'as-needed', { generators: 'as-needed' }],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': 'error',
    'id-denylist': 0, //maybe will do later: https://eslint.org/docs/rules/id-denylist
    'id-length': ['error', { min: 4 }],
    'id-match': 0,
    'init-declarations': 0, //replaced to '@typescript-eslint/init-declarations'
    'max-classes-per-file': 0, //I'm not sure that automation is the right way
    'max-depth': ['error', 3],
    'max-lines': ['error', { max: 300, skipBlankLines: true, skipComments: true }],
    'max-lines-per-function': ['error', { max: 50, skipBlankLines: true, skipComments: true, IIFEs: false }],
    'max-nested-callbacks': ['error', 5],
    'max-params': ['error', 5],
    'max-statements': ['error', 10, { ignoreTopLevelFunctions: false }],
    'multiline-comment-style': isCI ? ['error', 'bare-block'] : 0,
    'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
    'no-alert': 0,
    'no-array-constructor': 0, // replaced to @typescript-eslint/no-array-constructor
    'no-bitwise': ['error', { allow: ['~'] }],
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-confusing-arrow': 0, //I'm not sure that it improves readability
    'no-console': 0,
    'no-continue': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-empty': ['error', { allowEmptyCatch: false }],
    'no-empty-function': 0, // replaced to '@typescript-eslint/no-empty-function'
    'no-eq-null': 0, //rule 'eqeqeq' fully replaces this
    'no-eval': 'error',
    'no-extend-native': 0, //probably, including additional no-enumerable methods via Symbol can be useful
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],
    'no-extra-label': 'error',
    'no-extra-semi': 0, //replaced to '@typescript-eslint/no-extra-semi'
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': ['error', { disallowTemplateShorthand: true, allow: ['~'] }],
    'no-implicit-globals': 'error',
    'no-implied-eval': 0, //replaced to '@typescript-eslint/no-implied-eval'
    'no-inline-comments': 0, //I'm not sure that it improves readability
    'no-invalid-this': 0, // replaced to "@typescript-eslint/no-invalid-this"
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 0, // replaced to '@typescript-eslint/no-loop-func'
    'no-magic-numbers': 0, // replaced to '@typescript-eslint/no-magic-numbers'
    'no-mixed-operators': 'error',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-negated-condition': 0, //I'm not sure that it improves readability
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': ['error', { props: false }], //it requires using of full immutable way of programming, so I enabled it limited
    'no-plusplus': 'error',
    'no-proto': 'error',
    'no-redeclare': 0, // replaced to '@typescript-eslint/no-redeclare'
    'no-regex-spaces': 'error',
    'no-restricted-exports': 0, //I haven't ideas which names are wrong
    'no-restricted-globals': 0, //I haven't ideas which names are wrong
    'no-restricted-imports': 0, // replaced to '@typescript-eslint/no-restricted-imports'
    'no-restricted-properties': 0, //I haven't ideas which names are wrong
    'no-restricted-syntax': 0, //TODO: can be useful: https://eslint.org/docs/rules/no-restricted-syntax
    'no-return-assign': ['error', 'always'],
    'no-return-await': 0, //replaced to '@typescript-eslint/return-await'
    'no-script-url': 'error',
    'no-sequences': ['error', { allowInParentheses: false }],
    'no-shadow': 0, //replaced to '@typescript-eslint/no-shadow'
    'no-shadow-restricted-names': 'error',
    'no-ternary': 0,
    'no-throw-literal': 0, //replaced to '@typescript-eslint/no-throw-literal'
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-underscore-dangle': ['error', { allowFunctionParams: true }],
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unused-expressions': 0, //replaced to '@typescript-eslint/no-unused-expressions'
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
    'no-useless-concat': 'error',
    'no-useless-constructor': 0, //replaced to '@typescript-eslint/no-useless-constructor'
    'no-useless-escape': 'error',
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 0, // disabled because 'void' is useful for '@typescript-eslint/no-confusing-void-expression'
    'no-warning-comments': ['error', { terms: ['temp'], location: 'anywhere' }],
    'no-with': 'error',
    'object-shorthand': [
      'error',
      'always',
      { avoidQuotes: true, ignoreConstructors: true, avoidExplicitReturnArrows: false },
    ],
    'one-var': 0, //it's better group variables by logic instead of stupid auto logic
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: false }],
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false, //FIXME: it doesn't work correctly
      },
    ],
    'prefer-exponentiation-operator': 0,
    'prefer-named-capture-group': 'error',
    'prefer-numeric-literals': 0,
    'prefer-object-has-own': 0, //TODO: enable it after TypeScript was upgraded to 4.6.0 and target will be 'es2022': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: false }],
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    radix: ['error', 'as-needed'],
    'require-await': 0, //replaced to '@typescript-eslint/require-await'
    'require-unicode-regexp': 'error',
    'require-yield': 'error',
    'sort-imports': 0, //I'm not sure that it improves readability
    'sort-keys': 0, //I'm not sure that it improves readability
    'sort-vars': 0, //I'm not sure that it improves readability
    'spaced-comment': isCI ? ['error', 'always'] : 0,
    strict: 'error',
    'symbol-description': 'error',
    'vars-on-top': 'error',
    yoda: 'error',
  }

  //Prettier run any code formatting so it's unnecessary
  const layoutAndFormatting = {
    'array-bracket-newline': 'off',
    'array-bracket-spacing': 'off',
    'array-element-newline': 'off',
    'arrow-parens': 'off',
    'arrow-spacing': 'off',
    'block-spacing': 'off',
    'brace-style': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'comma-style': 'off',
    'computed-property-spacing': 'off',
    'dot-location': 'off',
    'eol-last': 'off',
    'func-call-spacing': 'off', //replaced to '@typescript-eslint/func-call-spacing'
    'function-call-argument-newline': 'off',
    'function-paren-newline': 'off',
    'generator-star-spacing': 'off',
    'implicit-arrow-linebreak': 'off',
    indent: 'off', //replaced to '@typescript-eslint/indent'
    'jsx-quotes': 'off',
    'key-spacing': 'off',
    'keyword-spacing': 'off',
    'line-comment-position': 'off',
    'linebreak-style': 'off',
    'lines-around-comment': 'off',
    'lines-between-class-members': 0, //replaced to '@typescript-eslint/lines-between-class-members'
    'max-len': 'off',
    'max-statements-per-line': 'off',
    'multiline-ternary': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-extra-parens': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-multi-spaces': 'off',
    'no-multiple-empty-lines': 'off',
    'no-tabs': 'off',
    'no-trailing-spaces': 'off',
    'no-whitespace-before-property': 'off',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'object-property-newline': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    'padding-line-between-statements': 'off',
    quotes: 'off',
    'rest-spread-spacing': 'off',
    semi: 'off',
    'semi-spacing': 'off',
    'semi-style': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': 'off',
    'space-infix-ops': 'off',
    'space-unary-ops': 'off',
    'switch-colon-spacing': 'off',
    'template-curly-spacing': 'off',
    'template-tag-spacing': 'off',
    'unicode-bom': 'off',
    'wrap-iife': 'off',
    'wrap-regex': 'off',
    'yield-star-spacing': 'off',
  }

  return { ...possibleProblems, ...suggestions, ...layoutAndFormatting }
}
