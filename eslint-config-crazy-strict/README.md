# `@lyulyaev-maxim/eslint-config-crazy-strict`

![npm version](https://badge.fury.io/js/@lyulyaev-maxim%2Feslint-config-crazy-strict.svg)
![npm](https://img.shields.io/npm/dw/@lyulyaev-maxim/eslint-config-crazy-strict)
![GitHub](https://img.shields.io/github/license/LyulyaevMaxim/linters)

### [About this](../README.md)

### How to use

0. Install
   ```
   yarn add --dev @lyulyaev-maxim/eslint-config-crazy-strict
   ```
1. Connect to your ESLint configuration:
   ```
   extends: ['@lyulyaev-maxim/eslint-config-crazy-strict']
   ```
2. Run to check your files:
   ```
   cross-env CI=true yarn eslint --quiet --cache --ext .ts,.tsx /
   ```

### Recommendations

Some errors can be fixed automatically via running with `--fix`.   
Others can be really easily fixed manually, and it shouldn't take a lot of time.

But fixing for these rules in during development may be annoying, so I to enable such rules as warning when the `CI`
flag isn't `true`.

### List of used plugins

* [ESLint](https://eslint.org/docs/rules/)
* [TypeScript-ESLint](https://typescript-eslint.io/rules/)
* [TSConfig](https://www.typescriptlang.org/tsconfig)
* [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
* [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)
* [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
* [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)

### Rules

Here I just grouped used rules by some categories.

* if 🔧 has ✅ then rule is automatically fixable by the --fix CLI option
* if 💥 has ✅ then we can refactor for this rule later (e.g., before publishing for code review) because it's easy to fix

#### Function

| Name                                                                                                                                                   | Description                                                                                    | 🔧  | 💥  | 👀  |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------|:----|:----|-----|
| [unicorn/consistent-function-scoping](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-scoping.md)       | Move function definitions to the highest possible scope to improve readability and performance |     | ️   |     |
| [unicorn/no-object-as-default-parameter](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-object-as-default-parameter.md) | Disallow the use of objects as default parameters                                              |     | ️   |     |
| [unicorn/prefer-prototype-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-prototype-methods.md)             | Prefer borrowing methods from the prototype instead of the instance                            | ✅   |     |     |
| [unicorn/no-unreadable-iife](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-iife.md)                         | IIFE can be unreadable in some cases                                                           |     |     | +   |

#### Async

| Name                                                                                                                                                         | Description                                                                                              | 🔧  | 💥  | 👀  |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------|:----|:----|-----|
| [unicorn/prefer-top-level-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-top-level-await.md)                       | Use top-level await if it's possible                                                                     |     | ️   |     |
| [unicorn/no-useless-promise-resolve-reject](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-promise-resolve-reject.md) | Disallow useless wrapping the result of an async function in a Promise                                   | ✅   | ️   |     |
| [unicorn/no-thenable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-thenable.md)                                             | Disallow creation "thenable" objects                                                                     |     | ️   |     |
| [unicorn/no-await-expression-member](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-expression-member.md)               | Prefer simplified "await" expressions instead of `await (await (await promise).callback1()).callback2()` | ✅   | ️   | ✅   |

#### Conditions

| Name                                                                                                                                                                                      | Description                                                           | 🔧  | 💥  | 👀  |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------|:----|:----|-----|
| [unicorn/no-lonely-if](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-lonely-if.md)                                                                        | Decrease deep of nesting `if` when it's possible                      | ✅   |     |     |
| [unicorn/prefer-logical-operator-over-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-logical-operator-over-ternary.md)                        | Use `a ? x : y` instead of `if (a) { x } else { y }`                  | ✅   |     | +   |
| [unicorn/prefer-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-ternary.md)                                                                    | Use `&&` or `??` instead of useless `a ? a : b`                       |     |     | +   |
| [no-nested-ternary](https://eslint.org/docs/latest/rules/no-nested-ternary) or [unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nested-ternary.md) | Disallow nested ternary expressions                                   | ✅   |     | +   |
| [unicorn/prefer-switch](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-switch.md)                                                                      | Use `switch` instead of `if (a === 'x') else if (a === 'y') else ...` | ✅   |     | +   |
| [unicorn/no-useless-switch-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-switch-case.md)                                                    | Decrease amount of conditions of `switch` when it's possible          |     |     |     |
| [unicorn/switch-case-braces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-braces.md)                                                            | Enforce consistent brace style for case clauses                       | ✅   |     | +   |
| [unicorn/explicit-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/explicit-length-check.md)                                                      | Checking for zero length only via `=== 0`                             | ✅   | ️   | +   |
| [unicorn/no-useless-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-length-check.md)                                                  | Simplify checking for conditions with `arr.some()` of `arr.filter()`  | ✅   | ️   |     |
| [unicorn/no-typeof-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-typeof-undefined.md)                                                          | Use only `someVar === undefined`                                      | ✅   |     | +   |

#### Iterating

| Name                                                                                                                                             | Description                                                       | 🔧  | 💥  | 👀  |
|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------|:----|:----|-----|
| [unicorn/no-array-callback-reference](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-callback-reference.md) | Prevent passing a function reference directly to iterator methods |     | ❗️  |     |
| [unicorn/no-array-for-each](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md)                     | Prefer `for…of` over the `forEach` method                         | ✅   | ️   |     |
| [unicorn/no-for-loop](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-for-loop.md)                                 | Prefer `for…of` over the `reduce`                                 | ✅   | ️   |     |
| [unicorn/no-array-reduce](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reduce.md)                         | Prefer `for…of` over the `for(...)`                               |     | ️   |     |

#### Array

| Name                                                                                                                                                         | Description                                                                     | 🔧  | 💥  | 👀  |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------|:----|:----|-----|
| [unicorn/no-instanceof-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-instanceof-array.md)                             | Use `Array.isArray()` instead of `instanceof Array`                             | ✅   |     | +   |
| [unicorn/prefer-array-flat](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat.md)                                 | Use `arr.flat()` instead of legacy techniques to flatten arrays                 | ✅   |     | +   |
| [unicorn/prefer-array-flat-map](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat-map.md)                         | Use `arr.flatMap()` instead of `arr.map(...).flat()`                            | ✅   |     |     |
| [unicorn/prefer-array-find](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-find.md)                                 | Use `arr.find()` or `arr.findLast()` instead of `arr.filter(...).at(0)`         | ✅   |     | +   |
| [unicorn/prefer-array-index-of](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-index-of.md)                         | Use `arr.indexOf(value)` instead of `arr.findIndex(x => x === value)`           | ✅   |     | +   |
| [unicorn/prefer-array-some](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-some.md)                                 | Use `arr.some()` instead of `arr.filter().length`                               | ✅   |     |     |
| [unicorn/prefer-includes](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-includes.md)                                     | Use `arr.includes()` instead of `arr.some()` or `arr.indexOf()`                 | ✅   |     | +   |
| [unicorn/no-new-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-array.md)                                           | Use `[el]` or `Array.from({ length })` instead of `new Array(el)`               | ✅   |     |     |
| [unicorn/prefer-at](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-at.md)                                                 | Use `arr.at(index)` for index access                                            | ✅   |     | +   |
| [unicorn/prefer-negative-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-negative-index.md)                         | Prefer negative index over `arr.length - index`                                 | ✅   |     | +   |
| [unicorn/prefer-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-spread.md)                                         | Use `...arr` instead of `Array.from()` or `arr1.concat(arr2)` or `arr.slice(0)` | ✅   |     | +   |
| [unicorn/no-unreadable-array-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-array-destructuring.md) | Use `el = arr[3]` or `elemsAfter10 = arr.slice(10)` instead of `[,,, el] = arr` | ✅   |     | +   |
| [unicorn/require-array-join-separator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-array-join-separator.md)           | Use separator argument in `arr.join()`                                          | ✅   |     | +   |
| [unicorn/no-array-push-push](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-push-push.md)                               | Enforce combining multiple Array#push() into one call                           | ✅   |     | +   |
| [unicorn/no-array-method-this-argument](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-method-this-argument.md)         | Disallow using the this argument in array methods                               | ✅   |     | +   |

#### Object

| Name                                                                                                                                           | Description                                                                                                        | 🔧  | 💥  | 👀  |
|:-----------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------|:----|:----|-----|
| [unicorn/prefer-object-from-entries](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-from-entries.md) | Prefer using `Object.fromEntries)` instead of `arr.reduce()` to transform a list of key-value pairs into an object | ✅   | ️   | ✅   |

#### Set

| Name                                                                                                                   | Description                                                                               | 🔧  | 💥  | 👀  |
|:-----------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------|:----|:----|-----|
| [unicorn/prefer-set-has](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-has.md) | It tries to find arrays which can be replaced to Set                                      | ✅   | ️   |     |
| [unicorn/prefer-set-has](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-has.md) | It tries to find Sets which are wrongly converting to array for getting collection's size | ✅   | ️   |     |

#### String

| Name                                                                                                                                                   | Description                                                                | 🔧  | 💥  | 👀  |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------|:----|:----|-----|
| [unicorn/prefer-string-replace-all](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-replace-all.md)           | Use `str.replaceAll(/someRegExp/)` instead of `str.replace(/someRegExp/g)` | ✅   | ️   |     |
| [unicorn/prefer-code-point](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-code-point.md)                           | Use `codePointAt/fromCodePoint` instead of `charCodeAt/fromCharCode`       |     | ️   |     |
| [unicorn/prefer-string-slice](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-slice.md)                       | Prefer `str.slice()` over `str.substr()` and `str.substring()`             | ✅   | ️   | ✅   |
| [unicorn/prefer-string-starts-ends-with](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-starts-ends-with.md) | Prefer `str.startsWith()` and `str.endsWith()` over `someRegExp.test()`    | ✅   | ️   | ✅   |
| [unicorn/prefer-string-trim-start-end](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-trim-start-end.md)     | Prefer `str.trimStart/trimEnd()` over `str.trimLeft/trimRight()`           | ✅   | ️   | ✅   |

#### Error

| Name                                                                                                                         | Description                                            | 🔧  | 💥  | 👀  |
|:-----------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------|:----|:----|-----|
| [unicorn/error-message](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/error-message.md)         | Pass error message to Error always                     |     | ️   |     |
| [unicorn/prefer-type-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-type-error.md) | Enforce throwing TypeError in type checking conditions | ✅   | ️   | ✅   |

#### Numbers

| Name                                                                                                                                       | Description                                                                                         | 🔧  | 💥  | 👀  |
|:-------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------|:----|:----|-----|
| [unicorn/prefer-number-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-properties.md) | Use `Number` static properties instead of global ones (e.g., `Number.isNaN()` instead of `isNaN()`) | ✅   |     |     |

#### RegExp

| Name                                                                                                                           | Description                                                        | 🔧  | 💥  | 👀  |
|:-------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------|:----|:----|-----|
| [unicorn/prefer-regexp-test](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-regexp-test.md) | Prefer `regExp.text()` instead of `str.match()` or `regExp.exec()` | ✅   |     |     |

| Name                                                                                                               | Description | 🔧  |
|:-------------------------------------------------------------------------------------------------------------------|:------------|:----|
| [unicorn/better-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-regex.md) |             | ✅   |

#### DOM

https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-add-event-listener.md
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-append.md
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-dataset.md
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-remove.md
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-text-content.md
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-keyboard-event-key.md
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-dom-apis.md
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-remove-event-listener.md
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-document-cookie.md
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-query-selector.md

#### Optimizations

| Name                                                                                                                               | Description                                              | 🔧  | 💥  | 👀  |
|:-----------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------|:----|:----|-----|
| [unicorn/no-unused-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unused-properties.md) | Disallow unused object properties                        |     | ️   |     |
| [unicorn/no-useless-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-spread.md)       | Disallow `...someArr` and `...someObj` when it's useless | ✅   |     |     |

#### Import/export

| Name                                                                                                                           | Description                                                            | 🔧  | 💥  | 👀  |
|:-------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------|:----|:----|-----|
| [unicorn/prefer-export-from](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-export-from.md) | Prefer `export {} from` instead of `import + export` when re-exporting | ✅   | ️   |     |
| [unicorn/prefer-module](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md)           | Prefer ESM instead of CommonJS                                         | ✅   | ️   |     |
| [unicorn/import-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/import-style.md)             | Enforce specific `import` styles per module                            |     | ️   |     |

#### Other

| Name                                                                                                                                                       | Description                                                                            | 🔧  | 💥  | 👀  |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------|:----|:----|-----|
| [unicorn/no-abusive-eslint-disable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-abusive-eslint-disable.md)               | Enforce specifying the rules to disable ESLint                                         |     |     |     |
| [unicorn/no-useless-fallback-in-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-fallback-in-spread.md)       | Disallow `someObj ?? {}` when it's useless                                             | ✅   |     |     |
| [unicorn/no-useless-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md)                         | Doesn't set `undefined` in cases when result already is `undefined`                    | ✅   |     | +   |
| [unicorn/prefer-native-coercion-functions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-native-coercion-functions.md) | Prefer using String, Number, BigInt, Boolean, and Symbol directly                      | ✅   |     | +   |
| [unicorn/new-for-builtins](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/new-for-builtins.md)                                 | Enforce the use of `new` for all builtins                                              | ✅   |     | +   |
| [unicorn/no-empty-file](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-empty-file.md)                                       | Disallow empty files                                                                   |     |     |     |
| [unicorn/filename-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md)                                       | Enforce a case style for filenames                                                     |     |     |     |
| [unicorn/expiring-todo-comments](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md)                     | Allow TODO comments which have expiry condition (deadline date, package version, etc.) |     |     |     |


