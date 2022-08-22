const isCI = Boolean(process.env.CI)

module.exports = {
  rulesOfTypeScript,
}

function rulesOfTypeScript() {
  const supportedRules = {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    '@typescript-eslint/ban-tslint-comment': 0, //deprecated
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/class-literal-property-style': ['error', 'getters'],
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],
    '@typescript-eslint/consistent-type-imports': isCI
      ? ['error', { prefer: 'type-imports', disallowTypeAnnotations: true }]
      : 0,
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: false,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: false,
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'error', //TODO: maybe it decreased readability
      {
        accessibility: 'explicit',
        overrides: {
          constructors: 'no-public',
          accessors: 'explicit',
          parameterProperties: 'explicit',
          methods: 'explicit',
          properties: 'explicit',
        },
        ignoredMethodNames: ['render'],
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      {
        allowArgumentsExplicitlyTypedAsAny: false,
        allowDirectConstAssertionInArrowFunctions: false,
        allowHigherOrderFunctions: false,
        allowTypedFunctionExpressions: false,
      },
    ],
    '@typescript-eslint/member-delimiter-style': 0, // just code formatting
    '@typescript-eslint/member-ordering': 0, //TODO: https://typescript-eslint.io/rules/member-ordering
    '@typescript-eslint/method-signature-style': ['error', 'property'],
    '@typescript-eslint/naming-convention': 0, //TODO: https://typescript-eslint.io/rules/naming-convention
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: false, ignoreVoidOperator: false },
    ],
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: false,
      },
    ],
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        fixToUnknown: true,
        ignoreRestArgs: false,
      },
    ],
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': [
      'error',
      {
        allowConstructorOnly: false,
        allowEmpty: false,
        allowStaticOnly: false,
        allowWithDecorator: false,
      },
    ],
    '@typescript-eslint/no-floating-promises': [
      'error',
      {
        ignoreVoid: true,
        ignoreIIFE: false,
      },
    ],
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-inferrable-types': 0, //it decreases safe
    '@typescript-eslint/no-invalid-void-type': [
      'error',
      {
        allowInGenericTypeArguments: false,
        allowAsThisParameter: false,
      },
    ],
    '@typescript-eslint/no-meaningless-void-operator': [
      'error',
      {
        checkNever: true,
      },
    ],
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksConditionals: true,
        checksVoidReturn: false /* FIXME: {
          arguments: false,
          attributes: false,
          properties: true,
          returns: true,
          variables: true,
        },*/,
      },
    ],
    '@typescript-eslint/no-namespace': 0, // it's useful functionality
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-parameter-properties': 'error',
    // '@typescript-eslint/no-redundant-type-constituents': 'error', //FIXME: was not found
    '@typescript-eslint/no-require-imports': 0, // it's useful functionality
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true,
        allowedNames: ['self'],
      },
    ],
    '@typescript-eslint/no-type-alias': 0, //we use '@typescript-eslint/consistent-type-definitions' with 'type' instead of 'interface' by default
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
      'error',
      {
        allowComparingNullableBooleansToTrue: false,
        allowComparingNullableBooleansToFalse: false,
      },
    ],
    '@typescript-eslint/no-unnecessary-condition': [
      'error',
      {
        allowConstantLoopConditions: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-var-requires': 0, //it seems as copy '@typescript-eslint/no-require-imports'
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': [
      'error',
      {
        ignoreConditionalTests: false,
        ignoreMixedLogicalExpressions: false,
      },
    ],
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': ['error', { onlyInlineLambdas: false }],
    '@typescript-eslint/prefer-readonly-parameter-types': 0 /* FIXME: it works with 'readonly type[]` but throw error on ReadonlyArray<type>
      [
      'error',
      { checkParameterProperties: true, ignoreInferredTypes: true, treatMethodsAsReadonly: false },
    ]*/,
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-regexp-exec': 0,
    '@typescript-eslint/prefer-return-this-type': 0, // I don't see any reason add chaining for every method
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/promise-function-async': [
      'error',
      {
        allowedPromiseNames: ['Thenable'],
        checkArrowFunctions: true,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true,
      },
    ],
    '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
    '@typescript-eslint/restrict-plus-operands': ['error', { allowAny: true, checkCompoundAssignments: true }],
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowNumber: true,
        allowAny: true,
        allowBoolean: false,
        allowNullish: false,
        allowRegExp: false,
      },
    ],
    '@typescript-eslint/sort-type-union-intersection-members': 0,
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowString: true,
        allowNumber: true,
        allowNullableObject: true,
        allowAny: true, //it isn't safe
        allowNullableBoolean: false,
        allowNullableString: false,
        allowNullableNumber: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/type-annotation-spacing': 0, //it's just code formatting
    '@typescript-eslint/typedef': 0, //TODO: maybe will enable later
    '@typescript-eslint/unbound-method': [
      'error',
      {
        ignoreStatic: true,
      },
    ],
    '@typescript-eslint/unified-signatures': 'error',
  }

  const extensionRules = {
    '@typescript-eslint/brace-style': 0, //it's just code formatting
    '@typescript-eslint/comma-dangle': 0, //it's just code formatting
    '@typescript-eslint/comma-spacing': 0, //it's just code formatting
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/dot-notation': 0,
    '@typescript-eslint/func-call-spacing': 0, //it's just code formatting
    '@typescript-eslint/indent': 0, //it's just code formatting
    '@typescript-eslint/init-declarations': ['error', 'always'],
    '@typescript-eslint/keyword-spacing': 0, //it's just code formatting
    '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterOverload: true }],
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-duplicate-imports': 'error',
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: [],
      },
    ],
    '@typescript-eslint/no-extra-parens': 0, //it's just code formatting
    '@typescript-eslint/no-extra-semi': 0, //it's just code formatting
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-invalid-this': ['error', { capIsConstructor: true }],
    '@typescript-eslint/no-loop-func': 'error',
    '@typescript-eslint/no-loss-of-precision': 'error',
    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        ignoreArrayIndexes: true,
        ignoreTypeIndexes: true,
        ignoreEnums: false,
        ignoreNumericLiteralTypes: false,
        ignoreReadonlyClassProperties: false,
      },
    ],
    '@typescript-eslint/no-redeclare': ['error', { builtinGlobals: true, ignoreDeclarationMerge: false }],
    '@typescript-eslint/no-restricted-imports': ['error', { allowTypeImports: true }], // it seems ugly as way checking that we use /index file instead of nested files for import
    '@typescript-eslint/no-shadow': [
      'warn', //it gives extra wrong errors, so I don't see it as really useful rule
      {
        builtinGlobals: true,
        hoist: 'functions',
        // FIXME: ignoreOnInitialization: true
        ignoreTypeValueShadow: false, //it's ugly
        ignoreFunctionTypeParameterNameValueShadow: true,
      },
    ],
    '@typescript-eslint/no-throw-literal': [
      'error',
      {
        allowThrowingAny: false,
        allowThrowingUnknown: false,
      },
    ],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { enforceForJSX: true, allowShortCircuit: false, allowTernary: false },
    ],
    '@typescript-eslint/no-unused-vars': isCI
      ? ['error', { vars: 'all', args: 'all', ignoreRestSiblings: false, caughtErrors: 'all' }]
      : 0,
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, enums: true, typedefs: true, ignoreTypeReferences: true },
    ],
    // '@typescript-eslint/no-useless-empty-export': 'error', //FIXME: Definition was not found
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/object-curly-spacing': 0, //just code formatting
    '@typescript-eslint/padding-line-between-statements': 0, //just code formatting
    '@typescript-eslint/quotes': 0, //just code formatting
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
    '@typescript-eslint/semi': 0, //just code formatting
    '@typescript-eslint/space-before-function-paren': 0, //just code formatting
    '@typescript-eslint/space-infix-ops': 0, //just code formatting
  }

  return {
    ...supportedRules,
    ...extensionRules,
  }
}
