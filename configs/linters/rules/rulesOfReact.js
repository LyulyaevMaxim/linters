const isCI = Boolean(process.env.CI)

module.exports = {
  rulesOfReact,
}

function rulesOfReact() {
  const rulesByReact = {
    'react/boolean-prop-naming': 0, //we don't use PropTypes
    'react/button-has-type': 0,
    'react/default-props-match-prop-types': 0, //we don't use PropTypes
    'react/destructuring-assignment': ['error', 'never'],
    'react/display-name': 'error',
    'react/forbid-component-props': [
      'error',
      {
        forbid: [
          {
            propName: 'style',
            message: 'Use "className" or "css" prop instead of "style"',
          },
        ],
      },
    ],
    'react/forbid-dom-props': [
      'error',
      {
        forbid: [
          {
            propName: 'style',
            message: 'Use "className" or "css" prop instead of "style"',
          },
        ],
      },
    ],
    'react/forbid-elements': 0, //TODO: I haven't ideas yet which names are wrong
    'react/forbid-foreign-prop-types': 0, // we don't use PropTypes
    'react/forbid-prop-types': 0, // we don't use PropTypes
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration'],
        unnamedComponents: ['function-expression'],
      },
    ],
    'react/hook-use-state': 0, // FIXME: Definition for this rule wasn't found: 'error',
    'react/iframe-missing-sandbox': 0, // FIXME: Definition for this rule wasn't found: 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-adjacent-inline-elements': 0, // just code formatting
    'react/no-array-index-key': 'error',
    'react/no-arrow-function-lifecycle': 'error',
    'react/no-children-prop': 0, // Using 'children' prop for simple values is more readable
    'react/no-danger': 0,
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': ['error', 'disallow-in-func'],
    'react/no-did-update-set-state': ['error', 'disallow-in-func'],
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-invalid-html-attribute': 'error', //TS doesn't catch it
    'react/no-is-mounted': 0, // rule 'react/no-deprecated' should check it
    'react/no-multi-comp': 0, // we shouldn't create new file on every primitive component
    'react/no-namespace': 0, // useless
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 0,
    'react/no-string-refs': 0, // rule 'react/no-deprecated' should check it
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 0, //TS catch most cases of this error + it kills readability
    'react/no-unknown-property': 0, //TS catch this
    'react/no-unsafe': ['error', { checkAliases: true }],
    'react/no-unstable-nested-components': ['error', { allowAsProps: false }],
    'react/no-unused-class-component-methods': 'error',
    'react/no-unused-prop-types': 'error', //FIXME: it rule triggers wrong sometimes; I keep it as enabled until errors a few
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': ['error', 'disallow-in-func'],
    'react/prefer-es6-class': 0, //probably, it'll more actual prefer function component instead of any class;
    'react/prefer-exact-props': 0, //TS catch this
    'react/prefer-read-only-props': 0, //for Flow only
    'react/prefer-stateless-function': ['error', { ignorePureComponents: false }],
    'react/prop-types': 0, //TS catch this
    'react/react-in-jsx-scope': 0, //deprecated for React 17+
    'react/require-default-props': ['error', { forbidDefaultForRequired: true }],
    'react/require-optimization': 'error',
    'react/require-render-return': 0, //it works only for class components but TS catch this
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/sort-comp': [
      'error',
      {
        order: ['static-variables', 'static-methods', 'lifecycle', 'everything-else', 'rendering'],
        groups: {
          rendering: ['/^render.+$/', 'render'],
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'state',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
        },
      },
    ],
    'react/sort-prop-types': 0, //we don't use PropTypes
    'react/state-in-constructor': ['error', 'always'],
    'react/static-property-placement': 0, // rule 'react/sort-comp' is enough
    'react/style-prop-object': 0, //TS catch this
    'react/void-dom-elements-no-children': 'error',
  }

  const rulesByJSX = {
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-child-element-spacing': 0, // just code formatting
    'react/jsx-closing-bracket-location': 0, // just code formatting
    'react/jsx-closing-tag-location': 0, // just code formatting
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'ignore',
        children: 'never',
        // propElementValues: 'always', //FIXME: doesn't work
      },
    ],
    'react/jsx-curly-newline': 0, // just code formatting
    'react/jsx-curly-spacing': 0, // just code formatting
    'react/jsx-equals-spacing': 0, // just code formatting
    'react/jsx-filename-extension': 0, //it doesn't work correctly
    'react/jsx-first-prop-new-line': 0, // just code formatting
    'react/jsx-fragments': 'error',
    'react/jsx-handler-names': 0,
    'react/jsx-indent': 0, // just code formatting
    'react/jsx-indent-props': 0, // just code formatting
    'react/jsx-key': [
      'error',
      { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true /* FIXME: doesn't work: warnOnDuplicates: true*/ },
    ],
    'react/jsx-max-depth': ['error', { max: 3 }],
    'react/jsx-max-props-per-line': 0, // just code formatting
    'react/jsx-newline': 0, //it is no enough flexible so will be better divide manually
    'react/jsx-no-bind': [
      'error',
      {
        ignoreDOMComponents: false,
        ignoreRefs: false,
        allowArrowFunctions: false,
        allowFunctions: false,
        allowBind: false,
      },
    ],
    'react/jsx-no-comment-textnodes': 0,
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-duplicate-props': 0, //TS catch this
    'react/jsx-no-literals': 0,
    'react/jsx-no-script-url': 0, //rule 'no-script-url' checks this
    'react/jsx-no-target-blank': 0, //deprecated for modern browsers
    'react/jsx-no-undef': 0, //TS catch this
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-one-expression-per-line': 0, // just code formatting
    'react/jsx-pascal-case': ['error', { allowAllCaps: true, allowNamespace: true, allowLeadingUnderscore: true }],
    'react/jsx-props-no-multi-spaces': 0, // just code formatting
    'react/jsx-props-no-spreading': 0,
    'react/jsx-sort-default-props': 0, // it's better group variables by logic instead of stupid auto logic
    'react/jsx-sort-props': 0, // it's better group variables by logic instead of stupid auto logic
    'react/jsx-space-before-closing': 0, //deprecated
    'react/jsx-tag-spacing': 0, // just code formatting
    'react/jsx-uses-react': 0, //deprecated for React 17+
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 0, // just code formatting
  }

  return { ...rulesByReact, ...rulesByJSX }
}
