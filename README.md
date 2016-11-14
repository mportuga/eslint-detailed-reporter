# eslint-detailed-reporter

[![npm version](https://img.shields.io/npm/v/eslint-detailed-reporter.svg)](https://www.npmjs.com/package/eslint-detailed-reporter)
[![Downloads/month](https://img.shields.io/npm/dm/eslint-detailed-reporter.svg)](https://www.npmjs.com/package/eslint-detailed-reporter)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mportuga/eslint-detailed-reporter/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/mportuga/eslint-detailed-reporter.svg?style=plastic)](https://github.com/mportuga/eslint-detailed-reporter/issues)

> A Detailed HTML reporter for ESLINT based on the code written by Julian Laval for [eslint's default HTML reporter](http://eslint.org/docs/user-guide/formatters/#html) and inspired by Sven Piller's [eslint-formatter-markdown](https://github.com/sven-piller/eslint-formatter-markdown) and [mochajs](https://mochajs.org/)'s HTML coverage report.

## Features

- Total count of problems on linted files(counting both errors and warnings)
- Tables with top 5 warnings and errors in the linted files.
- View of source code with issues for files with issues.
- Links to the rule descriptions for all default eslint rules.

## Example

[Click here](http://htmlpreview.github.io/?https://github.com/mportuga/eslint-detailed-reporter/blob/master/example/example-report.html) to view an example report.

## Dependencies

- [lodash](https://github.com/lodash/lodash): Lodash modular utilities.

## Dev Dependencies

- [eslint](https://github.com/eslint/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-angular](https://github.com/dustinspecker/eslint-config-angular): ESLint shareable config for Angular plugin.
- [eslint-plugin-angular](https://github.com/Gillespie59/eslint-plugin-angular): ESLint rules for your angular project with checks for best-practices, conventions or potential errors.
- [eslint-plugin-lodash](https://github.com/eslint-plugins/eslint-plugin-lodash): Lodash-specific linting rules for ESLint.
- [grunt](http://gruntjs.com/): The JavaScript Task Runner.
- [grunt-cli](https://github.com/gruntjs/grunt-cli): The Grunt command line interface.
- [grunt-eslint](https://github.com/sindresorhus/grunt-eslint): Validate files with ESLint.
- [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks): Load multiple grunt tasks using globbing patterns.

## Contributing

Feel free to contribute!

Fork this repo and run the following commands to get started:

```sh
npm install
npm install -g grunt-cli
npm test
```

After that, just open a [pull request](https://github.com/mportuga/eslint-detailed-reporter/pulls) and I will review it when I can!

## Release History

- 0.5.3 Fixing issue with npm package that caused report not to run
- 0.5.1 Initial release

## License

[MIT](http://opensource.org/licenses/MIT) © Marcelo S. Portugal
