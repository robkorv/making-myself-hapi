var Hapi = require('hapi');
var path = require('path');

// Run server at default localhost:8080 or accept a port from commandline, parse
// it as a Number object.
var server = new Hapi.Server('localhost', Number(process.argv[2] || 8080));

server.route({
    method: 'GET',
    path: '/',
    handler: {
        file: path.join(__dirname, '/index.html')
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
