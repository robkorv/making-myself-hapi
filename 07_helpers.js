var Hapi = require('hapi');
var path = require('path');

// Setup the server with handlebars template support
var options = {
    views: {
        path: path.join(__dirname, '/templates'),
        engines: {
            html: require('handlebars')
        },
        helpersPath: path.join(__dirname, '/helpers')
    }
};

// Run server at default localhost:8080 or accept a port from commandline, parse
// it as a Number object.
var server = new Hapi.Server('localhost',
                             Number(process.argv[2] || 8080),
                             options);

server.route({
    method: 'GET',
    path: '/',
    handler: {
        view: 'helper.html'
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
