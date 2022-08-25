const { fixable, uncritical, projectNamePattern } = require('./helpersForRules')

module.exports = {
  rulesOfStylelint,
}

function rulesOfStylelint() {
  return {
    'alpha-value-notation': ['number', { ...fixable, exceptProperties: [] }],
    'annotation-no-unknown': [true, { ignoreAnnotations: [] }],
    'at-rule-allowed-list': null, //no ideas
    'at-rule-disallowed-list': null, //no ideas
    'at-rule-no-unknown': [true, { ignoreAtRules: [] }],
    'at-rule-no-vendor-prefix': [true, fixable],
    'at-rule-property-required-list': null, //no ideas
    'block-no-empty': [true, { ...uncritical, ignore: [] }],
    'color-function-notation': ['modern', fixable],
    'color-hex-alpha': ['never', uncritical],
    'color-hex-length': ['long', fixable],
    'color-named': ['always-where-possible', uncritical],
    'color-no-hex': [true, uncritical],
    'color-no-invalid-hex': true,
    'comment-no-empty': [true, uncritical],
    'comment-pattern': null, //no ideas
    'comment-word-disallowed-list': null, //no ideas
    'custom-media-pattern': [projectNamePattern],
    'custom-property-no-missing-var-function': true,
    'custom-property-pattern': [projectNamePattern],
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': [true, { ignore: ['consecutive-duplicates'] }],
    'declaration-block-no-redundant-longhand-properties': null, //shorthand properties is more complex
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-single-line-max-declarations': [10, uncritical], //maybe it should be less
    'declaration-no-important': [true, uncritical],
    'declaration-property-max-values': null, //no ideas
    'declaration-property-unit-allowed-list': null, //use '"declaration-property-unit-disallowed-list" instead of its
    'declaration-property-unit-disallowed-list': [
      {
        'font-size': ['px'],
        'line-height': ['px'],
      },
      {
        ...uncritical,
        ignore: [],
      },
    ],
    'declaration-property-value-allowed-list': null, //no ideas
    'declaration-property-value-disallowed-list': null, //no ideas
    'font-family-name-quotes': ['always-unless-keyword', fixable],
    'font-family-no-duplicate-names': [true, { ignoreFontFamilyNames: [] }],
    'font-family-no-missing-generic-family-keyword': [true, { ignoreFontFamilies: [] }],
    'font-weight-notation': ['numeric', uncritical],
    'function-allowed-list': null, //have no idea which functions should be allowed
    'function-calc-no-unspaced-operator': true,
    'function-disallowed-list': null, //have no idea which functions should be disallowed
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-no-unknown': [true, { ignoreFunctions: [] }],
    'function-url-no-scheme-relative': true,
    'function-url-quotes': ['always', uncritical],
    'function-url-scheme-allowed-list': null, //useful when we want to limit domains where we store our files
    'function-url-scheme-disallowed-list': null, //'function-url-scheme-allowed-list' is enough
    'hue-degree-notation': null, //don't see issue in that
    'import-notation': ['string', fixable],
    'keyframe-block-no-duplicate-selectors': [true, { disallowInList: false }],
    'keyframe-declaration-no-important': true,
    'keyframe-selector-notation': ['percentage', fixable],
    'keyframes-name-pattern': [projectNamePattern, uncritical], //should be rewritten to every project
    'length-zero-no-unit': [true, { ...fixable, ignore: [] }],
    'max-nesting-depth': [4, { ...uncritical, ignore: ['blockless-at-rules'] }],
    'media-feature-name-allowed-list': null, //no ideas
    'media-feature-name-disallowed-list': null, //no ideas
    'media-feature-name-no-unknown': [true, { ignoreMediaFeatureNames: [] }],
    'media-feature-name-no-vendor-prefix': [true, fixable],
    'media-feature-name-value-allowed-list': null, //custom for every project
    'named-grid-areas-no-invalid': true,
    'no-descending-specificity': [true, { ignore: [] }],
    'no-duplicate-at-import-rules': [true, uncritical],
    'no-duplicate-selectors': null,
    'no-empty-source': [true, uncritical],
    'no-invalid-double-slash-comments': true,
    'no-invalid-position-at-import-rule': [true, { ignoreAtRules: [] }],
    'no-irregular-whitespace': null, //just formatting
    'no-unknown-animations': [true, uncritical],
    'number-max-precision': [2],
    'property-allowed-list': null, //no desire to limit it
    'property-disallowed-list': null, //no desire to limit it
    'property-no-unknown': [
      true,
      {
        ignoreProperties: [],
        ignoreSelectors: [],
        ignoreAtRules: [],
        checkPrefixed: true,
      },
    ],
    'property-no-vendor-prefix': [true, { ...fixable, ignoreProperties: [] }],
    'rule-empty-line-before': null,
    'rule-selector-property-disallowed-list': null, //no ideas
    'selector-class-pattern': null, //useless after creation CSS Modules
    'selector-combinator-allowed-list': null, //no ideas
    'selector-combinator-disallowed-list': null, //no ideas
    'selector-disallowed-list': null, //no ideas
    'selector-id-pattern': projectNamePattern,
    'selector-max-attribute': null, //didn't see this issue in practice
    'selector-max-class': null, //didn't see this issue in practice
    'selector-max-combinators': null, //didn't see this issue in practice
    'selector-max-compound-selectors': 5,
    'selector-max-id': 1,
    'selector-max-pseudo-class': 3,
    'selector-max-specificity': null, //no ideas
    'selector-max-type': 3,
    'selector-max-universal': 1,
    'selector-nested-pattern': null, //no ideas
    'selector-no-qualifying-type': null, //didn't see this issue in practice
    'selector-no-vendor-prefix': [true, { ...fixable, ignoreSelectors: [] }],
    'selector-not-notation': ['complex', fixable],
    'selector-pseudo-class-allowed-list': null, //no ideas
    'selector-pseudo-class-disallowed-list': null, //no ideas
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: [] }],
    'selector-pseudo-element-allowed-list': null, //no ideas
    'selector-pseudo-element-colon-notation': ['double', fixable],
    'selector-pseudo-element-disallowed-list': null, //no ideas
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: [] }],
    'selector-type-no-unknown': [true, { ignore: ['custom-elements'], ignoreTypes: [] }],
    'shorthand-property-no-redundant-values': [true, fixable],
    'string-no-newline': true,
    'time-min-milliseconds': null, //probably, it's no real issue
    'unicode-bom': null,
    'unit-allowed-list': null, //maybe, later
    'unit-disallowed-list': null, //maybe, later
    'unit-no-unknown': [true, { ignoreUnits: [], ignoreFunctions: [] }],
    'value-no-vendor-prefix': [true, { ...fixable, ignoreValues: [] }],
  }
}
