const isCI = Boolean(process.env.CI)

module.exports = {
  rulesOfSonar,
}

function rulesOfSonar() {
  const bugDetection = {
    'sonarjs/no-all-duplicated-branches': 'error',
    'sonarjs/no-element-overwrite': 'error',
    'sonarjs/no-empty-collection': 'error',
    'sonarjs/no-extra-arguments': 'error',
    'sonarjs/no-identical-conditions': 0, // 'no-dupe-else-if' catches this case
    'sonarjs/no-identical-expressions': 'error',
    'sonarjs/no-ignored-return': 'error',
    'sonarjs/no-one-iteration-loop': 0, //'no-unreachable-loop' catches this case
    'sonarjs/no-use-of-empty-return-value': 0, //'@typescript-eslint/no-confusing-void-expression' catches this case
    'sonarjs/non-existent-operator': 0, //Prettier make formatting, but then we have '= +num' instead of '=+ num' and this rule don't see error
  }

  const codeSmellDetection = {
    'sonarjs/cognitive-complexity': ['error', 15],
    'sonarjs/elseif-without-else': 'error',
    'sonarjs/max-switch-cases': ['error', 10],
    'sonarjs/no-collapsible-if': 'error',
    'sonarjs/no-collection-size-mischeck': 'error',
    'sonarjs/no-duplicate-string': 'error',
    'sonarjs/no-duplicated-branches': 'error',
    'sonarjs/no-gratuitous-expressions': 'error',
    'sonarjs/no-identical-functions': 'error',
    'sonarjs/no-inverted-boolean-check': 'error',
    'sonarjs/no-nested-switch': 'error',
    'sonarjs/no-nested-template-literals': 0, //as minimum, it falsy triggers to CSS-in-JS
    'sonarjs/no-redundant-boolean': 0, // replaced to '@typescript-eslint/no-unnecessary-boolean-literal-compare'
    'sonarjs/no-redundant-jump': 'error',
    'sonarjs/no-same-line-conditional': 0, // just code formatting
    'sonarjs/no-small-switch': 'error',
    'sonarjs/no-unused-collection': 'error',
    'sonarjs/no-useless-catch': 'error',
    'sonarjs/prefer-immediate-return': 'error',
    'sonarjs/prefer-object-literal': 'error',
    'sonarjs/prefer-single-boolean-return': 0, //in current moment, it works equally 'no-else-return'
    'sonarjs/prefer-while': isCI ? 'error' : 0,
  }

  return { ...bugDetection, ...codeSmellDetection }
}
