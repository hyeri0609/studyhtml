'use strict';
var request = require('supertest');
var sinon = require('sinon');
var should = require('should');

var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');

describe('picturejs api', function() {
    var app;
    
    before(function() {
        app = express();
        //app.set('port', (process.env.PORT || 8080));
        app.set('views', './views');
        app.set('view engine', 'ejs');

        app.use(express.static('./public'));
        app.use(favicon('./public/icons/favicon.ico'));
        app.use(bodyParser.urlencoded({ extended: true }));
        
        var apirouter = express.Router();
        apirouter.get('/', function(req, res) {
            //res.set('Content-Type', 'application/json');
            res.json({ message: 'ok' });   
        });
        var picture = require('../../api/picture');
        picture(apirouter);
        
        app.use('/api', apirouter);
    });
    
    describe('start express and add picture.js api', function() {
        it('should response from /api', function(done) {
            request(app.listen())
                .get('/api')
                .set('Accept', 'application/json')
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function(err, res) {
                    //console.log(res);
                    if (err) return done(err);
                    done();
                });
        });
    });
});