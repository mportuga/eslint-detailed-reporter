// Adding some basic smoke tests
describe('ESLint Report', function() {
	'use strict';

	beforeEach(function() {
		browser.ignoreSynchronization = true; // Disables waiting for Angular
		browser.get('/');
	});

	it('should load', function() {
		expect(element(by.id('overview')).getText()).toEqual('ESLint Report - Error');
	});

	describe('Summary section', function() {
		it('should have a title', function() {
			expect(element(by.css('#summary h2.page-header')).getText()).toEqual('Summary');
		});
		it('should have a "Top errors" and a "Top warnings" table', function() {
			expect(element(by.css('#summary h3.text-error')).getText()).toEqual('Top errors');
			expect(element(by.css('#summary h3.text-error + table.summary-table')).isPresent()).toBe(true);
			expect(element(by.css('#summary h3.text-warning')).getText()).toEqual('Top warnings');
			expect(element(by.css('#summary h3.text-warning + table.summary-table')).isPresent()).toBe(true);
		});
		it('should have a "Most Problems" table', function() {
			expect(element.all(by.css('#summary h3')).get(2).getText()).toEqual('Most Problems');
		});
	});
	describe('Details section', function() {
		it('should have a title', function() {
			expect(element(by.css('#details h2.page-header')).getText()).toEqual('Details');
		});
		it('should have a filter section', function() {
			expect(element(by.css('#details fieldset.filters')).isPresent()).toBe(true);
		});
		it('should have a file overview table', function() {
			expect(element(by.id('fileOverview')).isPresent()).toBe(true);
		});
		describe('when the user click on a lint result', function() {
			describe('when the result has no errors', function() {
				it('should do nothing', function() {
					expect(element.all(by.css('#fileOverview tr.bg-success')).first().click().getAttribute('class')).not.toContain('open');
				});
			});
			describe('when the result has errors', function() {
				it('should open the accordion', function() {
					var lintResult = element.all(by.css('#fileOverview tr.bg-error')).first(),
						lintResultSummary = element(by.css('#fileOverview tr.f-1'));

					expect(lintResult.getAttribute('class')).not.toContain('open');
					expect(lintResultSummary.getAttribute('class')).toContain('hidden');

					lintResult.click();

					expect(lintResult.getAttribute('class')).toContain('open');
					expect(lintResultSummary.getAttribute('class')).not.toContain('hidden');
				});
			});
		});
	});
});
