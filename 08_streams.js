var Hapi = require('hapi');
var path = require('path');
var fs = require('fs');
var rot13 = require('rot13-stream')();

// Run server at default localhost:8080 or accept a port from commandline, parse
// it as a Number object.
var server = new Hapi.Server('localhost', Number(process.argv[2] || 8080));

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        var file = path.join(__dirname, '/stream.txt');
        var stream = fs.createReadStream(file);
        reply(stream.pipe(rot13));
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
