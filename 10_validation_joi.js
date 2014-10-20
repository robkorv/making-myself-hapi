var Hapi = require('hapi');
var Joi = require('joi');

// Run server at default localhost:8080 or accept a port from commandline, parse
// it as a Number object.
var server = new Hapi.Server('localhost', Number(process.argv[2] || 8080));

server.route({
    method: 'POST',
    path: '/login',
    handler: function (request, reply) {
        reply('login successful');
    },
    config: {
        validate: {
            payload: Joi.object({
                isGuest: Joi.boolean().required(),
                username: Joi.string().when('isGuest', {
                    is: false,
                    then: Joi.required()
                }),
                accessToken: Joi.string().alphanum(),
                password: Joi.string().alphanum()
            }).without('password', 'accessToken')
        }
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
