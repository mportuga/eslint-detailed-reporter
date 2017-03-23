// Example grabbed from https://github.com/saucelabs-sample-test-frameworks/JS-Protractor-Selenium/blob/master/conf.js
exports.config = {
	sauceUser: process.env.SAUCE_USERNAME,
	sauceKey: process.env.SAUCE_ACCESS_KEY,

	//seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',
	specs: ['e2e/**/*.spec.js'],

	multiCapabilities: [
		{
			base: 'SauceLabs',
			browserName: 'chrome'
		},
		{
			base: 'SauceLabs',
			browserName: 'firefox'
		}
	],

	onComplete: function() {
		var printSessionId = function(jobName){
			browser.getSession().then(function(session) {
				console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
			});
		};

		printSessionId('ESLint Detailer Reporter');
	}
};
