module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		eslint: {
			options: {
				outputFile: 'example/example-report.html',
				format: './lib/detailed.js'
			},
			target: ['fixture/**/*.js']
		},
		protractor: {
			options: {
				configFile: 'test/e2e.conf.js', // Default config file
				keepAlive: true, // If false, the grunt process stops when the test fails.
				noColor: false, // If true, protractor will not use colors in its output.
				args: {
					baseUrl: 'http://127.0.0.1:9999'
				}
			},
			local: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
				options: {}
			},
			ci: {
				options: {
					configFile: 'test/e2e.ci.conf.js'
				}
			}
		}
	});

	grunt.registerTask('default', ['eslint']);
};