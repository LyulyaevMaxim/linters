# `@lyulyaev-maxim/eslint-config-react-crazy-strict`

![npm version](https://badge.fury.io/js/@lyulyaev-maxim%2Feslint-config-react-crazy-strict.svg)
![npm](https://img.shields.io/npm/dw/@lyulyaev-maxim/eslint-config-react-crazy-strict)
![GitHub](https://img.shields.io/github/license/LyulyaevMaxim/linters)

### [About this](../README.md)

### How to use
0. Install
   ```
   yarn add --dev @lyulyaev-maxim/eslint-config-react-crazy-strict
   ```
1. Connect to your ESLint configuration: 
   ```
   extends: ['@lyulyaev-maxim/eslint-config-react-crazy-strict']
   ```
2. Run to check your files:
   ```
   cross-env CI=true yarn eslint --quiet --cache --ext .ts,.tsx /
   ```
   
### Recommendations
Some errors can be fixed automatically via running with `--fix`.   
Others can be really easily fixed manually, and it shouldn't take a lot of time.

But fixing for these rules in during development may be annoying, so I to enable such rules as warning when the `CI` flag isn't `true`.

### List of used plugins
* [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
* [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)