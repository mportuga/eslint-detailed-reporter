# eslint-detailed-reporter

[![Build](https://travis-ci.org/mportuga/eslint-detailed-reporter.svg?branch=master)](https://travis-ci.org/mportuga/eslint-detailed-reporter)
[![npm version](https://img.shields.io/npm/v/eslint-detailed-reporter.svg)](https://www.npmjs.com/package/eslint-detailed-reporter)
[![Downloads/month](https://img.shields.io/npm/dm/eslint-detailed-reporter.svg)](https://www.npmjs.com/package/eslint-detailed-reporter)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mportuga/eslint-detailed-reporter/blob/master/LICENSE)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/eslint-detailed-reporter/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![GitHub issues](https://img.shields.io/github/issues/mportuga/eslint-detailed-reporter.svg?style=flat)](https://github.com/mportuga/eslint-detailed-reporter/issues)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmportuga%2Feslint-detailed-reporter.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmportuga%2Feslint-detailed-reporter?ref=badge_shield)

> A Detailed HTML reporter for ESLINT based on the code written by Julian Laval for [eslint's default HTML reporter](http://eslint.org/docs/user-guide/formatters/#html) and inspired by Sven Piller's [eslint-formatter-markdown](https://github.com/sven-piller/eslint-formatter-markdown) and [mochajs](https://mochajs.org/)'s HTML coverage report.

## Features

- Total count of problems on linted files(counting both errors and warnings)
- Tables with top warnings and errors in the linted files.
- List of top files with the most problems.
- View of source code with issues for files with issues.
- Summary of issues per file
- Links to the rule descriptions for all default eslint rules, as well as angular and lodash rules.
- Ability to filter file list to just error or warning files.
- Keyboard accessible.
- Can return either multiple files or a single file as the result. (This feature is in BETA).

## Example

[Click here](http://htmlpreview.github.io/?https://github.com/mportuga/eslint-detailed-reporter/blob/master/example/example-report.html) to view an example report.

[Click here](http://htmlpreview.github.io/?https://github.com/mportuga/eslint-detailed-reporter/blob/master/example/success-report.html) to view an example success report.

## Installation

```sh
npm install eslint-detailed-reporter --save-dev
```

## Usage

### With [ESLint CLI](http://eslint.org/docs/user-guide/command-line-interface):

```sh
# Single file
eslint file.js -f node_modules/eslint-detailed-reporter/lib/detailed.js -o report.html

# Recurse current directory
eslint . -f node_modules/eslint-detailed-reporter/lib/detailed.js -o report.html

# Recurse current directory with multiple files as the result
eslint . -f node_modules/eslint-detailed-reporter/lib/detailed-multi.js -o report.html
```

### With [Grunt ESLint](https://www.npmjs.com/package/grunt-eslint):

```js
module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		eslint: {
			options: {
				outputFile: 'example/example-report.html',
				format: require('eslint-detailed-reporter')
			},
			target: ['test/**/*.js']
		}
	});

	grunt.registerTask('default', ['eslint']);
};
```

* If you want to use the new multi file feature, you must use the full path to the detailed-multi file in the format section and
add --outputDirectory=<your directory here> to the command line.

### With [Gulp ESLint](https://github.com/adametry/gulp-eslint):

```js
var eslint   = require('gulp-eslint'),
    reporter = require('eslint-detailed-reporter'),
    path     = require('path'),
    fs       = require('fs');

gulp.src(['js/**/*.js'])
  .pipe(eslint())
  .pipe(eslint.format(reporter, function(results) {
      fs.writeFileSync(path.join(__dirname, 'report-results.html'), results);
    })
  );
```

### Configuring Summary Results

By default the report will list the top 5 offensive rules and files. You can configure the number of results you wish to display in the summary by using these environment variables. 

```js
ESLINT_DETAILED_REPORT_MAX_RULES
ESLINT_DETAILED_REPORT_MAX_FILES
```

Setting env vars will vary based on your OS and usage. When using the ESLINT CLI for example, you could just prepend your vars.

```js
ESLINT_DETAILED_REPORT_MAX_RULES=10 ESLINT_DETAILED_REPORT_MAX_FILES=10 eslint file.js -f node_modules/eslint-detailed-reporter/lib/detailed.js -o report.html
```

### Configuring Details Results

If you have a lot of problems, you might want to limit the number of files displayed in the Details section of the report. You can use the `ESLINT_DETAILED_REPORT_LIMIT_DETAILS` env var to only show details for your top offending files.

```js
ESLINT_DETAILED_REPORT_LIMIT_DETAILS=true eslint file.js -f node_modules/eslint-detailed-reporter/lib/detailed.js -o report.html
```


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

For more detailed contributing instructions checkout out our [contributing documentation](./.github/CONTRIBUTING.md)!

## Release History

See [CHANGELOG](./CHANGELOG.md)

## License

[MIT](https://opensource.org/licenses/MIT) © Marcelo S. Portugal


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmportuga%2Feslint-detailed-reporter.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmportuga%2Feslint-detailed-reporter?ref=badge_large)