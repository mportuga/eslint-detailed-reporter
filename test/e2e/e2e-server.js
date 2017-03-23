const http = require('http'),
	fs = require('fs');


// Creates a simple HTML server so that we can run protractor against the example report
// Credit to David Granado and streppel on http://stackoverflow.com/questions/4720343/loading-basic-html-in-node-js
fs.readFile('./example/example-report.html', function createSimpleServer(err, html) {
	'use strict';

	const port = 9999;

	console.log('Starting example server on port ' + port + '...');
	if (err) {
		throw err;
	}
	http.createServer(function(request, response) {
		response.writeHeader(200, {'Content-Type': 'text/html'});
		response.write(html);
		response.end();
	}).listen(port);
});
