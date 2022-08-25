# `@lyulyaev-maxim/stylelint-config-crazy-strict`

![npm version](https://badge.fury.io/js/@lyulyaev-maxim%2Fstylelint-config-crazy-strict.svg)
![npm](https://img.shields.io/npm/dw/@lyulyaev-maxim/stylelint-config-crazy-strict)
![GitHub](https://img.shields.io/github/license/LyulyaevMaxim/linters)

### [About this](../README.md)

### How to use
0. Install
   ```
   yarn add --dev @lyulyaev-maxim/stylelint-config-crazy-strict
   ```
1. Connect to your Stylelint configuration:
   ```
   extends: ['@lyulyaev-maxim/stylelint-config-crazy-strict']
   ```
2. Use commands to check your files:
   ```
   "css:check": "cross-env CI=true yarn node ./node_modules/stylelint/bin/stylelint --quiet --cache src/",
   "css:fix": "yarn css:check --fix src/**/*.{css,scss}",
   ```

### Recommendations
Some errors can be fixed automatically via running with `--fix`.   
Others can be really easily fixed manually, and it shouldn't take a lot of time.

But fixing for these rules in during development may be annoying, so I to enable such rules as warning when the `CI` flag isn't `true`.

### List of used plugins
* [Stylelint](https://stylelint.io/user-guide/rules/list)