const request = require('request');
const test = require('tape');

test('responds to requests', (t) => {
    t.plan(4);
    request('http://127.0.0.1:8080', (error, response, body) => {
        // No error
        t.false(error);
        // Successful response
        t.equal(response.statusCode, 200);
        // Assert content checks
        t.notEqual(body.indexOf("<title>studyhtml</title>"), -1);
        t.notEqual(body.indexOf("css/main.css"), -1);
    });

});
