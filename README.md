# About this project
I manually created this configuration to additionally improve the code quality of projects where I'm working.

My goal is to make the code more uniform and reduce the time which team spends on code review because of enough strict checks.

Probably, you can think that some rules are wrongly enabled or disabled. It's okay :)

I no use any ready configurations of any community.
Different configurations often has conflicts, and you should disable unused rules and can loss useful rules.
So I think that manual settings are still more clear and easy to supporting.

And so I just parsed all rules of some useful plugins, then read description for every rule and manually enable some of them with custom settings :)

#### Current list of used plugins
* [ESLint](https://eslint.org/docs/rules/)
* [TypeScript-ESLint](https://typescript-eslint.io/rules/)
* [TSConfig](https://www.typescriptlang.org/tsconfig)
* [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
* [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
* [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)
* [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)

# How to use
0. Run `nvm use` to sync NodeJS version via [Node Version Manager](https://github.com/nvm-sh/nvm) (or check `.nvmrc`)
1. Run `yarn install` from the root of the project to install all dependencies from `workspaces`
2. It's all. Now you can use `lint:fix` and `lint:check`.

# Recommendations
Some errors can be fixed automatically via running with --fix. 
Others can be really easily fixed manually, and it shouldn't take more time. 
But checking these rules can distract from development and slow down real-time checks (compilation; IDEA; etc.). 

For these reasons, I started to enable the same rules only on the `CI` flag. 
All commands `lint:*` have it by default.

So I recommend to run `lint:fix && format:fix` before commit. 
Also, you can use `lint:check && format:check` on Git hooks and your CI.