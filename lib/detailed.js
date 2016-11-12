/**
 * @fileoverview Detailed HTML reporter based on the code written by Julian Laval for eslint's default reporter
 * and inspired by Sven Piller's eslint-formatter-markdown
 * @author Marcelo S. Portugal <marceloquarion@gmail.com>
 */
'use strict';

const _ = require('lodash'),
	fs = require('fs'),
	path = require('path');

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const pageTemplate = _.template(fs.readFileSync(path.join(__dirname, 'templates/main-page.html'), 'utf-8')),
	codeWrapperTemplate = _.template(fs.readFileSync(path.join(__dirname, 'templates/code-wrapper.html'), 'utf-8')),
	codeTemplate = _.template(fs.readFileSync(path.join(__dirname, 'templates/code.html'), 'utf-8')),
	issueTemplate = _.template(fs.readFileSync(path.join(__dirname, 'templates/issue.html'), 'utf-8')),
	rulesTemplate = _.template(fs.readFileSync(path.join(__dirname, 'templates/rules.html'), 'utf-8')),
	resultTemplate = _.template(fs.readFileSync(path.join(__dirname, 'templates/result.html'), 'utf-8'));

/**
 * Given a word and a count, append an s if count is not one.
 * @param {string} word A word in its singular form.
 * @param {int} count A number controlling whether word should be pluralized.
 * @returns {string} The original word with an s on the end if count is not one.
 */
function pluralize(word, count) {
	return (count === 1 ? word : `${word}s`);
}

/**
 * Renders text along the template of x problems (x errors, x warnings)
 * @param {string} totalErrors Total errors
 * @param {string} totalWarnings Total warnings
 * @returns {string} The formatted string, pluralized where necessary
 */
function renderSummary(totalErrors, totalWarnings) {
	const totalProblems = totalErrors + totalWarnings;
	let renderedText = `${totalProblems} ${pluralize('problem', totalProblems)}`;

	if (totalProblems !== 0) {
		renderedText += ` (${totalErrors} ${pluralize('error', totalErrors)}, ${totalWarnings} ${pluralize('warning', totalWarnings)})`;
	}
	return renderedText;
}

/**
 * Get the color based on whether there are errors/warnings...
 * @param {string} totalErrors Total errors
 * @param {string} totalWarnings Total warnings
 * @returns {string} The color code (success = green, warning = yellow, error = red)
 */
function renderColor(totalErrors, totalWarnings) {
	if (totalErrors !== 0) {
		return severityString(2);
	} else if (totalWarnings !== 0) {
		return severityString(1);
	}
	return severityString(0);
}

/**
 * Converts the severity number to a string
 * @param {int} severity severity number
 * @returns {string} The color string based on severity number (0 = success, 1 = warning, 2 = error)
 */
function severityString(severity) {
	const colors = ['success', 'warning', 'error'];

	return colors[severity];
}

function renderSourceCode(source, messages, parentIndex) {
	const sourceCode = source || 'No Issues';

	return codeWrapperTemplate({
		parentIndex,
		sourceCode: _.map(sourceCode.split('\n'), function(code, lineNumber) {
			const lineMessages = _.filter(messages, {line: lineNumber + 1}),
				severity = _.get(lineMessages[0], 'severity') || 0;

			let template = '';

			if (!_.isEmpty(lineMessages)) {
				_.map(lineMessages, function(message) {
					template += issueTemplate({
						severity: severityString(message.severity),
						severityName: message.severity === 1 ? 'Warning' : 'Error',
						column: message.column,
						message: message.message,
						ruleId: message.ruleId
					});
				});
			}

			template += codeTemplate({
				lineNumber: lineNumber + 1,
				code,
				severity: severityString(severity)
			});

			return template;
		}).join('\n')
	});
}

/**
 * @param {Array} results Test results.
 * @returns {string} HTML string describing the results.
 */
function renderResults(results) {
	return _.map(results, function(result, index) {
		return resultTemplate({
				index,
				color: renderColor(result.errorCount, result.warningCount),
				filePath: result.filePath,
				summary: renderSummary(result.errorCount, result.warningCount)
			}) + renderSourceCode(result.source, result.messages, index);
	}).join('\n');
}

/**
 * @param {Array} rules Test rules.
 * @returns {string} HTML string describing the rules.
 */
function renderRules(rules) {
	return _(rules).groupBy('ruleId').map(function(ruleMessages, ruleId) {
		return rulesTemplate({
			ruleId,
			ruleCount: _.size(ruleMessages)
		});
	}).orderBy(['ruleCount'], ['desc']).take(5).value().join('\n');
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = function(results) {
	const rules = _(results).map('messages').flatten().groupBy('severity').value();

	let totalErrors = 0,
		totalWarnings = 0;

	// Iterate over results to get totals
	results.forEach(function(result) {
		totalErrors += result.errorCount;
		totalWarnings += result.warningCount;
	});

	return pageTemplate({
		reportColor: renderColor(totalErrors, totalWarnings),
		reportSummary: renderSummary(totalErrors, totalWarnings),
		results: renderResults(results),
		topErrors: renderRules(rules['2']),
		topWarnings: renderRules(rules['1'])
	});
};
