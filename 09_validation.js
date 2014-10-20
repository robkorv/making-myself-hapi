var Hapi = require('hapi');
var Joi = require('joi');

// Run server at default localhost:8080 or accept a port from commandline, parse
// it as a Number object.
var server = new Hapi.Server('localhost', Number(process.argv[2] || 8080));

server.route({
    method: 'GET',
    path: '/chickens/{breed}',
    handler: function (request, reply) {
        reply('Hello ' + request.params.breed);
    },
    config: {
        validate: {
            params: {
                breed: Joi.string().required()
            }
        }
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
