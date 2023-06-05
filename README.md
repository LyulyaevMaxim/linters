# About this project
I manually created this configuration to additionally improve the code quality of projects where I'm working.

My goal is to make the code more uniform and reduce the time which team spends on code review because of enough strict checks.

Perhaps, you can think that some rules are wrongly enabled or disabled. It's okay :)

I no use any ready configurations of any community.
Different configurations often has conflicts, and you should disable unused rules and can loss useful rules.
So I think that manual settings are still more clear and easy to supporting.

And so I just parsed all rules of some useful plugins, then read description for every rule and manually enable some of them with custom settings :)

This repository used as monorepo, each package has its own `README` and documentation describing usage:
* [eslint-config-crazy-strict](./eslint-config-crazy-strict)
* [eslint-config-react-crazy-strict](./eslint-config-react-crazy-strict)
* [typescript-config-crazy-strict](./typescript-config-crazy-strict)
* [prettier-config](./prettier-config)

You can find examples of using [here](./examples).